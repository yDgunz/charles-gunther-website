import CommissionForm from '@/components/CommissionForm'
import { commissions, site } from '@/designs/content'

const form = {
  label: 'block text-xs text-moss-700 mb-1',
  input: 'block w-full border border-paper-400 bg-paper-50 px-3 py-2 text-[15px] text-moss-900 placeholder:text-moss-700/50 focus:border-moss-800 focus:outline-none',
  button: 'inline-block border-2 border-moss-800 bg-moss-800 text-paper-50 px-5 py-2.5 text-sm font-medium hover:bg-moss-900 transition-colors disabled:opacity-60',
  note: 'mt-3 text-xs text-moss-700',
  error: 'text-sm text-rust-700',
  success: 'border border-paper-400 bg-paper-100 p-4 text-[15px] leading-relaxed text-moss-800',
}

export default function CommissionPage() {
  return (
    <article className="px-5 py-8 lg:px-12 lg:py-12 max-w-5xl">
      <p className="text-[11px] uppercase tracking-[0.25em] text-rust-700">Commissions</p>
      <h1 className="mt-2 text-3xl lg:text-4xl font-medium leading-tight">{commissions.heading}</h1>
      <p className="mt-4 max-w-prose text-[15px] lg:text-base leading-relaxed text-moss-800">{commissions.lead}</p>

      <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-16 items-start">
        <div className="border border-paper-400 bg-paper-100 p-4 sm:p-6">
          <CommissionForm styles={form} contactEmail={site.email} />
        </div>
        <aside className="text-sm">
          <h2 className="text-[11px] uppercase tracking-[0.25em] text-moss-700 border-b-[3px] border-double border-moss-800 pb-2">How it works</h2>
          <ol className="mt-4 space-y-4">
            {commissions.howItWorks.map((step, index) => (
              <li key={step.title}>
                <h3 className="font-medium"><span className="text-rust-700 mr-1.5">{index + 1}.</span>{step.title}</h3>
                <p className="mt-1 leading-relaxed text-moss-800">{step.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-5 text-xs italic text-moss-700">{commissions.note}</p>
        </aside>
      </div>
    </article>
  )
}
