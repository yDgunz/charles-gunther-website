import CommissionForm from '@/components/CommissionForm'
import { commissions, site } from '@/designs/content'

const form = {
  label: 'block text-xs text-bark-600 mb-1',
  input: 'block w-full border border-bark-200 bg-white px-3 py-2 text-sm text-bark-900 focus:border-bark-600 focus:outline-none',
  button: 'bg-bark-800 text-cream-50 px-6 py-3 hover:bg-bark-900 transition-colors font-medium disabled:opacity-60',
  note: 'mt-3 text-xs text-bark-600',
  error: 'text-sm text-red-700',
  success: 'border border-bark-200 bg-white p-4 text-bark-700',
}

export default function CommissionPage() {
  return (
    <div className="py-8 md:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-xl md:text-2xl font-display font-normal text-bark-900">{commissions.heading}</h1>
        <p className="mt-3 text-bark-700 leading-relaxed max-w-prose">{commissions.lead}</p>

        <div className="mt-8 grid gap-10 md:grid-cols-[1fr_280px]">
          <CommissionForm styles={form} contactEmail={site.email} />
          <aside>
            <h2 className="font-display text-bark-900">How it works</h2>
            <ol className="mt-3 space-y-3 text-bark-700">
              {commissions.howItWorks.map((step, index) => (
                <li key={step.title}>
                  <span className="text-bark-400 mr-1.5">{index + 1}</span>
                  <span className="text-bark-900">{step.title}.</span> {step.body}
                </li>
              ))}
            </ol>
            <p className="mt-4 text-xs text-bark-600">{commissions.note}</p>
          </aside>
        </div>
      </div>
    </div>
  )
}
