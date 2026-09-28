import React, { useState } from 'react';
import { Check, ShieldCheck, ArrowRight, Sparkles, Zap, Lock } from 'lucide-react';
import { pricingPlans } from '../data/pricingData';
import { Button } from './Button';

export const Pricing: React.FC = () => {
  const [selectedPlanId, setSelectedPlanId] = useState<string>('trimestral');

  return (
    <section className="section-wrap" id="planos">
      {/* Visual Ambient Transition from previous section */}
      <div className="ambient-glow ambient-magenta" style={{ top: '15%', left: '50%', width: '700px', height: '600px', transform: 'translateX(-50%)' }} />
      <div className="ambient-glow ambient-cyan" style={{ bottom: '10%', right: '15%', width: '500px', height: '500px' }} />

      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>Valores Transparentes</span>
          </div>
          <h2 className="section-title">
            Mais entretenimento. <br />
            <span className="text-gradient">Do seu jeito.</span>
          </h2>
          <p className="section-subtitle">
            Planos simples e sem fidelidade. Cancele quando quiser, sem taxas escondidas ou surpresas na fatura.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="pricing-grid">
          {pricingPlans.map(plan => {
            const isFeatured = plan.isPopular;

            return (
              <div
                key={plan.id}
                className={`pricing-card ${isFeatured ? 'featured' : ''}`}
                onClick={() => setSelectedPlanId(plan.id)}
              >
                {/* Popular Highlight Badge */}
                {plan.badge && (
                  <div className="pricing-badge-popular">
                    {plan.badge}
                  </div>
                )}

                {/* Plan Header */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display text-xl font-bold text-white">
                      {plan.name}
                    </h3>
                    {plan.savingsBadge && (
                      <span className="text-[11px] font-mono font-bold text-cyan-300 bg-cyan-500/20 px-2 py-0.5 rounded border border-cyan-500/30">
                        {plan.savingsBadge}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                    {plan.description}
                  </p>

                  {/* Price Tag */}
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="price-val">{plan.priceFormatted}</span>
                    <span className="text-slate-400 text-sm font-semibold">{plan.period}</span>
                  </div>

                  {plan.monthlyEquivalent && (
                    <span className="text-xs text-cyan-400 font-medium block">
                      {plan.monthlyEquivalent}
                    </span>
                  )}
                </div>

                {/* Feature Checklist */}
                <div className="price-features-list">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="price-feature-item">
                      <Check className="price-check-icon" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Action Button */}
                <div className="mt-auto pt-6 border-t border-white/10">
                  <Button
                    variant={isFeatured ? 'primary' : 'secondary'}
                    size="lg"
                    className="w-full justify-center"
                    icon={<ArrowRight size={18} />}
                  >
                    {plan.ctaText}
                  </Button>

                  {plan.ctaSubtext && (
                    <span className="text-[11px] text-slate-400 text-center block mt-3">
                      {plan.ctaSubtext}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Guarantee and Security Seal Banner */}
        <div className="mt-14 max-w-2xl mx-auto glass-panel p-6 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 flex-shrink-0">
              <ShieldCheck size={26} />
            </div>
            <div>
              <h4 className="font-display text-base font-bold text-white">
                Garantia Incondicional de Satisfação
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Experimente a BoraFlix sem riscos. Se não ficar satisfeito com a qualidade, nós devolvemos o seu dinheiro.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-300 flex-shrink-0">
            <Lock size={14} className="text-cyan-400" />
            <span>Checkout Seguro 256-bit</span>
          </div>
        </div>
      </div>
    </section>
  );
};
