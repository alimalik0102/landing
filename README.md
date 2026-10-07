# Convertt — Landing Page (Next.js)

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Where to edit

- **Copy & placeholders** — `lib/content.ts` (services, process steps, case studies, FAQ, testimonial, logos). Replace every `[bracketed]` value.
- **Hero / CTA text** — `components/Hero.tsx`, `components/AuditCta.tsx`
- **Colours** — `app/globals.css` → `:root`. Change `--accent` to re-theme (lime `#D4FF3A`, mint `#7CF3C5`, amber `#FFB547`, lilac `#B9A6FF`).
- **Fonts** — `app/layout.tsx` (Bricolage Grotesque + DM Sans via `next/font`).
- **Audit form** — `components/AuditCta.tsx`: hook the `onSubmit` up to your CRM or an API route.

## Deploy

Push to GitHub and import on Vercel, or run `npm run build && npm start`.
