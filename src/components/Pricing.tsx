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

        {/* Security, Warranty & Multi-screen Trust Footer */}
        <div className="mt-16 max-w-4xl mx-auto glass-panel p-6 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 flex-shrink-0">
              <ShieldCheck size={26} />
            </div>
            <div>
              <h4 className="font-display text-base font-bold text-white">
                Garantia Incondicional de 7 Dias
              </h4>
              <p className="text-xs text-slate-400 mt-0.5 max-w-md">
                Acesse todo o catálogo e teste a estabilidade. Se não ficar totalmente satisfeito,
                solicite o reembolso integral com suporte via WhatsApp.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-slate-300 flex-shrink-0">
            <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
              <Zap size={14} className="text-amber-400" />
              <span>4 Telas 4K Inclusas</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
              <Lock size={14} className="text-cyan-400" />
              <span>PIX & Cartão em até 12x</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
