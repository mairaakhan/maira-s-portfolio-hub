import { GraduationCap, Calendar, MapPin } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "University",
      location: "Pakistan",
      period: "Currently Pursuing",
      description: "Focusing on software development, algorithms, data structures, and UI/UX design principles. Building a strong foundation in both technical and creative aspects of software engineering.",
      highlights: ["UI/UX Design", "Web Development", "Data Structures", "Algorithms"]
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
              Academic <span className="text-gradient">Journey</span>
            </h2>
          </div>

          {/* Education Cards */}
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div 
                key={index} 
                className="relative p-8 bg-card rounded-2xl shadow-card card-hover border border-border/50"
              >
                {/* Accent bar */}
                <div className="absolute left-0 top-8 bottom-8 w-1 bg-accent rounded-full" />
                
                <div className="pl-6 space-y-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-accent/10 rounded-lg">
                          <GraduationCap className="w-5 h-5 text-accent" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground">
                          {edu.degree}
                        </h3>
                      </div>
                      <p className="text-lg text-muted-foreground">{edu.institution}</p>
                    </div>
                    
                    <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {edu.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((highlight, i) => (
                      <span 
                        key={i}
                        className="px-4 py-2 bg-accent-soft text-accent rounded-full text-sm font-medium"
                      >
                        {highlight}
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

export default EducationSection;
