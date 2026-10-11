import CommissionForm from '@/components/CommissionForm'
import { commissions, site } from '@/designs/content'

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
      <p className="text-[11px] uppercase tracking-[0.3em] text-brass-400">Commissions</p>
      <h1 className="mt-4 font-fraunces text-[2.75rem] leading-[0.95] sm:text-6xl md:text-7xl">
        Commission
        <br />
        <em className="font-light text-coal-300">a piece.</em>
      </h1>
      <p className="mt-6 max-w-xl text-[15px] md:text-lg leading-relaxed text-coal-200">{commissions.lead}</p>

      <div className="mt-10 md:mt-16 grid gap-12 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-24 items-start">
        <div className="max-w-xl">
          <CommissionForm styles={form} contactEmail={site.email} />
        </div>
        <aside>
          <h2 className="text-[11px] uppercase tracking-[0.3em] text-brass-400">How it works</h2>
          <ol className="mt-5 space-y-6">
            {commissions.howItWorks.map((step, index) => (
              <li key={step.title} className="grid grid-cols-[2.5rem_1fr] gap-2">
                <span className="font-fraunces text-3xl font-light text-coal-400 leading-none">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="font-fraunces text-xl leading-tight">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-coal-300">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-xs leading-relaxed text-coal-400">{commissions.note}</p>
        </aside>
      </div>
    </div>
  )
}
