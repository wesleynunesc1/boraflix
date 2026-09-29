import React from 'react';
import { CheckCircle2, XCircle, ArrowRight, DollarSign, Sparkles } from 'lucide-react';
import { Button } from './Button';

export const ValueComparison: React.FC = () => {
  const fragmentedServices = [
    { name: 'Múltiplos streamings de filmes & séries', desc: 'Várias faturas separadas todo mês' },
    { name: 'Pacotes esportivos & pay-per-view', desc: 'Assinaturas extras para acompanhar futebol e lutas' },
    { name: 'Canais abertos e por assinatura', desc: 'Mensalidades elevadas de operadoras tradicionais' },
    { name: 'Conteúdo infantil e desenhos', desc: 'Cobranças adicionais por perfil ou plataforma' }
  ];

  const unifiedPerks = [
    'Mais de 60.000 títulos reunidos em um só aplicativo',
    'Todos os campeonatos e jogos ao vivo em 60 FPS',
    'Transmissão estável em Full HD e 4K HDR sem travamento',
    'Até 4 telas simultâneas para toda a família curtir junto',
    'A partir de R$ 15,00/mês equivalente no Plano Anual'
  ];

  return (
    <section className="section-wrap comparison-section-wrap" id="comparativo">
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <DollarSign size={13} className="text-cyan-400" />
            <span>ECONOMIA INTELIGENTE</span>
          </div>
          <h2 className="section-title font-display">
            Quanto custa ter <br />
            <span className="text-gradient">entretenimento de verdade?</span>
          </h2>
          <p className="section-subtitle">
            Separadamente, a conta do entretenimento familiar pode se tornar muito pesada.
            Veja o comparativo visual entre manter dezenas de assinaturas dispersas e unificar tudo na BoraFlix.
          </p>
        </div>

        {/* Comparison Board Layout */}
        <div className="comparison-board">
          {/* Left Side: Dispersed subscriptions */}
          <div className="comparison-card side-dispersed group">
            <div className="comparison-card-top">
              <div className="comparison-badge badge-dispersed">
                <XCircle size={14} />
                <span>Serviços Separados</span>
              </div>
              <span className="comparison-caption-tag font-mono">MODELO TRADICIONAL</span>
            </div>

            <h3 className="comparison-side-title font-display">
              Várias assinaturas. Múltiplas faturas.
            </h3>
            <p className="comparison-side-desc">
              Para ter filmes novos, séries premiadas, jogos do seu time e canais ao vivo, você precisa contratar diversos planos isolados.
            </p>

            <div className="comparison-items-list">
              {fragmentedServices.map((item, idx) => (
                <div key={idx} className="comparison-row row-negative">
                  <div className="status-indicator-dot red" />
                  <div className="comparison-row-info">
                    <span className="row-title">{item.name}</span>
                    <span className="row-sub">{item.desc}</span>
                  </div>
                  <span className="row-tag-expense font-mono">Fatura extra</span>
                </div>
              ))}
            </div>

            <div className="comparison-summary-box box-negative">
              <span className="summary-label">Média estimada no mercado:</span>
              <span className="summary-price-strike font-display">
                R$ 300 a R$ 500+ /mês
              </span>
              <span className="summary-note">* Estimativa ilustrativa ao contratar múltiplos serviços individuais.</span>
            </div>
          </div>

          {/* Central Convergence Orb */}
          <div className="comparison-bridge-center hidden lg:flex">
            <div className="bridge-vertical-line" />
            <div className="bridge-icon-halo">
              <img
                src="/assets/logos/boraflix-icon.png"
                alt="BoraFlix"
                className="bridge-logo-img"
              />
              <span className="bridge-label font-mono">TUDO EM 1</span>
            </div>
            <div className="bridge-vertical-line" />
          </div>

          {/* Right Side: BoraFlix Solution */}
          <div className="comparison-card side-boraflix group">
            <div className="comparison-card-top">
              <div className="comparison-badge badge-boraflix">
                <CheckCircle2 size={14} className="text-cyan-400" />
                <span>Solução BoraFlix</span>
              </div>
              <span className="comparison-caption-tag font-mono text-cyan-400">TUDO UNIFICADO</span>
            </div>

            <h3 className="comparison-side-title font-display text-white">
              Uma escolha muito mais simples e inteligente.
            </h3>
            <p className="comparison-side-desc text-slate-300">
              Tudo o que sua casa mais gosta centralizado em uma experiência única, sem multas, sem cabos e com 4 telas inclusas.
            </p>

            <div className="comparison-items-list">
              {unifiedPerks.map((perk, idx) => (
                <div key={idx} className="comparison-row row-positive">
                  <CheckCircle2 size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="row-title-positive">{perk}</span>
                </div>
              ))}
            </div>

            <div className="comparison-summary-box box-positive">
              <div>
                <span className="summary-label text-cyan-300 font-mono">A partir de apenas:</span>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="price-curr text-white font-bold">R$</span>
                  <span className="price-val font-display text-gradient text-3xl font-extrabold">15,00</span>
                  <span className="price-period text-slate-400 text-xs font-semibold">/mês equivalente</span>
                </div>
              </div>

              <div className="economy-pill">
                <Sparkles size={12} className="text-amber-400" />
                <span>Até 50% de economia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="comparison-banner-action">
          <div className="banner-text-block">
            <h4 className="banner-heading font-display">
              Pronto para simplificar seu entretenimento?
            </h4>
            <p className="banner-subheading">
              Comece agora sem burocracia. Acesso liberado em menos de 3 minutos com suporte humano no WhatsApp.
            </p>
          </div>

          <div className="banner-btn-wrap">
            <Button
              href="#planos"
              variant="primary"
              size="lg"
              className="btn-glow-master"
              icon={<ArrowRight size={18} />}
            >
              VER TODOS OS PLANOS
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
