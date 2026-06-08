import { motion } from "motion/react";
import { useState } from "react";
import { ITALY_PATHS } from "./italy-paths";

// Approximate coordinates on the 1000x1000 SVG of Italy (simplemaps)
// Located by visual inspection on the map (lon/lat approximated to viewBox).
const SEDI = [
  { id: "roma", city: "Roma", x: 500, y: 565, role: "Head Quarter — Agjconfin · JABER Innovation" },
  { id: "arezzo", city: "Arezzo", x: 480, y: 460, role: "NANESA — Nanomateriali & Q-materials" },
  { id: "bari", city: "Bari", x: 690, y: 615, role: "Biomaterials LAB" },
  { id: "teverola", city: "Teverola (CE)", x: 555, y: 640, role: "Technology LAB — Jaber Innovation" },
  { id: "portici", city: "Portici (NA)", x: 575, y: 660, role: "Nanomaterials LAB c/o IPCB-CNR" },
];

export function Italy3D() {
  const [active, setActive] = useState<string | null>("roma");

  return (
    <div className="relative w-full max-w-5xl mx-auto" style={{ perspective: 1400 }}>
      <motion.div
        className="relative aspect-square"
        initial={{ rotateX: 0, opacity: 0 }}
        whileInView={{ rotateX: 28, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Extruded shadow layers for 3D depth */}
        {Array.from({ length: 8 }).map((_, i) => (
          <svg
            key={`extrude-${i}`}
            viewBox="0 0 1000 1000"
            className="absolute inset-0 w-full h-full"
            style={{
              transform: `translateZ(${-(i + 1) * 3}px) translateY(${(i + 1) * 1.2}px)`,
              opacity: 0.6 - i * 0.06,
            }}
          >
            {ITALY_PATHS.map((d, j) => (
              <path key={j} d={d} fill="oklch(0.25 0.08 215)" stroke="none" />
            ))}
          </svg>
        ))}

        {/* Top map face */}
        <svg viewBox="0 0 1000 1000" className="absolute inset-0 w-full h-full drop-shadow-2xl">
          <defs>
            <linearGradient id="italy-fill" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="oklch(0.55 0.14 200)" stopOpacity="0.9" />
              <stop offset="60%" stopColor="oklch(0.35 0.1 210)" stopOpacity="0.95" />
              <stop offset="100%" stopColor="oklch(0.22 0.06 220)" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="italy-stroke" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="oklch(0.85 0.14 195)" stopOpacity="0.9" />
              <stop offset="100%" stopColor="oklch(0.5 0.1 210)" stopOpacity="0.5" />
            </linearGradient>
            <filter id="glow-map">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <g filter="url(#glow-map)">
            {ITALY_PATHS.map((d, j) => (
              <motion.path
                key={j}
                d={d}
                fill="url(#italy-fill)"
                stroke="url(#italy-stroke)"
                strokeWidth="1"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: j * 0.015, duration: 0.6 }}
              />
            ))}
          </g>

          {/* Connection lines between sedi */}
          {SEDI.map((s, i) =>
            SEDI.slice(i + 1).map((t) => (
              <motion.line
                key={`${s.id}-${t.id}`}
                x1={s.x} y1={s.y} x2={t.x} y2={t.y}
                stroke="oklch(0.8 0.14 195 / 0.35)"
                strokeWidth="1"
                strokeDasharray="4 6"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 1.5 }}
              />
            ))
          )}

          {/* Markers */}
          {SEDI.map((s, i) => {
            const isActive = active === s.id;
            return (
              <g
                key={s.id}
                style={{ cursor: "pointer" }}
                onMouseEnter={() => setActive(s.id)}
              >
                {/* pulse ring */}
                <motion.circle
                  cx={s.x} cy={s.y} r="6"
                  fill="oklch(0.75 0.15 195)"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: [1, 3, 1], opacity: [0.8, 0, 0.8] }}
                  transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.3 }}
                  style={{ transformOrigin: `${s.x}px ${s.y}px` }}
                />
                <motion.circle
                  cx={s.x} cy={s.y} r={isActive ? 10 : 7}
                  fill="oklch(0.9 0.16 195)"
                  stroke="white" strokeWidth="2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 + i * 0.15, type: "spring", stiffness: 200 }}
                />
                <text
                  x={s.x + 14} y={s.y + 4}
                  fill="white"
                  fontSize="18"
                  fontWeight="600"
                  style={{ paintOrder: "stroke", stroke: "oklch(0.1 0.04 215)", strokeWidth: 4 }}
                >
                  {s.city}
                </text>
              </g>
            );
          })}
        </svg>
      </motion.div>

      {/* Legend / detail card */}
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {SEDI.map((s) => (
          <button
            key={s.id}
            onMouseEnter={() => setActive(s.id)}
            onFocus={() => setActive(s.id)}
            className={`glass text-left rounded-xl p-4 transition-all ${active === s.id ? "ring-2 ring-violet-glow scale-[1.02]" : "opacity-80"}`}
          >
            <div className="font-display font-semibold text-lg text-violet-glow">{s.city}</div>
            <div className="text-xs text-muted-foreground mt-1">{s.role}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
