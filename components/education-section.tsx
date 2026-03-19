"use client";

export function EducationSection() {
  return (
    <section className="section-py bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 text-center">
          Education & Recognition
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-accent-warm mb-6">
              Education
            </h3>
            {[
              {
                degree: "BSc Information Technology",
                institution: "Ghana Technology University College",
                location: "2016",
              },
              {
                degree: "Professional Diploma in Systems Engineering",
                institution: "Intercom Programming & Marketing Co.",
                location: "2014",
              },
            ].map((edu, idx) => (
              <div
                key={idx}
                className="bg-bg-secondary/50 border border-border/30 rounded-lg p-6 hover:border-accent-bronze/50 transition-colors"
              >
                <h4 className="font-bold text-foreground mb-1">{edu.degree}</h4>
                <p className="text-accent-warm text-sm font-medium mb-1">
                  {edu.institution}
                </p>
                <p className="text-text-tertiary text-sm">{edu.location}</p>
              </div>
            ))}
          </div>

          {/* Recognition & Awards */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-accent-warm mb-6">
              Awards & Recognition
            </h3>
            {[
              {
                title: "Ghana Head of State Award",
                year: "Silver (2010), Bronze (2006)",
              },
              {
                title: "GTS Certificate of Excellence",
                year: "Outstanding Performance",
              },
              {
                title: "Cloud & AI Certifications",
                year: "Pursuing Azure, AWS & AI/ML",
              },
            ].map((award, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-r from-accent-bronze/10 to-accent-warm/5 border border-accent-bronze/20 rounded-lg p-6"
              >
                <h4 className="font-bold text-accent-warm mb-1">
                  {award.title}
                </h4>
                <p className="text-text-secondary text-sm">{award.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
