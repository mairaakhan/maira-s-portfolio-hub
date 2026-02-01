import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import EducationSection from "@/components/sections/EducationSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <EducationSection />
        <ExperienceSection />
        <CertificationsSection />
        <SkillsSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
