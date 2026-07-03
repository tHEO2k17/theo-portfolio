import { ProseColumn } from "@/components/layout/prose-column";
import { typography } from "@/lib/typography";
import { cn } from "@/lib/utils";

type ProcessStepItemProps = {
  index: number;
  label: string;
  description: string;
  className?: string;
  as?: "li" | "div";
};

export function ProcessStepItem({
  index,
  label,
  description,
  className,
  as: Component = "li",
}: ProcessStepItemProps) {
  return (
    <Component className={className}>
      <p className={cn(typography.caption, "text-text-tertiary mb-layout-4")}>
        {String(index + 1).padStart(2, "0")}
      </p>
      <h2 className={cn(typography.h2, "text-foreground mb-layout-4")}>
        {label}
      </h2>
      <ProseColumn>
        <p className={cn(typography.body, "text-text-secondary")}>
          {description}
        </p>
      </ProseColumn>
    </Component>
  );
}
