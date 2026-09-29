import React from 'react';
import { ArrowRight, Play, ShieldCheck, Zap, Tv } from 'lucide-react';
import { Button } from './Button';

export const FinalCTA: React.FC = () => {
  return (
    <section className="section-wrap final-cta-streaming-section" id="comece-agora">
      {/* Deep Dark Cinematic Ambient Backdrop */}
      <div className="final-cta-backdrop-glow" aria-hidden="true">
        <div className="final-glow-cyan" />
        <div className="final-glow-magenta" />
      </div>

      <div className="container relative z-10">
        <div className="final-cta-card-cinematic">
          {/* Subtle Top Specular Light */}
          <div className="final-specular-line" />

          {/* Badge */}
          <div className="final-cta-badge">
            <span className="final-dot-live" />
            <span>ACESSO LIBERADO EM SEGUNDOS</span>
          </div>

          {/* Headline requested:
              Sua próxima sessão
              começa aqui.
          */}
          <h2 className="final-cta-title font-display">
            Sua próxima sessão <br />
            <span className="text-gradient">começa aqui.</span>
          </h2>

          {/* Text requested:
              Escolha seu plano e comece a aproveitar a BoraFlix.
          */}
          <p className="final-cta-subtitle">
            Escolha seu plano e comece a aproveitar a BoraFlix.
          </p>

          {/* Big CTA Button: COMEÇAR AGORA */}
          <div className="final-cta-action-wrap">
            <a
              href="#planos"
              className="final-cta-main-btn"
            >
              <Play size={20} className="fill-current" />
              <span>COMEÇAR AGORA</span>
            </a>
          </div>

          {/* Micro Trust Strip */}
          <div className="final-cta-trust-strip">
            <div className="final-trust-chip">
              <Tv size={14} className="text-cyan-400" />
              <span>Smart TV, Celular, PC e TV Box</span>
            </div>
            <div className="final-trust-chip">
              <ShieldCheck size={14} className="text-emerald-400" />
              <span>Garantia de 7 Dias Incondicional</span>
            </div>
            <div className="final-trust-chip">
              <Zap size={14} className="text-amber-400" />
              <span>Ativação Automática Instantânea</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

