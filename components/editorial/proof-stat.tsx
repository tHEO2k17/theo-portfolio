import { typography } from "@/lib/typography";
import { cn } from "@/lib/utils";

type ProofStatProps = {
  value: string;
  label: string;
  className?: string;
};

export function ProofStat({ value, label, className }: ProofStatProps) {
  return (
    <li className={className}>
      <p className={cn(typography.bodyLg, "text-foreground mb-layout-2")}>
        {value}
      </p>
      <p className={cn(typography.bodySm, "text-text-tertiary")}>{label}</p>
    </li>
  );
}
