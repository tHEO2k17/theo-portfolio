'use client'

import { ExperienceCard } from './experience-card'

const experiences = [
  {
    title: 'Head of Technical Delivery',
    company: 'Code Raccoon',
    dates: 'July 2025 – Present',
    role: 'Leadership & Strategy',
    technologies: ['Team Leadership', 'Architecture', 'Strategy', 'DevOps'],
    achievements: [
      'Lead and mentor a team of developers, overseeing the entire software development lifecycle',
      'Define technical strategy, roadmap, and architectural standards for system scalability',
      'Manage project execution, coordinate with stakeholders, and ensure timely delivery',
      'Drive continuous improvement in development processes and team capabilities',
    ],
  },
  {
    title: 'Senior Cross-Platform Engineer (Consultant)',
    company: 'Grundfos',
    dates: 'February 2024 – December 2024',
    role: 'Engineering & DevOps',
    technologies: ['Azure DevOps', 'CI/CD', 'AngularJS', 'Go', 'Cloud'],
    achievements: [
      'Led cross-functional team developing Project Flow platform for ultrasonic water meters',
      'Designed and implemented CI/CD pipelines for optimized software deployment using Azure DevOps',
      'Engineered and maintained full-stack web applications with modern tech stack',
      'Provided technical consultancy for software development and cloud integration',
    ],
  },
  {
    title: 'Technical Lead (Contract)',
    company: 'Juduh',
    dates: 'December 2023 – December 2024',
    role: 'Cybersecurity & Leadership',
    technologies: ['GitHub Actions', 'CI/CD', 'Security', 'Python'],
    achievements: [
      'Spearheaded development of Mirrored Defense, an advanced cybersecurity tool',
      'Managed a team of developers ensuring adherence to coding best practices',
      'Implemented automated CI/CD workflows using GitHub Actions for continuous security',
      'Architected security-first approach to system design and deployment',
    ],
  },
  {
    title: 'Senior Frontend Developer',
    company: 'tech11 GmbH',
    dates: 'August 2023 – February 2024',
    role: 'Frontend Engineering',
    technologies: ['JavaScript Web Components', 'React', 'TypeScript', 'APIs'],
    achievements: [
      'Engineered scalable web portals utilizing JavaScript Web Components',
      'Collaborated with international teams to integrate APIs and cloud services',
      'Built reusable component libraries for enterprise applications',
      'Optimized frontend performance across multiple platforms',
    ],
  },
  {
    title: 'Software Developer',
    company: 'Nsano Ghana Ltd',
    dates: 'March 2020 – August 2023',
    role: 'Full-Stack & Mobile',
    technologies: ['Flutter', 'React', 'Node.js', 'PostgreSQL', 'Fintech'],
    achievements: [
      'Led development for fintech mobile applications in Flutter, enhancing UX and security',
      'Developed and maintained progressive web applications (PWAs) and backend services',
      'Improved mobile payment processing and data security protocols',
      'Mentored junior developers on mobile development best practices',
    ],
  },
  {
    title: 'Software Developer',
    company: '8D Digital',
    dates: 'October 2018 – February 2020',
    role: 'Full-Stack Development',
    technologies: ['React', 'Node.js', 'MongoDB', 'Firebase'],
    achievements: [
      'Built mobile payment application for financial transactions',
      'Developed merchant acquisition web platform for business onboarding',
      'Designed backend APIs for payment processing and data management',
      'Implemented security measures for financial data protection',
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'Persol Systems Ltd',
    dates: 'July 2017 – August 2018',
    role: 'Web Development',
    technologies: ['Angular', 'JavaScript', 'HTML/CSS', 'Cloud'],
    achievements: [
      'Developed web portal for tracking oil distribution logistics',
      'Enhanced HCM project by optimizing cloud-based solutions',
      'Built responsive user interfaces for complex data visualization',
      'Collaborated with backend teams for API integration',
    ],
  },
  {
    title: 'Systems Administrator (Apprentice)',
    company: 'Eicons Microsystems',
    dates: 'January 2016 – June 2017',
    role: 'Infrastructure & Systems',
    technologies: ['Linux', 'Windows Server', 'VPN', 'PBX Systems'],
    achievements: [
      'Installed, configured, and managed PBX telephony systems and CCTV networks',
      'Maintained Windows/Linux servers with uptime optimization',
      'Developed custom web solutions for various clients',
      'Provided technical support and system troubleshooting',
    ],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="section-py bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">Experience</h2>
        <p className="text-text-secondary text-center mb-16 max-w-2xl mx-auto">
          A journey through full-stack engineering, technical leadership, and system design across diverse industries
        </p>

        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <ExperienceCard
              key={idx}
              {...exp}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
