import Link from 'next/link'
import NavLinks from '@/components/NavLinks'
import { site } from '@/content'

const navigation = [
  { name: 'Work', href: '/gallery' },
  { name: 'Process', href: '/process' },
  { name: 'About', href: '/about' },
  { name: 'Inquiries', href: '/commission' },
]

export default function Header() {
  return (
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
  )
}
