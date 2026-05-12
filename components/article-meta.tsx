import { formatArticleDate } from "@/lib/articles";

type ArticleMetaProps = {
  author: string;
  authorRole: string;
  publishedAt: string;
  readingTime: string;
  updatedAt?: string;
};

export function ArticleMeta({
  author,
  authorRole,
  publishedAt,
  readingTime,
  updatedAt,
}: ArticleMetaProps) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-text-secondary">
      <span>{author}</span>
      <span className="hidden h-1 w-1 rounded-full bg-border sm:inline-flex" />
      <span>{authorRole}</span>
      <span className="hidden h-1 w-1 rounded-full bg-border sm:inline-flex" />
      <time dateTime={publishedAt}>{formatArticleDate(publishedAt)}</time>
      <span className="hidden h-1 w-1 rounded-full bg-border sm:inline-flex" />
      <span>{readingTime}</span>
      {updatedAt ? (
        <>
          <span className="hidden h-1 w-1 rounded-full bg-border sm:inline-flex" />
          <span>Updated {formatArticleDate(updatedAt)}</span>
        </>
      ) : null}
    </div>
  );
}
