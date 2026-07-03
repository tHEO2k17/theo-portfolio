import type { Metadata } from "next";
import { WritingIndex } from "@/components/writing";
import { SitePageShell } from "@/components/site-page-shell";
import { StructuredData } from "@/components/structured-data";
import {
  PageBackLink,
  PageHeader,
  PageLayout,
} from "@/components/layout";
import { getArticleSummaries, getFeaturedArticle } from "@/lib/articles";
import { getPageSocialMetadata } from "@/lib/seo";
import { getArticlesIndexStructuredData } from "@/lib/structured-data";
import { writingHero } from "@/lib/writing";

export const metadata: Metadata = {
  title: "Engineering Articles & Technical Notes",
  description: writingHero.description,
  alternates: {
    canonical: "https://theopaintsil.online/articles",
  },
  ...getPageSocialMetadata({
    title: "Engineering Articles & Technical Notes",
    description: writingHero.description,
    path: "/articles",
  }),
};

export default function ArticlesPage() {
  const articles = getArticleSummaries();
  const featuredArticle = getFeaturedArticle();

  return (
    <>
      <StructuredData data={getArticlesIndexStructuredData()} />
      <SitePageShell>
        <PageLayout>
          <div className="col-span-content hidden md:block">
            <PageHeader
              eyebrow={writingHero.eyebrow}
              title={writingHero.title}
              description={writingHero.description}
            />
          </div>

          <WritingIndex
            articles={articles}
            featuredSlug={featuredArticle.slug}
          />

          <PageBackLink />
        </PageLayout>
      </SitePageShell>
    </>
  );
}
