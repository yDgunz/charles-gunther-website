import Image from 'next/image'

export const metadata = {
  title: 'About | Charles Gunther Carving',
  description: 'Learn about Charles Gunther, a New Jersey based wood carver focused on decorative wildfowl sculptures.',
}

export default function AboutPage() {
  return (
    <div className="py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            <div className="aspect-[4/3] relative overflow-hidden">
              <Image
                src="/images/about1.jpg"
                alt="Charles Gunther in the studio"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="aspect-[4/3] relative overflow-hidden">
              <Image
                src="/images/about2.jpg"
                alt="Charles Gunther carving"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
          <div>
            <div className="space-y-5 text-bark-700 leading-relaxed">
              <p>
                Charles Gunther is a New Jersey wood carver specializing in decorative wildfowl sculptures. For over three decades, he has crafted detailed carvings of waterfowl, birds of prey, and songbirds.
              </p>
              <p>
                His passion for wildfowl traces back to a childhood immersed in nature, while his artistic sensibility was shaped by his father, an artist working in flat work and mixed media.
              </p>
              <p>
                A former competitor at prestigious events including Stone Harbor's Wings and Water Festival and the Ward Foundation World Championships in Ocean City, Maryland, Charles has earned best of division and best of show honors at both open and professional levels.
              </p>
              <p>
                Today he focuses on creating pieces for private collections. Each sculpture begins with careful research and observation, capturing the essence of each bird through patient, meticulous craftsmanship.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-bark-200">
              <h2 className="text-base font-display font-normal text-bark-700 mb-3">
                Contact
              </h2>
              <div className="space-y-2">
                <a
                  href="mailto:contact@wildfowlcarver.com"
                  className="block text-bark-600 hover:text-bark-900"
                >
                  contact@wildfowlcarver.com
                </a>
                <a
                  href="https://instagram.com/wildfowlcarver"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-bark-600 hover:text-bark-900"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  @wildfowlcarver
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
