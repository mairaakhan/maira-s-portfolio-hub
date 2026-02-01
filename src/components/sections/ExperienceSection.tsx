import { Briefcase, MapPin, Calendar } from "lucide-react";
import ScrollReveal from "@/components/ui/scroll-reveal";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "UI/UX Internship",
      company: "Aditya Enterprises",
      type: "Internship",
      period: "May 2025 - Oct 2025",
      duration: "6 months",
      location: "Remote",
    }
  ];

  return (
    <section id="experience" className="section-padding bg-background/80 backdrop-blur-sm">
      <div className="container-wide">
        <div className="space-y-12">
          {/* Section Header */}
          <ScrollReveal>
            <div className="text-center space-y-4">
              <span className="text-accent font-medium tracking-wide uppercase text-sm">
                Work History
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-semibold text-foreground">
                Professional <span className="text-gradient">Experience</span>
              </h2>
            </div>
          </ScrollReveal>

          {/* Experience Cards */}
          <div className="max-w-3xl mx-auto">
            {experiences.map((exp, index) => (
              <ScrollReveal key={index} delay={0.1} direction="up">
                <div className="p-6 bg-card/90 backdrop-blur-sm rounded-2xl shadow-soft border border-border/50 card-hover">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    {/* Icon */}
                    <div className="p-3 bg-accent/10 rounded-xl shrink-0">
                      <Briefcase className="w-6 h-6 text-accent" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-3">
                      <div>
                        <h3 className="text-xl font-display font-semibold text-foreground">
                          {exp.title}
                        </h3>
                        <p className="text-accent font-medium">
                          {exp.company} · {exp.type}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          {exp.period} · {exp.duration}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
