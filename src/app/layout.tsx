import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { designList, getDesign, isPreview } from '@/designs'
import DesignSwitcher from '@/designs/DesignSwitcher'

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '400', '500'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'Wildfowl Carvings by Charles Gunther',
    template: '%s | Wildfowl Carvings by Charles Gunther',
  },
  description: 'Decorative wildfowl carvings by Charles Gunther, a New Jersey wood carver: waterfowl, birds of prey, and songbirds.',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [design, preview] = await Promise.all([getDesign(), isPreview()])
  const { Shell } = design

  return (
    <html lang="en" className={inter.variable}>
      <body className={preview ? 'pb-24' : undefined}>
        <Shell>{children}</Shell>
        {preview && (
          <DesignSwitcher
            options={designList.map(({ id, tag, name, blurb }) => ({ id, tag, name, blurb }))}
            activeId={design.id}
            feedbackEmail={process.env.FEEDBACK_EMAIL ?? ''}
          />
        )}
      </body>
    </html>
  )
}
