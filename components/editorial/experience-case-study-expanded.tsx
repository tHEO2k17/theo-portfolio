import type { ExperienceEntry } from "@/lib/content/types";
import { getExperienceLocationLabels } from "@/lib/content/experience";
import { ProseColumn } from "@/components/layout/prose-column";
import { typography } from "@/lib/typography";
import { cn } from "@/lib/utils";
import { ExperienceSystemsAndTools } from "./experience-systems-and-tools";

type ExperienceCaseStudyExpandedProps = {
  entry: ExperienceEntry;
  className?: string;
};

function StorySection({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="experience-story__section">
      <h4 className={cn(typography.label, "text-text-tertiary mb-layout-2")}>
        {label}
      </h4>
      {children}
    </section>
  );
}

export function ExperienceCaseStudyExpanded({
  entry,
  className,
}: ExperienceCaseStudyExpandedProps) {
  const { story } = entry;

  return (
    <div className={cn("experience-story", className)}>
      <StorySection label="Context">
        <ProseColumn>
          <p className={cn(typography.bodySm, "text-text-secondary")}>
            {story.context}
          </p>
        </ProseColumn>
      </StorySection>

      <StorySection label="Problem">
        <ProseColumn>
          <p className={cn(typography.bodySm, "text-text-secondary")}>
            {story.problem}
          </p>
        </ProseColumn>
      </StorySection>

      <StorySection label="Responsibility">
        <ul className="list-none space-y-layout-2">
          {story.responsibility.map((item) => (
            <li
              key={item}
              className={cn(typography.bodySm, "text-text-secondary")}
            >
              {item}
            </li>
          ))}
        </ul>
      </StorySection>

      <StorySection label="Actions">
        <ul className="list-none space-y-layout-2">
          {story.actions.map((item) => (
            <li
              key={item}
              className={cn(typography.bodySm, "text-text-secondary")}
            >
              {item}
            </li>
          ))}
        </ul>
      </StorySection>

      <StorySection label="Results">
        <ProseColumn>
          <p className={cn(typography.bodySm, "text-text-secondary")}>
            {story.results}
          </p>
        </ProseColumn>
      </StorySection>

      <StorySection label="Lessons">
        <p className={cn(typography.bodySm, "text-text-secondary italic")}>
          {story.lessons}
        </p>
      </StorySection>

      <StorySection label="Systems & Tools">
        <ExperienceSystemsAndTools entry={entry} />
      </StorySection>

      <StorySection label="Locations">
        <ul className="list-none space-y-1">
          {getExperienceLocationLabels(entry).map((label) => (
            <li
              key={label}
              className={cn(typography.bodySm, "text-text-secondary")}
            >
              {label}
            </li>
          ))}
        </ul>
      </StorySection>
    </div>
  );
}
