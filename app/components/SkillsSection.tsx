"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

// Mapping of skill names to their Simple Icons SVG URLs
const skillLogos: Record<string, string> = {
  // Languages
  Python: "https://cdn.simpleicons.org/python",
  JavaScript: "https://cdn.simpleicons.org/javascript",
  Java: "https://cdn.simpleicons.org/java",
  TypeScript: "https://cdn.simpleicons.org/typescript",
  Go: "https://cdn.simpleicons.org/go",
  // Frameworks
  Express: "https://cdn.simpleicons.org/express",
  "Next.js": "https://cdn.simpleicons.org/nextdotjs",
  Django: "https://cdn.simpleicons.org/django",
  Spring: "https://cdn.simpleicons.org/spring",
  React: "https://cdn.simpleicons.org/react",
  Vue: "https://cdn.simpleicons.org/vuedotjs",
  // Databases
  PostgreSQL: "https://cdn.simpleicons.org/postgresql",
  MongoDB: "https://cdn.simpleicons.org/mongodb",
  Redis: "https://cdn.simpleicons.org/redis",
  MySQL: "https://cdn.simpleicons.org/mysql",
  // Deployments
  Docker: "https://cdn.simpleicons.org/docker",
  Kubernetes: "https://cdn.simpleicons.org/kubernetes",
  AWS: "https://cdn.simpleicons.org/amazonaws",
  "Github Actions": "https://cdn.simpleicons.org/githubactions", Jenkins: "https://cdn.simpleicons.org/jenkins",
  "Argo CD": "https://cdn.simpleicons.org/argo",
};

export default function SkillsSection() {
  const skillsSectionRef = useRef<HTMLElement>(null);
  const skillsTitleRef = useRef<HTMLHeadingElement>(null);
  const skillsDescriptionRef = useRef<HTMLParagraphElement>(null);
  const skillCategoriesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const titleElement = skillsTitleRef.current;
    const descriptionElement = skillsDescriptionRef.current;
    const categories = Array.from(skillCategoriesRef.current?.children || []) as HTMLElement[];
    let animationContext: gsap.Context | null = null;

    // Set initial state
    if (titleElement) {
      gsap.set(titleElement, { opacity: 0, y: 30 });
    }
    if (descriptionElement) {
      gsap.set(descriptionElement, { opacity: 0, y: 20 });
    }
    categories.forEach((category) => {
      gsap.set(category, { opacity: 0, y: 30 });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animationContext = gsap.context(() => {
              // Skills section animations
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

              // Animate skill categories with stagger
              gsap.to(categories, {
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

    if (skillsSectionRef.current) {
      observer.observe(skillsSectionRef.current);
    }

    return () => {
      observer.disconnect();
      if (animationContext) {
        animationContext.revert();
      }
    };
  }, []);

  const skillCategories = [
    {
      title: "Programming languages:",
      skills: ["Python", "JavaScript", "Java", "TypeScript", "Go"],
    },
    {
      title: "Frameworks",
      skills: ["Express", "Next.js", "Django", "Spring", "React", "Vue"],
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL"],
    },
    {
      title: "Deployments",
      skills: [
        "Docker",
        "Kubernetes",
        "AWS",
        "Github Actions",
        "Jenkins",
        "Argo CD",
      ],
    },
  ];

  return (
    <section
      ref={skillsSectionRef}
      id="technology"
      className="min-h-screen bg-[#1a0d2e] flex items-center justify-center px-6 md:px-12 lg:px-16 py-16"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            ref={skillsTitleRef}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white font-sans"
          >
            Skills You Looking For
          </h2>
          <p
            ref={skillsDescriptionRef}
            className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed font-sans"
          >
            A dynamic mix of technical expertise and creative problem-solving,
            sharpened through hands-on projects and real-world experience.
          </p>
        </div>

        {/* Skills Categories */}
        <div ref={skillCategoriesRef} className="space-y-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-4">
              <h3 className="text-white text-lg md:text-xl font-semibold font-sans">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => {
                  const logoUrl = skillLogos[skill];
                  return (
                    <button
                      key={skillIndex}
                      className="bg-[#ff6b35] hover:bg-[#ff7a4a] text-white px-5 py-2.5 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 font-sans text-sm md:text-base hover:scale-105 active:scale-95 shadow-lg shadow-orange-500/20"
                    >
                      {logoUrl ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={logoUrl}
                          alt={`${skill} logo`}
                          width={20}
                          height={20}
                          className="w-5 h-5 object-contain"
                          // style={{ filter: "brightness(0) invert(1)" }}
                          loading="lazy"
                        />
                      ) : (
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
                      {skill}
                    </button>
                  );
                })}
              </div>
              {categoryIndex < skillCategories.length - 1 && (
                <div className="border-t border-white/20 mt-6"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
