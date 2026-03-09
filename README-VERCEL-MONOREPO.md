# Vercel Monorepo Deployment

This repository is configured as a monorepo with the PA Concorso site as a workspace app.

## Workspace Layout

- Root workspace config: `package.json`
- Deployable PA app: `mockups/pcf`
- App-level Vercel config: `mockups/pcf/vercel.json`

## Vercel Project Setup

Verified Vercel project:
- Project name: `pcf`
- Project ID: `prj_QgfHHlwKY4RhWwnjdRD9WX8HDSKk`

1. Import this repository into Vercel.
2. In project settings, set **Root Directory** to:
   - `mockups/pcf`
3. Framework preset:
   - `Other`
4. Build command:
   - leave empty (or `npm run build`)
5. Output directory:
   - leave empty

This is a static HTML/CSS site, so no framework build step is required.
The root `package.json` includes a `vercel-build` script that resolves to `npm run build:pcf`.

## Local Commands

From repo root:

```bash
npm run build:pcf
npm run preview:pcf
```

From app root:

```bash
cd mockups/pcf
npm run preview
```

## Registration URL Token

The site is currently using:

- `REGFOX_PUBLIC_URL_TBD`

Before production launch, replace this token in all HTML files under `mockups/pcf`.

## Optional: CLI Deploy

If you deploy via CLI from repo root:

```bash
vercel --cwd mockups/pcf
```

Production deploy:

```bash
vercel --prod --cwd mockups/pcf
```
