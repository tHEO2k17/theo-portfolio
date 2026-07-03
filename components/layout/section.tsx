import { cn } from "@/lib/utils";
import type {
  IllustrationOpacity,
  IllustrationPosition,
  IllustrationVariant,
} from "@/lib/illustrations";
import { SectionIllustration } from "@/components/illustrations";
import { Reveal } from "@/components/motion";

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  bordered?: boolean;
  spacious?: boolean;
  minHeight?: string;
  illustration?: IllustrationVariant;
  illustrationOpacity?: IllustrationOpacity;
  illustrationPosition?: IllustrationPosition;
  reveal?: boolean;
  revealDelay?: number;
  "aria-labelledby"?: string;
};

export function Section({
  id,
  children,
  className,
  bordered = false,
  spacious = false,
  minHeight,
  illustration,
  illustrationOpacity,
  illustrationPosition,
  reveal = false,
  revealDelay = 0,
  "aria-labelledby": ariaLabelledby,
}: SectionProps) {
  const content = reveal ? (
    <Reveal delay={revealDelay}>{children}</Reveal>
  ) : (
    children
  );

  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledby}
      className={cn(
        "section-block",
        bordered && "border-t border-border/30",
        spacious && "section-block--spacious",
        illustration && "section-with-illustration",
        className,
      )}
      style={minHeight ? { minHeight } : undefined}
    >
      {illustration ? (
        <SectionIllustration
          variant={illustration}
          opacity={illustrationOpacity}
          position={illustrationPosition}
        />
      ) : null}
      {content}
    </section>
  );
}
