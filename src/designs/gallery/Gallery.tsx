import Link from 'next/link'
import WorkGrid from './WorkGrid'

export default function Gallery() {
  return (
    <div className="max-w-7xl mx-auto px-5 py-10 md:py-16">
      <p className="text-[11px] uppercase tracking-[0.2em] text-ink-500">Work</p>
      <h1 className="mt-2 font-cormorant text-[1.7rem] leading-snug md:text-4xl max-w-2xl">
        Carvings in tupelo, painted from life.
      </h1>
      <p className="mt-3 md:mt-4 max-w-xl text-sm text-ink-600 leading-relaxed">
        Twenty pieces from the studio. Most of Charles&rsquo;s work is now made to order; see{' '}
        <Link href="/commission" className="underline underline-offset-2 hover:text-ink-900">commissions</Link>.
      </p>
      <div className="mt-10 md:mt-14">
        <WorkGrid />
      </div>
    </div>
  )
}
