import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { LegacyHashRedirect } from "@/components/legacy-hash-redirect";
import { MobileScrollToTop } from "@/components/layout/mobile-scroll-hint";
import { PageTransition } from "@/components/motion";

interface SitePageShellProps {
  children: React.ReactNode;
}

export function SitePageShell({ children }: SitePageShellProps) {
  return (
    <>
      <LegacyHashRedirect />
      <Navigation />
      <main className="site-main">
        <PageTransition>{children}</PageTransition>
      </main>
      <MobileScrollToTop />
      <Footer />
    </>
  );
}
