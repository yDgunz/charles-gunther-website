import Link from 'next/link'
import Image from 'next/image'
import { process, pullQuote } from '@/designs/content'

export default function ProcessPage() {
  return (
    <div className="max-w-7xl mx-auto px-5 py-10 md:py-16">
      <p className="text-[11px] uppercase tracking-[0.2em] text-ink-500">Process</p>
      <h1 className="mt-2 font-cormorant text-4xl md:text-5xl leading-none">From the bird to the block</h1>
      <p className="mt-4 max-w-xl font-cormorant italic text-xl md:text-2xl text-ink-600">&ldquo;{pullQuote}&rdquo;</p>

      <ol className="mt-10 md:mt-16 space-y-12 md:space-y-20">
        {process.map((step, index) => (
          <li key={step.src} className={`grid gap-5 md:grid-cols-2 md:gap-16 items-center ${index % 2 ? 'md:[&>*:first-child]:order-2' : ''}`}>
            <div className="relative aspect-[4/3] overflow-hidden bg-ink-100">
              <Image src={step.src} alt={step.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-ink-400">Step {index + 1} of {process.length}</p>
              <h2 className="mt-2 font-cormorant text-3xl md:text-4xl leading-tight">{step.title}</h2>
              <p className="mt-3 max-w-md text-[15px] text-ink-600 leading-relaxed">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-16 md:mt-24 border-t border-ink-200 pt-8">
        <p className="font-cormorant text-2xl md:text-3xl max-w-xl">A commissioned piece follows the same path, with photographs along the way.</p>
        <Link href="/commission" className="mt-6 inline-block bg-ink-900 text-ink-50 px-6 py-3 text-[11px] uppercase tracking-[0.2em] hover:bg-ink-700">
          Commission a piece
        </Link>
      </div>
    </div>
  )
}
