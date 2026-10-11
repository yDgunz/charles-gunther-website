import InstagramIcon from '@/components/InstagramIcon'

export default function Footer() {
  return (
    <footer className="bg-bark-950 text-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-cream-300 text-xs">
          <p>&copy; {new Date().getFullYear()} Charles Gunther</p>
          <a
            href="https://instagram.com/wildfowlcarver"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <InstagramIcon />
            @wildfowlcarver
          </a>
        </div>
      </div>
    </footer>
  )
}
