import type { ReactNode } from "react";
import type { Article, TableOfContentsItem } from "@/types/article";
import { formatArticleDate } from "@/lib/articles";
import { getArticleNoteType } from "@/lib/writing";
import { ArticleCover } from "@/components/media/article-cover";
import { EditorialDisclosure, EditorialLink } from "@/components/editorial";
import { ArticleListen } from "@/components/writing/article-listen";
import { PageStagger } from "@/components/motion";
import { typography } from "@/lib/typography";
import { cn } from "@/lib/utils";

type ArticleLayoutProps = {
  article: Article;
  readingTime: string;
  plainText: string;
  tableOfContents: TableOfContentsItem[];
  showTableOfContents?: boolean;
  footer?: ReactNode;
  children: ReactNode;
};

function ArticleContents({
  tableOfContents,
}: {
  tableOfContents: TableOfContentsItem[];
}) {
  const list = (
    <ol
      className={cn(typography.bodySm, "space-y-layout-2 text-text-secondary")}
    >
      {tableOfContents.map((item) => (
        <li key={item.id}>
          <a href={`#${item.id}`} className="motion-link hover:text-accent-warm">
            {item.title}
          </a>
        </li>
      ))}
    </ol>
  );

  return (
    <>
      <details className="article-contents article-contents--mobile md:hidden">
        <summary className={cn(typography.link, "motion-link cursor-pointer")}>
          Contents
        </summary>
        <div className="article-contents__body">{list}</div>
      </details>

      <EditorialDisclosure
        label="Contents"
        className="article-contents-disclosure mb-layout-8 hidden md:block"
      >
        {list}
      </EditorialDisclosure>
    </>
  );
}

export function ArticleLayout({
  article,
  readingTime,
  plainText,
  tableOfContents,
  showTableOfContents = true,
  footer,
  children,
}: ArticleLayoutProps) {
  const noteType = getArticleNoteType(article);

  return (
    <div className="section-block article-reading-surface">
      <div className="layout-container article-reading-shell">
        <div className="article-reading-column mx-auto w-full">
          <PageStagger>
            <div className="article-reading-chrome">
            <EditorialLink href="/articles" className="article-reading-chrome__back">
              Writing
            </EditorialLink>
            <div className="article-reading-chrome__meta">
              <ArticleListen plainText={plainText} />
              <span className={cn(typography.caption, "text-text-tertiary")}>
                {readingTime}
              </span>
            </div>
          </div>

          <header className="article-magazine-header">
            {article.coverVariant ? (
              <ArticleCover
                variant={article.coverVariant}
                alt={article.title}
                className="article-magazine-header__cover mb-layout-8"
              />
            ) : null}
            <p className={cn(typography.label, "text-text-tertiary mb-layout-4")}>
              {noteType}
            </p>
            <h1 className="article-magazine-header__title text-balance text-foreground mb-layout-4">
              {article.title}
            </h1>
            <p
              className={cn(
                typography.bodyLg,
                "article-magazine-header__subtitle text-text-secondary mb-layout-6",
              )}
            >
              {article.subtitle}
            </p>
            <p className={cn(typography.bodySm, "text-text-tertiary")}>
              <time dateTime={article.publishedAt}>
                {formatArticleDate(article.publishedAt)}
              </time>
            </p>
          </header>

          {showTableOfContents && tableOfContents.length > 1 ? (
            <ArticleContents tableOfContents={tableOfContents} />
          ) : null}

          <article className={cn(typography.prose, "article-prose text-text-secondary")}>
            {children}
          </article>

          {footer}
          </PageStagger>
        </div>
      </div>
    </div>
  );
}
