#!/usr/bin/env python3
"""Deploy the isolated public contact endpoint. No email is sent by this script."""
import io
import json
from pathlib import Path
import subprocess
import time
import zipfile

REGION = 'us-east-1'
ACCOUNT = '084375544033'
NAME = 'yapn-website-contact'
ROOT = Path(__file__).resolve().parents[2]


def aws(*args, optional=False):
    proc = subprocess.run(['aws', *args, '--region', REGION, '--output', 'json'], text=True, capture_output=True)
    if proc.returncode:
        if optional and ('ResourceNotFoundException' in proc.stderr or 'NoSuchEntity' in proc.stderr):
            return None
        raise RuntimeError(proc.stderr)
    return json.loads(proc.stdout) if proc.stdout.strip() else {}


if aws('sts', 'get-caller-identity')['Account'] != ACCOUNT:
    raise RuntimeError('Unexpected AWS account')
role = aws('iam', 'get-role', '--role-name', NAME, optional=True)
if role is None:
    role = aws('iam', 'create-role', '--role-name', NAME, '--assume-role-policy-document', json.dumps({
        'Version': '2012-10-17', 'Statement': [{'Effect': 'Allow', 'Principal': {'Service': 'lambda.amazonaws.com'}, 'Action': 'sts:AssumeRole'}]
    }))
    time.sleep(10)
aws('iam', 'put-role-policy', '--role-name', NAME, '--policy-name', 'WriteContactLogs', '--policy-document', json.dumps({
    'Version': '2012-10-17', 'Statement': [{'Effect': 'Allow', 'Action': ['logs:CreateLogStream', 'logs:PutLogEvents'], 'Resource': f'arn:aws:logs:{REGION}:{ACCOUNT}:log-group:/aws/lambda/{NAME}:*'}]
}))
# Create the group explicitly so the runtime does not need CreateLogGroup.
existing = aws('logs', 'describe-log-groups', '--log-group-name-prefix', f'/aws/lambda/{NAME}')
if not any(group['logGroupName'] == f'/aws/lambda/{NAME}' for group in existing['logGroups']):
    aws('logs', 'create-log-group', '--log-group-name', f'/aws/lambda/{NAME}')
aws('logs', 'put-retention-policy', '--log-group-name', f'/aws/lambda/{NAME}', '--retention-in-days', '30')
secret = aws('ssm', 'get-parameter', '--name', '/yapn/resend-api-key', '--with-decryption')['Parameter']['Value']
archive = io.BytesIO()
with zipfile.ZipFile(archive, 'w', zipfile.ZIP_DEFLATED) as bundle:
    bundle.writestr('handler.mjs', (ROOT / 'infra/contact/handler.mjs').read_text())
    bundle.writestr('route.mjs', (ROOT / 'infra/contact/route.mjs').read_text())
import tempfile
with tempfile.TemporaryDirectory() as temporary:
    zip_path = Path(temporary) / 'contact.zip'
    zip_path.write_bytes(archive.getvalue())
    configuration = {'Variables': {'RESEND_API_KEY': secret, 'NODE_ENV': 'production'}}
    environment_path = Path(temporary) / 'environment.json'
    environment_path.write_text(json.dumps(configuration))
    environment_path.chmod(0o600)
    current = aws('lambda', 'get-function', '--function-name', NAME, optional=True)
    if current is None:
        aws('lambda', 'create-function', '--function-name', NAME, '--runtime', 'nodejs22.x', '--role', role['Role']['Arn'], '--handler', 'handler.handler', '--timeout', '12', '--memory-size', '128', '--zip-file', f'fileb://{zip_path}', '--environment', f'file://{environment_path}')
        aws('lambda', 'wait', 'function-active-v2', '--function-name', NAME)
    else:
        aws('lambda', 'update-function-code', '--function-name', NAME, '--zip-file', f'fileb://{zip_path}')
        aws('lambda', 'wait', 'function-updated-v2', '--function-name', NAME)
        aws('lambda', 'update-function-configuration', '--function-name', NAME, '--environment', f'file://{environment_path}', '--timeout', '12')
        aws('lambda', 'wait', 'function-updated-v2', '--function-name', NAME)
aws('lambda', 'put-function-concurrency', '--function-name', NAME, '--reserved-concurrent-executions', '2')
url = aws('lambda', 'get-function-url-config', '--function-name', NAME, optional=True)
if url is None:
    url = aws('lambda', 'create-function-url-config', '--function-name', NAME, '--auth-type', 'NONE')
# Function URLs require both permissions for newer functions.
policy = aws('lambda', 'get-policy', '--function-name', NAME, optional=True)
statements = json.loads(policy['Policy'])['Statement'] if policy else []
for sid, action, conditions in [
    ('PublicFunctionUrl', 'lambda:InvokeFunctionUrl', ['--function-url-auth-type', 'NONE']),
    ('PublicUrlOnlyInvocation', 'lambda:InvokeFunction', ['--invoked-via-function-url']),
]:
    if not any(item['Sid'] == sid for item in statements):
        aws('lambda', 'add-permission', '--function-name', NAME, '--statement-id', sid, '--action', action, '--principal', '*', *conditions)
print(json.dumps({'function': NAME, 'url': url['FunctionUrl'], 'region': REGION, 'reservedConcurrency': 2}))
