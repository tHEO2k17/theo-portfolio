export const articleImplementationPlan = {
  phase7Scope: "Second pass: narrative headings, body polish, a11y, index covers.",
  files: [
    {
      path: "lib/writing/framework.ts",
      action: "sectionHeadingRules, taxonomyRules",
      status: "done",
    },
    {
      path: "lib/writing/section-headings.ts",
      action: "Per-article narrative H2 map + applyNarrativeHeadings",
      status: "done",
    },
    {
      path: "lib/writing/content-plan.ts",
      action: "Hooks, outlines, cover/diagram needs (existing)",
      status: "done",
    },
    {
      path: "lib/writing/tts-plan.ts",
      action: "prefers-reduced-motion + reading state spec",
      status: "done",
    },
    {
      path: "lib/writing/ui-plan.ts",
      action: "Index compact covers, reference rules",
      status: "done",
    },
    {
      path: "content/articles/index.ts",
      action: "Apply narrative headings, noteType as category, tag cleanup",
      status: "done",
    },
    {
      path: "content/articles/bodies.ts",
      action: "Leadership diagram, specificity polish, cloud-native wording",
      status: "done",
    },
    {
      path: "components/writing/article-listen.tsx",
      action: "Reduced motion gate, aria reading status",
      status: "done",
    },
    {
      path: "components/media/article-cover.tsx",
      action: "compact variant for writing index",
      status: "done",
    },
    {
      path: "components/writing/writing-index.tsx",
      action: "Compact covers on featured + list items",
      status: "done",
    },
    {
      path: "app/globals.css",
      action: "article-cover--compact styles",
      status: "done",
    },
  ],
  deferred: [
    "Slug shortening with redirects",
    "Pre-generated audio files",
    "Cover thumbnails on home teaser",
  ],
} as const;
