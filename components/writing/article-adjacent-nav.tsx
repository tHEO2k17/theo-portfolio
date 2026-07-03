import Link from "next/link";
import { typography } from "@/lib/typography";
import { cn } from "@/lib/utils";
import type { ArticleSummary } from "@/types/article";

type ArticleAdjacentNavProps = {
  previous: ArticleSummary | null;
  next: ArticleSummary | null;
};

export function ArticleAdjacentNav({
  previous,
  next,
}: ArticleAdjacentNavProps) {
  if (!previous && !next) return null;

  return (
    <nav
      aria-label="Adjacent writing"
      className="article-adjacent"
    >
      {previous ? (
        <Link href={`/articles/${previous.slug}`} className="group block">
          <p className={cn(typography.caption, "text-text-tertiary mb-layout-2")}>
            Previous
          </p>
          <p
            className={cn(
              typography.body,
              "motion-link text-foreground group-hover:text-accent-warm",
            )}
          >
            {previous.title}
          </p>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link href={`/articles/${next.slug}`} className="group block md:text-right">
          <p className={cn(typography.caption, "text-text-tertiary mb-layout-2")}>
            Next
          </p>
          <p
            className={cn(
              typography.body,
              "motion-link text-foreground group-hover:text-accent-warm",
            )}
          >
            {next.title}
          </p>
        </Link>
      ) : null}
    </nav>
  );
}
