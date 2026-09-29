import React, { useState } from 'react';
import { Play, Tv, Zap, Headphones, CheckCircle2, ShieldCheck, ArrowRight, Film, Radio } from 'lucide-react';
import { Button } from './Button';
import { ImagePlaceholder } from './ImagePlaceholder';

export const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x: x * 15, y: -y * 15 });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section className="hero-section" id="hero" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      {/* Precision Ambient Volumetric Glows */}
      <div className="ambient-glow ambient-cyan" style={{ top: '-15%', left: '8%', width: '650px', height: '650px', opacity: 0.35 }} />
      <div className="ambient-glow ambient-magenta" style={{ top: '25%', right: '2%', width: '750px', height: '750px', opacity: 0.3 }} />
      <div className="ambient-glow ambient-purple" style={{ bottom: '-15%', left: '30%', width: '850px', height: '650px', opacity: 0.25 }} />

      {/* Subtle Tech Grid Lines in Background */}
      <div className="hero-subtle-grid" aria-hidden="true" />

      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Headlines & Call to Actions */}
          <div className="hero-content">
            <div className="hero-badge-wrap">
              <div className="hero-badge">
                <span className="pulse-dot" />
                <span>Sua próxima sessão começa aqui</span>
                <Film size={14} className="text-pink-400" />
              </div>
            </div>

            <h1 className="hero-title">
              TODO O SEU <br />
              <span className="text-gradient">ENTRETENIMENTO.</span> <br />
              UMA NOVA EXPERIÊNCIA.
            </h1>

            <p className="hero-subtitle">
              Filmes recém-saídos do cinema, séries consagradas, esportes ao vivo sem delay e canais exclusivos
              reunidos em uma plataforma fluida, ultra-estável e com resolução nativa em 4K HDR.
            </p>

            {/* Main CTAs */}
            <div className="hero-cta-group">
              <Button
                href="#planos"
                variant="primary"
                size="lg"
                className="btn-glow-master"
                icon={<ArrowRight size={18} />}
              >
                CONHECER BORAFLIX
              </Button>

              <Button
                href="#como-funciona"
                variant="secondary"
                size="lg"
                icon={<Play size={16} className="fill-current text-cyan-400" />}
                iconPosition="left"
              >
                VER COMO FUNCIONA
              </Button>
            </div>

            {/* Quick Micro-benefits Strip */}
            <div className="hero-perks">
              <div className="hero-perk-item">
                <Tv className="hero-perk-icon" />
                <span>Multidispositivo</span>
              </div>
              <div className="hero-perk-item">
                <Zap className="hero-perk-icon" />
                <span>Ativação Imediata</span>
              </div>
              <div className="hero-perk-item">
                <Headphones className="hero-perk-icon" />
                <span>Suporte Humano 24/7</span>
              </div>
              <div className="hero-perk-item">
                <ShieldCheck className="hero-perk-icon" />
                <span>Sinal Sem Travamento</span>
              </div>
            </div>
          </div>

          {/* Right Column: Cinematic 3D Multi-Layer Campaign Composition */}
          <div className="hero-visual-wrap">
            {/* Center Ambient Backlight */}
            <div className="hero-ambient-glow-center" />

            {/* Main Screen Device Mockup with 3D Tilt Reactivity */}
            <div
              className="hero-mockup-frame group"
              style={{
                transform: `perspective(1000px) rotateY(${mousePos.x}deg) rotateX(${mousePos.y}deg)`,
                transition: 'transform 200ms ease-out'
              }}
            >
              <div className="mockup-top-bar">
                <div className="mockup-dots">
                  <span className="mockup-dot active" />
                  <span className="mockup-dot" />
                  <span className="mockup-dot" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono text-cyan-400 font-bold tracking-wider">
                    BORAFLIX CINEMA OS • 4K ULTRA HD
                  </span>
                </div>
              </div>

              {/* Mockup Screen View displaying generated 3D ecosystem */}
              <div className="mockup-screen-content">
                <img
                  src="/assets/generated/hero-mockup.jpg"
                  alt="Ecossistema BoraFlix em Smart TV, Tablet e Smartphone"
                  className="mockup-main-cover"
                />

                <div className="mockup-overlay-controls">
                  <div>
                    <span className="mockup-badge-live">
                      <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-ping inline-block" />
                      Ao Vivo • Transmissão 4K HDR
                    </span>
                    <h3 className="text-white font-bold text-base mt-1 drop-shadow-md">
                      BoraFlix Cinema & Streaming
                    </h3>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[10px] bg-black/70 backdrop-blur-md px-2.5 py-1 rounded border border-white/20 text-slate-200 font-mono">
                      Dolby Atmos 7.1
                    </span>
                    <span className="text-[10px] bg-cyan-500/25 text-cyan-300 px-2.5 py-1 rounded border border-cyan-500/40 font-bold font-mono">
                      60 FPS
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Satellite Card 1 (Top-Right): Series in High Demand */}
            <div
              className="hero-floating-card top-right"
              style={{
                transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`
              }}
            >
              <img
                src="/assets/capas/Serie-08-1.webp"
                alt="The Boys Capa"
                className="card-avatar-mini"
              />
              <div className="flex flex-col text-left">
                <span className="text-[10px] font-mono text-pink-400 font-bold uppercase tracking-wider">
                  Série em Alta
                </span>
                <span className="text-xs font-bold text-white">The Boys</span>
                <span className="text-[11px] text-slate-400 font-medium">Temporada Completa</span>
              </div>
            </div>

            {/* Floating Satellite Card 2 (Bottom-Left): 3D Brand Badge */}
            <div
              className="hero-floating-card bottom-left"
              style={{
                transform: `translate(${-mousePos.x * 0.6}px, ${-mousePos.y * 0.6}px)`
              }}
            >
              <img
                src="/assets/logos/boraflix-icon.png"
                alt="BoraFlix Oficial"
                className="card-logo-mini"
              />
              <div className="flex flex-col text-left">
                <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-wider">
                  Acesso Total Liberado
                </span>
                <span className="text-xs font-bold text-white">+60.000 Títulos</span>
                <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-semibold">
                  <CheckCircle2 size={12} />
                  <span>Sinal Sem Quedas</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Structural Code Placeholder for Rule 8 & 31 */}
        <div className="hidden" aria-hidden="true">
          <ImagePlaceholder
            id="hero-main"
            label="INSERIR MOCKUP PRINCIPAL BORAFLIX AQUI"
            src="/assets/generated/hero-mockup.jpg"
            alt="Mockup Principal BoraFlix 3D"
          />
        </div>
      </div>
    </section>
  );
};
