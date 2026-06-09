import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { ITALY_PATHS } from "./italy-paths";

const SEDI = [
  { id: "roma", city: "Roma", x: 500, y: 565, role: "Head Quarter — Agjconfin · JABER Innovation" },
  { id: "arezzo", city: "Arezzo", x: 480, y: 460, role: "NANESA — Nanomateriali & Q-materials" },
  { id: "bari", city: "Bari", x: 690, y: 615, role: "Biomaterials LAB" },
  { id: "teverola", city: "Teverola (CE)", x: 555, y: 640, role: "Technology LAB — Jaber Innovation" },
  { id: "portici", city: "Portici (NA)", x: 575, y: 660, role: "Nanomaterials LAB c/o IPCB-CNR" },
];

const DEPTH_LAYERS = 6;

export function Italy3D() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState<string>("roma");

  return (
    <div className="relative w-full max-w-4xl mx-auto" style={{ perspective: 1400 }}>
      <motion.div
        className="relative aspect-square"
        initial={{ opacity: 0, rotateX: 24 }}
        whileInView={{ opacity: 1, rotateX: 16 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        style={{ transformStyle: "preserve-3d" }}
        role="img"
        aria-label="Mappa 3D dell'Italia con le sedi: Roma, Arezzo, Bari, Teverola, Portici."
      >
        {/* Light depth layers - reduced count for perf */}
        {Array.from({ length: DEPTH_LAYERS }).map((_, i) => {
          const t = i / DEPTH_LAYERS;
          return (
            <svg
              key={i}
              viewBox="0 0 1000 1000"
              className="absolute inset-0 w-full h-full"
              style={{
                transform: `translateZ(${-(i + 1) * 5}px) translateY(${(i + 1) * 1.5}px)`,
                opacity: 0.6 - t * 0.5,
              }}
            >
              {ITALY_PATHS.map((d, j) => (
                <path key={j} d={d} fill="#0d4a5c" />
              ))}
            </svg>
          );
        })}

        {/* Top face */}
        <svg viewBox="0 0 1000 1000" className="absolute inset-0 w-full h-full">
          <defs>
            <linearGradient id="italy-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2a8aa0" />
              <stop offset="100%" stopColor="#0d4a5c" />
            </linearGradient>
          </defs>
          {ITALY_PATHS.map((d, j) => (
            <path key={j} d={d} fill="url(#italy-fill)" stroke="white" strokeWidth="0.6" />
          ))}

          {/* Connection lines */}
          {SEDI.map((s, i) =>
            SEDI.slice(i + 1).map((tt) => (
              <line
                key={`${s.id}-${tt.id}`}
                x1={s.x} y1={s.y} x2={tt.x} y2={tt.y}
                stroke="white" strokeOpacity="0.5"
                strokeWidth="1" strokeDasharray="4 6"
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
                onFocus={() => setActive(s.id)}
                tabIndex={0}
                role="button"
                aria-label={`${s.city} — ${s.role}`}
              >
                {!reduce && (
                  <motion.circle
                    cx={s.x} cy={s.y} r="6"
                    fill="#4fb1c4"
                    animate={{ scale: [1, 2.4, 1], opacity: [0.7, 0, 0.7] }}
                    transition={{ duration: 2.6, repeat: Infinity, delay: i * 0.3 }}
                    style={{ transformOrigin: `${s.x}px ${s.y}px` }}
                  />
                )}
                <circle
                  cx={s.x} cy={s.y} r={isActive ? 11 : 7}
                  fill="#ffffff" stroke="#0d4a5c" strokeWidth="2.5"
                />
                <text
                  x={s.x + 16} y={s.y + 5}
                  fill="#ffffff" fontSize="18" fontWeight="700"
                  style={{ paintOrder: "stroke", stroke: "#062e3c", strokeWidth: 4 }}
                >
                  {s.city}
                </text>
              </g>
            );
          })}
        </svg>
      </motion.div>

      <ul className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-3" aria-label="Elenco sedi">
        {SEDI.map((s) => (
          <li key={s.id}>
            <button
              type="button"
              onMouseEnter={() => setActive(s.id)}
              onFocus={() => setActive(s.id)}
              onClick={() => setActive(s.id)}
              aria-pressed={active === s.id}
              className={`glass w-full text-left rounded-xl p-4 transition-all ${active === s.id ? "ring-2 ring-petrol scale-[1.02]" : "opacity-80"}`}
            >
              <div className="font-display font-semibold text-lg text-petrol">{s.city}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.role}</div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
