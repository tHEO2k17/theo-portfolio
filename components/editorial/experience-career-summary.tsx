import { experienceCareerSummary } from "@/lib/content/experience";
import { ProseColumn } from "@/components/layout/prose-column";
import { typography } from "@/lib/typography";
import { cn } from "@/lib/utils";

export function ExperienceCareerSummary() {
  return (
    <section
      className="experience-career-summary border-t border-border/30 pt-layout-12"
      aria-labelledby="experience-career-summary-heading"
    >
      <h2
        id="experience-career-summary-heading"
        className={cn(typography.label, "text-text-tertiary mb-layout-6")}
      >
        Across these roles
      </h2>

      <ProseColumn>
        <div className="space-y-layout-6">
          <div className="space-y-1">
            {experienceCareerSummary.domains.map((line) => (
              <p
                key={line}
                className={cn(typography.bodySm, "text-text-secondary")}
              >
                {line}
              </p>
            ))}
          </div>

          <div className="space-y-1">
            {experienceCareerSummary.regions.map((line) => (
              <p
                key={line}
                className={cn(typography.bodySm, "text-text-secondary")}
              >
                {line}
              </p>
            ))}
          </div>

          <p className={cn(typography.body, "text-foreground")}>
            {experienceCareerSummary.closing}
          </p>
        </div>
      </ProseColumn>
    </section>
  );
}
