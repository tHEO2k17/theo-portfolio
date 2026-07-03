import { cn } from "@/lib/utils";

type ProseColumnProps = {
  children: React.ReactNode;
  className?: string;
};

export function ProseColumn({ children, className }: ProseColumnProps) {
  return <div className={cn("prose-column", className)}>{children}</div>;
}
