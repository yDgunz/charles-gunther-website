import type { Metadata } from 'next'
import Commission from './_commission'

export const metadata: Metadata = {
  title: 'Inquiries',
  description: 'Inquire about a decorative wildfowl carving from Charles Gunther.',
}

export default function CommissionPage() {
  return <Commission />
}
