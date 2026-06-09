import { motion, useMotionValue, useMotionValueEvent, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { ITALY_PATHS } from "./italy-paths";

const SEDI = [
  { id: "roma", city: "Roma", x: 500, y: 565, role: "Head Quarter — Agjconfin · JABER Innovation" },
  { id: "arezzo", city: "Arezzo", x: 480, y: 460, role: "NANESA — Nanomateriali & Q-materials" },
  { id: "bari", city: "Bari", x: 690, y: 615, role: "Biomaterials LAB" },
  { id: "teverola", city: "Teverola (CE)", x: 555, y: 640, role: "Technology LAB — Jaber Innovation" },
  { id: "portici", city: "Portici (NA)", x: 575, y: 660, role: "Nanomaterials LAB c/o IPCB-CNR" },
];

const DEPTH_LAYERS = 18;

export function Italy3D() {
  const reduce = useReducedMotion();
  const wrapRef = useRef<HTMLDivElement>(null);
  const lightGradRef = useRef<SVGRadialGradientElement>(null);
  const [active, setActive] = useState<string>("roma");

  // Scroll-driven tilt (smoothed)
  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start end", "end start"],
  });
  const tiltRaw = useTransform(scrollYProgress, [0, 0.5, 1], [10, 32, 18]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [-12, 12]);
  const rotateX = useSpring(tiltRaw, { stiffness: 60, damping: 20 });
  const rotateYS = useSpring(rotateY, { stiffness: 60, damping: 20 });

  // Mouse-driven dynamic light position
  const lightX = useMotionValue(50);
  const lightY = useMotionValue(30);
  const lightXS = useSpring(lightX, { stiffness: 80, damping: 20 });
  const lightYS = useSpring(lightY, { stiffness: 80, damping: 20 });

  useEffect(() => {
    if (reduce) return;
    let t = 0;
    let raf = 0;
    const loop = () => {
      t += 0.008;
      lightX.set(50 + Math.cos(t) * 30);
      lightY.set(35 + Math.sin(t * 0.8) * 20);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [reduce, lightX, lightY]);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    lightX.set(((e.clientX - r.left) / r.width) * 100);
    lightY.set(((e.clientY - r.top) / r.height) * 100);
  };

  return (
    <div ref={wrapRef} className="relative w-full max-w-5xl mx-auto" style={{ perspective: 1600 }}>
      <motion.div
        className="relative aspect-square"
        onMouseMove={onMove}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        style={{
          transformStyle: "preserve-3d",
          rotateX: reduce ? 0 : rotateX,
          rotateY: reduce ? 0 : rotateYS,
        }}
        role="img"
        aria-label="Mappa 3D dell'Italia con le sedi di Agjconfin e Jaber Innovation: Roma, Arezzo, Bari, Teverola, Portici."
      >
        {/* Soft ground shadow */}
        <div
          className="absolute left-[8%] right-[8%] bottom-[2%] h-12 rounded-[50%] blur-2xl"
          style={{ background: "radial-gradient(ellipse, oklch(0 0 0 / 0.55), transparent 70%)", transform: "translateZ(-60px)" }}
        />

        {/* Extruded depth layers */}
        {Array.from({ length: DEPTH_LAYERS }).map((_, i) => {
          const t = i / DEPTH_LAYERS;
          return (
            <svg
              key={`extrude-${i}`}
              viewBox="0 0 1000 1000"
              className="absolute inset-0 w-full h-full"
              style={{
                transform: `translateZ(${-(i + 1) * 3.2}px) translateY(${(i + 1) * 0.9}px)`,
                opacity: 0.75 - t * 0.65,
              }}
            >
              {ITALY_PATHS.map((d, j) => (
                <path
                  key={j}
                  d={d}
                  fill={`oklch(${0.32 - t * 0.18} ${0.08 - t * 0.04} 218)`}
                  stroke="none"
                />
              ))}
            </svg>
          );
        })}

        {/* Top map face */}
        <svg viewBox="0 0 1000 1000" className="absolute inset-0 w-full h-full drop-shadow-2xl">
          <defs>
            <radialGradient id="italy-fill" cx="50%" cy="30%" r="80%">
              <stop offset="0%" stopColor="oklch(0.7 0.13 198)" stopOpacity="0.95" />
              <stop offset="55%" stopColor="oklch(0.42 0.09 213)" stopOpacity="0.95" />
              <stop offset="100%" stopColor="oklch(0.2 0.05 220)" stopOpacity="1" />
            </radialGradient>
            <linearGradient id="italy-stroke" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="oklch(0.88 0.12 195)" stopOpacity="0.95" />
              <stop offset="100%" stopColor="oklch(0.5 0.09 215)" stopOpacity="0.5" />
            </linearGradient>
            <filter id="glow-map" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            {/* Dynamic light spot — cx/cy updated imperatively from springs */}
            <radialGradient id="dyn-light" cx="50%" cy="30%" r="55%" ref={lightGradRef}>
              <stop offset="0%" stopColor="oklch(0.95 0.1 195)" stopOpacity="0.6" />
              <stop offset="45%" stopColor="oklch(0.75 0.13 198)" stopOpacity="0.18" />
              <stop offset="100%" stopColor="oklch(0.3 0.07 218)" stopOpacity="0" />
            </radialGradient>
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
            {/* dynamic light overlay clipped via re-drawn paths */}
            {ITALY_PATHS.map((d, j) => (
              <path key={`lit-${j}`} d={d} fill="url(#dyn-light)" style={{ mixBlendMode: "screen" }} />
            ))}
          </g>

          {/* Connection lines */}
          {SEDI.map((s, i) =>
            SEDI.slice(i + 1).map((tt) => (
              <motion.line
                key={`${s.id}-${tt.id}`}
                x1={s.x} y1={s.y} x2={tt.x} y2={tt.y}
                stroke="oklch(0.8 0.13 198 / 0.4)"
                strokeWidth="1"
                strokeDasharray="4 6"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 1.4 }}
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
                    fill="oklch(0.78 0.14 195)"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: [1, 3, 1], opacity: [0.8, 0, 0.8] }}
                    transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.3 }}
                    style={{ transformOrigin: `${s.x}px ${s.y}px` }}
                  />
                )}
                <motion.circle
                  cx={s.x} cy={s.y} r={isActive ? 11 : 7}
                  fill="oklch(0.92 0.15 195)"
                  stroke="white" strokeWidth="2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1 + i * 0.15, type: "spring", stiffness: 200 }}
                />
                <text
                  x={s.x + 16} y={s.y + 5}
                  fill="white"
                  fontSize="18"
                  fontWeight="600"
                  style={{ paintOrder: "stroke", stroke: "oklch(0.1 0.04 218)", strokeWidth: 4 }}
                >
                  {s.city}
                </text>
              </g>
            );
          })}
        </svg>
      </motion.div>

      {/* Legend / accessible list of sedi */}
      <ul className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-3" aria-label="Elenco sedi">
        {SEDI.map((s) => (
          <li key={s.id}>
            <button
              type="button"
              onMouseEnter={() => setActive(s.id)}
              onFocus={() => setActive(s.id)}
              onClick={() => setActive(s.id)}
              aria-pressed={active === s.id}
              className={`glass w-full text-left rounded-xl p-4 transition-all ${active === s.id ? "ring-2 ring-violet-glow scale-[1.02]" : "opacity-80"}`}
            >
              <div className="font-display font-semibold text-lg text-violet-glow">{s.city}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.role}</div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
