import type { NavIconId } from "@/lib/navigation";
import { cn } from "@/lib/utils";

type NavIconProps = {
  id: NavIconId;
  className?: string;
};

const strokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.25,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function NavIcon({ id, className }: NavIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn("bottom-nav__icon", className)}
    >
      {id === "work" ? (
        <>
          <rect x="5" y="5" width="14" height="14" {...strokeProps} />
          <line x1="8.5" y1="12" x2="15.5" y2="12" {...strokeProps} />
        </>
      ) : null}
      {id === "practice" ? (
        <>
          <circle cx="12" cy="10" r="4" {...strokeProps} />
          <line x1="12" y1="14" x2="12" y2="19" {...strokeProps} />
        </>
      ) : null}
      {id === "experience" ? (
        <>
          <path d="M4.5 17c3-4.5 5.5-6.5 7.5-6.5s4.5 2 7.5 6.5" {...strokeProps} />
          <circle cx="12" cy="9.5" r="2.5" {...strokeProps} />
        </>
      ) : null}
      {id === "writing" ? (
        <>
          <line x1="6" y1="8" x2="18" y2="8" {...strokeProps} />
          <line x1="6" y1="12" x2="15.5" y2="12" {...strokeProps} />
          <line x1="6" y1="16" x2="13" y2="16" {...strokeProps} />
        </>
      ) : null}
      {id === "contact" ? (
        <>
          <rect x="5" y="7" width="14" height="11" {...strokeProps} />
          <path d="M5 7.75 12 13.25 19 7.75" {...strokeProps} />
        </>
      ) : null}
    </svg>
  );
}
