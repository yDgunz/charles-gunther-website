import type { Metadata } from 'next'
import Process from './_process'

export const metadata: Metadata = {
  title: 'Process',
  description: 'How a Charles Gunther carving is made, from time with the living bird to the finished, painted piece.',
}

export default function ProcessPage() {
  return <Process />
}
