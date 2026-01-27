"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Home() {
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const heroDescriptionRef = useRef<HTMLParagraphElement>(null);
  const heroButtonsRef = useRef<HTMLDivElement>(null);
  const socialIconsRef = useRef<HTMLDivElement>(null);
  const largeTextRef = useRef<HTMLDivElement>(null);
  const skillsSectionRef = useRef<HTMLElement>(null);
  const skillsTitleRef = useRef<HTMLHeadingElement>(null);
  const skillsDescriptionRef = useRef<HTMLParagraphElement>(null);
  const skillCategoriesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero title animation - fade in and slide up
      gsap.from(heroTitleRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
      });

      // Description animation
      gsap.from(heroDescriptionRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.5,
      });

      // Buttons animation
      gsap.from(heroButtonsRef.current?.children || [], {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power3.out",
        delay: 0.8,
        stagger: 0.1,
      });

      // Social icons animation
      gsap.from(socialIconsRef.current?.children || [], {
        opacity: 0,
        x: 20,
        duration: 0.6,
        ease: "power3.out",
        delay: 0.6,
        stagger: 0.1,
      });

      // Large text animation - fade in slowly
      gsap.from(largeTextRef.current, {
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        delay: 0.4,
      });
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const ctx = gsap.context(() => {
              // Skills section animations
              gsap.from(skillsTitleRef.current, {
                opacity: 0,
                y: 30,
                duration: 0.8,
                ease: "power3.out",
              });

              gsap.from(skillsDescriptionRef.current, {
                opacity: 0,
                y: 20,
                duration: 0.8,
                ease: "power3.out",
                delay: 0.2,
              });

              // Animate skill categories with stagger
              gsap.from(skillCategoriesRef.current?.children || [], {
                opacity: 0,
                y: 30,
                duration: 0.6,
                ease: "power3.out",
                delay: 0.4,
                stagger: 0.15,
              });
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (skillsSectionRef.current) {
      observer.observe(skillsSectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#1a0d2e] text-white">
      {/* Header Navigation */}
      <header className="flex items-center justify-between px-6 py-6 md:px-12 lg:px-16">
        <div className="text-xl font-bold tracking-wide font-mono">Dev jayesh</div>
        <nav className="flex gap-6 md:gap-8 text-sm font-medium">
          <Link href="#home" className="hover:text-orange-500 transition-colors">Home</Link>
          <Link href="#about" className="hover:text-orange-500 transition-colors">About</Link>
          <Link href="#projects" className="hover:text-orange-500 transition-colors">Projects</Link>
          <Link href="#technology" className="hover:text-orange-500 transition-colors">Technology</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col overflow-hidden">
        <div className="relative flex-1 flex items-center px-6 md:px-12 lg:px-16">
        {/* Left Content */}
        <div className="flex-1 max-w-2xl z-20 flex flex-col justify-center py-8">
          {/* Tagline */}
          <h1 ref={heroTitleRef} className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-mono font-bold leading-[1.1] mb-6 italic tracking-[-0.02em] text-white">
            I Build Scalable Systems,
            <br />
            Automate Workflows and
            <br />
            Deliver Seamless
            <br />
            User Experiences.
          </h1>

          {/* Description */}
          <p ref={heroDescriptionRef} className="text-sm md:text-base lg:text-lg text-gray-300 mb-8 leading-[1.6] max-w-xl font-sans tracking-normal">
            Leveraging full-stack expertise to deliver fast, reliable, and scalable solutions.
          </p>

          {/* CTA Buttons */}
          <div ref={heroButtonsRef} className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <button className="bg-[#ff6b35] hover:bg-[#ff7a4a] text-white px-8 py-3.5 rounded-lg font-medium transition-all duration-200 shadow-lg shadow-orange-500/20 font-sans text-base leading-normal tracking-normal">
              Get in Touch
            </button>
            <button className="border-2 border-[#ff6b35] text-white hover:bg-[#ff6b35]/10 px-8 py-3.5 rounded-lg font-medium transition-all duration-200 font-sans text-base leading-normal tracking-normal">
              View Portfolio
            </button>
          </div>
        </div>

        {/* Right Side - Social Icons and Large Text */}
        <div className="hidden lg:block absolute right-12 xl:right-16 top-0 bottom-0 w-auto z-10">
          {/* Social Media Icons - Positioned in top-right */}
          <div ref={socialIconsRef} className="absolute top-16 right-0 flex flex-col gap-4 z-30">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:border-[#ff6b35] hover:text-[#ff6b35] transition-all duration-200 cursor-pointer"
              aria-label="LinkedIn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:border-[#ff6b35] hover:text-[#ff6b35] transition-all duration-200 cursor-pointer"
              aria-label="GitHub"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="mailto:contact@devjayesh.com"
              className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:border-[#ff6b35] hover:text-[#ff6b35] transition-all duration-200 cursor-pointer"
              aria-label="Email"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:border-[#ff6b35] hover:text-[#ff6b35] transition-all duration-200 cursor-pointer"
              aria-label="Twitter"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          </div>

          {/* Large Text - Full Stack Developer */}
          <div className="absolute bottom-4 right-0 text-right max-h-[60vh] overflow-hidden">
            <div ref={largeTextRef} className="text-5xl xl:text-6xl 2xl:text-7xl font-mono font-bold leading-[0.9] text-white/10 select-none pointer-events-none tracking-[-0.03em]">
              Full
              <br />
              Stack
              <br />
              Developer
            </div>
          </div>
        </div>
      </div>
      </section>

      {/* Coding Solutions Section */}
      <section className="bg-[#1a0d2e] py-16 md:py-24 px-6 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-mono font-medium italic mb-4 tracking-tight text-white leading-[1.1]">
              All Kind Of Coding Solution
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl font-sans">
              The path that led me from a curious <em className="italic">beginner</em> to founding my own tech team
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1 - Dark Purple */}
            <div className="bg-[#2d1b4e] rounded-xl p-6 md:p-8 text-white border border-white/10 hover:border-white/20 transition-all duration-300">
              {/* Gear Icon */}
              <div className="mb-6">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m4.24-4.24l4.24-4.24"/>
                </svg>
              </div>
              
              {/* Heading */}
              <h3 className="text-xl md:text-2xl font-bold mb-2 font-sans">Mern Stack Development</h3>
              <p className="text-gray-300 mb-6 font-sans text-sm md:text-base">End To End solution</p>
              
              {/* Features List */}
              <ul className="space-y-3">
                <li className="flex items-start gap-3 font-sans text-sm md:text-base">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white flex-shrink-0 mt-0.5">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>React Based Front end</span>
                </li>
                <li className="flex items-start gap-3 font-sans text-sm md:text-base">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white flex-shrink-0 mt-0.5">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Express based Backend</span>
                </li>
                <li className="flex items-start gap-3 font-sans text-sm md:text-base">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white flex-shrink-0 mt-0.5">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Mongo DB</span>
                </li>
                <li className="flex items-start gap-3 font-sans text-sm md:text-base">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white flex-shrink-0 mt-0.5">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Node.js</span>
                </li>
              </ul>
            </div>

            {/* Card 2 - Medium Purple */}
            <div className="bg-[#3d2a5e] rounded-xl p-6 md:p-8 text-white border border-white/10 hover:border-white/20 transition-all duration-300">
              {/* Gear Icon */}
              <div className="mb-6">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m4.24-4.24l4.24-4.24"/>
                </svg>
              </div>
              
              {/* Heading */}
              <h3 className="text-xl md:text-2xl font-bold mb-2 font-sans">Mern Stack Development</h3>
              <p className="text-gray-300 mb-6 font-sans text-sm md:text-base">End To End solution</p>
              
              {/* Features List */}
              <ul className="space-y-3">
                <li className="flex items-start gap-3 font-sans text-sm md:text-base">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white flex-shrink-0 mt-0.5">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>React Based Front end</span>
                </li>
                <li className="flex items-start gap-3 font-sans text-sm md:text-base">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white flex-shrink-0 mt-0.5">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Express based Backend</span>
                </li>
                <li className="flex items-start gap-3 font-sans text-sm md:text-base">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white flex-shrink-0 mt-0.5">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Mongo DB</span>
                </li>
                <li className="flex items-start gap-3 font-sans text-sm md:text-base">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white flex-shrink-0 mt-0.5">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Node.js</span>
                </li>
              </ul>
            </div>

            {/* Card 3 - Light Purple */}
            <div className="bg-[#4d3a6e] rounded-xl p-6 md:p-8 text-white border border-white/10 hover:border-white/20 transition-all duration-300">
              {/* Gear Icon */}
              <div className="mb-6">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m4.24-4.24l4.24-4.24"/>
                </svg>
              </div>
              
              {/* Heading */}
              <h3 className="text-xl md:text-2xl font-bold mb-2 font-sans">Mern Stack Development</h3>
              <p className="text-gray-300 mb-6 font-sans text-sm md:text-base">End To End solution</p>
              
              {/* Features List */}
              <ul className="space-y-3">
                <li className="flex items-start gap-3 font-sans text-sm md:text-base">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white flex-shrink-0 mt-0.5">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>React Based Front end</span>
                </li>
                <li className="flex items-start gap-3 font-sans text-sm md:text-base">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white flex-shrink-0 mt-0.5">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Express based Backend</span>
                </li>
                <li className="flex items-start gap-3 font-sans text-sm md:text-base">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white flex-shrink-0 mt-0.5">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Mongo DB</span>
                </li>
                <li className="flex items-start gap-3 font-sans text-sm md:text-base">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white flex-shrink-0 mt-0.5">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span>Node.js</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsSectionRef} className="bg-[#1a0d2e] h-screen flex items-center justify-center px-6 md:px-12 lg:px-16 py-16">
        <div className="max-w-6xl mx-auto w-full">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 ref={skillsTitleRef} className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white font-sans">
              Skills You Looking For
            </h2>
            <p ref={skillsDescriptionRef} className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed font-sans">
              A dynamic mix of technical expertise and creative problem-solving, sharpened through hands-on projects and real-world experience.
            </p>
          </div>

          {/* Skills Categories */}
          <div ref={skillCategoriesRef} className="space-y-8">
            {/* Programming Languages */}
            <div className="space-y-4">
              <h3 className="text-white text-lg font-medium font-sans">Programming languages:</h3>
              <div className="flex flex-wrap gap-3">
                <button className="bg-[#ff6b35] hover:bg-[#ff7a4a] text-white px-5 py-2.5 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 font-sans text-sm md:text-base">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9.585 2.568a2 2 0 0 1 1.414.586l8 8a2 2 0 0 1 0 2.828l-8 8a2 2 0 0 1-2.828-2.828L15.172 13l-6.586-6.586a2 2 0 0 1 0-2.828z"/>
                  </svg>
                  Python
                </button>
                <button className="bg-[#ff6b35] hover:bg-[#ff7a4a] text-white px-5 py-2.5 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 font-sans text-sm md:text-base">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  JavaScript
                </button>
                <button className="bg-[#ff6b35] hover:bg-[#ff7a4a] text-white px-5 py-2.5 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 font-sans text-sm md:text-base">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  Java
                </button>
              </div>
            </div>

            {/* Separator */}
            <div className="border-t border-white/20"></div>

            {/* Frameworks */}
            <div className="space-y-4">
              <h3 className="text-white text-lg font-medium font-sans">Frameworks</h3>
              <div className="flex flex-wrap gap-3">
                <button className="bg-[#ff6b35] hover:bg-[#ff7a4a] text-white px-5 py-2.5 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 font-sans text-sm md:text-base">
                  <span className="font-bold">ex</span>
                  Express
                </button>
                <button className="bg-[#ff6b35] hover:bg-[#ff7a4a] text-white px-5 py-2.5 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 font-sans text-sm md:text-base">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                  Turbo Repo
                </button>
                <button className="bg-[#ff6b35] hover:bg-[#ff7a4a] text-white px-5 py-2.5 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 font-sans text-sm md:text-base">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                  Next.js
                </button>
                <button className="bg-[#ff6b35] hover:bg-[#ff7a4a] text-white px-5 py-2.5 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 font-sans text-sm md:text-base">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  Django
                </button>
                <button className="bg-[#ff6b35] hover:bg-[#ff7a4a] text-white px-5 py-2.5 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 font-sans text-sm md:text-base">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  Spring
                </button>
              </div>
            </div>

            {/* Separator */}
            <div className="border-t border-white/20"></div>

            {/* Databases */}
            <div className="space-y-4">
              <h3 className="text-white text-lg font-medium font-sans">Databases</h3>
              <div className="flex flex-wrap gap-3">
                <button className="bg-[#ff6b35] hover:bg-[#ff7a4a] text-white px-5 py-2.5 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 font-sans text-sm md:text-base">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  Postgres
                </button>
                <button className="bg-[#ff6b35] hover:bg-[#ff7a4a] text-white px-5 py-2.5 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 font-sans text-sm md:text-base">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  Mongo DB
                </button>
                <button className="bg-[#ff6b35] hover:bg-[#ff7a4a] text-white px-5 py-2.5 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 font-sans text-sm md:text-base">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  Redis
                </button>
              </div>
            </div>

            {/* Separator */}
            <div className="border-t border-white/20"></div>

            {/* Deployments */}
            <div className="space-y-4">
              <h3 className="text-white text-lg font-medium font-sans">Deployments</h3>
              <div className="flex flex-wrap gap-3">
                <button className="bg-[#ff6b35] hover:bg-[#ff7a4a] text-white px-5 py-2.5 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 font-sans text-sm md:text-base">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  Docker
                </button>
                <button className="bg-[#ff6b35] hover:bg-[#ff7a4a] text-white px-5 py-2.5 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 font-sans text-sm md:text-base">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  Kubernetes
                </button>
                <button className="bg-[#ff6b35] hover:bg-[#ff7a4a] text-white px-5 py-2.5 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 font-sans text-sm md:text-base">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  AWS
                </button>
                <button className="bg-[#ff6b35] hover:bg-[#ff7a4a] text-white px-5 py-2.5 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 font-sans text-sm md:text-base">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  Github Actions
                </button>
                <button className="bg-[#ff6b35] hover:bg-[#ff7a4a] text-white px-5 py-2.5 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 font-sans text-sm md:text-base">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  Jenkins
                </button>
                <button className="bg-[#ff6b35] hover:bg-[#ff7a4a] text-white px-5 py-2.5 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 font-sans text-sm md:text-base">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  Argo CD
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
