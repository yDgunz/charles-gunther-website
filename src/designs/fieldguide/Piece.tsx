import Link from 'next/link'
import PieceViewer from '@/components/PieceViewer'
import { getCategory, neighbours, plateNumber, type Piece } from '@/data/pieces'
import { site } from '@/designs/content'
import { roman } from './plates'

const viewer = {
  frame: 'relative w-full bg-paper-50',
  image: 'object-contain',
  strip: 'mt-3 grid grid-cols-5 sm:grid-cols-7 gap-2',
  thumb: 'relative aspect-square overflow-hidden border border-paper-400 bg-paper-50 transition-opacity',
  thumbActive: 'ring-2 ring-moss-800',
  thumbInactive: 'opacity-60 hover:opacity-100',
}

export default function PiecePage({ piece }: { piece: Piece }) {
  const category = getCategory(piece.category)
  const { prev, next } = neighbours(piece)
  const plate = roman(plateNumber(piece))
  const subject = encodeURIComponent(`Inquiry: ${piece.title} (Plate ${plate})`)

  return (
    <article className="px-5 py-8 lg:px-12 lg:py-12 max-w-5xl">
      <nav className="text-[11px] uppercase tracking-[0.2em] text-moss-700">
        <Link href="/" className="hover:text-rust-700">Plates</Link>
        <span className="mx-2">/</span>
        <Link href={`/#${category.id}`} className="hover:text-rust-700">{category.name}</Link>
      </nav>

      <div className="mt-4 flex items-baseline gap-4">
        <h1 className="text-3xl lg:text-4xl font-medium leading-tight">{piece.title}</h1>
        <span className="text-[11px] uppercase tracking-[0.2em] text-rust-700 whitespace-nowrap">Plate {plate}</span>
      </div>
      <p className="mt-1 italic text-lg text-moss-700">{piece.species}</p>

      <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-12 items-start">
        <div className="border border-paper-400 bg-paper-100 p-2 sm:p-3">
          <PieceViewer piece={piece} styles={viewer} natural sizes="(max-width: 1024px) 100vw, 800px" />
        </div>

        <aside className="lg:sticky lg:top-10 text-sm">
          <h2 className="text-[11px] uppercase tracking-[0.25em] text-moss-700 border-b-[3px] border-double border-moss-800 pb-2">
            Field notes
          </h2>
          <dl className="mt-3 space-y-3">
            <div>
              <dt className="text-xs text-moss-700">Family</dt>
              <dd>{category.name}</dd>
            </div>
            <div>
              <dt className="text-xs text-moss-700">Scientific name</dt>
              <dd className="italic">{piece.species}</dd>
            </div>
            {piece.medium && (
              <div>
                <dt className="text-xs text-moss-700">Medium</dt>
                <dd>{piece.medium}</dd>
              </div>
            )}
            <div>
              <dt className="text-xs text-moss-700">Views</dt>
              <dd>{piece.images.length} {piece.images.length === 1 ? 'photograph' : 'photographs'}</dd>
            </div>
            {piece.note && (
              <div>
                <dt className="text-xs text-moss-700">Notes</dt>
                <dd>{piece.note}</dd>
              </div>
            )}
          </dl>
          <a
            href={`mailto:${site.email}?subject=${subject}`}
            className="mt-6 inline-block text-rust-700 underline underline-offset-4 decoration-paper-400 hover:decoration-rust-700"
          >
            Inquire about this piece
          </a>
        </aside>
      </div>

      <nav className="mt-12 flex justify-between gap-4 border-t border-paper-300 pt-4 text-sm">
        {prev ? (
          <Link href={`/gallery/${prev.id}`} className="hover:text-rust-700">
            <span className="block text-[10px] uppercase tracking-[0.2em] text-moss-700">Previous plate</span>
            &larr; {prev.title}
          </Link>
        ) : <span />}
        {next ? (
          <Link href={`/gallery/${next.id}`} className="text-right hover:text-rust-700">
            <span className="block text-[10px] uppercase tracking-[0.2em] text-moss-700">Next plate</span>
            {next.title} &rarr;
          </Link>
        ) : <span />}
      </nav>
    </article>
  )
}
