import React from 'react';
import { MessageSquare, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { BoraRobot } from './BoraRobot';
import { BotOrder } from '../types/bot';
import { WHATSAPP_BOT_NUMBER, buildFinalWhatsAppMessage, getDeviceInstructions } from '../config/botConfig';

interface PaymentSuccessProps {
  order: BotOrder;
}

export const PaymentSuccess: React.FC<PaymentSuccessProps> = ({ order }) => {
  const instructions = getDeviceInstructions(order.device.category, order.device.detail);
  const firstName = order.customer.name.trim().split(' ')[0] || 'Cliente';

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
    <div className="w-full max-w-lg mx-auto my-3 p-5 sm:p-6 rounded-3xl bg-gradient-to-b from-[#11182c] to-[#070a14] border-2 border-emerald-500/50 shadow-[0_0_50px_rgba(16,185,129,0.15)] animate-fadeIn text-center">
      {/* Living Celebrating Robot Character */}
      <div className="flex justify-center mb-3">
        <BoraRobot size="lg" state="celebrating" />
      </div>

      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 text-xs font-black tracking-wide uppercase mb-2">
        <CheckCircle2 size={14} />
        <span>Pagamento Confirmado</span>
      </div>

      <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
        Prontinho, {firstName}! 🎉
      </h3>

      <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed max-w-md mx-auto">
        Seu cadastro está preparado e seu pagamento foi aprovado com sucesso. Agora vou te encaminhar para nossa equipe liberar seu acesso imediato!
      </p>

      {/* Summary Box */}
      <div className="mt-4 p-3.5 sm:p-4 rounded-2xl bg-black/40 border border-white/[0.08] text-left space-y-2 text-xs sm:text-[13px]">
        <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
          <span className="text-slate-400">Protocolo do Pedido:</span>
          <span className="font-mono font-black text-cyan-300 text-sm">{order.orderId}</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-slate-400">Plano Ativado:</span>
          <strong className="text-white">{order.planName} ({order.planPrice})</strong>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-slate-400">Aparelho Registrado:</span>
          <span className="text-slate-200">{order.device.categoryLabel} - {order.device.detailLabel}</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-slate-400">WhatsApp Informado:</span>
          <span className="text-slate-200 font-mono">{order.customer.phone}</span>
        </div>

        <div className="flex items-center justify-between pt-1">
          <span className="text-slate-400">Status:</span>
          <span className="text-emerald-400 font-bold flex items-center gap-1">
            <ShieldCheck size={14} />
            <span>Pronto para Ativação</span>
          </span>
        </div>
      </div>

      {/* Primary High-Impact CTA Button */}
      <div className="mt-5 space-y-2">
        <button
          type="button"
          onClick={handleOpenWhatsApp}
          className="w-full py-4 px-5 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-xl shadow-emerald-500/30 transition-all duration-200 active:scale-[0.98] group"
        >
          <MessageSquare size={20} className="fill-current text-slate-950" />
          <span>RECEBER MEU ACESSO NO WHATSAPP</span>
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>

        <p className="text-[11px] text-slate-400 leading-relaxed max-w-sm mx-auto">
          Ao clicar, seu WhatsApp abrirá com a mensagem de ativação e protocolo preenchidos para nossa equipe liberar suas telas.
        </p>
      </div>
    </div>
  );
};
