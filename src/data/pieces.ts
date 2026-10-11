export type CategoryId = 'decorative' | 'birds_of_prey' | 'songbirds' | 'smoothies'

export type Category = {
  id: CategoryId
  name: string
  blurb: string
}

export const categories: Category[] = [
  { id: 'decorative', name: 'Decorative', blurb: 'Fully textured and painted lifesize waterfowl and wading birds.' },
  { id: 'birds_of_prey', name: 'Birds of Prey', blurb: 'Owls, falcons and hawks, carved with the bird on its natural perch.' },
  { id: 'songbirds', name: 'Songbirds', blurb: 'Small birds of the garden and woodland.' },
  { id: 'smoothies', name: 'Smoothies', blurb: 'Smooth-surfaced carvings that rely on form and paint rather than feather texture.' },
]

/** Pixel dimensions [width, height] of an image file. */
export type Size = [number, number]

export type Piece = {
  id: string
  title: string
  /** Scientific name */
  species: string
  category: CategoryId
  /** Folder under /public/pieces */
  folder: string
  /** Material and paint, e.g. "Tupelo & Oil" */
  medium?: string
  /** A short remark shown with the piece */
  note?: string
  /** Size of thumbnail.jpg */
  thumbnail: Size
  /** Size of each numbered image, 1.jpg onward */
  images: Size[]
}

// Order here is the order pieces appear in the gallery.
export const pieces: Piece[] = [
  {
    id: 'black_duck',
    title: 'American Black Duck',
    species: 'Anas rubripes',
    category: 'decorative',
    folder: 'decorative/black_duck',
    medium: 'Tupelo & Oil',
    thumbnail: [640, 480],
    images: [[640, 480], [640, 480], [640, 480]],
  },
  {
    id: 'blue_wing_teal',
    title: 'Blue-winged Teal',
    species: 'Spatula discors',
    category: 'decorative',
    folder: 'decorative/blue_wing_teal',
    medium: 'Tupelo & Oil',
    thumbnail: [4032, 3024],
    images: [[4032, 3024], [3024, 4032], [4032, 3024]],
  },
  {
    id: 'canada_goose',
    title: 'Canada Goose',
    species: 'Branta canadensis',
    category: 'decorative',
    folder: 'decorative/canada_goose',
    medium: 'Tupelo & Oil',
    thumbnail: [1811, 1359],
    images: [[2048, 1360], [2048, 1360], [1352, 1515]],
  },
  {
    id: 'hornbill',
    title: "Blyth's Hornbill",
    species: 'Rhyticeros plicatus',
    category: 'decorative',
    folder: 'decorative/hornbill',
    medium: 'Tupelo & Acrylic',
    note: "Inspired by Peter Zaluzec's 1992 World Championship entry",
    thumbnail: [836, 555],
    images: [[836, 555], [555, 836], [555, 836], [555, 836]],
  },
  {
    id: 'loon',
    title: 'Common Loon',
    species: 'Gavia immer',
    category: 'decorative',
    folder: 'decorative/loon',
    medium: 'Tupelo & Oil',
    thumbnail: [640, 480],
    images: [[640, 480]],
  },
  {
    id: 'mallard_drake',
    title: 'Mallard Drake',
    species: 'Anas platyrhynchos',
    category: 'decorative',
    folder: 'decorative/mallard_drake',
    medium: 'Tupelo & Oil',
    thumbnail: [640, 480],
    images: [[640, 480], [640, 480], [640, 480]],
  },
  {
    id: 'pied_bill_grebe',
    title: 'Pied-billed Grebe',
    species: 'Podilymbus podiceps',
    category: 'decorative',
    folder: 'decorative/pied_bill_grebe',
    medium: 'Tupelo & Oil',
    thumbnail: [640, 480],
    images: [[640, 480], [640, 480]],
  },
  {
    id: 'redhead',
    title: 'Redhead',
    species: 'Aythya americana',
    category: 'decorative',
    folder: 'decorative/redhead',
    medium: 'Tupelo & Oil',
    thumbnail: [640, 480],
    images: [[640, 480]],
  },
  {
    id: 'screech_owl_3',
    title: 'Screech Owl',
    species: 'Megascops asio',
    category: 'birds_of_prey',
    folder: 'birds_of_prey/screech_owl_3',
    medium: 'Tupelo & Acrylic',
    thumbnail: [3024, 4032],
    images: [[3024, 4032], [3024, 4032], [3024, 4032]],
  },
  {
    id: 'kestral',
    title: 'American Kestrel',
    species: 'Falco sparverius',
    category: 'birds_of_prey',
    folder: 'birds_of_prey/kestral',
    thumbnail: [480, 640],
    images: [[480, 640], [480, 640], [480, 640], [480, 640]],
  },
  {
    id: 'kestral2',
    title: 'American Kestrel',
    species: 'Falco sparverius',
    category: 'birds_of_prey',
    folder: 'birds_of_prey/kestral2',
    medium: 'Tupelo & Acrylic',
    note: 'Sparrow hawk on chestnut and bittersweet',
    thumbnail: [1105, 1473],
    images: [[360, 640], [360, 640], [360, 640], [1109, 1970]],
  },
  {
    id: 'peregrine_falcon',
    title: 'Peregrine Falcon',
    species: 'Falco peregrinus',
    category: 'birds_of_prey',
    folder: 'birds_of_prey/peregrine_falcon',
    medium: 'Tupelo & Oil',
    thumbnail: [458, 640],
    images: [[640, 480], [480, 640], [480, 640], [640, 480], [480, 640]],
  },
  {
    id: 'screech_owl',
    title: 'Screech Owl',
    species: 'Megascops asio',
    category: 'birds_of_prey',
    folder: 'birds_of_prey/screech_owl',
    medium: 'Tupelo & Oil',
    thumbnail: [3993, 3993],
    images: [[3999, 6000]],
  },
  {
    id: 'screech_owl_2',
    title: 'Screech Owl',
    species: 'Megascops asio',
    category: 'birds_of_prey',
    folder: 'birds_of_prey/screech_owl_2',
    medium: 'Tupelo & Acrylic',
    thumbnail: [480, 640],
    images: [[480, 640], [480, 640], [480, 640], [480, 640], [480, 640], [480, 640], [480, 640]],
  },
  {
    id: 'great_horned_owl',
    title: 'Great Horned Owl',
    species: 'Bubo virginianus',
    category: 'birds_of_prey',
    folder: 'birds_of_prey/great_horned_owl',
    thumbnail: [2448, 3264],
    images: [[2448, 3264], [2448, 3264], [2448, 3264], [2448, 3264]],
  },
  {
    id: 'blue_jay',
    title: 'Blue Jay',
    species: 'Cyanocitta cristata',
    category: 'songbirds',
    folder: 'songbirds/blue_jay',
    medium: 'Tupelo & Acrylic',
    thumbnail: [480, 480],
    images: [[480, 640], [480, 640], [480, 640]],
  },
  {
    id: 'robin',
    title: 'American Robin',
    species: 'Turdus migratorius',
    category: 'songbirds',
    folder: 'songbirds/robin',
    medium: 'Tupelo & Oil on Walnut',
    thumbnail: [428, 428],
    images: [[480, 640], [569, 428]],
  },
  {
    id: 'mallard_hen_smoothie',
    title: 'Mallard Hen',
    species: 'Anas platyrhynchos',
    category: 'smoothies',
    folder: 'smoothies/mallard_hen_smoothie',
    medium: 'Tupelo & Oil',
    thumbnail: [640, 480],
    images: [[640, 480], [640, 480], [640, 480], [640, 480]],
  },
  {
    id: 'pied_bill_grebe_smoothie',
    title: 'Pied-billed Grebe',
    species: 'Podilymbus podiceps',
    category: 'smoothies',
    folder: 'smoothies/pied_bill_grebe_smoothie',
    medium: 'Tupelo & Oil',
    thumbnail: [640, 480],
    images: [[640, 480], [640, 480]],
  },
  {
    id: 'wigeon',
    title: 'American Wigeon',
    species: 'Mareca americana',
    category: 'smoothies',
    folder: 'smoothies/wigeon',
    medium: 'Tupelo & Acrylic',
    thumbnail: [1811, 1358],
    images: [[2048, 1360], [2048, 1360], [2048, 1360]],
  },
]

/** Pieces shown on landing pages, strongest photographs first. */
export const featuredIds = ['screech_owl', 'blue_wing_teal', 'great_horned_owl', 'wigeon', 'canada_goose', 'screech_owl_3']

export function featuredPieces(): Piece[] {
  return featuredIds.map((id) => getPiece(id)!)
}

export function getPiece(id: string): Piece | undefined {
  return pieces.find((piece) => piece.id === id)
}

export function getCategory(id: CategoryId): Category {
  return categories.find((category) => category.id === id)!
}

export function piecesInCategory(id: CategoryId): Piece[] {
  return pieces.filter((piece) => piece.category === id)
}

/** Paths to a piece's numbered images, 1.jpg onward. */
export function pieceImages(piece: Piece): string[] {
  return piece.images.map((_, i) => `/pieces/${piece.folder}/${i + 1}.jpg`)
}

export function pieceThumbnail(piece: Piece): string {
  return `/pieces/${piece.folder}/thumbnail.jpg`
}

/** The pieces before and after this one in gallery order. */
export function neighbours(piece: Piece): { prev?: Piece; next?: Piece } {
  const index = pieces.findIndex((p) => p.id === piece.id)
  return { prev: pieces[index - 1], next: pieces[index + 1] }
}

/** Gallery position, starting at 1. */
export function plateNumber(piece: Piece): number {
  return pieces.findIndex((p) => p.id === piece.id) + 1
}

/** Whether an image is taller than it is wide. */
export function isPortrait([w, h]: Size): boolean {
  return h > w
}
