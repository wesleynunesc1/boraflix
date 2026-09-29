import React from 'react';
import { CreditCard, CheckCircle2, SlidersHorizontal, Play, Sparkles, Smartphone, Tv } from 'lucide-react';

export const StepTimeline: React.FC = () => {
  const steps = [
    {
      stepNumber: '01',
      title: '1. Escolha seu plano',
      desc: 'Selecione a duração ideal para seu perfil (Mensal, Trimestral, Semestral ou Anual). Sem contratos de fidelidade nem multas.',
      badge: 'Sem fidelidade',
      icon: <CreditCard size={22} className="text-cyan-400" />
    },
    {
      stepNumber: '02',
      title: '2. Faça sua assinatura',
      desc: 'Pagamento rápido e 100% seguro via PIX com ativação em segundos ou cartão de crédito em até 12x com criptografia bancária.',
      badge: 'Aprovação instantânea',
      icon: <Sparkles size={22} className="text-pink-400" />
    },
    {
      stepNumber: '03',
      title: '3. Configure seu dispositivo',
      desc: 'Receba seus dados de acesso diretamente no WhatsApp junto com o tutorial ilustrado para sua Smart TV, TV Box, celular ou PC.',
      badge: 'Menos de 3 minutos',
      icon: <SlidersHorizontal size={22} className="text-purple-400" />
    },
    {
      stepNumber: '04',
      title: '4. Comece a assistir',
      desc: 'Pronto! Dê o play em mais de 60.000 conteúdos em 4K Ultra HD e aproveite em até 4 telas simultâneas com toda a família.',
      badge: 'Qualidade 4K HDR',
      icon: <Play size={22} className="fill-current text-cyan-400" />
    }
  ];

  return (
    <section className="section-wrap timeline-cinematic-section" id="como-funciona">
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={13} className="text-cyan-400" />
            <span>JORNADA SIMPLES EM 4 ETAPAS</span>
          </div>
          <h2 className="section-title">
            Do primeiro clique <span className="text-gradient">ao play.</span>
          </h2>
          <p className="section-subtitle">
            Sem equipamentos adicionais, sem visitas técnicas e sem fios passando pela sua casa.
            Veja como é simples e rápido ter a BoraFlix funcionando em qualquer tela.
          </p>
        </div>

        {/* Horizontal Timeline Container for Desktop & Flexible Stack for Mobile */}
        <div className="timeline-horizontal-wrapper">
          {/* Continuous Connector Line across steps on Desktop */}
          <div className="timeline-connector-line hidden lg:block" aria-hidden="true" />

          <div className="timeline-cards-grid">
            {steps.map((step, idx) => (
              <div key={idx} className="timeline-step-card group">
                {/* Step Milestone Badge with Number */}
                <div className="timeline-step-milestone">
                  <div className="timeline-orb">
                    <span className="timeline-num">{step.stepNumber}</span>
                  </div>
                  <span className="timeline-mini-badge">{step.badge}</span>
                </div>

                {/* Card Body */}
                <div className="timeline-card-inner">
                  <div className="timeline-icon-box">
                    {step.icon}
                  </div>
                  <h3 className="timeline-step-title font-display">
                    {step.title}
                  </h3>
                  <p className="timeline-step-desc">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Fast Action Prompt */}
        <div className="timeline-bottom-cta">
          <a href="#planos" className="btn btn-primary btn-md">
            Escolher Meu Plano e Começar
          </a>
          <span className="timeline-support-note">
            ✓ Configuração assistida pelo suporte via WhatsApp se precisar
          </span>
        </div>
      </div>
    </section>
  );
};
