'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const pieces: Record<string, { title: string; folder: string; imageCount: number }> = {
  'black_duck': { title: 'Black Duck', folder: 'decorative/black_duck', imageCount: 3 },
  'blue_wing_teal': { title: 'Blue Winged Teal', folder: 'decorative/blue_wing_teal', imageCount: 3 },
  'canada_goose': { title: 'Canada Goose', folder: 'decorative/canada_goose', imageCount: 3 },
  'hornbill': { title: "Blyth's Hornbill", folder: 'decorative/hornbill', imageCount: 4 },
  'loon': { title: 'Common Loon', folder: 'decorative/loon', imageCount: 1 },
  'mallard_drake': { title: 'Mallard', folder: 'decorative/mallard_drake', imageCount: 3 },
  'pied_bill_grebe': { title: 'Pied-billed Grebe', folder: 'decorative/pied_bill_grebe', imageCount: 2 },
  'redhead': { title: 'Redhead', folder: 'decorative/redhead', imageCount: 1 },
  'screech_owl_3': { title: 'Screech Owl', folder: 'birds_of_prey/screech_owl_3', imageCount: 3 },
  'kestral': { title: 'American Kestrel', folder: 'birds_of_prey/kestral', imageCount: 4 },
  'kestral2': { title: 'American Kestrel', folder: 'birds_of_prey/kestral2', imageCount: 4 },
  'peregrine_falcon': { title: 'Peregrine Falcon', folder: 'birds_of_prey/peregrine_falcon', imageCount: 5 },
  'screech_owl': { title: 'Screech Owl', folder: 'birds_of_prey/screech_owl', imageCount: 1 },
  'screech_owl_2': { title: 'Screech Owl', folder: 'birds_of_prey/screech_owl_2', imageCount: 7 },
  'great_horned_owl': { title: 'Great Horned Owl', folder: 'birds_of_prey/great_horned_owl', imageCount: 4 },
  'blue_jay': { title: 'Blue Jay', folder: 'songbirds/blue_jay', imageCount: 3 },
  'robin': { title: 'American Robin', folder: 'songbirds/robin', imageCount: 2 },
  'mallard_hen_smoothie': { title: 'Mallard', folder: 'smoothies/mallard_hen_smoothie', imageCount: 4 },
  'pied_bill_grebe_smoothie': { title: 'Pied-billed Grebe', folder: 'smoothies/pied_bill_grebe_smoothie', imageCount: 2 },
  'wigeon': { title: 'American Wigeon', folder: 'smoothies/wigeon', imageCount: 3 },
}

export default function PiecePage({ params }: { params: { id: string } }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const piece = pieces[params.id]

  if (!piece) {
    notFound()
  }

  const images = Array.from({ length: piece.imageCount }, (_, i) => `${i + 1}.jpg`)

  return (
    <div className="py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/gallery"
          className="inline-flex items-center text-bark-600 hover:text-bark-800 mb-8"
        >
          <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Gallery
        </Link>

        <h1 className="text-3xl md:text-4xl font-display font-bold text-bark-800 mb-8">
          {piece.title}
        </h1>

        {/* Main Image */}
        <div className="aspect-square bg-bark-100 relative rounded-lg overflow-hidden mb-4">
          <Image
            src={`/pieces/${piece.folder}/${images[selectedImage]}`}
            alt={`${piece.title} - Image ${selectedImage + 1}`}
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
                onClick={() => setSelectedImage(index)}
                className={`aspect-square relative rounded overflow-hidden ${
                  selectedImage === index ? 'ring-2 ring-bark-700' : 'opacity-70 hover:opacity-100'
                }`}
              >
                <Image
                  src={`/pieces/${piece.folder}/${img}`}
                  alt={`${piece.title} thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
