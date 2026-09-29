import React from 'react';
import { CheckCircle2, HelpCircle, Download, ChevronRight } from 'lucide-react';
import { getDeviceInstructions } from '../config/botConfig';
import { DeviceInfo } from '../types/bot';

interface DeviceInstructionsProps {
  device: DeviceInfo;
  customerName: string;
  onConfirmInstallation: (installed: boolean) => void;
}

export const DeviceInstructions: React.FC<DeviceInstructionsProps> = ({
  device,
  customerName,
  onConfirmInstallation,
}) => {
  const instructions = getDeviceInstructions(device.category, device.detail);

  return (
    <div className="w-full max-w-lg mx-auto my-3 p-4 sm:p-5 rounded-2xl bg-[#0d1222] border border-cyan-500/30 shadow-xl animate-fadeIn">
      {/* Header */}
      <div className="flex items-center gap-2.5 pb-3 border-b border-white/[0.08] mb-3.5">
        <div className="w-8 h-8 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center flex-shrink-0">
          <Download size={16} />
        </div>
        <div>
          <h4 className="text-xs sm:text-sm font-bold text-white">
            Preparação para {device.detailLabel || device.categoryLabel}
          </h4>
          <span className="text-[10px] text-slate-400">
            Passo a passo rápido para seu aparelho
          </span>
        </div>
      </div>

      {/* Recommended App Callout */}
      <div className="p-3 rounded-xl bg-cyan-950/30 border border-cyan-500/25 mb-3.5">
        <span className="text-[10px] uppercase font-bold text-cyan-400 tracking-wider block mb-0.5">
          Aplicativo Recomendado
        </span>
        <strong className="text-xs sm:text-sm font-extrabold text-white block">
          {instructions.appName}
        </strong>
        <p className="text-[11px] text-slate-300 mt-1 leading-relaxed">
          {instructions.appDescription}
        </p>
      </div>

      {/* 3 Step list */}
      <div className="space-y-1.5 mb-3.5">
        {instructions.steps.map((step, idx) => (
          <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 p-1.5 rounded-lg bg-white/[0.02]">
            <span className="w-4 h-4 rounded-full bg-cyan-500/20 text-cyan-300 font-bold flex items-center justify-center flex-shrink-0 text-[10px] mt-0.5">
              {idx + 1}
            </span>
            <span className="leading-snug">{step}</span>
          </div>
        ))}
      </div>

      {/* Practical tip */}
      {instructions.tips && (
        <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-[11px] text-slate-400 mb-4 leading-relaxed">
          💡 <strong className="text-slate-300">Dica:</strong> {instructions.tips}
        </div>
      )}

      {/* Interactive Quick Action Buttons */}
      <div className="border-t border-white/[0.08] pt-3.5 space-y-2">
        <p className="text-xs font-semibold text-white text-center mb-2.5">
          {customerName ? `${customerName}, conseguiu` : 'Conseguiu'} instalar o app?
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => onConfirmInstallation(true)}
            className="py-2.5 px-3.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-400/40 text-emerald-300 text-xs font-bold flex items-center justify-center gap-1.5 transition-all active:scale-[0.98]"
          >
            <CheckCircle2 size={15} />
            <span>Sim, já instalei!</span>
          </button>

          <button
            type="button"
            onClick={() => onConfirmInstallation(false)}
            className="py-2.5 px-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-slate-300 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all active:scale-[0.98]"
          >
            <HelpCircle size={15} className="text-slate-400" />
            <span>Preciso de ajuda</span>
          </button>
        </div>
      </div>
    </div>
  );
};
