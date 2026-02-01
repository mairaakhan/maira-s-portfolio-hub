import { ExternalLink, Figma } from "lucide-react";
import { Button } from "@/components/ui/button";

const PortfolioSection = () => {
  const projects = [
    {
      title: "Car Cleansed",
      category: "UI/UX Case Study",
      description: "A comprehensive mobile app design for a car cleaning service. Designed user flows, wireframes, and high-fidelity prototypes focusing on user experience and visual aesthetics.",
      tools: ["Figma", "Prototyping", "User Research"],
      link: "https://www.figma.com/proto/Xx0f0t4ItpGAdirIUaUddM/Car-Cleansed?node-id=0-1&t=xyfXwhbAU6b0Bhjr-1",
      featured: true
    }
  ];

  return (
    <section id="portfolio" className="section-padding bg-secondary/30">
      <div className="container-wide">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <span className="text-accent font-medium tracking-wide uppercase text-sm">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-foreground">
              Featured <span className="text-gradient">Work</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              UI/UX design projects showcasing my approach to creating intuitive digital experiences.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group relative p-8 bg-card rounded-3xl shadow-card border border-border/50 overflow-hidden card-hover"
              >
                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-6 right-6">
                    <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full uppercase tracking-wide">
                      Featured
                    </span>
                  </div>
                )}
                
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Project Info */}
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <span className="text-accent font-medium text-sm uppercase tracking-wide">
                        {project.category}
                      </span>
                      <h3 className="text-3xl font-display font-semibold text-foreground">
                        {project.title}
                      </h3>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Tools used */}
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-lg text-sm"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                    
                    {/* CTA */}
                    <Button variant="hero" asChild>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <Figma className="w-4 h-4" />
                        View Prototype
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                  
                  {/* Project Preview Placeholder */}
                  <div className="relative">
                    <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-500">
                      <div className="text-center space-y-3">
                        <Figma className="w-16 h-16 text-accent mx-auto" />
                        <p className="text-muted-foreground font-medium">Figma Prototype</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
