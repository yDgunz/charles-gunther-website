import type { ReactNode } from 'react'
import Link from 'next/link'
import { Lora } from 'next/font/google'
import NavLinks from '@/components/NavLinks'
import { categories, piecesInCategory } from '@/data/pieces'
import { site } from '@/designs/content'

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-lora',
})

const pages = [
  { name: 'About the carver', href: '/about' },
  { name: 'Contact', href: '/about#contact' },
]

export default function Shell({ children }: { children: ReactNode }) {
  return (
    <div className={`${lora.variable} paper-grain min-h-screen bg-paper-50 text-moss-900 font-lora`}>
      <div className="lg:grid lg:grid-cols-[272px_minmax(0,1fr)] min-h-screen">
        <aside className="border-b border-paper-300 bg-paper-100 lg:border-b-0 lg:border-r lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto">
          <div className="px-5 py-5 lg:px-7 lg:py-10 flex flex-col lg:min-h-full">
            <Link href="/" className="block">
              <span className="block text-2xl lg:text-[1.7rem] font-medium leading-tight">{site.name}</span>
              <span className="mt-1 block text-[10px] uppercase tracking-[0.25em] text-moss-700">
                Wildfowl carvings &middot; a field guide
              </span>
            </Link>

            <nav className="mt-4 lg:mt-10 -mx-5 px-5 lg:mx-0 lg:px-0 flex lg:flex-col [mask-image:linear-gradient(to_right,black_calc(100%-2.5rem),transparent)] lg:[mask-image:none] gap-x-5 gap-y-2 overflow-x-auto whitespace-nowrap text-[13px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:whitespace-normal">
              <span className="hidden lg:block text-[10px] uppercase tracking-[0.25em] text-moss-700 mb-1">Contents</span>
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/#${category.id}`}
                  className="flex items-baseline gap-2 text-moss-800 hover:text-rust-700"
                >
                  <span>{category.name}</span>
                  <span className="hidden lg:inline flex-1 border-b border-dotted border-paper-400 translate-y-[-3px]" />
                  <span className="text-xs text-moss-700 tabular-nums">{piecesInCategory(category.id).length}</span>
                </Link>
              ))}
              <span className="hidden lg:block border-t border-paper-300 my-2" />
              <NavLinks
                items={pages}
                className="text-moss-800 hover:text-rust-700"
                activeClassName="!text-rust-700"
              />
            </nav>

            <div className="hidden lg:block mt-auto pt-10 text-xs text-moss-700 leading-relaxed">
              <p>Carved in tupelo, painted in oil and acrylic.</p>
              <p className="mt-2">{site.location}</p>
              <p className="mt-4">&copy; {new Date().getFullYear()} {site.name}</p>
            </div>
          </div>
        </aside>

        <main className="min-w-0">
          {children}
          <footer className="lg:hidden px-5 py-8 border-t border-paper-300 text-xs text-moss-700">
            <p>&copy; {new Date().getFullYear()} {site.name} &middot; {site.location}</p>
            <p className="mt-2">
              <a href={`mailto:${site.email}`} className="underline underline-offset-2">{site.email}</a>
              {' '}&middot;{' '}
              <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">Instagram</a>
            </p>
          </footer>
        </main>
      </div>
    </div>
  )
}
