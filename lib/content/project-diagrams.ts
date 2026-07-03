export type ProjectDiagramVariant =
  | "ai-pipeline"
  | "remittance-flow"
  | "activity-network"
  | "module-flow";

export type ProjectDiagram = {
  variant: ProjectDiagramVariant;
  label: string;
};

const slugDiagrams: Record<string, ProjectDiagram> = {
  tekora: {
    variant: "ai-pipeline",
    label: "Input → Prompt → Tool → Output",
  },
  "borga-money": {
    variant: "remittance-flow",
    label: "Sender → FX → Wallet → Recipient",
  },
  stride: {
    variant: "activity-network",
    label: "Connected activity nodes",
  },
};

const defaultDiagram: ProjectDiagram = {
  variant: "module-flow",
  label: "Module flow",
};

export function getProjectDiagram(slug: string): ProjectDiagram {
  return slugDiagrams[slug] ?? defaultDiagram;
}
