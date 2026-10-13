import type { Metadata } from 'next'
import Gallery from './_gallery'

export const metadata: Metadata = {
  title: 'Work',
  description: 'Decorative wildfowl carvings by Charles Gunther: waterfowl, birds of prey and songbirds.',
}

export default function GalleryPage() {
  return <Gallery />
}
