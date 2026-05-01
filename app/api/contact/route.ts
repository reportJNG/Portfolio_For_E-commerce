import { NextResponse } from 'next/server';
import { Resend } from 'resend';

import { contactSchema } from '@/lib/contact';

let resendClient: Resend | null = null;

function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return null;
  }

  if (!resendClient) {
    resendClient = new Resend(apiKey);
  }

  return resendClient;
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid contact payload.' }, { status: 400 });
  }

  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL ?? 'Walid Portfolio <onboarding@resend.dev>';
  const resend = getResend();

  if (!to || !resend) {
    return NextResponse.json({ error: 'Contact delivery is not configured.' }, { status: 503 });
  }

  const { name, email, message } = parsed.data;

  await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: `New portfolio inquiry from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`
  });

  return NextResponse.json({ ok: true });
}
