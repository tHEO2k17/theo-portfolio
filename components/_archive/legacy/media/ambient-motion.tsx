import { cn } from "@/lib/utils";

type AmbientMotionProps = {
  className?: string;
  variant?: "hero" | "contact";
};

export function AmbientMotion({
  className,
  variant = "hero",
}: AmbientMotionProps) {
  return (
    <div
      className={cn(
        "ambient-motion pointer-events-none absolute inset-0 overflow-hidden",
        variant === "contact" && "ambient-motion--contact",
        className,
      )}
      aria-hidden="true"
    >
      <div className="ambient-motion__layer ambient-motion__layer--one" />
      <div className="ambient-motion__layer ambient-motion__layer--two" />
      <svg
        className="ambient-motion__geometry"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="ambient-grid"
            width="64"
            height="64"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 64 0 L 0 0 0 64"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              opacity="0.15"
            />
          </pattern>
        </defs>
        <rect width="1200" height="800" fill="url(#ambient-grid)" />
        <line
          x1="0"
          y1="400"
          x2="1200"
          y2="400"
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.08"
        />
        <line
          x1="600"
          y1="0"
          x2="600"
          y2="800"
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.08"
        />
        <circle
          cx="900"
          cy="200"
          r="120"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.75"
          opacity="0.1"
          className="ambient-motion__orbit"
        />
      </svg>
      <div className="ambient-motion__grain" />
    </div>
  );
}
