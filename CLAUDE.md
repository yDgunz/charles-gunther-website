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
- Tailwind CSS 3.4 with custom color palettes per design (bark/sage/cream for the current site; ink, paper/moss/rust, coal/brass for the others)

### Project Structure

- `src/app/` - App Router routes: home, piece detail (`gallery/[id]`), about, and `/preview` (turns on design review mode). Routes are thin: they pick the active design and render its component.
- `src/designs/` - One folder per design (`current`, `gallery`, `fieldguide`, `studio`), each exporting `Shell`, `Home`, `About` and `Piece`. `index.ts` is the registry; `content.ts` holds the copy shared by every design; `DesignSwitcher.tsx` is the review bar.
- `src/components/` - Pieces shared across designs (PieceViewer, NavLinks, InstagramIcon) plus the current design's Header and Footer
- `src/data/pieces.ts` - Gallery piece data and categories
- `src/app/globals.css` - Tailwind base plus the `card` component and the `paper-grain` texture

### Key Patterns

**Path alias**: Use `@/*` to import from `src/*`

**Design review mode**: The site can render in any of several designs. Visiting `/preview` sets a `preview` cookie that shows a review bar; the bar sets a `design` cookie through server actions in `src/designs/actions.ts`. `getDesign()` reads the cookie in the root layout and every route, falling back to `current` for ordinary visitors. Because the layout reads cookies, all routes render dynamically. The review bar's "Open in email" button addresses the `FEEDBACK_EMAIL` environment variable (blank recipient if unset).

**Gallery data**: All pieces are defined once in `src/data/pieces.ts`; array order is gallery display order. Each piece records its category, species, medium and the pixel size of every photo, so designs can lay images out at their natural proportions. To add a piece, add its images under `/public/pieces/` and one entry to the array (`npx tsc` will complain until the sizes are filled in).

**Images**: Piece images are stored in `/public/pieces/{category}/{piece_name}/` with `thumbnail.jpg` and numbered images (`1.jpg`, `2.jpg`, etc.). The `images` array in the piece data lists one `[width, height]` per numbered image. Process photos for the About pages live in `/public/images/in_progress/`.

**Fonts**: Inter is loaded with `next/font` in `src/app/layout.tsx` (`font-sans` / `font-display`). Each design's `Shell` loads its own display face the same way: Cormorant Garamond (`font-cormorant`), Lora (`font-lora`), Fraunces (`font-fraunces`).

**Custom colors**: The Tailwind config defines three custom color scales (bark for browns, sage for greens, cream for off-whites) each with shades 50-950.
