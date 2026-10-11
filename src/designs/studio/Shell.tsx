import type { ReactNode } from 'react'
import Link from 'next/link'
import { Fraunces } from 'next/font/google'
import NavLinks from '@/components/NavLinks'
import { site } from '@/designs/content'

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: 'variable',
  style: ['normal', 'italic'],
  axes: ['opsz'],
  variable: '--font-fraunces',
})

const navigation = [
  { name: 'Work', href: '/gallery' },
  { name: 'Process', href: '/process' },
  { name: 'Commission', href: '/commission' },
  { name: 'About', href: '/about' },
]

export default function Shell({ children }: { children: ReactNode }) {
  return (
    <div className={`${fraunces.variable} min-h-screen flex flex-col bg-coal-950 text-coal-100`}>
      <header className="sticky top-0 z-40 bg-coal-950/85 backdrop-blur border-b border-white/5">
        <div className="max-w-8xl mx-auto px-5 md:px-8 h-14 md:h-16 flex items-center justify-between">
          <Link href="/" className="font-fraunces text-base md:text-lg tracking-tight whitespace-nowrap">
            {site.name} <span className="hidden sm:inline text-coal-400 font-light">/ Wildfowl</span>
          </Link>
          <nav className="flex gap-3 sm:gap-5 md:gap-8 text-xs sm:text-sm">
            <NavLinks
              items={navigation}
              className="text-coal-300 hover:text-white transition-colors"
              activeClassName="!text-white"
            />
          </nav>
        </div>
      </header>

      <main className="flex-grow">{children}</main>

      <footer className="border-t border-white/5 mt-20 md:mt-28">
        <div className="max-w-8xl mx-auto px-5 md:px-8 py-10 md:py-14">
          <p className="text-[11px] uppercase tracking-[0.3em] text-brass-400">Commissions and inquiries</p>
          <Link href="/commission" className="mt-3 block font-fraunces text-2xl sm:text-3xl md:text-5xl font-light hover:text-brass-300 transition-colors">
            Commission a piece &rarr;
          </Link>
          <a href={`mailto:${site.email}`} className="mt-3 inline-block text-sm text-coal-300 hover:text-white transition-colors">{site.email}</a>
          <div className="mt-8 md:mt-12 flex flex-wrap justify-between gap-3 text-xs text-coal-400">
            <p>&copy; {new Date().getFullYear()} {site.name} &middot; {site.location}</p>
            <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white">@{site.instagram}</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
