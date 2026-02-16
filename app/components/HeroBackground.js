'use client';

import { useEffect, useRef } from 'react';

export default function HeroBackground() {
  const svgRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const handleScroll = () => {
      if (svgRef.current) {
        const y = window.scrollY * 0.03;
        svgRef.current.style.transform = `translateY(${y}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Generate flowing contour lines
  const lines = [];
  const lineCount = 18;

  for (let i = 0; i < lineCount; i++) {
    const yBase = 50 + (i * 55);
    const amplitude = 20 + Math.sin(i * 0.7) * 15;
    const freq = 0.003 + (i % 3) * 0.001;
    const phase = i * 40;
    const opacity = 0.04 + Math.sin(i * 0.5) * 0.025;

    // Build smooth curve path
    let d = `M -100 ${yBase}`;
    for (let x = -100; x <= 1600; x += 20) {
      const y = yBase
        + Math.sin(x * freq + phase * 0.01) * amplitude
        + Math.cos(x * freq * 1.5 + phase * 0.02) * (amplitude * 0.4)
        + Math.sin(x * 0.001 + i) * 30;
      d += ` L ${x} ${y}`;
    }

    lines.push(
      <path
        key={i}
        d={d}
        fill="none"
        stroke="url(#lineGrad)"
        strokeWidth={0.6 + (i % 5) * 0.1}
        opacity={opacity}
      />
    );
  }

  return (
    <div className="hero-bg" aria-hidden="true">
      <svg
        ref={svgRef}
        className="hero-bg__svg"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="15%" stopColor="var(--champagne, #C8B38A)" />
            <stop offset="50%" stopColor="var(--slate, #A7B0BE)" />
            <stop offset="85%" stopColor="var(--champagne, #C8B38A)" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <radialGradient id="centerGlow" cx="50%" cy="45%" r="45%">
            <stop offset="0%" stopColor="rgba(200, 179, 138, 0.06)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>

        {/* Subtle center glow */}
        <rect width="1440" height="900" fill="url(#centerGlow)" />

        {/* Contour lines */}
        {lines}
      </svg>

      <style jsx>{`
        .hero-bg {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 0;
        }

        .hero-bg__svg {
          position: absolute;
          top: -10%;
          left: -5%;
          width: 110%;
          height: 120%;
          transition: transform 100ms linear;
          will-change: transform;
        }
      `}</style>
    </div>
  );
}
