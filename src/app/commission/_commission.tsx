import CommissionForm from '@/components/CommissionForm'
import { inquiries, site } from '@/content'

const form = {
  label: 'block text-[11px] uppercase tracking-[0.2em] text-coal-400 mb-2',
  input: 'block w-full rounded-sm border border-white/15 bg-coal-900 px-3 py-2.5 text-[15px] text-coal-100 placeholder:text-coal-600 focus:border-brass-400 focus:outline-none [color-scheme:dark]',
  button: 'inline-block bg-coal-100 text-coal-950 px-5 py-2.5 text-sm font-medium hover:bg-white transition-colors disabled:opacity-60',
  note: 'mt-4 text-xs text-coal-400',
  error: 'text-sm text-brass-300',
  success: 'rounded-sm border border-white/15 bg-coal-900 p-5 font-fraunces text-xl leading-snug text-coal-100',
}

export default function CommissionPage() {
  return (
    <div className="max-w-8xl mx-auto px-5 md:px-8 py-8 md:py-16">
      <p className="text-[11px] uppercase tracking-[0.3em] text-brass-400">{inquiries.heading}</p>
      <h1 className="mt-4 font-fraunces text-4xl md:text-5xl leading-none">Write to Charles</h1>
      <p className="mt-6 max-w-xl text-[15px] md:text-lg leading-relaxed text-coal-200">{inquiries.lead}</p>

      <div className="mt-10 md:mt-16 grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-24 items-start">
        <div className="max-w-xl">
          <CommissionForm styles={form} contactEmail={site.email} />
        </div>
        <aside>
          <h2 className="text-[11px] uppercase tracking-[0.3em] text-brass-400">What to expect</h2>
          <p className="mt-4 text-sm leading-relaxed text-coal-300">{inquiries.expect}</p>
        </aside>
      </div>
    </div>
  )
}
