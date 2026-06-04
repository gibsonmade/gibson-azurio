# Gibsooon

Next.js App Router site for `www.gibsooon.com`.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the home page in `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Launch Deployment

Use [DEPLOYMENT.md](./DEPLOYMENT.md) for the launch runbook.

Key Vercel settings:

- Framework preset: `Next.js`
- Install command: `npm install`
- Build command: `npm run build`
- Output directory: leave blank/default
- Required env var: `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`

Do not set `EXPORT=true` or `BASE_PATH` for the Vercel production site.

## Useful Commands

```bash
npm run build
npm run dev
npm run lint
```
