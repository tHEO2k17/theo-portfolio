import { typography } from "@/lib/typography";
import { cn } from "@/lib/utils";

type ExperienceMapFallbackProps = {
  variant: "loading" | "missing-token" | "error";
};

const copy: Record<ExperienceMapFallbackProps["variant"], string> = {
  loading: "Loading map…",
  "missing-token": "Map unavailable. Add NEXT_PUBLIC_MAPBOX_TOKEN to enable it.",
  error: "Map could not be loaded. The chronological index below remains available.",
};

export function ExperienceMapFallback({
  variant,
}: ExperienceMapFallbackProps) {
  return (
    <div
      className="experience-map-fallback border border-border/30 p-layout-8 md:p-layout-12"
      role="status"
    >
      <p className={cn(typography.bodySm, "text-text-tertiary")}>
        {copy[variant]}
      </p>
    </div>
  );
}
