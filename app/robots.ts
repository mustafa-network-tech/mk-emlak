import type { MetadataRoute } from 'next';

// Crawlable on purpose so search engines can read the noindex; no sitemap for a demo.
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: '*', allow: '/' } };
}
