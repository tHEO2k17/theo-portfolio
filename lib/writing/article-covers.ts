/** Cover art sourced from production article routes at theopaintsil.online */
export const articleCoverImages = {
  "top-10-things-i-would-do-if-i-were-starting-again-as-a-junior-developer":
    "/articles/junior-developer-roadmap.jpg",
  "developing-scalable-solutions-for-ghanaian-users-as-a-secure-software-lifecycle-professional":
    "/articles/ghanaian-scalable-solutions.jpg",
  "structuring-large-flutter-applications-using-clean-architecture":
    "/articles/flutter-clean-architecture.jpg",
  "lessons-from-building-cloud-native-systems-with-nextjs-and-nestjs":
    "/articles/nextjs-nestjs-cloud-native.jpg",
  "why-technical-leadership-is-more-than-just-writing-code":
    "/articles/technical-leadership.jpg",
  "how-to-design-api-endpoints-that-stay-small-predictable-and-easy-to-test":
    "/articles/api-endpoints-whiteboard.jpg",
  "how-to-structure-a-react-frontend-so-ui-data-and-state-do-not-collide":
    "/articles/react-frontend-workspace.jpg",
  "how-to-debug-a-production-incident-without-guessing":
    "/articles/production-incident-debugging.jpg",
  "how-to-build-offline-first-mobile-features-for-unstable-networks":
    "/articles/offline-first-mobile.jpg",
  "how-to-refactor-a-monolith-into-clearer-modules-without-breaking-everything":
    "/articles/refactor-monolith-modules.jpg",
  "how-to-set-up-a-practical-ci-pipeline-that-catches-regressions-early":
    "/articles/ci-pipeline-regression.jpg",
  "how-to-build-a-feature-team-feedback-loop-with-logging-metrics-and-alerts":
    "/articles/observability-feedback-loop.jpg",
  "how-to-document-engineering-decisions-so-the-team-can-move-faster":
    "/articles/engineering-decisions-documentation.jpg",
  "how-to-use-ai-tools-in-a-software-workflow-without-losing-engineering-judgment":
    "/articles/ai-engineering-workflow.jpg",
  "how-to-plan-and-run-a-technical-architecture-workshop-that-actually-helps":
    "/articles/architecture-workshop.jpg",
} as const satisfies Record<string, string>;

export type ArticleCoverSlug = keyof typeof articleCoverImages;

export function getArticleCoverImage(slug: string): string | undefined {
  return articleCoverImages[slug as ArticleCoverSlug];
}
