"use client";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import SolutionsSection from "./components/SolutionsSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ServicesSection from "./components/ServicesSection";
import QualityServicesSection from "./components/QualityServicesSection";
import GradientBackground from "./components/GradientBackground";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen text-white relative overflow-x-hidden">
      <GradientBackground />
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <SkillsSection />
        <SolutionsSection />
        <ProjectsSection />
        <ServicesSection />
        <QualityServicesSection />
        <ContactSection/>
        <Footer/>
      </div>
    </div>
  );
}
