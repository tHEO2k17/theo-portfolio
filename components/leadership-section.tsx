"use client";

import { CheckCircle2 } from "lucide-react";

export function LeadershipSection() {
  return (
    <section id="leadership" className="section-py bg-bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 text-center">
          Leadership & Impact
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Strengths */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-accent-warm mb-8">
              Key Strengths
            </h3>
            {[
              {
                title: "Strategic Leadership",
                description:
                  "Define technical roadmaps and architectural standards that align with business goals",
              },
              {
                title: "Team Development",
                description:
                  "Mentor and grow engineers while fostering a culture of ownership and excellence",
              },
              {
                title: "Delivery Excellence",
                description:
                  "Balance engineering quality with execution speed to ship reliable products",
              },
              {
                title: "Systems Thinking",
                description:
                  "Architect scalable solutions considering security, performance, and maintainability",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-bg-secondary/50 border border-border/30 rounded-lg p-6 hover:border-accent-bronze/50 transition-colors"
              >
                <h4 className="text-lg font-bold text-foreground mb-2">
                  {item.title}
                </h4>
                <p className="text-text-secondary">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Right: Impact narrative */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-accent-bronze/10 to-accent-warm/5 border border-accent-bronze/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-accent-warm mb-6">
                Leadership Philosophy
              </h3>
              <p className="text-text-secondary leading-relaxed mb-4">
                At Code Raccoon, I lead with the belief that great software
                comes from great teams. My approach centers on clarity,
                ownership, and continuous improvement.
              </p>
              <p className="text-text-secondary leading-relaxed mb-4">
                I've learned that technical excellence isn't just about writing
                good code—it's about building systems that scale, teams that
                grow, and delivering consistent value to users and businesses.
              </p>
              <p className="text-text-secondary leading-relaxed">
                My role is to remove blockers, provide clear direction, and
                empower engineers to do their best work. When teams are aligned
                and equipped, nothing is out of reach.
              </p>
            </div>

            {/* Quick wins */}
            <div className="space-y-3">
              <h4 className="font-bold text-foreground text-lg">
                Notable Achievements
              </h4>
              {[
                "Promoted to Head of Technical Delivery within 6 months",
                "Led architectural redesign reducing deployment time by 70%",
                "Mentored 5+ engineers from junior to mid-level roles",
                "Implemented CI/CD practices improving team velocity",
              ].map((achievement, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent-warm shrink-0 mt-0.5" />
                  <p className="text-text-secondary">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
