import type { ReactNode } from 'react'
import Link from 'next/link'
import { Cormorant_Garamond } from 'next/font/google'
import NavLinks from '@/components/NavLinks'
import { site } from '@/designs/content'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
})

const navigation = [
  { name: 'Work', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/about#contact' },
]

export default function Shell({ children }: { children: ReactNode }) {
  return (
    <div className={`${cormorant.variable} min-h-screen flex flex-col bg-ink-50 text-ink-900`}>
      <header className="border-b border-ink-200">
        <div className="max-w-7xl mx-auto px-5 pt-7 pb-5 md:pt-10 md:pb-7 text-center">
          <Link href="/" className="inline-block">
            <span className="block font-cormorant text-3xl md:text-4xl font-normal tracking-wide leading-none">
              {site.name}
            </span>
            <span className="mt-2 block text-[10px] md:text-[11px] uppercase tracking-[0.32em] text-ink-500">
              Wildfowl Sculpture &middot; {site.location}
            </span>
          </Link>
          <nav className="mt-5 md:mt-7 flex justify-center gap-7 md:gap-10 text-[11px] uppercase tracking-[0.22em]">
            <NavLinks
              items={navigation}
              className="pb-1 border-b border-transparent text-ink-600 hover:text-ink-900 transition-colors"
              activeClassName="!border-ink-900 !text-ink-900"
            />
          </nav>
        </div>
      </header>

      <main className="flex-grow">{children}</main>

      <footer className="border-t border-ink-200 mt-20">
        <div className="max-w-7xl mx-auto px-5 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] uppercase tracking-[0.18em] text-ink-500">
          <p>&copy; {new Date().getFullYear()} {site.name}</p>
          <div className="flex gap-6">
            <a href={`mailto:${site.email}`} className="hover:text-ink-900 normal-case tracking-normal text-xs">{site.email}</a>
            <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-ink-900">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
