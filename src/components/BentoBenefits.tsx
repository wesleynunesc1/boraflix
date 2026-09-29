import React from 'react';
import { Zap, Tv, Smartphone, Tablet, Laptop, MessageCircle, Activity, CheckCircle2, ShieldCheck, Flame, Radio } from 'lucide-react';

export const BentoBenefits: React.FC = () => {
  return (
    <section className="section-wrap bento-editorial-section" id="beneficios">
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Zap size={13} className="text-cyan-400" />
            <span>TECNOLOGIA & INFRAESTRUTURA</span>
          </div>
          <h2 className="section-title font-display">
            Tudo pensado para você <br />
            <span className="text-gradient">aproveitar mais.</span>
          </h2>
          <p className="section-subtitle">
            Muito além de um catálogo completo: uma estrutura de alta fidelidade visual e servidores de baixa latência
            desenhados para garantir que seu sinal nunca trave no momento decisivo.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="bento-modern-grid">
          {/* Card 1: REDE CDN / ESTABILIDADE (Hero Bento Card - Spans 2 Cols) */}
          <div className="bento-card bento-card-cdn">
            <div className="bento-card-header">
              <div className="bento-pill-status">
                <span className="bento-pulse-dot" />
                <span>● Servidores Operacionais • Latência: 12ms</span>
              </div>
              <span className="bento-tech-tag font-mono">REDE DISTRIBUÍDA</span>
            </div>

            <div className="bento-body">
              <h3 className="bento-card-title font-display">
                Transmissão estável e otimizada
              </h3>
              <p className="bento-card-desc">
                Nossa rede CDN dedicada roteia os dados automaticamente pelo ponto mais próximo de você,
                garantindo inicialização instantânea dos vídeos e sinal liso mesmo nos maiores clássicos do futebol.
              </p>

              {/* Visual Component: Network Topology & Traffic Flow */}
              <div className="bento-network-visual">
                <div className="network-nodes-row">
                  <div className="network-node active">
                    <Radio size={16} className="text-cyan-400 animate-pulse" />
                    <span>Edge SP</span>
                  </div>
                  <div className="network-stream-line">
                    <span className="stream-particle" />
                  </div>
                  <div className="network-node active">
                    <Radio size={16} className="text-pink-400 animate-pulse" />
                    <span>Edge RJ</span>
                  </div>
                  <div className="network-stream-line">
                    <span className="stream-particle reverse" />
                  </div>
                  <div className="network-node destination">
                    <Tv size={16} className="text-emerald-400" />
                    <span>Sua Casa</span>
                  </div>
                </div>

                <div className="network-metrics-bar">
                  <div className="metric-item">
                    <span className="metric-label">Uptime Garantido</span>
                    <span className="metric-val text-emerald-400 font-mono">99.98%</span>
                  </div>
                  <div className="metric-item">
                    <span className="metric-label">Buffer Prevent</span>
                    <span className="metric-val text-cyan-400 font-mono">Anti-Delay H.265</span>
                  </div>
                  <div className="metric-item">
                    <span className="metric-label">Roteamento</span>
                    <span className="metric-val text-pink-400 font-mono">Automático</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: QUALIDADE (4K, UHD, HDR10) */}
          <div className="bento-card bento-card-quality">
            <div className="bento-card-header">
              <span className="bento-tech-tag font-mono">RESOLUÇÃO NATIVA</span>
              <span className="bento-badge-live">60 FPS</span>
            </div>

            <div className="bento-body">
              <h3 className="bento-card-title font-display">
                Qualidade Máxima
              </h3>
              <p className="bento-card-desc">
                Nitidez cinematográfica com cores mais vívidas, pretos profundos e som envolvente.
              </p>

              {/* Visual Component: High-End Badges Display */}
              <div className="bento-quality-visual">
                <div className="quality-pill-hero">
                  <span className="quality-big-badge">4K</span>
                  <div className="quality-meta">
                    <span className="quality-label font-bold text-white">ULTRA HD</span>
                    <span className="quality-sub text-slate-400">3840 × 2160 px</span>
                  </div>
                </div>

                <div className="quality-badges-row">
                  <div className="quality-micro-badge">
                    <span className="font-bold text-pink-400">HDR10+</span>
                    <span className="text-[10px] text-slate-400">Contraste Dinâmico</span>
                  </div>
                  <div className="quality-micro-badge">
                    <span className="font-bold text-cyan-400">DOLBY</span>
                    <span className="text-[10px] text-slate-400">Áudio 5.1 / 7.1</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: DISPOSITIVOS (Smart TV, Celular, Tablet, Notebook) */}
          <div className="bento-card bento-card-devices">
            <div className="bento-card-header">
              <span className="bento-tech-tag font-mono">MULTI-PLATAFORMA</span>
            </div>

            <div className="bento-body">
              <h3 className="bento-card-title font-display">
                Assista em Qualquer Tela
              </h3>
              <p className="bento-card-desc">
                Funciona direto no aparelho que você já tem na sua sala ou no bolso.
              </p>

              {/* Visual Component: 4 Devices Matrix */}
              <div className="bento-devices-matrix">
                <div className="device-chip">
                  <Tv size={22} className="text-cyan-400" />
                  <span className="device-chip-name">Smart TV</span>
                  <span className="device-chip-detail">Samsung / LG / Android</span>
                </div>
                <div className="device-chip">
                  <Smartphone size={22} className="text-pink-400" />
                  <span className="device-chip-name">Celular</span>
                  <span className="device-chip-detail">iOS & Android</span>
                </div>
                <div className="device-chip">
                  <Tablet size={22} className="text-purple-400" />
                  <span className="device-chip-name">Tablet</span>
                  <span className="device-chip-detail">iPad & Galaxy</span>
                </div>
                <div className="device-chip">
                  <Laptop size={22} className="text-amber-400" />
                  <span className="device-chip-name">Notebook</span>
                  <span className="device-chip-detail">PC / Mac / Web</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: 4 TELAS SIMULTÂNEAS (Visual representation of 4 screens active) */}
          <div className="bento-card bento-card-screens">
            <div className="bento-card-header">
              <span className="bento-tech-tag font-mono">FAMÍLIA UNIDA</span>
              <span className="screens-count-pill font-mono font-bold">4 TELAS</span>
            </div>

            <div className="bento-body">
              <h3 className="bento-card-title font-display">
                Até 4 Telas ao Mesmo Tempo
              </h3>
              <p className="bento-card-desc">
                Cada um assiste o que quiser, sem disputas e sem derrubar a conexão de ninguém.
              </p>

              {/* Visual Component: 4 Simultaneous Streams */}
              <div className="bento-screens-visual">
                <div className="screen-active-tile">
                  <div className="screen-tile-top">
                    <span className="screen-live-dot" />
                    <span className="screen-location">📺 TV da Sala</span>
                  </div>
                  <span className="screen-content-title">Futebol Ao Vivo 4K</span>
                </div>

                <div className="screen-active-tile">
                  <div className="screen-tile-top">
                    <span className="screen-live-dot" />
                    <span className="screen-location">🎬 Quarto Casal</span>
                  </div>
                  <span className="screen-content-title">Séries & Filmes</span>
                </div>

                <div className="screen-active-tile">
                  <div className="screen-tile-top">
                    <span className="screen-live-dot" />
                    <span className="screen-location">📱 Smartphone</span>
                  </div>
                  <span className="screen-content-title">No Transporte</span>
                </div>

                <div className="screen-active-tile">
                  <div className="screen-tile-top">
                    <span className="screen-live-dot" />
                    <span className="screen-location">💻 Tablet Kids</span>
                  </div>
                  <span className="screen-content-title">Desenhos Infantis</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 5: SUPORTE (Visual Chat Interface) */}
          <div className="bento-card bento-card-support">
            <div className="bento-card-header">
              <span className="bento-tech-tag font-mono">SUPORTE DEDICADO</span>
              <div className="support-status-badge">
                <span className="support-dot-pulse" />
                <span>● Atendimento disponível</span>
              </div>
            </div>

            <div className="bento-body">
              <h3 className="bento-card-title font-display">
                Ajuda Rápida no WhatsApp
              </h3>
              <p className="bento-card-desc">
                Esqueça robôs confusos. Nossa equipe humana te atende na hora para configurar e tirar dúvidas.
              </p>

              {/* Visual Component: Chat Conversation Mockup */}
              <div className="bento-chat-bubble-box">
                <div className="chat-bubble user-bubble">
                  <span className="bubble-text">"Precisa de ajuda para configurar?"</span>
                  <span className="bubble-time font-mono">14:02</span>
                </div>

                <div className="chat-bubble agent-bubble">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="agent-name font-bold text-xs text-cyan-400">BoraFlix Suporte</span>
                    <span className="text-[10px] text-slate-400 font-mono">Oficial</span>
                  </div>
                  <span className="bubble-text">"Claro! Vamos te ajudar 😊"</span>
                  <span className="bubble-time font-mono">14:02 ✓✓</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
