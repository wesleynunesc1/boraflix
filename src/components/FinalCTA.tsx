import React from 'react';
import { ArrowRight, Play, Tv, ShieldCheck, Zap, MessageCircle } from 'lucide-react';
import { Button } from './Button';

export const FinalCTA: React.FC = () => {
  const WHATSAPP_NUMBER = '558594480239';
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá! Gostaria de tirar algumas dúvidas e assinar a BoraFlix.')}`;

  return (
    <section className="final-cta-cinema-section" id="comece-agora">
      {/* Background Cinematic Portal Backdrop */}
      <div className="final-cta-backdrop-wrap" aria-hidden="true">
        <img
          src="/assets/generated/final-cta-art.jpg"
          alt=""
          className="final-cta-backdrop-art"
        />
        <div className="final-cta-backdrop-overlay" />
      </div>

      {/* Floating 3D BoraFlix Ribbon Logo Monument Accent */}
      <div className="final-cta-monument-wrap" aria-hidden="true">
        <img
          src="/assets/logos/boraflix-logo.png"
          alt="BoraFlix Monumental"
          className="final-cta-monument-symbol"
        />
      </div>

      {/* Ambient Lighting Halos */}
      <div
        className="ambient-glow ambient-cyan"
        style={{ top: '35%', left: '20%', width: '600px', height: '600px', opacity: 0.28 }}
      />
      <div
        className="ambient-glow ambient-magenta"
        style={{ top: '35%', right: '20%', width: '650px', height: '650px', opacity: 0.3 }}
      />

      <div className="container relative z-10">
        <div className="final-cta-card-shell">
          {/* Top Cinema Specular Line */}
          <div className="final-cta-top-glow-line" />

          {/* Cinema Header Badge */}
          <div className="final-cta-badge">
            <span className="final-cta-pulse-beacon" />
            <Play size={11} className="fill-current text-cyan-400" />
            <span>EXPERIÊNCIA CINEMATOGRÁFICA DEFINITIVA</span>
          </div>

          {/* Monumental Headline */}
          <h2 className="final-cta-giant-headline font-display">
            A próxima sessão <br />
            <span className="text-gradient">começa aqui.</span>
          </h2>

          <p className="final-cta-lead-text">
            Mais de <strong>60.000 filmes, séries e canais ao vivo</strong> esperando por você.
            Transforme sua Smart TV, smartphone ou TV Box na central definitiva de entretenimento com qualidade 4K HDR.
          </p>

          {/* Premium Value Chips Row */}
          <div className="final-cta-features-strip">
            <div className="cta-feature-chip">
              <Tv size={16} className="text-cyan-400" />
              <span>Smart TV, Celular, PC e TV Box</span>
            </div>
            <div className="cta-feature-chip">
              <ShieldCheck size={16} className="text-emerald-400" />
              <span>Garantia de 7 Dias • Risco Zero</span>
            </div>
            <div className="cta-feature-chip">
              <Zap size={16} className="text-amber-400" />
              <span>Ativação Imediata no WhatsApp</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="final-cta-buttons-group">
            <Button
              href="#planos"
              variant="primary"
              size="lg"
              className="btn-glow-master final-cta-primary-btn"
              icon={<ArrowRight size={22} />}
            >
              ESCOLHER MEU PLANO AGORA
            </Button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="final-cta-whatsapp-btn"
            >
              <MessageCircle size={18} className="text-emerald-400" />
              <span>Tirar Dúvidas no WhatsApp</span>
            </a>
          </div>

          {/* Security & Reassurance Micro Footer */}
          <div className="final-cta-reassurance-row">
            <span className="reassurance-item">✦ PIX & Cartão em até 12x</span>
            <span className="reassurance-dot">•</span>
            <span className="reassurance-item">✦ Sem contratos ou fidelidade</span>
            <span className="reassurance-dot">•</span>
            <span className="reassurance-item">✦ Suporte humanizado 24h</span>
          </div>
        </div>
      </div>
    </section>
  );
};

