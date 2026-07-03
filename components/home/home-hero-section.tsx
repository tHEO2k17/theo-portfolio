import { heroContent } from "@/lib/content/hero";
import { typography } from "@/lib/typography";
import { cn } from "@/lib/utils";
import {
  LayoutGrid,
  PageContainer,
  Section,
} from "@/components/layout";

export function HomeHeroSection() {
  return (
    <Section
      id="hero"
      spacious
      className="hero-section flex items-center"
      aria-labelledby="hero-name"
    >
      <PageContainer className="hero-section__content w-full">
        <LayoutGrid>
          <div className="col-span-prose home-hero-grid">
            <h1
              id="hero-name"
              className={cn(
                typography.displayHero,
                "text-foreground mb-layout-8",
              )}
            >
              {heroContent.nameDisplay}
            </h1>
            <p
              className={cn(
                typography.bodyLg,
                "text-accent-warm mb-layout-8",
              )}
            >
              {heroContent.practiceDescriptor}
            </p>
            <div className="space-y-layout-2">
              {heroContent.practiceLines.map((line) => (
                <p
                  key={line}
                  className={cn(typography.practiceLine, "text-text-secondary")}
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
        </LayoutGrid>
      </PageContainer>
    </Section>
  );
}
