import type { ReactNode } from "react";
import type { NavIconId } from "@/lib/navigation";
import { cn } from "@/lib/utils";

type NavIconProps = {
  id: NavIconId;
  className?: string;
};

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.25,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Layered modules — Work */
function WorkIcon() {
  return (
    <>
      <rect x="5.5" y="5" width="11" height="7.5" rx="0.25" {...stroke} />
      <rect x="7.5" y="9.5" width="11" height="7.5" rx="0.25" {...stroke} />
      <line x1="9" y1="12.25" x2="17" y2="12.25" {...stroke} />
    </>
  );
}

/** Structural frame — Practice */
function PracticeIcon() {
  return (
    <>
      <path d="M12 5.25 18.75 18.75H5.25Z" {...stroke} />
      <line x1="12" y1="10.5" x2="12" y2="15.25" {...stroke} />
      <line x1="8.75" y1="15.25" x2="15.25" y2="15.25" {...stroke} />
    </>
  );
}

/** Coordinates / places — Experience */
function ExperienceIcon() {
  return (
    <>
      <circle cx="12" cy="12" r="6.75" {...stroke} />
      <line x1="12" y1="5.25" x2="12" y2="18.75" {...stroke} />
      <line x1="5.25" y1="12" x2="18.75" y2="12" {...stroke} />
      <circle cx="12" cy="12" r="1.25" {...stroke} />
    </>
  );
}

/** Editorial text column — Writing */
function WritingIcon() {
  return (
    <>
      <line x1="7.25" y1="6" x2="7.25" y2="18" {...stroke} />
      <line x1="10.25" y1="8" x2="18" y2="8" {...stroke} />
      <line x1="10.25" y1="12" x2="16.25" y2="12" {...stroke} />
      <line x1="10.25" y1="16" x2="17.25" y2="16" {...stroke} />
    </>
  );
}

/** Envelope — Contact */
function ContactIcon() {
  return (
    <>
      <rect x="5" y="7.5" width="14" height="10" rx="0.25" {...stroke} />
      <path d="M5 8.5 12 13.75 19 8.5" {...stroke} />
    </>
  );
}

const icons: Record<NavIconId, () => ReactNode> = {
  work: WorkIcon,
  practice: PracticeIcon,
  experience: ExperienceIcon,
  writing: WritingIcon,
  contact: ContactIcon,
};

export function NavIcon({ id, className }: NavIconProps) {
  const Icon = icons[id];

  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className={cn("bottom-nav__icon", className)}
    >
      <Icon />
    </svg>
  );
}
