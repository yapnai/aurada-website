import test, { afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { POST } from '../infra/contact/route.mjs';

const originalFetch = globalThis.fetch;
const originalKey = process.env.RESEND_API_KEY;
const originalError = console.error;
afterEach(() => {
  globalThis.fetch = originalFetch;
  console.error = originalError;
  if (originalKey === undefined) delete process.env.RESEND_API_KEY;
  else process.env.RESEND_API_KEY = originalKey;
});
const valid = { name: 'Jane Doe', email: 'jane@example.com', company: 'Example', message: 'I would like to discuss inbound calls.', website: '' };
function request(data = valid, headers = {}) {
  return new Request('https://yapn.ai/api/contact', {
    method: 'POST',
    headers: { 'content-type': 'application/json', origin: 'https://yapn.ai', ...headers },
    body: JSON.stringify(data),
  });
}
function mockProvider(status = 200, body = { id: 'email_test' }) {
  process.env.RESEND_API_KEY = 'test-server-key';
  console.error = () => {};
  const calls = [];
  globalThis.fetch = async (...args) => { calls.push(args); return Response.json(body, { status }); };
  return calls;
}

test('sends normalized text only to the fixed team recipient, with a validated reply address', async () => {
  const calls = mockProvider();
  const response = await POST(request({ ...valid, name: ' Jane Doe ', to: 'attacker@example.com', html: '<script>bad</script>' }));
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { success: true });
  assert.equal(calls.length, 1);
  const [url, options] = calls[0];
  const body = JSON.parse(options.body);
  assert.equal(url, 'https://api.resend.com/emails');
  assert.deepEqual(body.to, ['team@yapn.ai']);
  assert.equal(body.reply_to, valid.email);
  assert.equal(body.from, 'Yapn Website <contact@yapn.ai>');
  assert.match(body.text, /Name: Jane Doe/);
  assert.match(body.text, /I would like to discuss inbound calls\./);
  assert.equal(body.html, undefined);
  assert.equal(options.headers.Authorization, 'Bearer test-server-key');
});

test('rejects invalid, missing, oversized and injection values before contacting provider', async () => {
  const calls = mockProvider();
  for (const value of [null, [], { ...valid, name: '' }, { ...valid, email: 'invalid' }, { ...valid, email: 'a@b.com\nBcc: bad@x.com' }, { ...valid, company: {} }, { ...valid, name: 'Jane\nBcc:' }, { ...valid, message: 'x'.repeat(5001) }]) {
    const response = await POST(request(value));
    assert.equal(response.status, 400, JSON.stringify(value));
    assert.equal((await response.json()).success, false);
  }
  assert.equal(calls.length, 0);
});

test('enforces body size for both actual bytes and declared content length', async () => {
  const calls = mockProvider();
  assert.equal((await POST(request({ ...valid, message: 'x'.repeat(17000) }))).status, 413);
  assert.equal((await POST(request(valid, { 'content-length': '17000' }))).status, 413);
  assert.equal(calls.length, 0);
});

test('silently drops honeypot submissions and rejects cross-origin or non-JSON requests', async () => {
  const calls = mockProvider();
  assert.deepEqual(await (await POST(request({ ...valid, website: 'https://spam.test' }))).json(), { success: true });
  assert.equal((await POST(request(valid, { origin: 'https://evil.test' }))).status, 403);
  assert.equal((await POST(request(valid, { 'content-type': 'text/plain' }))).status, 415);
  assert.equal(calls.length, 0);
});

test('duplicate normalized submissions use a stable provider key and changed content gets a new key', async () => {
  const calls = mockProvider();
  const headers = { 'idempotency-key': 'attempt_12345678' };
  await POST(request(valid, headers));
  await POST(request({ ...valid, name: ' Jane Doe ' }, headers));
  await POST(request({ ...valid, message: 'A different request' }, headers));
  assert.equal(calls[0][1].headers['Idempotency-Key'], calls[1][1].headers['Idempotency-Key']);
  assert.notEqual(calls[1][1].headers['Idempotency-Key'], calls[2][1].headers['Idempotency-Key']);
});

test('missing configuration, provider rejection, malformed success and network failure return retry errors', async () => {
  const calls = mockProvider();
  delete process.env.RESEND_API_KEY;
  assert.equal((await POST(request())).status, 503);
  assert.equal(calls.length, 0);
  mockProvider(429, { message: 'Private provider diagnostics' });
  const rejection = await POST(request());
  assert.equal(rejection.status, 503);
  assert.doesNotMatch(JSON.stringify(await rejection.json()), /Private provider/);
  mockProvider(200, {});
  assert.equal((await POST(request())).status, 503);
  globalThis.fetch = async () => { throw new Error('private error'); };
  assert.equal((await POST(request())).status, 503);
});
