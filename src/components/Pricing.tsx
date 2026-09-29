import React, { useState } from 'react';
import { Check, ShieldCheck, ArrowRight, Zap, Lock, Award, Heart, Flame, Crown, Sparkles } from 'lucide-react';
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
                className={`pricing-card-refined ${isFeatured ? 'featured-semestral' : ''} ${isBestValue ? 'best-value-anual' : ''} ${isSelected ? 'selected' : ''} plan-tier-${plan.id}`}
                onClick={() => setSelectedPlanId(plan.id)}
              >
                {/* Floating Highlight Badges */}
                {plan.badge && (
                  <div className={`pricing-badge-pill ${isFeatured ? 'badge-featured' : isBestValue ? 'badge-gold' : plan.id === 'trimestral' ? 'badge-cyan' : 'badge-regular'}`}>
                    {isFeatured && <Flame size={13} className="badge-icon-left" />}
                    {isBestValue && <Crown size={13} className="badge-icon-left" />}
                    {plan.id === 'trimestral' && <Sparkles size={13} className="badge-icon-left" />}
                    {plan.id === 'mensal' && <Zap size={13} className="badge-icon-left" />}
                    <span>{plan.badge}</span>
                  </div>
                )}

                {/* Plan Header Block */}
                <div className="plan-header-block">
                  <div className="plan-tier-meta">
                    <div className="plan-title-wrapper">
                      <span className={`plan-glow-dot dot-${plan.id}`} />
                      <span className="plan-name-title">{plan.name}</span>
                    </div>

                    {plan.originalPrice ? (
                      <div className="plan-original-price-pill">
                        <span className="de-label">De</span>
                        <span className="old-price-num">{plan.originalPrice}</span>
                      </div>
                    ) : (
                      <span className="plan-tier-tag">Flexível</span>
                    )}
                  </div>

                  {/* High Hierarchy Main Price Display */}
                  <div className="price-main-block">
                    <span className="price-currency">R$</span>
                    <span className="price-giant-number">{plan.priceNumber}</span>
                    <span className="price-period-tag">{plan.period}</span>
                  </div>

                  {/* Monthly Equivalent Callout Box */}
                  <div className="plan-monthly-highlight">
                    <div className="plan-monthly-info">
                      <Sparkles size={13} className="monthly-spark-icon" />
                      <span className="plan-monthly-text">
                        {plan.monthlyEquivalent}
                      </span>
                    </div>
                    {plan.totalSavings && (
                      <span className="plan-savings-pill">
                        ✦ {plan.totalSavings}
                      </span>
                    )}
                  </div>

                  <p className="plan-desc-text">
                    {plan.description}
                  </p>
                </div>

                <div className="plan-card-divider" />

                {/* Feature Checklist with Custom Glowing Check Orbs */}
                <div className="price-features-list-refined">
                  <span className="features-list-caption">Recursos Inclusos:</span>
                  {plan.features.map((feature, idx) => {
                    const isHighlight = feature.includes('4 telas') || feature.includes('Economia') || feature.includes('Metade') || feature.includes('Preço congelado') || feature.includes('VIP');
                    return (
                      <div key={idx} className={`price-feature-row ${isHighlight ? 'feature-highlighted' : ''}`}>
                        <span className={`feature-check-orb ${isFeatured ? 'featured' : isBestValue ? 'gold' : plan.id === 'trimestral' ? 'cyan' : ''}`}>
                          <Check size={11} strokeWidth={3} />
                        </span>
                        <span className="feature-text">{feature}</span>
                      </div>
                    );
                  })}
                </div>

                {/* CTA Action Button */}
                <div className="plan-action-block">
                  <Button
                    href={getPlanWhatsAppLink(plan.name, plan.priceFormatted)}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant={isFeatured ? 'primary' : isBestValue ? 'primary' : 'secondary'}
                    size="md"
                    className={`w-full justify-center text-sm py-3.5 font-bold ${isFeatured ? 'btn-glow-master' : isBestValue ? 'btn-gold-luxury' : plan.id === 'trimestral' ? 'btn-cyan-gradient' : 'btn-glass-neon'}`}
                    icon={<ArrowRight size={16} />}
                  >
                    {plan.ctaText}
                  </Button>

                  <div className="plan-reassurance-sub">
                    <Zap size={12} className={isFeatured ? 'text-pink-400' : isBestValue ? 'text-amber-400' : 'text-cyan-400'} />
                    <span>{plan.ctaSubtext || 'Ativação imediata no WhatsApp'}</span>
                  </div>
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
