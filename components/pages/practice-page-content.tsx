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
import { typography } from "@/lib/typography";
import { cn } from "@/lib/utils";
import {
  EditorialDisclosure,
  EditorialLink,
  PrincipleItem,
  TagLine,
} from "@/components/editorial";
import {
  LayoutGrid,
  PageBackLink,
  PageHeader,
  PageLayout,
  PageSection,
  ProseColumn,
} from "@/components/layout";
import { PracticeMobileStrip } from "./practice-mobile-strip";
import { MobileOverviewLink } from "@/components/layout/mobile-overview-link";
import { practicePageHeader } from "@/lib/content/route-heroes";

export function PracticePageContent() {
  return (
    <PageLayout>
      <div className="col-span-content hidden md:block">
        <PageHeader
          eyebrow={practicePageHeader.eyebrow}
          title={practicePageHeader.title}
          description={practicePageHeader.description}
        />
      </div>

      <div className="route-mobile-browse col-span-full md:hidden">
        <PracticeMobileStrip />
      </div>

      <div className="practice-page-sections mobile-read-surface hidden md:block col-span-full">
      <MobileOverviewLink href="/practice" className="col-span-content pt-layout-4" />
      <div className="col-span-full scroll-mt-nav">
        <div id="introduction" className="scroll-mt-nav">
          <PageSection label="Introduction">
            <ProseColumn className="prose-column--wide">
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
          </PageSection>
        </div>

        <div id="philosophy" className="scroll-mt-nav mt-layout-12">
          <PageSection label="Philosophy">
            <ul className="space-y-layout-4">
              {philosophyContent.principles.map((principle) => (
                <PrincipleItem key={principle}>{principle}</PrincipleItem>
              ))}
            </ul>
            <div className="mt-layout-8">
              <EditorialLink href="/articles">Read writing</EditorialLink>
            </div>
          </PageSection>
        </div>
      </div>

      <div id="capabilities" className="col-span-content scroll-mt-nav">
        <PageSection label="Capabilities">
          <ProseColumn>
            <ul className="space-y-layout-4 mb-layout-8">
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

          <EditorialDisclosure label="Full stack detail" className="mb-layout-8">
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
            <LayoutGrid className="mt-layout-12">
              {additionalSkillGroups
                .filter((group) => group.label !== "Soft Skills")
                .map((group) => (
                  <div key={group.label} className="col-span-half">
                    <h3
                      className={cn(typography.h4, "text-foreground mb-layout-4")}
                    >
                      {group.label}
                    </h3>
                    <ul className="space-y-layout-2">
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
            </LayoutGrid>
          </EditorialDisclosure>

          {philosophyContent.currentFocus.length > 0 ? (
            <EditorialDisclosure label="Current focus" className="mt-layout-12">
              <ul className="flex flex-wrap gap-x-layout-8 gap-y-layout-4">
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
        </PageSection>
      </div>

      <div id="leadership" className="col-span-content scroll-mt-nav">
        <PageSection label="Leadership">
          <ul className="space-y-layout-8 max-w-prose">
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
          <p className={cn(typography.bodySm, "text-text-secondary mt-layout-8 max-w-prose")}>
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
        </PageSection>
      </div>
      </div>

      <PageBackLink />
    </PageLayout>
  );
}
