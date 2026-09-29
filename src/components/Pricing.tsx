import React, { useState } from 'react';
import { Check, ShieldCheck, ArrowRight, Zap, Crown, Flame, Sparkles, Award } from 'lucide-react';
import { pricingPlans, getPlanWhatsAppUrl } from '../data/pricingData';
import { Button } from './Button';

export const Pricing: React.FC = () => {
  const [selectedPlanId, setSelectedPlanId] = useState<string>('semestral');

  return (
    <section className="section-wrap pricing-section-wrap" id="planos">
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <ShieldCheck size={13} className="text-cyan-400" />
            <span>TRANSPARÊNCIA TOTAL</span>
          </div>
          <h2 className="section-title font-display">
            Planos sob medida para sua casa. <br />
            <span className="text-gradient">Sem contratos longos.</span>
          </h2>
          <p className="section-subtitle">
            Cancele quando quiser sem taxas ou multas. Escolha o período ideal para você
            e aproveite descontos progressivos nos planos mais longos.
          </p>
        </div>

        {/* 4 Pricing Cards Grid */}
        <div className="pricing-cards-container">
          {pricingPlans.map(plan => {
            const isFeatured = plan.id === 'semestral';
            const isBestValue = plan.id === 'anual';
            const isCyan = plan.id === 'trimestral';
            const isNeutral = plan.id === 'mensal';
            const isSelected = selectedPlanId === plan.id;

            return (
              <div
                key={plan.id}
                className={`plan-card-tier tier-${plan.id} ${isFeatured ? 'tier-featured' : ''} ${isBestValue ? 'tier-best-value' : ''} ${isSelected ? 'is-active' : ''}`}
                onClick={() => setSelectedPlanId(plan.id)}
              >
                {/* Floating Top Badge */}
                {plan.badge && (
                  <div className={`plan-badge-tag badge-${plan.id}`}>
                    {isFeatured && <Flame size={12} className="badge-icon" />}
                    {isBestValue && <Crown size={12} className="badge-icon" />}
                    {isCyan && <Sparkles size={12} className="badge-icon" />}
                    {isNeutral && <Zap size={12} className="badge-icon" />}
                    <span>{plan.badge}</span>
                  </div>
                )}

                {/* Plan Header */}
                <div className="plan-header">
                  <div className="plan-name-row">
                    <span className={`plan-indicator-dot dot-${plan.id}`} />
                    <h3 className="plan-title font-display">{plan.name}</h3>
                  </div>

                  {plan.originalPrice ? (
                    <div className="plan-old-price-pill">
                      <span className="old-label">De:</span>
                      <span className="old-num">{plan.originalPrice}</span>
                    </div>
                  ) : (
                    <span className="plan-neutral-tag">Sem fidelidade</span>
                  )}

                  {/* Main Price Tag */}
                  <div className="plan-price-hero">
                    <span className="price-symbol">R$</span>
                    <span className="price-amount font-display">{plan.priceNumber}</span>
                    <span className="price-cadence">{plan.period}</span>
                  </div>

                  {/* Monthly Equivalent */}
                  <div className="plan-monthly-callout">
                    <span className="monthly-calc-text">
                      {plan.monthlyEquivalent}
                    </span>
                    {plan.totalSavings && (
                      <span className="monthly-savings-tag">
                        {plan.totalSavings}
                      </span>
                    )}
                  </div>

                  <p className="plan-desc">
                    {plan.description}
                  </p>
                </div>

                <div className="plan-divider" />

                {/* Benefits List */}
                <div className="plan-features-block">
                  <span className="features-caption">Incluso no plano:</span>
                  <ul className="plan-features-list">
                    {plan.features.map((feature, idx) => {
                      const isBold = feature.includes('4 telas') || feature.includes('Economia') || feature.includes('Metade') || feature.includes('VIP');
                      return (
                        <li key={idx} className={`feature-row ${isBold ? 'highlight' : ''}`}>
                          <span className={`feature-check-icon icon-${plan.id}`}>
                            <Check size={11} strokeWidth={3} />
                          </span>
                          <span className="feature-label">{feature}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Plan Action CTA */}
                <div className="plan-cta-wrapper">
                  <Button
                    href={getPlanWhatsAppUrl(plan.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant={isFeatured || isBestValue ? 'primary' : 'secondary'}
                    size="md"
                    className={`w-full justify-center font-bold plan-btn-${plan.id}`}
                    icon={<ArrowRight size={15} />}
                  >
                    {plan.ctaText}
                  </Button>

                  <div className="plan-activation-note">
                    <Zap size={11} className={isFeatured ? 'text-pink-400' : isBestValue ? 'text-amber-400' : 'text-cyan-400'} />
                    <span>{plan.ctaSubtext || 'Ativação imediata no WhatsApp'}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 7-Day Guarantee Assurance Card */}
        <div className="pricing-guarantee-card">
          <div className="guarantee-left-col">
            <div className="guarantee-icon-orb-wrap">
              <div className="guarantee-icon-orb">
                <ShieldCheck size={38} className="text-emerald-400" />
              </div>
              <div className="guarantee-seal-badge">
                <span>7 DIAS</span>
              </div>
            </div>

            <div className="guarantee-text-block">
              <div className="guarantee-badge">
                <span className="guarantee-pulse-dot" />
                <span>RISCO ZERO • COMPRA 100% PROTEGIDA</span>
              </div>
              <h3 className="guarantee-title font-display">
                Garantia Incondicional de <span className="text-gradient">7 Dias</span>
              </h3>
              <p className="guarantee-desc">
                Acesse o catálogo completo, teste a estabilidade de sinal em <strong>4K HDR</strong> e aproveite em até <strong>4 telas simultâneas</strong>. Se por qualquer motivo não for o que você esperava dentro de 7 dias, basta nos mandar uma mensagem no WhatsApp e devolvemos seu dinheiro integralmente, de imediato.
              </p>

              <div className="guarantee-trust-tags">
                <div className="trust-tag-item">
                  <Check size={13} className="text-emerald-400" />
                  <span>Sem multas ou perguntas</span>
                </div>
                <div className="trust-tag-item">
                  <Check size={13} className="text-emerald-400" />
                  <span>Reembolso direto no PIX</span>
                </div>
                <div className="trust-tag-item">
                  <Check size={13} className="text-emerald-400" />
                  <span>Suporte 24h via WhatsApp</span>
                </div>
              </div>
            </div>
          </div>

          <div className="guarantee-perks-col">
            <div className="guarantee-perk-badge">
              <div className="guarantee-perk-icon-wrap emerald">
                <Award size={20} />
              </div>
              <div className="guarantee-perk-text">
                <span className="guarantee-perk-title">100% Satisfação ou Devolução</span>
                <span className="guarantee-perk-sub">Compromisso de qualidade BoraFlix</span>
              </div>
            </div>

            <div className="guarantee-perk-badge">
              <div className="guarantee-perk-icon-wrap amber">
                <Zap size={20} />
              </div>
              <div className="guarantee-perk-text">
                <span className="guarantee-perk-title">4 Telas 4K UHD Inclusas</span>
                <span className="guarantee-perk-sub">TV, Celular, TV Box e Notebook</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
