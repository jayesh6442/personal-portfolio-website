"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function SaaSProductSection() {
  const saasSectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const titleElement = titleRef.current;
    const descriptionElement = descriptionRef.current;
    const contentElement = contentRef.current;
    const features = Array.from(featuresRef.current?.children || []) as HTMLElement[];
    let animationContext: gsap.Context | null = null;

    // Set initial state
    if (titleElement) {
      gsap.set(titleElement, { opacity: 0, y: 30 });
    }
    if (descriptionElement) {
      gsap.set(descriptionElement, { opacity: 0, y: 20 });
    }
    if (contentElement) {
      gsap.set(contentElement, { opacity: 0, y: 30 });
    }
    features.forEach((feature) => {
      gsap.set(feature, { opacity: 0, y: 20 });
    });

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

              if (contentElement) {
                gsap.to(contentElement, {
                  opacity: 1,
                  y: 0,
                  duration: 0.8,
                  ease: "power3.out",
                  delay: 0.4,
                });
              }

              gsap.to(features, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power3.out",
                delay: 0.6,
                stagger: 0.1,
              });
            });

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    if (saasSectionRef.current) {
      observer.observe(saasSectionRef.current);
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
      ref={saasSectionRef}
      id="saas-product"
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
            My SaaS Product
          </h2>
          <p
            ref={descriptionRef}
            className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-sans"
          >
            Showcase your AI chatbot to the world or discover powerful bots tailored for various needs. Connect, interact, and experience the future of AI-driven conversations.
          </p>
        </div>

        {/* Product Content */}
        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Side - Product Info */}
          <div>
            <div className="mb-6">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-900 font-sans">
                OneClickAgents
              </h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed font-sans mb-6">
                Turn your LinkedIn profile, website, or knowledge into a 24/7 Conversational AI Agent that works for you responding, connecting, and converting in real time. No code. No delays. Just OneClick.
              </p>
            </div>

            {/* Project Highlights */}
            <div ref={featuresRef} className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#ff6b35]/10 flex items-center justify-center shrink-0">
                  <span className="text-[#ff6b35] font-bold text-xl font-sans">24/7</span>
                </div>
                <div>
                  <h4 className="text-gray-900 font-semibold mb-1 font-sans">AI Automation</h4>
                  <p className="text-gray-600 text-sm font-sans">Round-the-clock customer support</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#ff6b35]/10 flex items-center justify-center shrink-0">
                  <span className="text-[#ff6b35] font-bold text-xl font-sans">∞</span>
                </div>
                <div>
                  <h4 className="text-gray-900 font-semibold mb-1 font-sans">Unifying Chatbots</h4>
                  <p className="text-gray-600 text-sm font-sans">Connect all your communication channels</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#ff6b35]/10 flex items-center justify-center shrink-0">
                  <span className="text-[#ff6b35] font-bold text-xl font-sans">⚡</span>
                </div>
                <div>
                  <h4 className="text-gray-900 font-semibold mb-1 font-sans">Seamless Integrations</h4>
                  <p className="text-gray-600 text-sm font-sans">Works with your existing tools</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="bg-[#ff6b35] hover:bg-[#ff7a4a] text-white px-8 py-3.5 rounded-lg font-medium transition-all duration-200 shadow-lg shadow-orange-500/20 font-sans hover:scale-105 active:scale-95"
              >
                Try OneClickAgents
              </a>
              <a
                href="#"
                className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3.5 rounded-lg font-medium transition-all duration-200 font-sans hover:scale-105 active:scale-95"
              >
                Create Your Agent
              </a>
            </div>
          </div>

          {/* Right Side - Product Image/Preview */}
          <div className="bg-gray-100 rounded-xl p-8 border border-gray-200">
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-400 mx-auto mb-4"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
                <p className="text-gray-500 font-sans">Product Preview</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
