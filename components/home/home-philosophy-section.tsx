import { philosophyContent } from "@/lib/content/philosophy";
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

export function HomePhilosophySection() {
  return (
    <Section
      id="philosophy"
      bordered
      aria-labelledby="philosophy-heading"
      reveal
    >
      <PageContainer>
        <LayoutGrid>
          <div className="col-span-prose">
            <SectionLabel
              id="philosophy-heading"
              as="h2"
              className="mb-layout-12"
            >
              Philosophy
            </SectionLabel>
            <ProseColumn>
              <p
                className={cn(
                  typography.bodyLg,
                  "text-text-secondary mb-layout-6",
                )}
              >
                {philosophyContent.homepageExcerpt}
              </p>
              <p className={cn("editorial-meta mb-layout-8")}>
                {philosophyContent.homepageAside}
              </p>
              <EditorialLink href="/practice">Practice</EditorialLink>
            </ProseColumn>
          </div>
        </LayoutGrid>
      </PageContainer>
    </Section>
  );
}
