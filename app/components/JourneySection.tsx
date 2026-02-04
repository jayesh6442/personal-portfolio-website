"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function JourneySection() {
  const [activePeriod, setActivePeriod] = useState("Present");
  const journeySectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const titleElement = titleRef.current;
    const descriptionElement = descriptionRef.current;
    const timelineElement = timelineRef.current;
    const contentElement = contentRef.current;
    let animationContext: gsap.Context | null = null;

    // Set initial state
    if (titleElement) {
      gsap.set(titleElement, { opacity: 0, y: 30 });
    }
    if (descriptionElement) {
      gsap.set(descriptionElement, { opacity: 0, y: 20 });
    }
    if (timelineElement) {
      gsap.set(timelineElement, { opacity: 0, y: 20 });
    }
    if (contentElement) {
      gsap.set(contentElement, { opacity: 0, y: 30 });
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animationContext = gsap.context(() => {
              if (titleElement) {
                gsap.to(titleElement, {
                  opacity: 1,
                  y: 0,
                  duration: 0.8,
                  ease: "power3.out",
                });
              }

              if (descriptionElement) {
                gsap.to(descriptionElement, {
                  opacity: 1,
                  y: 0,
                  duration: 0.8,
                  ease: "power3.out",
                  delay: 0.2,
                });
              }

              if (timelineElement) {
                gsap.to(timelineElement, {
                  opacity: 1,
                  y: 0,
                  duration: 0.8,
                  ease: "power3.out",
                  delay: 0.4,
                });
              }

              if (contentElement) {
                gsap.to(contentElement, {
                  opacity: 1,
                  y: 0,
                  duration: 0.8,
                  ease: "power3.out",
                  delay: 0.6,
                });
              }
            });

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    if (journeySectionRef.current) {
      observer.observe(journeySectionRef.current);
    }

    return () => {
      observer.disconnect();
      if (animationContext) {
        animationContext.revert();
      }
    };
  }, []);

  const journeyPeriods = [
    {
      year: "Present",
      title: "Team Leadership",
      description: "Today, I'm a full-time freelancer and founder of a growing tech team, delivering scalable systems, automation, and web solutions globally.",
    },
    {
      year: "2023",
      title: "Independent Path",
      description: "Started my journey as an independent developer, focusing on building scalable systems and automation solutions for clients worldwide.",
    },
    {
      year: "2022",
      title: "Professional Growth",
      description: "Expanded expertise in full-stack development, working on complex projects involving React, Node.js, and cloud infrastructure.",
    },
    {
      year: "2020",
      title: "The Beginning",
      description: "Started my journey in software development, learning the fundamentals and building my first projects.",
    },
  ];

  const activePeriodData = journeyPeriods.find((p) => p.year === activePeriod) || journeyPeriods[0];

  return (
    <section
      ref={journeySectionRef}
      id="journey"
      className="min-h-screen flex items-center justify-center py-16 md:py-24 px-6 md:px-12 lg:px-16 relative bg-white"
      style={{ scrollMarginTop: '80px' }}
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            ref={titleRef}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 font-sans"
          >
            My Journey
          </h2>
          <p
            ref={descriptionRef}
            className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-sans"
          >
            The path that led me from a curious beginner to founding my own tech team
          </p>
        </div>

        {/* Timeline Navigation */}
        <div ref={timelineRef} className="mb-12 flex flex-wrap justify-center gap-4">
          {journeyPeriods.map((period) => {
            const isActive = activePeriod === period.year;
            return (
              <button
                key={period.year}
                onClick={() => setActivePeriod(period.year)}
                className={`px-6 py-3 rounded-lg font-semibold font-sans transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-[#ff6b35] via-[#ff7a4a] to-[#ff6b35] text-white shadow-lg shadow-orange-500/30"
                    : "bg-gray-100 text-gray-700 hover:text-gray-900 hover:bg-gray-200"
                }`}
              >
                {period.year}
              </button>
            );
          })}
        </div>

        {/* Active Period Content */}
        <div
          ref={contentRef}
          className="bg-white rounded-xl p-8 md:p-12 border border-gray-200 shadow-sm"
        >
          <div className="mb-4">
            <span className="text-[#ff6b35] font-semibold font-sans text-sm md:text-base">
              {activePeriodData.year}
            </span>
          </div>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-gray-900 font-sans">
            {activePeriodData.title}
          </h3>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed font-sans max-w-3xl">
            {activePeriodData.description}
          </p>
        </div>
      </div>
    </section>
  );
}
