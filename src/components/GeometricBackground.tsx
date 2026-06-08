import { motion } from "motion/react";

/**
 * Animated geometric backdrop inspired by the Agjconfin brochure:
 * teal hexagons, chevron arrows and a faint architectural grid that
 * slowly drift, rotate and pulse behind the content.
 */
export function GeometricBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Soft glow orbs for depth */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 700, height: 700, top: "-15%", left: "-10%",
          background: "radial-gradient(circle, oklch(0.45 0.12 200 / 0.45), transparent 65%)",
          filter: "blur(40px)",
        }}
        animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 600, height: 600, bottom: "-10%", right: "-15%",
          background: "radial-gradient(circle, oklch(0.35 0.1 210 / 0.55), transparent 65%)",
          filter: "blur(50px)",
        }}
        animate={{ x: [0, -80, 0], y: [0, -50, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Architectural grid texture (like the building lines on the PDF) */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="arch-grid" width="60" height="60" patternUnits="userSpaceOnUse" patternTransform="skewY(-8)">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#arch-grid)" />
      </svg>

      {/* Floating hexagons */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="hexFill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.55 0.14 200)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="oklch(0.25 0.08 220)" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="hexStroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.7 0.15 200)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="oklch(0.5 0.12 220)" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Big hexagon top-left */}
        <motion.g
          style={{ transformOrigin: "150px 120px" }}
          animate={{ rotate: [0, 360] }}
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
          animate={{ rotate: [0, -360] }}
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

        {/* Mid hexagon */}
        <motion.polygon
          points="800,150 860,185 860,255 800,290 740,255 740,185"
          fill="none" stroke="url(#hexStroke)" strokeWidth="1"
          animate={{ rotate: [0, 360], opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "800px 220px" }}
        />

        {/* Chevron arrows (like the >>> from PDF) */}
        <motion.g
          animate={{ x: [0, 20, 0], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Chevron x={400} y={650} />
          <Chevron x={440} y={650} />
          <Chevron x={480} y={650} />
        </motion.g>

        <motion.g
          animate={{ x: [0, -15, 0], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <Chevron x={1000} y={120} scale={0.7} />
          <Chevron x={1030} y={120} scale={0.7} />
          <Chevron x={1060} y={120} scale={0.7} />
        </motion.g>

        {/* Angular ribbons (the dark teal angular accents) */}
        <motion.polygon
          points="0,400 180,360 200,420 0,460"
          fill="oklch(0.35 0.1 210 / 0.35)"
          animate={{ x: [-20, 10, -20] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.polygon
          points="1200,250 1020,290 1000,230 1200,200"
          fill="oklch(0.4 0.12 200 / 0.3)"
          animate={{ x: [20, -10, 20] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Dotted arrow motif from PDF (>>> made of dots) */}
        <motion.g
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          {[0, 1, 2].map(i => (
            <DotArrow key={i} x={200 + i * 50} y={400} />
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
      fill="oklch(0.5 0.13 200 / 0.45)"
    />
  );
}

function DotArrow({ x, y }: { x: number; y: number }) {
  const dots: Array<[number, number]> = [];
  for (let r = 0; r < 5; r++) {
    for (let c = 0; c <= r; c++) {
      dots.push([x + r * 4, y + (r - c * 2) * 4]);
    }
  }
  return (
    <g>
      {dots.map(([dx, dy], i) => (
        <circle key={i} cx={dx} cy={dy} r="1.5" fill="oklch(0.75 0.1 200 / 0.7)" />
      ))}
    </g>
  );
}
