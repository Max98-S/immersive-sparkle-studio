import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { AgjLogo } from "./AgjLogo";
import { ReducedMotionToggle } from "./ReducedMotion";

const links = [
  { to: "/", label: "Home" },
  { to: "/chi-siamo", label: "Chi Siamo" },
  { to: "/servizi", label: "Servizi" },
  { to: "/come-lavoriamo", label: "Come Lavoriamo" },
  { to: "/ecosistema-innovazione", label: "Ecosistema" },
  { to: "/bandi-opportunita", label: "Bandi & Opportunità" },
  { to: "/contatti", label: "Contatti" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-2" : "py-4"}`}
    >
      <div className="container mx-auto px-4">
        <nav className={`glass rounded-2xl px-4 py-2.5 flex items-center justify-between transition-all ${scrolled ? "shadow-xl" : ""}`}>
          <Link to="/" className="flex items-center gap-2 group">
            <AgjLogo variant="full" height={36} className="transition-transform group-hover:scale-105" />
          </Link>

          <ul className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="px-3 py-2 text-sm rounded-lg text-foreground/80 transition-all hover:bg-petrol/10 hover:text-petrol"
                  activeProps={{ className: "px-3 py-2 text-sm rounded-lg bg-petrol/10 text-petrol font-semibold" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-1">
            <ReducedMotionToggle />
            <button onClick={() => setOpen(!open)} className="lg:hidden p-2 rounded-lg hover:bg-petrol/10" aria-label="Menu">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="lg:hidden mt-2 glass-strong rounded-2xl p-4"
            >
              <ul className="flex flex-col gap-1">
                {links.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      onClick={() => setOpen(false)}
                      className="block px-4 py-3 rounded-lg hover:bg-petrol/10"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
