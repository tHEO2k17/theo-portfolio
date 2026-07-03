/**
 * Editorial component library — Phase 7
 *
 * Reusable presentation components for Theo's editorial engineering site.
 * Layout primitives live in `components/layout/`; motion in `components/motion/`.
 */

export const EDITORIAL_COMPONENTS = {
  EditorialLink: "Quiet text link — internal or external, motion-link aware",
  SectionIntro: "Section label row with optional trailing action link",
  WorkFeature: "Project editorial block — teaser or full detail",
  ArticleTeaser: "Writing teaser — featured or compact",
  PrincipleItem: "Philosophy principle with left rule",
  ProcessStepItem: "Numbered process step",
  ExperienceIndexEntry: "Chronological experience index row",
  ProofStat: "Practice proof metric",
  ContactChannel: "Quiet contact channel link",
  TagLine: "Dot-separated technology or tag list",
  EditorialRule: "Subtle horizontal divider",
} as const;

export type EditorialComponentName = keyof typeof EDITORIAL_COMPONENTS;
