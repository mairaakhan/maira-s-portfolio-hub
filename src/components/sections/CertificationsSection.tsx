import { Award, ExternalLink } from "lucide-react";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Certificate in UX Design Fundamentals",
      issuer: "California Institute of Arts",
      platform: "Coursera",
      description: "Complete an online non credit course authorized by California Institute of Arts"
    },
    {
      title: "Bronze Honour, International Youth Math Challenge (IYMC)",
      issuer: "IYMC",
      platform: null,
      description: "Selected as one of the best students in a big worldwide math contest"
    },
    {
      title: "Certificate of Achievement in UI/UX for Beginners",
      issuer: "Great Learning",
      platform: null,
      description: "Signifying proficiency in fundamental UI/UX concepts"
    },
    {
      title: "Digital Skills: User Experience",
      issuer: "Accenture",
      platform: null,
      description: "Gained insights into the importance of UX in the digital realm"
    },
    {
      title: "The Power of Infographics in Research Dissemination",
      issuer: null,
      platform: null,
      description: "Received a Statement of Participation"
    },
    {
      title: "Photoshop Beginners",
      issuer: "EDUCBA",
      platform: null,
      description: "Completed an online course offered by EDUCBA"
    }
  ];

  return (
    <section id="certifications" className="section-padding bg-secondary/30">
      <div className="container-wide">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <span className="text-accent font-medium tracking-wide uppercase text-sm">
              Certifications
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-foreground">
              Professional <span className="text-gradient">Credentials</span>
            </h2>
          </div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="p-6 bg-card rounded-2xl shadow-soft card-hover border border-border/50 group"
              >
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-3 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors duration-300 shrink-0">
                      <Award className="w-5 h-5 text-accent" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-display font-semibold text-foreground leading-tight">
                        {cert.title}
                      </h3>
                      {(cert.issuer || cert.platform) && (
                        <p className="text-sm text-accent font-medium">
                          {cert.issuer}
                          {cert.platform && ` • ${cert.platform}`}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
