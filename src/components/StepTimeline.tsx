import React from 'react';
import { CreditCard, KeyRound, SlidersHorizontal, PlayCircle, Sparkles } from 'lucide-react';

export const StepTimeline: React.FC = () => {
  const steps = [
    {
      number: '01',
      icon: <CreditCard size={22} />,
      title: 'Escolha seu plano',
      desc: 'Selecione o plano ideal para a sua necessidade (Mensal, Trimestral ou Semestral).'
    },
    {
      number: '02',
      icon: <KeyRound size={22} />,
      title: 'Receba seu acesso',
      desc: 'As credenciais e links de ativação chegam no seu WhatsApp e e-mail imediatamente.'
    },
    {
      number: '03',
      icon: <SlidersHorizontal size={22} />,
      title: 'Configure em minutos',
      desc: 'Siga o tutorial simples e ilustrado passo a passo no seu aplicativo preferido.'
    },
    {
      number: '04',
      icon: <PlayCircle size={22} />,
      title: 'Dê o play e aproveite',
      desc: 'Navegue por mais de 60.000 filmes, séries e canais em qualidade 4K Ultra HD.'
    }
  ];

  return (
    <section className="section-wrap" id="como-funciona">
      <div className="ambient-glow ambient-cyan" style={{ top: '30%', left: '50%', width: '600px', height: '600px', transform: 'translateX(-50%)' }} />

      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>Passo a Passo Simples</span>
          </div>
          <h2 className="section-title">
            Do primeiro clique <span className="text-gradient">ao play.</span>
          </h2>
          <p className="section-subtitle">
            Sem burocracia, sem visitas técnicas e sem contratos complicados.
            Em apenas 4 etapas você já está assistindo ao melhor do entretenimento.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="timeline-grid">
          <div className="timeline-connector" aria-hidden="true" />

          {steps.map((step, idx) => (
            <div key={idx} className="step-card group">
              <div className="step-number-badge font-display">
                {step.number}
              </div>

              <div className="text-cyan-400 mb-3 group-hover:text-pink-400 transition-colors duration-300">
                {step.icon}
              </div>

              <h3 className="font-display text-lg font-bold text-white mb-2">
                {step.title}
              </h3>

              <p className="text-sm text-slate-400 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
