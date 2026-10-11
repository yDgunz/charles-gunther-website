import Image from 'next/image'
import InstagramIcon from '@/components/InstagramIcon'

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
                He competed for many years at Stone Harbor&rsquo;s Wings and Water Festival and the Ward Foundation World Championships in Ocean City, Maryland.
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
                  <InstagramIcon />
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
