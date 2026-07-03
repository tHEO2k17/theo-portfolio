import { typography } from "@/lib/typography";
import { cn } from "@/lib/utils";
import { MobilePanelShell } from "./mobile-panel-shell";

export type MobileHeroStackProps = {
  label?: string;
  title: string;
  descriptor?: string;
  description?: string;
  className?: string;
};

export function MobileHeroStack({
  label,
  title,
  descriptor,
  description,
  className,
}: MobileHeroStackProps) {
  return (
    <MobilePanelShell className={className}>
      <div className="mobile-cover-editorial">
        {label ? (
          <p className={cn(typography.label, "mobile-panel__label text-text-tertiary")}>
            {label}
          </p>
        ) : null}
        <div className="mobile-carousel-slide__body mobile-carousel-slide__body--hero">
          <h1 className={cn(typography.displayHero, "text-foreground line-clamp-2")}>
            {title}
          </h1>
          {descriptor ? (
            <p className={cn(typography.bodyLg, "text-accent-warm")}>{descriptor}</p>
          ) : null}
          {description ? (
            <p className={cn(typography.body, "text-text-secondary line-clamp-2")}>
              {description}
            </p>
          ) : null}
        </div>
      </div>
    </MobilePanelShell>
  );
}
