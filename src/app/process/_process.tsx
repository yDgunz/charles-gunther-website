import Link from 'next/link'
import Image from 'next/image'
import { inquiries, process, pullQuote } from '@/content'

export default function ProcessPage() {
  return (
    <div className="max-w-8xl mx-auto px-5 md:px-8 py-8 md:py-16">
      <p className="text-[11px] uppercase tracking-[0.3em] text-brass-400">Process</p>
      <h1 className="mt-4 font-fraunces text-[2.75rem] leading-[0.95] sm:text-6xl md:text-7xl">
        From the bird
        <br />
        <em className="font-light text-coal-300">to the block.</em>
      </h1>
      <p className="mt-6 max-w-md font-fraunces italic text-xl text-coal-300">&ldquo;{pullQuote}&rdquo;</p>

      <ol className="mt-12 md:mt-20 space-y-12 md:space-y-24">
        {process.map((step, index) => (
          <li key={step.src} className={`grid gap-5 md:grid-cols-2 md:gap-16 items-center ${index % 2 ? 'md:[&>*:first-child]:order-2' : ''}`}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-coal-900">
              <Image src={step.src} alt={step.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-brass-400">{String(index + 1).padStart(2, '0')} / {String(process.length).padStart(2, '0')}</p>
              <h2 className="mt-3 font-fraunces text-3xl md:text-4xl leading-tight">{step.title}</h2>
              <p className="mt-4 max-w-md text-[15px] md:text-base leading-relaxed text-coal-300">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-16 md:mt-28 border-t border-white/10 pt-8">
        <p className="max-w-md text-sm leading-relaxed text-coal-400">
          {inquiries.aside}{' '}
          <Link href="/commission" className="text-coal-200 hover:text-white transition-colors">Inquiries &rarr;</Link>
        </p>
      </div>
    </div>
  )
}
