import { motion, useReducedMotion } from "motion/react";

/**
 * Lightweight backdrop inspired by the Agjconfin brochure.
 * Light background, faint teal hexagons and chevron motifs.
 * Optimized: pure SVG, ~10 elements, single rAF orb drift.
 */
export function GeometricBackground() {
  const reduce = useReducedMotion();

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden>
      {/* Soft radial gradients */}
      <div
        className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full opacity-50"
        style={{ background: "radial-gradient(circle, rgba(42,138,160,0.18), transparent 65%)", filter: "blur(60px)" }}
      />
      <div
        className="absolute bottom-[-25%] right-[-15%] w-[55vw] h-[55vw] rounded-full opacity-40"
        style={{ background: "radial-gradient(circle, rgba(13,74,92,0.18), transparent 60%)", filter: "blur(70px)" }}
      />

      {/* Brochure geometric layer */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="hexFill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0d4a5c" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#2a8aa0" stopOpacity="0.04" />
          </linearGradient>
        </defs>

        {/* Faint architectural grid */}
        <g opacity="0.06" stroke="#0d4a5c" strokeWidth="0.6">
          {Array.from({ length: 18 }).map((_, i) => (
            <line key={`v${i}`} x1={i * 70} y1="0" x2={i * 70 + 60} y2="800" />
          ))}
        </g>

        {/* Hexagons drifting */}
        <motion.polygon
          points="1100,140 1180,180 1180,260 1100,300 1020,260 1020,180"
          fill="url(#hexFill)"
          stroke="#0d4a5c"
          strokeOpacity="0.18"
          animate={reduce ? undefined : { y: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.polygon
          points="120,640 200,680 200,760 120,800 40,760 40,680"
          fill="url(#hexFill)"
          stroke="#0d4a5c"
          strokeOpacity="0.15"
          animate={reduce ? undefined : { y: [0, 10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Chevron arrows >>> */}
        <g fill="#0d4a5c" opacity="0.18">
          {[0, 1, 2].map((i) => (
            <motion.path
              key={i}
              d={`M ${600 + i * 28} 60 L ${618 + i * 28} 78 L ${600 + i * 28} 96 L ${604 + i * 28} 78 Z`}
              animate={reduce ? undefined : { opacity: [0.1, 0.35, 0.1] }}
              transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
