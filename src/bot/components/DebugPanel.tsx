import React, { useState } from 'react';
import { Wrench, ChevronUp, ChevronDown, Play, RotateCcw, CheckCircle2, UserCheck } from 'lucide-react';
import { BotStep, BotOrder, PaymentStatus } from '../types/bot';

interface DebugPanelProps {
  currentStep: BotStep;
  order: BotOrder;
  onJumpStep: (step: BotStep) => void;
  onFillMockData: () => void;
  onSimulatePaid: () => void;
  onReset: () => void;
}

export const DebugPanel: React.FC<DebugPanelProps> = ({
  currentStep,
  order,
  onJumpStep,
  onFillMockData,
  onSimulatePaid,
  onReset,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-3 right-3 z-50 max-w-sm w-full sm:w-80">
      {/* Toggle Button */}
      <div className="flex justify-end mb-1">
        <button
          type="button"
          onClick={() => setIsOpen(prev => !prev)}
          className="py-1.5 px-3 rounded-full bg-slate-900/90 backdrop-blur-md border border-amber-500/40 text-amber-300 text-xs font-bold flex items-center gap-1.5 shadow-xl hover:bg-slate-800 transition-colors"
        >
          <Wrench size={13} className="text-amber-400" />
          <span>Debug do Atendimento</span>
          {isOpen ? <ChevronDown size={14} /> : <ChevronUp size={14} />}
        </button>
      </div>

      {/* Expanded Panel */}
      {isOpen && (
        <div className="p-3.5 rounded-2xl bg-[#090d18]/95 backdrop-blur-xl border border-amber-500/30 text-xs text-slate-300 shadow-2xl space-y-2.5 animate-fadeIn">
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <span className="font-bold text-amber-300 flex items-center gap-1">
              <Wrench size={13} />
              <span>Painel de Teste (Dev Mode)</span>
            </span>
            <span className="font-mono text-[10px] text-slate-400">{order.orderId}</span>
          </div>

          {/* Current State Info */}
          <div className="space-y-1 font-mono text-[11px] bg-black/40 p-2 rounded-lg border border-white/5">
            <div><span className="text-slate-400">Etapa:</span> <strong className="text-cyan-300">{currentStep}</strong></div>
            <div><span className="text-slate-400">Plano:</span> <span className="text-white">{order.planName || '(não definido)'}</span></div>
            <div><span className="text-slate-400">Dispositivo:</span> <span className="text-white">{order.device.category || '(não definido)'}</span></div>
            <div><span className="text-slate-400">Pagamento:</span> <span className="text-emerald-400">{order.paymentStatus}</span></div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-1.5 pt-1">
            <button
              type="button"
              onClick={onFillMockData}
              className="w-full py-1.5 px-2 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 font-bold text-[11px] flex items-center justify-center gap-1 transition-colors"
            >
              <UserCheck size={13} />
              <span>Preencher Dados de Teste</span>
            </button>

            <button
              type="button"
              onClick={onSimulatePaid}
              className="w-full py-1.5 px-2 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 font-bold text-[11px] flex items-center justify-center gap-1 transition-colors"
            >
              <CheckCircle2 size={13} />
              <span>Simular Pagamento Aprovado</span>
            </button>

            <div className="grid grid-cols-2 gap-1.5 pt-1">
              <button
                type="button"
                onClick={() => onJumpStep('PLAN_SELECTION')}
                className="py-1 px-2 rounded bg-white/5 hover:bg-white/10 text-[10px] font-mono"
              >
                Ir p/ Planos
              </button>
              <button
                type="button"
                onClick={() => onJumpStep('DEVICE_SELECTION')}
                className="py-1 px-2 rounded bg-white/5 hover:bg-white/10 text-[10px] font-mono"
              >
                Ir p/ Dispositivo
              </button>
              <button
                type="button"
                onClick={() => onJumpStep('PERSONAL_DATA')}
                className="py-1 px-2 rounded bg-white/5 hover:bg-white/10 text-[10px] font-mono"
              >
                Ir p/ Dados
              </button>
              <button
                type="button"
                onClick={() => onJumpStep('PAYMENT')}
                className="py-1 px-2 rounded bg-white/5 hover:bg-white/10 text-[10px] font-mono"
              >
                Ir p/ Pagamento
              </button>
            </div>

            <button
              type="button"
              onClick={onReset}
              className="w-full py-1 px-2 mt-1 rounded bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 font-bold text-[10px] flex items-center justify-center gap-1 transition-colors"
            >
              <RotateCcw size={11} />
              <span>Limpar e Reiniciar Sessão</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
