# Photo gallery folder

Drop your website photos here (JPG, PNG, or WebP).

## How to add a photo to the site

1. Copy your image into this folder, e.g. `egad-console.jpg`
2. Open `src/data/gallery.json` and add an entry:

```json
{
  "src": "/images/photos/egad-console.jpg",
  "alt": "EGAD console in the endoscopy suite",
  "caption": "Optional caption shown under the image"
}
```

3. Ask Cursor (Agent mode): *"Show the gallery section on the homepage"* — or set `"enabled": true` in `gallery.json` once photos are added.

## Tips

- Prefer JPG/WebP under 500 KB each for fast loading
- Use descriptive filenames: `team-event-2025.jpg`, not `IMG_0042.jpg`
- Always fill in the `alt` text (accessibility + SEO)
