import React from 'react';
import { Check, Edit3, ShieldCheck, ArrowRight } from 'lucide-react';
import { maskCpf } from '../config/botConfig';
import { BotOrder } from '../types/bot';

interface OrderReviewProps {
  order: BotOrder;
  onEdit: () => void;
  onProceedToPayment: () => void;
}

export const OrderReview: React.FC<OrderReviewProps> = ({
  order,
  onEdit,
  onProceedToPayment,
}) => {
  return (
    <div className="w-full max-w-lg mx-auto my-3 p-4 sm:p-5 rounded-2xl bg-[#0d1222] border border-cyan-500/35 shadow-2xl animate-fadeIn">
      {/* Header */}
      <div className="pb-3 border-b border-white/[0.08] mb-3 flex items-center justify-between">
        <div>
          <span className="text-[10px] font-extrabold tracking-widest text-cyan-400 uppercase block">
            Resumo do Atendimento
          </span>
          <h4 className="text-sm sm:text-base font-bold text-white mt-0.5">
            Confere se está tudo certinho 👇
          </h4>
        </div>
        <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded-lg bg-white/5 border border-white/10 text-slate-300">
          {order.orderId}
        </span>
      </div>

      {/* Plan Feature Box */}
      <div className="p-3 sm:p-3.5 rounded-xl bg-gradient-to-r from-purple-950/40 via-indigo-950/30 to-pink-950/40 border border-pink-500/30 flex items-center justify-between mb-3">
        <div>
          <span className="text-[10px] font-bold text-pink-300 uppercase tracking-wider block">
            Plano Escolhido
          </span>
          <strong className="text-sm sm:text-base font-black text-white">
            {order.planName}
          </strong>
          <span className="text-xs text-slate-400 block font-normal">
            4 Telas simultâneas • 4K HDR
          </span>
        </div>
        <div className="text-right">
          <span className="text-lg sm:text-xl font-black text-cyan-300 font-mono">
            {order.planPrice}
          </span>
          <span className="text-[11px] text-slate-400 block">{order.planPeriod}</span>
        </div>
      </div>

      {/* Customer & Device Information Rows */}
      <div className="p-3 sm:p-3.5 rounded-xl bg-black/30 border border-white/[0.06] space-y-2 text-xs sm:text-[13px]">
        <div className="flex items-center justify-between py-1 border-b border-white/[0.04]">
          <span className="text-slate-400">Titular:</span>
          <strong className="text-white text-right">{order.customer.name}</strong>
        </div>

        <div className="flex items-center justify-between py-1 border-b border-white/[0.04]">
          <span className="text-slate-400">E-mail:</span>
          <span className="text-slate-200 font-mono text-xs text-right truncate max-w-[200px]">
            {order.customer.email}
          </span>
        </div>

        <div className="flex items-center justify-between py-1 border-b border-white/[0.04]">
          <span className="text-slate-400">WhatsApp:</span>
          <strong className="text-cyan-300 font-mono text-right">{order.customer.phone}</strong>
        </div>

        <div className="flex items-center justify-between py-1 border-b border-white/[0.04]">
          <span className="text-slate-400">CPF (Protegido):</span>
          <span className="text-slate-300 font-mono text-right">
            {maskCpf(order.customer.cpf)}
          </span>
        </div>

        <div className="flex items-center justify-between py-1">
          <span className="text-slate-400">Aparelho:</span>
          <span className="text-white font-medium text-right">
            {order.device.categoryLabel} ({order.device.detailLabel})
          </span>
        </div>
      </div>

      {/* Trust reassurance */}
      <div className="mt-3 p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-[11px] text-emerald-300 flex items-center gap-2">
        <ShieldCheck size={15} className="flex-shrink-0 text-emerald-400" />
        <span>Garantia de 7 dias com suporte prioritário e ativação imediata.</span>
      </div>

      {/* Action Buttons */}
      <div className="mt-4 flex flex-col sm:flex-row gap-2">
        <button
          type="button"
          onClick={onProceedToPayment}
          className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-pink-500 via-rose-600 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-pink-500/25 transition-all active:scale-[0.98]"
        >
          <span>Está tudo certo</span>
          <ArrowRight size={15} />
        </button>

        <button
          type="button"
          onClick={onEdit}
          className="py-3 px-4 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-slate-300 hover:text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-all active:scale-[0.98]"
        >
          <Edit3 size={14} />
          <span>Editar dados</span>
        </button>
      </div>
    </div>
  );
};
