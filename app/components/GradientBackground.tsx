"use client";

import { useEffect, useRef, useState } from "react";

export default function GradientBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || prefersReducedMotion) return;

    // Create animated gradient effect
    let animationFrameId: number;
    let time = 0;

    const animate = () => {
      time += 0.003;

      // Create multiple gradient layers with visible purple-based colors
      const gradients = [
        {
          x: 50 + Math.sin(time) * 15,
          y: 30 + Math.cos(time * 0.8) * 15,
          size: 100 + Math.sin(time * 0.5) * 30,
        },
        {
          x: 20 + Math.cos(time * 0.7) * 20,
          y: 70 + Math.sin(time * 0.6) * 20,
          size: 90 + Math.cos(time * 0.4) * 25,
        },
        {
          x: 80 + Math.sin(time * 0.9) * 18,
          y: 50 + Math.cos(time * 0.5) * 18,
          size: 85 + Math.sin(time * 0.6) * 28,
        },
      ];

      const gradientString = gradients
        .map(
          (grad, index) =>
            `radial-gradient(circle ${grad.size}% at ${grad.x}% ${grad.y}%, ${
              index === 0
                ? "rgba(139, 92, 246, 0.6)"
                : index === 1
                ? "rgba(168, 85, 247, 0.55)"
                : "rgba(124, 58, 237, 0.5)"
            }, rgba(139, 92, 246, 0.1) 40%, transparent 70%)`
        )
        .join(", ");

      container.style.background = `
        ${gradientString},
        radial-gradient(circle at 0% 0%, rgba(139, 92, 246, 0.3), rgba(124, 58, 237, 0.15) 50%, transparent 70%),
        radial-gradient(circle at 100% 100%, rgba(168, 85, 247, 0.25), rgba(139, 92, 246, 0.1) 50%, transparent 70%),
        linear-gradient(135deg, #1a0d2e 0%, #2d1b4e 25%, #3d2a5e 50%, #2d1b4e 75%, #1a0d2e 100%)
      `;

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [prefersReducedMotion]);

  // Static fallback gradient that's always visible - vibrant purple-based gradient
  const staticGradient = `
    radial-gradient(circle 120% at 50% 20%, rgba(139, 92, 246, 0.6), rgba(124, 58, 237, 0.35) 35%, rgba(139, 92, 246, 0.15) 55%, transparent 75%),
    radial-gradient(circle 110% at 20% 80%, rgba(168, 85, 247, 0.55), rgba(139, 92, 246, 0.3) 35%, rgba(168, 85, 247, 0.15) 55%, transparent 75%),
    radial-gradient(circle 100% at 80% 50%, rgba(124, 58, 237, 0.5), rgba(168, 85, 247, 0.3) 35%, rgba(124, 58, 237, 0.15) 55%, transparent 75%),
    radial-gradient(circle at 0% 0%, rgba(139, 92, 246, 0.35), rgba(124, 58, 237, 0.2) 45%, transparent 65%),
    radial-gradient(circle at 100% 100%, rgba(168, 85, 247, 0.3), rgba(139, 92, 246, 0.15) 45%, transparent 65%),
    linear-gradient(135deg, #1a0d2e 0%, #2d1b4e 15%, #3d2a5e 30%, #4d3a6e 45%, #5d4a7e 50%, #4d3a6e 55%, #3d2a5e 70%, #2d1b4e 85%, #1a0d2e 100%)
  `.trim().replace(/\s+/g, ' ');

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 right-0 bottom-0 z-0 pointer-events-none"
      style={{
        background: staticGradient,
      }}
      aria-hidden="true"
    />
  );
}
