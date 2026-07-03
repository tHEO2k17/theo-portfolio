"use client";

import Link from "next/link";
import { ArticleTags } from "@/components/article-tags";
import { getArticleDisplayExcerpt } from "@/lib/articles";
import { typography } from "@/lib/typography";
import { cn } from "@/lib/utils";
import type { ArticleSummary } from "@/types/article";

type ArticleCardProps = {
  article: ArticleSummary;
  featured?: boolean;
  className?: string;
};

export function ArticleCard({
  article,
  featured = false,
  className,
}: ArticleCardProps) {
  const formattedDate = new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(article.publishedAt));

  return (
    <article className={cn("page-entry group", className)}>
      <div className="mb-layout-3 flex flex-wrap items-center gap-x-layout-4 gap-y-layout-2">
        {featured ? (
          <span className={cn(typography.caption, "text-accent-warm")}>
            Featured
          </span>
        ) : null}
        <span className={cn(typography.caption, "text-text-tertiary")}>
          {article.category}
        </span>
        <span className={cn(typography.caption, "text-text-tertiary")}>
          {formattedDate}
        </span>
        <span className={cn(typography.caption, "text-text-tertiary")}>
          {article.readingTime}
        </span>
      </div>

      <Link href={`/articles/${article.slug}`} className="block">
        <h2
          className={cn(
            featured ? typography.h2 : typography.h3,
            "motion-link text-foreground mb-layout-3 group-hover:text-accent-warm",
          )}
        >
          {article.title}
        </h2>
        <p
          className={cn(
            typography.body,
            "max-w-prose text-text-secondary mb-layout-4",
          )}
        >
          {getArticleDisplayExcerpt(article)}
        </p>
      </Link>

      <ArticleTags tags={article.tags} limit={featured ? 4 : 3} />

      <Link
        href={`/articles/${article.slug}`}
        className={cn(typography.link, "motion-link text-text-secondary hover:text-accent-warm")}
      >
        Read article
      </Link>
    </article>
  );
}
