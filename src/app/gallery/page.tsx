import Image from 'next/image'
import Link from 'next/link'

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

export default function GalleryPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-bark-800 mb-4">
            Gallery
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pieces.map((piece) => (
            <Link
              key={piece.id}
              href={`/gallery/${piece.id}`}
              className="card group"
            >
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
    </div>
  )
}
