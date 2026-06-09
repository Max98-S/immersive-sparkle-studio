import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Award, TrendingUp, Brain, Globe2, Beaker, Rocket, Users } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { GlassCard } from "@/components/GlassCard";
import { AgjLogo } from "@/components/AgjLogo";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { TextEffect } from "@/components/ui/text-effect";
import { CardStack, type CardStackItem } from "@/components/ui/card-stack";
import { Sparkles } from "@/components/ui/sparkles";

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

const serviceCards: CardStackItem[] = [
  {
    id: 1,
    title: "Finanza Agevolata",
    description: "Bandi regionali, nazionali ed europei: dalla strategia alla rendicontazione.",
    imageSrc: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=70",
    tag: "Core service",
  },
  {
    id: 2,
    title: "Finanza d'Impresa",
    description: "Strumenti di credito, finanza straordinaria e supporto agli investimenti.",
    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=70",
    tag: "Capital",
  },
  {
    id: 3,
    title: "Trasferimento Tecnologico",
    description: "Dal laboratorio al mercato: scale-up industriale con Jaber Innovation.",
    imageSrc: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=900&q=70",
    tag: "Innovation",
  },
  {
    id: 4,
    title: "Ricerca & Sviluppo",
    description: "Nanomateriali, biomateriali, coating funzionali e nanocompositi a base grafene.",
    imageSrc: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=900&q=70",
    tag: "R&D",
  },
  {
    id: 5,
    title: "Innovation Management",
    description: "Roadmap tecnologiche e supporto strategico per progetti complessi.",
    imageSrc: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=70",
    tag: "Strategy",
  },
];

function Home() {
  return (
    <PageShell>
      {/* HERO — faithful to the brochure cover */}
      <section className="relative overflow-hidden">
        <Sparkles className="absolute inset-0 w-full h-full opacity-60" density={120} size={1.5} color="#2a8aa0" />

        <div className="container mx-auto px-4 pt-8 pb-20">
          {/* Top brochure strip */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-6 mb-10"
          >
            <AgjLogo variant="full" height={56} />
            <div className="flex items-center gap-1 ml-4" aria-hidden>
              {[0, 1, 2].map((i) => (
                <motion.svg
                  key={i}
                  width="22" height="38" viewBox="0 0 22 38"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <circle cx="4" cy="6" r="2" fill="#0d4a5c" />
                  <circle cx="4" cy="14" r="2" fill="#0d4a5c" />
                  <circle cx="4" cy="22" r="2" fill="#0d4a5c" />
                  <circle cx="4" cy="30" r="2" fill="#0d4a5c" />
                  <path d="M8,4 L18,19 L8,34" stroke="#0d4a5c" strokeWidth="3" fill="none" />
                </motion.svg>
              ))}
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
            {/* LEFT: title block */}
            <div>
              <TextEffect
                as="h1"
                per="char"
                preset="blur"
                className="text-6xl md:text-8xl font-display font-extrabold leading-[0.95] text-petrol tracking-tight"
              >
                AGJCONFIN
              </TextEffect>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-2 text-3xl md:text-4xl font-display font-semibold text-petrol/80"
              >
                S.r.l
              </motion.div>

              {/* Petrol ribbon */}
              <motion.div
                initial={{ opacity: 0, x: -40, width: 0 }}
                animate={{ opacity: 1, x: 0, width: "auto" }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="mt-8 inline-block"
              >
                <div className="petrol-ribbon px-8 py-4 pr-14">
                  <span className="text-xl md:text-2xl font-display font-bold tracking-wider">
                    CONSULENZA FINANZIARIA
                  </span>
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="mt-10 text-lg text-foreground/80 max-w-xl leading-relaxed"
              >
                In sinergia con uno spin-off del CNR, uniamo innovazione e strategia
                per guidare il futuro degli investimenti.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="mt-8 flex flex-wrap gap-3"
              >
                <Link
                  to="/servizi"
                  className="glass-petrol px-6 py-3.5 rounded-xl font-semibold inline-flex items-center gap-2 hover:scale-105 transition-transform group"
                >
                  Scopri i servizi <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contatti"
                  className="px-6 py-3.5 rounded-xl font-semibold border border-petrol/30 text-petrol hover:bg-petrol/5 transition-colors"
                >
                  Contattaci
                </Link>
              </motion.div>
            </div>

            {/* RIGHT: hexagon mark */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.4, duration: 0.9, type: "spring", stiffness: 90 }}
              className="flex justify-center lg:justify-end"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <AgjLogo variant="mark" height={420} className="drop-shadow-2xl" />
              </motion.div>
            </motion.div>
          </div>
        </div>
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
              transition={{ delay: i * 0.08 }}
            >
              <GlassCard className="text-center" tilt>
                <div className="text-4xl md:text-5xl font-bold text-gradient">{s.value}</div>
                <div className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">{s.label}</div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* HIGHLIGHT — hero highlight section */}
      <section className="container mx-auto px-4 py-10">
        <HeroHighlight containerClassName="rounded-3xl py-20 px-6 bg-white/40">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [20, -5, 0] }}
            transition={{ duration: 0.6, ease: [0.4, 0.0, 0.2, 1] }}
            className="text-3xl px-4 md:text-5xl lg:text-6xl font-display font-bold text-petrol max-w-4xl leading-tight text-center mx-auto"
          >
            La finanza agevolata non è solo un'opportunità: è lo strumento strategico che trasforma idee e investimenti in{" "}
            <Highlight className="text-petrol-deep">crescita concreta e sostenibile.</Highlight>
          </motion.h2>
        </HeroHighlight>
      </section>

      {/* HIGHLIGHTS */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-petrol font-semibold">Cosa facciamo</span>
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
              transition={{ delay: i * 0.08 }}
            >
              <GlassCard className="h-full">
                <div className="w-12 h-12 rounded-2xl glass-petrol flex items-center justify-center mb-4">
                  <h.icon size={22} />
                </div>
                <h3 className="font-display font-semibold text-lg text-petrol">{h.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{h.desc}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CARD STACK — services carousel */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-petrol font-semibold">I nostri servizi</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gradient">Esplora la nostra offerta</h2>
        </motion.div>

        <CardStack
          items={serviceCards}
          cardWidth={420}
          cardHeight={280}
          autoAdvance
          intervalMs={4200}
        />
      </section>

      {/* QUOTE */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-petrol rounded-[2.5rem] p-10 md:p-16 text-center relative overflow-hidden">
            <Award className="mx-auto mb-6 text-white" size={36} />
            <blockquote className="text-2xl md:text-4xl font-display font-medium leading-snug text-white">
              "Trasformiamo idee e investimenti in <span className="text-teal-200">crescita concreta e sostenibile.</span>"
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
          <Rocket className="mx-auto text-petrol mb-6" size={40} />
          <h2 className="text-4xl md:text-5xl font-bold text-gradient">Il prossimo passo verso la vostra crescita inizia da qui.</h2>
          <div className="mt-8 flex flex-wrap gap-4 justify-center">
            <Link to="/contatti" className="glass-petrol px-8 py-4 rounded-xl font-semibold inline-flex items-center gap-2 hover:scale-105 transition-transform">
              Contattaci <Users size={18} />
            </Link>
          </div>
        </motion.div>
      </section>
    </PageShell>
  );
}
