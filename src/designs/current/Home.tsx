import Link from 'next/link'
import Image from 'next/image'
import { pieces, pieceThumbnail } from '@/data/pieces'

export default function Home() {
  return (
    <div className="py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {pieces.map((piece) => (
            <Link key={piece.id} href={`/gallery/${piece.id}`} className="card group">
              <div className="aspect-[4/3] bg-bark-100 relative overflow-hidden">
                <Image
                  src={pieceThumbnail(piece)}
                  alt={piece.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-3">
                <h3 className="font-display font-normal text-bark-700">
                  {piece.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
