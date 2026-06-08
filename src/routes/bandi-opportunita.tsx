import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { PageShell, PageHeader } from "@/components/PageShell";
import { GlassCard } from "@/components/GlassCard";
import { TrendingUp, Building2, Award, Rocket, Trophy, BarChart3 } from "lucide-react";

export const Route = createFileRoute("/bandi-opportunita")({
  head: () => ({
    meta: [
      { title: "Bandi & Opportunità — Agjconfin" },
      { name: "description", content: "Oltre 2 miliardi € di costi agevolati, 200+ aziende clienti, success rate >95%. Esperienza nei bandi MISE, Horizon Europe, FESR e MIMIT." },
    ],
  }),
  component: Bandi,
});

const numbers = [
  { icon: TrendingUp, value: "2 Mld€", label: "Costi agevolati" },
  { icon: Building2, value: "200+", label: "Aziende clienti" },
  { icon: Award, value: "95%+", label: "Success rate" },
  { icon: BarChart3, value: "50%", label: "Domande italiane su bandi MISE" },
  { icon: Rocket, value: "36 anni", label: "Di esperienza continuativa" },
  { icon: Trophy, value: "Startup & PMI", label: "Esperienza pluriennale" },
];

const bandi = [
  { tag: "REGIONALE", title: "Fondo Europeo Sviluppo Regionale (FESR)", desc: "Bandi regionali per investimenti, R&S, digitalizzazione e sostenibilità." },
  { tag: "NAZIONALE", title: "MIMIT — Ministero delle Imprese e del Made in Italy", desc: "Agevolazioni economiche per imprese, contratti di sviluppo, fondi per l'innovazione." },
  { tag: "NAZIONALE", title: "MASE — Ministero dell'Ambiente e Sicurezza Energetica", desc: "Strumenti per la transizione energetica e progetti di sostenibilità." },
  { tag: "NAZIONALE", title: "MUR — Ministero dell'Università e della Ricerca", desc: "Bandi PNRR, PRIN e finanziamenti per la ricerca applicata." },
  { tag: "NAZIONALE", title: "Invitalia & SIMEST", desc: "Strumenti per la nascita di nuove imprese, M&A e internazionalizzazione." },
  { tag: "EUROPEO", title: "Horizon Europe & EIC", desc: "Programmi quadro per ricerca, sviluppo e innovazione a livello europeo." },
  { tag: "FISCALE", title: "Credito d'Imposta R&S&I (CIRI)", desc: "Credito d'imposta per Ricerca, Sviluppo, Innovazione tecnologica con certificazione." },
  { tag: "FISCALE", title: "Piano Transizione 4.0 & 5.0", desc: "Investimenti in beni strumentali tecnologici, digitalizzazione ed energia." },
];

function Bandi() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="I Nostri Numeri · Bandi & Opportunità"
        title="Risultati che parlano per noi."
        subtitle="Una mappa completa delle opportunità di finanziamento pubblico, supportata da un track record di oltre tre decenni."
      />

      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 max-w-6xl mx-auto" style={{ perspective: 1200 }}>
          {numbers.map((n, i) => (
            <motion.div key={n.label}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
              <GlassCard className="text-center">
                <n.icon className="mx-auto text-violet-glow mb-3" size={28} />
                <div className="text-4xl md:text-5xl font-bold text-gradient">{n.value}</div>
                <div className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">{n.label}</div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-violet-glow">Mappa delle opportunità</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gradient">Bandi regionali, nazionali ed europei</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 max-w-6xl mx-auto">
          {bandi.map((b, i) => (
            <motion.div key={b.title}
              initial={{ opacity: 0, x: i % 2 ? 30 : -30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ delay: (i % 2) * 0.1 }}>
              <GlassCard className="h-full">
                <span className="inline-block px-3 py-1 rounded-full text-[10px] uppercase tracking-wider bg-violet/30 text-violet-glow mb-3">
                  {b.tag}
                </span>
                <h3 className="font-display font-semibold text-lg">{b.title}</h3>
                <p className="text-muted-foreground text-sm mt-2">{b.desc}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
