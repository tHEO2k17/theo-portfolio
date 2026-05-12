type ArticleShareProps = {
  title: string;
  url: string;
};

export function ArticleShare({ title, url }: ArticleShareProps) {
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);

  return (
    <section
      aria-labelledby="share-article"
      className="border-t border-border/30 pt-6"
    >
      <h2
        id="share-article"
        className="text-xs font-semibold uppercase tracking-[0.2em] text-text-tertiary"
      >
        Share this article
      </h2>
      <div className="mt-4 flex flex-wrap gap-2 sm:gap-3">
        <a
          href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-full border border-border/40 px-3 py-2 text-sm font-medium text-text-secondary transition-colors hover:border-accent-bronze/50 hover:text-accent-warm"
        >
          Share on X
        </a>
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-full border border-border/40 px-3 py-2 text-sm font-medium text-text-secondary transition-colors hover:border-accent-bronze/50 hover:text-accent-warm"
        >
          Share on LinkedIn
        </a>
        <a
          href={`mailto:?subject=${encodedTitle}&body=${encodedUrl}`}
          className="inline-flex items-center rounded-full border border-border/40 px-3 py-2 text-sm font-medium text-text-secondary transition-colors hover:border-accent-bronze/50 hover:text-accent-warm"
        >
          Share by email
        </a>
      </div>
    </section>
  );
}
