import type { Metadata } from 'next'
import { getDesign } from '@/designs'

export const metadata: Metadata = {
  title: 'Process',
  description: 'How a Charles Gunther carving is made, from time with the living bird to the finished, painted piece.',
}

export default async function ProcessPage() {
  const { Process } = await getDesign()
  return <Process />
}
