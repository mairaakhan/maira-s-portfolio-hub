const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-tight">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="space-y-4">
            <span className="text-accent font-medium tracking-wide uppercase text-sm">
              About Me
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-foreground">
              Passionate about creating
              <br />
              <span className="text-gradient">meaningful experiences</span>
            </h2>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm an undergraduate Software Engineering student with a deep passion for 
                UI/UX design. I believe that great software is not just about functionality—it's 
                about creating experiences that feel intuitive and delightful.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My approach combines technical expertise with creative thinking, ensuring 
                that every project I work on is both visually stunning and technically sound. 
                I'm constantly learning and exploring new technologies to stay at the 
                forefront of design and development.
              </p>
            </div>

            <div className="space-y-6">
              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 bg-card rounded-xl shadow-soft card-hover">
                  <div className="text-3xl font-display font-bold text-accent">2+</div>
                  <div className="text-sm text-muted-foreground mt-1">Years Learning</div>
                </div>
                <div className="p-6 bg-card rounded-xl shadow-soft card-hover">
                  <div className="text-3xl font-display font-bold text-accent">10+</div>
                  <div className="text-sm text-muted-foreground mt-1">Projects</div>
                </div>
                <div className="p-6 bg-card rounded-xl shadow-soft card-hover">
                  <div className="text-3xl font-display font-bold text-accent">UI/UX</div>
                  <div className="text-sm text-muted-foreground mt-1">Design Focus</div>
                </div>
                <div className="p-6 bg-card rounded-xl shadow-soft card-hover">
                  <div className="text-3xl font-display font-bold text-accent">SE</div>
                  <div className="text-sm text-muted-foreground mt-1">Engineering</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
