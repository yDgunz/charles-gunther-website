import type { Metadata } from 'next'
import { getDesign } from '@/designs'

export const metadata: Metadata = {
  title: 'Commission a piece',
  description: 'Commission a decorative wildfowl carving from Charles Gunther.',
}

export default async function CommissionPage() {
  const { Commission } = await getDesign()
  return <Commission />
}
