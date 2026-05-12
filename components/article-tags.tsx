import Link from "next/link";

type ArticleTagsProps = {
  tags: string[];
  centered?: boolean;
  hrefBase?: string;
  limit?: number;
  className?: string;
};

export function ArticleTags({
  tags,
  centered = false,
  hrefBase,
  limit = tags.length,
  className,
}: ArticleTagsProps) {
  const visibleTags = tags.slice(0, limit);
  const remainingCount = Math.max(0, tags.length - visibleTags.length);

  if (hrefBase) {
    return (
      <ul
        className={`flex flex-wrap gap-1.5 mb-5 ${centered ? "justify-center" : ""} ${className ?? ""}`}
      >
        {visibleTags.map((tag) => (
          <li key={tag}>
            <Link
              href={`${hrefBase}?tag=${encodeURIComponent(tag)}`}
              className="inline-flex items-center rounded-full border border-border/40 bg-bg-secondary/40 px-2.5 py-1 text-[11px] font-medium text-text-tertiary transition-colors hover:border-accent-bronze/50 hover:text-accent-warm"
            >
              {tag}
            </Link>
          </li>
        ))}
        {remainingCount > 0 ? (
          <li className="inline-flex items-center rounded-full border border-border/40 bg-bg-secondary/40 px-2.5 py-1 text-[11px] font-medium text-text-tertiary">
            +{remainingCount}
          </li>
        ) : null}
      </ul>
    );
  }

  return (
    <ul
      className={`flex flex-wrap gap-1.5 mb-5 ${centered ? "justify-center" : ""} ${className ?? ""}`}
    >
      {visibleTags.map((tag) => (
        <li
          key={tag}
          className="inline-flex items-center rounded-full border border-border/40 bg-bg-secondary/40 px-2.5 py-1 text-[11px] font-medium text-text-tertiary"
        >
          {tag}
        </li>
      ))}
      {remainingCount > 0 ? (
        <li className="inline-flex items-center rounded-full border border-border/40 bg-bg-secondary/40 px-2.5 py-1 text-[11px] font-medium text-text-tertiary">
          +{remainingCount}
        </li>
      ) : null}
    </ul>
  );
}
