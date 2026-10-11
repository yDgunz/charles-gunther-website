'use client'

import { useState, useTransition } from 'react'
import { submitCommission } from '@/designs/commission'

export type FormStyles = {
  label: string
  input: string
  button: string
  /** Small print under the button */
  note: string
  error: string
  success: string
}

/**
 * The commission request form. Behaviour is shared; each design passes its
 * own class names.
 */
export default function CommissionForm({ styles, contactEmail }: { styles: FormStyles; contactEmail: string }) {
  const [pending, startTransition] = useTransition()
  const [error, setError] = useState<string | null>(null)
  const [done, setDone] = useState<'sent' | 'mail' | null>(null)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    setError(null)
    startTransition(async () => {
      const result = await submitCommission(formData)
      if (result.status === 'error') {
        setError(result.message)
        return
      }
      if (result.status === 'mail') {
        const href = `mailto:${result.to}?subject=${encodeURIComponent(result.subject)}&body=${encodeURIComponent(result.body)}`
        window.location.href = href
      }
      setDone(result.status)
    })
  }

  if (done) {
    return (
      <div className={styles.success} role="status">
        {done === 'sent' ? (
          <p>Thank you. Your request has been sent, and Charles will reply by email.</p>
        ) : (
          <p>
            Your mail app should have opened with the request written out. If it did not, email Charles at{' '}
            <a href={`mailto:${contactEmail}`} className="underline underline-offset-2">{contactEmail}</a>.
          </p>
        )}
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="commission-name" className={styles.label}>Your name</label>
          <input id="commission-name" name="name" type="text" autoComplete="name" required className={styles.input} />
        </div>
        <div>
          <label htmlFor="commission-email" className={styles.label}>Email</label>
          <input id="commission-email" name="email" type="email" autoComplete="email" required className={styles.input} />
        </div>
      </div>
      <div>
        <label htmlFor="commission-message" className={styles.label}>What do you have in mind?</label>
        <textarea
          id="commission-message"
          name="message"
          rows={6}
          required
          placeholder="The bird, the pose you picture, roughly how large, where it will live, and when you would like it."
          className={styles.input}
        />
      </div>

      {error && <p className={styles.error} role="alert">{error}</p>}

      <div>
        <button type="submit" disabled={pending} className={styles.button}>
          {pending ? 'Sending…' : 'Send the request'}
        </button>
        <p className={styles.note}>
          Or email Charles directly at <a href={`mailto:${contactEmail}`} className="underline underline-offset-2">{contactEmail}</a>.
        </p>
      </div>
    </form>
  )
}
