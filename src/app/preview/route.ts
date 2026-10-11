import { NextResponse, type NextRequest } from 'next/server'
import { DESIGN_COOKIE, PREVIEW_COOKIE, isDesignId } from '@/designs'

const YEAR = 60 * 60 * 24 * 365

/**
 * Opens design review mode: /preview turns on the review bar and sends the
 * visitor to the home page. /preview?design=studio also picks a design.
 */
export function GET(request: NextRequest) {
  const design = request.nextUrl.searchParams.get('design')
  const response = NextResponse.redirect(new URL('/', request.url))
  response.cookies.set(PREVIEW_COOKIE, '1', { path: '/', maxAge: YEAR, sameSite: 'lax' })
  if (isDesignId(design)) {
    response.cookies.set(DESIGN_COOKIE, design, { path: '/', maxAge: YEAR, sameSite: 'lax' })
  }
  return response
}
