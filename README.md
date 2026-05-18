# RCQT.AI Front End

Static JAMstack front end for RCQT.AI, built with Astro, React, and TypeScript.

## Local Development

```bash
npm install
npm run dev
```

## Checks

```bash
npm run check
npm run build
```

## Deployment

- GitHub Pages is handled by `.github/workflows/deploy-pages.yml`.
- Bunny.net Edge Storage is handled by `.github/workflows/deploy-bunny.yml`.

For Bunny.net, configure these repository secrets:

- `BUNNY_STORAGE_ZONE`
- `BUNNY_STORAGE_HOSTNAME`
- `BUNNY_STORAGE_ACCESS_KEY`
- `BUNNY_PURGE_ACCESS_KEY`
- `BUNNY_PULL_ZONE_ID`
- optional `BUNNY_REMOTE_PATH`
