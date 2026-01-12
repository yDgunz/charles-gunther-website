import Link from 'next/link'
import Image from 'next/image'

const pieces = [
  { id: 'black_duck', title: 'Black Duck', folder: 'decorative/black_duck' },
  { id: 'blue_wing_teal', title: 'Blue Winged Teal', folder: 'decorative/blue_wing_teal' },
  { id: 'canada_goose', title: 'Canada Goose', folder: 'decorative/canada_goose' },
  { id: 'hornbill', title: "Blyth's Hornbill", folder: 'decorative/hornbill' },
  { id: 'loon', title: 'Common Loon', folder: 'decorative/loon' },
  { id: 'mallard_drake', title: 'Mallard', folder: 'decorative/mallard_drake' },
  { id: 'pied_bill_grebe', title: 'Pied-billed Grebe', folder: 'decorative/pied_bill_grebe' },
  { id: 'redhead', title: 'Redhead', folder: 'decorative/redhead' },
  { id: 'screech_owl_3', title: 'Screech Owl', folder: 'birds_of_prey/screech_owl_3' },
  { id: 'kestral', title: 'American Kestrel', folder: 'birds_of_prey/kestral' },
  { id: 'kestral2', title: 'American Kestrel', folder: 'birds_of_prey/kestral2' },
  { id: 'peregrine_falcon', title: 'Peregrine Falcon', folder: 'birds_of_prey/peregrine_falcon' },
  { id: 'screech_owl', title: 'Screech Owl', folder: 'birds_of_prey/screech_owl' },
  { id: 'screech_owl_2', title: 'Screech Owl', folder: 'birds_of_prey/screech_owl_2' },
  { id: 'great_horned_owl', title: 'Great Horned Owl', folder: 'birds_of_prey/great_horned_owl' },
  { id: 'blue_jay', title: 'Blue Jay', folder: 'songbirds/blue_jay' },
  { id: 'robin', title: 'American Robin', folder: 'songbirds/robin' },
  { id: 'mallard_hen_smoothie', title: 'Mallard', folder: 'smoothies/mallard_hen_smoothie' },
  { id: 'pied_bill_grebe_smoothie', title: 'Pied-billed Grebe', folder: 'smoothies/pied_bill_grebe_smoothie' },
  { id: 'wigeon', title: 'American Wigeon', folder: 'smoothies/wigeon' },
]

export default function Home() {
  return (
    <div>
      {/* Gallery */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pieces.map((piece) => (
              <Link key={piece.id} href={`/gallery/${piece.id}`} className="card group">
                <div className="aspect-[4/3] bg-bark-100 relative overflow-hidden">
                  <Image
                    src={`/pieces/${piece.folder}/thumbnail.jpg`}
                    alt={piece.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-display font-semibold text-bark-800">
                    {piece.title}
                  </h3>
                </div>
              </Link>
            ))}
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
