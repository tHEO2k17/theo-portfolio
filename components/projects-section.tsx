'use client'

import { useState } from 'react'
import { ProjectCard } from './project-card'

const allProjects = [
  {
    title: 'Stride',
    role: 'Full-stack Developer & DevOps',
    category: ['Web', 'Fintech'],
    description: 'Enterprise financial platform for investment management and portfolio tracking. Built scalable backend infrastructure with modern DevOps practices.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
    tags: ['Web', 'Fintech'],
    link: '#',
  },
  {
    title: 'Pamo',
    role: 'Mobile Developer',
    category: ['Mobile', 'Fintech'],
    description: 'Mobile-first fintech application for seamless money transfers and payments. Achieved 100k+ downloads with focus on user experience and security.',
    technologies: ['Flutter', 'Firebase', 'Dart', 'REST APIs'],
    tags: ['Mobile', 'Fintech'],
    link: '#',
  },
  {
    title: 'Borga Money',
    role: 'Mobile Developer',
    category: ['Mobile', 'Fintech'],
    description: 'Cryptocurrency and digital wallet application. Implemented secure wallet management and real-time price tracking functionality.',
    technologies: ['Flutter', 'Bloc', 'APIs', 'Security'],
    tags: ['Mobile', 'Fintech'],
    link: '#',
  },
  {
    title: 'MoveGH',
    role: 'Mobile Developer',
    category: ['Mobile'],
    description: 'On-demand logistics and delivery platform. Built robust mobile application with real-time tracking and payment integration.',
    technologies: ['Flutter', 'Google Maps', 'Firebase', 'Payment Integration'],
    tags: ['Mobile'],
    link: '#',
  },
  {
    title: 'Banbo',
    role: 'Mobile & Web Developer',
    category: ['Web', 'Mobile', 'Fintech'],
    description: 'Full-stack banking platform combining mobile app and web dashboard. Managed user authentication, payments, and comprehensive admin controls.',
    technologies: ['React', 'Flutter', 'Node.js', 'PostgreSQL'],
    tags: ['Web', 'Mobile', 'Fintech'],
    link: '#',
  },
]

const filterOptions = ['All', 'Web', 'Mobile', 'Fintech', 'DevOps']

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProjects = activeFilter === 'All'
    ? allProjects
    : allProjects.filter((p) => p.category.includes(activeFilter))

  return (
    <section id="projects" className="section-py bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">Featured Projects</h2>
        <p className="text-text-secondary text-center mb-12 max-w-2xl mx-auto">
          Showcasing impactful work across web, mobile, and infrastructure domains
        </p>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 md:px-6 py-2 rounded-lg font-medium transition-all ${
                activeFilter === filter
                  ? 'bg-accent-warm text-background'
                  : 'bg-bg-secondary/50 border border-border/30 text-text-secondary hover:text-foreground'
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
  )
}
