import { typography } from "@/lib/typography";
import { cn } from "@/lib/utils";

type TagLineProps = {
  items: string[];
  label?: string;
  className?: string;
};

export function TagLine({ items, label, className }: TagLineProps) {
  if (items.length === 0) return null;

  return (
    <div className={className}>
      {label ? (
        <p className={cn(typography.caption, "text-text-tertiary mb-layout-3")}>
          {label}
        </p>
      ) : null}
      <p className={cn(typography.bodySm, "text-text-secondary")}>
        {items.join(" · ")}
      </p>
    </div>
  );
}
