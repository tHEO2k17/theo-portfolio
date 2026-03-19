"use client";

import { useState } from "react";
import { ProjectCard } from "./project-card";

const allProjects = [
  {
    title: "Tekora",
    role: "Personal Project (In Progress)",
    category: ["AI", "Tooling", "Productivity"],
    description:
      "A platform I am building independently to transition into AI tooling. Focused on enhancing developer productivity and intelligent workflow automation.",
    technologies: ["AI", "LLMs", "Workflow Automation"],
    tags: ["AI", "Productivity"],
    link: "#",
  },
  {
    title: "Borga Money",
    role: "Lead Mobile Developer",
    category: ["Mobile", "Fintech"],
    description:
      "Cross-border remittance platform helping Ghanaians in the diaspora send money home. Built with Flutter, integrating real-time FX rates, KYC flows, and multi-currency wallets.",
    technologies: ["Flutter", "Real-time FX", "KYC", "Multi-currency"],
    tags: ["Mobile", "Fintech"],
    link: "https://borga.money/home",
  },
  {
    title: "Stride",
    role: "Full-stack Developer & DevOps",
    category: ["Web", "Mobile", "Social", "Fitness", "DevOps"],
    description:
      "Social fitness app connecting people for shared workouts. Built the full stack including Node.js API, React frontend, and PostgreSQL data layer with automated CI/CD and cloud deployment.",
    technologies: [
      "React",
      "Node.js",
      "Laravel",
      "Flutter",
      "PostgreSQL",
      "MongoDB",
      "Socket.io",
      "Docker",
      "AWS",
    ],
    tags: ["Web", "Mobile", "Social", "Fitness", "DevOps"],
    link: "https://connectwithstride.com/",
  },
  {
    title: "Pamo",
    role: "Mobile Developer",
    category: ["Mobile", "E-commerce", "Marketplace"],
    description:
      "Reverse marketplace shopping app where buyers post requests and sellers make offers. Flips the traditional e-commerce model to give buyers control. Built with Flutter and Firebase.",
    technologies: ["Flutter", "Firebase", "Marketplace Logic"],
    tags: ["Mobile", "E-commerce", "Marketplace", "Social"],
    link: "https://pamo.app/home",
  },
  {
    title: "MoveGH",
    role: "Mobile Developer",
    category: ["Mobile", "Fintech"],
    description:
      "Comprehensive fintech app for cross-border money transfers, bill payments, and escrow services. Integrated with local payment rails and USSD gateways.",
    technologies: ["Flutter", "USSD Gateways", "Firebase", "Payments"],
    tags: ["Mobile", "Fintech"],
    link: "https://movegh.com/",
  },
  {
    title: "Banbo",
    role: "Mobile & Web Developer",
    category: ["Web", "Mobile", "Fintech"],
    description:
      "Insurtech platform for comparing and purchasing vehicle and personal insurance. Delivered both the mobile app and web platform from zero to launch.",
    technologies: ["React", "Flutter", "Node.js", "PostgreSQL"],
    tags: ["Web", "Mobile", "Fintech"],
    link: "https://banbo.insure/home",
  },
];

const filterOptions = ["All", "Web", "Mobile", "Fintech", "DevOps"];

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? allProjects
      : allProjects.filter((p) => p.category.includes(activeFilter));

  return (
    <section id="projects" className="section-py bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
          Featured Projects
        </h2>
        <p className="text-text-secondary text-center mb-12 max-w-2xl mx-auto">
          Showcasing impactful work across web, mobile, and infrastructure
          domains
        </p>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 md:px-6 py-2 rounded-lg font-medium transition-all ${
                activeFilter === filter
                  ? "bg-accent-warm text-background"
                  : "bg-bg-secondary/50 border border-border/30 text-text-secondary hover:text-foreground"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
