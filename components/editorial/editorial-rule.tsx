import { cn } from "@/lib/utils";

type EditorialRuleProps = {
  className?: string;
};

export function EditorialRule({ className }: EditorialRuleProps) {
  return <hr className={cn("editorial-rule", className)} aria-hidden="true" />;
}
