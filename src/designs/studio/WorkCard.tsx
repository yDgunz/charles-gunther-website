import Link from 'next/link'
import Image from 'next/image'
import { pieceThumbnail, type Piece } from '@/data/pieces'

export default function WorkCard({ piece }: { piece: Piece }) {
  const [width, height] = piece.thumbnail
  return (
    <Link
      href={`/gallery/${piece.id}`}
      className="group relative block break-inside-avoid mb-4 md:mb-6 overflow-hidden rounded-sm bg-coal-900"
    >
      <Image
        src={pieceThumbnail(piece)}
        alt={piece.title}
        width={width}
        height={height}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.03]"
      />
      <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 bg-gradient-to-t from-coal-950/90 via-coal-950/50 to-transparent">
        <h3 className="font-fraunces text-xl md:text-2xl leading-none text-white">{piece.title}</h3>
        <p className="mt-1 text-sm italic text-coal-300">{piece.species}</p>
      </div>
    </Link>
  )
}
