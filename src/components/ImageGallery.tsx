'use client'

import { useState } from 'react'
import Image from 'next/image'

type ImageGalleryProps = {
  title: string
  folder: string
  imageCount: number
}

export default function ImageGallery({ title, folder, imageCount }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const images = Array.from({ length: imageCount }, (_, i) => `${i + 1}.jpg`)

  return (
    <>
      {/* Main Image */}
      <div className="aspect-square bg-bark-100 relative overflow-hidden mb-4">
        <Image
          src={`/pieces/${folder}/${images[selectedImage]}`}
          alt={`${title} - Image ${selectedImage + 1}`}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 896px"
          priority
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="grid grid-cols-6 gap-2">
          {images.map((img, index) => (
            <button
              key={img}
              type="button"
              onClick={() => setSelectedImage(index)}
              aria-label={`Show image ${index + 1}`}
              aria-pressed={selectedImage === index}
              className={`aspect-square relative overflow-hidden ${
                selectedImage === index ? 'ring-2 ring-bark-800' : 'opacity-70 hover:opacity-100'
              }`}
            >
              <Image
                src={`/pieces/${folder}/${img}`}
                alt=""
                fill
                className="object-cover"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      )}
    </>
  )
}
