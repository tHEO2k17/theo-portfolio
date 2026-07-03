"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { MobileCarousel } from "@/components/layout/mobile-carousel";
import { SnapPanel } from "@/components/layout/snap-panel";
import { getHomepageWritingTeaser } from "@/lib/articles";
import { getFeaturedProjects } from "@/lib/content/projects";
import { typography } from "@/lib/typography";
import { cn } from "@/lib/utils";
import { MobileContactPanel } from "./mobile/mobile-contact-panel";
import { MobileExperiencePanel } from "./mobile/mobile-experience-panel";
import { MobileHeroPanel } from "./mobile/mobile-hero-panel";
import { MobilePhilosophyPanel } from "./mobile/mobile-philosophy-panel";
import { MobileWorkPanel } from "./mobile/mobile-work-panel";
import { MobileWritingPanel } from "./mobile/mobile-writing-panel";

type HomePanel = {
  id: string;
  label: string;
  content: ReactNode;
};

function getHomePanels(): HomePanel[] {
  const panels: HomePanel[] = [
    { id: "hero", label: "Hero", content: <MobileHeroPanel /> },
    {
      id: "philosophy",
      label: "Philosophy",
      content: <MobilePhilosophyPanel />,
    },
  ];

  if (getFeaturedProjects().length > 0) {
    panels.push({
      id: "work",
      label: "Work",
      content: <MobileWorkPanel />,
    });
  }

  panels.push({
    id: "experience",
    label: "Experience",
    content: <MobileExperiencePanel />,
  });

  if (getHomepageWritingTeaser().articles.length > 0) {
    panels.push({
      id: "writing",
      label: "Writing",
      content: <MobileWritingPanel />,
    });
  }

  panels.push({
    id: "contact",
    label: "Contact",
    content: <MobileContactPanel />,
  });

  return panels;
}

export function HomeMobileCarousel() {
  const panels = getHomePanels();

  return (
    <>
      <div className="home-mobile-carousel md:hidden">
        <MobileCarousel
          panelCount={panels.length}
          label="Home sections"
          variant="home"
        >
          {panels.map((panel) => (
            <SnapPanel
              key={panel.id}
              id={panel.id}
              aria-label={panel.label}
              className={
                panel.id === "hero" ? "snap-panel--cover" : "snap-panel--teaser"
              }
            >
              {panel.content}
            </SnapPanel>
          ))}
        </MobileCarousel>
      </div>

      <p className="home-mobile-carousel__fallback md:hidden">
        <Link
          href="#home-vertical-fallback"
          className={cn(typography.bodySm, "text-text-tertiary underline-offset-4 hover:underline")}
        >
          View all sections
        </Link>
      </p>
    </>
  );
}
