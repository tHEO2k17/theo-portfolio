/**
 * Article media tokens — procedural SVG covers and diagram variants.
 * Palette uses site earth tones: bronze, warm accent, muted border greys.
 */

export const articleCoverVariants = [
  "field",
  "product-ghana",
  "flutter-layers",
  "cloud-stack",
  "leadership",
  "api-flow",
  "react-state",
  "incident",
  "offline",
  "monolith",
  "ci-pipeline",
  "observability",
  "documentation",
  "ai-workflow",
  "workshop",
] as const;

export type ArticleCoverVariant = (typeof articleCoverVariants)[number];

export const articleDiagramVariants = [
  "flow-horizontal",
  "layers",
  "pipeline",
  "workshop",
  "network",
] as const;

export type ArticleDiagramVariant = (typeof articleDiagramVariants)[number];

type CoverPalette = {
  paper: string;
  ink: string;
  accent: string;
  line: string;
};

const defaultPalette: CoverPalette = {
  paper: "var(--color-bg-secondary)",
  ink: "var(--color-text-tertiary)",
  accent: "var(--color-accent-warm)",
  line: "var(--color-border)",
};

export const coverPalettes: Record<ArticleCoverVariant, CoverPalette> =
  Object.fromEntries(
    articleCoverVariants.map((variant) => [variant, defaultPalette]),
  ) as Record<ArticleCoverVariant, CoverPalette>;

export const MEDIA = {
  opacity: {
    whisper: 0.12,
    quiet: 0.16,
    ambient: 0.2,
  },
  cover: {
    aspectRatio: "21 / 9",
    maxHeight: "12rem",
  },
} as const;
