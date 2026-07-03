import { typography } from "@/lib/typography";
import { cn } from "@/lib/utils";

type ContactChannelProps = {
  href: string;
  value: string;
  label?: string;
  external?: boolean;
  className?: string;
};

export function ContactChannel({
  href,
  value,
  label,
  external = false,
  className,
}: ContactChannelProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn("block group", className)}
    >
      {label ? (
        <p className={cn(typography.caption, "text-text-tertiary mb-1")}>
          {label}
        </p>
      ) : null}
      <p
        className={cn(
          typography.body,
          "motion-link text-text-secondary group-hover:text-accent-warm",
        )}
      >
        {value}
      </p>
    </a>
  );
}
