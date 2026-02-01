import { GraduationCap, Calendar, Award } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "Software Engineering (BSSE)",
      institution: "Department of Computer Science - UBIT University of Karachi",
      year: "Expected 2026",
      status: "Currently enrolled in sixth semester",
      current: true
    },
    {
      degree: "Intermediate",
      institution: "Aga Khan Higher Secondary School, Karachi",
      year: "2022",
      status: "A-1 Grade",
      current: false
    },
    {
      degree: "Matriculation",
      institution: "Blue Horizon School, Karachi",
      year: "2020",
      status: "A-1 Grade",
      current: false
    }
  ];

  return (
    <section id="education" className="section-padding">
      <div className="container-tight">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="space-y-4">
            <span className="text-accent font-medium tracking-wide uppercase text-sm">
              Education
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-foreground">
              Academic <span className="text-gradient">Background</span>
            </h2>
          </div>

          {/* Education Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div 
                  key={index}
                  className="relative group"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-8 w-3 h-3 -translate-x-1/2 rounded-full bg-accent border-4 border-background hidden md:block z-10" />
                  
                  <div className={`md:ml-16 p-6 bg-card rounded-2xl shadow-card border border-border/50 card-hover ${edu.current ? 'ring-2 ring-accent/20' : ''}`}>
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                      {/* Icon */}
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                          <GraduationCap className="w-6 h-6 text-accent" />
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 space-y-2">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <h3 className="text-xl font-display font-semibold text-foreground">
                            {edu.degree}
                          </h3>
                          <div className="flex items-center gap-2 text-muted-foreground text-sm">
                            <Calendar className="w-4 h-4" />
                            <span>{edu.year}</span>
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground">
                          {edu.institution}
                        </p>
                        
                        <div className="pt-2">
                          <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium ${
                            edu.current 
                              ? 'bg-accent/10 text-accent' 
                              : 'bg-secondary text-secondary-foreground'
                          }`}>
                            <Award className="w-3.5 h-3.5" />
                            {edu.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
