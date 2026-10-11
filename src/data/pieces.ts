export type Piece = {
  id: string
  title: string
  folder: string
  imageCount: number
}

// Order here is the order pieces appear in the gallery.
export const pieces: Piece[] = [
  { id: 'black_duck', title: 'Black Duck', folder: 'decorative/black_duck', imageCount: 3 },
  { id: 'blue_wing_teal', title: 'Blue Winged Teal', folder: 'decorative/blue_wing_teal', imageCount: 3 },
  { id: 'canada_goose', title: 'Canada Goose', folder: 'decorative/canada_goose', imageCount: 3 },
  { id: 'hornbill', title: "Blyth's Hornbill", folder: 'decorative/hornbill', imageCount: 4 },
  { id: 'loon', title: 'Common Loon', folder: 'decorative/loon', imageCount: 1 },
  { id: 'mallard_drake', title: 'Mallard', folder: 'decorative/mallard_drake', imageCount: 3 },
  { id: 'pied_bill_grebe', title: 'Pied-billed Grebe', folder: 'decorative/pied_bill_grebe', imageCount: 2 },
  { id: 'redhead', title: 'Redhead', folder: 'decorative/redhead', imageCount: 1 },
  { id: 'screech_owl_3', title: 'Screech Owl', folder: 'birds_of_prey/screech_owl_3', imageCount: 3 },
  { id: 'kestral', title: 'American Kestrel', folder: 'birds_of_prey/kestral', imageCount: 4 },
  { id: 'kestral2', title: 'American Kestrel', folder: 'birds_of_prey/kestral2', imageCount: 4 },
  { id: 'peregrine_falcon', title: 'Peregrine Falcon', folder: 'birds_of_prey/peregrine_falcon', imageCount: 5 },
  { id: 'screech_owl', title: 'Screech Owl', folder: 'birds_of_prey/screech_owl', imageCount: 1 },
  { id: 'screech_owl_2', title: 'Screech Owl', folder: 'birds_of_prey/screech_owl_2', imageCount: 7 },
  { id: 'great_horned_owl', title: 'Great Horned Owl', folder: 'birds_of_prey/great_horned_owl', imageCount: 4 },
  { id: 'blue_jay', title: 'Blue Jay', folder: 'songbirds/blue_jay', imageCount: 3 },
  { id: 'robin', title: 'American Robin', folder: 'songbirds/robin', imageCount: 2 },
  { id: 'mallard_hen_smoothie', title: 'Mallard', folder: 'smoothies/mallard_hen_smoothie', imageCount: 4 },
  { id: 'pied_bill_grebe_smoothie', title: 'Pied-billed Grebe', folder: 'smoothies/pied_bill_grebe_smoothie', imageCount: 2 },
  { id: 'wigeon', title: 'American Wigeon', folder: 'smoothies/wigeon', imageCount: 3 },
]

export function getPiece(id: string): Piece | undefined {
  return pieces.find((piece) => piece.id === id)
}
