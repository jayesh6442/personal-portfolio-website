"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header fade in
      gsap.from(headerRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.8,
        ease: "power3.out",
      });

      // Logo animation
      gsap.from(logoRef.current, {
        opacity: 0,
        x: -20,
        duration: 0.6,
        ease: "power3.out",
        delay: 0.2,
      });

      // Nav items animation
      gsap.from(navRef.current?.children || [], {
        opacity: 0,
        y: -10,
        duration: 0.5,
        ease: "power3.out",
        delay: 0.4,
        stagger: 0.1,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 bg-[#1a0d2e]/80 backdrop-blur-sm border-b border-white/10"
    >
      <div className="flex items-center justify-between px-6 py-4 md:px-12 lg:px-16">
        <div
          ref={logoRef}
          className="text-xl font-bold tracking-wide font-mono text-white"
        >
          Dev jayesh
        </div>
        <nav
          ref={navRef}
          className="flex gap-6 md:gap-8 text-sm font-medium font-sans"
        >
          <Link
            href="#home"
            className="text-white/80 hover:text-[#ff6b35] transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="text-white/80 hover:text-[#ff6b35] transition-colors duration-200"
          >
            About
          </Link>
          <Link
            href="#projects"
            className="text-white/80 hover:text-[#ff6b35] transition-colors duration-200"
          >
            Projects
          </Link>
          <Link
            href="#technology"
            className="text-white/80 hover:text-[#ff6b35] transition-colors duration-200"
          >
            Technology
          </Link>
        </nav>
      </div>
    </header>
  );
}
