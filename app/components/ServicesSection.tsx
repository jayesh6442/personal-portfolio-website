"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function ServicesSection() {
  const servicesSectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const titleElement = titleRef.current;
    const descriptionElement = descriptionRef.current;
    const buttonElement = buttonRef.current;
    let animationContext: gsap.Context | null = null;

    // Set initial state
    if (titleElement) {
      gsap.set(titleElement, { opacity: 0, y: 30 });
    }
    if (descriptionElement) {
      gsap.set(descriptionElement, { opacity: 0, y: 20 });
    }
    if (buttonElement) {
      gsap.set(buttonElement, { opacity: 0, y: 20 });
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animationContext = gsap.context(() => {
              // Title animation
              if (titleElement) {
                gsap.to(titleElement, {
                  opacity: 1,
                  y: 0,
                  duration: 0.8,
                  ease: "power3.out",
                });
              }

              // Description animation
              if (descriptionElement) {
                gsap.to(descriptionElement, {
                  opacity: 1,
                  y: 0,
                  duration: 0.8,
                  ease: "power3.out",
                  delay: 0.2,
                });
              }

              // Button animation
              if (buttonElement) {
                gsap.to(buttonElement, {
                  opacity: 1,
                  y: 0,
                  duration: 0.6,
                  ease: "power3.out",
                  delay: 0.4,
                });
              }
            });

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    if (servicesSectionRef.current) {
      observer.observe(servicesSectionRef.current);
    }

    return () => {
      observer.disconnect();
      if (animationContext) {
        animationContext.revert();
      }
    };
  }, []);

  return (
    <section
      ref={servicesSectionRef}
      id="services"
      className="flex items-center justify-center py-16 md:py-24 px-6 md:px-12 lg:px-16 relative"
    >
      <div className="max-w-4xl mx-auto w-full text-center relative z-10">
        {/* Main Heading */}
        <h2
          ref={titleRef}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white italic font-sans"
        >
          Servies I Provide
        </h2>

        {/* Description Text - Two lines */}
        <p
          ref={descriptionRef}
          className="text-base md:text-lg lg:text-xl text-white/90 italic mb-8 leading-relaxed font-sans max-w-3xl mx-auto"
        >
          I design and build custom websites that are fast, modern, and user-friendly. As a Full Stack Developer, I handle everything from frontend to backend.
        </p>

        {/* Orange Button */}
        <a
          ref={buttonRef}
          href="tel:+919724268523"
          className="bg-[#ff6b35] hover:bg-[#ff7a4a] text-white px-8 py-4 rounded-lg font-medium transition-all duration-200 shadow-lg shadow-orange-500/20 font-sans text-base md:text-lg hover:scale-105 active:scale-95"
        >
          Schedule Call Today
        </a>
      </div>

      {/* Thin white horizontal line at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/20"></div>
    </section>
  );
}
