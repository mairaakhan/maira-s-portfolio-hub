import { Code, Palette, Database, Globe, Figma, Layers } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      skills: ["HTML/CSS", "JavaScript", "React", "TypeScript", "Tailwind CSS"]
    },
    {
      title: "UI/UX Design",
      icon: Palette,
      skills: ["Figma", "Adobe XD", "Wireframing", "Prototyping", "User Research"]
    },
    {
      title: "Backend Basics",
      icon: Database,
      skills: ["Node.js", "Python", "SQL", "REST APIs", "Git"]
    },
    {
      title: "Design Tools",
      icon: Figma,
      skills: ["Figma", "Photoshop", "Illustrator", "Canva", "Miro"]
    },
    {
      title: "Web Technologies",
      icon: Globe,
      skills: ["Responsive Design", "SEO Basics", "Performance", "Accessibility"]
    },
    {
      title: "Soft Skills",
      icon: Layers,
      skills: ["Problem Solving", "Team Collaboration", "Communication", "Time Management"]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="container-wide">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <span className="text-accent font-medium tracking-wide uppercase text-sm">
              Skills & Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-foreground">
              What I <span className="text-gradient">Bring</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A diverse skill set combining technical development with creative design thinking.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className="p-6 bg-card rounded-2xl shadow-soft card-hover border border-border/50 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors duration-300">
                      <category.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-lg font-display font-semibold text-foreground">
                      {category.title}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-lg text-sm"
                      >
                        {skill}
                      </span>
                    ))}
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

export default SkillsSection;
