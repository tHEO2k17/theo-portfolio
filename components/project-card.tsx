'use client'

import { useState } from 'react'

interface ProjectCardProps {
  title: string
  role: string
  description: string
  technologies: string[]
  tags: string[]
  link?: string
}

export function ProjectCard({
  title,
  role,
  description,
  technologies,
  tags,
  link,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="card-hover bg-gradient-to-br from-bg-secondary/50 to-bg-tertiary/50 border border-border/30 rounded-lg p-6 md:p-8 hover:border-accent-bronze/50 transition-all group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="mb-6">
        <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-accent-warm text-sm font-medium mb-3">{role}</p>
        <p className="text-text-secondary leading-relaxed">{description}</p>
      </div>

      <div className="mb-4">
        <p className="text-text-tertiary text-xs uppercase tracking-widest mb-2">Technologies</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span key={tech} className="px-2 py-1 bg-accent-bronze/20 text-accent-warm text-xs rounded font-medium">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span key={tag} className="px-2 py-1 border border-border/30 text-text-tertiary text-xs rounded">
            {tag}
          </span>
        ))}
      </div>

      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-accent-warm hover:text-accent-bronze transition-colors text-sm font-medium group"
        >
          View Project
          <span className={`ml-2 transition-transform ${isHovered ? 'translate-x-1' : ''}`}>→</span>
        </a>
      )}
    </div>
  )
}
