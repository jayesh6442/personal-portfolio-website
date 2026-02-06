"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#technology", label: "Technology" },
  ];

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
      <div className="flex items-center justify-between px-4 py-3 sm:px-6 md:px-12 md:py-4 lg:px-16">
        <div
          ref={logoRef}
          className="text-lg sm:text-xl font-bold tracking-wide font-sans text-white"
        >
          Dev jayesh
        </div>
        <nav
          ref={navRef}
          className="hidden md:flex gap-6 md:gap-8 text-sm font-medium font-sans"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-white hover:text-[#ff6b35] transition-colors duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-controls="mobile-nav"
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((prevState) => !prevState)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/20 text-white hover:text-[#ff6b35] hover:border-[#ff6b35]/60 transition-colors duration-200"
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
          >
            {isMobileMenuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>
      <nav
        id="mobile-nav"
        className={`md:hidden overflow-hidden border-t border-white/10 bg-[#1a0d2e]/95 transition-all duration-300 ${
          isMobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-3 sm:px-6 flex flex-col gap-1">
          {navItems.map((item) => (
            <Link
              key={`mobile-${item.href}`}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white hover:text-[#ff6b35] transition-colors duration-200 py-2 text-sm font-medium font-sans"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
