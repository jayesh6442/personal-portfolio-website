"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function SolutionsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const hasAnimatedRef = useRef(false);
  const animationContextRef = useRef<gsap.Context | null>(null);

  useEffect(() => {
    // Set initial state - elements should start invisible
    const titleElement = titleRef.current;
    const descriptionElement = descriptionRef.current;
    const cards = Array.from(cardsRef.current?.children || []) as HTMLElement[];

    // Set initial opacity to 0 for animation
    if (titleElement) {
      gsap.set(titleElement, { opacity: 0, y: 30 });
    }
    if (descriptionElement) {
      gsap.set(descriptionElement, { opacity: 0, y: 20 });
    }
    cards.forEach((card) => {
      gsap.set(card, { opacity: 0, y: 40 });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimatedRef.current) {
            hasAnimatedRef.current = true;

            // Clean up any existing context
            if (animationContextRef.current) {
              animationContextRef.current.revert();
            }

            // Create new animation context
            animationContextRef.current = gsap.context(() => {
              // Animate title
              if (titleElement) {
                gsap.to(titleElement, {
                  opacity: 1,
                  y: 0,
                  duration: 0.8,
                  ease: "power3.out",
                });
              }

              // Animate description
              if (descriptionElement) {
                gsap.to(descriptionElement, {
                  opacity: 1,
                  y: 0,
                  duration: 0.8,
                  ease: "power3.out",
                  delay: 0.2,
                });
              }

              // Animate cards
              gsap.to(cards, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",
                delay: 0.4,
                stagger: 0.15,
              });
            });

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      if (animationContextRef.current) {
        animationContextRef.current.revert();
      }
    };
  }, []);

  const solutions = [
    {
      bgColor: "bg-[#2d1b4e]",
      title: "MERN Stack Development",
      description: "End To End solution",
      features: [
        "React Based Front end",
        "Express based Backend",
        "Mongo DB",
        "Node.js",
      ],
    },
    {
      bgColor: "bg-[#3d2a5e]",
      title: "Full Stack Solutions",
      description: "Comprehensive development",
      features: [
        "Modern Frontend Frameworks",
        "RESTful API Design",
        "Database Architecture",
        "Cloud Integration",
      ],
    },
    {
      bgColor: "bg-[#4d3a6e]",
      title: "DevOps & Automation",
      description: "Streamlined workflows",
      features: [
        "CI/CD Pipelines",
        "Container Orchestration",
        "Infrastructure as Code",
        "Monitoring & Logging",
      ],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="min-h-screen flex items-center justify-center py-16 md:py-24 px-6 md:px-12 lg:px-16 relative"
      style={{ scrollMarginTop: '80px' }}
    >
      {/* Subtle top border for visual separation */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <div className="mb-12 md:mb-16">
          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-mono font-medium italic mb-6 tracking-tight text-white leading-[1.1]"
          >
            All Kind Of Coding Solution
          </h2>
          <p
            ref={descriptionRef}
            className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl font-sans"
          >
            The path that led me from a curious <em className="italic">beginner</em> to
            founding my own tech team
          </p>
        </div>

        {/* Cards Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`${solution.bgColor} rounded-xl p-6 md:p-8 text-white border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20`}
            >
              {/* Gear Icon */}
              <div className="mb-6">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-white"
                >
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m4.24-4.24l4.24-4.24" />
                </svg>
              </div>

              {/* Heading */}
              <h3 className="text-xl md:text-2xl font-bold mb-2 font-sans">
                {solution.title}
              </h3>
              <p className="text-gray-300 mb-6 font-sans text-sm md:text-base">
                {solution.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3 list-none">
                {solution.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-start gap-3 font-sans text-sm md:text-base group"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#ff6b35] flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="group-hover:text-white transition-colors">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
