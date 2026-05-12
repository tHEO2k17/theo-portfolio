import type { Metadata } from "next";
import Link from "next/link";
import { ArticlesExplorer } from "@/components/articles-explorer";
import {
  getAllArticleTags,
  getArticleSummaries,
  getFeaturedArticle,
} from "@/lib/articles";

export const metadata: Metadata = {
  title: "Engineering Articles & Technical Notes",
  description:
    "Practical notes on software architecture, secure delivery, cloud-native systems, DevOps, and technical leadership.",
  alternates: {
    canonical: "https://theopaintsil.online/articles",
  },
  openGraph: {
    title: "Engineering Articles & Technical Notes | Theophilus Paintsil",
    description:
      "Practical notes on software architecture, secure delivery, cloud-native systems, DevOps, and technical leadership.",
    url: "https://theopaintsil.online/articles",
    siteName: "Theophilus Paintsil",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Theophilus Paintsil articles preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering Articles & Technical Notes | Theophilus Paintsil",
    description:
      "Practical notes on software architecture, secure delivery, cloud-native systems, DevOps, and technical leadership.",
    images: ["/og-image.png"],
  },
};

export default function ArticlesPage() {
  const articles = getArticleSummaries();
  const featuredArticle = getFeaturedArticle();
  const tags = getAllArticleTags();

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="py-8 sm:py-10">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
          <div className="mb-4 inline-flex items-center rounded-full border border-border/40 bg-bg-secondary/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent-warm">
            Articles
          </div>
          <h1 className="text-balance text-3xl font-semibold tracking-tight md:text-[2.35rem]">
            Engineering Articles & Technical Notes
          </h1>
          <p className="mx-auto mt-3 max-w-3xl text-base leading-7 text-text-secondary md:text-lg md:leading-8">
            Practical notes on software architecture, secure delivery,
            cloud-native systems, DevOps, and technical leadership.
          </p>
          <div className="mt-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary transition-colors hover:text-accent-warm"
            >
              <span aria-hidden="true">←</span>
              Back to portfolio
            </Link>
          </div>
          </div>
        </div>
      </section>

      <ArticlesExplorer
        articles={articles}
        featuredSlug={featuredArticle.slug}
        tags={tags}
      />
    </main>
  );
}
