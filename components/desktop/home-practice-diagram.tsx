import { MeaningDiagram } from "./meaning-diagram";

const nodes = [
  { cx: 80, cy: 140, label: "Ghana" },
  { cx: 160, cy: 60, label: "Denmark" },
  { cx: 200, cy: 100, label: "Germany" },
  { cx: 240, cy: 160, label: "US" },
] as const;

export function HomePracticeDiagram() {
  return (
    <div className="desktop-meaning-panel">
      <MeaningDiagram label="Practice footprint" className="home-practice-diagram">
        <line
          x1={nodes[0].cx}
          y1={nodes[0].cy}
          x2={nodes[1].cx}
          y2={nodes[1].cy}
          stroke="currentColor"
          strokeWidth={1}
          vectorEffect="non-scaling-stroke"
          opacity={0.5}
        />
        <line
          x1={nodes[0].cx}
          y1={nodes[0].cy}
          x2={nodes[2].cx}
          y2={nodes[2].cy}
          stroke="currentColor"
          strokeWidth={1}
          vectorEffect="non-scaling-stroke"
          opacity={0.45}
        />
        <line
          x1={nodes[0].cx}
          y1={nodes[0].cy}
          x2={nodes[3].cx}
          y2={nodes[3].cy}
          stroke="currentColor"
          strokeWidth={1}
          vectorEffect="non-scaling-stroke"
          opacity={0.4}
        />
        {nodes.map((node) => (
          <g key={node.label}>
            <circle
              cx={node.cx}
              cy={node.cy}
              r={node.label === "Ghana" ? 10 : 7}
              fill="none"
              stroke="currentColor"
              strokeWidth={1}
              vectorEffect="non-scaling-stroke"
            />
            {node.label === "Ghana" ? (
              <circle
                cx={node.cx}
                cy={node.cy}
                r={3}
                fill="currentColor"
                stroke="none"
                opacity={0.6}
              />
            ) : null}
          </g>
        ))}
      </MeaningDiagram>
    </div>
  );
}
