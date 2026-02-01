import { ExternalLink, Figma, Monitor, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import caseStudyImage from "@/assets/case-study-carcleansed.png";
import internshipImage from "@/assets/internship-laundry-system.png";

const PortfolioSection = () => {
  const projects = [
    {
      title: "Car Cleansed",
      category: "UI/UX Case Study",
      type: "mobile",
      description: "A comprehensive mobile app design for a car cleaning and mechanic service platform. Designed complete user flows including authentication, service discovery, mechanic profiles with ratings, and service booking. Focused on intuitive navigation and clean visual hierarchy.",
      tools: ["Figma", "Prototyping", "User Research", "Mobile Design"],
      link: "https://www.figma.com/proto/Xx0f0t4ItpGAdirIUaUddM/Car-Cleansed?node-id=0-1&t=xyfXwhbAU6b0Bhjr-1",
      image: caseStudyImage
    },
    {
      title: "Guest Laundry Management System",
      category: "Internship Project",
      type: "desktop",
      description: "A full-featured web application designed during my UI/UX internship at Aditya Enterprises. Created an intuitive laundry management dashboard for hotel receptions, featuring item categorization, billing preview, and comprehensive filter systems for efficient guest service management.",
      tools: ["Figma", "Dashboard Design", "Web Application", "UX Research"],
      link: null,
      image: internshipImage
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
              Case <span className="text-gradient">Studies</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              UI/UX design projects showcasing my approach to creating intuitive digital experiences.
            </p>
          </div>

          {/* Projects */}
          <div className="space-y-16">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group relative p-8 bg-card rounded-3xl shadow-card border border-border/50 overflow-hidden card-hover"
              >
                <div className="space-y-8">
                  {/* Project Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        {project.type === "mobile" ? (
                          <Smartphone className="w-5 h-5 text-accent" />
                        ) : (
                          <Monitor className="w-5 h-5 text-accent" />
                        )}
                        <span className="text-accent font-medium text-sm uppercase tracking-wide">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="text-3xl font-display font-semibold text-foreground">
                        {project.title}
                      </h3>
                    </div>
                    
                    {project.link && (
                      <Button variant="hero" asChild className="self-start">
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <Figma className="w-4 h-4" />
                          View Prototype
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                  
                  {/* Project Description */}
                  <p className="text-muted-foreground leading-relaxed max-w-3xl">
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
                  
                  {/* Project Screenshots */}
                  <div className="relative mt-6">
                    <div className="bg-gradient-to-br from-secondary/50 to-muted/30 rounded-2xl p-4 sm:p-6 overflow-hidden">
                      <div className="relative">
                        <img 
                          src={project.image} 
                          alt={`${project.title} - UI/UX Design Screenshots`}
                          className="w-full h-auto rounded-xl shadow-lg object-contain"
                        />
                        {/* Subtle overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent rounded-xl pointer-events-none" />
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
