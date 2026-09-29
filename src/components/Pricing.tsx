import React, { useState } from 'react';
import { Check, ShieldCheck, ArrowRight, Zap, Lock, Award, Heart } from 'lucide-react';
import { pricingPlans } from '../data/pricingData';
import { Button } from './Button';

export const Pricing: React.FC = () => {
  const [selectedPlanId, setSelectedPlanId] = useState<string>('semestral');
  const WHATSAPP_NUMBER = '558594480239';

  const getPlanWhatsAppLink = (planName: string, price: string) => {
    const message = `Olá! Gostaria de assinar o Plano ${planName} da BoraFlix (${price}). Poderia me enviar os dados para ativação imediata?`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section className="section-wrap pricing-section-wrap" id="planos">
      {/* Cinematic Luminous Backdrop */}
      <div
        className="ambient-glow ambient-purple"
        style={{
          top: '15%',
          left: '50%',
          width: '800px',
          height: '600px',
          transform: 'translateX(-50%)',
          opacity: 0.35
        }}
      />
      <div
        className="ambient-glow ambient-cyan"
        style={{ bottom: '10%', right: '10%', width: '500px', height: '500px', opacity: 0.25 }}
      />

      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <ShieldCheck size={14} className="text-cyan-400" />
            <span>Valores Oficiais Transparentes</span>
          </div>
          <h2 className="section-title">
            Mais entretenimento. <br />
            <span className="text-gradient">Do seu jeito.</span>
          </h2>
          <p className="section-subtitle">
            Sem contratos longos ou multas de cancelamento. Escolha a duração ideal
            e aproveite descontos progressivos nos períodos maiores.
          </p>
        </div>

        {/* 4 Plans Pricing Grid */}
        <div className="pricing-grid-4">
          {pricingPlans.map(plan => {
            const isFeatured = plan.isPopular;
            const isBestValue = plan.isBestValue;
            const isSelected = selectedPlanId === plan.id;

            return (
              <div
                key={plan.id}
                className={`pricing-card-refined ${isFeatured ? 'featured-semestral' : ''} ${isBestValue ? 'best-value-anual' : ''} ${isSelected ? 'selected' : ''}`}
                onClick={() => setSelectedPlanId(plan.id)}
              >
                {/* Floating Highlight Badges */}
                {plan.badge && (
                  <div className={`pricing-badge-pill ${isFeatured ? 'badge-featured' : isBestValue ? 'badge-gold' : 'badge-regular'}`}>
                    {plan.badge}
                  </div>
                )}

                {/* Plan Title & Savings Header */}
                <div className="plan-header-block">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-display text-xl font-bold text-white">
                      {plan.name}
                    </h3>
                    {plan.originalPrice && (
                      <span className="text-xs font-mono text-slate-400 line-through">
                        {plan.originalPrice}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-400 mb-5 leading-relaxed min-h-[34px]">
                    {plan.description}
                  </p>

                  {/* High Hierarchy Main Price Display */}
                  <div className="price-main-block">
                    <span className="price-currency">R$</span>
                    <span className="price-giant-number">{plan.priceNumber}</span>
                    <span className="price-period-tag">{plan.period}</span>
                  </div>

                  {/* Monthly Equivalent Callout */}
                  <div className="plan-equivalent-pill">
                    <span className="text-xs font-medium text-cyan-300">
                      {plan.monthlyEquivalent}
                    </span>
                  </div>

                  {/* Total Savings Notification */}
                  {plan.totalSavings && (
                    <div className="text-[11px] font-mono text-emerald-400 font-bold mt-2">
                      ✦ {plan.totalSavings}
                    </div>
                  )}
                </div>

                {/* Feature Checklist */}
                <div className="price-features-list-refined">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="price-feature-row">
                      <Check className="price-check-icon-refined" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Action Button */}
                <div className="plan-action-block">
                  <Button
                    href={getPlanWhatsAppLink(plan.name, plan.priceFormatted)}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant={isFeatured || isBestValue ? 'primary' : 'secondary'}
                    size="md"
                    className="w-full justify-center text-sm py-3.5"
                    icon={<ArrowRight size={16} />}
                  >
                    {plan.ctaText}
                  </Button>

                  {plan.ctaSubtext && (
                    <span className="text-[11px] text-slate-400 text-center block mt-2.5">
                      {plan.ctaSubtext}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Security, Warranty & Multi-screen Trust Card */}
        <div className="pricing-guarantee-card">
          <div className="guarantee-left-col">
            <div className="guarantee-icon-orb">
              <ShieldCheck size={38} className="text-emerald-400" />
            </div>
            <div className="guarantee-text-block">
              <div className="guarantee-badge">
                <span className="guarantee-pulse-dot" />
                <span>RISCO ZERO • COMPRA 100% PROTEGIDA</span>
              </div>
              <h3 className="guarantee-title">
                Garantia Incondicional de 7 Dias
              </h3>
              <p className="guarantee-desc">
                Acesse todo o catálogo, teste a estabilidade de sinal em 4K HDR e aproveite em até 4 telas ao mesmo tempo. Se você não ficar 100% satisfeito, basta nos chamar no WhatsApp dentro do período e devolvemos seu dinheiro integralmente na hora, sem perguntas nem letras miúdas.
              </p>
            </div>
          </div>

          <div className="guarantee-perks-col">
            <div className="guarantee-perk-badge">
              <div className="guarantee-perk-icon-wrap amber">
                <Zap size={20} />
              </div>
              <div className="guarantee-perk-text">
                <span className="guarantee-perk-title">4 Telas 4K Inclusas</span>
                <span className="guarantee-perk-sub">Smart TV, Celular, PC e TV Box</span>
              </div>
            </div>

            <div className="guarantee-perk-badge">
              <div className="guarantee-perk-icon-wrap cyan">
                <Lock size={20} />
              </div>
              <div className="guarantee-perk-text">
                <span className="guarantee-perk-title">PIX & Cartão em até 12x</span>
                <span className="guarantee-perk-sub">Liberação imediata do acesso</span>
              </div>
            </div>

            <div className="guarantee-perk-badge">
              <div className="guarantee-perk-icon-wrap emerald">
                <Award size={20} />
              </div>
              <div className="guarantee-perk-text">
                <span className="guarantee-perk-title">Satisfação Garantida</span>
                <span className="guarantee-perk-sub">Suporte humanizado no WhatsApp</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
