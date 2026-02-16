'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function HeroBackground() {
  const imgRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const handleScroll = () => {
      if (imgRef.current) {
        const y = window.scrollY * 0.15;
        imgRef.current.style.transform = `translateY(${y}px) scale(1.05)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="hero-bg" aria-hidden="true">
      <Image
        ref={imgRef}
        src="/hero-bg.png"
        alt=""
        fill
        priority
        quality={90}
        className="hero-bg__img"
        sizes="100vw"
      />

      {/* Gradient overlay to ensure text readability on left */}
      <div className="hero-bg__overlay" />

      <style jsx>{`
        .hero-bg {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 0;
        }

        .hero-bg__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(11, 15, 23, 0.6) 0%,
            rgba(11, 15, 23, 0.3) 40%,
            rgba(11, 15, 23, 0.05) 70%,
            transparent 100%
          );
          z-index: 1;
        }
      `}</style>

      <style jsx global>{`
        .hero-bg__img {
          object-fit: cover;
          object-position: center;
          transition: transform 100ms linear;
          will-change: transform;
        }
      `}</style>
    </div>
  );
}
