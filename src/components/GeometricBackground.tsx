import { motion, useReducedMotion } from "motion/react";

/**
 * Animated backdrop faithful to the Agjconfin brochure:
 * - faint skyscraper architectural silhouettes
 * - skewed grid lines
 * - large teal hexagons (filled + outline)
 * - dotted >>> arrow motifs
 * - angular petrol ribbons drifting horizontally
 * Honors prefers-reduced-motion (and the in-app toggle via MotionConfig).
 */
export function GeometricBackground() {
  const reduce = useReducedMotion();

  const orbAnim = reduce ? {} : { x: [0, 60, 0], y: [0, 40, 0] };
  const orbAnim2 = reduce ? {} : { x: [0, -80, 0], y: [0, -50, 0] };

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden>
      {/* Deep gradient orbs */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 760, height: 760, top: "-18%", left: "-12%",
          background: "radial-gradient(circle, oklch(0.5 0.12 210 / 0.5), transparent 65%)",
          filter: "blur(50px)",
        }}
        animate={orbAnim}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 640, height: 640, bottom: "-12%", right: "-15%",
          background: "radial-gradient(circle, oklch(0.36 0.09 218 / 0.6), transparent 65%)",
          filter: "blur(60px)",
        }}
        animate={orbAnim2}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Skyscraper silhouettes (brochure photo motif) */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.09]"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="bldg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.95 0.02 210)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="oklch(0.5 0.08 215)" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        {[
          { x: 80, w: 90, h: 520 },
          { x: 200, w: 60, h: 620 },
          { x: 290, w: 110, h: 460 },
          { x: 430, w: 70, h: 580 },
          { x: 530, w: 95, h: 500 },
          { x: 660, w: 80, h: 640 },
          { x: 770, w: 120, h: 440 },
          { x: 920, w: 70, h: 600 },
          { x: 1020, w: 100, h: 520 },
        ].map((b, i) => (
          <g key={i}>
            <rect x={b.x} y={800 - b.h} width={b.w} height={b.h} fill="url(#bldg)" />
            {/* window grid */}
            {Array.from({ length: Math.floor(b.h / 18) }).map((_, r) =>
              Array.from({ length: Math.floor(b.w / 14) }).map((_, c) => (
                <rect
                  key={`${r}-${c}`}
                  x={b.x + 4 + c * 14}
                  y={800 - b.h + 6 + r * 18}
                  width={8} height={10}
                  fill="oklch(0.85 0.04 210)"
                  opacity={(r * 7 + c * 3) % 5 === 0 ? 0.35 : 0.12}
                />
              ))
            )}
          </g>
        ))}
      </svg>

      {/* Skewed architectural grid */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="arch-grid" width="64" height="64" patternUnits="userSpaceOnUse" patternTransform="skewY(-8)">
            <path d="M 64 0 L 0 0 0 64" fill="none" stroke="white" strokeWidth="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#arch-grid)" />
      </svg>

      {/* Geometric layer */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="hexFill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.5 0.1 213)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="oklch(0.22 0.06 220)" stopOpacity="0.08" />
          </linearGradient>
          <linearGradient id="hexStroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.78 0.13 198)" stopOpacity="0.75" />
            <stop offset="100%" stopColor="oklch(0.45 0.09 215)" stopOpacity="0.25" />
          </linearGradient>
          <linearGradient id="ribbon" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="oklch(0.4 0.09 215)" stopOpacity="0.0" />
            <stop offset="40%" stopColor="oklch(0.4 0.09 215)" stopOpacity="0.55" />
            <stop offset="100%" stopColor="oklch(0.5 0.11 200)" stopOpacity="0.0" />
          </linearGradient>
        </defs>

        {/* Big top-left hex */}
        <motion.g
          style={{ transformOrigin: "150px 130px" }}
          animate={reduce ? {} : { rotate: [0, 360] }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        >
          <polygon
            points="150,20 240,70 240,170 150,220 60,170 60,70"
            fill="url(#hexFill)" stroke="url(#hexStroke)" strokeWidth="1.5"
          />
        </motion.g>

        {/* Hex cluster right */}
        <motion.g
          style={{ transformOrigin: "1050px 600px" }}
          animate={reduce ? {} : { rotate: [0, -360] }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        >
          <polygon
            points="1050,500 1140,550 1140,650 1050,700 960,650 960,550"
            fill="url(#hexFill)" stroke="url(#hexStroke)" strokeWidth="1.5"
          />
          <polygon
            points="930,440 990,475 990,545 930,580 870,545 870,475"
            fill="none" stroke="url(#hexStroke)" strokeWidth="1"
          />
        </motion.g>

        {/* Mid floating outline hex */}
        <motion.polygon
          points="800,150 860,185 860,255 800,290 740,255 740,185"
          fill="none" stroke="url(#hexStroke)" strokeWidth="1"
          animate={reduce ? {} : { rotate: [0, 360], opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "800px 220px" }}
        />

        {/* Chevron arrows */}
        <motion.g
          animate={reduce ? {} : { x: [0, 20, 0], opacity: [0.4, 0.85, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Chevron x={400} y={650} />
          <Chevron x={440} y={650} />
          <Chevron x={480} y={650} />
        </motion.g>

        <motion.g
          animate={reduce ? {} : { x: [0, -15, 0], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <Chevron x={1000} y={120} scale={0.7} />
          <Chevron x={1030} y={120} scale={0.7} />
          <Chevron x={1060} y={120} scale={0.7} />
        </motion.g>

        {/* Angular petrol ribbons */}
        <motion.polygon
          points="0,400 220,360 240,420 0,460"
          fill="oklch(0.35 0.09 218 / 0.45)"
          animate={reduce ? {} : { x: [-30, 15, -30] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.polygon
          points="1200,250 1000,290 980,230 1200,200"
          fill="oklch(0.4 0.1 212 / 0.4)"
          animate={reduce ? {} : { x: [30, -10, 30] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.polygon
          points="0,720 260,680 280,740 0,760"
          fill="oklch(0.3 0.08 218 / 0.5)"
          animate={reduce ? {} : { x: [-20, 25, -20] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Sweeping light ribbon */}
        <motion.rect
          x={-400} y={0} width={400} height={800}
          fill="url(#ribbon)"
          animate={reduce ? {} : { x: [-400, 1600] }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear", repeatDelay: 4 }}
        />

        {/* Dotted >>> arrows */}
        <motion.g
          animate={reduce ? {} : { opacity: [0.3, 0.85, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          {[0, 1, 2].map(i => (
            <DotArrow key={i} x={200 + i * 50} y={400} />
          ))}
        </motion.g>
        <motion.g
          animate={reduce ? {} : { opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        >
          {[0, 1, 2].map(i => (
            <DotArrow key={i} x={870 + i * 40} y={70} scale={0.7} />
          ))}
        </motion.g>
      </svg>
    </div>
  );
}

function Chevron({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  const s = scale;
  return (
    <polygon
      points={`${x},${y} ${x + 30 * s},${y + 20 * s} ${x},${y + 40 * s} ${x - 8 * s},${y + 32 * s} ${x + 14 * s},${y + 20 * s} ${x - 8 * s},${y + 8 * s}`}
      fill="oklch(0.45 0.1 213 / 0.55)"
    />
  );
}

function DotArrow({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  const dots: Array<[number, number]> = [];
  for (let r = 0; r < 5; r++) {
    for (let c = 0; c <= r; c++) {
      dots.push([x + r * 4 * scale, y + (r - c * 2) * 4 * scale]);
    }
  }
  return (
    <g>
      {dots.map(([dx, dy], i) => (
        <circle key={i} cx={dx} cy={dy} r={1.5 * scale} fill="oklch(0.78 0.12 200 / 0.75)" />
      ))}
    </g>
  );
}
