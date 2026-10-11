import type { Metadata } from 'next'
import { getDesign } from '@/designs'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Charles Gunther, a New Jersey based wood carver focused on decorative wildfowl sculptures.',
}

export default async function AboutPage() {
  const { About } = await getDesign()
  return <About />
}
