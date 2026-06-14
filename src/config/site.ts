/** Site-wide settings — edit these when going live or adding analytics/forms. */
export const siteConfig = {
  name: 'Digma Medical',
  tagline: 'LASER Ablation for Gastrointestinal Diseases',
  url: 'https://www.digmamedical.com',
  email: 'info@digmamedical.com',
  linkedIn: 'https://www.linkedin.com/company/digma-medical',

  /** Paste your GA4 measurement ID (e.g. G-XXXXXXXXXX) to enable analytics. Leave empty to disable. */
  ga4MeasurementId: '',

  /** Paste your Formspree form ID (from formspree.io) to enable the contact form. Leave empty to show mailto fallback. */
  formspreeId: '',

  /** Set to true once you add public/videos/investors.mp4 */
  investorsVideoAvailable: true,

  iuoDisclaimer:
    'The Digma System is for investigational use only and is not available for sale in any geography.',
  copyrightYear: 2026,
} as const;

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#barretts', label: "Barrett's" },
  { href: '#technology', label: 'EGAD' },
  { href: '#market', label: 'Market' },
  { href: '#team', label: 'Team' },
  { href: '#investors', label: 'Investors' },
  { href: '#contact', label: 'Contact' },
] as const;
