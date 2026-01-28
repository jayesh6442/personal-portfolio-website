"use client";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import SolutionsSection from "./components/SolutionsSection";
import SkillsSection from "./components/SkillsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1a0d2e] text-white">
      <Header />
      <HeroSection />
      <SolutionsSection />
      <SkillsSection />
    </div>
  );
}
