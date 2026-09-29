import React from 'react';
import { CreditCard, Edit3, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
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
    <div className="w-full max-w-lg mx-auto my-4 p-5 sm:p-6 rounded-2xl bg-[#0e1424] border border-cyan-500/30 shadow-2xl animate-fadeIn">
      {/* Title */}
      <div className="text-center mb-5 pb-3 border-b border-white/10">
        <span className="text-[10px] font-bold tracking-widest text-cyan-400 uppercase block mb-1">
          Confirmação de Pedido
        </span>
        <h4 className="text-base sm:text-lg font-bold text-white">
          Confere se está tudo certo 👇
        </h4>
      </div>

      {/* Review Grid */}
      <div className="space-y-3 text-xs sm:text-sm">
        {/* Plan Box */}
        <div className="p-3.5 rounded-xl bg-gradient-to-r from-purple-950/40 to-pink-950/40 border border-pink-500/30 flex items-center justify-between">
          <div>
            <span className="text-[11px] text-pink-300 font-semibold block">PLANO SELECIONADO</span>
            <strong className="text-sm sm:text-base font-extrabold text-white">
              {order.planName}
            </strong>
            <span className="text-xs text-slate-300 block">{order.planPeriod}</span>
          </div>
          <div className="text-right">
            <span className="text-lg sm:text-xl font-black text-cyan-300 font-mono">
              {order.planPrice}
            </span>
            <span className="text-[10px] text-emerald-400 block font-semibold">4 Telas 4K</span>
          </div>
        </div>

        {/* Customer Details */}
        <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-2.5">
          <div className="flex items-center justify-between py-1 border-b border-white/5">
            <span className="text-slate-400">Titular:</span>
            <strong className="text-white text-right">{order.customer.name}</strong>
          </div>

          <div className="flex items-center justify-between py-1 border-b border-white/5">
            <span className="text-slate-400">E-mail:</span>
            <span className="text-white font-mono text-xs text-right truncate max-w-[200px]">
              {order.customer.email}
            </span>
          </div>

          <div className="flex items-center justify-between py-1 border-b border-white/5">
            <span className="text-slate-400">WhatsApp:</span>
            <strong className="text-cyan-300 font-mono text-right">{order.customer.phone}</strong>
          </div>

          <div className="flex items-center justify-between py-1 border-b border-white/5">
            <span className="text-slate-400">CPF (Protegido):</span>
            <span className="text-slate-300 font-mono text-right">
              {maskCpf(order.customer.cpf)}
            </span>
          </div>

          <div className="flex items-center justify-between py-1">
            <span className="text-slate-400">Dispositivo:</span>
            <span className="text-white font-medium text-right">
              {order.device.categoryLabel} ({order.device.detailLabel})
            </span>
          </div>

          <div className="flex items-center justify-between py-1 border-t border-white/5">
            <span className="text-slate-400">Status do App:</span>
            <span className="text-emerald-400 font-semibold flex items-center gap-1">
              <CheckCircle2 size={13} />
              {order.device.installed ? 'Instalado' : 'Aguardando Suporte'}
            </span>
          </div>
        </div>
      </div>

      {/* Trust reassurance */}
      <div className="mt-4 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300 flex items-center gap-2">
        <ShieldCheck size={16} className="flex-shrink-0" />
        <span>Garantia incondicional de 7 dias com reembolso integral imediato.</span>
      </div>

      {/* Action Buttons */}
      <div className="mt-5 flex flex-col sm:flex-row gap-3">
        <button
          type="button"
          className="flex-1 py-3 px-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-slate-200 font-semibold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all active:scale-95"
          onClick={onEdit}
        >
          <Edit3 size={15} />
          <span>EDITAR DADOS</span>
        </button>

        <button
          type="button"
          className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-400 hover:to-rose-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-pink-500/25 transition-all active:scale-95"
          onClick={onProceedToPayment}
        >
          <CreditCard size={16} />
          <span>PAGAR COM PIX</span>
          <ArrowRight size={15} />
        </button>
      </div>
    </div>
  );
};
