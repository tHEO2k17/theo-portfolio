export const LEGACY_HASH_REDIRECTS: Record<string, string> = {
  hero: "/",
  about: "/practice",
  experience: "/experience",
  skills: "/practice#capabilities",
  projects: "/work",
  leadership: "/practice#leadership",
  contact: "/contact",
  articles: "/articles",
  writing: "/articles",
  metrics: "/practice#proof",
  education: "/practice#credentials",
};

export function resolveLegacyHashRedirect(hash: string): string | null {
  const key = hash.replace(/^#/, "");
  return LEGACY_HASH_REDIRECTS[key] ?? null;
}
