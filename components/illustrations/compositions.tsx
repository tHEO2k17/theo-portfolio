import { SvgIllustration } from "./illustration-surface";

/** Diagonal truss lines — engineering scaffolding. */
export function ScaffoldingIllustration() {
  return (
    <SvgIllustration viewBox="0 0 480 360">
      <line x1="0" y1="360" x2="480" y2="0" className="illustration-stroke" />
      <line x1="80" y1="360" x2="480" y2="40" className="illustration-stroke" />
      <line x1="0" y1="280" x2="400" y2="0" className="illustration-stroke" />
      <line x1="240" y1="360" x2="480" y2="120" className="illustration-stroke" />
      <line x1="0" y1="200" x2="320" y2="200" className="illustration-stroke" />
      <line x1="160" y1="360" x2="160" y2="120" className="illustration-stroke" />
    </SvgIllustration>
  );
}

/** Measured grid — repetition and cadence. */
export function CadenceIllustration() {
  return (
    <SvgIllustration viewBox="0 0 320 320">
      <defs>
        <pattern
          id="illustration-cadence"
          width="32"
          height="32"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 32 0 L 0 0 0 32"
            className="illustration-stroke"
            vectorEffect="non-scaling-stroke"
          />
        </pattern>
      </defs>
      <rect width="320" height="320" fill="url(#illustration-cadence)" />
      <rect
        x="64"
        y="64"
        width="192"
        height="192"
        className="illustration-stroke"
      />
      <line x1="160" y1="64" x2="160" y2="256" className="illustration-stroke" />
      <line x1="64" y1="160" x2="256" y2="160" className="illustration-stroke" />
    </SvgIllustration>
  );
}

/** Woven rhythm — parallel bands with stepped breaks. Craft geometry, not symbols. */
export function RhythmIllustration() {
  return (
    <SvgIllustration viewBox="0 0 320 280">
      <line x1="32" y1="48" x2="288" y2="48" className="illustration-stroke" />
      <line x1="32" y1="88" x2="288" y2="88" className="illustration-stroke" />
      <line x1="32" y1="128" x2="288" y2="128" className="illustration-stroke" />
      <line x1="32" y1="168" x2="288" y2="168" className="illustration-stroke" />
      <line x1="32" y1="208" x2="288" y2="208" className="illustration-stroke" />
      <line x1="32" y1="248" x2="288" y2="248" className="illustration-stroke" />
      <line x1="80" y1="32" x2="80" y2="248" className="illustration-stroke" />
      <line x1="160" y1="32" x2="160" y2="248" className="illustration-stroke" />
      <line x1="240" y1="32" x2="240" y2="248" className="illustration-stroke" />
      <path d="M 32 48 L 32 88 L 72 88" className="illustration-stroke" />
      <path d="M 288 208 L 288 168 L 248 168" className="illustration-stroke" />
      <path d="M 160 128 L 200 128 L 200 168" className="illustration-stroke" />
    </SvgIllustration>
  );
}

/** Systems plan — architectural seams and bounded rooms. */
export function StructureIllustration() {
  return (
    <SvgIllustration viewBox="0 0 360 280">
      <rect x="24" y="24" width="312" height="232" className="illustration-stroke" />
      <line x1="24" y1="120" x2="336" y2="120" className="illustration-stroke" />
      <line x1="180" y1="24" x2="180" y2="256" className="illustration-stroke" />
      <rect x="48" y="48" width="96" height="48" className="illustration-stroke" />
      <rect x="204" y="144" width="108" height="88" className="illustration-stroke" />
      <line x1="48" y1="200" x2="168" y2="200" className="illustration-stroke" />
      <line x1="300" y1="48" x2="300" y2="72" className="illustration-stroke" />
    </SvgIllustration>
  );
}

/** Global coordinates — meridians from a home point. */
export function CoordinatesIllustration() {
  return (
    <SvgIllustration viewBox="0 0 240 240">
      <circle cx="120" cy="120" r="96" className="illustration-stroke" />
      <circle cx="120" cy="120" r="64" className="illustration-stroke" />
      <line x1="120" y1="24" x2="120" y2="216" className="illustration-stroke" />
      <line x1="24" y1="120" x2="216" y2="120" className="illustration-stroke" />
      <line x1="52" y1="52" x2="188" y2="188" className="illustration-stroke" />
      <line x1="188" y1="52" x2="52" y2="188" className="illustration-stroke" />
      <circle cx="120" cy="120" r="4" className="illustration-stroke" />
    </SvgIllustration>
  );
}

/** Strata and flow — water layers, pipes, platform infrastructure. */
export function InfrastructureIllustration() {
  return (
    <SvgIllustration viewBox="0 0 360 240">
      <line x1="24" y1="56" x2="336" y2="56" className="illustration-stroke" />
      <line x1="24" y1="112" x2="336" y2="112" className="illustration-stroke" />
      <line x1="24" y1="168" x2="336" y2="168" className="illustration-stroke" />
      <line x1="108" y1="24" x2="108" y2="216" className="illustration-stroke" />
      <line x1="252" y1="40" x2="252" y2="216" className="illustration-stroke" />
      <line x1="108" y1="112" x2="252" y2="112" className="illustration-stroke" />
      <circle cx="108" cy="112" r="4" className="illustration-stroke" />
      <circle cx="252" cy="112" r="4" className="illustration-stroke" />
      <path d="M 180 56 L 180 88 L 212 88" className="illustration-stroke" />
      <path d="M 180 168 L 180 136 L 148 136" className="illustration-stroke" />
    </SvgIllustration>
  );
}

/** Composable modules — bounded units in sequence. */
export function ModulesIllustration() {
  return (
    <SvgIllustration viewBox="0 0 400 120">
      <rect x="0" y="20" width="120" height="80" className="illustration-stroke" />
      <rect x="140" y="0" width="100" height="100" className="illustration-stroke" />
      <rect x="260" y="30" width="140" height="70" className="illustration-stroke" />
      <line x1="0" y1="60" x2="120" y2="60" className="illustration-stroke" />
      <line x1="140" y1="50" x2="240" y2="50" className="illustration-stroke" />
      <line x1="260" y1="65" x2="400" y2="65" className="illustration-stroke" />
    </SvgIllustration>
  );
}
