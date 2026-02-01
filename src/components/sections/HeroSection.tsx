import { Button } from "@/components/ui/button";
import { ArrowDown, Linkedin, Mail, Phone, MapPin, Palette } from "lucide-react";
import profilePicture from "@/assets/profile-picture.jpeg";

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
              
              {/* Contact Info */}
              <div className="flex flex-wrap gap-4 text-muted-foreground text-sm animate-slide-up delay-100">
                <a href="tel:03082246473" className="flex items-center gap-1.5 hover:text-accent transition-colors">
                  <Phone className="w-4 h-4" />
                  03082246473
                </a>
                <span className="hidden sm:inline">|</span>
                <a href="mailto:mairaakhaanx@gmail.com" className="flex items-center gap-1.5 hover:text-accent transition-colors">
                  <Mail className="w-4 h-4" />
                  mairaakhaanx@gmail.com
                </a>
                <span className="hidden sm:inline">|</span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  Karachi, 74600
                </span>
              </div>
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
              <Button variant="heroOutline" asChild>
                <a href="https://www.behance.net/mairakhan21" target="_blank" rel="noreferrer">
                  <Palette className="w-4 h-4" />
                  Behance
                </a>
              </Button>
            </div>

            {/* Personal Details */}
            <div className="flex flex-wrap gap-6 pt-4 text-sm text-muted-foreground animate-fade-in delay-300">
              <div>
                <span className="text-foreground font-medium">Date of Birth:</span> 4-Feb-2004
              </div>
              <div>
                <span className="text-foreground font-medium">Languages:</span> Urdu and English
              </div>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in delay-200">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-2xl" />
              <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden relative shadow-card">
                <img 
                  src={profilePicture} 
                  alt="Maira Khan" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Floating accent shapes */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full animate-pulse" />
              <div className="absolute -bottom-2 -left-6 w-12 h-12 border-2 border-accent rounded-full" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#education" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
