import { heroContent } from "@/lib/content/hero";
import { truncateWords } from "@/lib/text";
import { MobileHeroStack } from "@/components/layout/mobile-hero-stack";

const heroLine = truncateWords(
  heroContent.practiceLines.join(" "),
  12,
);

export function MobileHeroPanel() {
  return (
    <MobileHeroStack
      label="Home"
      title={heroContent.nameDisplay}
      descriptor={heroContent.practiceDescriptor}
      description={heroLine}
    />
  );
}
