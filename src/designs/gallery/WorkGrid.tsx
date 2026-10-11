'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { categories, pieces, pieceThumbnail, type CategoryId } from '@/data/pieces'

type Filter = CategoryId | 'all'

/** Pieces at their natural proportions in flowing columns, with a family filter. */
export default function WorkGrid() {
  const [filter, setFilter] = useState<Filter>('all')
  const shown = filter === 'all' ? pieces : pieces.filter((piece) => piece.category === filter)

  const options: { id: Filter; name: string }[] = [{ id: 'all', name: 'All work' }, ...categories]

  return (
    <>
      <div
        role="group"
        aria-label="Filter by family"
        className="-mx-5 px-5 flex gap-6 overflow-x-auto whitespace-nowrap text-[11px] uppercase tracking-[0.2em] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:mx-0 md:px-0 md:flex-wrap md:whitespace-normal"
      >
        {options.map((option) => {
          const isActive = option.id === filter
          return (
            <button
              key={option.id}
              type="button"
              onClick={() => setFilter(option.id)}
              aria-pressed={isActive}
              className={`pb-1 border-b transition-colors ${
                isActive ? 'border-ink-900 text-ink-900' : 'border-transparent text-ink-500 hover:text-ink-900'
              }`}
            >
              {option.name}
            </button>
          )
        })}
      </div>

      <div className="mt-8 md:mt-12 columns-1 sm:columns-2 lg:columns-3 gap-8 md:gap-10">
        {shown.map((piece) => {
          const [width, height] = piece.thumbnail
          return (
            <Link
              key={piece.id}
              href={`/gallery/${piece.id}`}
              className="group block break-inside-avoid mb-10 md:mb-12"
            >
              <div className="overflow-hidden bg-ink-100">
                <Image
                  src={pieceThumbnail(piece)}
                  alt={piece.title}
                  width={width}
                  height={height}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div className="mt-3 flex items-baseline justify-between gap-4">
                <div>
                  <h3 className="font-cormorant text-2xl leading-tight">{piece.title}</h3>
                  <p className="font-cormorant italic text-ink-500 text-lg leading-tight">{piece.species}</p>
                </div>
                {piece.medium && (
                  <p className="shrink-0 text-[10px] uppercase tracking-[0.18em] text-ink-400">{piece.medium}</p>
                )}
              </div>
            </Link>
          )
        })}
      </div>
    </>
  )
}
