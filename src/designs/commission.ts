'use server'

import { site } from '@/designs/content'

export type CommissionRequest = {
  name: string
  email: string
  message: string
}

export type CommissionResult =
  | { status: 'sent' }
  /** No mail service is configured; the browser should open a mailto link instead. */
  | { status: 'mail'; to: string; subject: string; body: string }
  | { status: 'error'; message: string }

function field(formData: FormData, name: string): string {
  const value = formData.get(name)
  return typeof value === 'string' ? value.trim() : ''
}

function formatRequest(request: CommissionRequest): { subject: string; body: string } {
  const subject = `Commission inquiry from ${request.name}`
  const body = [`Name: ${request.name}`, `Email: ${request.email}`, '', request.message].join('\n')
  return { subject, body }
}

/**
 * Takes a commission request from the form. Sends it by email through Resend
 * when RESEND_API_KEY is set; otherwise hands the message back so the browser
 * can open the visitor's own mail app.
 */
export async function submitCommission(formData: FormData): Promise<CommissionResult> {
  const request: CommissionRequest = {
    name: field(formData, 'name'),
    email: field(formData, 'email'),
    message: field(formData, 'message'),
  }

  if (!request.name || !request.email || !request.message) {
    return { status: 'error', message: 'Please fill in your name, your email and a few words about the piece.' }
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(request.email)) {
    return { status: 'error', message: 'That email address does not look right.' }
  }

  const { subject, body } = formatRequest(request)
  const to = process.env.COMMISSION_EMAIL || site.email
  const apiKey = process.env.RESEND_API_KEY

  if (!apiKey) {
    return { status: 'mail', to, subject, body }
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: process.env.COMMISSION_FROM || 'Website <onboarding@resend.dev>',
      to: [to],
      reply_to: request.email,
      subject,
      text: body,
    }),
  })

  if (!response.ok) {
    console.error('Commission email failed', response.status, await response.text())
    return { status: 'error', message: 'The message could not be sent. Please email Charles directly instead.' }
  }
  return { status: 'sent' }
}
