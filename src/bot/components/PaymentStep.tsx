import React, { useState } from 'react';
import { Copy, Check, QrCode, ShieldCheck, Clock, RefreshCw, Sparkles, CheckCircle2 } from 'lucide-react';
import { BotOrder, PaymentStatus } from '../types/bot';

interface PaymentStepProps {
  order: BotOrder;
  paymentStatus: PaymentStatus;
  onSimulateStatus: (status: PaymentStatus) => void;
}

export const PaymentStep: React.FC<PaymentStepProps> = ({
  order,
  paymentStatus,
  onSimulateStatus,
}) => {
  const [copied, setCopied] = useState(false);
  const [showQrOnMobile, setShowQrOnMobile] = useState(false);
  const [checking, setChecking] = useState(false);

  const mockPixCode = `00020126580014br.gov.bcb.pix0136boraflix-${order.orderId.toLowerCase()}5204000053039865802BR5916BORAFLIX TESTE6009FORTALEZA62070503***6304MOCK`;

  const handleCopy = () => {
    navigator.clipboard?.writeText(mockPixCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleVerify = () => {
    setChecking(true);
    setTimeout(() => {
      setChecking(false);
      // Advances to paid in prototype/mock mode
      onSimulateStatus('paid');
    }, 1200);
  };

  return (
    <div className="w-full max-w-lg mx-auto my-3 p-4 sm:p-6 rounded-2xl bg-[#0d1222] border border-cyan-500/40 shadow-2xl animate-fadeIn">
      {/* Status Bar */}
      <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] mb-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-xs font-bold text-amber-300">
            Aguardando pagamento
          </span>
        </div>
        <span className="text-xs font-mono text-slate-400">
          Pedido: {order.orderId}
        </span>
      </div>

      {/* Plan & Amount Banner */}
      <div className="p-3.5 rounded-xl bg-gradient-to-r from-purple-950/40 to-pink-950/40 border border-pink-500/30 flex items-center justify-between mb-4">
        <div>
          <span className="text-[10px] font-bold text-pink-300 uppercase tracking-wider block">
            Plano {order.planName}
          </span>
          <span className="text-xs text-slate-300">
            Pagamento único via PIX
          </span>
        </div>
        <div className="text-right">
          <span className="text-xl sm:text-2xl font-black text-white font-display">
            {order.planPrice}
          </span>
        </div>
      </div>

      {/* PIX Copy & Paste: HIGHEST PRIORITY ON MOBILE */}
      <div className="p-4 rounded-xl bg-black/40 border border-white/[0.08] text-center mb-4">
        <span className="text-xs font-semibold text-slate-300 block mb-2">
          Pague em segundos com o PIX Copia e Cola:
        </span>

        {/* Big Copy Button */}
        <button
          type="button"
          onClick={handleCopy}
          className={`w-full py-3.5 px-4 rounded-xl font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-200 active:scale-[0.98] shadow-lg ${
            copied
              ? 'bg-emerald-500 text-slate-950 shadow-emerald-500/30'
              : 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-cyan-500/25'
          }`}
        >
          {copied ? <Check size={18} strokeWidth={3} /> : <Copy size={18} />}
          <span>{copied ? '✓ CÓDIGO PIX COPIADO!' : 'COPIAR CÓDIGO PIX'}</span>
        </button>

        {/* Code Input (Preview) */}
        <div className="mt-2.5 flex items-center gap-2 p-2 rounded-lg bg-white/[0.03] border border-white/[0.06]">
          <input
            type="text"
            readOnly
            value={mockPixCode}
            className="bg-transparent text-[10px] font-mono text-slate-400 flex-1 truncate outline-none select-all cursor-pointer"
            onClick={handleCopy}
          />
          <span className="text-[10px] text-slate-500 flex-shrink-0">
            {copied ? 'Copiado' : 'Toque p/ copiar'}
          </span>
        </div>
      </div>

      {/* QR Code Section: Desktop always visible, Mobile toggleable */}
      <div className="mb-4 text-center">
        {/* Mobile Toggle Button */}
        <button
          type="button"
          onClick={() => setShowQrOnMobile(prev => !prev)}
          className="sm:hidden text-xs text-cyan-400 hover:text-cyan-300 font-semibold inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg bg-white/5 border border-white/10"
        >
          <QrCode size={14} />
          <span>{showQrOnMobile ? 'Ocultar QR Code' : 'Preferir pagar via QR Code?'}</span>
        </button>

        {/* QR Code Graphic (Visible on sm+ or when toggled on mobile) */}
        <div className={`${showQrOnMobile ? 'block' : 'hidden'} sm:block mt-3 p-4 rounded-xl bg-black/30 border border-white/[0.06]`}>
          <div className="inline-block p-2.5 bg-white rounded-xl shadow-xl mb-2">
            <div className="w-36 h-36 flex flex-col justify-between p-1 bg-white border-2 border-slate-900 rounded-md">
              <div className="flex justify-between">
                <div className="w-8 h-8 border-4 border-black flex items-center justify-center">
                  <div className="w-3 h-3 bg-black" />
                </div>
                <div className="w-8 h-8 border-4 border-black flex items-center justify-center">
                  <div className="w-3 h-3 bg-black" />
                </div>
              </div>
              <div className="text-center font-mono font-bold text-[9px] text-slate-900">
                PIX BORAFLIX<br />
                <span className="text-pink-600 font-extrabold">{order.orderId}</span>
              </div>
              <div className="flex justify-between items-end">
                <div className="w-8 h-8 border-4 border-black flex items-center justify-center">
                  <div className="w-3 h-3 bg-black" />
                </div>
                <div className="w-5 h-5 bg-black" />
              </div>
            </div>
          </div>
          <span className="text-[11px] text-slate-400 block">
            Escaneie com a câmera do seu aplicativo de banco
          </span>
        </div>
      </div>

      {/* Confirm Payment Action Button */}
      <div className="space-y-2.5 pt-2 border-t border-white/[0.08]">
        <button
          type="button"
          onClick={handleVerify}
          disabled={checking}
          className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 transition-all duration-200 active:scale-[0.98]"
        >
          {checking ? (
            <>
              <RefreshCw size={16} className="animate-spin text-slate-950" />
              <span>Verificando pagamento...</span>
            </>
          ) : (
            <>
              <CheckCircle2 size={16} className="text-slate-950" />
              <span>JÁ REALIZEI O PAGAMENTO</span>
            </>
          )}
        </button>

        <p className="text-[10px] text-slate-400 text-center leading-relaxed">
          🔒 Confirmação instantânea do PIX pelo Banco Central • Ativação imediata
        </p>
      </div>
    </div>
  );
};
