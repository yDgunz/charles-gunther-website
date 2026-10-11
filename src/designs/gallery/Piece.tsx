import Link from 'next/link'
import Image from 'next/image'
import PieceViewer from '@/components/PieceViewer'
import { getCategory, piecesInCategory, pieceThumbnail, type Piece } from '@/data/pieces'
import { site } from '@/designs/content'

const viewer = {
  frame: 'relative w-full bg-ink-100',
  image: 'object-contain',
  strip: 'mt-3 flex gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
  thumb: 'relative h-16 w-16 md:h-20 md:w-20 flex-none overflow-hidden transition-opacity',
  thumbActive: 'ring-1 ring-ink-900 ring-offset-2 ring-offset-ink-50',
  thumbInactive: 'opacity-50 hover:opacity-100',
}

export default function PiecePage({ piece }: { piece: Piece }) {
  const category = getCategory(piece.category)
  const related = piecesInCategory(piece.category).filter((p) => p.id !== piece.id).slice(0, 4)
  const subject = encodeURIComponent(`Inquiry: ${piece.title}`)

  return (
    <div className="max-w-7xl mx-auto px-5 py-8 md:py-14">
      <Link href="/gallery" className="text-[11px] uppercase tracking-[0.2em] text-ink-500 hover:text-ink-900">
        &larr; Work
      </Link>

      <div className="mt-5 md:mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-x-16 lg:gap-y-8 items-start">
        <div className="lg:col-start-2 lg:row-start-1">
          <p className="text-[11px] uppercase tracking-[0.2em] text-ink-500">{category.name}</p>
          <h1 className="mt-1 lg:mt-2 font-cormorant text-4xl lg:text-5xl leading-none">{piece.title}</h1>
          <p className="mt-1 lg:mt-2 font-cormorant italic text-xl text-ink-500">{piece.species}</p>
        </div>

        <div className="min-w-0 lg:col-start-1 lg:row-start-1 lg:row-span-2">
          <PieceViewer piece={piece} styles={viewer} natural sizes="(max-width: 1024px) 100vw, 900px" />
        </div>

        <aside className="lg:col-start-2 lg:row-start-2">
          <dl className="border-t border-ink-200 text-sm">
            {piece.medium && (
              <div className="flex justify-between gap-4 py-3 border-b border-ink-200">
                <dt className="text-ink-500">Medium</dt>
                <dd className="text-right">{piece.medium}</dd>
              </div>
            )}
            <div className="flex justify-between gap-4 py-3 border-b border-ink-200">
              <dt className="text-ink-500">Views</dt>
              <dd className="text-right">{piece.images.length} {piece.images.length === 1 ? 'photograph' : 'photographs'}</dd>
            </div>
          </dl>
          {piece.note && <p className="mt-4 text-sm text-ink-600 leading-relaxed">{piece.note}</p>}

          <a
            href={`mailto:${site.email}?subject=${subject}`}
            className="mt-6 inline-block border-b border-ink-900 pb-1 text-[11px] uppercase tracking-[0.2em] hover:text-ink-600 hover:border-ink-600"
          >
            Inquire about this piece
          </a>
        </aside>
      </div>

      {related.length > 0 && (
        <section className="mt-16 md:mt-24 border-t border-ink-200 pt-8">
          <h2 className="text-[11px] uppercase tracking-[0.2em] text-ink-500">More {category.name}</h2>
          <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {related.map((p) => (
              <Link key={p.id} href={`/gallery/${p.id}`} className="group">
                <div className="relative aspect-square overflow-hidden bg-ink-100">
                  <Image
                    src={pieceThumbnail(p)}
                    alt={p.title}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <p className="mt-2 font-cormorant text-lg leading-tight">{p.title}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
