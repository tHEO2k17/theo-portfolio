"use client";

import { philosophyContent } from "@/lib/content/philosophy";
import { capabilityOverview } from "@/lib/content/capabilities";
import { leadershipPhilosophy } from "@/lib/content/practice";
import { truncateWords } from "@/lib/text";
import { practiceRouteHero } from "@/lib/content/route-heroes";
import { MobileCarousel } from "@/components/layout/mobile-carousel";
import { MobileDetailSheet } from "@/components/layout/mobile-detail-sheet";
import { RouteMobileHeroSlide } from "@/components/layout/route-mobile-hero";
import { SnapPanel } from "@/components/layout/snap-panel";
import { typography } from "@/lib/typography";
import { cn } from "@/lib/utils";
import {
  PracticeMobileSectionContent,
  type PracticeSectionId,
} from "./practice-mobile-section-content";

const practiceCards: Array<{
  id: PracticeSectionId;
  label: string;
  excerpt: string;
}> = [
  {
    id: "introduction",
    label: "Introduction",
    excerpt: truncateWords(philosophyContent.bio[0], 18),
  },
  {
    id: "philosophy",
    label: "Philosophy",
    excerpt: truncateWords(philosophyContent.principles.join(". "), 18),
  },
  {
    id: "capabilities",
    label: "Capabilities",
    excerpt: truncateWords(capabilityOverview.join(" "), 18),
  },
  {
    id: "leadership",
    label: "Leadership",
    excerpt: truncateWords(leadershipPhilosophy[0], 18),
  },
];

export function PracticeMobileStrip() {
  const panelCount = practiceCards.length + 1;

  return (
    <div className="route-mobile-strip route-mobile-strip--browse route-mobile-strip--practice md:hidden">
      <MobileCarousel
        panelCount={panelCount}
        label="Practice"
        variant="home"
      >
        <SnapPanel
          id="practice-hero"
          aria-label={practiceRouteHero.label}
          className="snap-panel--route-hero"
        >
          <RouteMobileHeroSlide
            label={practiceRouteHero.label}
            title={practiceRouteHero.title}
            descriptor={practiceRouteHero.descriptor}
            description={practiceRouteHero.description}
          />
        </SnapPanel>

        {practiceCards.map((card) => (
          <SnapPanel key={card.id} aria-label={card.label} className="snap-panel--route-content">
            <div className="route-snap-card route-snap-card--browse mobile-carousel-slide__body">
              <p className={cn(typography.label, "text-text-tertiary")}>
                {card.label}
              </p>
              <p className={cn(typography.body, "text-text-secondary line-clamp-3")}>
                {card.excerpt}
              </p>
              <MobileDetailSheet label="Read more" title={card.label}>
                <PracticeMobileSectionContent sectionId={card.id} />
              </MobileDetailSheet>
            </div>
          </SnapPanel>
        ))}
      </MobileCarousel>
    </div>
  );
}
