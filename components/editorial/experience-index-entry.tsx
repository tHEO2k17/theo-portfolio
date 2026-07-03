"use client";

import type { ExperienceEntry } from "@/lib/content/types";
import { truncateWords } from "@/lib/content/experience-helpers";
import { ProseColumn } from "@/components/layout/prose-column";
import { typography } from "@/lib/typography";
import { cn } from "@/lib/utils";
import { EditorialDisclosure } from "./editorial-disclosure";
import { ExperienceCaseStudyExpanded } from "./experience-case-study-expanded";

type ExperienceIndexEntryProps = {
  entry: ExperienceEntry;
  className?: string;
};

export function ExperienceIndexEntry({
  entry,
  className,
}: ExperienceIndexEntryProps) {
  return (
    <article className={className}>
      <h3 className={cn(typography.h3, "text-foreground mb-1")}>
        {entry.company}
      </h3>
      <p className={cn(typography.role, "text-accent-warm mb-1")}>
        {entry.title}
      </p>
      <p className={cn("editorial-meta mb-layout-3")}>{entry.dates}</p>

      <ul className="list-none space-y-1 mb-layout-4">
        {entry.locationLabels.map((label) => (
          <li
            key={label}
            className={cn(typography.bodySm, "text-text-tertiary")}
          >
            {label}
          </li>
        ))}
      </ul>

      {entry.organizationNote ? (
        <p className={cn(typography.caption, "text-text-tertiary mb-layout-4")}>
          {entry.organizationNote}
        </p>
      ) : null}

      <ProseColumn>
        <p className={cn(typography.bodySm, "text-text-secondary mb-layout-4")}>
          {truncateWords(entry.story.context, 28)}
        </p>
      </ProseColumn>

      <EditorialDisclosure label="Read more" sheetTitle={entry.company}>
        <ExperienceCaseStudyExpanded entry={entry} className="mt-layout-4" />
      </EditorialDisclosure>
    </article>
  );
}
