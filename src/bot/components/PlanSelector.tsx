import React from 'react';
import { Check, Sparkles, Flame, Crown, Zap, ChevronRight } from 'lucide-react';
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
    <div className="w-full my-3 animate-fadeIn">
      {/* Cards Layout: 2-col on tablet/desktop, compact stacked on mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3.5 max-w-xl mx-auto">
        {pricingPlans.map(plan => {
          const isSelected = selectedPlanId === plan.id;
          const isSemestral = plan.id === 'semestral';
          const isAnual = plan.id === 'anual';
          const isTrimestral = plan.id === 'trimestral';

          // Monthly equivalence info
          const monthlyEquivalent =
            plan.id === 'anual'
              ? 'R$ 15,00/mês'
              : plan.id === 'semestral'
              ? 'R$ 20,00/mês'
              : plan.id === 'trimestral'
              ? 'R$ 25,00/mês'
              : null;

          return (
            <button
              key={plan.id}
              type="button"
              onClick={() => onSelectPlan(plan)}
              className={`relative text-left p-3.5 sm:p-4 rounded-2xl border transition-all duration-200 active:scale-[0.98] flex flex-col justify-between group ${
                isSelected
                  ? 'bg-gradient-to-b from-[#181a36] to-[#0c0d1f] border-cyan-400 shadow-[0_0_25px_rgba(0,207,255,0.25)] ring-2 ring-cyan-400/40'
                  : isSemestral
                  ? 'bg-gradient-to-b from-[#18102a] to-[#0b0c1a] border-pink-500/40 hover:border-pink-400/70 shadow-lg shadow-pink-500/5'
                  : isAnual
                  ? 'bg-gradient-to-b from-[#1a1710] to-[#0d0c0a] border-amber-500/40 hover:border-amber-400/70 shadow-lg shadow-amber-500/5'
                  : 'bg-[#0d1222] border-white/10 hover:border-cyan-500/40 hover:bg-[#11172a]'
              }`}
            >
              {/* Top Row: Plan Name & Badge */}
              <div className="w-full">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="font-extrabold text-white text-sm sm:text-base tracking-tight">
                      Plano {plan.name}
                    </span>
                  </div>

                  {plan.badge ? (
                    <span
                      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-extrabold tracking-wider uppercase ${
                        isSemestral
                          ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-sm'
                          : isAnual
                          ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 font-black shadow-sm'
                          : 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                      }`}
                    >
                      {isSemestral && <Flame size={10} className="fill-current" />}
                      {isAnual && <Crown size={10} className="fill-current" />}
                      {isTrimestral && <Sparkles size={10} />}
                      <span>{plan.badge}</span>
                    </span>
                  ) : (
                    <span className="text-[10px] text-slate-400 font-medium">Básico</span>
                  )}
                </div>

                {/* Price Display */}
                <div className="flex items-baseline gap-1.5 my-1">
                  <span className="text-xl sm:text-2xl font-black text-white tracking-tight font-display">
                    {plan.priceFormatted}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {plan.period}
                  </span>
                </div>

                {/* Monthly Equivalence & Savings */}
                <div className="flex items-center gap-2 text-[11px] text-slate-400 font-medium">
                  {monthlyEquivalent ? (
                    <span className="text-emerald-400 font-semibold">
                      {monthlyEquivalent}
                    </span>
                  ) : (
                    <span>Sem fidelidade</span>
                  )}
                  <span>•</span>
                  <span>4 Telas 4K</span>
                </div>
              </div>

              {/* Bottom selection feedback bar */}
              <div className="w-full mt-3 pt-2.5 border-t border-white/[0.06] flex items-center justify-between text-xs font-bold">
                <span
                  className={
                    isSelected
                      ? 'text-cyan-300'
                      : isSemestral
                      ? 'text-pink-400 group-hover:text-pink-300'
                      : 'text-slate-300 group-hover:text-white'
                  }
                >
                  {isSelected ? 'Plano Selecionado' : 'Selecionar este plano'}
                </span>
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                    isSelected
                      ? 'bg-cyan-400 text-slate-950 shadow-[0_0_10px_#00cfff]'
                      : 'bg-white/10 text-slate-400 group-hover:bg-white/20 group-hover:text-white'
                  }`}
                >
                  {isSelected ? <Check size={14} strokeWidth={3} /> : <ChevronRight size={14} />}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
