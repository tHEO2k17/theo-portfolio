/** Embed colors aligned to site tokens (hsl 0 0% 7% / 75% / accent-warm). */
export const CALENDLY_EMBED_COLORS = {
  background: "121212",
  text: "bfbfbf",
  primary: "b5a56c",
} as const;

/** Public Calendly scheduling URL (inline embed). Set in hosting env. */
export function getCalendlyUrl(): string | null {
  const url = process.env.NEXT_PUBLIC_CALENDLY_URL?.trim();
  if (!url) return null;
  return url;
}

/** Calendly inline embed params for the parent page host. */
export function buildCalendlyEmbedUrl(baseUrl: string, host: string): string {
  const url = new URL(baseUrl);
  url.searchParams.set("embed_domain", host);
  url.searchParams.set("embed_type", "Inline");
  url.searchParams.set("hide_gdpr_banner", "1");
  url.searchParams.set("hide_event_type_details", "1");
  url.searchParams.set("hide_landing_page_details", "1");
  url.searchParams.set("background_color", CALENDLY_EMBED_COLORS.background);
  url.searchParams.set("text_color", CALENDLY_EMBED_COLORS.text);
  url.searchParams.set("primary_color", CALENDLY_EMBED_COLORS.primary);
  return url.toString();
}
