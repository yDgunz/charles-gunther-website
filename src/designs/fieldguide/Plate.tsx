import Link from 'next/link'
import Image from 'next/image'
import { plateNumber, pieceThumbnail, type Piece } from '@/data/pieces'
import { roman } from './plates'

/** A piece shown as a numbered plate: matted photograph with a figure caption. */
export default function Plate({ piece }: { piece: Piece }) {
  return (
    <Link href={`/gallery/${piece.id}`} className="group block">
      <figure>
        <div className="border border-paper-400 bg-paper-100 p-2 group-hover:border-moss-700 transition-colors">
          <div className="relative aspect-[4/3] bg-paper-50">
            <Image
              src={pieceThumbnail(piece)}
              alt={piece.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
              className="object-contain"
            />
          </div>
        </div>
        <figcaption className="mt-3 flex gap-3 text-sm leading-snug">
          <span className="shrink-0 text-[11px] uppercase tracking-[0.15em] text-rust-700 pt-0.5">
            Plate {roman(plateNumber(piece))}
          </span>
          <span>
            <span className="block font-medium">{piece.title}</span>
            <span className="block italic text-moss-700">{piece.species}</span>
            {piece.medium && <span className="block text-xs text-moss-700 mt-0.5">{piece.medium}</span>}
          </span>
        </figcaption>
      </figure>
    </Link>
  )
}
