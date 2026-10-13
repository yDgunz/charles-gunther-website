// Copy shared by every design so the words stay the same while the look changes.

export const site = {
  name: 'Charles Gunther',
  tagline: 'Wildfowl Carvings',
  location: 'New Jersey',
  email: 'contact@wildfowlcarver.com',
  instagram: 'wildfowlcarver',
  instagramUrl: 'https://instagram.com/wildfowlcarver',
}

export const intro =
  'Waterfowl, birds of prey and songbirds, carved in tupelo and painted from living birds. Charles Gunther has worked from his New Jersey studio for more than thirty years.'

export const bio = [
  'Charles Gunther is a New Jersey wood carver specializing in decorative wildfowl sculpture. For over three decades he has carved waterfowl, birds of prey and songbirds, each piece cut from tupelo and finished in oil or acrylic.',
  'His interest in wildfowl goes back to a childhood spent outdoors, and his eye to his father, an artist working in flat work and mixed media. He competed for many years at the Ward World Championship in Ocean City, Maryland and at Stone Harbor’s Wings ’n’ Water Festival.',
  'Today he works in the studio on pieces for commission and for private collections. Every sculpture starts with research and time spent with the living bird, a habit that led him to build and keep a personal aviary of North American migratory waterfowl.',
]

export const pullQuote =
  'Every sculpture starts with time spent with the living bird.'

export const inquiries = {
  heading: 'Inquiries',
  lead: 'Charles takes on a small number of commissions each year, and occasionally has finished pieces available. If you have a particular bird in mind, write with a few details and he will reply by email.',
  expect:
    'Price and timing depend on the species, the size of the carving and the base, and are worked out by email. A new piece takes several months, and Charles sends photographs as it comes along.',
  /** The quiet line used at the foot of other pages */
  aside: 'Charles takes on a small number of commissions each year.',
}

export type ProcessStep = {
  src: string
  width: number
  height: number
  title: string
  body: string
}

/** The making of a bird, from the live subject to the finished carving. */
export const process: ProcessStep[] = [
  {
    src: '/images/in_progress/1.jpg', width: 393, height: 393,
    title: 'Time with the living bird',
    body: 'Every piece begins with the bird itself: watching how it stands, swims and turns its head, and photographing it from every angle. Charles keeps an aviary of North American waterfowl for exactly this reason.',
  },
  {
    src: '/images/in_progress/2.jpg', width: 480, height: 480,
    title: 'Working out the pose on paper',
    body: 'Sketches settle the attitude of the bird and its proportions before any wood is cut. The pose is chosen to suit where the finished piece will live.',
  },
  {
    src: '/images/in_progress/3.jpg', width: 480, height: 480,
    title: 'A head study',
    body: 'The character of a bird lives in its head: the set of the eye, the line of the bill. A separate study gets this right before the full carving is started.',
  },
  {
    src: '/images/in_progress/5.jpg', width: 3264, height: 2448,
    title: 'Blocking out the form in tupelo',
    body: 'The carving is cut from tupelo, a light, fine-grained wood that holds detail. The main masses of body, neck and head are established first.',
  },
  {
    src: '/images/in_progress/4.jpg', width: 2448, height: 3264,
    title: 'Roughing out the body',
    body: 'Knives and rotary tools refine the shape, then the feather groups are laid out and each feather is carved and textured so that it reads under paint.',
  },
  {
    src: '/images/in_progress/7.jpg', width: 2448, height: 3264,
    title: 'Carved and textured, before paint',
    body: 'The finished carving is sealed and painted in thin layers of oil or acrylic, then mounted on a driftwood perch or a carved habitat base.',
  },
]

export const portraits = {
  studio: { src: '/images/about1.jpg', width: 720, height: 406, alt: 'Charles Gunther outside his studio' },
  falconry: { src: '/images/about2.jpg', width: 640, height: 480, alt: 'Charles Gunther with a hawk on the glove' },
  aviary: { src: '/images/about3.jpg', width: 1810, height: 1359, alt: 'A wood duck drake on the water' },
}
