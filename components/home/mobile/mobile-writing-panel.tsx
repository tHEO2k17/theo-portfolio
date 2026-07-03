import {
  formatArticleDate,
  getArticleDisplayExcerpt,
  getHomepageWritingTeaser,
} from "@/lib/articles";
import { getArticleNoteType } from "@/lib/writing";
import { ArticleTeaser } from "@/components/editorial";
import { EditorialLink } from "@/components/editorial";
import { MobilePanelShell } from "@/components/layout/mobile-panel-shell";

export function MobileWritingPanel() {
  const { articles } = getHomepageWritingTeaser();
  const featured = articles[0];

  if (!featured) return null;

  return (
    <MobilePanelShell>
      <div className="mobile-carousel-slide__body">
        <ArticleTeaser
          href={`/articles/${featured.slug}`}
          title={featured.title}
          excerpt={getArticleDisplayExcerpt(featured, 14)}
          metadata={`Featured · ${getArticleNoteType(featured)}`}
          date={`${formatArticleDate(featured.publishedAt)} · ${featured.readingTime}`}
          featured
          clampTitle
        />
        <EditorialLink href="/articles">All writing</EditorialLink>
      </div>
    </MobilePanelShell>
  );
}
