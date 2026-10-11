import Image from 'next/image'
import Link from 'next/link'
import { bio, commissions, portraits, process, site } from '@/designs/content'

export default function About() {
  return (
    <article className="px-5 py-8 lg:px-12 lg:py-12 max-w-5xl">
      <p className="text-[11px] uppercase tracking-[0.25em] text-rust-700">About the carver</p>
      <h1 className="mt-2 text-3xl lg:text-4xl font-medium leading-tight">{site.name}</h1>

      <div className="mt-6 grid gap-8 md:grid-cols-[minmax(0,1fr)_260px] md:gap-12">
        <div className="space-y-5 text-[15px] lg:text-base leading-relaxed text-moss-800 max-w-prose">
          {bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

        </div>

        <div className="space-y-5">
          {[portraits.falconry, portraits.aviary].map((portrait) => (
            <figure key={portrait.src}>
              <div className="border border-paper-400 bg-paper-100 p-2">
                <Image
                  src={portrait.src}
                  alt={portrait.alt}
                  width={portrait.width}
                  height={portrait.height}
                  sizes="(max-width: 768px) 100vw, 260px"
                  className="w-full h-auto"
                />
              </div>
              <figcaption className="mt-2 text-xs italic text-moss-700">{portrait.alt}</figcaption>
            </figure>
          ))}
        </div>
      </div>

      <section className="mt-12 lg:mt-16">
        <div className="border-b-[3px] border-double border-moss-800 pb-2">
          <h2 className="text-2xl font-medium">From the bird to the block</h2>
        </div>
        <p className="mt-3 text-sm italic text-moss-700">How a carving comes about, in six stages.</p>
        <ol className="mt-6 grid grid-cols-3 gap-x-4 gap-y-6 sm:grid-cols-6">
          {process.map((step, index) => (
            <li key={step.src}>
              <div className="border border-paper-400 bg-paper-100 p-1.5">
                <div className="relative aspect-square">
                  <Image src={step.src} alt={step.title} fill sizes="(max-width: 640px) 33vw, 16vw" className="object-cover" />
                </div>
              </div>
              <p className="mt-2 text-xs leading-snug">
                <span className="text-rust-700 mr-1">Fig. {index + 1}</span>
                {step.title}
              </p>
            </li>
          ))}
        </ol>
        <p className="mt-4 text-sm">
          <Link href="/process" className="text-rust-700 underline underline-offset-4 decoration-paper-400 hover:decoration-rust-700">Read the method in full</Link>
        </p>
      </section>

      <section id="contact" className="mt-12 lg:mt-16 scroll-mt-6">
        <div className="border-b-[3px] border-double border-moss-800 pb-2">
          <h2 className="text-2xl font-medium">Contact</h2>
        </div>
        <p className="mt-4 max-w-prose text-[15px] leading-relaxed text-moss-800">{commissions.lead}</p>
        <p className="mt-4">
          <Link href="/commission" className="inline-block border-2 border-moss-800 px-5 py-2.5 text-sm font-medium hover:bg-moss-800 hover:text-paper-50 transition-colors">Commission a piece</Link>
        </p>
        <p className="mt-4 text-[15px]">
          <a href={`mailto:${site.email}`} className="text-rust-700 underline underline-offset-4 decoration-paper-400 hover:decoration-rust-700">{site.email}</a>
          <br />
          <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="text-rust-700 underline underline-offset-4 decoration-paper-400 hover:decoration-rust-700">
            Instagram @{site.instagram}
          </a>
        </p>
      </section>
    </article>
  )
}
