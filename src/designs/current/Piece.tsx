import Link from 'next/link'
import PieceViewer from '@/components/PieceViewer'
import type { Piece } from '@/data/pieces'

const viewer = {
  frame: 'aspect-square bg-bark-100 relative overflow-hidden mb-4',
  image: 'object-contain',
  strip: 'grid grid-cols-6 gap-2',
  thumb: 'aspect-square relative overflow-hidden',
  thumbActive: 'ring-2 ring-bark-800',
  thumbInactive: 'opacity-70 hover:opacity-100',
}

export default function PiecePage({ piece }: { piece: Piece }) {
  return (
    <div className="py-8 md:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center text-bark-600 hover:text-bark-800 mb-6"
        >
          <svg className="w-3 h-3 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </Link>

        <h1 className="text-xl md:text-2xl font-display font-normal text-bark-900 mb-6">
          {piece.title}
        </h1>

        <PieceViewer piece={piece} styles={viewer} />
      </div>
    </div>
  )
}
