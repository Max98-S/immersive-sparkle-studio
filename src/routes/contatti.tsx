import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { PageShell, PageHeader } from "@/components/PageShell";
import { GlassCard } from "@/components/GlassCard";
import { Phone, Mail, MapPin, Globe, Send } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contatti")({
  head: () => ({
    meta: [
      { title: "Contatti — Agjconfin" },
      { name: "description", content: "Contatta Agjconfin S.r.l: Via Calcutta 08, Roma. Tel +39 3397067687. Email iannaccone.g@agjconfin.it" },
    ],
  }),
  component: Contatti,
});

const contacts = [
  { icon: Phone, label: "Telefono", value: "+39 339 7067687", href: "tel:+393397067687" },
  { icon: Mail, label: "Email", value: "iannaccone.g@agjconfin.it", href: "mailto:iannaccone.g@agjconfin.it" },
  { icon: MapPin, label: "Sede", value: "Via Calcutta, 08 — Roma (RM) 00144" },
  { icon: Globe, label: "Web", value: "www.agjconfin.com", href: "https://www.agjconfin.com" },
];

function Contatti() {
  const [sent, setSent] = useState(false);
  return (
    <PageShell>
      <PageHeader
        eyebrow="Contattaci"
        title="Il prossimo passo verso la vostra crescita inizia da qui."
        subtitle="Raccontaci il tuo progetto: ti risponderemo entro pochi giorni lavorativi."
      />

      <section className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="space-y-5">
            {contacts.map((c, i) => (
              <motion.div key={c.label}
                initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <GlassCard>
                  <a href={c.href} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-violet/30 flex items-center justify-center text-violet-glow shrink-0 group-hover:scale-110 transition-transform">
                      <c.icon size={20} />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</div>
                      <div className="font-display font-semibold text-lg">{c.value}</div>
                    </div>
                  </a>
                </GlassCard>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          >
            <GlassCard className="md:p-10">
              <h3 className="font-display font-semibold text-2xl mb-6">Scrivici</h3>
              {sent ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">✓</div>
                  <p className="text-gradient font-display text-xl">Messaggio inviato. Ti ricontatteremo presto.</p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                  className="space-y-4"
                >
                  <div>
                    <label className="text-xs uppercase tracking-wider text-muted-foreground">Nome</label>
                    <input required className="mt-1 w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-violet-glow outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-wider text-muted-foreground">Email</label>
                    <input required type="email" className="mt-1 w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-violet-glow outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-wider text-muted-foreground">Azienda</label>
                    <input className="mt-1 w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-violet-glow outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-wider text-muted-foreground">Messaggio</label>
                    <textarea required rows={5} className="mt-1 w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-violet-glow outline-none transition-colors resize-none" />
                  </div>
                  <button
                    type="submit"
                    className="glass-strong w-full px-6 py-4 rounded-2xl font-semibold inline-flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
                  >
                    Invia messaggio <Send size={18} />
                  </button>
                </form>
              )}
            </GlassCard>
          </motion.div>
        </div>
      </section>
    </PageShell>
  );
}
