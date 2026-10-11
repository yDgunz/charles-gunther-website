import Image from 'next/image'
import Link from 'next/link'
import { process } from '@/designs/content'

export default function ProcessPage() {
  return (
    <div className="py-8 md:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-xl md:text-2xl font-display font-normal text-bark-900">From the bird to the block</h1>
        <p className="mt-3 text-bark-700 leading-relaxed max-w-prose">
          How a carving comes about, in six stages.
        </p>
        <ol className="mt-8 space-y-8">
          {process.map((step, index) => (
            <li key={step.src} className="grid gap-4 sm:grid-cols-[200px_1fr] items-start">
              <div className="relative aspect-square overflow-hidden bg-bark-100">
                <Image src={step.src} alt={step.title} fill sizes="(max-width: 640px) 100vw, 200px" className="object-cover" />
              </div>
              <div>
                <h2 className="font-display text-bark-900">
                  <span className="text-bark-400 mr-2">{index + 1}</span>
                  {step.title}
                </h2>
                <p className="mt-2 text-bark-700 leading-relaxed">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-10 pt-6 border-t border-bark-200 text-bark-700">
          A commissioned piece follows the same path.{' '}
          <Link href="/commission" className="text-bark-900 underline underline-offset-2">Commission a piece</Link>
        </p>
      </div>
    </div>
  )
}
