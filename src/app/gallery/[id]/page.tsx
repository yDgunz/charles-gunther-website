import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPiece, pieces } from '@/data/pieces'
import Piece from './_piece'

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
  return piece ? { title: piece.title, description: `${piece.title} (${piece.species}), carved and painted by Charles Gunther.` } : {}
}

export default async function PiecePage({ params }: PiecePageProps) {
  const { id } = await params
  const piece = getPiece(id)

  if (!piece) {
    notFound()
  }

  return <Piece piece={piece} />
}
