import { categories, pieces, piecesInCategory, plateNumber } from '@/data/pieces'
import Plate from './Plate'
import { roman } from './plates'

export default function Home() {
  return (
    <div className="px-5 py-8 lg:px-12 lg:py-12 max-w-6xl">
      <header className="max-w-2xl">
        <p className="text-[11px] uppercase tracking-[0.25em] text-rust-700">Plates I&ndash;{roman(pieces.length)}</p>
        <h1 className="mt-2 text-3xl lg:text-4xl font-medium leading-tight">Decorative Wildfowl Carvings</h1>
        <p className="mt-4 text-[15px] lg:text-base leading-relaxed text-moss-800">
          Waterfowl, birds of prey and songbirds carved in tupelo and painted from living birds, by Charles Gunther
          of New Jersey. The plates are grouped by family. Pieces are available for private collections and by commission.
        </p>
      </header>

      {categories.map((category) => {
        const group = piecesInCategory(category.id)
        const first = plateNumber(group[0])
        const last = plateNumber(group[group.length - 1])
        return (
          <section key={category.id} id={category.id} className="mt-12 lg:mt-16 scroll-mt-6">
            <div className="flex items-baseline justify-between gap-4 border-b-[3px] border-double border-moss-800 pb-2">
              <h2 className="text-2xl lg:text-[1.7rem] font-medium">{category.name}</h2>
              <span className="text-[11px] uppercase tracking-[0.2em] text-moss-700 whitespace-nowrap">
                Plates {roman(first)}&ndash;{roman(last)}
              </span>
            </div>
            <p className="mt-3 text-sm italic text-moss-700">{category.blurb}</p>
            <div className="mt-6 grid gap-x-8 gap-y-9 sm:grid-cols-2 xl:grid-cols-3">
              {group.map((piece) => (
                <Plate key={piece.id} piece={piece} />
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}
