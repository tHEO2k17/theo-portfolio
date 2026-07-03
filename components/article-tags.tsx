import Link from "next/link";
import { typography } from "@/lib/typography";
import { cn } from "@/lib/utils";

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

  const chipClass = cn(
    typography.caption,
    "editorial-chip",
  );

  if (hrefBase) {
    return (
      <ul
        className={cn(
          "mb-layout-4 flex flex-wrap gap-2",
          centered && "justify-center",
          className,
        )}
      >
        {visibleTags.map((tag) => (
          <li key={tag}>
            <Link href={`${hrefBase}?tag=${encodeURIComponent(tag)}`} className={chipClass}>
              {tag}
            </Link>
          </li>
        ))}
        {remainingCount > 0 ? (
          <li className={cn(chipClass, "text-text-tertiary")}>+{remainingCount}</li>
        ) : null}
      </ul>
    );
  }

  return (
    <ul
      className={cn(
        "mb-layout-4 flex flex-wrap gap-2",
        centered && "justify-center",
        className,
      )}
    >
      {visibleTags.map((tag) => (
        <li key={tag} className={cn(chipClass, "text-text-tertiary")}>
          {tag}
        </li>
      ))}
      {remainingCount > 0 ? (
        <li className={cn(chipClass, "text-text-tertiary")}>+{remainingCount}</li>
      ) : null}
    </ul>
  );
}
