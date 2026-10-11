'use server'

import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache'
import { DESIGN_COOKIE, PREVIEW_COOKIE, isDesignId } from '@/designs'

const YEAR = 60 * 60 * 24 * 365

export async function setDesign(formData: FormData) {
  const design = formData.get('design')
  if (!isDesignId(design)) return
  const store = await cookies()
  store.set(DESIGN_COOKIE, design, { path: '/', maxAge: YEAR, sameSite: 'lax' })
  revalidatePath('/', 'layout')
}

export async function exitPreview() {
  const store = await cookies()
  store.delete(DESIGN_COOKIE)
  store.delete(PREVIEW_COOKIE)
  revalidatePath('/', 'layout')
}
