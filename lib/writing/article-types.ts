export const articleNoteTypes = [
  "Field Notes",
  "Engineering Notes",
  "Leadership Notes",
  "Product Notes",
  "Architecture Notes",
] as const;

export type ArticleNoteType = (typeof articleNoteTypes)[number];

export const articleNoteTypeLabels: Record<ArticleNoteType, string> = {
  "Field Notes": "Short lessons from real work.",
  "Engineering Notes": "Technical explanations with examples.",
  "Leadership Notes": "Team, delivery, and decisions.",
  "Product Notes": "Users, UX, and product thinking.",
  "Architecture Notes": "Systems, boundaries, and tradeoffs.",
};

export function isArticleNoteType(value: string): value is ArticleNoteType {
  return articleNoteTypes.includes(value as ArticleNoteType);
}
