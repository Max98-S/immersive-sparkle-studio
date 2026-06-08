import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { PageShell, PageHeader } from "@/components/PageShell";
import { GlassCard } from "@/components/GlassCard";
import { MapPin, Atom, FlaskConical, Layers, Cpu } from "lucide-react";
import { Italy3D } from "@/components/Italy3D";

export const Route = createFileRoute("/ecosistema-innovazione")({
  head: () => ({
    meta: [
      { title: "Ecosistema Innovazione — Agjconfin & Jaber Innovation" },
      { name: "description", content: "Jaber Innovation S.r.l: coating funzionali, biomateriali, nanomateriali e nanocompositi a base grafene. Dalla ricerca allo scale-up industriale." },
    ],
  }),
  component: Ecosistema,
});

const locations = [
  { city: "Roma", role: "Head Quarter — Agjconfin · JABER Innovation" },
  { city: "Arezzo", role: "NANESA — Nanomateriali & Q-materials" },
  { city: "Bari", role: "Biomaterials LAB" },
  { city: "Teverola (CE)", role: "Technology LAB — Jaber Innovation" },
  { city: "Portici (NA)", role: "Nanomaterials LAB c/o IPCB-CNR" },
];

const focus = [
  { icon: Layers, title: "Coating funzionali & attivi", desc: "Rivestimenti ad alte prestazioni per packaging, automotive, aeronautico." },
  { icon: FlaskConical, title: "Biomateriali", desc: "Materiali bio-based per biomedicale, tessile e industria della carta." },
  { icon: Atom, title: "Nanomateriali & grafene", desc: "Nanocompositi a base grafene per elettronica e applicazioni avanzate." },
  { icon: Cpu, title: "Compositi avanzati", desc: "Soluzioni orientate allo scale-up industriale e trasferimento tecnologico." },
];

function Ecosistema() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Fase 5 · Attività di R&D"
        title="Jaber Innovation: ricerca che diventa prodotto."
        subtitle="Un vantaggio competitivo unico: uniamo consulenza e R&S per accelerare lo sviluppo, ridurre i rischi e portare l'innovazione sul mercato."
      />

      <section className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <GlassCard className="md:p-12">
            <span className="text-xs uppercase tracking-[0.3em] text-violet-glow">Chi è Jaber Innovation</span>
            <h2 className="text-3xl md:text-4xl font-display font-semibold mt-4">
              Oltre <span className="text-gradient">quindici anni di esperienza</span> nella ricerca e sviluppo applicata.
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              Jaber Innovation S.r.l. è una società fondata nel 2009 e operativa
              in modo continuativo dal 2010. Opera come operatore qualificato nel
              campo dei materiali innovativi e sostenibili, con una forte
              specializzazione nelle attività di trasferimento tecnologico e nello
              sviluppo di soluzioni orientate allo scale-up industriale.
            </p>
          </GlassCard>
        </motion.div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-violet-glow">Core focus & settori applicativi</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gradient">Dal laboratorio al mercato</h2>
          <p className="mt-6 text-muted-foreground">
            Soluzioni applicate in packaging, automotive, aeronautico, elettronico,
            biomedicale, tessile e industria della carta.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5" style={{ perspective: 1200 }}>
          {focus.map((f, i) => (
            <motion.div key={f.title}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <GlassCard className="h-full">
                <f.icon className="text-violet-glow mb-4" size={28} />
                <h3 className="font-display font-semibold text-lg">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-violet-glow">La rete</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gradient">Una rete di laboratori in Italia</h2>
        </motion.div>

        <Italy3D />
      </section>
    </PageShell>
  );
}
