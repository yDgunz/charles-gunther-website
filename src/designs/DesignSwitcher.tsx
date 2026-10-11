'use client'

import { useState } from 'react'
import { exitPreview, setDesign } from './actions'

type Option = { id: string; tag: string; name: string; blurb: string }

type DesignSwitcherProps = {
  options: Option[]
  activeId: string
  /** Address the "send" button mails to; empty leaves the recipient blank */
  feedbackEmail: string
}

/**
 * Review bar shown only in preview mode. Switches the whole site between
 * designs and lets the reviewer send a pick with notes by email.
 */
export default function DesignSwitcher({ options, activeId, feedbackEmail }: DesignSwitcherProps) {
  const [open, setOpen] = useState(true)
  const [feedbackOpen, setFeedbackOpen] = useState(false)
  const [pick, setPick] = useState(activeId)
  const [notes, setNotes] = useState('')

  const active = options.find((option) => option.id === activeId) ?? options[0]
  const picked = options.find((option) => option.id === pick) ?? active

  const subject = `Website: I pick ${picked.tag === 'Now' ? 'the current site' : `option ${picked.tag}, ${picked.name}`}`
  const body = `My pick: ${picked.name}${notes ? `\n\nNotes:\n${notes}` : ''}`
  const mailto = `mailto:${feedbackEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-3 right-3 z-50 rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white shadow-lg ring-1 ring-white/10 hover:bg-neutral-800"
        style={{ fontFamily: 'system-ui, sans-serif' }}
      >
        Design review: {active.tag}
      </button>
    )
  }

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 px-2 pb-2 sm:px-4 sm:pb-4"
      style={{ fontFamily: 'system-ui, sans-serif' }}
      role="region"
      aria-label="Design review"
    >
      <div className="mx-auto max-w-3xl rounded-2xl bg-neutral-900 text-white shadow-2xl ring-1 ring-white/10">
        <form
          action={setDesign}
          className="flex gap-1.5 overflow-x-auto px-2.5 pt-2.5 sm:px-4 sm:pt-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {options.map((option) => {
            const isActive = option.id === activeId
            return (
              <button
                key={option.id}
                type="submit"
                name="design"
                value={option.id}
                aria-pressed={isActive}
                className={`shrink-0 rounded-full px-2.5 py-1.5 text-xs sm:px-3 sm:text-sm transition-colors ${
                  isActive ? 'bg-white text-neutral-900 font-semibold' : 'bg-neutral-800 text-neutral-200 hover:bg-neutral-700'
                }`}
              >
                <span className="mr-1 opacity-60">{option.tag}</span>
                {option.name}
              </button>
            )
          })}
        </form>

        <div className="flex items-start gap-3 px-3 pb-2.5 pt-2 sm:px-4 sm:pb-3">
          <p className="min-w-0 flex-1 text-xs leading-snug text-neutral-400 line-clamp-2 sm:text-sm">
            <span className="font-medium text-neutral-200">{active.name}.</span> {active.blurb}
          </p>
          <div className="flex shrink-0 items-center gap-0.5 -mr-1 -mt-1">
            <button
              type="button"
              onClick={() => setFeedbackOpen((value) => !value)}
              aria-expanded={feedbackOpen}
              className="rounded-full px-2.5 py-1.5 text-xs sm:text-sm text-neutral-200 hover:bg-neutral-800"
            >
              {feedbackOpen ? 'Close' : 'Send a pick'}
            </button>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-full p-1.5 text-neutral-400 hover:bg-neutral-800 hover:text-white"
              aria-label="Minimise review bar"
            >
              <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M4 10a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1z" />
              </svg>
            </button>
          </div>
        </div>

        {feedbackOpen && (
          <div className="border-t border-white/10 px-4 py-3">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
              <span className="text-neutral-400">Which one?</span>
              {options.map((option) => (
                <label key={option.id} className="inline-flex cursor-pointer items-center gap-1.5">
                  <input
                    type="radio"
                    name="pick"
                    value={option.id}
                    checked={pick === option.id}
                    onChange={() => setPick(option.id)}
                    className="accent-white"
                  />
                  {option.name}
                </label>
              ))}
            </div>
            <textarea
              value={notes}
              onChange={(event) => setNotes(event.target.value)}
              rows={3}
              placeholder="What do you like, and what would you change?"
              className="mt-3 w-full rounded-lg border border-white/10 bg-neutral-800 px-3 py-2 text-sm text-white placeholder:text-neutral-500 focus:border-white/30 focus:outline-none"
            />
            <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
              <a
                href={mailto}
                className="rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-neutral-900 hover:bg-neutral-200"
              >
                Open in email
              </a>
              <form action={exitPreview}>
                <button type="submit" className="text-sm text-neutral-400 underline-offset-2 hover:text-white hover:underline">
                  Leave review mode
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
