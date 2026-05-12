import Link from "next/link";
import type { ReactNode } from "react";
import type { Article, TableOfContentsItem } from "@/types/article";
import { ArticleShare } from "@/components/article-share";

type ArticleLayoutProps = {
  article: Article;
  canonicalUrl: string;
  tableOfContents: TableOfContentsItem[];
  readingTime: string;
  children: ReactNode;
};

export function ArticleLayout({
  article,
  canonicalUrl,
  tableOfContents,
  readingTime,
  children,
}: ArticleLayoutProps) {
  return (
    <main className="section-py">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between gap-4">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary transition-colors hover:text-accent-warm"
          >
            <span aria-hidden="true">←</span>
            Back to articles
          </Link>
          <span className="text-xs uppercase tracking-[0.2em] text-text-tertiary">
            Engineering Articles
          </span>
        </div>

        <header className="space-y-3 border-b border-border/40 pb-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-warm">
            {article.category}
          </p>
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-[2.35rem] md:leading-tight">
            {article.title}
          </h1>
          <p className="text-base leading-7 text-text-secondary md:leading-8">
            {article.subtitle}
          </p>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-text-secondary">
            <span>{article.author}</span>
            <span className="hidden h-1 w-1 rounded-full bg-border sm:inline-flex" />
            <span>{article.authorRole}</span>
            <span className="hidden h-1 w-1 rounded-full bg-border sm:inline-flex" />
            <span>{readingTime}</span>
          </div>
        </header>

        {tableOfContents.length > 1 ? (
          <nav
            aria-label="Table of contents"
            className="border-b border-border/30 py-5"
          >
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-text-tertiary">
              Table of contents
            </h2>
            <ol className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm text-text-secondary">
              {tableOfContents.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="transition-colors hover:text-accent-warm"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        ) : null}

        <article className="mx-auto max-w-6xl pt-7 text-[15px] leading-8 text-text-secondary sm:text-base md:leading-8">
          {children}

          <ArticleShare title={article.title} url={canonicalUrl} />
        </article>
      </div>
    </main>
  );
}
