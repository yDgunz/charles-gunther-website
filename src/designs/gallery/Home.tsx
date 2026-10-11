import WorkGrid from './WorkGrid'

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-5 py-10 md:py-16">
      <p className="font-cormorant text-[1.7rem] leading-snug md:text-4xl max-w-2xl">
        Decorative wildfowl carvings in tupelo, painted from life.
      </p>
      <p className="mt-3 md:mt-4 max-w-xl text-sm text-ink-600 leading-relaxed">
        Waterfowl, birds of prey and songbirds, carved and painted in New Jersey over three decades.
        Pieces are available for private collections and by commission.
      </p>
      <div className="mt-10 md:mt-14">
        <WorkGrid />
      </div>
    </div>
  )
}
