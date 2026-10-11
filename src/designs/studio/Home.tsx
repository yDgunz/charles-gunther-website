import Link from 'next/link'
import Image from 'next/image'
import { categories, pieces, piecesInCategory } from '@/data/pieces'
import { portraits, process, pullQuote } from '@/designs/content'
import WorkCard from './WorkCard'

const hero = { src: '/pieces/decorative/blue_wing_teal/1.jpg', width: 4032, height: 3024 }

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
              <em className="font-light text-coal-300">Painted from life.</em>
            </h1>
            <p className="mt-6 max-w-md text-[15px] md:text-base leading-relaxed text-coal-300">
              Charles Gunther has carved waterfowl, birds of prey and songbirds in New Jersey for more than thirty
              years, working from the living birds he keeps in his own aviary.
            </p>
            <a href="#work" className="mt-8 inline-flex items-center gap-2 text-sm text-white hover:text-brass-300 transition-colors">
              See the work <span aria-hidden="true">&darr;</span>
            </a>
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

      <section id="work" className="max-w-8xl mx-auto px-5 md:px-8 mt-16 md:mt-28 scroll-mt-20">
        <div className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-4">
          <h2 className="font-fraunces text-3xl md:text-4xl">Selected work</h2>
          <span className="text-sm text-coal-400">{pieces.length} pieces</span>
        </div>

        {categories.map((category) => {
          const group = piecesInCategory(category.id)
          return (
            <div key={category.id} id={category.id} className="mt-10 md:mt-16 scroll-mt-20">
              <div className="flex items-baseline gap-4">
                <h3 className="text-[11px] uppercase tracking-[0.3em] text-brass-400">{category.name}</h3>
                <span className="text-xs text-coal-400">{group.length}</span>
              </div>
              <div className="mt-4 md:mt-6 columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6">
                {group.map((piece) => (
                  <WorkCard key={piece.id} piece={piece} />
                ))}
              </div>
            </div>
          )
        })}
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
            <p className="text-[11px] uppercase tracking-[0.3em] text-brass-400">The carver</p>
            <blockquote className="mt-4 font-fraunces text-3xl md:text-4xl leading-tight">
              &ldquo;{pullQuote}&rdquo;
            </blockquote>
            <Link href="/about" className="mt-6 inline-block text-sm text-white hover:text-brass-300 transition-colors">
              About Charles <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-8xl mx-auto px-5 md:px-8 mt-20 md:mt-32">
        <div className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-4">
          <h2 className="font-fraunces text-3xl md:text-4xl">From the bird to the block</h2>
        </div>
        <ol className="mt-6 md:mt-8 grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-5">
          {process.map((step, index) => (
            <li key={step.src}>
              <div className="relative aspect-square overflow-hidden rounded-sm bg-coal-900">
                <Image src={step.src} alt={step.caption} fill sizes="(max-width: 768px) 33vw, 16vw" className="object-cover" />
              </div>
              <p className="mt-2 text-xs leading-snug text-coal-300">
                <span className="text-brass-400 mr-1">{String(index + 1).padStart(2, '0')}</span>
                {step.caption}
              </p>
            </li>
          ))}
        </ol>
      </section>
    </>
  )
}
