import test, { afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { handler } from './handler.mjs';
const originalFetch = globalThis.fetch;
afterEach(() => { globalThis.fetch = originalFetch; delete process.env.RESEND_API_KEY; });
const event = (origin = 'https://yapn.ai', method = 'POST', body = { name: 'Review', email: 'review@example.com', message: 'Test message', website: '' }) => ({ headers: { origin, 'content-type': 'application/json' }, requestContext: { http: { method } }, body: JSON.stringify(body) });

test('allows approved domains and localhost preflights, rejects external or missing origins', async () => {
  for (const origin of ['https://yapn.ai', 'https://www.yapn.ai', 'https://aurada-website.vercel.app', 'http://localhost:3000', 'http://127.0.0.1:3100']) {
    const response = await handler(event(origin, 'OPTIONS'));
    assert.equal(response.statusCode, 204);
    assert.equal(response.headers['Access-Control-Allow-Origin'], origin);
  }
  for (const origin of ['', 'https://evil.test', 'https://yapn.ai.evil.test']) {
    const response = await handler(event(origin));
    assert.equal(response.statusCode, 403);
    assert.equal(response.headers['Access-Control-Allow-Origin'], undefined);
  }
});

test('sends fixed recipient through mocked provider and supports base64 Function URL body', async () => {
  process.env.RESEND_API_KEY = 'mock-key';
  const calls = [];
  globalThis.fetch = async (...args) => { calls.push(args); return Response.json({ id: 'mock-id' }); };
  const request = event();
  request.body = Buffer.from(request.body).toString('base64');
  request.isBase64Encoded = true;
  const response = await handler(request);
  assert.equal(response.statusCode, 200);
  assert.deepEqual(JSON.parse(response.body), { success: true });
  assert.deepEqual(JSON.parse(calls[0][1].body).to, ['team@yapn.ai']);
});

test('blocks oversized requests, non-POSTs and bots without calling provider', async () => {
  globalThis.fetch = async () => { throw new Error('Provider must not be called'); };
  assert.equal((await handler(event('https://yapn.ai', 'GET'))).statusCode, 405);
  assert.equal((await handler(event('https://yapn.ai', 'POST', { message: 'x'.repeat(23000) }))).statusCode, 413);
  const response = await handler(event('https://yapn.ai', 'POST', { website: 'https://spam.test' }));
  assert.equal(response.statusCode, 200);
});
