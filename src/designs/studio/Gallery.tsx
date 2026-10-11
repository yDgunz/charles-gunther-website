import Link from 'next/link'
import { categories, pieces, piecesInCategory } from '@/data/pieces'
import WorkCard from './WorkCard'

export default function Gallery() {
  return (
    <section className="max-w-8xl mx-auto px-5 md:px-8 py-8 md:py-12">
      <div className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-4">
        <h1 className="font-fraunces text-3xl md:text-4xl">Work</h1>
        <span className="text-sm text-coal-400">{pieces.length} pieces</span>
      </div>
      <p className="mt-4 max-w-md text-[15px] leading-relaxed text-coal-300">
        Most of Charles&rsquo;s work is now made to order.{' '}
        <Link href="/commission" className="text-white hover:text-brass-300 transition-colors">Commission a piece &rarr;</Link>
      </p>

      {categories.map((category) => {
        const group = piecesInCategory(category.id)
        return (
          <div key={category.id} id={category.id} className="mt-10 md:mt-16 scroll-mt-20">
            <div className="flex items-baseline gap-4">
              <h2 className="text-[11px] uppercase tracking-[0.3em] text-brass-400">{category.name}</h2>
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
  )
}
