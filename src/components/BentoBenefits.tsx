import React from 'react';
import { Zap, Tv, Calendar, Trophy, MessageCircle, MonitorSmartphone, Sparkles, CheckCircle2 } from 'lucide-react';

export const BentoBenefits: React.FC = () => {
  return (
    <section className="section-wrap" id="beneficios">
      <div className="ambient-glow ambient-cyan" style={{ top: '20%', right: '10%', width: '500px', height: '500px' }} />

      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>Infraestrutura & Tecnologia</span>
          </div>
          <h2 className="section-title">
            Tudo pensado para você <span className="text-gradient">aproveitar mais.</span>
          </h2>
          <p className="section-subtitle">
            Muito além de um catálogo completo: uma estrutura de ponta desenvolvida para que você
            esqueça telas travadas, buffers infinitos e configurações confusas.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid">
          {/* Card 1 (Span 2): CDN Ultra-Veloz & Anti-Travamento */}
          <div className="bento-card bento-span-2 group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="bento-icon-pill">
                  <Zap size={24} className="text-cyan-400" />
                </div>
                <span className="text-xs font-mono text-cyan-400 font-bold bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full">
                  99.9% UPTIME COMPROVADO
                </span>
              </div>

              <h3 className="font-display text-2xl font-bold text-white mb-2">
                Servidores Dedicados com CDN de Baixa Latência
              </h3>

              <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-xl mb-6">
                Nossa rede de servidores distribuídos garante que a transmissão venha do ponto mais próximo da sua conexão,
                eliminando o buffering e quedas de sinal mesmo nos horários de pico ou grandes finais esportivas.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10 text-xs text-slate-300">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-cyan-400" />
                <span>Roteamento Inteligente de Tráfego</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-cyan-400" />
                <span>Otimizado para conexões a partir de 15 Mbps</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-cyan-400" />
                <span>Compressão H.265 de alta fidelidade</span>
              </div>
            </div>
          </div>

          {/* Card 2: Qualidade 4K Ultra HD & HDR10 */}
          <div className="bento-card group">
            <div>
              <div className="bento-icon-pill">
                <Tv size={24} className="text-pink-500" />
              </div>

              <h3 className="font-display text-xl font-bold text-white mb-2">
                Qualidade 4K UHD & HDR10
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Cores vibrantes, contraste cinematográfico e áudio imersivo que transformam a sua sala de estar em uma verdadeira sala de cinema.
              </p>
            </div>

            <span className="text-[11px] font-mono text-pink-400 font-semibold">
              Suporte a Dolby Audio e HDR
            </span>
          </div>

          {/* Card 3: Esportes Ao Vivo Sem Delay */}
          <div className="bento-card group">
            <div>
              <div className="bento-icon-pill">
                <Trophy size={24} className="text-amber-400" />
              </div>

              <h3 className="font-display text-xl font-bold text-white mb-2">
                Esportes Sem Delay
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Assista aos gols antes do vizinho gritar. Campeonatos nacionais, Champions League, UFC e automobilismo em sinal direto de transmissão.
              </p>
            </div>

            <span className="text-[11px] font-mono text-amber-400 font-semibold">
              Taxa de 60 FPS fluida
            </span>
          </div>

          {/* Card 4: Guia EPG Atualizado */}
          <div className="bento-card group">
            <div>
              <div className="bento-icon-pill">
                <Calendar size={24} className="text-purple-400" />
              </div>

              <h3 className="font-display text-xl font-bold text-white mb-2">
                Guia EPG em Tempo Real
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Consulte a programação completa dos canais, com sinopses, horários de início e término para nunca perder seus programas favoritos.
              </p>
            </div>

            <span className="text-[11px] font-mono text-purple-400 font-semibold">
              Grade 24 Horas Atualizada
            </span>
          </div>

          {/* Card 5: Suporte Humanizado Via WhatsApp */}
          <div className="bento-card group">
            <div>
              <div className="bento-icon-pill">
                <MessageCircle size={24} className="text-emerald-400" />
              </div>

              <h3 className="font-display text-xl font-bold text-white mb-2">
                Suporte Humanizado 24/7
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                Atendimento rápido pelo WhatsApp com atendentes reais prontos para ajudar na instalação e tirar qualquer dúvida sem robôs chatos.
              </p>
            </div>

            <span className="text-[11px] font-mono text-emerald-400 font-semibold">
              Resposta Rápida no WhatsApp
            </span>
          </div>

          {/* Card 6 (Span 2 or Wide): 4 Telas Simultâneas */}
          <div className="bento-card bento-span-2 group">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <div className="bento-icon-pill">
                  <MonitorSmartphone size={24} className="text-cyan-400" />
                </div>

                <h3 className="font-display text-2xl font-bold text-white mb-2">
                  Até 4 Telas Simultâneas sem Pagar a Mais
                </h3>

                <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-lg">
                  Toda a casa conectada ao mesmo tempo. Assista na Smart TV da sala, enquanto alguém vê séries no quarto e as crianças assistem a desenhos no celular ou tablet.
                </p>
              </div>

              <div className="flex-shrink-0 bg-white/5 p-4 rounded-xl border border-white/10 text-center">
                <span className="font-display text-3xl font-extrabold text-gradient">4 TELAS</span>
                <p className="text-xs text-slate-400 mt-1">Inclusas em todos os planos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
