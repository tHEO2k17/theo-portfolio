export const articleUiPlan = {
  detailPage: {
    cover: {
      component: "ArticleCover",
      placement: "Above article title in magazine header",
      style: "Procedural SVG per coverVariant. Thin lines. Paper tone.",
      aspectRatio: "21:9",
    },
    noteTypeLabel: {
      placement: "Below cover, above title",
      source: "article.noteType from content plan merge",
    },
    listen: {
      component: "ArticleListen",
      placement: "Header meta row beside reading time",
      reducedMotion: "Hidden when prefers-reduced-motion is active",
      readingState: "aria-live status while playing or paused",
    },
    diagrams: {
      component: "ArticleDiagram",
      placement: "Inline in article body via diagram content blocks",
      style: "Thin SVG. Site tokens. No bright fills.",
    },
    code: {
      style: "Existing pre/code block. Monospace. Surface background.",
      rules: "Max 25 lines. Production-minded snippets only.",
    },
    references: {
      label: "References",
      placement: "After body sections",
      source: "article.readMore links",
      maxLinks: 3,
      opinionLedArticles: "No references section",
    },
    readingControls: {
      progress: "ReadingProgress bar (existing)",
      adjacentNav: "ArticleAdjacentNav (existing)",
      toc: "EditorialDisclosure Contents when 2+ sections",
    },
    sectionHeadings: {
      source: "applyNarrativeHeadings from lib/writing/section-headings.ts",
      avoidTemplateLabels: true,
    },
  },
  writingIndex: {
    cover: {
      component: "ArticleCover",
      variant: "compact strip",
      placement: "Above title in list items and featured slot",
      aspectRatio: "21:9",
      maxHeight: "4.5rem",
    },
    filters: "Five note types",
    featured: "Featured slot with compact cover + text",
  },
  homeTeaser: {
    cover: "Text-first. Title, date, excerpt only.",
  },
} as const;
