"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SocialIcons from "./SocialIcons";

export default function HeroSection() {
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const heroDescriptionRef = useRef<HTMLParagraphElement>(null);
  const heroButtonsRef = useRef<HTMLDivElement>(null);
  const largeTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroButtonsRef.current) return;

    const buttons = Array.from(heroButtonsRef.current.children) as HTMLElement[];
    
    // Store ref values to avoid stale closures
    const titleElement = heroTitleRef.current;
    const descriptionElement = heroDescriptionRef.current;
    const largeTextElement = largeTextRef.current;
    
    // Set initial state to visible for all elements
    if (titleElement) {
      gsap.set(titleElement, { opacity: 1, visibility: "visible" });
    }
    if (descriptionElement) {
      gsap.set(descriptionElement, { opacity: 1, visibility: "visible" });
    }
    buttons.forEach((button) => {
      gsap.set(button, { opacity: 1, visibility: "visible" });
    });
    if (largeTextElement) {
      gsap.set(largeTextElement, { opacity: 1, visibility: "visible" });
    }

    const ctx = gsap.context(() => {
      // Hero title animation - fade in and slide up
      if (titleElement) {
        gsap.from(titleElement, {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power3.out",
          delay: 0.2,
          onComplete: () => {
            if (titleElement) {
              gsap.set(titleElement, { opacity: 1, visibility: "visible" });
            }
          },
        });
      }

      // Description animation
      if (descriptionElement) {
        gsap.from(descriptionElement, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.5,
          onComplete: () => {
            if (descriptionElement) {
              gsap.set(descriptionElement, { opacity: 1, visibility: "visible" });
            }
          },
        });
      }

      // Buttons animation - ensure they stay visible
      gsap.from(buttons, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power3.out",
        delay: 0.8,
        stagger: 0.1,
        onComplete: () => {
          // Ensure buttons stay visible after animation completes
          buttons.forEach((button) => {
            gsap.set(button, { opacity: 1, visibility: "visible" });
          });
        },
      });

      // Large text animation - fade in slowly
      if (largeTextElement) {
        gsap.from(largeTextElement, {
          opacity: 0,
          duration: 1.2,
          ease: "power2.out",
          delay: 0.4,
          onComplete: () => {
            if (largeTextElement) {
              gsap.set(largeTextElement, { opacity: 1, visibility: "visible" });
            }
          },
        });
      }
    });

    return () => {
      // Cleanup but keep elements visible
      if (titleElement) {
        gsap.set(titleElement, { opacity: 1, visibility: "visible" });
      }
      if (descriptionElement) {
        gsap.set(descriptionElement, { opacity: 1, visibility: "visible" });
      }
      buttons.forEach((button) => {
        gsap.set(button, { opacity: 1, visibility: "visible" });
      });
      if (largeTextElement) {
        gsap.set(largeTextElement, { opacity: 1, visibility: "visible" });
      }
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen flex flex-col overflow-hidden bg-[#1a0d2e]"
    >
      <div className="relative flex-1 flex items-center px-6 md:px-12 lg:px-16 pt-20">
        {/* Left Content */}
        <div className="flex-1 max-w-2xl z-20 flex flex-col justify-center py-8 relative">
          {/* Tagline */}
          <h1
            ref={heroTitleRef}
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-mono font-bold leading-[1.1] mb-6 italic tracking-[-0.02em] text-white"
          >
            <span className="block">I Build Scalable Systems,</span>
            <span className="block">Automate Workflows and</span>
            <span className="block">Deliver Seamless</span>
            <span className="block">User Experiences.</span>
          </h1>

          {/* Description */}
          <p
            ref={heroDescriptionRef}
            className="text-sm md:text-base lg:text-lg text-gray-300 mb-8 leading-[1.6] max-w-xl font-sans tracking-normal"
          >
            Leveraging full-stack expertise to deliver fast, reliable, and
            scalable solutions.
          </p>

          {/* CTA Buttons */}
          <div
            ref={heroButtonsRef}
            className="flex flex-col sm:flex-row gap-4 items-start sm:items-center relative z-20"
            style={{ visibility: "visible" }}
          >
            <button 
              className="bg-[#ff6b35] hover:bg-[#ff7a4a] text-white px-8 py-3.5 rounded-lg font-medium transition-all duration-200 shadow-lg shadow-orange-500/20 font-sans text-base leading-normal tracking-normal hover:scale-105 active:scale-95"
              style={{ opacity: 1, visibility: "visible" }}
            >
              Get in Touch
            </button>
            <button 
              className="border-2 border-[#ff6b35] text-white hover:bg-[#ff6b35]/10 px-8 py-3.5 rounded-lg font-medium transition-all duration-200 font-sans text-base leading-normal tracking-normal hover:scale-105 active:scale-95"
              style={{ opacity: 1, visibility: "visible" }}
            >
              View Portfolio
            </button>
          </div>
        </div>

        {/* Right Side - Social Icons and Large Text */}
        <div className="hidden lg:block absolute right-12 xl:right-16 top-0 bottom-0 w-auto z-30 pointer-events-none">
          {/* Social Media Icons */}
          <SocialIcons />

          {/* Large Text - Full Stack Developer */}
          <div className="absolute bottom-4 right-0 text-right max-h-[60vh] overflow-hidden">
            <div
              ref={largeTextRef}
              className="text-5xl xl:text-6xl 2xl:text-7xl font-mono font-bold leading-[0.9] text-white/10 select-none pointer-events-none tracking-[-0.03em]"
            >
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
  );
}
