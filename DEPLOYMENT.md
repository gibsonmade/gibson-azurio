# Vercel Deployment

Launch target: `www.gibsooon.com`.

## Vercel project settings

- Framework preset: `Next.js`
- Install command: `npm install`
- Build command: `npm run build`
- Output directory: leave blank/default
- Root directory: repository root

## Environment variables

Set this in Vercel before production deploy:

```bash
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_web3forms_key
```

Do not set these for the Vercel production site:

```bash
EXPORT=true
BASE_PATH=...
```

`EXPORT=true` is only for static export/GitHub Pages style builds. Vercel should use the normal Next.js build so redirects, image optimization, and App Router behavior work as expected.

## Domains

1. Add `gibsooon.com` in Vercel.
2. Add `www.gibsooon.com` in Vercel.
3. Make `www.gibsooon.com` the primary domain if the launch should use `www`.
4. Confirm DNS in Vercel shows both domains as valid.
5. After DNS resolves, verify:
   - `https://www.gibsooon.com`
   - `https://gibsooon.com`
   - redirects/canonical behavior matches the Vercel primary-domain setting.

## Pre-launch checks

Run:

```bash
npm run build
```

Then verify:

- `/`
- `/about`
- `/work`
- all `/work/[slug]` case studies
- `/lab`
- all `/lab/article/[slug]` articles
- `/contact`
- `/credits`
- `/project-launch`
- a fake route returns the custom 404

Legacy redirects expected on Vercel:

- `/blog-article` -> `/lab`
- `/works-default` -> `/work`
- `/services` -> `/`
