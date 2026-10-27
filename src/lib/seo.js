// Production domain used for canonical URLs, the XML sitemap and robots.txt.
export const SITE_URL = 'https://drmohinimutha.com';

// Search engines may index the site only when SITE_INDEXABLE=true is set in the
// deployment's environment. Leave it unset on staging/preview deployments
// (drmohinimutha.vercel.app) so they are never indexed; set it on production at launch.
export const isIndexable = () => process.env.SITE_INDEXABLE === 'true';

// All 35 routes (34 + /contact, added for audit AUD-18).
export const ROUTES = [
  '/',
  '/about-me',
  '/my-journey',
  '/clinical-philosophy',
  '/my-approach',
  '/my-approach/why-homeopathy',
  '/my-approach/integrated-healing',
  '/my-approach/consultation-process',
  '/my-approach/personalised-treatment',
  '/expertise/general-health-wellness',
  '/expertise/respiratory-health',
  '/expertise/headache-migraine-care',
  '/expertise/digestive-gut-health',
  '/expertise/skin-hair-allergies',
  '/expertise/womens-wellness',
  '/expertise/child-adolescent-wellness',
  '/expertise/joint-muscle-pain-management',
  '/expertise/sleep-lifestyle-concerns',
  '/expertise/mental-emotional-psychosomatic-wellness',
  '/credentials/professional-experience',
  '/credentials/education-qualifications',
  '/credentials/achievements',
  '/resources/patient-stories',
  '/resources/case-studies',
  '/resources/blogs',
  '/resources/faqs',
  '/resources/myths-vs-facts',
  '/resources/invite-me-to-speak',
  '/book-a-consultation',
  '/contact',
  '/privacy-policy',
  '/terms-and-conditions',
  '/disclaimer',
  '/cookie-policy',
  '/sitemap',
];
