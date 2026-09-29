import React from 'react';
import { Zap, Tv, Calendar, Trophy, MessageCircle, MonitorSmartphone, Layers, CheckCircle2, ShieldCheck, Activity } from 'lucide-react';

export const BentoBenefits: React.FC = () => {
  return (
    <section className="section-wrap bento-section-wrap" id="beneficios">
      <div className="ambient-glow ambient-cyan" style={{ top: '15%', right: '8%', width: '600px', height: '600px', opacity: 0.2 }} />
      <div className="ambient-glow ambient-magenta" style={{ bottom: '10%', left: '5%', width: '500px', height: '500px', opacity: 0.18 }} />

      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Layers size={14} className="text-cyan-400" />
            <span>Infraestrutura & Vantagens Exclusivas</span>
          </div>
          <h2 className="section-title">
            Tudo pensado para você <br />
            <span className="text-gradient">aproveitar mais.</span>
          </h2>
          <p className="section-subtitle">
            Muito além de um catálogo completo: uma engenharia de transmissão robusta projetada
            para que você nunca mais sofra com travamentos, buffers ou menus confusos.
          </p>
        </div>

        {/* Dynamic Bento Composition with Varied Dimensions (Section 13) */}
        <div className="bento-composition-grid">
          {/* Bento Card 1 (Span 2x2 Hero Feature): Ultra-Fast CDN Network */}
          <div className="bento-item bento-hero-card group">
            <div className="bento-inner-content">
              <div className="flex items-center justify-between mb-4">
                <div className="bento-icon-halo">
                  <Zap size={24} className="text-cyan-400" />
                </div>
                <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/25 px-3 py-1 rounded-full text-emerald-400 font-mono text-xs font-bold">
                  <Activity size={14} className="animate-pulse" />
                  <span>LATÊNCIA MÉDIA: 14MS</span>
                </div>
              </div>

              <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
                Rede CDN Dedicada com Transmissão Anti-Travamento
              </h3>

              <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-xl mb-6">
                Nossa infraestrutura distribuída roteia os dados automaticamente pelo servidor mais próximo
                da sua residência. Isso garante reprodução instantânea e estabilidade ininterrupta mesmo durante
                finais de campeonatos esportivos ou grandes estreias de cinema.
              </p>

              <div className="bento-tech-specs-row">
                <div className="tech-spec-item">
                  <CheckCircle2 size={15} className="text-cyan-400 flex-shrink-0" />
                  <span>Roteamento Inteligente Anti-Quedas</span>
                </div>
                <div className="tech-spec-item">
                  <CheckCircle2 size={15} className="text-cyan-400 flex-shrink-0" />
                  <span>Otimizado para conexões padrão</span>
                </div>
                <div className="tech-spec-item">
                  <CheckCircle2 size={15} className="text-cyan-400 flex-shrink-0" />
                  <span>Codec H.265 de alta fidelidade visual</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bento Card 2: 4K Ultra HD & HDR10 */}
          <div className="bento-item bento-tall-card group">
            <div className="bento-inner-content flex flex-col justify-between h-full">
              <div>
                <div className="bento-icon-halo">
                  <Tv size={24} className="text-pink-400" />
                </div>

                <h3 className="font-display text-xl font-bold text-white mb-2">
                  Qualidade 4K UHD & HDR10
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  Nitidez cristalina com suporte a cores profundas e áudio surround 5.1/7.1 Dolby Atmos.
                </p>
              </div>

              <div className="bento-card-badge-footer">
                <span className="font-mono text-xs text-pink-400 font-bold uppercase tracking-wider">
                  Dolby Audio & HDR10
                </span>
              </div>
            </div>
          </div>

          {/* Bento Card 3: Esportes Ao Vivo Sem Delay */}
          <div className="bento-item bento-regular-card group">
            <div className="bento-inner-content">
              <div className="bento-icon-halo">
                <Trophy size={24} className="text-amber-400" />
              </div>

              <h3 className="font-display text-xl font-bold text-white mb-2">
                Esportes Sem Delay
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Assista aos gols no tempo real da jogada. Campeonatos nacionais, Champions League, UFC e F1 em sinal direto.
              </p>

              <span className="font-mono text-xs text-amber-400 font-bold">
                Taxa de 60 FPS Fluida
              </span>
            </div>
          </div>

          {/* Bento Card 4: Guia EPG Atualizado */}
          <div className="bento-item bento-regular-card group">
            <div className="bento-inner-content">
              <div className="bento-icon-halo">
                <Calendar size={24} className="text-purple-400" />
              </div>

              <h3 className="font-display text-xl font-bold text-white mb-2">
                Guia EPG em Tempo Real
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Programação completa 24 horas por dia com sinopses, horários e lembretes automáticos.
              </p>

              <span className="font-mono text-xs text-purple-400 font-bold">
                Grade 100% Sincronizada
              </span>
            </div>
          </div>

          {/* Bento Card 5 (Span 2 Wide): 4 Telas Simultâneas */}
          <div className="bento-item bento-wide-card group">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <div className="bento-icon-halo">
                  <MonitorSmartphone size={24} className="text-cyan-400" />
                </div>

                <h3 className="font-display text-2xl font-bold text-white mb-2">
                  Até 4 Telas Simultâneas Sem Custos Extras
                </h3>

                <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-lg">
                  Toda a casa assiste ao mesmo tempo. Na Smart TV da sala, celular no transporte,
                  computador no escritório ou tablet das crianças sem derrubar a conexão de ninguém.
                </p>
              </div>

              <div className="bento-callout-box">
                <span className="font-display text-3xl md:text-4xl font-extrabold text-gradient">
                  4 TELAS
                </span>
                <p className="text-xs text-slate-400 mt-1 font-mono">Inclusas em todos os planos</p>
              </div>
            </div>
          </div>

          {/* Bento Card 6: Suporte Humanizado */}
          <div className="bento-item bento-regular-card group">
            <div className="bento-inner-content">
              <div className="bento-icon-halo">
                <MessageCircle size={24} className="text-emerald-400" />
              </div>

              <h3 className="font-display text-xl font-bold text-white mb-2">
                Suporte Humanizado 24/7
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Atendimento direto pelo WhatsApp com pessoas reais prontas para ajudar sem robôs complicados.
              </p>

              <span className="font-mono text-xs text-emerald-400 font-bold">
                Atendimento Imediato
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
