import React from 'react';
import { ArrowRight, Sparkles, Tv, ShieldCheck, Zap } from 'lucide-react';
import { Button } from './Button';

export const FinalCTA: React.FC = () => {
  return (
    <section className="final-cta-cinema-section" id="comece-agora">
      {/* Giant 3D BoraFlix Ribbon Symbol Glowing in Background (Section 20) */}
      <div className="final-cta-monument-wrap" aria-hidden="true">
        <img
          src="/assets/logos/6.png"
          alt="BoraFlix Monumental 3D"
          className="final-cta-monument-symbol"
        />
        <div className="final-cta-monument-vignette" />
      </div>

      {/* Volumetric Radial Light Emitters */}
      <div
        className="ambient-glow ambient-cyan"
        style={{ top: '40%', left: '30%', width: '650px', height: '650px', opacity: 0.25 }}
      />
      <div
        className="ambient-glow ambient-magenta"
        style={{ top: '40%', right: '30%', width: '700px', height: '700px', opacity: 0.28 }}
      />

      <div className="container relative z-10">
        <div className="final-cta-stage">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider mb-8 shadow-lg">
            <Sparkles size={14} className="text-pink-400 animate-pulse" />
            <span>Acesso Liberado Imediatamente</span>
          </div>

          <h2 className="final-cta-giant-headline font-display">
            A próxima sessão <br />
            <span className="text-gradient">começa aqui.</span>
          </h2>

          <p className="final-cta-lead-text">
            Mais de 60.000 filmes, séries e canais ao vivo esperando por você.
            Transforme sua Smart TV, smartphone ou computador na central definitiva de entretenimento.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Button
              href="#planos"
              variant="primary"
              size="lg"
              className="btn-glow-master text-base md:text-lg px-10 py-4.5 font-bold"
              icon={<ArrowRight size={22} />}
            >
              QUERO CONHECER A BORAFLIX
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 text-xs text-slate-300 font-medium">
            <span className="flex items-center gap-2">
              <Tv size={16} className="text-cyan-400" /> Compatível com Smart TV, Celular, PC e TV Box
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-emerald-400" /> Garantia incondicional de 7 dias
            </span>
            <span className="flex items-center gap-2">
              <Zap size={16} className="text-amber-400" /> Ativação 100% digital e imediata
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
