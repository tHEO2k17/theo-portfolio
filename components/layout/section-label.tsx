import { cn } from "@/lib/utils";
import { typography } from "@/lib/typography";

type SectionLabelProps = {
  children: React.ReactNode;
  id?: string;
  className?: string;
  as?: "p" | "h2";
};

export function SectionLabel({
  children,
  id,
  className,
  as: Component = "p",
}: SectionLabelProps) {
  return (
    <Component
      id={id}
      className={cn(typography.label, "text-text-tertiary", className)}
    >
      {children}
    </Component>
  );
}
