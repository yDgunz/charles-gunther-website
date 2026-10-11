import Image from 'next/image'
import Link from 'next/link'
import { bio, commissions, portraits, process, site } from '@/designs/content'

export default function About() {
  return (
    <div className="max-w-8xl mx-auto px-5 md:px-8 py-8 md:py-16">
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <p className="text-[11px] uppercase tracking-[0.3em] text-brass-400">The carver</p>
          <h1 className="mt-4 font-fraunces text-[2.75rem] leading-[0.95] sm:text-6xl md:text-7xl">
            Thirty years
            <br />
            <em className="font-light text-coal-300">of birds.</em>
          </h1>
          <div className="mt-8 space-y-5 text-[15px] md:text-lg leading-relaxed text-coal-200 max-w-prose">
            {bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

        </div>

        <div className="lg:col-span-5 space-y-4 md:space-y-6">
          {[portraits.studio, portraits.aviary].map((portrait) => (
            <Image
              key={portrait.src}
              src={portrait.src}
              alt={portrait.alt}
              width={portrait.width}
              height={portrait.height}
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="w-full h-auto rounded-sm"
            />
          ))}
        </div>
      </div>

      <section className="mt-20 md:mt-32">
        <div className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-4">
          <h2 className="font-fraunces text-3xl md:text-4xl">From the bird to the block</h2>
        </div>
        <ol className="mt-6 md:mt-8 grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-5">
          {process.map((step, index) => (
            <li key={step.src}>
              <div className="relative aspect-square overflow-hidden rounded-sm bg-coal-900">
                <Image src={step.src} alt={step.title} fill sizes="(max-width: 768px) 33vw, 16vw" className="object-cover" />
              </div>
              <p className="mt-2 text-xs leading-snug text-coal-300">
                <span className="text-brass-400 mr-1">{String(index + 1).padStart(2, '0')}</span>
                {step.title}
              </p>
            </li>
          ))}
        </ol>
        <Link href="/process" className="mt-6 inline-block text-sm text-white hover:text-brass-300 transition-colors">Read about the process &rarr;</Link>
      </section>

      <section id="contact" className="mt-20 md:mt-32 scroll-mt-20">
        <p className="text-[11px] uppercase tracking-[0.3em] text-brass-400">Commissions</p>
        <p className="mt-4 max-w-prose text-[15px] md:text-lg leading-relaxed text-coal-200">{commissions.lead}</p>
        <Link href="/commission" className="mt-6 inline-block border border-white/20 px-5 py-2.5 text-sm hover:border-brass-400 hover:text-brass-300 transition-colors">Commission a piece</Link>
        <p className="mt-4 text-sm text-coal-400">
          Or on Instagram, <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-coal-200 hover:text-white">@{site.instagram}</a>.
        </p>
      </section>
    </div>
  )
}
