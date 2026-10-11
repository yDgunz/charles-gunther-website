import Image from 'next/image'
import Link from 'next/link'
import { bio, commissions, portraits, process, pullQuote, site } from '@/designs/content'

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-5 py-10 md:py-16">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Image
            src={portraits.falconry.src}
            alt={portraits.falconry.alt}
            width={portraits.falconry.width}
            height={portraits.falconry.height}
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="w-full h-auto"
            priority
          />
          <Image
            src={portraits.aviary.src}
            alt={portraits.aviary.alt}
            width={portraits.aviary.width}
            height={portraits.aviary.height}
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="mt-4 w-full h-auto hidden lg:block"
          />
        </div>

        <div className="lg:col-span-7">
          <p className="text-[11px] uppercase tracking-[0.2em] text-ink-500">About the artist</p>
          <h1 className="mt-2 font-cormorant text-4xl md:text-5xl leading-none">{site.name}</h1>
          <div className="mt-6 space-y-5 text-[15px] md:text-base text-ink-700 leading-relaxed max-w-prose">
            {bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <blockquote className="mt-8 font-cormorant italic text-2xl md:text-3xl leading-snug text-ink-800 max-w-lg">
            &ldquo;{pullQuote}&rdquo;
          </blockquote>

        </div>
      </div>

      <section className="mt-16 md:mt-24 border-t border-ink-200 pt-8">
        <h2 className="text-[11px] uppercase tracking-[0.2em] text-ink-500">Process</h2>
        <p className="mt-2 font-cormorant text-2xl md:text-3xl">From the bird to the block</p>
        <ol className="mt-6 grid grid-cols-3 lg:grid-cols-6 gap-3 md:gap-6">
          {process.map((step, index) => (
            <li key={step.src}>
              <div className="relative aspect-square overflow-hidden bg-ink-100">
                <Image src={step.src} alt={step.title} fill sizes="(max-width: 768px) 33vw, 16vw" className="object-cover" />
              </div>
              <p className="mt-2 text-xs text-ink-600 leading-snug">
                <span className="text-ink-400 mr-1.5">{String(index + 1).padStart(2, '0')}</span>
                {step.title}
              </p>
            </li>
          ))}
        </ol>
        <Link href="/process" className="mt-6 inline-block border-b border-ink-900 pb-1 text-[11px] uppercase tracking-[0.2em] hover:text-ink-600 hover:border-ink-600">
          Read about the process
        </Link>
      </section>

      <section id="contact" className="mt-16 md:mt-24 border-t border-ink-200 pt-8 scroll-mt-8">
        <h2 className="text-[11px] uppercase tracking-[0.2em] text-ink-500">Contact</h2>
        <p className="mt-3 max-w-prose text-[15px] text-ink-700 leading-relaxed">{commissions.lead}</p>
        <Link href="/commission" className="mt-5 inline-block bg-ink-900 text-ink-50 px-6 py-3 text-[11px] uppercase tracking-[0.2em] hover:bg-ink-700">
          Commission a piece
        </Link>
        <div className="mt-8 flex flex-col sm:flex-row sm:items-baseline gap-3 sm:gap-10">
          <a href={`mailto:${site.email}`} className="font-cormorant text-2xl md:text-3xl hover:text-ink-600">{site.email}</a>
          <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-[11px] uppercase tracking-[0.2em] text-ink-500 hover:text-ink-900">
            Instagram @{site.instagram}
          </a>
        </div>
      </section>
    </div>
  )
}
