import React, { useState } from 'react';
import { CheckCircle, HelpCircle, AlertCircle, ArrowRight, Download } from 'lucide-react';
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
  const [showHelpDetails, setShowHelpDetails] = useState(false);
  const instructions = getDeviceInstructions(device.category, device.detail);

  return (
    <div className="w-full max-w-lg mx-auto my-4 p-5 rounded-2xl bg-[#0e1424] border border-cyan-500/30 shadow-2xl animate-fadeIn">
      {/* Header */}
      <div className="flex items-center gap-2.5 pb-3 border-b border-white/10 mb-4">
        <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-300 flex items-center justify-center">
          <Download size={18} />
        </div>
        <div>
          <h4 className="text-sm font-bold text-white">
            Preparação: {device.detailLabel || device.categoryLabel}
          </h4>
          <span className="text-[11px] text-slate-400">
            Passo a passo exclusivo para seu aparelho
          </span>
        </div>
      </div>

      {/* Recommended App Callout */}
      <div className="p-3.5 rounded-xl bg-cyan-950/40 border border-cyan-500/30 mb-4">
        <span className="text-[10px] uppercase font-bold text-cyan-400 tracking-wider block mb-1">
          Aplicativo Recomendado
        </span>
        <strong className="text-sm font-extrabold text-white block">
          {instructions.appName}
        </strong>
        <p className="text-xs text-slate-300 mt-1">
          {instructions.appDescription}
        </p>
      </div>

      {/* Step by step */}
      <div className="mb-4">
        <span className="text-xs font-bold text-slate-300 block mb-2">
          Instruções simples de instalação:
        </span>
        <ol className="space-y-2 text-xs text-slate-300">
          {instructions.steps.map((step, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="w-5 h-5 rounded-full bg-white/10 text-cyan-400 font-bold flex items-center justify-center flex-shrink-0 text-[11px]">
                {idx + 1}
              </span>
              <span className="mt-0.5 leading-relaxed">{step}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* Technical Tip */}
      <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-400 flex items-start gap-2 mb-5">
        <AlertCircle size={15} className="text-amber-400 flex-shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          <strong className="text-slate-200">Dica:</strong> {instructions.tips}
        </p>
      </div>

      {/* Interactive Question */}
      <div className="border-t border-white/10 pt-4 text-center">
        <p className="text-xs sm:text-sm font-semibold text-white mb-3">
          {customerName ? `${customerName}, conseguiu` : 'Conseguiu'} instalar o aplicativo no aparelho?
        </p>

        <div className="flex flex-col sm:flex-row gap-2.5">
          <button
            type="button"
            className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all active:scale-95 shadow-lg shadow-emerald-500/20"
            onClick={() => onConfirmInstallation(true)}
          >
            <CheckCircle size={16} />
            <span>SIM, JÁ INSTALEI</span>
          </button>

          <button
            type="button"
            className="flex-1 py-3 px-4 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-slate-200 font-semibold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all active:scale-95"
            onClick={() => setShowHelpDetails(true)}
          >
            <HelpCircle size={16} className="text-amber-400" />
            <span>PRECISO DE AJUDA</span>
          </button>
        </div>

        {/* Extra Help Callout */}
        {showHelpDetails && (
          <div className="mt-4 p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-left animate-fadeIn">
            <h5 className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
              <HelpCircle size={14} />
              <span>Sem problemas! Nosso time vai te ajudar no WhatsApp</span>
            </h5>
            <p className="text-xs text-slate-300 mt-1 leading-relaxed">
              Não se preocupe: assim que seu pedido for confirmado, o atendente humano da BoraFlix vai te enviar o tutorial exato com fotos e vídeo e te guiar até a tela estar rodando perfeitamente.
            </p>
            <button
              type="button"
              className="mt-3 w-full py-2.5 px-4 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
              onClick={() => onConfirmInstallation(false)}
            >
              <span>CONTINUAR E ATIVAR COM SUPORTE</span>
              <ArrowRight size={14} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
