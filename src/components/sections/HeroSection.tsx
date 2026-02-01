import { Button } from "@/components/ui/button";
import { ArrowDown, Linkedin, Mail, Github } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center section-padding relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-accent-soft opacity-40 blur-3xl -z-10" />
      
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-accent font-medium tracking-wide uppercase text-sm animate-fade-in">
                Software Engineer & UI/UX Designer
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-semibold text-foreground leading-tight animate-slide-up">
                Maira Khan
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed animate-slide-up delay-100">
                Undergraduate Software Engineer crafting intuitive digital experiences 
                through thoughtful design and clean code.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-slide-up delay-200">
              <Button variant="hero" asChild>
                <a href="#contact">
                  <Mail className="w-4 h-4" />
                  Get in Touch
                </a>
              </Button>
              <Button variant="heroOutline" asChild>
                <a href="https://www.linkedin.com/in/maira-khan-083517324" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4 animate-fade-in delay-300">
              <a 
                href="https://www.linkedin.com/in/maira-khan-083517324" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-accent/10 hover:text-accent transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:contact@mairakhan.com"
                className="p-3 rounded-full bg-secondary hover:bg-accent/10 hover:text-accent transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="#"
                className="p-3 rounded-full bg-secondary hover:bg-accent/10 hover:text-accent transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Profile Visual */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in delay-200">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-2xl" />
              <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center relative">
                <span className="text-8xl md:text-9xl font-display font-bold text-primary-foreground/90">
                  MK
                </span>
              </div>
              {/* Floating accent shapes */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full animate-pulse" />
              <div className="absolute -bottom-2 -left-6 w-12 h-12 border-2 border-accent rounded-full" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
