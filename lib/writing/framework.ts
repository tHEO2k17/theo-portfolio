import type { ArticleNoteType } from "./article-types";

export const articleStructureSteps = [
  "Hook",
  "Context",
  "Problem",
  "What I learned",
  "Example",
  "Takeaway",
] as const;

export type ArticleStructureStep = (typeof articleStructureSteps)[number];

export const articleCopyRules = {
  sentenceMaxWords: 15,
  paragraphMaxSentences: 3,
  preferredReadMinutes: { min: 2, max: 5 },
  maximumReadMinutes: 20,
  bannedWords: [
    "thoughtful",
    "meaningful",
    "intentional",
    "transformative",
    "leverage",
    "empower",
    "seamless",
    "robust",
    "craft",
    "solutions",
    "unlock",
    "furthermore",
    "however",
  ],
  bannedPhrases: [
    "in this article",
    "let's dive in",
    "it is important to note",
    "best practices",
    "game-changing",
    "scalable solutions",
  ],
  preferPhrases: [
    "I learned this the hard way.",
    "The bug was not in the code.",
    "The problem was the assumption.",
    "This worked better.",
    "Here is the cleaner version.",
  ],
  punctuation: {
    noEmDash: true,
    noSemicolon: true,
    preferPeriods: true,
  },
} as const;

/** H2 labels that make every article read like the same form. */
export const sectionHeadingRules = {
  avoidAsH2: [
    "Context",
    "The problem",
    "What I learned",
    "Takeaway",
    "Example",
    "Hook",
  ],
  prefer:
    "Short narrative phrases tied to the scene. Each article should have unique section titles.",
  structure:
    "Keep Hook → context → problem → insight → example → close internally. Do not label sections with template words.",
  closingSection:
    "End with one clear lesson. The final heading can repeat the lesson or stay implicit in prose.",
} as const;

export const taxonomyRules = {
  primaryLabel: "noteType",
  deprecateInUi: ["category"],
  tagGuidance:
    "Tags describe the topic, not resume keywords. Drop framework buzzwords unless the article is about that tool.",
} as const;

export const codeExampleRules = {
  maxLines: 25,
  mustBeProductionMinded: true,
  avoidToyExamples: true,
  avoidFolderTrees: true,
  requireBriefExplanation: true,
} as const;

export const referenceRules = {
  useWhen: "External facts, standards, or official documentation.",
  skipWhen: "Personal opinions and field stories.",
  maxPerShortArticle: 3,
  preferSources: [
    "Official documentation",
    "Standards bodies",
    "Respected engineering writing",
  ],
} as const;

export const coverVisualRules = {
  style:
    "Minimal abstract SVG. Thin lines. Earth-tone palette. Geometry from infrastructure, rhythm, and field work — never literal cultural symbols.",
  avoid: [
    "Stock photos",
    "Laptops",
    "Corporate imagery",
    "Fake business photos",
    "Generic thumbnails",
    "Japanese or zen visual clichés",
    "Literal Adinkra artwork",
  ],
  useProceduralSvg: true,
} as const;

export const diagramVisualRules = {
  style: "Thin lines. Site colors only. No bright fills. No 3D. No clipart.",
  allowed: [
    "flow",
    "layers",
    "pipeline",
    "sequence",
    "workshop",
    "network",
  ],
  useOnlyWhenHelpful: true,
} as const;

export type ArticleTemplate = {
  noteType: ArticleNoteType;
  sections: ArticleStructureStep[];
};

export const articleTemplates: Record<ArticleNoteType, ArticleTemplate> = {
  "Field Notes": {
    noteType: "Field Notes",
    sections: ["Hook", "Context", "Problem", "What I learned", "Takeaway"],
  },
  "Engineering Notes": {
    noteType: "Engineering Notes",
    sections: [
      "Hook",
      "Context",
      "Problem",
      "What I learned",
      "Example",
      "Takeaway",
    ],
  },
  "Leadership Notes": {
    noteType: "Leadership Notes",
    sections: ["Hook", "Context", "Problem", "What I learned", "Takeaway"],
  },
  "Product Notes": {
    noteType: "Product Notes",
    sections: [
      "Hook",
      "Context",
      "Problem",
      "What I learned",
      "Example",
      "Takeaway",
    ],
  },
  "Architecture Notes": {
    noteType: "Architecture Notes",
    sections: [
      "Hook",
      "Context",
      "Problem",
      "What I learned",
      "Example",
      "Takeaway",
    ],
  },
};
