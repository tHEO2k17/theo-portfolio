import { typography } from "@/lib/typography";
import { cn } from "@/lib/utils";

type ArticleShareProps = {
  title: string;
  url: string;
};

export function ArticleShare({ title, url }: ArticleShareProps) {
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);

  const shareClass = cn(
    typography.link,
    "motion-link editorial-chip text-text-secondary hover:text-accent-warm",
  );

  return (
    <section
      aria-labelledby="share-article"
      className="page-entry pt-layout-8"
    >
      <h2
        id="share-article"
        className={cn(typography.label, "text-text-tertiary mb-layout-4")}
      >
        Share
      </h2>
      <div className="flex flex-wrap gap-2">
        <a
          href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
          target="_blank"
          rel="noopener noreferrer"
          className={shareClass}
        >
          X
        </a>
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className={shareClass}
        >
          LinkedIn
        </a>
        <a
          href={`mailto:?subject=${encodedTitle}&body=${encodedUrl}`}
          className={shareClass}
        >
          Email
        </a>
      </div>
    </section>
  );
}
