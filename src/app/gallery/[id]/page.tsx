import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import ImageGallery from '@/components/ImageGallery'
import { getPiece, pieces } from '@/data/pieces'

type PiecePageProps = {
  params: Promise<{ id: string }>
}

export const dynamicParams = false

export function generateStaticParams() {
  return pieces.map((piece) => ({ id: piece.id }))
}

export async function generateMetadata({ params }: PiecePageProps): Promise<Metadata> {
  const { id } = await params
  const piece = getPiece(id)
  return piece ? { title: piece.title } : {}
}

export default async function PiecePage({ params }: PiecePageProps) {
  const { id } = await params
  const piece = getPiece(id)

  if (!piece) {
    notFound()
  }

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

        <ImageGallery title={piece.title} folder={piece.folder} imageCount={piece.imageCount} />
      </div>
    </div>
  )
}
