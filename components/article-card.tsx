"use client";

import Link from "next/link";
import Image from "next/image";
import { ArticleTags } from "@/components/article-tags";
import type { ArticleSummary } from "@/types/article";

type ArticleCardProps = {
  article: ArticleSummary;
  featured?: boolean;
};

export function ArticleCard({ article, featured = false }: ArticleCardProps) {
  return (
    <article
      className={`group rounded-2xl border border-border/40 bg-bg-secondary/35 p-5 transition-colors hover:border-accent-bronze/40 ${featured ? "md:p-6" : ""}`}
    >
      <div className="space-y-4">
        {article.coverImage ? (
          <div className="overflow-hidden rounded-lg">
            <div className="relative w-full aspect-video bg-border/10">
              <Image
                src={article.coverImage}
                alt={article.coverAlt ?? article.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
          </div>
        ) : null}
        <div className="flex flex-wrap items-center gap-2">
          {featured ? (
            <span className="inline-flex items-center rounded-full border border-accent-bronze/25 bg-accent-bronze/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent-warm">
              Featured
            </span>
          ) : null}
          <span className="text-[11px] uppercase tracking-[0.2em] text-text-tertiary">{article.category}</span>
        </div>

        <div className="space-y-2.5">
          <div className="flex flex-wrap items-center gap-2 text-sm text-text-tertiary">
            <time dateTime={article.publishedAt}>{new Intl.DateTimeFormat("en", {
              month: "short",
              day: "numeric",
              year: "numeric",
            }).format(new Date(article.publishedAt))}</time>
            <span className="h-1 w-1 rounded-full bg-border" />
            <span>{article.readingTime}</span>
          </div>
          <h2 className={`text-balance font-semibold tracking-tight text-foreground ${featured ? "text-2xl md:text-[1.85rem]" : "text-xl md:text-[1.35rem]"}`}>
            {article.title}
          </h2>
          <p className="max-w-2xl text-sm leading-6 text-text-secondary">
            {article.excerpt}
          </p>
        </div>

        <ArticleTags tags={article.tags} limit={featured ? 3 : 2} />

        <Link
          href={`/articles/${article.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-accent-warm transition-colors hover:text-accent-bronze"
        >
          Read article
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}