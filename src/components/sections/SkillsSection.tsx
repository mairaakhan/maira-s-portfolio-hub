import { Monitor, Palette, BarChart3 } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Office & Productivity",
      icon: Monitor,
      skills: ["Windows", "Ms. Word", "Excel", "PowerPoint"]
    },
    {
      title: "Design Tools",
      icon: Palette,
      skills: ["Adobe Illustrator", "Figma", "Canva"]
    },
    {
      title: "Professional Skills",
      icon: BarChart3,
      skills: ["Presentation", "Management", "Analytical Skills"]
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-wide">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <span className="text-accent font-medium tracking-wide uppercase text-sm">
              Skill Set
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-foreground">
              My <span className="text-gradient">Expertise</span>
            </h2>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-6">
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
                  
                  <ul className="space-y-2">
                    {category.skills.map((skill, i) => (
                      <li 
                        key={i}
                        className="flex items-center gap-2 text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                        {skill}
                      </li>
                    ))}
                  </ul>
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
