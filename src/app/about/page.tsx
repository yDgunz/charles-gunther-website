import Image from 'next/image'

export const metadata = {
  title: 'About | Charles Gunther Carving',
  description: 'Learn about Charles Gunther, a New Jersey based wood carver focused on decorative wildfowl sculptures.',
}

export default function AboutPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-4">
            <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
              <Image
                src="/images/about1.jpg"
                alt="Charles Gunther in the studio"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="aspect-[4/3] relative rounded-lg overflow-hidden">
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
            <h1 className="text-4xl md:text-5xl font-display font-bold text-bark-800 mb-6">
              About Charles
            </h1>
            <div className="space-y-6 text-bark-700 leading-relaxed">
              <p>
                Charles Gunther is a New Jersey based wood carver focused on decorative
                wildfowl sculptures. For over 30 years he has created many carvings
                depicting waterfowl, birds of prey and song birds.
              </p>
              <p>
                Charles has attributed his interest in wildfowl to his childhood exposure
                to nature and his artistic ability from his father who was an artist in
                flat work and mixed mediums.
              </p>
              <p>
                Formerly a competitor at many competitions including{' '}
                <a
                  href="https://wetlandsinstitute.org/wings-n-water-festival-draws-crowd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-bark-900"
                >
                  Stone Harbor's Wings and Water Festival
                </a>
                , as well as the{' '}
                <a
                  href="https://www.wardmuseum.org/SpecialEvents/WorldChampionship"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-bark-900"
                >
                  Ward Foundation World Championships
                </a>{' '}
                in Ocean City, Maryland, Charles has achieved best of division and best
                of show in open and professional levels of competition.
              </p>
              <p>
                Now Charles spends most of his time in the studio creating pieces for
                personal collections. Every sculpture requires extensive research and
                interaction with the bird to capture the true essence of the subject.
                This relationship is a critical element and even led to the creation
                and maintenance of his personal aviary where he houses several species
                of North American migratory waterfowl.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
