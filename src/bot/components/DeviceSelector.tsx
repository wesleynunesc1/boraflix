import React, { useState } from 'react';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { DEVICE_CATEGORIES, DeviceCategoryOption } from '../config/botConfig';

interface DeviceSelectorProps {
  onConfirmDevice: (category: DeviceCategoryOption, detail: { id: string; label: string }) => void;
  selectedCategory?: string;
  selectedDetail?: string;
}

export const DeviceSelector: React.FC<DeviceSelectorProps> = ({
  onConfirmDevice,
  selectedCategory,
  selectedDetail,
}) => {
  const [activeCategory, setActiveCategory] = useState<DeviceCategoryOption | null>(() => {
    return DEVICE_CATEGORIES.find(c => c.id === selectedCategory) || null;
  });

  const handleSelectCategory = (cat: DeviceCategoryOption) => {
    setActiveCategory(cat);
  };

  const handleSelectSubOption = (sub: { id: string; label: string }) => {
    if (activeCategory) {
      onConfirmDevice(activeCategory, sub);
    }
  };

  return (
    <div className="w-full my-4 animate-fadeIn">
      {!activeCategory ? (
        <>
          <div className="text-center mb-4">
            <h4 className="text-base sm:text-lg font-bold text-white">
              Em qual aparelho você vai assistir?
            </h4>
            <p className="text-xs text-slate-400 mt-0.5">
              Selecione seu dispositivo principal para receber a orientação correta:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-w-lg mx-auto">
            {DEVICE_CATEGORIES.map(cat => (
              <button
                key={cat.id}
                type="button"
                className="p-3.5 rounded-xl bg-gradient-to-b from-[#12182b] to-[#0a0e1c] border border-white/10 hover:border-cyan-400/50 hover:bg-white/5 active:scale-95 text-left transition-all duration-200 flex flex-col items-start gap-2 shadow-lg group"
                onClick={() => handleSelectCategory(cat)}
              >
                <span className="text-2xl group-hover:scale-110 transition-transform">
                  {cat.icon}
                </span>
                <span className="text-xs sm:text-sm font-bold text-slate-200 group-hover:text-cyan-300 transition-colors">
                  {cat.label}
                </span>
              </button>
            ))}
          </div>
        </>
      ) : (
        <div className="max-w-md mx-auto p-4 rounded-2xl bg-[#0f1424] border border-cyan-500/30 shadow-2xl animate-fadeIn">
          {/* Header with back arrow */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
            <button
              type="button"
              className="text-xs text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
              onClick={() => setActiveCategory(null)}
            >
              <ArrowLeft size={14} />
              <span>Trocar categoria</span>
            </button>
            <span className="text-xs font-bold text-cyan-400 flex items-center gap-1">
              <span>{activeCategory.icon}</span>
              <span>{activeCategory.label}</span>
            </span>
          </div>

          <p className="text-xs font-semibold text-slate-300 mb-3 text-center">
            {activeCategory.id === 'smart_tv'
              ? 'Qual é a marca da sua Smart TV?'
              : activeCategory.id === 'pc'
              ? 'Qual é o sistema do seu computador?'
              : 'Selecione o modelo ou sistema correspondente:'}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {activeCategory.subOptions.map(sub => {
              const isSelected = selectedDetail === sub.id;

              return (
                <button
                  key={sub.id}
                  type="button"
                  className={`p-3 rounded-xl border text-left text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center justify-between active:scale-95 ${
                    isSelected
                      ? 'bg-cyan-500/20 border-cyan-400 text-white'
                      : 'bg-white/5 border-white/10 text-slate-200 hover:border-cyan-400/50 hover:bg-white/10'
                  }`}
                  onClick={() => handleSelectSubOption(sub)}
                >
                  <span>{sub.label}</span>
                  {isSelected && <CheckCircle2 size={16} className="text-cyan-400" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
