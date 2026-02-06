"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function QualityServicesSection() {
  const qualityServicesSectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const titleElement = titleRef.current;
    const descriptionElement = descriptionRef.current;
    const cards = Array.from(cardsRef.current?.children || []) as HTMLElement[];
    let animationContext: gsap.Context | null = null;

    // Set initial state
    if (titleElement) {
      gsap.set(titleElement, { opacity: 0, y: 30 });
    }
    if (descriptionElement) {
      gsap.set(descriptionElement, { opacity: 0, y: 20 });
    }
    cards.forEach((card) => {
      gsap.set(card, { opacity: 0, y: 30 });
    });

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

              // Cards animation with stagger
              gsap.to(cards, {
                opacity: 1,
                y: 0,
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
      { threshold: 0.1, rootMargin: "50px" }
    );

    if (qualityServicesSectionRef.current) {
      observer.observe(qualityServicesSectionRef.current);
    }

    return () => {
      observer.disconnect();
      if (animationContext) {
        animationContext.revert();
      }
    };
  }, []);

  const services = [
    {
      bgColor: "bg-[#2d1b4e]",
      title: "Python Automation",
      description: "Streamline your business processes with custom Python automation scripts. From data processing to workflow automation, I build solutions that save time and reduce errors.",
      technologies: ["Python", "Selenium", "Pandas", "Automation"],
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
      ),
    },
    {
      bgColor: "bg-[#3d2a5e]",
      title: "AI Solutions",
      description: "Leverage artificial intelligence to transform your business. From machine learning models to intelligent chatbots, I deliver AI-powered solutions that drive innovation.",
      technologies: ["TensorFlow", "PyTorch", "OpenAI", "NLP"],
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <circle cx="8.5" cy="8.5" r="1.5" />
          <polyline points="21 15 16 10 5 21" />
        </svg>
      ),
    },
    {
      bgColor: "bg-[#4d3a6e]",
      title: "Web Development",
      description: "Build modern, scalable web applications from scratch. Full-stack development services including frontend, backend, and database design for complete digital solutions.",
      technologies: ["React", "Next.js", "Node.js", "PostgreSQL"],
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
          <line x1="12" y1="22.08" x2="12" y2="12" />
        </svg>
      ),
    },
  ];

  return (
    <section
      ref={qualityServicesSectionRef}
      id="quality-services"
      className="flex items-center justify-center py-16 md:py-24 px-6 md:px-12 lg:px-16 relative"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Header Section - Left Aligned */}
        <div className="mb-8 md:mb-12 text-left">
          <h2
            ref={titleRef}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white font-sans"
          >
            My Quality Services
          </h2>
          
          <p
            ref={descriptionRef}
            className="text-base md:text-lg text-gray-300 italic leading-relaxed font-sans max-w-3xl"
          >
            Unlock the Power of Python and AI for Your Business. From automation to web development,<br />
            I offer tailored solutions that drive efficiency and innovation.
          </p>
        </div>

        {/* Services Cards Grid - 3 cards in one row */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <article
              key={index}
              className={`${service.bgColor} rounded-xl p-6 md:p-8 text-white border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 flex flex-col`}
              style={{ minHeight: "400px" }}
            >
              {/* Service Icon */}
              <div className="mb-6">
                {service.icon}
              </div>

              {/* Service Title */}
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-white font-sans">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-gray-300 mb-6 font-sans text-sm md:text-base leading-relaxed grow">
                {service.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {service.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="flex items-center gap-2 bg-[#ff6b35]/20 text-[#ff6b35] px-3 py-1.5 rounded-md text-xs md:text-sm font-medium font-sans border border-[#ff6b35]/30 group"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="group-hover:scale-110 transition-transform"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Thin white horizontal line at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10"></div>
    </section>
  );
}
