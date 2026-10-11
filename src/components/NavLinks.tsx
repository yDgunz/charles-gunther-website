'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export type NavItem = { name: string; href: string }

type NavLinksProps = {
  items: NavItem[]
  className: string
  activeClassName: string
  onNavigate?: () => void
}

/** Links that know which page is open. Hash links (/about#contact) are never marked active. */
export default function NavLinks({ items, className, activeClassName, onNavigate }: NavLinksProps) {
  const pathname = usePathname()
  return (
    <>
      {items.map((item) => {
        const isActive = !item.href.includes('#') && pathname === item.href
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            aria-current={isActive ? 'page' : undefined}
            className={`${className} ${isActive ? activeClassName : ''}`}
          >
            {item.name}
          </Link>
        )
      })}
    </>
  )
}
