"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonialsSectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);
  const testimonialContentRef = useRef<HTMLDivElement>(null);
  const isSwitchingRef = useRef(false);
  const hasInitializedSliderRef = useRef(false);
  const sliderDirectionRef = useRef<1 | -1>(1);

  useEffect(() => {
    const titleElement = titleRef.current;
    const testimonialElement = testimonialRef.current;
    let animationContext: gsap.Context | null = null;

    // Set initial state
    if (titleElement) {
      gsap.set(titleElement, { opacity: 0, y: 30 });
    }
    if (testimonialElement) {
      gsap.set(testimonialElement, { opacity: 0, y: 30 });
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

              if (testimonialElement) {
                gsap.to(testimonialElement, {
                  opacity: 1,
                  y: 0,
                  duration: 0.8,
                  ease: "power3.out",
                  delay: 0.2,
                });
              }
            });

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    if (testimonialsSectionRef.current) {
      observer.observe(testimonialsSectionRef.current);
    }

    return () => {
      observer.disconnect();
      if (animationContext) {
        animationContext.revert();
      }
    };
  }, []);

  const testimonials = [
    {
      quote: "Dev Jayesh has been an excellent person to work with—very knowledgeable and always displaying a 'can-do' attitude. He responded promptly, was open to new approaches, and I would recommend him to anyone looking for help in his specialty area.",
      author: "Vestcilic",
      rating: 5,
    },
    {
      quote: "Dev Jayesh delivered on all the requirements provided to him, completing the solution on time with satisfactory results. I would definitely work with him again in the future if needed.",
      author: "Client Name",
      rating: 5,
    },
    {
      quote: "Dev Jayesh had been a great professional, very quick in understanding the problem statements and most efficient in solving. A blend of Talent, Skill, Commitment, Quality and Ethics. Would definitely recommend and will look forward to work in future.",
      author: "Client Name",
      rating: 5,
    },
  ];

  const switchTestimonial = (nextIndex: number) => {
    if (nextIndex === currentTestimonial || isSwitchingRef.current) return;

    const contentElement = testimonialContentRef.current;
    if (!contentElement) {
      setCurrentTestimonial(nextIndex);
      return;
    }

    const totalTestimonials = testimonials.length;
    const forwardSteps = (nextIndex - currentTestimonial + totalTestimonials) % totalTestimonials;
    const backwardSteps = (currentTestimonial - nextIndex + totalTestimonials) % totalTestimonials;
    sliderDirectionRef.current = forwardSteps <= backwardSteps ? 1 : -1;

    isSwitchingRef.current = true;
    gsap.to(contentElement, {
      autoAlpha: 0,
      x: 10 * sliderDirectionRef.current,
      scale: 0.99,
      duration: 0.2,
      ease: "power2.inOut",
      overwrite: "auto",
      onComplete: () => {
        setCurrentTestimonial(nextIndex);
      },
    });
  };

  useEffect(() => {
    const contentElement = testimonialContentRef.current;
    if (!contentElement) return;

    if (!hasInitializedSliderRef.current) {
      hasInitializedSliderRef.current = true;
      return;
    }

    gsap.fromTo(
      contentElement,
      { autoAlpha: 0, x: -10 * sliderDirectionRef.current, scale: 0.99 },
      {
        autoAlpha: 1,
        x: 0,
        scale: 1,
        duration: 0.36,
        ease: "power3.out",
        overwrite: "auto",
        clearProps: "x,scale,visibility",
        onComplete: () => {
          isSwitchingRef.current = false;
        },
      }
    );
  }, [currentTestimonial]);

  const nextTestimonial = () => {
    switchTestimonial((currentTestimonial + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    switchTestimonial((currentTestimonial - 1 + testimonials.length) % testimonials.length);
  };

  const activeTestimonial = testimonials[currentTestimonial];

  return (
    <section
      ref={testimonialsSectionRef}
      id="testimonials"
      className="min-h-screen flex items-center justify-center py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-16 relative"
      style={{ scrollMarginTop: "80px" }}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="max-w-5xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-14">
          <h2
            ref={titleRef}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 text-white font-sans"
          >
            Client Testimonials
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed font-sans">
            Feedback from clients I partnered with across product engineering, APIs,
            and end-to-end platform delivery.
          </p>
        </div>

        {/* Testimonial Card */}
        <div
          ref={testimonialRef}
          className="relative rounded-2xl border border-white/15 bg-[#2d1b4e]/55 backdrop-blur-sm p-5 sm:p-7 md:p-10 shadow-xl shadow-black/25 overflow-hidden"
        >
          <div className="pointer-events-none absolute -top-8 -right-8 w-32 h-32 rounded-full bg-[#ff6b35]/10 blur-2xl"></div>
          <div className="pointer-events-none absolute -bottom-12 -left-12 w-40 h-40 rounded-full bg-[#7c3aed]/20 blur-3xl"></div>
          <div ref={testimonialContentRef} className="relative z-10">
            <div className="mb-4 text-[#ff6b35]">
              <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M7.17 6A5.001 5.001 0 0 0 3 10.9V18a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H7.2A3 3 0 0 1 10 8V6H7.17Zm9 0A5.001 5.001 0 0 0 12 10.9V18a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2h-2.8A3 3 0 0 1 19 8V6h-2.83Z" />
              </svg>
            </div>

            <p className="text-gray-100 text-base sm:text-lg md:text-xl leading-relaxed mb-8 font-sans">
              &quot;{activeTestimonial.quote}&quot;
            </p>

            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              {/* Author Info */}
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#ff6b35]/20 border border-[#ff6b35]/40 flex items-center justify-center">
                  <span className="text-[#ff6b35] font-bold text-sm sm:text-base font-sans">
                    {activeTestimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="text-white font-semibold font-sans text-sm sm:text-base">
                    {activeTestimonial.author}
                  </h4>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(activeTestimonial.rating)].map((_, index) => (
                      <svg
                        key={index}
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="text-[#ff6b35]"
                        aria-hidden="true"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>

              {/* Arrows */}
              <div className="flex items-center gap-2 sm:gap-3">
                <button
                  onClick={prevTestimonial}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/25 text-white hover:border-[#ff6b35]/80 hover:text-[#ff6b35] transition-colors duration-200 flex items-center justify-center"
                  aria-label="Previous testimonial"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/25 text-white hover:border-[#ff6b35]/80 hover:text-[#ff6b35] transition-colors duration-200 flex items-center justify-center"
                  aria-label="Next testimonial"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => switchTestimonial(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? "bg-[#ff6b35] w-8"
                      : "bg-white/25 hover:bg-white/40 w-2.5"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
