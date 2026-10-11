import CommissionForm from '@/components/CommissionForm'
import { commissions, site } from '@/designs/content'

const form = {
  label: 'block text-[11px] uppercase tracking-[0.18em] text-ink-500 mb-2',
  input: 'block w-full border-0 border-b border-ink-300 bg-transparent px-0 py-2 text-[15px] text-ink-900 placeholder:text-ink-300 focus:border-ink-900 focus:outline-none',
  button: 'inline-block bg-ink-900 text-ink-50 px-6 py-3 text-[11px] uppercase tracking-[0.2em] hover:bg-ink-700 disabled:opacity-60',
  note: 'mt-4 text-xs text-ink-500',
  error: 'text-sm text-rust-700',
  success: 'border-t border-ink-200 pt-6 font-cormorant text-2xl leading-snug text-ink-800',
}

export default function CommissionPage() {
  return (
    <div className="max-w-7xl mx-auto px-5 py-10 md:py-16">
      <p className="text-[11px] uppercase tracking-[0.2em] text-ink-500">Commissions</p>
      <h1 className="mt-2 font-cormorant text-4xl md:text-5xl leading-none">{commissions.heading}</h1>
      <p className="mt-4 max-w-xl text-[15px] md:text-base text-ink-600 leading-relaxed">{commissions.lead}</p>

      <div className="mt-10 md:mt-16 grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-24 items-start">
        <div className="max-w-xl">
          <CommissionForm styles={form} contactEmail={site.email} />
        </div>
        <aside className="border-t border-ink-200 pt-6 lg:border-t-0 lg:pt-0">
          <h2 className="text-[11px] uppercase tracking-[0.2em] text-ink-500">How it works</h2>
          <ol className="mt-4 space-y-5">
            {commissions.howItWorks.map((step, index) => (
              <li key={step.title} className="grid grid-cols-[2rem_1fr] gap-2">
                <span className="font-cormorant text-2xl text-ink-400 leading-none">{index + 1}</span>
                <div>
                  <h3 className="font-cormorant text-xl leading-tight">{step.title}</h3>
                  <p className="mt-1 text-sm text-ink-600 leading-relaxed">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-xs text-ink-500 leading-relaxed">{commissions.note}</p>
        </aside>
      </div>
    </div>
  )
}
