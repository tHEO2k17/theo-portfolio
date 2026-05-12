import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { MetricsSection } from "@/components/metrics-section";
import { ExperienceSection } from "@/components/experience-section";
import { SkillsSection } from "@/components/skills-section";
import { ProjectsSection } from "@/components/projects-section";
import { LeadershipSection } from "@/components/leadership-section";
import { EducationSection } from "@/components/education-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Theophilus Paintsil",
    jobTitle: "Senior Software Engineer / Technical Lead",
    url: "https://theopaintsil.online",
    image: "https://theopaintsil.online/theophilus-portrait.jpg",
    sameAs: [
      "https://linkedin.com/in/theopaintsil",
      "https://github.com/tHEO2k17",
    ],
    description:
      "Senior Software Engineer and Technical Lead specializing in cloud-native systems, full-stack development, software architecture, DevOps, and AI-assisted product engineering.",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Theophilus Paintsil",
    url: "https://theopaintsil.online",
    description:
      "Portfolio of Theophilus Paintsil, a Senior Software Engineer and Technical Lead specializing in cloud-native systems and full-stack development.",
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="min-h-screen overflow-hidden">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <MetricsSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <LeadershipSection />
        <EducationSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
