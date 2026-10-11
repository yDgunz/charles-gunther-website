// Copy shared by every design so the words stay the same while the look changes.

export const site = {
  name: 'Charles Gunther',
  tagline: 'Wildfowl Carvings',
  location: 'New Jersey',
  email: 'contact@wildfowlcarver.com',
  instagram: 'wildfowlcarver',
  instagramUrl: 'https://instagram.com/wildfowlcarver',
}

export const bio = [
  'Charles Gunther is a New Jersey wood carver specializing in decorative wildfowl sculpture. For over three decades he has carved waterfowl, birds of prey and songbirds, each piece cut from tupelo and finished in oil or acrylic.',
  'His interest in wildfowl goes back to a childhood spent outdoors, and his eye to his father, an artist working in flat work and mixed media.',
  'A former competitor at Stone Harbor’s Wings ’n’ Water Festival and the Ward World Championship in Ocean City, Maryland, Charles has earned Best of Division and Best of Show honors at both the open and professional levels.',
  'Today he works in the studio on pieces for commission and for private collections. Every sculpture starts with research and time spent with the living bird, a habit that led him to build and keep a personal aviary of North American migratory waterfowl.',
]

export const pullQuote =
  'Every sculpture starts with time spent with the living bird.'

export const competitions = [
  { name: 'Ward World Championship', place: 'Ocean City, Maryland' },
  { name: 'Wings ’n’ Water Festival', place: 'Stone Harbor, New Jersey' },
]

export const honors = 'Best of Division and Best of Show, open and professional levels'

export const commissions =
  'Pieces are available for private collections and by commission. Get in touch to ask about a particular bird or a piece currently in the studio.'

export type ProcessStep = { src: string; width: number; height: number; caption: string }

/** The making of a bird, from the live subject to the finished carving. */
export const process: ProcessStep[] = [
  { src: '/images/in_progress/1.jpg', width: 393, height: 393, caption: 'Time with the living bird' },
  { src: '/images/in_progress/2.jpg', width: 480, height: 480, caption: 'Working out the pose on paper' },
  { src: '/images/in_progress/3.jpg', width: 480, height: 480, caption: 'A head study to get the expression right' },
  { src: '/images/in_progress/5.jpg', width: 3264, height: 2448, caption: 'Blocking out the form in tupelo' },
  { src: '/images/in_progress/4.jpg', width: 2448, height: 3264, caption: 'Roughing out the body' },
  { src: '/images/in_progress/7.jpg', width: 2448, height: 3264, caption: 'Carved and textured, before paint' },
]

export const portraits = {
  studio: { src: '/images/about1.jpg', width: 720, height: 406, alt: 'Charles Gunther outside his studio' },
  falconry: { src: '/images/about2.jpg', width: 640, height: 480, alt: 'Charles Gunther with a hawk on the glove' },
  aviary: { src: '/images/about3.jpg', width: 1810, height: 1359, alt: 'A wood duck drake on the water' },
}
