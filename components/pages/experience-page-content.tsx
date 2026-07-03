import { experiences } from "@/lib/content/experience";
import { getExperienceWorkLocations } from "@/lib/content/experience-map";
import { Reveal } from "@/components/motion";
import {
  ExperienceIndexEntry,
} from "@/components/editorial";
import { ExperienceMapLoader } from "@/components/experience-map";
import {
  PageBackLink,
  PageHeader,
  PageLayout,
  PageSection,
  RouteMobileHero,
} from "@/components/layout";
import { experienceRouteHero, experiencePageHeader } from "@/lib/content/route-heroes";

const workLocations = getExperienceWorkLocations();

export function ExperiencePageContent() {
  return (
    <PageLayout>
      <RouteMobileHero
        className="col-span-content"
        label={experienceRouteHero.label}
        title={experienceRouteHero.title}
        descriptor={experienceRouteHero.descriptor}
        description={experienceRouteHero.description}
      />

      <div className="col-span-content hidden md:block">
        <PageHeader
          eyebrow={experiencePageHeader.eyebrow}
          title={experiencePageHeader.title}
          description={experiencePageHeader.description}
        />
      </div>

      <div className="col-span-full experience-page-map hidden md:block">
        <Reveal>
          <ExperienceMapLoader locations={workLocations} />
        </Reveal>
      </div>

      <div className="col-span-content mobile-read-surface">
        <PageSection label="Chronological Index">
          <ul className="list-none">
            {experiences.map((entry) => (
              <Reveal
                key={entry.id}
                as="li"
                className="page-entry"
              >
                <ExperienceIndexEntry entry={entry} />
              </Reveal>
            ))}
          </ul>
        </PageSection>
      </div>

      <PageBackLink />
    </PageLayout>
  );
}
