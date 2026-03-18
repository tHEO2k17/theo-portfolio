'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface ExperienceCardProps {
  title: string
  company: string
  dates: string
  technologies: string[]
  achievements: string[]
  role: string
}

export function ExperienceCard({
  title,
  company,
  dates,
  technologies,
  achievements,
  role,
}: ExperienceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="card-hover bg-bg-secondary/50 border border-border/30 rounded-lg p-6 md:p-8 hover:border-border/60 transition-colors">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-foreground mb-1">{title}</h3>
          <p className="text-accent-warm font-medium mb-1">{company}</p>
          <p className="text-text-tertiary text-sm mb-4">{dates}</p>
          <p className="text-text-secondary text-sm mb-4">{role}</p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-accent-bronze/20 text-accent-warm text-xs rounded-full font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-2 p-2 hover:bg-border/20 rounded-md transition-colors"
          aria-label="Toggle details"
        >
          <ChevronDown
            className={`w-5 h-5 text-text-secondary transition-transform ${
              isExpanded ? 'rotate-180' : ''
            }`}
          />
        </button>
      </div>

      {isExpanded && (
        <div className="mt-4 pt-4 border-t border-border/20 space-y-2">
          {achievements.map((achievement, i) => (
            <li key={i} className="text-text-secondary text-sm ml-4">
              {achievement}
            </li>
          ))}
        </div>
      )}
    </div>
  )
}
