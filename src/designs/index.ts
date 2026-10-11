import type { ComponentType, ReactNode } from 'react'
import { cookies } from 'next/headers'
import type { Piece } from '@/data/pieces'
import { components as current } from './current'
import { components as gallery } from './gallery'
import { components as fieldguide } from './fieldguide'
import { components as studio } from './studio'

export const DESIGN_COOKIE = 'design'
export const PREVIEW_COOKIE = 'preview'

export type Design = {
  id: string
  /** Short label used by the review bar, e.g. "A" */
  tag: string
  name: string
  /** One line on what the design is going for */
  blurb: string
  Shell: ComponentType<{ children: ReactNode }>
  Home: ComponentType
  Gallery: ComponentType
  Process: ComponentType
  Commission: ComponentType
  About: ComponentType
  Piece: ComponentType<{ piece: Piece }>
}

export const designs = {
  current: { id: 'current', tag: 'Now', name: 'Current site', blurb: 'The site as it is today.', ...current },
  gallery: { id: 'gallery', tag: 'A', name: 'Gallery', blurb: 'White walls and a quiet serif. Pieces at their true proportions, with species and medium beside each.', ...gallery },
  fieldguide: { id: 'fieldguide', tag: 'B', name: 'Field Guide', blurb: 'Warm paper and numbered plates, organised by family like a naturalist’s reference.', ...fieldguide },
  studio: { id: 'studio', tag: 'C', name: 'Studio', blurb: 'Dark and dramatic, like gallery lighting. Big photography and the process behind each bird.', ...studio },
} satisfies Record<string, Design>

export type DesignId = keyof typeof designs

export const designList = Object.values(designs) as Design[]

export function isDesignId(value: unknown): value is DesignId {
  return typeof value === 'string' && value in designs
}

/** The design the current visitor should see. Falls back to the live design. */
export async function getDesign(): Promise<Design> {
  const value = (await cookies()).get(DESIGN_COOKIE)?.value
  return designs[isDesignId(value) ? value : 'current']
}

/** Whether the visitor has opened review mode (via /preview). */
export async function isPreview(): Promise<boolean> {
  return (await cookies()).get(PREVIEW_COOKIE)?.value === '1'
}
