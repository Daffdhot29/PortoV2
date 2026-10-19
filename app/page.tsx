import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div id="home">
      <a className="skip-link" href="#main-content">Lewati ke konten utama</a><Header />
      <main id="main-content"><HeroSection /><ProjectsSection /><AboutSection /><ContactSection /></main>
      <Footer />
    </div>
  );
}
