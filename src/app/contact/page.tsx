export const metadata = {
  title: 'Contact | Charles Gunther Carving',
  description: 'Contact Charles Gunther.',
}

export default function ContactPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-bark-800 mb-8">
          Contact
        </h1>
        <p className="text-bark-600 mb-6">
          Get in touch via email:
        </p>
        <a
          href="mailto:contact@wildfowlcarver.com"
          className="text-2xl text-bark-800 font-medium hover:text-bark-600 underline"
        >
          contact@wildfowlcarver.com
        </a>
      </div>
    </div>
  )
}
