import Link from "next/link";
import { ProseColumn } from "@/components/layout/prose-column";
import { typography } from "@/lib/typography";
import { cn } from "@/lib/utils";

type ArticleTeaserProps = {
  href: string;
  title: string;
  date: string;
  excerpt?: string;
  metadata?: string;
  featured?: boolean;
  clampTitle?: boolean;
  className?: string;
};

export function ArticleTeaser({
  href,
  title,
  date,
  excerpt,
  metadata,
  featured = false,
  clampTitle = false,
  className,
}: ArticleTeaserProps) {
  return (
    <article className={className}>
      <Link href={href} className="group">
        {metadata ? (
          <p className={cn("editorial-meta mb-layout-3")}>{metadata}</p>
        ) : featured ? (
          <p className={cn(typography.caption, "text-text-tertiary mb-layout-3")}>
            Featured
          </p>
        ) : null}
        <h3
          className={cn(
            featured ? typography.h2 : typography.h3,
            "motion-link text-foreground mb-layout-2 group-hover:text-accent-warm",
            clampTitle && "line-clamp-2",
          )}
        >
          {title}
        </h3>
        <p className={cn(typography.bodySm, "text-text-tertiary mb-layout-3")}>
          {date}
        </p>
        {excerpt ? (
          <ProseColumn>
            <p className={cn(typography.body, "text-text-secondary")}>
              {excerpt}
            </p>
          </ProseColumn>
        ) : null}
      </Link>
    </article>
  );
}
