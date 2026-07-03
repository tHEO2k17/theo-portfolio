"use client";

import type { ExperienceMapEngagement } from "@/lib/content/types";
import { getMapPanelExpanded } from "@/lib/content/experience";
import type { ExperienceWorkLocation } from "@/lib/content/experience-map";
import { EditorialDisclosure } from "@/components/editorial";
import { typography } from "@/lib/typography";
import { cn } from "@/lib/utils";

type ExperienceLocationPanelProps = {
  location: ExperienceWorkLocation | null;
  className?: string;
};

function EngagementBlock({ engagement }: { engagement: ExperienceMapEngagement }) {
  const { entry, locationLabel, relatedNote } = engagement;
  const mapStory = getMapPanelExpanded(entry);

  return (
    <article className="experience-map-engagement">
      <p className={cn(typography.body, "text-foreground mb-1")}>
        {entry.company}
      </p>
      <p className={cn(typography.role, "text-accent-warm mb-1")}>
        {entry.title}
      </p>
      <p className={cn(typography.bodySm, "text-text-secondary mb-layout-3")}>
        {locationLabel}
      </p>
      {relatedNote ? (
        <p className={cn(typography.caption, "text-text-tertiary mb-layout-3")}>
          {relatedNote}
        </p>
      ) : null}
      <p className={cn(typography.bodySm, "text-text-secondary line-clamp-3")}>
        {entry.summary}
      </p>

      <EditorialDisclosure label="Read more" className="mt-layout-3">
        <div className="space-y-layout-3">
          <div>
            <p className={cn(typography.caption, "text-text-tertiary mb-1")}>
              Context
            </p>
            <p className={cn(typography.bodySm, "text-text-secondary")}>
              {mapStory.context}
            </p>
          </div>
          <div>
            <p className={cn(typography.caption, "text-text-tertiary mb-1")}>
              Problem
            </p>
            <p className={cn(typography.bodySm, "text-text-secondary")}>
              {mapStory.problem}
            </p>
          </div>
          <div>
            <p className={cn(typography.caption, "text-text-tertiary mb-1")}>
              Result
            </p>
            <p className={cn(typography.bodySm, "text-text-secondary")}>
              {mapStory.result}
            </p>
          </div>
        </div>
      </EditorialDisclosure>
    </article>
  );
}

function ExperienceEngagementList({
  location,
}: {
  location: ExperienceWorkLocation;
}) {
  const total = location.engagements.length;

  if (total === 1) {
    return <EngagementBlock engagement={location.engagements[0]} />;
  }

  return (
    <div className="experience-map-engagement-list">
      {location.engagements.map((engagement, index) => (
        <div
          key={`${engagement.entry.id}-${engagement.locationLabel}`}
          className="experience-map-engagement-list__item"
        >
          <p className={cn(typography.caption, "text-text-tertiary mb-layout-3")}>
            {index + 1} of {total}
          </p>
          <EngagementBlock engagement={engagement} />
        </div>
      ))}
    </div>
  );
}

export function ExperienceLocationPanel({
  location,
  className,
}: ExperienceLocationPanelProps) {
  if (!location) {
    const regions = [
      { name: "Ghana", detail: "Fintech and platform engineering." },
      { name: "Denmark", detail: "Industrial IoT and cross-border product delivery." },
      { name: "Germany", detail: "Enterprise web portals and insurance systems." },
      { name: "United States", detail: "Remote leadership and distributed teams." },
    ];

    return (
      <div className={cn("experience-map-panel experience-map-panel--empty", className)}>
        <p className={cn(typography.label, "text-text-tertiary mb-layout-4")}>
          Places
        </p>
        <p className={cn(typography.bodySm, "text-text-secondary mb-layout-6")}>
          Select a marker to view role and period.
        </p>
        <ul className="space-y-layout-4">
          {regions.map((region) => (
            <li key={region.name}>
              <p className={cn(typography.body, "text-foreground mb-1")}>
                {region.name}
              </p>
              <p className={cn(typography.bodySm, "text-text-secondary")}>
                {region.detail}
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "experience-map-panel experience-map-panel--active h-full",
        className,
      )}
      key={location.id}
    >
      <div className="experience-map-panel__header">
        <p className={cn(typography.label, "text-text-tertiary")}>
          {location.label}
        </p>
        {location.isRemote ? (
          <p className={cn(typography.caption, "text-text-tertiary")}>
            Remote
          </p>
        ) : null}
      </div>

      <ExperienceEngagementList location={location} />
    </div>
  );
}
