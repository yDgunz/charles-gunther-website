import Link from 'next/link'
import PieceViewer from '@/components/PieceViewer'
import { getCategory, piecesInCategory, type Piece } from '@/data/pieces'
import { site } from '@/designs/content'

const viewer = {
  frame: 'relative w-full overflow-hidden rounded-sm bg-coal-900',
  image: 'object-contain',
  strip: 'mt-3 flex gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
  thumb: 'relative h-16 w-16 md:h-20 md:w-20 flex-none overflow-hidden rounded-sm transition-opacity',
  thumbActive: 'ring-2 ring-brass-400',
  thumbInactive: 'opacity-40 hover:opacity-100',
}

export default function PiecePage({ piece }: { piece: Piece }) {
  const category = getCategory(piece.category)
  const siblings = piecesInCategory(piece.category)
  const index = siblings.findIndex((p) => p.id === piece.id)
  const prev = siblings[index - 1]
  const next = siblings[index + 1]
  const subject = encodeURIComponent(`Inquiry: ${piece.title}`)

  return (
    <div className="max-w-8xl mx-auto px-5 md:px-8 py-6 md:py-12">
      <Link href={`/gallery#${category.id}`} className="text-sm text-coal-400 hover:text-white transition-colors">
        &larr; {category.name}
      </Link>

      <div className="mt-4 md:mt-6 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16 items-start">
        <div className="min-w-0">
          <PieceViewer piece={piece} styles={viewer} natural sizes="(max-width: 1024px) 100vw, 1000px" />
        </div>

        <aside className="lg:sticky lg:top-24">
          <p className="text-[11px] uppercase tracking-[0.3em] text-brass-400">{category.name}</p>
          <h1 className="mt-3 font-fraunces text-4xl md:text-5xl leading-none">{piece.title}</h1>
          <p className="mt-3 font-fraunces italic text-xl text-coal-300">{piece.species}</p>

          <dl className="mt-8 divide-y divide-white/10 border-y border-white/10 text-sm">
            {piece.medium && (
              <div className="flex justify-between gap-4 py-3">
                <dt className="text-coal-400">Medium</dt>
                <dd className="text-right">{piece.medium}</dd>
              </div>
            )}
            <div className="flex justify-between gap-4 py-3">
              <dt className="text-coal-400">Views</dt>
              <dd className="text-right">{piece.images.length} {piece.images.length === 1 ? 'photograph' : 'photographs'}</dd>
            </div>
          </dl>
          {piece.note && <p className="mt-4 text-sm leading-relaxed text-coal-300">{piece.note}</p>}

          <a
            href={`mailto:${site.email}?subject=${subject}`}
            className="mt-8 inline-block border border-white/20 px-5 py-2.5 text-sm hover:border-brass-400 hover:text-brass-300 transition-colors"
          >
            Ask about this piece
          </a>
        </aside>
      </div>

      <nav className="mt-12 md:mt-16 flex justify-between gap-4 border-t border-white/10 pt-5 text-sm">
        {prev ? (
          <Link href={`/gallery/${prev.id}`} className="text-coal-300 hover:text-white transition-colors">
            <span className="block text-[10px] uppercase tracking-[0.25em] text-coal-400">Previous</span>
            &larr; {prev.title}
          </Link>
        ) : <span />}
        {next ? (
          <Link href={`/gallery/${next.id}`} className="text-right text-coal-300 hover:text-white transition-colors">
            <span className="block text-[10px] uppercase tracking-[0.25em] text-coal-400">Next</span>
            {next.title} &rarr;
          </Link>
        ) : <span />}
      </nav>
    </div>
  )
}
