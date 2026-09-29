import React from 'react';
import { CheckCircle, MessageSquare, ArrowRight, ShieldCheck, Sparkles, Send } from 'lucide-react';
import { BotOrder } from '../types/bot';
import { WHATSAPP_BOT_NUMBER, buildFinalWhatsAppMessage, maskCpf, getDeviceInstructions } from '../config/botConfig';

interface PaymentSuccessProps {
  order: BotOrder;
}

export const PaymentSuccess: React.FC<PaymentSuccessProps> = ({ order }) => {
  const instructions = getDeviceInstructions(order.device.category, order.device.detail);

  const handleOpenWhatsApp = () => {
    const message = buildFinalWhatsAppMessage({
      orderId: order.orderId,
      name: order.customer.name,
      email: order.customer.email,
      phone: order.customer.phone,
      cpf: order.customer.cpf,
      planName: order.planName,
      planPrice: order.planPrice,
      deviceLabel: order.device.categoryLabel,
      deviceDetail: order.device.detailLabel,
      appName: instructions.appName,
      installed: order.device.installed,
    });

    const whatsappUrl = `https://wa.me/${WHATSAPP_BOT_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full max-w-lg mx-auto my-4 p-6 rounded-3xl bg-gradient-to-b from-[#131b34] to-[#0a0e1c] border-2 border-emerald-500/50 shadow-2xl shadow-emerald-500/10 animate-fadeIn text-center">
      {/* Animated Glowing Checkmark Icon */}
      <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border-2 border-emerald-400 text-emerald-400 flex items-center justify-center mb-4 shadow-[0_0_25px_rgba(52,211,153,0.4)] animate-bounce">
        <CheckCircle size={36} strokeWidth={2.5} />
      </div>

      <span className="text-[11px] font-extrabold tracking-widest text-emerald-400 uppercase block mb-1">
        ✓ PAGAMENTO CONFIRMADO
      </span>

      <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
        Perfeito, {order.customer.name.split(' ')[0]}! 🎉
      </h3>

      <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed max-w-md mx-auto">
        Seu pagamento foi confirmado e sua configuração está preparada. Agora falta somente nossa equipe liberar seu acesso oficial.
      </p>

      {/* Summary Card */}
      <div className="mt-5 p-4 rounded-2xl bg-black/40 border border-white/10 text-left space-y-2 text-xs">
        <div className="flex items-center justify-between pb-2 border-b border-white/10">
          <span className="text-slate-400">ID do Atendimento:</span>
          <span className="font-mono font-bold text-cyan-300 text-sm">{order.orderId}</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-slate-400">Plano Contratado:</span>
          <strong className="text-white">{order.planName} ({order.planPrice})</strong>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-slate-400">Aparelho Registrado:</span>
          <span className="text-slate-200">{order.device.categoryLabel} - {order.device.detailLabel}</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-slate-400">WhatsApp do Cliente:</span>
          <span className="text-slate-200 font-mono">{order.customer.phone}</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-slate-400">Status do Pagamento:</span>
          <span className="text-emerald-400 font-bold flex items-center gap-1">
            <ShieldCheck size={13} />
            <span>Aprovado</span>
          </span>
        </div>
      </div>

      {/* Primary WhatsApp Action Button */}
      <div className="mt-6">
        <button
          type="button"
          onClick={handleOpenWhatsApp}
          className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-xl shadow-emerald-500/30 transition-all duration-300 active:scale-95 group"
        >
          <MessageSquare size={20} className="fill-current text-slate-950" />
          <span>RECEBER MEU ACESSO</span>
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>

        <p className="text-[11px] text-slate-400 mt-2.5 leading-relaxed">
          Você será direcionado ao WhatsApp com os dados do seu atendimento já organizados para ativação imediata.
        </p>
      </div>
    </div>
  );
};
