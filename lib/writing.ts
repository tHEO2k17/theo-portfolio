import type { ArticleNoteType } from "./writing/article-types";
import { articleNoteTypes, isArticleNoteType } from "./writing/article-types";

export const writingHero = {
  eyebrow: "Notes",
  label: "Writing",
  title: "Writing",
  description:
    "Engineering notes on architecture, delivery, and leadership from real product work.",
  mobileTagline: "Notes on building products with global teams.",
} as const;

export const writingTopicPillLabels = {
  "Field Notes": "Field",
  "Engineering Notes": "Engineering",
  "Leadership Notes": "Leadership",
  "Product Notes": "Product",
  "Architecture Notes": "Architecture",
} as const satisfies Record<ArticleNoteType, string>;

export const writingTopics = articleNoteTypes;

export function getArticleNoteType(
  article: { noteType?: ArticleNoteType; category: string },
): ArticleNoteType {
  if (article.noteType) {
    return article.noteType;
  }

  if (isArticleNoteType(article.category)) {
    return article.category;
  }

  return getTopicForCategory(article.category);
}

/** @deprecated Use getArticleNoteType. Kept for transitional category mapping. */
export function getTopicForCategory(category: string): ArticleNoteType {
  const normalized = category.toLowerCase();

  if (
    normalized.includes("career") ||
    normalized.includes("reliability") ||
    normalized.includes("observability")
  ) {
    return "Field Notes";
  }

  if (
    normalized.includes("backend") ||
    normalized.includes("frontend") ||
    normalized.includes("mobile") ||
    normalized.includes("devops") ||
    normalized.includes("ai")
  ) {
    return "Engineering Notes";
  }

  if (normalized.includes("leadership") || normalized.includes("culture")) {
    return "Leadership Notes";
  }

  if (normalized.includes("ghana") || normalized.includes("product")) {
    return "Product Notes";
  }

  if (normalized.includes("architecture") || normalized.includes("cloud")) {
    return "Architecture Notes";
  }

  return "Engineering Notes";
}
