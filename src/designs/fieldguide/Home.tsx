import Link from 'next/link'
import Image from 'next/image'
import { featuredPieces, pieceThumbnail, plateNumber } from '@/data/pieces'
import { commissions, intro, process, pullQuote, statement } from '@/designs/content'
import { roman } from './plates'

const hero = { src: '/pieces/decorative/blue_wing_teal/thumbnail.jpg', width: 4032, height: 3024, alt: 'Blue-winged Teal, carved and painted by Charles Gunther' }

const button = 'inline-block px-5 py-2.5 text-sm font-medium transition-colors'
const primary = `${button} border-2 border-moss-800 bg-moss-800 text-paper-50 hover:bg-moss-900 hover:border-moss-900`
const secondary = `${button} border-2 border-moss-800 text-moss-900 hover:bg-moss-800 hover:text-paper-50`

export default function Home() {
  return (
    <div className="px-5 py-8 lg:px-12 lg:py-12 max-w-6xl">
      <section className="text-center max-w-3xl mx-auto">
        <p className="text-[11px] uppercase tracking-[0.25em] text-rust-700">New Jersey &middot; est. in the studio over thirty years</p>
        <h1 className="mt-3 text-[2.2rem] leading-[1.1] lg:text-5xl font-medium">{statement}</h1>
        <div className="mt-6 border-t-[3px] border-double border-moss-800 w-24 mx-auto" />
        <p className="mt-6 text-[15px] lg:text-lg leading-relaxed text-moss-800">{intro}</p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link href="/commission" className={primary}>Commission a piece</Link>
          <Link href="/gallery" className={secondary}>See the plates</Link>
        </div>
      </section>

      <figure className="mt-10 lg:mt-14">
        <div className="border border-paper-400 bg-paper-100 p-2 sm:p-3">
          <Image src={hero.src} alt={hero.alt} width={hero.width} height={hero.height} sizes="(max-width: 1024px) 100vw, 900px" className="w-full h-auto" priority />
        </div>
        <figcaption className="mt-3 text-sm italic text-moss-700 text-center">Frontispiece: Blue-winged Teal, <span className="not-italic">Spatula discors</span>, tupelo and oil</figcaption>
      </figure>

      <section className="mt-14 lg:mt-20">
        <div className="flex items-baseline justify-between gap-4 border-b-[3px] border-double border-moss-800 pb-2">
          <h2 className="text-2xl lg:text-[1.7rem] font-medium">Selected plates</h2>
          <Link href="/gallery" className="text-[11px] uppercase tracking-[0.2em] text-rust-700 hover:underline whitespace-nowrap">All plates &rarr;</Link>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-x-5 gap-y-7 sm:grid-cols-3">
          {featuredPieces().map((piece) => (
            <Link key={piece.id} href={`/gallery/${piece.id}`} className="group block">
              <div className="border border-paper-400 bg-paper-100 p-1.5 group-hover:border-moss-700 transition-colors">
                <div className="relative aspect-square bg-paper-50">
                  <Image src={pieceThumbnail(piece)} alt={piece.title} fill sizes="(max-width: 640px) 50vw, 33vw" className="object-cover" />
                </div>
              </div>
              <p className="mt-2 text-sm leading-snug">
                <span className="text-[10px] uppercase tracking-[0.15em] text-rust-700 block">Plate {roman(plateNumber(piece))}</span>
                <span className="font-medium">{piece.title}</span>
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-14 lg:mt-20">
        <div className="border-b-[3px] border-double border-moss-800 pb-2">
          <h2 className="text-2xl lg:text-[1.7rem] font-medium">The method</h2>
        </div>
        <p className="mt-3 text-[15px] italic text-moss-700 max-w-prose">&ldquo;{pullQuote}&rdquo;</p>
        <ol className="mt-6 grid grid-cols-3 gap-x-4 gap-y-6 sm:gap-x-6">
          {process.slice(0, 3).map((step, index) => (
            <li key={step.src}>
              <div className="border border-paper-400 bg-paper-100 p-1.5">
                <div className="relative aspect-square">
                  <Image src={step.src} alt={step.title} fill sizes="(max-width: 640px) 33vw, 30vw" className="object-cover" />
                </div>
              </div>
              <p className="mt-2 text-xs sm:text-sm leading-snug">
                <span className="text-rust-700 mr-1">Fig. {index + 1}</span>
                {step.title}
              </p>
            </li>
          ))}
        </ol>
        <p className="mt-4 text-sm">
          <Link href="/process" className="text-rust-700 underline underline-offset-4 decoration-paper-400 hover:decoration-rust-700">From the bird to the block, in six stages</Link>
        </p>
      </section>

      <section className="mt-14 lg:mt-20 border-y-[3px] border-double border-moss-800 py-8 text-center">
        <h2 className="text-2xl lg:text-[1.7rem] font-medium">{commissions.heading}</h2>
        <p className="mt-3 max-w-2xl mx-auto text-[15px] leading-relaxed text-moss-800">{commissions.lead}</p>
        <Link href="/commission" className={`${primary} mt-6`}>Start a conversation</Link>
      </section>
    </div>
  )
}
