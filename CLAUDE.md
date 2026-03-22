# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install       # Install dependencies
npm run dev       # Start dev server at http://localhost:5173
npm run build     # Production build to dist/
npm run preview   # Preview production build
```

## Architecture

**Stack:** SolidJS + Vite + Tailwind CSS v4 + `@solidjs/router`

**Routing** (`src/App.jsx`): Two routes — `/` (Home) and `/soundscapes` (Soundscapes). Each page composes `Navbar`, `Footer`, and section components.

**Directory layout:**
- `src/pages/` — top-level route components
- `src/sections/` — large page sections (one concern each); soundscapes-specific sections live in `src/sections/soundscapes/`
- `src/components/` — shared UI (`Navbar`, `Footer`)

**Styling:** Tailwind CSS v4 configured via `@theme` in `src/index.css`. All design tokens (colors, fonts, radii) are defined there as CSS custom properties. Colors follow a Material Design 3 naming convention (`surface`, `on-surface`, `primary`, `secondary`, `tertiary`, etc.). Fonts: `Noto Serif` (headlines), `Manrope` (body/labels). Google Material Symbols icon font is loaded globally.

**No test framework** is currently configured.
