import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { MotionConfig } from "motion/react";
import { Sparkles, Minus } from "lucide-react";

type Ctx = { reduced: boolean; toggle: () => void };
const RM = createContext<Ctx>({ reduced: false, toggle: () => {} });

export function useReducedUI() {
  return useContext(RM);
}

export function ReducedMotionProvider({ children }: { children: ReactNode }) {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("agj:reduced-motion") : null;
    if (stored != null) {
      setReduced(stored === "1");
    } else if (typeof window !== "undefined" && window.matchMedia) {
      setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    }
  }, []);

  const toggle = () => {
    setReduced((v) => {
      const next = !v;
      try { localStorage.setItem("agj:reduced-motion", next ? "1" : "0"); } catch {}
      return next;
    });
  };

  return (
    <RM.Provider value={{ reduced, toggle }}>
      <MotionConfig reducedMotion={reduced ? "always" : "never"}>{children}</MotionConfig>
    </RM.Provider>
  );
}

export function ReducedMotionToggle() {
  const { reduced, toggle } = useReducedUI();
  return (
    <button
      onClick={toggle}
      aria-pressed={reduced}
      aria-label={reduced ? "Attiva animazioni complete" : "Attiva modalità ridotta animazioni"}
      title={reduced ? "Animazioni: ridotte" : "Animazioni: complete"}
      className="p-2 rounded-lg hover:bg-white/10 transition-colors text-foreground/80 hover:text-violet-glow"
    >
      {reduced ? <Minus size={18} /> : <Sparkles size={18} />}
    </button>
  );
}
