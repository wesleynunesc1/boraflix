import React from 'react';
import { Flame, Crown, Sparkles, Zap, Check, ArrowRight } from 'lucide-react';
import { pricingPlans } from '../../data/pricingData';
import { PricingPlan } from '../../types';

interface PlanSelectorProps {
  onSelectPlan: (plan: PricingPlan) => void;
  selectedPlanId?: string;
}

export const PlanSelector: React.FC<PlanSelectorProps> = ({
  onSelectPlan,
  selectedPlanId,
}) => {
  return (
    <div className="w-full my-4 animate-fadeIn">
      <div className="text-center mb-5">
        <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
          Escolha seu plano de assinatura
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Sem fidelidade, sem burocracia e com liberação em até 4 telas simultâneas.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
        {pricingPlans.map(plan => {
          const isSelected = selectedPlanId === plan.id;
          const isFeatured = plan.isPopular;
          const isBestValue = plan.isBestValue;

          return (
            <div
              key={plan.id}
              className={`relative rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 border cursor-pointer ${
                isFeatured
                  ? 'bg-gradient-to-b from-[#1c1333] to-[#0e0f22] border-pink-500/60 shadow-xl shadow-pink-500/10 hover:border-pink-400'
                  : isBestValue
                  ? 'bg-gradient-to-b from-[#1e182e] to-[#0d0d1e] border-amber-500/60 shadow-xl shadow-amber-500/10 hover:border-amber-400'
                  : 'bg-gradient-to-b from-[#11162a] to-[#090d1a] border-white/10 hover:border-cyan-500/50'
              } ${isSelected ? 'ring-2 ring-cyan-400 shadow-cyan-500/20' : ''}`}
              onClick={() => onSelectPlan(plan)}
            >
              {/* Highlight Badge */}
              {plan.badge && (
                <div className="absolute -top-3 left-4">
                  <span
                    className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold tracking-wider uppercase shadow-md ${
                      isFeatured
                        ? 'bg-gradient-to-r from-pink-500 to-rose-600 text-white border border-pink-300/40'
                        : isBestValue
                        ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 border border-amber-200/50'
                        : 'bg-white/10 backdrop-blur-md text-slate-200 border border-white/20'
                    }`}
                  >
                    {isFeatured && <Flame size={11} className="fill-current text-white" />}
                    {isBestValue && <Crown size={11} className="fill-current text-slate-950" />}
                    {plan.id === 'trimestral' && <Sparkles size={11} className="text-cyan-300" />}
                    {plan.id === 'mensal' && <Zap size={11} className="text-cyan-400" />}
                    <span>{plan.badge}</span>
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="pt-1.5">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-extrabold text-white tracking-tight">
                    Plano {plan.name}
                  </h4>
                  {plan.originalPrice ? (
                    <span className="text-[11px] text-slate-400 line-through">
                      De {plan.originalPrice}
                    </span>
                  ) : (
                    <span className="text-[10px] text-cyan-400 font-semibold px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                      Flexível
                    </span>
                  )}
                </div>

                {/* Price Display */}
                <div className="flex items-baseline gap-1 mt-2">
                  <span className="text-sm font-bold text-slate-300">R$</span>
                  <span className="text-3xl font-black text-white tracking-tight">
                    {plan.priceNumber}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {plan.period}
                  </span>
                </div>

                {/* Monthly Equivalent Callout */}
                {plan.monthlyEquivalent && (
                  <div className="mt-2 py-1 px-2.5 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between text-[11px]">
                    <span className="text-cyan-300 font-medium">{plan.monthlyEquivalent}</span>
                    {plan.savingsBadge && (
                      <span className="text-emerald-400 font-bold font-mono">
                        {plan.savingsBadge}
                      </span>
                    )}
                  </div>
                )}

                {/* Top Features */}
                <ul className="mt-3.5 space-y-1.5 text-xs text-slate-300">
                  <li className="flex items-center gap-1.5">
                    <Check size={13} className="text-emerald-400 flex-shrink-0" />
                    <span>Acesso a +60.000 conteúdos 4K</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <Check size={13} className="text-emerald-400 flex-shrink-0" />
                    <span>Até 4 telas simultâneas liberadas</span>
                  </li>
                </ul>
              </div>

              {/* Action Button */}
              <div className="mt-4 pt-3 border-t border-white/5">
                <button
                  type="button"
                  className={`w-full py-2.5 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all duration-200 active:scale-95 shadow-md ${
                    isFeatured
                      ? 'bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-400 hover:to-rose-500 text-white shadow-pink-500/25'
                      : isBestValue
                      ? 'bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-black shadow-amber-500/25'
                      : 'bg-white/10 hover:bg-white/15 text-white border border-white/15 hover:border-cyan-400/50'
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectPlan(plan);
                  }}
                >
                  <span>ESCOLHER {plan.name.toUpperCase()}</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
