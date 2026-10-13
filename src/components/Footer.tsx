import Link from 'next/link'
import { site } from '@/content'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 mt-20 md:mt-28">
      <div className="max-w-8xl mx-auto px-5 md:px-8 py-10 md:py-14">
        <a href={`mailto:${site.email}`} className="font-fraunces text-xl sm:text-2xl md:text-3xl font-light break-all hover:text-brass-300 transition-colors">
          {site.email}
        </a>
        <div className="mt-8 md:mt-12 flex flex-wrap justify-between gap-3 text-xs text-coal-400">
          <p>&copy; {new Date().getFullYear()} {site.name} &middot; {site.location}</p>
          <div className="flex gap-5">
            <Link href="/commission" className="hover:text-white transition-colors">Inquiries</Link>
            <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">@{site.instagram}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
