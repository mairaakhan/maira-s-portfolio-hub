import { Button } from "@/components/ui/button";
import { ArrowDown, Linkedin, Mail, Phone, MapPin, Palette } from "lucide-react";
import { motion } from "framer-motion";
import profilePicture from "@/assets/profile-picture.jpeg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center section-padding relative overflow-hidden">
      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Decorative dot */}
              <div className="flex items-center gap-3">
                <motion.div 
                  className="w-3 h-3 rounded-full bg-accent"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <p className="text-foreground font-medium tracking-wide text-lg">
                  Hi, I'm Maira Khan
                </p>
              </div>
              
              {/* Bold Tagline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight">
                I craft digital experiences
                <br />
                with code & <span className="text-gradient italic">creativity</span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-lg">
                Software Engineer & UI/UX Designer building intuitive, 
                user-friendly applications that make an impact.
              </p>
              
              {/* Intro Text */}
              <div className="space-y-3 text-muted-foreground leading-relaxed text-base max-w-xl pt-2">
                <p>
                  A <span className="text-foreground font-medium">Software Engineering student</span> in my final year with expertise in frontend (React, JavaScript), backend (Node.js, Express, MongoDB), Python, and Java.
                </p>
                <p>
                  Passionate about <span className="text-foreground font-medium">UI/UX design</span> with 6 months of hands-on internship experience. Currently exploring <span className="text-foreground font-medium">AI tools</span> to build smarter, faster.
                </p>
              </div>
              
              {/* Contact Info */}
              <motion.div 
                className="flex flex-wrap gap-4 text-muted-foreground text-sm pt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
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
              </motion.div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
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
            </motion.div>

            {/* Personal Details */}
            <motion.div 
              className="flex flex-wrap gap-6 pt-4 text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div>
                <span className="text-foreground font-medium">Date of Birth:</span> 4-Feb-2004
              </div>
              <div>
                <span className="text-foreground font-medium">Languages:</span> Urdu and English
              </div>
            </motion.div>
          </div>

          {/* Profile Photo */}
          <motion.div 
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
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
              <motion.div 
                className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div 
                className="absolute -bottom-2 -left-6 w-12 h-12 border-2 border-accent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <a href="#education" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-accent transition-colors">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
