import { getFeaturedProjects } from "@/lib/content/projects";
import { truncateWords } from "@/lib/text";
import { WorkFeature, EditorialLink } from "@/components/editorial";
import { MobilePanelShell } from "@/components/layout/mobile-panel-shell";

export function MobileWorkPanel() {
  const [project] = getFeaturedProjects();

  if (!project) return null;

  return (
    <MobilePanelShell>
      <div className="mobile-carousel-slide__body">
        <WorkFeature
          title={project.title}
          description={truncateWords(project.teaserDescription, 18)}
          metadata={project.category.slice(0, 2).join(" · ")}
          link={project.link}
          variant="teaser"
        />
        <EditorialLink href="/work">All work</EditorialLink>
      </div>
    </MobilePanelShell>
  );
}
