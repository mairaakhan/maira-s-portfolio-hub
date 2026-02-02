import { Button } from "@/components/ui/button";
import { Mail, Linkedin, MapPin, Phone, ArrowUpRight, Palette } from "lucide-react";
import ScrollReveal from "@/components/ui/scroll-reveal";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-background/80 backdrop-blur-sm">
      <div className="container-tight">
        <ScrollReveal>
          <div className="relative p-6 sm:p-8 md:p-12 lg:p-16 rounded-3xl bg-gradient-to-br from-primary to-primary/90 dark:from-primary dark:to-primary/80 text-primary-foreground overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 md:w-48 h-32 md:h-48 bg-white/5 rounded-full blur-2xl" />
            
            <div className="relative z-10 space-y-6 md:space-y-8">
              {/* Header */}
              <div className="space-y-3 md:space-y-4">
                <span className="text-primary-foreground/70 font-medium tracking-wide uppercase text-xs sm:text-sm">
                  Get in Touch
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-semibold text-primary-foreground">
                  Let's work together
                </h2>
                <p className="text-base sm:text-lg text-primary-foreground/70 max-w-lg">
                  I'm always excited to connect with fellow developers, designers, 
                  and anyone interested in creating amazing digital experiences.
                </p>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                <a 
                  href="tel:03082246473"
                  className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-colors group"
                >
                  <div className="p-2 md:p-3 bg-white/20 rounded-lg shrink-0">
                    <Phone className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs md:text-sm text-primary-foreground/60">Phone</p>
                    <p className="font-medium text-primary-foreground text-sm md:text-base truncate">03082246473</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                </a>

                <a 
                  href="mailto:mairaakhaanx@gmail.com"
                  className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-colors group"
                >
                  <div className="p-2 md:p-3 bg-white/20 rounded-lg shrink-0">
                    <Mail className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs md:text-sm text-primary-foreground/60">Email</p>
                    <p className="font-medium text-primary-foreground text-sm md:text-base truncate">mairaakhaanx@gmail.com</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                </a>

                <a 
                  href="https://www.linkedin.com/in/maira-khan-083517324"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-colors group"
                >
                  <div className="p-2 md:p-3 bg-white/20 rounded-lg shrink-0">
                    <Linkedin className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs md:text-sm text-primary-foreground/60">LinkedIn</p>
                    <p className="font-medium text-primary-foreground text-sm md:text-base truncate">Maira Khan</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                </a>

                <a 
                  href="https://www.behance.net/mairakhan21"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-colors group"
                >
                  <div className="p-2 md:p-3 bg-white/20 rounded-lg shrink-0">
                    <Palette className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs md:text-sm text-primary-foreground/60">Behance</p>
                    <p className="font-medium text-primary-foreground text-sm md:text-base truncate">mairakhan21</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                </a>

                <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-white/10 sm:col-span-2">
                  <div className="p-2 md:p-3 bg-white/20 rounded-lg shrink-0">
                    <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs md:text-sm text-primary-foreground/60">Location</p>
                    <p className="font-medium text-primary-foreground text-sm md:text-base">Karachi, 74600</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-2 md:pt-4">
                <Button size="lg" asChild className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 w-full sm:w-auto">
                  <a href="mailto:mairaakhaanx@gmail.com">
                    <Mail className="w-4 h-4" />
                    Send me an email
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactSection;
