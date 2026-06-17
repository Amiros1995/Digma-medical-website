/** Site-wide settings — edit these when going live or adding analytics/forms. */
export const siteConfig = {
  name: 'Digma Medical',
  tagline: 'LASER Ablation for Gastrointestinal Diseases',
  url: 'https://digmamedical.com',
  email: 'info@digmamedical.com',
  phone: '03-6734561',
  phoneTel: '+97236734561',
  linkedIn: 'https://www.linkedin.com/company/digma-medical',

  /** Path to logo in public/ (used in header) */
  logo: '/images/logo.png',

  /** GA4 measurement ID (e.g. G-XXXXXXXXXX). Set here or via PUBLIC_GA4_MEASUREMENT_ID at build time. */
  ga4MeasurementId:
    (import.meta.env.PUBLIC_GA4_MEASUREMENT_ID as string | undefined)?.trim() || '',

  /**
   * Optional Formspree form ID — overrides FormSubmit if set.
   * Leave empty to deliver submissions to `email` via FormSubmit.co (free; one-time inbox activation).
   */
  formspreeId: (import.meta.env.PUBLIC_FORMSPREE_ID as string | undefined)?.trim() || '',

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
