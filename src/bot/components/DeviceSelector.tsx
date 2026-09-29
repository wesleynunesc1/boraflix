import React, { useState } from 'react';
import { ArrowLeft, CheckCircle2, ChevronRight } from 'lucide-react';
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
    <div className="w-full my-3 animate-fadeIn">
      {!activeCategory ? (
        /* STEP 1: CATEGORY SELECTION */
        <div className="max-w-xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5">
            {DEVICE_CATEGORIES.map(cat => (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleSelectCategory(cat)}
                className="p-3 sm:p-3.5 rounded-2xl bg-[#0d1222] border border-white/10 hover:border-cyan-400/60 hover:bg-[#12182c] active:scale-[0.98] text-left transition-all duration-200 flex items-center justify-between group shadow-md"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="text-xl sm:text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                    {cat.icon}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-200 group-hover:text-cyan-300 transition-colors truncate">
                    {cat.label}
                  </span>
                </div>
                <ChevronRight size={14} className="text-slate-500 group-hover:text-cyan-400 flex-shrink-0" />
              </button>
            ))}
          </div>
        </div>
      ) : (
        /* STEP 2: BRAND / SYSTEM SUB-OPTION CONDITIONAL */
        <div className="max-w-lg mx-auto p-4 sm:p-5 rounded-2xl bg-[#0d1222] border border-cyan-500/30 shadow-xl animate-fadeIn">
          {/* Header with back navigation */}
          <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] mb-3">
            <button
              type="button"
              onClick={() => setActiveCategory(null)}
              className="text-xs text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors font-medium p-1"
            >
              <ArrowLeft size={14} />
              <span>Trocar aparelho</span>
            </button>
            <span className="text-xs font-bold text-cyan-400 flex items-center gap-1.5">
              <span>{activeCategory.icon}</span>
              <span>{activeCategory.label}</span>
            </span>
          </div>

          <p className="text-xs font-semibold text-slate-300 mb-3">
            {activeCategory.id === 'smart_tv'
              ? 'Qual é a marca da sua Smart TV?'
              : activeCategory.id === 'pc'
              ? 'Qual é o sistema do seu computador?'
              : 'Selecione o modelo do seu dispositivo:'}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {activeCategory.subOptions.map(sub => {
              const isSelected = selectedDetail === sub.id;

              return (
                <button
                  key={sub.id}
                  type="button"
                  onClick={() => handleSelectSubOption(sub)}
                  className={`p-3 rounded-xl border text-left text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center justify-between active:scale-[0.98] ${
                    isSelected
                      ? 'bg-cyan-500/20 border-cyan-400 text-white shadow-[0_0_15px_rgba(0,207,255,0.2)]'
                      : 'bg-white/[0.04] border-white/[0.08] text-slate-200 hover:border-cyan-400/50 hover:bg-white/[0.08]'
                  }`}
                >
                  <span className="truncate">{sub.label}</span>
                  {isSelected ? (
                    <CheckCircle2 size={16} className="text-cyan-400 flex-shrink-0 ml-1.5" />
                  ) : (
                    <ChevronRight size={14} className="text-slate-500 flex-shrink-0 ml-1.5" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
