import { cn } from "@/lib/utils";

type LayoutGridProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "ul" | "ol";
};

export function LayoutGrid({
  children,
  className,
  as: Component = "div",
}: LayoutGridProps) {
  return (
    <Component className={cn("layout-grid", className)}>{children}</Component>
  );
}
