import {
  getProjectDiagram,
  type ProjectDiagramVariant,
} from "@/lib/content/project-diagrams";
import {
  ActivityNetworkDiagram,
  AiPipelineDiagram,
  MeaningDiagram,
  ModuleFlowDiagram,
  RemittanceFlowDiagram,
} from "./meaning-diagram";

type ProjectMeaningPanelProps = {
  slug: string;
};

function DiagramArt({ variant }: { variant: ProjectDiagramVariant }) {
  switch (variant) {
    case "ai-pipeline":
      return <AiPipelineDiagram />;
    case "remittance-flow":
      return <RemittanceFlowDiagram />;
    case "activity-network":
      return <ActivityNetworkDiagram />;
    case "module-flow":
    default:
      return <ModuleFlowDiagram />;
  }
}

export function ProjectMeaningPanel({ slug }: ProjectMeaningPanelProps) {
  const diagram = getProjectDiagram(slug);

  return (
    <div className="desktop-meaning-panel">
      <MeaningDiagram label={diagram.label}>
        <DiagramArt variant={diagram.variant} />
      </MeaningDiagram>
    </div>
  );
}
