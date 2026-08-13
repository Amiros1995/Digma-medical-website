/** Site-wide settings — edit these when going live or adding analytics/forms. */
export const siteConfig = {
  name: 'Digma Medical',
  productName: 'VeriDepth',
  tagline: 'Depth-Controlled LASER Ablation for Gastrointestinal Disease',
  url: 'https://digmamedical.com',
  email: 'info@digmamedical.com',
  phone: '03-6734561',
  phoneTel: '+97236734561',
  linkedIn: 'https://www.linkedin.com/company/digma-medical',

  /** Path to logo in public/ (used in header) */
  logo: '/images/logo.png',

  /** GA4 measurement ID (e.g. G-XXXXXXXXXX). Set here or via PUBLIC_GA4_MEASUREMENT_ID at build time. */
  ga4MeasurementId:
    (import.meta.env.PUBLIC_GA4_MEASUREMENT_ID as string | undefined)?.trim() || 'G-HFQ3827LZ5',

  /**
   * Optional Formspree form ID — overrides FormSubmit if set.
   * Leave empty to deliver submissions to `email` via FormSubmit.co (free; one-time inbox activation).
   */
  formspreeId: (import.meta.env.PUBLIC_FORMSPREE_ID as string | undefined)?.trim() || '',

  /** Set to true once you add public/videos/investors.mp4 */
  investorsVideoAvailable: true,

  iuoDisclaimer:
    'VeriDepth is for investigational use only and is not available for sale in any geography. Statements regarding performance, procedure count, and clinical benefit are development targets subject to validation in clinical studies.',
  copyrightYear: 2026,
} as const;

export const navLinks = [
  { href: '#platform', label: 'Platform' },
  { href: '#depth', label: 'Why Depth' },
  { href: '#physicians', label: 'Physicians' },
  { href: '#barretts', label: "Barrett's" },
  { href: '#program', label: 'Program' },
  { href: '#team', label: 'Team' },
] as const;

export const footerLinks = [
  { href: '#platform', label: 'Platform' },
  { href: '#program', label: 'Program status' },
  { href: '#quality', label: 'Quality' },
  { href: '#investors', label: 'Investors' },
] as const;
