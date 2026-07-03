import { MEDIA } from "@/lib/media";
import { cn } from "@/lib/utils";
import { AmbientMotion } from "./ambient-motion";

type AtmosphericMediaProps = {
  opacity?: number;
  variant?: "hero" | "contact";
  className?: string;
};

export function AtmosphericMedia({
  opacity = MEDIA.opacity.quiet,
  variant = "hero",
  className,
}: AtmosphericMediaProps) {
  return (
    <div
      className={cn("atmospheric-media", className)}
      style={{ "--atmospheric-opacity": opacity } as React.CSSProperties}
      aria-hidden="true"
    >
      <AmbientMotion variant={variant} className="atmospheric-media__motion" />
    </div>
  );
}
