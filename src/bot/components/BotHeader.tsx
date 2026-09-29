import React from 'react';
import { ArrowLeft, RotateCcw, ShieldCheck, Sparkles } from 'lucide-react';
import { BoraRobot } from './BoraRobot';
import { BotStep } from '../types/bot';

interface BotHeaderProps {
  currentStep: BotStep;
  orderId: string;
  onReset: () => void;
  onBackToSite: () => void;
}

interface StepMeta {
  index: number;
  label: string;
}

const STEP_PROGRESS_MAP: Record<BotStep, StepMeta> = {
  WELCOME: { index: 1, label: 'Início' },
  ASK_NAME: { index: 1, label: 'Identificação' },
  PLAN_SELECTION: { index: 2, label: 'Plano' },
  DEVICE_SELECTION: { index: 3, label: 'Dispositivo' },
  DEVICE_DETAILS: { index: 3, label: 'Dispositivo' },
  APP_INSTRUCTIONS: { index: 3, label: 'Preparação' },
  ASK_EMAIL: { index: 4, label: 'E-mail' },
  ASK_PHONE: { index: 4, label: 'WhatsApp' },
  ASK_CPF: { index: 4, label: 'CPF' },
  REVIEW: { index: 4, label: 'Confirmação' },
  PAYMENT: { index: 5, label: 'Pagamento PIX' },
  PAYMENT_CONFIRMED: { index: 6, label: 'Acesso Liberado' },
  WHATSAPP_HANDOFF: { index: 6, label: 'WhatsApp' },
};

export const BotHeader: React.FC<BotHeaderProps> = ({
  currentStep,
  orderId,
  onReset,
  onBackToSite,
}) => {
  const currentStepMeta = STEP_PROGRESS_MAP[currentStep] || { index: 1, label: 'Atendimento' };
  const totalSteps = 6;
  const progressPercent = Math.min(100, Math.round((currentStepMeta.index / totalSteps) * 100));

  return (
    <header className="sticky top-0 z-40 w-full bg-[#05070d]/90 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
      <div className="max-w-4xl mx-auto px-3.5 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-3">
        {/* Left: Back Link & Living Robot Brand Identity */}
        <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0">
          <button
            type="button"
            onClick={onBackToSite}
            className="p-1.5 -ml-1 rounded-xl text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors flex items-center gap-1 text-xs"
            title="Voltar para a página principal"
            aria-label="Voltar para o site"
          >
            <ArrowLeft size={16} />
            <span className="hidden md:inline font-semibold">Site</span>
          </button>

          {/* Living Mini Avatar */}
          <div className="flex-shrink-0 cursor-pointer" onClick={onBackToSite}>
            <BoraRobot size="sm" state={currentStep === 'PAYMENT_CONFIRMED' ? 'celebrating' : 'idle'} />
          </div>

          {/* Identity & Status */}
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-white text-xs sm:text-sm tracking-tight truncate">
                Assistente <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500">BoraFlix</span>
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse" />
              <span className="text-[10px] text-emerald-400 font-semibold tracking-wide">
                Online
              </span>
              <span className="hidden sm:inline text-slate-600">•</span>
              <span className="hidden sm:inline text-[10px] font-mono text-slate-400">
                {orderId}
              </span>
            </div>
          </div>
        </div>

        {/* Center / Right: Discrete Step Progress Indicator */}
        <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
          <div className="flex flex-col items-end">
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] font-bold text-cyan-400 tracking-wide font-mono">
                {currentStepMeta.index} de {totalSteps}
              </span>
              <span className="hidden sm:inline text-xs font-semibold text-slate-300">
                • {currentStepMeta.label}
              </span>
            </div>

            {/* Micro Segmented Progress Track */}
            <div className="w-18 sm:w-28 h-1 rounded-full bg-white/10 mt-1 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 transition-all duration-500 ease-out"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Secure Reassurance Tag (Desktop) */}
          <div className="hidden lg:flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-medium">
            <ShieldCheck size={13} />
            <span>Atendimento Seguro</span>
          </div>

          {/* Reset Conversation Button */}
          <button
            type="button"
            onClick={onReset}
            className="p-1.5 sm:p-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] text-slate-400 hover:text-pink-400 transition-all active:scale-95"
            title="Recomeçar atendimento"
            aria-label="Reiniciar conversa"
          >
            <RotateCcw size={14} />
          </button>
        </div>
      </div>
    </header>
  );
};
