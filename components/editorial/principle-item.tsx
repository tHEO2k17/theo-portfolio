import { typography } from "@/lib/typography";
import { cn } from "@/lib/utils";

type PrincipleItemProps = {
  children: React.ReactNode;
  className?: string;
  as?: "li" | "div";
};

export function PrincipleItem({
  children,
  className,
  as: Component = "li",
}: PrincipleItemProps) {
  return (
    <Component
      className={cn(
        typography.body,
        "text-text-secondary border-l border-border/50 pl-6",
        className,
      )}
    >
      {children}
    </Component>
  );
}
