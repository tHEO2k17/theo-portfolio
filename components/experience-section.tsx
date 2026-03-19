"use client";

import { ExperienceCard } from "./experience-card";

const experiences = [
  {
    title: "Head of Technical Delivery",
    company: "Code Raccoon",
    dates: "July 2025 – Present",
    role: "Accra, Ghana (Hybrid)",
    technologies: [
      "Technical Delivery",
      "System Architecture",
      "CI/CD",
      "Team Leadership",
    ],
    achievements: [
      "Lead technical delivery across the client and internal product portfolio (including Ambylon), owning architecture decisions and production deployment.",
      "Establish engineering standards, CI/CD workflows, and deployment practices to raise the team's execution bar.",
      "Hire, onboard, and mentor engineers, building a culture centered on ownership, clean code, and shipping reliable software.",
      "Collaborate with product and design to integrate AI capabilities into the roadmap, ensuring the company stays ahead of industry trends.",
    ],
  },
  {
    title: "Senior Cross-Platform Engineer (Consultant)",
    company: "Grundfos",
    dates: "February 2024 – December 2024",
    role: "Remote (Denmark / Ghana)",
    technologies: ["Azure DevOps", "CI/CD", "AngularJS", "Go", "Cloud"],
    achievements: [
      'Architected and shipped "Project Flow", a platform for remotely managing and monitoring ultrasonic water meters across industrial sites.',
      "Built the full CI/CD pipeline using Azure DevOps, Docker, and Kubernetes, cutting release cycle time by ~40% and eliminating environment inconsistencies.",
      "Advised on cloud integration strategy and shaped infrastructure decisions for a product with a global enterprise customer base.",
      "Collaborated daily with distributed teams across three time zones, ensuring delivery milestones were met on track.",
    ],
  },
  {
    title: "Technical Lead (Contract)",
    company: "Juduh",
    dates: "December 2023 – December 2024",
    role: "Remote",
    technologies: ["GitHub Actions", "CI/CD", "Security", "Python"],
    achievements: [
      "Led the build of Mirrored Defense, a cybersecurity platform designed to detect and neutralize active threat vectors.",
      "Managed a team of five engineers, introducing code review processes and automated QA to increase velocity without compromising stability.",
      "Reduced manual deployment effort by over 60% by implementing automated GitHub Actions CI/CD workflows.",
      "Designed a backend architecture capable of handling concurrent threat analysis at scale with zero downtime deployments.",
    ],
  },
  {
    title: "Senior Frontend Developer",
    company: "tech11 GmbH",
    dates: "August 2023 – February 2024",
    role: "Remote / Würzburg, Germany",
    technologies: ["JavaScript Web Components", "React", "TypeScript", "APIs"],
    achievements: [
      "Built modular web portals using native JavaScript Web Components, ensuring interface compatibility across multiple client frameworks.",
      "Integrated third-party APIs and cloud services while collaborating with international teams in Germany, the US, and Eastern Europe.",
      "Championed agile practices, including tighter sprint planning and structured peer reviews, resulting in a visible increase in throughput.",
    ],
  },
  {
    title: "Software Developer",
    company: "Nsano Ghana Ltd",
    dates: "March 2020 – August 2023",
    role: "Accra, Ghana",
    technologies: ["Flutter", "React", "Node.js", "PWAs", "Fintech"],
    achievements: [
      "Led frontend and mobile development on fintech products serving 50,000+ active users across West Africa.",
      "Built PWAs that cut load times by 35% on low-bandwidth connections, directly improving user retention in variable network markets.",
      "Tightened mobile payment flows and data security protocols, resulting in zero critical security incidents over three years.",
      "Mentored three junior developers and introduced coding standards and review processes that remain in use today.",
    ],
  },
  {
    title: "Software Developer",
    company: "8D Digital",
    dates: "October 2018 – February 2020",
    role: "Accra, Ghana",
    technologies: ["React", "Node.js", "MongoDB", "Firebase"],
    achievements: [
      "Built a mobile payments app handling real-time financial transactions via local banking APIs and USSD gateways.",
      "Developed a merchant acquisition platform that cut SME onboarding time by 50% by digitizing manual processes.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Persol Systems Ltd",
    dates: "July 2017 – August 2018",
    role: "Accra, Ghana",
    technologies: ["Angular", "JavaScript", "HTML/CSS", "Cloud"],
    achievements: [
      "Built a web portal for real-time oil distribution tracking, providing previously unavailable visibility to operations teams.",
      "Optimized cloud infrastructure for the company's HCM product, improving responsiveness and reducing running costs.",
    ],
  },
  {
    title: "Systems Administrator (Apprentice)",
    company: "Eicons Microsystems",
    dates: "January 2016 – June 2017",
    role: "Accra, Ghana",
    technologies: ["Linux", "Windows Server", "VPN", "PBX Systems"],
    achievements: [
      "Installed and configured PBX telephony systems and CCTV networks for commercial clients.",
      "Built custom web solutions for clients, gaining foundational experience in end-to-end software delivery.",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="section-py bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
          Experience
        </h2>
        <p className="text-text-secondary text-center mb-16 max-w-2xl mx-auto">
          A journey through full-stack engineering, technical leadership, and
          system design across diverse industries
        </p>

        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <ExperienceCard key={idx} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
