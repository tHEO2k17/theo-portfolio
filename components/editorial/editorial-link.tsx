import Link from "next/link";
import { typography } from "@/lib/typography";
import { cn } from "@/lib/utils";

type EditorialLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  tone?: "secondary" | "warm";
};

const toneClasses = {
  secondary: "text-text-secondary hover:text-accent-warm",
  warm: "text-accent-warm hover:text-accent-bronze",
} as const;

export function EditorialLink({
  href,
  children,
  className,
  external = false,
  tone = "secondary",
}: EditorialLinkProps) {
  const classes = cn(
    typography.link,
    "motion-link focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-warm/50",
    toneClasses[tone],
    className,
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
