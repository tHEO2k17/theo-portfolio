import type { ExperienceEntry } from "./types";

export function getExperienceLocationLabels(entry: ExperienceEntry) {
  return entry.locationLabels;
}

export function getExperienceToolsPreview(
  entry: ExperienceEntry,
  limit = 5,
) {
  const tools = entry.systemsAndTools.flatMap((group) => group.tools);
  return tools.slice(0, limit).join(" · ");
}


export function getExperienceSummary(entry: ExperienceEntry) {
  return entry.summary;
}

export function truncateWords(text: string, maxWords: number) {
  const words = text.trim().split(/\s+/);
  if (words.length <= maxWords) return text.trim();
  return `${words.slice(0, maxWords).join(" ")}…`;
}

export function getMapPanelExpanded(entry: ExperienceEntry) {
  return {
    context: truncateWords(entry.story.context, 28),
    problem: truncateWords(entry.story.problem, 26),
    result: truncateWords(entry.story.results, 26),
  };
}

export const experienceCareerSummary = {
  domains: [
    "Fintech.",
    "Water.",
    "Manufacturing.",
    "Cybersecurity.",
    "Payments.",
    "Mobility.",
    "Software platforms.",
  ],
  regions: ["Ghana.", "Denmark.", "Germany.", "United States."],
  closing: "Eight years building products and leading teams.",
} as const;
