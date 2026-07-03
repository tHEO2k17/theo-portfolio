import { experiencePreviewCopy } from "@/lib/content/experience";
import { typography } from "@/lib/typography";
import { cn } from "@/lib/utils";
import { EditorialLink } from "@/components/editorial";
import {
  LayoutGrid,
  PageContainer,
  ProseColumn,
  Section,
  SectionLabel,
} from "@/components/layout";

export function HomeExperiencePreviewSection() {
  return (
    <Section
      id="experience"
      bordered
      aria-labelledby="experience-heading"
      reveal
    >
      <PageContainer>
        <LayoutGrid>
          <div className="col-span-prose">
            <SectionLabel id="experience-heading" as="h2" className="mb-layout-8">
              Experience
            </SectionLabel>
            <ProseColumn>
              <p className={cn(typography.bodyLg, "text-text-secondary mb-layout-8")}>
                {experiencePreviewCopy}
              </p>
              <EditorialLink href="/experience">View roles</EditorialLink>
            </ProseColumn>
          </div>
        </LayoutGrid>
      </PageContainer>
    </Section>
  );
}
