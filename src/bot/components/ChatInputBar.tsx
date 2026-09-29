import React, { useRef, useEffect } from 'react';
import { Send, AlertCircle, ArrowUp } from 'lucide-react';
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

  // Auto-focus input when it appears
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
    <div className="w-full max-w-lg mx-auto my-3 animate-fadeIn">
      <form
        onSubmit={e => {
          e.preventDefault();
          onSubmit();
        }}
        className="relative"
      >
        <div
          className={`flex items-center gap-2 p-1.5 sm:p-2 rounded-2xl bg-[#0d1222] border transition-all duration-200 shadow-xl ${
            error
              ? 'border-rose-500/80 ring-2 ring-rose-500/20'
              : 'border-cyan-500/40 focus-within:border-cyan-400 focus-within:ring-2 focus-within:ring-cyan-500/30'
          }`}
        >
          <input
            ref={inputRef}
            type={getType()}
            inputMode={getInputMode()}
            value={value}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            disabled={disabled}
            className="flex-1 bg-transparent px-3 py-2 text-white placeholder:text-slate-500 text-sm sm:text-base outline-none min-w-0 font-normal"
            autoComplete="off"
          />

          <button
            type="submit"
            disabled={disabled || !value.trim()}
            className="w-10 h-10 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 disabled:opacity-30 disabled:pointer-events-none text-white flex items-center justify-center transition-all active:scale-90 flex-shrink-0 shadow-md shadow-pink-500/20"
            aria-label="Enviar resposta"
          >
            <ArrowUp size={18} strokeWidth={2.5} />
          </button>
        </div>

        {/* Validation Error Banner */}
        {error && (
          <div className="flex items-center gap-1.5 text-xs text-rose-400 font-medium mt-1.5 px-2 animate-fadeIn">
            <AlertCircle size={13} className="flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}
      </form>
    </div>
  );
};
