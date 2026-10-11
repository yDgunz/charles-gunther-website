import Link from 'next/link'
import Image from 'next/image'
import { featuredPieces, pieceThumbnail } from '@/data/pieces'
import { commissions, intro, portraits, process, pullQuote, statement } from '@/designs/content'

const hero = { src: '/pieces/birds_of_prey/screech_owl/thumbnail.jpg', width: 3993, height: 3993, alt: 'Screech Owl, carved and painted by Charles Gunther' }

const button = 'inline-block px-6 py-3 text-[11px] uppercase tracking-[0.2em] transition-colors'
const primary = `${button} bg-ink-900 text-ink-50 hover:bg-ink-700`
const secondary = `${button} border border-ink-300 text-ink-900 hover:border-ink-900`

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-5">
      <section className="py-10 md:py-20 grid gap-8 md:grid-cols-2 md:gap-16 items-center">
        <div className="order-2 md:order-1">
          <h1 className="font-cormorant text-[2.4rem] leading-[1.05] md:text-6xl">{statement}</h1>
          <p className="mt-5 max-w-md text-[15px] text-ink-600 leading-relaxed">{intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/commission" className={primary}>Commission a piece</Link>
            <Link href="/gallery" className={secondary}>View the work</Link>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <Image src={hero.src} alt={hero.alt} width={hero.width} height={hero.height} sizes="(max-width: 768px) 100vw, 50vw" className="w-full h-auto" priority />
        </div>
      </section>

      <section className="border-t border-ink-200 pt-8 md:pt-12">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-[11px] uppercase tracking-[0.2em] text-ink-500">Selected work</h2>
          <Link href="/gallery" className="text-[11px] uppercase tracking-[0.2em] text-ink-500 hover:text-ink-900">All work &rarr;</Link>
        </div>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {featuredPieces().map((piece) => (
            <Link key={piece.id} href={`/gallery/${piece.id}`} className="group">
              <div className="relative aspect-square overflow-hidden bg-ink-100">
                <Image src={pieceThumbnail(piece)} alt={piece.title} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
              </div>
              <h3 className="mt-3 font-cormorant text-xl md:text-2xl leading-tight">{piece.title}</h3>
              <p className="font-cormorant italic text-ink-500 leading-tight">{piece.species}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-16 md:mt-24 border-t border-ink-200 pt-8 md:pt-12">
        <h2 className="text-[11px] uppercase tracking-[0.2em] text-ink-500">Process</h2>
        <p className="mt-2 font-cormorant text-2xl md:text-3xl max-w-xl">&ldquo;{pullQuote}&rdquo;</p>
        <ol className="mt-6 grid grid-cols-3 gap-3 md:gap-8">
          {process.slice(0, 3).map((step, index) => (
            <li key={step.src}>
              <div className="relative aspect-square overflow-hidden bg-ink-100">
                <Image src={step.src} alt={step.title} fill sizes="(max-width: 768px) 33vw, 30vw" className="object-cover" />
              </div>
              <p className="mt-2 text-xs md:text-sm text-ink-600 leading-snug">
                <span className="text-ink-400 mr-1.5">{String(index + 1).padStart(2, '0')}</span>
                {step.title}
              </p>
            </li>
          ))}
        </ol>
        <Link href="/process" className="mt-6 inline-block border-b border-ink-900 pb-1 text-[11px] uppercase tracking-[0.2em] hover:text-ink-600 hover:border-ink-600">
          From the bird to the block, in six steps
        </Link>
      </section>

      <section className="mt-16 md:mt-24 border-t border-ink-200 pt-8 md:pt-12 grid gap-8 md:grid-cols-2 md:gap-16 items-center">
        <Image src={portraits.falconry.src} alt={portraits.falconry.alt} width={portraits.falconry.width} height={portraits.falconry.height} sizes="(max-width: 768px) 100vw, 50vw" className="w-full h-auto" />
        <div>
          <h2 className="text-[11px] uppercase tracking-[0.2em] text-ink-500">{commissions.heading}</h2>
          <p className="mt-3 font-cormorant text-2xl md:text-3xl leading-snug">{commissions.lead}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/commission" className={primary}>Start a conversation</Link>
            <Link href="/about" className={secondary}>About Charles</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
