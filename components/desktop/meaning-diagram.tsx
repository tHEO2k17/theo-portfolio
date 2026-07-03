import { cn } from "@/lib/utils";

type MeaningDiagramProps = {
  label?: string;
  className?: string;
  children: React.ReactNode;
};

export function MeaningDiagram({ label, className, children }: MeaningDiagramProps) {
  return (
    <figure className={cn("meaning-diagram", className)} aria-hidden="true">
      <svg
        viewBox="0 0 320 200"
        className="meaning-diagram__svg"
        preserveAspectRatio="xMidYMid meet"
      >
        {children}
      </svg>
      {label ? <figcaption className="meaning-diagram__label">{label}</figcaption> : null}
    </figure>
  );
}

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1,
  vectorEffect: "non-scaling-stroke" as const,
};

export function AiPipelineDiagram() {
  const boxes = [
    { x: 24, label: "Input" },
    { x: 96, label: "Prompt" },
    { x: 168, label: "Tool" },
    { x: 240, label: "Output" },
  ];

  return (
    <>
      {boxes.map((box, i) => (
        <g key={box.label}>
          <rect x={box.x} y="80" width="56" height="40" rx="2" {...stroke} />
          {i < boxes.length - 1 ? (
            <path d={`M ${box.x + 56} 100 L ${boxes[i + 1].x} 100`} {...stroke} />
          ) : null}
        </g>
      ))}
    </>
  );
}

export function RemittanceFlowDiagram() {
  const nodes = [
    { x: 20, y: 90 },
    { x: 100, y: 70 },
    { x: 180, y: 90 },
    { x: 260, y: 70 },
  ];

  return (
    <>
      {nodes.map((node, i) => (
        <g key={i}>
          <rect x={node.x} y={node.y} width="48" height="36" rx="2" {...stroke} />
          {i < nodes.length - 1 ? (
            <path
              d={`M ${node.x + 48} ${node.y + 18} L ${nodes[i + 1].x} ${nodes[i + 1].y + 18}`}
              {...stroke}
            />
          ) : null}
        </g>
      ))}
      <circle cx="124" cy="70" r="4" fill="currentColor" stroke="none" opacity={0.6} />
      <circle cx="204" cy="90" r="4" fill="currentColor" stroke="none" opacity={0.6} />
    </>
  );
}

export function ActivityNetworkDiagram() {
  const nodes = [
    { cx: 80, cy: 60 },
    { cx: 160, cy: 40 },
    { cx: 240, cy: 60 },
    { cx: 120, cy: 120 },
    { cx: 200, cy: 120 },
    { cx: 160, cy: 160 },
  ];
  const edges = [
    [0, 1],
    [1, 2],
    [0, 3],
    [1, 3],
    [1, 4],
    [2, 4],
    [3, 5],
    [4, 5],
  ];

  return (
    <>
      {edges.map(([a, b]) => (
        <line
          key={`${a}-${b}`}
          x1={nodes[a].cx}
          y1={nodes[a].cy}
          x2={nodes[b].cx}
          y2={nodes[b].cy}
          {...stroke}
          opacity={0.5}
        />
      ))}
      {nodes.map((node, i) => (
        <circle key={i} cx={node.cx} cy={node.cy} r="12" {...stroke} />
      ))}
    </>
  );
}

export function ModuleFlowDiagram() {
  return (
    <>
      <rect x="40" y="60" width="72" height="48" rx="2" {...stroke} />
      <rect x="124" y="60" width="72" height="48" rx="2" {...stroke} opacity={0.8} />
      <rect x="208" y="60" width="72" height="48" rx="2" {...stroke} opacity={0.6} />
      <path d="M 112 84 L 124 84" {...stroke} />
      <path d="M 196 84 L 208 84" {...stroke} />
      <line x1="76" y1="108" x2="76" y2="140" {...stroke} opacity={0.4} />
      <line x1="160" y1="108" x2="160" y2="140" {...stroke} opacity={0.4} />
      <line x1="244" y1="108" x2="244" y2="140" {...stroke} opacity={0.4} />
    </>
  );
}
