import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { LegacyHashRedirect } from "@/components/legacy-hash-redirect";
import { StructuredData } from "@/components/structured-data";
import { HomeMobileCarousel } from "@/components/home/home-mobile-carousel";
import { HomeHeroSection } from "@/components/home/home-hero-section";
import { HomePhilosophySection } from "@/components/home/home-philosophy-section";
import { HomeWorkTeaserSection } from "@/components/home/home-work-teaser-section";
import { HomeExperiencePreviewSection } from "@/components/home/home-experience-preview-section";
import { HomeWritingTeaserSection } from "@/components/home/home-writing-teaser-section";
import { HomeContactQuietSection } from "@/components/home/home-contact-quiet-section";
import { getHomeStructuredData } from "@/lib/structured-data";
import { MobileOverviewLink } from "@/components/layout/mobile-overview-link";
import { MobileScrollToTop } from "@/components/layout/mobile-scroll-hint";
import { PageStagger, PageTransition } from "@/components/motion";

export default function Home() {
  return (
    <>
      <StructuredData data={getHomeStructuredData()} />
      <LegacyHashRedirect />
      <Navigation />
      <main className="site-main site-main--home">
        <PageTransition>
          <HomeMobileCarousel />

          <div id="home-vertical-fallback" className="home-vertical-fallback">
            <MobileOverviewLink
              href="/"
              label="Back to panels"
              className="px-layout-6 pt-layout-4"
            />
            <PageStagger>
              <HomeHeroSection />
              <HomePhilosophySection />
              <HomeWorkTeaserSection />
              <HomeExperiencePreviewSection />
              <HomeWritingTeaserSection />
              <HomeContactQuietSection />
            </PageStagger>
          </div>

          <div className="hidden md:block">
            <PageStagger>
              <HomeHeroSection />
              <HomePhilosophySection />
              <HomeWorkTeaserSection />
              <HomeExperiencePreviewSection />
              <HomeWritingTeaserSection />
              <HomeContactQuietSection />
            </PageStagger>
          </div>
        </PageTransition>
      </main>
      <MobileScrollToTop />
      <Footer />
    </>
  );
}
