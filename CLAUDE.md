# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint (flat config in `eslint.config.mjs`)

## Architecture

This is a Next.js 15 portfolio website for a wood carver artist, using the App Router pattern with React 19 and TypeScript.

### Tech Stack
- Next.js 15 with App Router
- React 19
- TypeScript (strict mode)
- Tailwind CSS 3.4 with custom color palette (bark, sage, cream)

### Project Structure

- `src/app/` - App Router pages: home (`page.tsx`, the gallery grid), piece detail (`gallery/[id]/page.tsx`), and about
- `src/components/` - Shared components (Header, Footer, ImageGallery, InstagramIcon)
- `src/data/pieces.ts` - Gallery piece data
- `src/app/globals.css` - Global styles with a custom Tailwind `card` component

### Key Patterns

**Path alias**: Use `@/*` to import from `src/*`

**Gallery data**: All pieces are defined once in `src/data/pieces.ts`; array order is gallery display order. The home page renders the grid from it, and the detail page pre-renders one static page per piece via `generateStaticParams` (unknown ids 404). To add a piece, add its images under `/public/pieces/` and one entry to the array.

**Images**: Piece images are stored in `/public/pieces/{category}/{piece_name}/` with `thumbnail.jpg` and numbered images (`1.jpg`, `2.jpg`, etc.). The `imageCount` property in the piece data determines how many images to display.

**Fonts**: Inter is loaded with `next/font` in `src/app/layout.tsx` and exposed to Tailwind as the `--font-inter` CSS variable (`font-sans` / `font-display`).

**Custom colors**: The Tailwind config defines three custom color scales (bark for browns, sage for greens, cream for off-whites) each with shades 50-950.
