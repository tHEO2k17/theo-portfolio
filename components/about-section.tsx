'use client'

export function AboutSection() {
  return (
    <section id="about" className="section-py bg-gradient-to-b from-background to-bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 text-center">About</h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Main bio */}
          <div className="space-y-6">
            <p className="text-lg text-text-secondary leading-relaxed">
              I'm Theophilus Paintsil, a Senior Software Engineer and Head of Technical Delivery with a strong background in full-stack development, DevOps, system administration, and technical leadership. I enjoy building systems that are scalable, maintainable, and grounded in real business impact.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              My work spans engineering execution, architecture, delivery management, cloud deployment, and mentoring teams through the full software lifecycle. I thrive in environments where technical excellence meets business strategy.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              Whether architecting microservices at scale, optimizing CI/CD pipelines, or mentoring the next generation of engineers, I bring discipline, clarity, and a systems-thinking approach to every challenge.
            </p>
          </div>

          {/* Core principles */}
          <div className="space-y-6">
            <div className="bg-bg-secondary/50 border border-border/30 rounded-lg p-8">
              <h3 className="text-xl font-bold text-accent-warm mb-6">Core Principles</h3>
              <ul className="space-y-3">
                {[
                  'Build with clarity',
                  'Architect for scale',
                  'Lead with ownership',
                  'Deliver with discipline',
                  'Keep systems clean and maintainable',
                ].map((principle) => (
                  <li key={principle} className="flex items-start gap-3">
                    <span className="text-accent-warm font-bold mt-1">▪</span>
                    <span className="text-text-secondary">{principle}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Current focus */}
            <div className="bg-gradient-to-br from-accent-bronze/10 to-accent-warm/5 border border-accent-bronze/20 rounded-lg p-8">
              <h3 className="text-lg font-bold text-accent-warm mb-4">Current Focus</h3>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>→ Scalable web platforms</li>
                <li>→ Technical leadership & mentoring</li>
                <li>→ DevOps & cloud delivery</li>
                <li>→ Product-minded engineering</li>
                <li>→ Clean system design</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
