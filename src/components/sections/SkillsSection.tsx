import { Monitor, Palette, BarChart3, Code, Database, Layout, Server, Sparkles } from "lucide-react";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { motion } from "framer-motion";

const SkillsSection = () => {
  const programmingSkills = [
    { name: "HTML", color: "bg-orange-500" },
    { name: "CSS", color: "bg-blue-500" },
    { name: "JavaScript", color: "bg-yellow-500" },
    { name: "React", color: "bg-cyan-400" },
    { name: "Node.js", color: "bg-green-500" },
    { name: "Express", color: "bg-gray-500" },
    { name: "MongoDB", color: "bg-green-600" },
    { name: "Python", color: "bg-blue-400" },
    { name: "Java", color: "bg-red-500" },
    { name: "OOP", color: "bg-purple-500" },
  ];

  const otherCategories = [
    {
      title: "Design Tools",
      icon: Palette,
      gradient: "from-pink-500/20 to-purple-500/20",
      iconBg: "bg-pink-500/10",
      iconColor: "text-pink-500",
      skills: ["Adobe Illustrator", "Figma", "Canva"]
    },
    {
      title: "Office Suite",
      icon: Monitor,
      gradient: "from-blue-500/20 to-cyan-500/20",
      iconBg: "bg-blue-500/10",
      iconColor: "text-blue-500",
      skills: ["Ms. Word", "Excel", "PowerPoint"]
    },
    {
      title: "Soft Skills",
      icon: Sparkles,
      gradient: "from-amber-500/20 to-orange-500/20",
      iconBg: "bg-amber-500/10",
      iconColor: "text-amber-500",
      skills: ["Presentation", "Management", "Analytical"]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-background/80 backdrop-blur-sm">
      <div className="container-wide">
        <div className="space-y-16">
          {/* Section Header */}
          <ScrollReveal>
            <div className="text-center space-y-4">
              <span className="text-accent font-medium tracking-wide uppercase text-sm">
                Skill Set
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-semibold text-foreground">
                My <span className="text-gradient">Expertise</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A comprehensive toolkit spanning full-stack development, design, and professional skills
              </p>
            </div>
          </ScrollReveal>

          {/* Programming Skills - Featured */}
          <ScrollReveal direction="up">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-accent/10 to-accent/5 rounded-3xl blur-xl" />
              <div className="relative p-8 md:p-10 bg-card/80 backdrop-blur-sm rounded-3xl border border-border/50 shadow-card">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 bg-accent/10 rounded-2xl">
                    <Code className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-semibold text-foreground">
                      Programming & Development
                    </h3>
                    <p className="text-muted-foreground text-sm">Full-stack technologies I work with</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {programmingSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="group relative"
                    >
                      <div className="flex items-center gap-2 px-5 py-3 bg-secondary/50 hover:bg-secondary rounded-xl border border-border/50 hover:border-accent/30 transition-all duration-300 cursor-default">
                        <span className={`w-2.5 h-2.5 rounded-full ${skill.color}`} />
                        <span className="font-medium text-foreground">{skill.name}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Other Skills Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {otherCategories.map((category, index) => (
              <ScrollReveal key={index} delay={index * 0.1} direction="up">
                <motion.div 
                  className="group h-full"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`relative h-full p-6 rounded-2xl border border-border/50 shadow-soft overflow-hidden bg-card/80 backdrop-blur-sm`}>
                    {/* Gradient background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    <div className="relative space-y-5">
                      <div className="flex items-center gap-3">
                        <div className={`p-3 ${category.iconBg} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                          <category.icon className={`w-6 h-6 ${category.iconColor}`} />
                        </div>
                        <h3 className="text-lg font-display font-semibold text-foreground">
                          {category.title}
                        </h3>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1.5 text-sm font-medium bg-secondary/70 text-foreground rounded-lg border border-border/30"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
