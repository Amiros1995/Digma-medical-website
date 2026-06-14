# Digma Medical Website

Modern marketing site for [Digma Medical](https://www.digmamedical.com/) — built with [Astro](https://astro.build) and deployed to **GitHub Pages**. This project runs in parallel with the existing Wix site until you are ready to switch DNS.

## Quick start (preview on your computer)

1. **Install Node.js LTS** from [nodejs.org](https://nodejs.org/) if you have not already.
2. Open a terminal in this folder and run:

```bash
npm install
npm run dev
```

3. Open the URL shown in the terminal (usually `http://localhost:4321`).

To build a production version locally:

```bash
npm run build
npm run preview
```

---

## How to change content (non-coder guide)

Most updates do **not** require coding skills. Open the files below in Cursor and ask the AI to help, or edit the text directly.

| What you want to change | File to edit |
|-------------------------|--------------|
| Hero headline, about text, market stats | [`src/data/site.json`](src/data/site.json) |
| Team names, roles, bios | [`src/data/team.json`](src/data/team.json) |
| Email, LinkedIn, disclaimer | [`src/config/site.ts`](src/config/site.ts) |
| Colors and fonts | [`src/styles/global.css`](src/styles/global.css) |
| Navigation labels | [`src/config/site.ts`](src/config/site.ts) |
| Investors video | Add `public/videos/investors.mp4` (exact filename — see below) |
| Gallery photos | Add files to `public/images/photos/`, list them in `src/data/gallery.json` |
| Team photos | Add images to `public/images/` and set `"image"` in `team.json` |
| Google Analytics | Paste GA4 ID in `src/config/site.ts` → `ga4MeasurementId` |
| Contact form | Sign up at [formspree.io](https://formspree.io), paste form ID in `site.ts` |

After editing, run `npm run dev` to preview, then deploy (see below).

---

## Add the investors video

1. Copy your MP4 file to:

   ```
   public/videos/investors.mp4
   ```

2. (Optional) Add a poster image at `public/images/investors-poster.jpg`.

3. Open [`src/config/site.ts`](src/config/site.ts) and set:

   ```ts
   investorsVideoAvailable: true,
   ```

4. **Tip:** Keep the file under ~50 MB and 720p for faster loading. Files over 100 MB require Git LFS (already configured for `*.mp4`). Very large videos may take time to start playing in the browser.

---

## Add team headshots

1. Save photos in `public/images/` (e.g. `shlomit.jpg`).
2. In [`src/data/team.json`](src/data/team.json), add an `"image"` field to a member:

   ```json
   "image": "/images/shlomit.jpg"
   ```

Until images are added, initials avatars are shown automatically.

---

## Deploy to GitHub Pages

### Step 1 — Create the GitHub repository

1. Go to [github.com/new](https://github.com/new).
2. Name the repo (e.g. `digma-medical-website`).
3. Do **not** add a README (this project already has one).
4. Create the repo.

### Step 2 — Push this folder

In a terminal from this folder:

```bash
git remote add origin https://github.com/YOUR_USERNAME/digma-medical-website.git
git add .
git commit -m "Initial Digma Medical website"
git branch -M main
git push -u origin main
```

### Step 3 — Enable GitHub Pages

**Important:** Use your **repository** settings, not your account settings.

1. Open your repo on GitHub (e.g. `github.com/Amiros1995/digma-medical-website`).
2. Click the **Settings** tab **on that repo** (not github.com/settings).
3. Left sidebar → **Pages**.
4. Under **Build and deployment**, set **Source** to **GitHub Actions**.

Do **not** use `github.com/settings/pages` — that page is only for verified domains across your account.

After the workflow runs, your site will be at:

`https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

See also [PUSH-GITHUB.md](PUSH-GITHUB.md) for detailed push instructions.

### If your repo name is different

The workflow sets `BASE_PATH` to `/your-repo-name/` automatically. No manual change needed unless you use a custom setup.

### Custom domain (when ready to replace Wix)

1. In GitHub **Settings → Pages**, add custom domain: `www.digmamedical.com`.
2. Update DNS at your registrar (CNAME to `YOUR_USERNAME.github.io` or A records for GitHub Pages).
3. Set `SITE_URL` in the deploy workflow to `https://www.digmamedical.com`.
4. Keep Wix live until you verify the new site works, then remove Wix DNS records.

---

## Site statistics (replacing Wix analytics)

Wix analytics do not transfer. To track visitors:

1. Create a [Google Analytics 4](https://analytics.google.com/) property.
2. Copy the Measurement ID (starts with `G-`).
3. Paste it in [`src/config/site.ts`](src/config/site.ts):

   ```ts
   ga4MeasurementId: 'G-XXXXXXXXXX',
   ```

4. Push to GitHub. View reports in the GA4 dashboard.

Optional: add [Microsoft Clarity](https://clarity.microsoft.com/) for heatmaps.

---

## Contact form (Formspree)

1. Sign up at [formspree.io](https://formspree.io) (free tier available).
2. Create a form and copy the form ID from the endpoint URL.
3. In [`src/config/site.ts`](src/config/site.ts):

   ```ts
   formspreeId: 'your_form_id',
   ```

Until configured, the contact section shows a **mailto** link to `info@digmamedical.com`.

---

## Project structure

```
digma-medical-website/
├── public/              Static files (videos, images, favicon)
├── src/
│   ├── components/      Page sections (Hero, Team, etc.)
│   ├── config/site.ts   Site settings (email, analytics, form)
│   ├── data/            Editable JSON content
│   ├── layouts/         Page shell (header, footer, SEO)
│   ├── pages/           Routes (homepage)
│   ├── scripts/         Scroll animations, mobile menu
│   └── styles/          Colors, fonts, utilities
├── .github/workflows/   Auto-deploy to GitHub Pages
└── astro.config.mjs     Build configuration
```

---

## Brand colors (from Diagone product UI)

| Token | Hex | Usage |
|-------|-----|--------|
| Primary | `#607D8B` | Links, accents |
| Surface | `#E5F0F1` | Page background |
| Deep | `#3D5A66` | Headings, footer |
| Highlight | `#C62828` | CTAs, laser accent |

Edit `@theme` in [`src/styles/global.css`](src/styles/global.css) to change colors site-wide.

---

## Working with Cursor AI

- **Change copy:** “Update the hero subtitle in site.json to say …”
- **Change colors:** “Make the primary color darker in global.css”
- **Add section:** “Add a News section between Team and Investors”
- **Deploy:** “Commit and push these changes to GitHub”

Use **Agent mode** for edits; use **Ask mode** when you only want explanations.

---

## Regulatory note

The footer includes the investigational-use disclaimer. Review any clinical or market claims with your regulatory team before publishing.

---

## License

Proprietary — Digma Medical Ltd.
