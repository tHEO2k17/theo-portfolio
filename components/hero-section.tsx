"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDown, ArrowRight } from "lucide-react";

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background to-background pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div
            className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="mb-6 inline-block">
              <span className="text-accent-warm text-sm font-medium tracking-wider uppercase">
                Welcome
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Theophilus
              <br />
              <span className="text-gradient">Paintsil</span>
            </h1>

            <p className="text-xl md:text-2xl text-accent-warm font-medium mb-4">
              Senior Software Engineer | Frontend Heavy
            </p>

            <p className="text-lg text-text-secondary mb-8 leading-relaxed max-w-xl">
              I build reliable software systems, lead technical delivery, and
              turn complex ideas into scalable products.
            </p>

            <p className="text-text-tertiary mb-10 leading-relaxed max-w-xl">
              Over 8 years of experience across full-stack engineering, DevOps,
              cloud infrastructure, and technical leadership — building products
              in fintech, cybersecurity, IoT, and modern web platforms.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 bg-accent-warm text-background px-8 py-3 rounded-lg font-semibold hover:bg-accent-bronze transition-colors"
              >
                View Projects
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 border border-accent-bronze text-accent-warm px-8 py-3 rounded-lg font-semibold hover:bg-accent-bronze/10 transition-colors"
              >
                Let's Work Together
              </a>
              <a
                href="https://drive.google.com/file/d/1d5vrqdQy6L6Fnl05mC9PszFJALcbYI3c/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-border text-text-secondary px-8 py-3 rounded-lg font-semibold hover:text-foreground hover:border-foreground transition-colors"
              >
                Download CV
              </a>
            </div>

            {/* Quick stats */}
            <div className="flex gap-8 pt-8 border-t border-border/30">
              <div>
                <p className="text-accent-warm font-bold text-lg">8+</p>
                <p className="text-text-tertiary text-sm">Years Experience</p>
              </div>
              <div>
                <p className="text-accent-warm font-bold text-lg">5+</p>
                <p className="text-text-tertiary text-sm">Industries</p>
              </div>
              <div>
                <p className="text-accent-warm font-bold text-lg">∞</p>
                <p className="text-text-tertiary text-sm">Passion</p>
              </div>
            </div>
          </div>

          {/* Portrait */}
          <div
            className={`relative spotlight transition-all duration-1000 ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-bronze/20 to-accent-warm/10 rounded-2xl blur-2xl" />
              <Image
                src="/theophilus-portrait.jpg"
                alt="Theophilus Paintsil"
                fill
                className="object-cover rounded-2xl shadow-2xl"
                priority
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/20 to-transparent" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        >
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <p className="text-text-tertiary text-sm">Scroll to explore</p>
            <ChevronDown className="w-5 h-5 text-accent-warm" />
          </div>
        </div>
      </div>
    </section>
  );
}
