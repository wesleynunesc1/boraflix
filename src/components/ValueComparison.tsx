import React from 'react';
import { ArrowDown, CheckCircle2, XCircle, ArrowRight, Layers, Flame, DollarSign } from 'lucide-react';
import { Button } from './Button';

export const ValueComparison: React.FC = () => {
  const fragmentedServices = [
    { name: 'Streamings de Filmes & Séries', desc: 'Várias mensalidades acumuladas' },
    { name: 'Pacotes de Futebol & Lutas', desc: 'Assinaturas pay-per-view extras' },
    { name: 'Canais Abertos & Fechados', desc: 'Mensalidades de TV a cabo tradicional' },
    { name: 'Conteúdo Infantil & Desenhos', desc: 'Plataformas separadas para crianças' }
  ];

  const unifiedPerks = [
    'Mais de 60.000 títulos reunidos em 1 único app',
    'Todos os campeonatos e jogos ao vivo em 60 FPS',
    'Canais em Full HD e 4K HDR sem travamento',
    'Até 4 telas simultâneas para toda a família',
    'A partir de R$ 15,00/mês equivalente no Anual'
  ];

  return (
    <section className="value-comparison-section" id="comparativo">
      {/* Dynamic Ambient Background Lights */}
      <div className="ambient-glow ambient-cyan" style={{ top: '20%', left: '10%', width: '550px', height: '550px' }} />
      <div className="ambient-glow ambient-magenta" style={{ bottom: '15%', right: '10%', width: '600px', height: '600px' }} />

      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <DollarSign size={14} />
            <span>Comparativo de Valor Real</span>
          </div>
          <h2 className="section-title">
            Quanto custa ter <br />
            <span className="text-gradient">entretenimento de verdade?</span>
          </h2>
          <p className="section-subtitle">
            Separadamente, a conta pode ficar bem maior. Assinar múltiplos serviços isolados
            gera dezenas de faturas e custos desnecessários todo mês.
          </p>
        </div>

        {/* Transformation Comparison Architecture */}
        <div className="comparison-board">
          {/* Left Side: The Old Fragmented Reality */}
          <div className="comparison-side old-way group">
            <div className="comparison-side-badge badge-warning">
              <XCircle size={14} />
              <span>Assinaturas Separadas</span>
            </div>

            <h3 className="font-display text-2xl font-bold text-slate-200 mb-2">
              Vários serviços. Várias cobranças.
            </h3>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              Para ter acesso aos filmes do momento, séries premiadas, jogos do seu time e canais ao vivo,
              você precisaria contratar 5 a 7 planos diferentes.
            </p>

            <div className="comparison-list">
              {fragmentedServices.map((item, idx) => (
                <div key={idx} className="comparison-item old-item">
                  <div className="w-2 h-2 rounded-full bg-rose-500 flex-shrink-0" />
                  <div className="flex-1">
                    <span className="text-sm font-semibold text-slate-200 block">{item.name}</span>
                    <span className="text-xs text-slate-400">{item.desc}</span>
                  </div>
                  <span className="text-xs font-mono text-rose-400 font-bold">Cobrança extra</span>
                </div>
              ))}
            </div>

            <div className="comparison-footer-tag tag-expensive">
              <span className="text-xs text-slate-400">Total mensal estimado no mercado:</span>
              <span className="font-display text-xl font-bold text-rose-400 line-through">
                R$ 300 a R$ 500+ /mês
              </span>
            </div>
          </div>

          {/* Central Convergence Hub with BoraFlix 3D Symbol */}
          <div className="comparison-bridge">
            <div className="bridge-line" />
            <div className="bridge-logo-orb">
              <img
                src="/assets/logos/boraflix-logo.png"
                alt="BoraFlix Oficial"
                className="w-16 h-8 object-contain"
              />
              <span className="bridge-text">TUDO UNIFICADO</span>
            </div>
            <div className="bridge-line" />
          </div>

          {/* Right Side: The BoraFlix Unified Solution */}
          <div className="comparison-side new-way group">
            <div className="comparison-side-badge badge-success">
              <CheckCircle2 size={14} className="text-cyan-400" />
              <span>Solução BoraFlix</span>
            </div>

            <h3 className="font-display text-2xl font-bold text-white mb-2">
              Uma escolha muito mais simples e inteligente.
            </h3>
            <p className="text-sm text-slate-300 mb-6 leading-relaxed">
              Tudo o que você mais gosta de assistir centralizado em um só lugar,
              com acesso imediato, 4 telas e qualidade de cinema até 4K UHD.
            </p>

            <div className="comparison-list">
              {unifiedPerks.map((perk, idx) => (
                <div key={idx} className="comparison-item new-item">
                  <CheckCircle2 size={16} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-slate-200">{perk}</span>
                </div>
              ))}
            </div>

            <div className="comparison-footer-tag tag-savings">
              <div>
                <span className="text-xs text-cyan-300 uppercase tracking-wider font-mono font-bold block">
                  A partir de apenas:
                </span>
                <div className="flex items-baseline gap-1">
                  <span className="text-xs font-bold text-white">R$</span>
                  <span className="font-display text-3xl font-extrabold text-gradient">15,00</span>
                  <span className="text-xs text-slate-400 font-semibold">/mês equivalente</span>
                </div>
              </div>

              <span className="badge-pill-save">
                Até R$ 180 de economia
              </span>
            </div>
          </div>
        </div>

        {/* Direct Narrative Transition to Plans */}
        <div className="mt-12 text-center flex flex-col items-center gap-4">
          <p className="text-sm md:text-base text-slate-300 max-w-lg leading-relaxed">
            Economize de verdade e tenha acesso ilimitado sem burocracia ou taxas de cancelamento.
          </p>
          <Button
            href="#planos"
            variant="primary"
            size="lg"
            icon={<ArrowRight size={18} />}
          >
            ESCOLHER MEU PLANO
          </Button>
        </div>
      </div>
    </section>
  );
};
