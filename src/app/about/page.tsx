import type { Metadata } from 'next'
import About from './_about'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Charles Gunther, a New Jersey based wood carver focused on decorative wildfowl sculptures.',
}

export default function AboutPage() {
  return <About />
}
