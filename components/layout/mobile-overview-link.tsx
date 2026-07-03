import Link from "next/link";
import { typography } from "@/lib/typography";
import { cn } from "@/lib/utils";

type MobileOverviewLinkProps = {
  href: string;
  label?: string;
  className?: string;
};

export function MobileOverviewLink({
  href,
  label = "Back to overview",
  className,
}: MobileOverviewLinkProps) {
  return (
    <p className={cn("mobile-overview-link md:hidden", className)}>
      <Link
        href={href}
        className={cn(
          typography.bodySm,
          "text-text-tertiary underline-offset-4 hover:underline",
        )}
      >
        {label}
      </Link>
    </p>
  );
}
