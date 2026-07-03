import { cn } from "@/lib/utils";
import { MobileHeroStack } from "./mobile-hero-stack";
import { MobileCoverScrollHint } from "./mobile-scroll-hint";

export type RouteMobileHeroProps = {
  label?: string;
  title: string;
  descriptor?: string;
  description?: string;
  className?: string;
};

export function RouteMobileHeroContent({
  label,
  title,
  descriptor,
  description,
  className,
}: RouteMobileHeroProps) {
  return (
    <MobileHeroStack
      label={label}
      title={title}
      descriptor={descriptor}
      description={description}
      className={className}
    />
  );
}

export function RouteMobileHero({
  label,
  title,
  descriptor,
  description,
  className,
}: RouteMobileHeroProps) {
  return (
    <div
      className={cn(
        "route-mobile-hero route-mobile-hero--intro md:hidden",
        className,
      )}
    >
      <RouteMobileHeroContent
        label={label}
        title={title}
        descriptor={descriptor}
        description={description}
      />
      <MobileCoverScrollHint className="route-mobile-hero__scroll-hint" />
    </div>
  );
}

export function RouteMobileHeroSlide(props: RouteMobileHeroProps) {
  return <RouteMobileHeroContent {...props} />;
}
