import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowRight, Sparkles, TrendingUp, Award, Users, Rocket, Brain, Globe2, Beaker } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { GlassCard } from "@/components/GlassCard";
import logo from "@/assets/logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Agjconfin — Consulenza Finanziaria & Innovazione" },
      { name: "description", content: "Trasformiamo idee e investimenti in crescita concreta. Consulenza in finanza agevolata, innovazione e trasferimento tecnologico dal 1990." },
    ],
  }),
  component: Home,
});

const stats = [
  { value: "2 Mld€", label: "Costi agevolati" },
  { value: "200+", label: "Aziende clienti" },
  { value: "95%", label: "Success rate" },
  { value: "50%", label: "Domande MISE Italia" },
];

const highlights = [
  { icon: TrendingUp, title: "Finanza Agevolata", desc: "Bandi regionali, nazionali ed europei: dalla strategia alla rendicontazione." },
  { icon: Brain, title: "Innovation Management", desc: "Roadmap tecnologiche e trasferimento dal laboratorio al mercato." },
  { icon: Globe2, title: "Internazionalizzazione", desc: "Partenariati e relazioni industriali nazionali e internazionali." },
  { icon: Beaker, title: "R&D Applicata", desc: "Spin-off CNR e JABER Innovation: ricerca che diventa prodotto." },
];

function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <PageShell>
      {/* HERO */}
      <section ref={heroRef} className="relative min-h-[90vh] flex items-center overflow-hidden">
        <motion.div style={{ y, opacity, scale }} className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center mb-8"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-violet/40 blur-3xl rounded-full animate-pulse-glow" />
                <img src={logo} alt="Agjconfin logo" className="h-24 w-auto brightness-200 relative animate-float" />
              </div>
            </motion.div>

            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full text-xs uppercase tracking-[0.2em] text-violet-glow mb-6"
            >
              <Sparkles size={14} /> Dal 1990 — Consulenza Indipendente
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-gradient leading-[1.02]"
            >
              Trasformiamo idee<br />in crescita concreta.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              In sinergia con uno spin-off del CNR, uniamo innovazione e strategia
              per guidare il futuro degli investimenti. La finanza agevolata non è
              solo un'opportunità: è lo strumento strategico che trasforma idee
              e investimenti in crescita concreta e sostenibile.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-10 flex flex-wrap gap-4 justify-center"
            >
              <Link to="/servizi" className="glass-strong px-7 py-4 rounded-2xl font-semibold inline-flex items-center gap-2 hover:scale-105 transition-transform group">
                Scopri i servizi <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contatti" className="px-7 py-4 rounded-2xl font-semibold border border-white/20 hover:bg-white/5 transition-colors">
                Contattaci
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs uppercase tracking-widest text-muted-foreground"
        >
          ↓ Scroll
        </motion.div>
      </section>

      {/* STATS */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard className="text-center" tilt>
                <div className="text-4xl md:text-5xl font-bold text-gradient">{s.value}</div>
                <div className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">{s.label}</div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-violet-glow">Cosa facciamo</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4 text-gradient">Un partner unico, lungo tutto il percorso.</h2>
          <p className="mt-6 text-muted-foreground text-lg">
            Dalla definizione della strategia all'individuazione delle opportunità,
            dalla progettazione alla gestione operativa del finanziamento.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5" style={{ perspective: 1000 }}>
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard className="h-full">
                <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center mb-4 text-violet-glow">
                  <h.icon size={22} />
                </div>
                <h3 className="font-display font-semibold text-lg">{h.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{h.desc}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* QUOTE */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-strong rounded-[2.5rem] p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-violet/30 blur-3xl rounded-full" />
            <Award className="mx-auto text-violet-glow mb-6" size={36} />
            <blockquote className="text-2xl md:text-4xl font-display font-medium leading-snug">
              "La finanza agevolata non è solo un'opportunità: è lo strumento
              strategico che trasforma idee e investimenti in <span className="text-gradient">crescita concreta e sostenibile</span>."
            </blockquote>
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-strong rounded-3xl p-12 md:p-20 text-center relative overflow-hidden"
        >
          <Rocket className="mx-auto text-violet-glow mb-6" size={40} />
          <h2 className="text-4xl md:text-5xl font-bold text-gradient">Il prossimo passo verso la vostra crescita inizia da qui.</h2>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link to="/contatti" className="glass-strong px-8 py-4 rounded-2xl font-semibold inline-flex items-center gap-2 hover:scale-105 transition-transform">
              Contattaci <Users size={18} />
            </Link>
          </div>
        </motion.div>
      </section>
    </PageShell>
  );
}
