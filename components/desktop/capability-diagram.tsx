import { MeaningDiagram } from "./meaning-diagram";

const groups = [
  { label: "Engineering", y: 24 },
  { label: "Product", y: 88 },
  { label: "Leadership", y: 152 },
] as const;

export function CapabilityDiagram() {
  return (
    <div className="desktop-meaning-panel">
      <MeaningDiagram label="Capability system" className="capability-diagram">
        {groups.map((group) => (
          <g key={group.label}>
            <rect x="24" y={group.y} width="272" height="48" rx="2" fill="none" stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke" />
            <line x1="48" y1={group.y + 24} x2="120" y2={group.y + 24} stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke" opacity={0.5} />
            <line x1="140" y1={group.y + 16} x2="260" y2={group.y + 16} stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke" opacity={0.35} />
            <line x1="140" y1={group.y + 32} x2="220" y2={group.y + 32} stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke" opacity={0.35} />
          </g>
        ))}
        <line x1="160" y1="72" x2="160" y2="88" stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke" opacity={0.4} />
        <line x1="160" y1="136" x2="160" y2="152" stroke="currentColor" strokeWidth="1" vectorEffect="non-scaling-stroke" opacity={0.4} />
      </MeaningDiagram>
    </div>
  );
}
