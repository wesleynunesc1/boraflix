import React, { useState } from 'react';
import { QrCode, Copy, Check, AlertTriangle, RefreshCw, Sparkles, ShieldAlert, CheckCircle2, XCircle } from 'lucide-react';
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
  const mockPixCode = `00020126580014br.gov.bcb.pix0136boraflix-${order.orderId.toLowerCase()}5204000053039865802BR5916BORAFLIX-TESTE6009FORTALEZA62070503***6304MOCK`;

  const handleCopy = () => {
    navigator.clipboard?.writeText(mockPixCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="w-full max-w-lg mx-auto my-4 p-5 sm:p-6 rounded-2xl bg-[#0e1424] border border-cyan-500/40 shadow-2xl animate-fadeIn">
      {/* Test Mode Highlight Badge */}
      <div className="mb-4 p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs flex items-center justify-between">
        <span className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-[11px]">
          <ShieldAlert size={14} className="text-amber-400" />
          <span>Ambiente de Simulação de Pagamento (Mock)</span>
        </span>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-200">
          Sem Cobrança Real
        </span>
      </div>

      {/* Header Info */}
      <div className="text-center mb-5">
        <span className="text-xs font-mono text-cyan-400 font-bold block mb-1">
          Pedido: {order.orderId}
        </span>
        <h4 className="text-lg sm:text-xl font-extrabold text-white">
          Pague com PIX para Ativação Imediata
        </h4>
        <p className="text-xs text-slate-400 mt-1">
          Plano {order.planName} • Total a pagar: <strong className="text-white font-mono text-sm">{order.planPrice}</strong>
        </p>
      </div>

      {/* QR Code Container */}
      <div className="p-5 rounded-2xl bg-black/50 border border-white/10 flex flex-col items-center justify-center text-center">
        <div className="p-3 bg-white rounded-xl shadow-xl mb-3 relative group">
          {/* Simulated QR Code Canvas / Visual */}
          <div className="w-44 h-44 flex flex-col items-center justify-center bg-white border-2 border-slate-900 rounded-lg p-2 relative overflow-hidden">
            <div className="w-full h-full flex flex-col justify-between">
              <div className="flex justify-between">
                <div className="w-10 h-10 border-4 border-black flex items-center justify-center">
                  <div className="w-4 h-4 bg-black" />
                </div>
                <div className="w-10 h-10 border-4 border-black flex items-center justify-center">
                  <div className="w-4 h-4 bg-black" />
                </div>
              </div>
              <div className="text-center font-mono font-bold text-[10px] text-slate-900">
                PIX SIMULADO<br />
                <span className="text-pink-600">{order.orderId}</span>
              </div>
              <div className="flex justify-between items-end">
                <div className="w-10 h-10 border-4 border-black flex items-center justify-center">
                  <div className="w-4 h-4 bg-black" />
                </div>
                <div className="w-6 h-6 bg-black" />
              </div>
            </div>
          </div>
        </div>

        <p className="text-xs text-slate-300 font-medium mb-3">
          Abra o app do seu banco e escaneie o código ou copie o código abaixo:
        </p>

        {/* Copy Paste Code Bar */}
        <div className="w-full flex items-center gap-2 p-2 rounded-xl bg-white/5 border border-white/10">
          <input
            type="text"
            readOnly
            value={mockPixCode}
            className="bg-transparent text-[11px] font-mono text-slate-300 flex-1 truncate outline-none px-2 select-all"
          />
          <button
            type="button"
            onClick={handleCopy}
            className="py-1.5 px-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-1 transition-colors flex-shrink-0"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
            <span>{copied ? 'Copiado!' : 'Copiar'}</span>
          </button>
        </div>
      </div>

      {/* Dynamic Status Monitoring Display */}
      <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-purple-950/30 to-blue-950/30 border border-cyan-500/20 text-center">
        {paymentStatus === 'pending' && (
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-cyan-300">
            <RefreshCw size={15} className="animate-spin text-cyan-400" />
            <span className="font-semibold animate-pulse">
              Aguardando confirmação do pagamento pelo sistema...
            </span>
          </div>
        )}

        {paymentStatus === 'failed' && (
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-rose-400">
            <XCircle size={16} />
            <span className="font-bold">Pagamento recusado ou expirado. Tente novamente.</span>
          </div>
        )}

        {paymentStatus === 'paid' && (
          <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-emerald-400 font-bold">
            <CheckCircle2 size={16} />
            <span>Pagamento aprovado com sucesso!</span>
          </div>
        )}
      </div>

      {/* Interactive Simulation Controls (Requested by User) */}
      <div className="mt-5 pt-4 border-t border-white/10">
        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2 text-center">
          Painel de Simulação (Ambiente de Teste)
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <button
            type="button"
            onClick={() => onSimulateStatus('paid')}
            className="py-2.5 px-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs flex items-center justify-center gap-1 transition-all active:scale-95 shadow-md shadow-emerald-500/20"
          >
            <CheckCircle2 size={14} />
            <span>SIMULAR APROVAÇÃO</span>
          </button>

          <button
            type="button"
            onClick={() => onSimulateStatus('pending')}
            className="py-2.5 px-3 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/40 text-amber-300 font-bold text-xs flex items-center justify-center gap-1 transition-colors"
          >
            <RefreshCw size={13} />
            <span>SIMULAR PENDENTE</span>
          </button>

          <button
            type="button"
            onClick={() => onSimulateStatus('failed')}
            className="py-2.5 px-3 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 border border-rose-500/40 text-rose-300 font-bold text-xs flex items-center justify-center gap-1 transition-colors"
          >
            <AlertTriangle size={13} />
            <span>SIMULAR RECUSA</span>
          </button>
        </div>
      </div>
    </div>
  );
};
