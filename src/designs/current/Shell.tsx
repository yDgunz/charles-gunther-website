import type { ReactNode } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Shell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-cream-50 text-bark-900 text-sm">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
}
