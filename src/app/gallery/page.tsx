import type { Metadata } from 'next'
import { getDesign } from '@/designs'

export const metadata: Metadata = {
  title: 'Work',
  description: 'Decorative wildfowl carvings by Charles Gunther: waterfowl, birds of prey and songbirds.',
}

export default async function GalleryPage() {
  const { Gallery } = await getDesign()
  return <Gallery />
}
