import Link from 'next/link'
import Image from 'next/image'
import { process, pullQuote } from '@/designs/content'

export default function ProcessPage() {
  return (
    <article className="px-5 py-8 lg:px-12 lg:py-12 max-w-4xl">
      <p className="text-[11px] uppercase tracking-[0.25em] text-rust-700">The method</p>
      <h1 className="mt-2 text-3xl lg:text-4xl font-medium leading-tight">From the bird to the block</h1>
      <p className="mt-3 text-[15px] italic text-moss-700">&ldquo;{pullQuote}&rdquo; How a carving comes about, in six stages.</p>

      <ol className="mt-8 divide-y divide-paper-300">
        {process.map((step, index) => (
          <li key={step.src} className="py-8 grid gap-5 sm:grid-cols-[220px_1fr] sm:gap-8 items-start">
            <figure>
              <div className="border border-paper-400 bg-paper-100 p-1.5">
                <div className="relative aspect-square">
                  <Image src={step.src} alt={step.title} fill sizes="(max-width: 640px) 100vw, 220px" className="object-cover" />
                </div>
              </div>
              <figcaption className="mt-2 text-xs text-rust-700">Fig. {index + 1}</figcaption>
            </figure>
            <div>
              <h2 className="text-xl lg:text-2xl font-medium leading-tight">{step.title}</h2>
              <p className="mt-2 text-[15px] leading-relaxed text-moss-800">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="border-y-[3px] border-double border-moss-800 py-6 text-center">
        <p className="text-[15px] leading-relaxed text-moss-800">A commissioned piece follows the same path, with photographs along the way.</p>
        <Link href="/commission" className="mt-4 inline-block border-2 border-moss-800 bg-moss-800 text-paper-50 px-5 py-2.5 text-sm font-medium hover:bg-moss-900 transition-colors">Commission a piece</Link>
      </div>
    </article>
  )
}
