"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonialsSectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);

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

  // Animate testimonial change
  useEffect(() => {
    if (testimonialRef.current) {
      gsap.fromTo(
        testimonialRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
      );
    }
  }, [currentTestimonial]);

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

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      ref={testimonialsSectionRef}
      id="testimonials"
      className="min-h-screen flex items-center justify-center py-16 md:py-24 px-6 md:px-12 lg:px-16 relative"
      style={{ 
        scrollMarginTop: '80px',
        background: 'linear-gradient(to bottom, #fef3c7, #fde68a)'
      }}
    >
      <div className="max-w-4xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2
            ref={titleRef}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 font-sans"
          >
            My Client's Smiles
          </h2>
          <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed font-sans">
            Over the years, I've had the privilege of working with a diverse range of clients, helping them achieve their goals through innovative development solutions.
          </p>
        </div>

        {/* Testimonial Card */}
        <div
          ref={testimonialRef}
          className="bg-white rounded-xl p-8 md:p-12 border border-gray-200 shadow-lg relative"
        >
          {/* Testimonial Text */}
          <p className="text-gray-900 text-lg md:text-xl leading-relaxed mb-8 font-sans font-semibold">
            "{testimonials[currentTestimonial].quote}"
          </p>

          {/* Author Info */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#ff6b35]/10 flex items-center justify-center">
              <span className="text-[#ff6b35] font-bold font-sans">
                {testimonials[currentTestimonial].author.charAt(0)}
              </span>
            </div>
            <div>
              <h4 className="text-gray-900 font-semibold font-sans">
                {testimonials[currentTestimonial].author}
              </h4>
              <div className="flex items-center gap-1 mt-1">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#ff6b35">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? "bg-[#ff6b35] w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
