# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint

## Architecture

This is a Next.js 15 portfolio website for a wood carver artist, using the App Router pattern with React 19 and TypeScript.

### Tech Stack
- Next.js 15 with App Router
- React 19
- TypeScript (strict mode)
- Tailwind CSS 3.4 with custom color palette (bark, sage, cream)

### Project Structure

- `src/app/` - App Router pages (home, gallery, about, contact)
- `src/components/` - Shared components (Header, Footer)
- `src/app/globals.css` - Global styles with custom Tailwind components (btn-primary, btn-secondary, section-heading, card)

### Key Patterns

**Path alias**: Use `@/*` to import from `src/*`

**Gallery data**: Piece metadata is defined inline in the page components rather than a separate data file. The gallery page (`src/app/gallery/page.tsx`) and detail page (`src/app/gallery/[id]/page.tsx`) each maintain their own piece definitions.

**Images**: Piece images are stored in `/public/pieces/{category}/{piece_name}/` with `thumbnail.jpg` and numbered images (`1.jpg`, `2.jpg`, etc.). The `imageCount` property in the piece data determines how many images to display.

**Custom colors**: The Tailwind config defines three custom color scales (bark for browns, sage for greens, cream for off-whites) each with shades 50-950.
