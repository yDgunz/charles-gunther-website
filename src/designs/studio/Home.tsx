import Link from 'next/link'
import Image from 'next/image'
import { featuredPieces } from '@/data/pieces'
import { commissions, intro, portraits, process, pullQuote, statement } from '@/designs/content'
import WorkCard from './WorkCard'

const hero = { src: '/pieces/decorative/blue_wing_teal/1.jpg', width: 4032, height: 3024 }

const primary = 'inline-block bg-coal-100 text-coal-950 px-5 py-2.5 text-sm font-medium hover:bg-white transition-colors'
const secondary = 'inline-block border border-white/20 px-5 py-2.5 text-sm hover:border-brass-400 hover:text-brass-300 transition-colors'

export default function Home() {
  return (
    <>
      <section className="max-w-8xl mx-auto px-5 md:px-8 pt-8 md:pt-16">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <p className="text-[11px] uppercase tracking-[0.3em] text-brass-400">Decorative wildfowl sculpture</p>
            <h1 className="mt-4 font-fraunces text-[2.75rem] leading-[0.95] sm:text-6xl md:text-7xl">
              Carved in tupelo.
              <br />
              <em className="font-light text-coal-300">Made to commission.</em>
            </h1>
            <p className="mt-6 max-w-md text-[15px] md:text-base leading-relaxed text-coal-300">{intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/commission" className={primary}>Commission a piece</Link>
              <Link href="/gallery" className={secondary}>See the work</Link>
            </div>
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2 relative">
            <Image
              src={hero.src}
              alt="Blue-winged Teal, carved and painted by Charles Gunther"
              width={hero.width}
              height={hero.height}
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="w-full h-auto"
              priority
            />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,#0c0b0a_100%)]" aria-hidden="true" />
          </div>
        </div>
      </section>

      <section className="max-w-8xl mx-auto px-5 md:px-8 mt-16 md:mt-28">
        <div className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-4">
          <h2 className="font-fraunces text-3xl md:text-4xl">Selected work</h2>
          <Link href="/gallery" className="text-sm text-coal-300 hover:text-white transition-colors whitespace-nowrap">All work &rarr;</Link>
        </div>
        <div className="mt-6 md:mt-8 columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6">
          {featuredPieces().map((piece) => (
            <WorkCard key={piece.id} piece={piece} />
          ))}
        </div>
      </section>

      <section className="max-w-8xl mx-auto px-5 md:px-8 mt-20 md:mt-32">
        <div className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-4">
          <h2 className="font-fraunces text-3xl md:text-4xl">From the bird to the block</h2>
          <Link href="/process" className="text-sm text-coal-300 hover:text-white transition-colors whitespace-nowrap">The process &rarr;</Link>
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
      </section>

      <section className="max-w-8xl mx-auto px-5 md:px-8 mt-20 md:mt-32">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          <Image
            src={portraits.falconry.src}
            alt={portraits.falconry.alt}
            width={portraits.falconry.width}
            height={portraits.falconry.height}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="w-full h-auto rounded-sm"
          />
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-brass-400">{commissions.heading}</p>
            <blockquote className="mt-4 font-fraunces text-3xl md:text-4xl leading-tight">
              &ldquo;{pullQuote}&rdquo;
            </blockquote>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-coal-300">{commissions.lead}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/commission" className={primary}>Start a conversation</Link>
              <Link href="/about" className={secondary}>About Charles</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
