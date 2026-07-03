import {
  formatArticleDate,
  getArticleDisplayExcerpt,
  getHomepageWritingTeaser,
} from "@/lib/articles";
import { getArticleNoteType } from "@/lib/writing";
import { Reveal } from "@/components/motion";
import { ArticleTeaser, SectionIntro } from "@/components/editorial";
import {
  LayoutGrid,
  PageContainer,
  Section,
} from "@/components/layout";

export function HomeWritingTeaserSection() {
  const { articles } = getHomepageWritingTeaser();
  const [featured, ...recent] = articles;

  return (
    <Section
      id="writing"
      bordered
      aria-labelledby="writing-heading"
      reveal
    >
      <PageContainer>
        <SectionIntro
          label="Writing"
          labelId="writing-heading"
          action={{ href: "/articles", label: "All writing" }}
          className="mb-layout-12"
        />

        <LayoutGrid>
          {featured ? (
            <Reveal className="col-span-prose border-b border-border/30 pb-layout-12 mb-layout-12">
              <ArticleTeaser
                href={`/articles/${featured.slug}`}
                title={featured.title}
                excerpt={getArticleDisplayExcerpt(featured)}
                metadata={`Featured · ${getArticleNoteType(featured)}`}
                date={`${formatArticleDate(featured.publishedAt)} · ${featured.readingTime}`}
                featured
              />
            </Reveal>
          ) : null}

          {recent.length > 0 ? (
            <ul className="writing-archive-list col-span-prose">
              {recent.map((article) => (
                <Reveal
                  key={article.slug}
                  as="li"
                  className="writing-archive-item"
                >
                  <ArticleTeaser
                    href={`/articles/${article.slug}`}
                    title={article.title}
                    excerpt={getArticleDisplayExcerpt(article)}
                    metadata={getArticleNoteType(article)}
                    date={`${formatArticleDate(article.publishedAt)} · ${article.readingTime}`}
                  />
                </Reveal>
              ))}
            </ul>
          ) : null}
        </LayoutGrid>
      </PageContainer>
    </Section>
  );
}
