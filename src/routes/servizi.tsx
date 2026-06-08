import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Coins, Building2, Globe2, Atom, Search, FileText, ClipboardCheck, Lightbulb, Landmark, MapPin, Cpu, Brain, FlaskConical, ShieldCheck } from "lucide-react";
import { PageShell, PageHeader } from "@/components/PageShell";
import { GlassCard } from "@/components/GlassCard";

export const Route = createFileRoute("/servizi")({
  head: () => ({
    meta: [
      { title: "Servizi — Agjconfin" },
      { name: "description", content: "Finanza agevolata, Finanza Impresa, Internazionalizzazione, Trasferimento Tecnologico: una gamma completa di servizi per imprese e centri di ricerca." },
    ],
  }),
  component: Servizi,
});

const services = [
  { icon: Coins, title: "Finanza Agevolata", desc: "Bandi e agevolazioni regionali, nazionali ed europee per investimenti, R&S e innovazione." },
  { icon: Building2, title: "Finanza Impresa", desc: "Operazioni straordinarie: M&A, leverage e management buy-out per la crescita strutturale." },
  { icon: Globe2, title: "Internazionalizzazione", desc: "Strategie e strumenti per l'espansione sui mercati esteri e partenariati globali." },
  { icon: Atom, title: "Trasferimento Tecnologico", desc: "Dal laboratorio al mercato: scale-up industriale di tecnologie e materiali innovativi." },
];

const subServices = [
  { icon: Search, title: "Grant Assessment", desc: "Identificazione delle opportunità di finanziamento coerenti con l'idea progettuale." },
  { icon: FileText, title: "Fase di presentazione", desc: "Redazione di proposte progettuali per l'ottenimento di finanziamenti." },
  { icon: ClipboardCheck, title: "Management e Rendicontazione", desc: "Gestione del finanziamento, del progetto e del partenariato." },
  { icon: Lightbulb, title: "Innovation Management", desc: "Individuazione innovazioni e definizione roadmap tecnologica per decisioni strategiche." },
];

const competences = [
  { icon: Landmark, title: "Regionali", desc: "Fondo Europeo Sviluppo Regionale (FESR)." },
  { icon: MapPin, title: "Nazionali", desc: "Agevolazioni economiche dai Ministeri (MIMIT, MASE, MUR, Invitalia, SIMEST)." },
  { icon: Globe2, title: "Europei", desc: "Programmi quadro Ricerca, Sviluppo, Innovazione (Horizon Europe, EIC)." },
];

const fiscal = [
  { icon: FlaskConical, title: "Credito d'Imposta R&S&I", desc: "Credito d'Imposta Ricerca, Sviluppo, Innovazione tecnologica (CIRI)." },
  { icon: ShieldCheck, title: "Certificazione CIRI", desc: "Asseverazione tecnica per accesso al credito d'imposta." },
  { icon: Cpu, title: "Piano Transizione 4.0", desc: "Investimenti in beni strumentali tecnologici e digitalizzazione." },
  { icon: Brain, title: "Piano Transizione 5.0", desc: "Investimenti per la doppia transizione digitale ed energetica." },
];

function Servizi() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="I Nostri Servizi"
        title="Una gamma completa per crescere, innovare, competere."
        subtitle="Agjconfin supporta aziende e centri di ricerca nell'accesso ai finanziamenti pubblici e nell'Innovation Management con una gamma integrata di servizi."
      />

      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5" style={{ perspective: 1200 }}>
          {services.map((s, i) => (
            <motion.div key={s.title}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <GlassCard className="h-full">
                <div className="w-14 h-14 rounded-2xl bg-violet/30 flex items-center justify-center text-violet-glow mb-4">
                  <s.icon size={26} />
                </div>
                <h3 className="font-display font-semibold text-xl">{s.title}</h3>
                <p className="mt-2 text-muted-foreground text-sm">{s.desc}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-violet-glow">Finanziamenti Pubblici R&S</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gradient">Servizi end-to-end</h2>
          <p className="mt-6 text-muted-foreground">
            Un partner unico lungo tutto il percorso: dalla strategia alla rendicontazione finale.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {subServices.map((s, i) => (
            <motion.div key={s.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
              <GlassCard className="h-full">
                <s.icon className="text-violet-glow mb-4" size={26} />
                <h3 className="font-display font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-violet-glow">Aree di Competenza</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gradient">Finanziamenti Agevolati</h2>
          <p className="mt-6 text-muted-foreground">
            Competenze integrate e specialistiche che accompagnano imprese ed enti in ogni fase del percorso di sviluppo.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-5">
          {competences.map((c, i) => (
            <motion.div key={c.title}
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <GlassCard className="h-full text-center">
                <c.icon className="mx-auto text-violet-glow mb-4" size={30} />
                <h3 className="font-display font-semibold text-lg">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-violet-glow">Agevolazioni Fiscali</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gradient">Credito d'imposta & Transizione</h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {fiscal.map((f, i) => (
            <motion.div key={f.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
              <GlassCard className="h-full">
                <f.icon className="text-violet-glow mb-4" size={26} />
                <h3 className="font-display font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
