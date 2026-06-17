# Assets checklist

Use this list when you are ready to replace placeholders with final brand assets.

## Required for investors section

- [ ] `public/videos/investors.mp4` — company/investors presentation video
- [ ] Set `investorsVideoAvailable: true` in `src/config/site.ts`
- [ ] (Optional) `public/images/investors-poster.jpg` — thumbnail before play

## Optional branding

- [ ] Company logo SVG or PNG in `public/images/logo.svg` (then update Header.astro)
- [ ] Replace favicon at `public/favicon.svg`

## Team headshots

Add `"image": "/images/filename.jpg"` to each member in `src/data/team.json`:

- [ ] Shlomit Chappel-Ram
- [ ] Ilan Ben-Oren
- [ ] Dr. Irit Yaniv
- [ ] Prof. Ohad Etzion

Until configured, the contact section shows a **mailto** link to `info@digmamedical.com`.

**Note:** The contact form now uses FormSubmit by default (see README). Formspree is optional.

---

## Before go-live

- [x] Contact form (FormSubmit → info@digmamedical.com; activate after first test submit)
- [ ] GA4 measurement ID (GitHub secret `GA4_MEASUREMENT_ID` or `site.ts`)
- [ ] Regulatory review of all clinical/market claims
- [ ] Test contact form and video on mobile

When files are ready, open this project in Cursor (Agent mode) and say:
*"I've added investors.mp4 and team photos — please wire them up."*
