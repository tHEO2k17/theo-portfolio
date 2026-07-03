import { getFeaturedProjects } from "@/lib/content/projects";
import { Reveal } from "@/components/motion";
import { SectionIntro, WorkFeature } from "@/components/editorial";
import {
  LayoutGrid,
  PageContainer,
  Section,
} from "@/components/layout";

export function HomeWorkTeaserSection() {
  const projects = getFeaturedProjects();

  return (
    <Section
      id="work"
      bordered
      aria-labelledby="work-heading"
      reveal
    >
      <PageContainer>
        <SectionIntro
          label="Work"
          labelId="work-heading"
          action={{ href: "/work", label: "All work" }}
          className="mb-layout-12"
        />

        <LayoutGrid as="ul">
          {projects.map((project) => (
            <Reveal
              key={project.slug}
              as="li"
              className="col-span-prose mb-layout-16"
            >
              <WorkFeature
                title={project.title}
                description={project.teaserDescription}
                metadata={project.category.slice(0, 2).join(" · ")}
                link={project.link}
                variant="teaser"
              />
            </Reveal>
          ))}
        </LayoutGrid>
      </PageContainer>
    </Section>
  );
}
