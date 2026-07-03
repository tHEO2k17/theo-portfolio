import { cn } from "@/lib/utils";
import type { IllustrationOpacity, IllustrationPosition } from "@/lib/illustrations";

const opacityClass: Record<IllustrationOpacity, string> = {
  whisper: "illustration-opacity-whisper",
  quiet: "illustration-opacity-quiet",
  subtle: "illustration-opacity-subtle",
};

const positionClass: Record<IllustrationPosition, string> = {
  "top-right": "illustration-pos-top-right",
  "center-right": "illustration-pos-center-right",
  "bottom-right": "illustration-pos-bottom-right",
  "top-left": "illustration-pos-top-left",
  "bottom-left": "illustration-pos-bottom-left",
};

type IllustrationSurfaceProps = {
  children: React.ReactNode;
  opacity?: IllustrationOpacity;
  position?: IllustrationPosition;
  className?: string;
};

export function IllustrationSurface({
  children,
  opacity = "quiet",
  position = "center-right",
  className,
}: IllustrationSurfaceProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "illustration-surface",
        opacityClass[opacity],
        positionClass[position],
        className,
      )}
    >
      {children}
    </div>
  );
}

type SvgIllustrationProps = {
  className?: string;
  viewBox?: string;
  children: React.ReactNode;
};

export function SvgIllustration({
  className,
  viewBox = "0 0 400 400",
  children,
}: SvgIllustrationProps) {
  return (
    <svg
      viewBox={viewBox}
      className={cn("illustration-svg", className)}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
      {children}
    </svg>
  );
}
