import { createHash } from 'node:crypto';

export const runtime = 'nodejs';

const MAX_BODY_BYTES = 16_384;
const RETRY_MESSAGE = 'Your message could not be sent. Please try again, or email team@yapn.ai.';

function failure(error, status = 400) {
  return Response.json({ success: false, error }, { status });
}

async function readBody(request) {
  if (Number(request.headers.get('content-length')) > MAX_BODY_BYTES) {
    throw new RangeError('Request too large');
  }
  const reader = request.body?.getReader();
  if (!reader) throw new SyntaxError('Missing body');
  const chunks = [];
  let bytes = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      bytes += value.byteLength;
      if (bytes > MAX_BODY_BYTES) {
        await reader.cancel();
        throw new RangeError('Request too large');
      }
      chunks.push(value);
    }
  } finally {
    reader.releaseLock();
  }
  return JSON.parse(Buffer.concat(chunks).toString('utf8'));
}

export async function POST(request) {
  // Browsers submit JSON from our own form. Reject cross-site browser requests.
  const origin = request.headers.get('origin');
  if (origin && origin !== new URL(request.url).origin) {
    return failure('Please send your message from the Yapn website.', 403);
  }
  if (!request.headers.get('content-type')?.toLowerCase().startsWith('application/json')) {
    return failure('Please submit the contact form as JSON.', 415);
  }

  let data;
  try {
    data = await readBody(request);
  } catch (error) {
    return error instanceof RangeError
      ? failure('Your message is too large. Please shorten it and try again.', 413)
      : failure('Please check the form and try again.');
  }
  if (!data || typeof data !== 'object' || Array.isArray(data)) {
    return failure('Please check the form and try again.');
  }
  if (data.website !== undefined && typeof data.website !== 'string') {
    return failure('Please check the form and try again.');
  }
  // Silently accept filled honeypots without sending email.
  if (data.website?.trim()) return Response.json({ success: true });

  const fields = {};
  for (const [field, max, required, label] of [
    ['name', 120, true, 'name'],
    ['email', 254, true, 'email address'],
    ['company', 160, false, 'business name'],
    ['message', 5000, true, 'message'],
  ]) {
    const value = data[field];
    if (value !== undefined && typeof value !== 'string') {
      return failure(`Please enter a valid ${label}.`);
    }
    fields[field] = (value || '').trim();
    if ((required && !fields[field]) || fields[field].length > max) {
      return failure(`Please enter a ${label} between ${required ? 1 : 0} and ${max} characters.`);
    }
  }
  if (!/^[^\s<>@,;]+@[^\s<>@,;]+\.[^\s<>@,;]+$/.test(fields.email) || /[\r\n]/.test(fields.name + fields.company)) {
    return failure('Please enter a valid name, business name, and email address.');
  }

  const suppliedKey = request.headers.get('idempotency-key');
  if (suppliedKey && !/^[a-zA-Z0-9_-]{8,128}$/.test(suppliedKey)) {
    return failure('Please refresh the page and try again.');
  }
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('Contact email is unavailable: RESEND_API_KEY is not configured.');
    return failure(RETRY_MESSAGE, 503);
  }

  // Resend keeps these keys for 24 hours, including across server instances.
  // Include the payload hash so a reused browser key cannot suppress a new message.
  const fingerprint = createHash('sha256').update(JSON.stringify(fields)).digest('hex');
  const attempt = suppliedKey || new Date().toISOString().slice(0, 10);
  const idempotencyKey = `website-contact/${attempt}/${fingerprint}`;
  const text = [
    'New Yapn website inquiry',
    '',
    `Name: ${fields.name}`,
    `Email: ${fields.email}`,
    `Business: ${fields.company || 'Not provided'}`,
    '',
    'Message:',
    fields.message,
  ].join('\n');

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'Idempotency-Key': idempotencyKey,
      },
      body: JSON.stringify({
        from: 'Yapn Website <contact@yapn.ai>',
        to: ['team@yapn.ai'],
        reply_to: fields.email,
        subject: 'New inquiry from the Yapn website',
        text,
      }),
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) {
      console.error('Contact email provider rejected the request.', { status: response.status });
      return failure(RETRY_MESSAGE, 503);
    }
    const result = await response.json();
    if (!result?.id) {
      console.error('Contact email provider returned no message ID.');
      return failure(RETRY_MESSAGE, 503);
    }
    return Response.json({ success: true });
  } catch {
    // Do not expose provider details or log visitors' contact information.
    console.error('Contact email provider could not be reached.');
    return failure(RETRY_MESSAGE, 503);
  }
}
