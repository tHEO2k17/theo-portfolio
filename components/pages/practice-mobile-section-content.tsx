"use client";

import { philosophyContent } from "@/lib/content/philosophy";
import {
  additionalSkillGroups,
  capabilityOverview,
  skillCategories,
} from "@/lib/content/capabilities";
import {
  leadershipPhilosophy,
  leadershipPhilosophyExtended,
  leadershipStrengths,
} from "@/lib/content/practice";
import {
  EditorialDisclosure,
  EditorialLink,
  PrincipleItem,
  TagLine,
} from "@/components/editorial";
import { ProseColumn } from "@/components/layout/prose-column";
import { typography } from "@/lib/typography";
import { cn } from "@/lib/utils";

export type PracticeSectionId =
  | "introduction"
  | "philosophy"
  | "capabilities"
  | "leadership";

type PracticeMobileSectionContentProps = {
  sectionId: PracticeSectionId;
};

export function PracticeMobileSectionContent({
  sectionId,
}: PracticeMobileSectionContentProps) {
  switch (sectionId) {
    case "introduction":
      return (
        <ProseColumn>
          <p className={cn(typography.body, "text-text-secondary")}>
            {philosophyContent.bio[0]}
          </p>
          {philosophyContent.bioExtended.length > 0 ? (
            <EditorialDisclosure
              label="Read more"
              sheetTitle="Introduction"
              className="mt-layout-6"
            >
              <div className="space-y-layout-4">
                {philosophyContent.bioExtended.map((paragraph) => (
                  <p
                    key={paragraph}
                    className={cn(typography.bodySm, "text-text-secondary")}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </EditorialDisclosure>
          ) : null}
        </ProseColumn>
      );

    case "philosophy":
      return (
        <>
          <ul className="space-y-layout-4 list-none">
            {philosophyContent.principles.map((principle) => (
              <PrincipleItem key={principle}>{principle}</PrincipleItem>
            ))}
          </ul>
          <div className="mt-layout-8">
            <EditorialLink href="/articles">Read writing</EditorialLink>
          </div>
        </>
      );

    case "capabilities":
      return (
        <>
          <ProseColumn>
            <ul className="space-y-layout-4 mb-layout-8 list-none">
              {capabilityOverview.map((line) => (
                <li
                  key={line}
                  className={cn(typography.body, "text-text-secondary")}
                >
                  {line}
                </li>
              ))}
            </ul>
          </ProseColumn>

          <EditorialDisclosure
            label="Full stack detail"
            sheetTitle="Capabilities"
            className="mb-layout-8"
          >
            <div className="space-y-layout-12">
              {skillCategories.map((category) => (
                <div key={category.name}>
                  <h3 className={cn(typography.h4, "text-foreground mb-layout-4")}>
                    {category.name}
                  </h3>
                  <TagLine items={category.skills} />
                </div>
              ))}
            </div>
            <div className="mt-layout-12 space-y-layout-12">
              {additionalSkillGroups
                .filter((group) => group.label !== "Soft Skills")
                .map((group) => (
                  <div key={group.label}>
                    <h3 className={cn(typography.h4, "text-foreground mb-layout-4")}>
                      {group.label}
                    </h3>
                    <ul className="space-y-layout-2 list-none">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className={cn(typography.bodySm, "text-text-secondary")}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
            </div>
          </EditorialDisclosure>

          {philosophyContent.currentFocus.length > 0 ? (
            <EditorialDisclosure label="Current focus" sheetTitle="Current focus">
              <ul className="flex flex-wrap gap-x-layout-8 gap-y-layout-4 list-none">
                {philosophyContent.currentFocus.map((focus) => (
                  <li
                    key={focus}
                    className={cn(typography.bodySm, "text-text-secondary")}
                  >
                    {focus}
                  </li>
                ))}
              </ul>
            </EditorialDisclosure>
          ) : null}
        </>
      );

    case "leadership":
      return (
        <div className="space-y-layout-8">
          <ul className="space-y-layout-8 list-none">
            {leadershipStrengths.map((strength) => (
              <li key={strength.title}>
                <h3 className={cn(typography.h4, "text-foreground mb-layout-2")}>
                  {strength.title}
                </h3>
                <p className={cn(typography.bodySm, "text-text-secondary")}>
                  {strength.description}
                </p>
              </li>
            ))}
          </ul>
          <p className={cn(typography.bodySm, "text-text-secondary")}>
            {leadershipPhilosophy[0]}
          </p>
          {leadershipPhilosophyExtended.length > 0 ? (
            <EditorialDisclosure
              label="Read more"
              sheetTitle="Leadership"
              className="mt-layout-6"
            >
              <div className="space-y-layout-4">
                {leadershipPhilosophyExtended.map((paragraph) => (
                  <p
                    key={paragraph}
                    className={cn(typography.bodySm, "text-text-secondary")}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </EditorialDisclosure>
          ) : null}
        </div>
      );

    default:
      return null;
  }
}
