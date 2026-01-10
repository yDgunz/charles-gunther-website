import Link from 'next/link'
import Image from 'next/image'

const featuredPieces = [
  { id: 'hornbill', title: "Blyth's Hornbill", folder: 'decorative/hornbill' },
  { id: 'great_horned_owl', title: 'Great Horned Owl', folder: 'birds_of_prey/great_horned_owl' },
  { id: 'loon', title: 'Common Loon', folder: 'decorative/loon' },
]

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-bark-800 text-cream-50 py-24 md:py-32 texture-overlay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Handcrafted Wildfowl Sculptures
            </h1>
            <p className="text-xl text-cream-200 mb-8 leading-relaxed">
              Decorative waterfowl, birds of prey, and songbirds carved with over 30 years
              of experience and passion for the craft.
            </p>
            <Link href="/gallery" className="btn-primary">
              View Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Featured Work</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPieces.map((piece) => (
              <Link key={piece.id} href={`/gallery/${piece.id}`} className="card group">
                <div className="aspect-[4/3] bg-bark-100 relative overflow-hidden">
                  <Image
                    src={`/pieces/${piece.folder}/thumbnail.jpg`}
                    alt={piece.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-semibold text-bark-800">
                    {piece.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/gallery" className="btn-secondary">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 md:py-24 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-heading">About the Artist</h2>
              <p className="text-bark-700 mb-6 leading-relaxed">
                Charles Gunther is a New Jersey based wood carver focused on decorative
                wildfowl sculptures. For over 30 years he has created many carvings
                depicting waterfowl, birds of prey and song birds.
              </p>
              <Link href="/about" className="btn-primary">
                Learn More
              </Link>
            </div>
            <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
              <Image
                src="/images/about1.jpg"
                alt="Charles Gunther"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Instagram */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-heading">Follow Along</h2>
          <p className="text-bark-600 mb-6">
            See the latest work and progress on Instagram
          </p>
          <a
            href="https://instagram.com/wildfowlcarver"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-secondary"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            @wildfowlcarver
          </a>
        </div>
      </section>
    </div>
  )
}
