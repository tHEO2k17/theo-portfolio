import type { ArticleDiagramVariant } from "@/lib/media";

function escapeLabel(label: string) {
  return label.replace(/"/g, '\\"');
}

function nodeRef(index: number, label: string) {
  return `n${index}["${escapeLabel(label)}"]`;
}

function chainHorizontal(nodes: string[]) {
  const items = nodes.slice(0, 6);
  if (items.length < 2) return "";

  const lines = ["flowchart LR"];
  for (let index = 0; index < items.length - 1; index += 1) {
    lines.push(`  ${nodeRef(index, items[index])} --> ${nodeRef(index + 1, items[index + 1])}`);
  }

  return lines.join("\n");
}

function chainVertical(nodes: string[]) {
  const items = nodes.slice(0, 5);
  if (items.length < 2) return "";

  const lines = ["flowchart TB"];
  for (let index = 0; index < items.length - 1; index += 1) {
    lines.push(`  ${nodeRef(index, items[index])} --> ${nodeRef(index + 1, items[index + 1])}`);
  }

  return lines.join("\n");
}

function stateFlow(nodes: string[]) {
  const items = nodes.slice(0, 6);
  if (items.length < 2) return "";

  const stateName = (label: string) => label.replace(/[^\w\s-]/g, "").trim() || "State";

  const lines = ["stateDiagram-v2", "    direction LR"];
  for (let index = 0; index < items.length - 1; index += 1) {
    lines.push(`    ${stateName(items[index])} --> ${stateName(items[index + 1])}`);
  }

  return lines.join("\n");
}

function networkDiagram(nodes: string[]) {
  return stateFlow(nodes);
}

export function buildArticleDiagramMermaid(
  variant: ArticleDiagramVariant,
  nodes: string[],
): string {
  if (nodes.length < 2) {
    return "";
  }

  switch (variant) {
    case "layers":
      return chainVertical(nodes);
    case "network":
      return networkDiagram(nodes);
    case "pipeline":
    case "workshop":
    case "flow-horizontal":
    default:
      return chainHorizontal(nodes);
  }
}
