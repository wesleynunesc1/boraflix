import React from 'react';
import { RotateCcw, ArrowLeft, ShieldCheck, Sparkles } from 'lucide-react';
import { BotStep } from '../types/bot';

interface BotHeaderProps {
  currentStep: BotStep;
  orderId: string;
  onReset: () => void;
  onBackToSite: () => void;
}

const STEP_LABELS: { step: BotStep; label: string; index: number }[] = [
  { step: 'WELCOME', label: 'Início', index: 1 },
  { step: 'PLAN_SELECTION', label: 'Plano', index: 1 },
  { step: 'ASK_NAME', label: 'Nome', index: 2 },
  { step: 'DEVICE_SELECTION', label: 'Dispositivo', index: 3 },
  { step: 'DEVICE_DETAILS', label: 'Dispositivo', index: 3 },
  { step: 'APP_INSTRUCTIONS', label: 'Instruções', index: 4 },
  { step: 'PERSONAL_DATA', label: 'Dados', index: 5 },
  { step: 'REVIEW', label: 'Revisão', index: 5 },
  { step: 'PAYMENT', label: 'Pagamento', index: 6 },
  { step: 'PAYMENT_CONFIRMED', label: 'Ativação', index: 6 },
  { step: 'WHATSAPP_HANDOFF', label: 'Ativação', index: 6 },
];

export const BotHeader: React.FC<BotHeaderProps> = ({
  currentStep,
  orderId,
  onReset,
  onBackToSite,
}) => {
  const currentStepInfo = STEP_LABELS.find(s => s.step === currentStep) || STEP_LABELS[0];
  const totalSteps = 6;

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#06070a]/90 border-b border-white/10 shadow-2xl">
      {/* Discrete Demonstration Banner */}
      <div className="bg-gradient-to-r from-purple-950/70 via-indigo-950/70 to-pink-950/70 border-b border-white/5 py-1 px-4 text-center">
        <p className="text-[11px] font-medium text-slate-300 flex items-center justify-center gap-1.5 tracking-wide">
          <Sparkles size={12} className="text-cyan-400" />
          <span>Ambiente de Demonstração • Fluxo Experimental de Atendimento</span>
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
        {/* Left: Back to Main Site & Brand Logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={onBackToSite}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors flex items-center gap-1 text-xs"
            title="Voltar ao site principal"
            aria-label="Voltar à landing page principal"
          >
            <ArrowLeft size={16} />
            <span className="hidden sm:inline font-medium">Site</span>
          </button>

          <div className="flex items-center gap-2">
            <img
              src="/assets/logos/boraflix-icon.png"
              alt="BoraFlix"
              className="w-8 h-8 object-contain drop-shadow-[0_0_12px_rgba(255,0,127,0.4)]"
            />
            <div className="flex flex-col">
              <span className="font-bold text-white text-sm sm:text-base leading-none tracking-tight">
                Bora<span className="text-pink-500">Flix</span>{' '}
                <span className="text-[10px] text-cyan-400 font-mono font-semibold px-1.5 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/20">
                  BOT
                </span>
              </span>
              <span className="text-[10px] text-slate-400 font-medium">Atendimento Inteligente</span>
            </div>
          </div>
        </div>

        {/* Center: Session ID */}
        <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300 font-mono">
          <ShieldCheck size={13} className="text-emerald-400" />
          <span>Atendimento:</span>
          <strong className="text-white">{orderId}</strong>
        </div>

        {/* Right: Reset Action & Step Progress */}
        <div className="flex items-center gap-3">
          <div className="text-right">
            <span className="text-[11px] font-semibold text-cyan-400 uppercase tracking-wider block">
              Etapa {currentStepInfo.index} de {totalSteps}
            </span>
            <span className="text-xs font-bold text-white block">
              {currentStepInfo.label}
            </span>
          </div>

          <button
            onClick={onReset}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-pink-400 transition-colors flex items-center gap-1.5 text-xs font-semibold"
            title="Recomeçar atendimento"
            aria-label="Recomeçar atendimento do zero"
          >
            <RotateCcw size={14} />
            <span className="hidden sm:inline">Reiniciar</span>
          </button>
        </div>
      </div>

      {/* Discrete Visual Step Progress Bar */}
      <div className="w-full h-1 bg-white/5 relative overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 transition-all duration-500 ease-out"
          style={{ width: `${(currentStepInfo.index / totalSteps) * 100}%` }}
        />
      </div>
    </header>
  );
};
