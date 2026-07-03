"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";

export function AboutSection() {
  return (
    <section
      id="about"
      className="section-py bg-gradient-to-b from-background to-bg-secondary/50"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 text-center">
          About
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Main bio */}
          <div className="space-y-6">
            <p className="text-lg text-text-secondary leading-relaxed">
              I'm Theophilus Paintsil. Senior engineer and technical lead. Eight
              years shipping products to production. I build cloud systems and
              lead teams at scale.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              My work spans fintech, IoT, security, and AI platforms across web,
              mobile, and cloud. I have built and led products in Ghana,
              Denmark, and Germany.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              Open to senior and lead roles. Remote or hybrid.
            </p>
          </div>

          {/* Core principles */}
          <div className="space-y-6">
            <div className="bg-bg-secondary/50 border border-border/30 rounded-lg p-8">
              <h3 className="text-xl font-bold text-accent-warm mb-6">
                Core Principles
              </h3>
              <ul className="space-y-3">
                {[
                  "Engineering ownership & accountability",
                  "Scalable, cloud-native architecture",
                  "Automated, reliable delivery pipelines",
                  "Clear technical communication",
                  "Security by design",
                ].map((principle) => (
                  <li key={principle} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent-warm shrink-0 mt-0.5" />
                    <span className="text-text-secondary">{principle}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Current focus */}
            <div className="bg-gradient-to-br from-accent-bronze/10 to-accent-warm/5 border border-accent-bronze/20 rounded-lg p-8">
              <h3 className="text-lg font-bold text-accent-warm mb-4">
                Current Focus
              </h3>
              <ul className="space-y-2 text-text-secondary text-sm">
                {[
                  "AI-Integrated Platform Development",
                  "Cybersecurity Tooling",
                  "Cloud-Native System Design",
                  "Engineering Leadership",
                  "LLM Tooling",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-accent-warm shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
