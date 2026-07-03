import { cn } from "@/lib/utils";

type PageStaggerProps = {
  children: React.ReactNode;
  className?: string;
};

/** Staggers direct children on route enter. Uses display:contents to preserve grid layout. */
export function PageStagger({ children, className }: PageStaggerProps) {
  return <div className={cn("motion-page-stagger", className)}>{children}</div>;
}
