'use client';

export default function GrainOverlay() {
  return (
    <div className="grain" aria-hidden="true">
      <svg width="100%" height="100%">
        <filter id="grain-filter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain-filter)" opacity="0.04" />
      </svg>

      <style jsx>{`
        .grain {
          position: fixed;
          inset: 0;
          z-index: 9999;
          pointer-events: none;
          mix-blend-mode: overlay;
        }

        .grain svg {
          display: block;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
}
