# portfolio-editorial

A dark, type-led editorial portfolio for Dhanush Shankar — set in Fraunces &
Inter, printed in the dark. Reads like an engineering journal, not a template.

## Stack

Next.js 16 (App Router, Turbopack), React 19, Tailwind CSS v4, Framer Motion 11,
cmdk, Vercel Analytics + Speed Insights, `@vercel/og` for social cards.

## Local dev

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy

Push to a repo and import into Vercel — zero config required.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FDanush-Aries%2Fportfolio-editorial)

## Highlights

- Type-forward hero with a single warm amber accent and hair-thin fold-marker rule
- List-form work index (no thumbnails, keyboard-navigable, hover-reveal tech tags)
- Editorial case-study template with dropcaps, pull quotes, and hand-drawn SVG diagrams
- `/notes` reverse-chron essay stream with reading-time estimates
- Full `/colophon` with type stack, palette, and toolchain
- `Cmd + K` command palette to jump between sections and projects
- Dynamic OG image via `@vercel/og`

## Structure

```
src/
  app/            App Router routes (home, work/[slug], notes, colophon)
  components/     nav, hero, work, sections, prose, primitives
  content/        MDX seed for work + notes
  lib/            projects, notes, cn
```
