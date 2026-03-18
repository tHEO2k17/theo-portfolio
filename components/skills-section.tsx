'use client'

import { useState } from 'react'

const skillCategories = [
  {
    name: 'Frontend',
    skills: ['ReactJS', 'Angular', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Web Components'],
  },
  {
    name: 'Backend',
    skills: ['Node.js', 'NestJS', 'ASP.NET Core', 'Laravel', 'Go', 'Quarkus'],
  },
  {
    name: 'Mobile',
    skills: ['Flutter', 'Dart', 'Android Native', 'Kotlin', 'React Native'],
  },
  {
    name: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Firebase', 'MSSQL'],
  },
  {
    name: 'DevOps & Cloud',
    skills: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'GitHub Actions', 'ArgoCD', 'Helm'],
  },
  {
    name: 'Infrastructure',
    skills: ['Linux', 'Windows Server', 'VPN', 'Network Config', 'PBX Systems'],
  },
]

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section id="skills" className="section-py bg-bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">Skills & Expertise</h2>
        <p className="text-text-secondary text-center mb-12 max-w-2xl mx-auto">
          A comprehensive toolkit built over 8+ years of engineering excellence
        </p>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 md:gap-3 justify-center mb-12">
          {skillCategories.map((category, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(idx)}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium transition-all ${
                activeCategory === idx
                  ? 'bg-accent-warm text-background'
                  : 'bg-bg-secondary/50 border border-border/30 text-text-secondary hover:text-foreground'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {skillCategories[activeCategory].skills.map((skill) => (
            <div
              key={skill}
              className="group bg-gradient-to-br from-bg-secondary/50 to-bg-tertiary/50 border border-border/30 rounded-lg p-4 md:p-6 hover:border-accent-bronze/50 transition-all card-hover text-center"
            >
              <p className="font-medium text-foreground text-sm md:text-base">{skill}</p>
            </div>
          ))}
        </div>

        {/* Additional skills */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            {
              label: 'Leadership',
              items: ['Team Mentoring', 'Technical Strategy', 'Project Management', 'Agile/Scrum'],
            },
            {
              label: 'Soft Skills',
              items: ['Technical Writing', 'Public Speaking', 'System Design', 'Problem Solving'],
            },
            {
              label: 'Specializations',
              items: ['Fintech', 'Cybersecurity', 'IoT', 'Cloud Architecture'],
            },
          ].map((group, idx) => (
            <div
              key={idx}
              className="bg-bg-secondary/50 border border-border/30 rounded-lg p-6 hover:border-accent-bronze/50 transition-colors"
            >
              <h3 className="text-lg font-bold text-accent-warm mb-4">{group.label}</h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-text-secondary">
                    <span className="text-accent-warm">▪</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
