import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import HeroSection  from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import FocusSection from "@/components/sections/FocusSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#050914] text-white">
      <Header />

      <HeroSection />
      <AboutSection />
      <FocusSection />
    
      <SkillsSection />
      <ProjectsSection />
      <AchievementsSection />
      <ContactSection />

      <Footer />
    </main>
  );
}