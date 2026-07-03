/** Per-article narrative H2 labels keyed by section id. */
export const articleSectionHeadings: Record<
  string,
  Partial<Record<"context" | "problem" | "learned" | "takeaway", string>>
> = {
  "top-10-things-i-would-do-if-i-were-starting-again-as-a-junior-developer": {
    context: "The tutorial loop",
    problem: "Breadth felt like competence",
    learned: "What I changed",
    takeaway: "Finish small loops first",
  },
  "developing-scalable-solutions-for-ghanaian-users-as-a-secure-software-lifecycle-professional":
    {
      context: "Mobile money on uneven networks",
      problem: "Timeout looked like success",
      learned: "Status screens are product work",
      takeaway: "Design for the network you have",
    },
  "structuring-large-flutter-applications-using-clean-architecture": {
    context: "Twelve screens, one widget tree",
    problem: "Checkout broke on a UI tweak",
    learned: "Thin screens, clear repos",
    takeaway: "Add seams before the tree collapses",
  },
  "lessons-from-building-cloud-native-systems-with-nextjs-and-nestjs": {
    context: "Web up front, API behind",
    problem: "Email ran inside the handler",
    learned: "Fast answer, async work",
    takeaway: "Split the request path",
  },
  "why-technical-leadership-is-more-than-just-writing-code": {
    context: "Two squads, one integration",
    problem: "Done meant different things",
    learned: "Clarity before the sprint",
    takeaway: "Make success visible early",
  },
  "how-to-design-api-endpoints-that-stay-small-predictable-and-easy-to-test": {
    context: "Shipping through the handler",
    problem: "Six mocks for one branch",
    learned: "One job per route",
    takeaway: "Split before conditionals win",
  },
  "how-to-structure-a-react-frontend-so-ui-data-and-state-do-not-collide": {
    context: "Components grew faster than owners",
    problem: "Three fetches, one profile",
    learned: "Name the state owner",
    takeaway: "Fix ownership before polish",
  },
  "how-to-debug-a-production-incident-without-guessing": {
    context: "Checkout failing in one region",
    problem: "Rollback without proof",
    learned: "Observe, then change",
    takeaway: "Evidence beats speed",
  },
  "how-to-build-offline-first-mobile-features-for-unstable-networks": {
    context: "Field work on mobile only",
    problem: "Save vanished on a drop",
    learned: "Protect intent first",
    takeaway: "Show pending state honestly",
  },
  "how-to-refactor-a-monolith-into-clearer-modules-without-breaking-everything": {
    context: "Weekly releases, thin tests",
    problem: "Big-bang extraction pressure",
    learned: "Find the seam first",
    takeaway: "Ship while you split",
  },
  "how-to-set-up-a-practical-ci-pipeline-that-catches-regressions-early": {
    context: "Several merges a week",
    problem: "Red builds got ignored",
    learned: "Fast check first",
    takeaway: "CI should build trust",
  },
  "how-to-build-a-feature-team-feedback-loop-with-logging-metrics-and-alerts": {
    context: "Dashboard looked healthy",
    problem: "Starts counted, not finishes",
    learned: "Instrument the journey",
    takeaway: "Close the loop with product",
  },
  "how-to-document-engineering-decisions-so-the-team-can-move-faster": {
    context: "Same debate, three meetings",
    problem: "Reasoning lived in chat",
    learned: "Context beats conclusion",
    takeaway: "Write it once",
  },
  "how-to-use-ai-tools-in-a-software-workflow-without-losing-engineering-judgment": {
    context: "AI for the boring parts",
    problem: "Review trusted the diff",
    learned: "You still own proof",
    takeaway: "Verify like untrusted input",
  },
  "how-to-plan-and-run-a-technical-architecture-workshop-that-actually-helps": {
    context: "Bus versus direct HTTP",
    problem: "Opinions without an owner",
    learned: "Outcome before the room fills",
    takeaway: "Leave with one next step",
  },
};

export function applyNarrativeHeadings<
  T extends { id: string; heading: string },
>(slug: string, sections: T[]): T[] {
  const headings = articleSectionHeadings[slug];
  if (!headings) {
    return sections;
  }

  return sections.map((section) => {
    const key = section.id as keyof typeof headings;
    const narrative = headings[key];
    if (!narrative) {
      return section;
    }
    return { ...section, heading: narrative };
  });
}
