# Yapn website contact endpoint

The public website posts contact inquiries directly to an isolated AWS Lambda Function URL. Resend delivers the message to the fixed team inbox. Credentials stay on the server.

## Endpoint

`https://khzt4grp6nhy4wcbpuvmnrjuym0kovkd.lambda-url.us-east-1.on.aws/`

- Method: `POST`
- Headers: `Content-Type: application/json`, `Origin: <approved origin>`
- Optional header: `Idempotency-Key`, 8 to 128 letters, numbers, underscores or hyphens. Reuse it when retrying one submission.
- JSON: `{ "name": "Jane", "email": "jane@example.com", "company": "Example", "message": "Tell me about Yapn.", "website": "" }`
- Required fields: `name` (1 to 120 characters), `email` (valid address, up to 254 characters), `message` (1 to 5000 characters).
- Optional `company`: up to 160 characters.
- `website`: a hidden honeypot. Keep it empty for people; filled values are silently discarded.
- Success: HTTP 200 with `{ "success": true }`.
- Errors: `{ "success": false, "error": "Readable retry or validation message" }`. Validation uses 400, rejected origins 403, oversized bodies 413, invalid content type 415, delivery/configuration failures 503.

Allowed browser origins are `https://yapn.ai`, `https://www.yapn.ai`, `https://aurada-website.vercel.app`, and HTTP localhost/127.0.0.1 with optional review ports. Origin checks restrict browser use but are not authentication. The server ignores client-supplied recipient and sender fields.

The sender is `Yapn Website <contact@yapn.ai>`, recipient is `team@yapn.ai`, and Reply-To is the validated visitor email. The provider receives plain text only. The request is capped at 16 KiB. Resend idempotency keys suppress duplicate deliveries across Lambda instances; without a supplied key, identical normalized submissions use a shared key for the current UTC day.

## Deploy

Requires AWS CLI credentials for account `084375544033` with Lambda, IAM, CloudWatch Logs and SSM access.

```sh
python3 infra/contact/deploy.py
```

The script reads `/yapn/resend-api-key` from SSM in `us-east-1`, injects it as the private `RESEND_API_KEY` Lambda environment variable, and deploys function `yapn-website-contact`. It does not print the key or send email. It creates a log-only execution role, 30-day logs, public Function URL permissions restricted to URL invocation, a 12-second timeout, and reserved concurrency of 2.

`route.mjs` is the standalone email implementation bundled with `handler.mjs`; it must remain independent of removed Next.js routes. Update this file for future mail behavior changes.

## Test

With Node.js 22 or newer:

```sh
node --test infra/contact/handler.test.mjs
```

These tests mock Resend and send no email. For live checks without sending email, use an OPTIONS preflight, an invalid form, or a filled honeypot. Do not submit real customer data during testing.

A provider acceptance check on October 14, 2026 sent a synthetic configuration message from `contact@yapn.ai` to Resend's `delivered@resend.dev` test sink. Resend accepted it with HTTP 200 and a message ID. No message was sent to the team inbox by that test.
