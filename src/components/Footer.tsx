import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-white/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Agjconfin" className="h-10 w-auto brightness-200" />
              <span className="font-display font-bold text-xl">AGJCONFIN S.r.l</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-md">
              In sinergia con uno spin-off del CNR, uniamo innovazione e strategia
              per guidare il futuro degli investimenti.
            </p>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider">Naviga</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/chi-siamo" className="hover:text-violet-glow">Chi Siamo</Link></li>
              <li><Link to="/servizi" className="hover:text-violet-glow">Servizi</Link></li>
              <li><Link to="/come-lavoriamo" className="hover:text-violet-glow">Come Lavoriamo</Link></li>
              <li><Link to="/ecosistema-innovazione" className="hover:text-violet-glow">Ecosistema</Link></li>
              <li><Link to="/bandi-opportunita" className="hover:text-violet-glow">Bandi & Opportunità</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider">Contatti</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><Phone size={14} className="mt-1 shrink-0" /> +39 339 7067687</li>
              <li className="flex items-start gap-2"><Mail size={14} className="mt-1 shrink-0" /> iannaccone.g@agjconfin.it</li>
              <li className="flex items-start gap-2"><MapPin size={14} className="mt-1 shrink-0" /> Via Calcutta, 08 — Roma 00144</li>
              <li className="flex items-start gap-2"><Globe size={14} className="mt-1 shrink-0" /> www.agjconfin.com</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} Agjconfin S.r.l — Consulenza Finanziaria. Tutti i diritti riservati.
        </div>
      </div>
    </footer>
  );
}
