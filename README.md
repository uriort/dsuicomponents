# Deeper Signals Design System

Standalone React + Tailwind component system reverse-engineered from the authenticated staging UI at `eu.staging.app.deepersignals.com`.

## What is included

- `tailwind.config.js` with extracted tokens for color, type, spacing, radius, and shadows
- `packages/tokens` for token definitions and the Tailwind theme extension
- `packages/styles` for shared CSS variables and base styles
- `packages/components` for reusable React + Tailwind UI primitives
- An example app in `src/App.tsx` showing how the components recreate the core product patterns
- Audit data in `src/data/audit.ts`

## Run locally

```bash
npm install
npm run dev
```

## Storybook

```bash
npm run storybook
```

## Build

```bash
npm run build
npm run build-storybook
```

## Structure

```text
packages/
  components/
  styles/
  tokens/
src/
  data/
  App.tsx
tailwind.config.js
```
