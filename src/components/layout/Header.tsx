import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#education", label: "Education" },
    { href: "#experience", label: "Experience" },
    { href: "#certifications", label: "Certifications" },
    { href: "#skills", label: "Skills" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/80 backdrop-blur-lg shadow-soft" 
          : "bg-transparent"
      }`}
    >
      <nav className="container-wide mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="text-xl font-display font-semibold text-foreground">
            MK<span className="text-accent">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button variant="outline" size="sm" asChild>
              <a href="#contact">Hire Me</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button variant="outline" className="w-fit mt-4" asChild>
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Hire Me
                </a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
