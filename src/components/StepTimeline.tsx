import React from 'react';
import { CreditCard, KeyRound, SlidersHorizontal, PlayCircle, Play, Check } from 'lucide-react';

export const StepTimeline: React.FC = () => {
  const steps = [
    {
      number: '01',
      icon: <CreditCard size={24} />,
      title: 'Escolha seu plano',
      desc: 'Selecione a duração ideal para seu perfil (Mensal, Trimestral, Semestral ou Anual).'
    },
    {
      number: '02',
      icon: <KeyRound size={24} />,
      title: 'Receba seu acesso',
      desc: 'As credenciais e links de ativação chegam no seu WhatsApp e e-mail imediatamente.'
    },
    {
      number: '03',
      icon: <SlidersHorizontal size={24} />,
      title: 'Configure em minutos',
      desc: 'Siga o tutorial passo a passo ilustrado no seu aplicativo ou dispositivo preferido.'
    },
    {
      number: '04',
      icon: <PlayCircle size={24} />,
      title: 'Dê o play e aproveite',
      desc: 'Acesse mais de 60.000 filmes, séries e canais ao vivo em qualidade 4K Ultra HD.'
    }
  ];

  return (
    <section className="section-wrap journey-section-wrap" id="como-funciona">
      {/* Precision Ambient Volumetric Glow */}
      <div
        className="ambient-glow ambient-cyan"
        style={{ top: '25%', left: '50%', width: '700px', height: '600px', transform: 'translateX(-50%)', opacity: 0.2 }}
      />

      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Play size={12} className="fill-current text-cyan-400" />
            <span>Jornada Simples & Transparente</span>
          </div>
          <h2 className="section-title">
            Do primeiro clique <span className="text-gradient">ao play.</span>
          </h2>
          <p className="section-subtitle">
            Sem burocracia, sem visitas técnicas e sem cabos extras.
            Veja como é rápido começar a assistir aos seus conteúdos favoritos.
          </p>
        </div>

        {/* Continuous Journey Track (Section 12) */}
        <div className="journey-track-wrapper">
          {/* Luminous Connector Beam on Desktop */}
          <div className="journey-connector-beam" aria-hidden="true">
            <div className="journey-beam-fill" />
          </div>

          <div className="journey-nodes-grid">
            {steps.map((step, idx) => (
              <div key={idx} className="journey-node group">
                {/* Milestone Node Ring */}
                <div className="journey-milestone-ring">
                  <span className="journey-number-text">{step.number}</span>
                  <div className="journey-pulse-ring" />
                </div>

                {/* Node Content */}
                <div className="journey-node-body">
                  <div className="journey-icon-wrap">
                    {step.icon}
                  </div>

                  <h3 className="journey-node-title font-display">
                    {step.title}
                  </h3>

                  <p className="journey-node-desc">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
