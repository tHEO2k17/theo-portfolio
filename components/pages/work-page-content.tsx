import { getAllProjects } from "@/lib/content/projects";
import { Reveal } from "@/components/motion";
import { WorkFeature } from "@/components/editorial";
import { ProjectMeaningPanel } from "@/components/desktop";
import {
  PageBackLink,
  PageHeader,
  PageLayout,
} from "@/components/layout";
import { workPageHeader } from "@/lib/content/route-heroes";
import { WorkMobileStrip } from "./work-mobile-strip";

export function WorkPageContent() {
  const projects = getAllProjects();

  return (
    <PageLayout>
      <div className="col-span-content hidden md:block">
        <PageHeader
          eyebrow={workPageHeader.eyebrow}
          title={workPageHeader.title}
          description={workPageHeader.description}
        />
      </div>

      <div className="route-mobile-browse col-span-full md:hidden">
        <WorkMobileStrip />
      </div>

      <div className="col-span-full hidden md:block">
        {projects.map((project) => (
          <Reveal
            key={project.slug}
            className="page-entry"
          >
            <div className="desktop-split">
              <div className="desktop-split__content">
                <WorkFeature
                  title={project.title}
                  description={project.description}
                  detailDescription={project.detailDescription}
                  metadata={project.category.join(" · ")}
                  technologies={project.technologies}
                  link={project.link}
                  variant="full"
                />
              </div>
              <ProjectMeaningPanel slug={project.slug} />
            </div>
          </Reveal>
        ))}
      </div>

      <PageBackLink />
    </PageLayout>
  );
}
