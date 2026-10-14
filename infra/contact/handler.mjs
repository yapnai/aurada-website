import { POST } from './route.mjs';

const ALLOWED_ORIGINS = new Set([
  'https://yapn.ai',
  'https://www.yapn.ai',
  'https://aurada-website.vercel.app',
]);

function allowedOrigin(origin) {
  if (ALLOWED_ORIGINS.has(origin)) return true;
  return /^http:\/\/(localhost|127\.0\.0\.1)(:\d{1,5})?$/.test(origin || '');
}

export async function handler(event) {
  const headers = Object.fromEntries(Object.entries(event.headers || {}).map(([key, value]) => [key.toLowerCase(), value]));
  const origin = headers.origin;
  const cors = allowedOrigin(origin) ? {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Idempotency-Key',
    'Access-Control-Max-Age': '600',
    Vary: 'Origin',
  } : { Vary: 'Origin' };
  const respond = (statusCode, body) => ({ statusCode, headers: { ...cors, 'Content-Type': 'application/json', 'Cache-Control': 'no-store' }, body: body === undefined ? '' : JSON.stringify(body) });
  if (!allowedOrigin(origin)) return respond(403, { success: false, error: 'Please send your message from the Yapn website.' });
  const method = event.requestContext?.http?.method;
  if (method === 'OPTIONS') return respond(204);
  if (method !== 'POST') return respond(405, { success: false, error: 'Please use the contact form to send a message.' });
  // Bound the Function URL event body before decoding or parsing it.
  if (typeof event.body !== 'string' || event.body.length > 22_000) {
    return respond(413, { success: false, error: 'Your message is too large. Please shorten it and try again.' });
  }
  const body = event.isBase64Encoded ? Buffer.from(event.body, 'base64') : Buffer.from(event.body);
  if (body.byteLength > 16_384) return respond(413, { success: false, error: 'Your message is too large. Please shorten it and try again.' });
  // The shared route enforces same-origin validation on this trusted origin.
  const request = new Request(`${origin}/api/contact`, { method: 'POST', headers, body });
  const response = await POST(request);
  return respond(response.status, await response.json());
}
