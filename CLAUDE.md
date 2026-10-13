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
- Tailwind CSS 3.4 with a charcoal palette (`coal`) and a `brass` accent

### Project Structure

- `src/app/` - App Router routes: home (landing), `gallery` (all work), piece detail (`gallery/[id]`), `process`, `commission` (the inquiries page and its server action in `actions.ts`), and `about`. Each route's `page.tsx` holds metadata and renders the sibling `_*.tsx` component.
- `src/components/` - Header, Footer, WorkCard, PieceViewer, CommissionForm, NavLinks
- `src/content.ts` - Site copy: contact details, bio, process steps, inquiry text
- `src/data/pieces.ts` - Gallery piece data and categories

### Key Patterns

**Path alias**: Use `@/*` to import from `src/*`

**Tone**: The site is deliberately understated about commissions. Inquiries live on `/commission` (labelled "Inquiries" in the nav); other pages carry at most one quiet text link to it, never a button or a pitch.

**Inquiry form**: `CommissionForm` posts to the `submitCommission` server action in `src/app/commission/actions.ts`. With `RESEND_API_KEY` set it emails the request through Resend (to `COMMISSION_EMAIL`, default contact@wildfowlcarver.com, from `COMMISSION_FROM`); without it, the action returns the composed message and the browser opens a `mailto:` link instead, so the form works with no backend.

**Gallery data**: All pieces are defined once in `src/data/pieces.ts`; array order is gallery display order. Each piece records its category, species, medium and the pixel size of every photo, so designs can lay images out at their natural proportions. To add a piece, add its images under `/public/pieces/` and one entry to the array (`npx tsc` will complain until the sizes are filled in).

**Images**: Piece images are stored in `/public/pieces/{category}/{piece_name}/` with `thumbnail.jpg` and numbered images (`1.jpg`, `2.jpg`, etc.). The `images` array in the piece data lists one `[width, height]` per numbered image. Process photos live in `/public/images/in_progress/`.

**Fonts**: Inter (`font-sans`) and Fraunces (`font-fraunces`, headings) are loaded with `next/font` in `src/app/layout.tsx` and exposed as CSS variables.

**Custom colors**: The Tailwind config defines `coal` (warm charcoals, 100-950) and `brass` (300-500) for the accent.
