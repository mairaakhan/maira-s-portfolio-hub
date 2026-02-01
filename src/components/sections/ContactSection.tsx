import { Button } from "@/components/ui/button";
import { Mail, Linkedin, MapPin, Phone, ArrowUpRight, Palette } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container-tight">
        <div className="relative p-8 md:p-12 lg:p-16 rounded-3xl bg-gradient-to-br from-accent to-accent/80 text-accent-foreground overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
          
          <div className="relative z-10 space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <span className="text-white/80 font-medium tracking-wide uppercase text-sm">
                Get in Touch
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-semibold text-white">
                Let's work together
              </h2>
              <p className="text-lg text-white/80 max-w-lg">
                I'm always excited to connect with fellow developers, designers, 
                and anyone interested in creating amazing digital experiences.
              </p>
            </div>

            {/* Contact Info */}
            <div className="grid md:grid-cols-2 gap-4">
              <a 
                href="tel:03082246473"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-colors group"
              >
                <div className="p-3 bg-white/20 rounded-lg">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-white/60">Phone</p>
                  <p className="font-medium text-white">03082246473</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <a 
                href="mailto:mairaakhaanx@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-colors group"
              >
                <div className="p-3 bg-white/20 rounded-lg">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-white/60">Email</p>
                  <p className="font-medium text-white">mairaakhaanx@gmail.com</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <a 
                href="https://www.linkedin.com/in/maira-khan-083517324"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-colors group"
              >
                <div className="p-3 bg-white/20 rounded-lg">
                  <Linkedin className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-white/60">LinkedIn</p>
                  <p className="font-medium text-white">Maira Khan</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <a 
                href="https://www.behance.net/mairakhan21"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-colors group"
              >
                <div className="p-3 bg-white/20 rounded-lg">
                  <Palette className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-white/60">Behance</p>
                  <p className="font-medium text-white">mairakhan21</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/10 md:col-span-2">
                <div className="p-3 bg-white/20 rounded-lg">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-white/60">Location</p>
                  <p className="font-medium text-white">Karachi, 74600</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Button size="lg" asChild className="bg-white text-accent hover:bg-white/90">
                <a href="mailto:mairaakhaanx@gmail.com">
                  <Mail className="w-4 h-4" />
                  Send me an email
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
