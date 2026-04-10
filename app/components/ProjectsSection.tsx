"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

export default function ProjectsSection() {
  const projectsSectionRef = useRef<HTMLElement>(null);
  const projectsTitleRef = useRef<HTMLHeadingElement>(null);
  const projectsCardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const titleElement = projectsTitleRef.current;
    const cards = Array.from(projectsCardsRef.current?.children || []) as HTMLElement[];
    let animationContext: gsap.Context | null = null;

    // Set initial state
    if (titleElement) {
      gsap.set(titleElement, { opacity: 0, y: 30 });
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

    if (projectsSectionRef.current) {
      observer.observe(projectsSectionRef.current);
    }

    return () => {
      observer.disconnect();
      if (animationContext) {
        animationContext.revert();
      }
    };
  }, []);

  const projectsByCategory: Record<string, Array<{
    bgColor: string;
    title: string;
    description: string;
    technologies: string[];
    icon: React.ReactElement;
    imageSrc?: string;
    imageAlt?: string;
    githubLink?: string;
    liveLink?: string;
  }>> = {
    Frontend: [
      {
        bgColor: "bg-[#2d1b4e]",
        title: "Fastify E-Commerce Platform",
        description: "Modern e-commerce solution built with React and Next.js, featuring real-time inventory management, secure payment integration, and responsive design",
        technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
        imageSrc: "/projects/ecommerce-platform.svg",
        imageAlt: "E-commerce platform dashboard preview",
        githubLink: "https://github.com/jayesh6442/fastify-ecom",
        // liveLink: "https://ecommerce-demo.vercel.app",
        icon: (
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
        ),
      },
      {
        bgColor: "bg-[#3d2a5e]",
        title: "Matchx",
        description: "Matchx is stock exchange architecture builid on spring websocket and postgres it show case real world market situvation and ",
        technologies: ["Spring Boot", "Postgres", "Hibernate", "WebSocket"],
        imageSrc: "/projects/task-management.svg",
        imageAlt: "Task management board preview",
        githubLink: "https://github.com/jayesh6442/matchx",
        // liveLink: "https://task-management-demo.vercel.app",
        icon: (
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <path d="M9 11l3 3L22 4" />
            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
          </svg>
        ),
      },
      // {
      //   bgColor: "bg-[#4d3a6e]",
      //   title: "Analytics Dashboard",
      //   description: "Data visualization platform with interactive charts, real-time metrics, and comprehensive reporting capabilities",
      //   technologies: ["Vue.js", "D3.js", "Chart.js", "Webpack"],
      //   imageSrc: "/projects/analytics-dashboard.svg",
      //   imageAlt: "Analytics dashboard chart preview",
      //   githubLink: "https://github.com/username/analytics-dashboard",
      //   liveLink: "https://analytics-demo.vercel.app",
      //   icon: (
      //     <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
      //       <line x1="18" y1="20" x2="18" y2="10" />
      //       <line x1="12" y1="20" x2="12" y2="4" />
      //       <line x1="6" y1="20" x2="6" y2="14" />
      //     </svg>
      //   ),
      // },
      {
        bgColor: "bg-[#2d1b4e]",
        title: "Job Application Tracker",
        description: "This project is a job application tracker built using TurboRepo and Styled Components. It allows users to track their job applications, manage interviews, and stay organized throughout the job search process.",
        technologies: ["Next Js", "Postgres", "Express", "Docker"],
        imageSrc: "/projects/social-platform.svg",
        imageAlt: "Social platform feed preview",
        githubLink: "https://github.com/jayesh6442/job-application-tracker",
        // liveLink: "https://social-media-demo.vercel.app",
        icon: (
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
        ),
      },
    ],
    Backend: [
      // {
      //   bgColor: "bg-[#2d1b4e]",
      //   title: "API Gateway Service",
      //   description: "Microservices architecture with API gateway, authentication, rate limiting, and comprehensive monitoring",
      //   technologies: ["Go", "Express", "Docker", "Kubernetes"],
      //   imageSrc: "/projects/api-gateway.svg",
      //   imageAlt: "API gateway service architecture preview",
      //   githubLink: "https://github.com/username/api-gateway",
      //   liveLink: "https://api-gateway-demo.vercel.app",
      //   icon: (
      //     <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
      //       <circle cx="12" cy="12" r="10" />
      //       <line x1="2" y1="12" x2="22" y2="12" />
      //       <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      //     </svg>
      //   ),
      // },
      // {
      //   bgColor: "bg-[#3d2a5e]",
      //   title: "Payment Processing System",
      //   description: "Secure payment gateway with multi-currency support, fraud detection, and transaction management",
      //   technologies: ["Node.js", "PostgreSQL", "Redis", "Stripe API"],
      //   imageSrc: "/projects/payment-system.svg",
      //   imageAlt: "Payment processing analytics preview",
      //   githubLink: "https://github.com/username/payment-system",
      //   liveLink: "https://payment-processing-demo.vercel.app",
      //   icon: (
      //     <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
      //       <line x1="12" y1="1" x2="12" y2="23" />
      //       <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      //     </svg>
      //   ),
      // },
      {
        bgColor: "bg-[#4d3a6e]",
        title: "Real-time Chat Service",
        description: "Scalable messaging platform with WebSocket support, message queuing, and presence indicators",
        technologies: ["Node.js", "Express", "WebSocket", "Kafka"],
        imageSrc: "/projects/realtime-chat.svg",
        imageAlt: "Real-time chat interface preview",
        githubLink: "https://github.com/jayesh6442/websocket-turbo-repo",
        // liveLink: "https://chat-service-demo.vercel.app",
        icon: (
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        ),
      },
      // {
      //   bgColor: "bg-[#2d1b4e]",
      //   title: "Database Management System",
      //   description: "High-performance database solution with replication, sharding, and automated backup capabilities",
      //   technologies: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"],
      //   imageSrc: "/projects/database-system.svg",
      //   imageAlt: "Database cluster management preview",
      //   githubLink: "https://github.com/username/database-system",
      //   liveLink: "https://database-system-demo.vercel.app",
      //   icon: (
      //     <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
      //       <ellipse cx="12" cy="5" rx="9" ry="3" />
      //       <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      //       <path d="M21 5v14c0 1.66-4 3-9 3s-9-1.34-9-3V5" />
      //     </svg>
      //   ),
      // },
    ],
    // "ML/AI": [
    //   {
    //     bgColor: "bg-[#2d1b4e]",
    //     title: "Image Recognition System",
    //     description: "Deep learning model for image classification and object detection using convolutional neural networks",
    //     technologies: ["Python", "TensorFlow", "OpenCV", "PyTorch"],
    //     githubLink: "https://github.com/username/image-recognition",
    //     icon: (
    //       <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
    //         <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    //         <circle cx="8.5" cy="8.5" r="1.5" />
    //         <polyline points="21 15 16 10 5 21" />
    //       </svg>
    //     ),
    //   },
    //   {
    //     bgColor: "bg-[#3d2a5e]",
    //     title: "Natural Language Processor",
    //     description: "Advanced NLP system for sentiment analysis, text classification, and language understanding",
    //     technologies: ["Python", "NLTK", "spaCy", "Transformers"],
    //     githubLink: "https://github.com/username/nlp-system",
    //     icon: (
    //       <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
    //         <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    //         <line x1="9" y1="10" x2="15" y2="10" />
    //         <line x1="12" y1="7" x2="12" y2="13" />
    //       </svg>
    //     ),
    //   },
    //   {
    //     bgColor: "bg-[#4d3a6e]",
    //     title: "Recommendation Engine",
    //     description: "Machine learning-powered recommendation system with collaborative filtering and content-based approaches",
    //     technologies: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    //     githubLink: "https://github.com/username/recommendation-engine",
    //     icon: (
    //       <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
    //         <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    //       </svg>
    //     ),
    //   },
    //   {
    //     bgColor: "bg-[#2d1b4e]",
    //     title: "Predictive Analytics Platform",
    //     description: "Time series forecasting and predictive modeling system with automated feature engineering",
    //     technologies: ["Python", "XGBoost", "Prophet", "Jupyter"],
    //     githubLink: "https://github.com/username/predictive-analytics",
    //     icon: (
    //       <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
    //         <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    //       </svg>
    //     ),
    //   },
    // ],
  };

  const projects = Object.values(projectsByCategory).flat();

  return (
    <section
      ref={projectsSectionRef}
      id="projects"
      className="min-h-screen flex items-center justify-center py-16 md:py-24 px-6 md:px-12 lg:px-16 relative"
      style={{ scrollMarginTop: '80px' }}
    >
      {/* Subtle top border for visual separation */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <h3
            ref={projectsTitleRef}
            className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 text-white font-sans"
          >
            Some Of Projects
          </h3>
        </div>

        {/* Projects Grid - 4 cards in one row, vertical cards */}
        <div ref={projectsCardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <article
              key={index}
              className={`${project.bgColor} group rounded-xl p-6 md:p-8 text-white border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 flex flex-col overflow-hidden min-h-75 sm:min-h-80 md:min-h-90 lg:min-h-100`}
            >
              {/* Project Preview */}
              <div className="relative mb-4 overflow-hidden rounded-xl border border-white/15">
                <Image
                  src={project.imageSrc || "/projects/ecommerce-platform.svg"}
                  alt={project.imageAlt || `${project.title} preview`}
                  width={1200}
                  height={800}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/45 via-black/10 to-transparent"></div>
                <div className="absolute bottom-2 left-2 shrink-0 text-white scale-75 origin-bottom-left">
                  {project.icon}
                </div>
              </div>

              {/* Project Title */}
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-white font-sans shrink-0">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="text-gray-300 mb-4 font-sans text-sm md:text-base leading-relaxed grow min-h-0">
                {project.description}
              </p>

              {/* GitHub and Live Links */}
              {(project.githubLink || project.liveLink) && (
                <div className="flex flex-wrap gap-3 mb-4 shrink-0">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg text-sm font-medium font-sans border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
                    >
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
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                      GitHub
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-linear-to-r from-[#ff6b35] to-[#ff7a4a] hover:from-[#ff7a4a] hover:to-[#ff6b35] text-white px-4 py-2 rounded-lg text-sm font-medium font-sans border border-[#ff6b35]/50 hover:border-[#ff6b35] transition-all duration-300 hover:scale-105 shadow-lg shadow-orange-500/20"
                    >
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
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              )}

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 shrink-0">
                {project.technologies.map((tech, techIndex) => (
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
    </section>
  );
}
