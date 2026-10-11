'use client'

import { useState } from 'react'
import Image from 'next/image'
import type { Piece } from '@/data/pieces'
import { pieceImages } from '@/data/pieces'

export type ViewerStyles = {
  /** Wrapper around the main image; sets its box and background */
  frame: string
  /** The main image itself (object-fit etc.) */
  image: string
  /** Thumbnail strip container */
  strip: string
  /** Each thumbnail button */
  thumb: string
  thumbActive: string
  thumbInactive: string
}

type PieceViewerProps = {
  piece: Piece
  styles: ViewerStyles
  /** Natural aspect: the frame takes the shape of the selected photo */
  natural?: boolean
  /** Rendered sizes hint for the main image */
  sizes?: string
}

/**
 * Main photo plus a thumbnail strip. Each design passes its own class names,
 * so the behaviour is shared while the look is not.
 */
export default function PieceViewer({ piece, styles, natural = false, sizes = '(max-width: 768px) 100vw, 896px' }: PieceViewerProps) {
  const [selected, setSelected] = useState(0)
  const images = pieceImages(piece)
  const [width, height] = piece.images[selected]

  return (
    <>
      <div
        className={styles.frame}
        // Natural mode keeps the photo's shape and stops small originals from
        // being blown up past the point where they look soft.
        style={natural ? { aspectRatio: `${width} / ${height}`, maxWidth: `${Math.round(width * 1.4)}px`, marginInline: 'auto' } : undefined}
      >
        <Image
          key={images[selected]}
          src={images[selected]}
          alt={`${piece.title}, view ${selected + 1} of ${images.length}`}
          fill
          className={styles.image}
          sizes={sizes}
          priority
        />
      </div>

      {images.length > 1 && (
        <div className={styles.strip}>
          {images.map((src, index) => (
            <button
              key={src}
              type="button"
              onClick={() => setSelected(index)}
              aria-label={`Show view ${index + 1}`}
              aria-pressed={selected === index}
              className={`${styles.thumb} ${selected === index ? styles.thumbActive : styles.thumbInactive}`}
            >
              <Image src={src} alt="" fill className="object-cover" sizes="96px" />
            </button>
          ))}
        </div>
      )}
    </>
  )
}
