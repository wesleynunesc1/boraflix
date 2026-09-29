import React from 'react';
import { ArrowLeft, RotateCcw, ShieldCheck, Check } from 'lucide-react';
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
    <header className="sticky top-0 z-40 w-full bg-[#0b141a]/95 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
      <div className="max-w-4xl mx-auto px-3 sm:px-5 h-15 sm:h-16 flex items-center justify-between gap-2.5">
        {/* Left: WhatsApp Contact Header Bar */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          {/* Back Arrow */}
          <button
            type="button"
            onClick={onBackToSite}
            className="p-1.5 -ml-1 rounded-full text-[#8696a0] hover:text-white hover:bg-white/[0.08] transition-colors flex items-center justify-center"
            title="Voltar ao site"
            aria-label="Voltar para a página principal"
          >
            <ArrowLeft size={19} />
          </button>

          {/* Contact Avatar (BoraRobot) */}
          <div className="relative flex-shrink-0 cursor-pointer" onClick={onBackToSite}>
            <BoraRobot size="sm" state={currentStep === 'PAYMENT_CONFIRMED' ? 'celebrating' : 'idle'} />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#25d366] border-2 border-[#0b141a]" />
          </div>

          {/* Contact Name & Status (WhatsApp Typography) */}
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-white text-[14px] sm:text-[15px] tracking-tight truncate">
                Assistente BoraFlix
              </span>
              {/* Verified Blue Badge */}
              <span
                className="w-3.5 h-3.5 rounded-full bg-[#00cfff] text-slate-950 flex items-center justify-center flex-shrink-0"
                title="Assistente Oficial Verificado"
              >
                <Check size={9} strokeWidth={4} />
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="text-[11px] text-[#25d366] font-medium leading-none">
                online
              </span>
              <span className="text-slate-600 text-[10px]">•</span>
              <span className="text-[10px] font-mono text-[#8696a0] truncate">
                {orderId}
              </span>
            </div>
          </div>
        </div>

        {/* Right: Step Indicator & Actions */}
        <div className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0">
          <div className="flex flex-col items-end">
            <span className="text-[10px] sm:text-[11px] font-bold text-cyan-400 font-mono tracking-wide">
              {currentStepMeta.index} de {totalSteps}
            </span>
            <div className="w-16 sm:w-24 h-1 rounded-full bg-white/10 mt-1 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Restart Session Icon Button */}
          <button
            type="button"
            onClick={onReset}
            className="p-2 rounded-full text-[#8696a0] hover:text-white hover:bg-white/[0.08] transition-colors"
            title="Reiniciar conversa"
            aria-label="Recomeçar atendimento"
          >
            <RotateCcw size={16} />
          </button>
        </div>
      </div>
    </header>
  );
};
