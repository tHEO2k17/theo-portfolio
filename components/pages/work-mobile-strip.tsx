"use client";

import { getAllProjects } from "@/lib/content/projects";
import { workRouteHero } from "@/lib/content/route-heroes";
import { truncateWords } from "@/lib/text";
import { WorkFeature } from "@/components/editorial";
import { MobileCarousel } from "@/components/layout/mobile-carousel";
import { MobileDetailSheet } from "@/components/layout/mobile-detail-sheet";
import { RouteMobileHeroSlide } from "@/components/layout/route-mobile-hero";
import { SnapPanel } from "@/components/layout/snap-panel";

export function WorkMobileStrip() {
  const projects = getAllProjects();
  const panelCount = projects.length + 1;

  return (
    <div className="route-mobile-strip route-mobile-strip--browse route-mobile-strip--work md:hidden">
      <MobileCarousel
        panelCount={panelCount}
        label="Work"
        variant="home"
        showIndicator={panelCount > 1}
      >
        <SnapPanel
          id="work-hero"
          aria-label={workRouteHero.label}
          className="snap-panel--route-hero"
        >
          <RouteMobileHeroSlide
            label={workRouteHero.label}
            title={workRouteHero.title}
            descriptor={workRouteHero.descriptor}
            description={workRouteHero.description}
          />
        </SnapPanel>

        {projects.map((project) => (
          <SnapPanel key={project.slug} aria-label={project.title} className="snap-panel--route-content">
            <div className="route-snap-card route-snap-card--browse mobile-carousel-slide__body">
              <WorkFeature
                title={project.title}
                description={truncateWords(project.teaserDescription, 18)}
                metadata={project.category.slice(0, 2).join(" · ")}
                link={project.link}
                variant="teaser"
              />
              <MobileDetailSheet label="Read details" title={project.title}>
                <WorkFeature
                  title={project.title}
                  description={project.description}
                  detailDescription={project.detailDescription}
                  metadata={project.category.join(" · ")}
                  technologies={project.technologies}
                  link={project.link}
                  variant="full"
                  inlineExpanded
                />
              </MobileDetailSheet>
            </div>
          </SnapPanel>
        ))}
      </MobileCarousel>
    </div>
  );
}
