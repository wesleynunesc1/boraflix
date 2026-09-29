import React, { useRef, useEffect } from 'react';
import { Send, AlertCircle, Smile } from 'lucide-react';
import { formatCpfInput, formatPhoneInput } from '../config/botConfig';

export type InputKind = 'text' | 'email' | 'tel' | 'cpf';

interface ChatInputBarProps {
  kind: InputKind;
  value: string;
  placeholder: string;
  error?: string;
  onChange: (val: string) => void;
  onSubmit: () => void;
  disabled?: boolean;
}

export const ChatInputBar: React.FC<ChatInputBarProps> = ({
  kind,
  value,
  placeholder,
  error,
  onChange,
  onSubmit,
  disabled = false,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-focus input when it mounts/changes
  useEffect(() => {
    const timer = setTimeout(() => {
      inputRef.current?.focus();
    }, 150);
    return () => clearTimeout(timer);
  }, [kind]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    if (kind === 'cpf') {
      onChange(formatCpfInput(raw));
    } else if (kind === 'tel') {
      onChange(formatPhoneInput(raw));
    } else {
      onChange(raw);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSubmit();
    }
  };

  const getInputMode = (): React.HTMLAttributes<HTMLInputElement>['inputMode'] => {
    if (kind === 'tel') return 'tel';
    if (kind === 'cpf') return 'numeric';
    if (kind === 'email') return 'email';
    return 'text';
  };

  const getType = () => {
    if (kind === 'email') return 'email';
    return 'text';
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-2 sm:px-4 py-2 bg-[#090e1a]/95 backdrop-blur-md border-t border-white/[0.08] shadow-[0_-4px_25px_rgba(0,0,0,0.5)]">
      {/* Error Badge */}
      {error && (
        <div className="flex items-center gap-1.5 text-xs text-rose-300 font-medium mb-1.5 px-3 py-1 rounded-lg bg-rose-500/15 border border-rose-500/30 animate-fadeIn max-w-fit mx-auto">
          <AlertCircle size={13} className="text-rose-400 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <form
        onSubmit={e => {
          e.preventDefault();
          onSubmit();
        }}
        className="flex items-center gap-2"
      >
        {/* WhatsApp Pill Input Container */}
        <div className="flex-1 flex items-center gap-2 py-1.5 px-3.5 sm:px-4 rounded-full bg-[#182334] border border-white/[0.1] focus-within:border-cyan-400 focus-within:ring-1 focus-within:ring-cyan-400/40 transition-all duration-200">
          <Smile size={18} className="text-[#8696a0] flex-shrink-0 hidden sm:block" />

          <input
            ref={inputRef}
            type={getType()}
            inputMode={getInputMode()}
            value={value}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            disabled={disabled}
            style={{ fontSize: '16px' }} // HARD RULE: 16px explicitly stops iOS auto-zoom
            className="flex-1 bg-transparent py-1.5 text-[#f0f2f5] placeholder:text-[#8696a0] outline-none min-w-0 font-normal leading-normal"
            autoComplete="off"
            autoCorrect="off"
            spellCheck="false"
          />
        </div>

        {/* WhatsApp Circular Send Button with BoraFlix Glow */}
        <button
          type="submit"
          disabled={disabled || !value.trim()}
          className="w-11 h-11 rounded-full bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-500 hover:opacity-95 disabled:opacity-30 disabled:pointer-events-none text-white flex items-center justify-center transition-all duration-150 active:scale-90 flex-shrink-0 shadow-lg shadow-pink-500/25"
          aria-label="Enviar mensagem"
        >
          <Send size={18} className="translate-x-0.5 fill-current" />
        </button>
      </form>
    </div>
  );
};
