import { cn } from "@/lib/utils";

type SnapPanelProps = {
  children: React.ReactNode;
  id?: string;
  className?: string;
  "aria-label"?: string;
};

export function SnapPanel({
  children,
  id,
  className,
  "aria-label": ariaLabel,
}: SnapPanelProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      aria-roledescription="slide"
      className={cn("snap-panel", className)}
    >
      <div className="snap-panel__inner mobile-carousel-slide__inner">{children}</div>
    </section>
  );
}
