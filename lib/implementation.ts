/**
 * Phase 10 — implementation and deploy reference
 */

export const SEO_FOUNDATIONS = {
  domain: "https://theopaintsil.online",
  sitemap: "/sitemap.xml",
  robots: "/robots.txt",
  structuredData: [
    "Person + WebSite on homepage",
    "WebPage + BreadcrumbList on dedicated routes",
    "BlogPosting + Person on article detail",
  ],
} as const;

export const LEGACY_ROUTE_NOTES = {
  hashRedirects: "lib/legacy-hash-redirect.ts",
  clientHandler: "components/legacy-hash-redirect.tsx (homepage + SitePageShell)",
  preservedArticleSlugs: 15,
} as const;

export const DEPLOYMENT_CHECKLIST = [
  "Set NEXT_PUBLIC_MAPBOX_TOKEN in production environment",
  "Verify Netlify build uses npm run build",
  "Confirm sitemap.xml lists /, dedicated routes, and all article URLs",
  "Test legacy hash URLs (e.g. /#projects → /work, /#about → /practice)",
  "Run npm run build and npx tsc --noEmit before deploy",
] as const;
