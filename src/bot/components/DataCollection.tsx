import React, { useState } from 'react';
import { User, Mail, Phone, FileText, Shield, ArrowRight, AlertCircle } from 'lucide-react';
import { formatCpfInput, formatPhoneInput } from '../config/botConfig';
import { CustomerData } from '../types/bot';

interface DataCollectionProps {
  initialData: Partial<CustomerData>;
  onSubmitData: (data: CustomerData) => void;
}

export const DataCollection: React.FC<DataCollectionProps> = ({
  initialData,
  onSubmitData,
}) => {
  const [name, setName] = useState(initialData.name || '');
  const [email, setEmail] = useState(initialData.email || '');
  const [phone, setPhone] = useState(initialData.phone ? formatPhoneInput(initialData.phone) : '');
  const [cpf, setCpf] = useState(initialData.cpf ? formatCpfInput(initialData.cpf) : '');
  const [consent, setConsent] = useState(initialData.consent ?? true);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!name.trim() || name.trim().split(' ').length < 2) {
      newErrors.name = 'Por favor, informe seu nome completo (nome e sobrenome).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email.trim())) {
      newErrors.email = 'Informe um endereço de e-mail válido.';
    }

    const phoneDigits = phone.replace(/\D/g, '');
    if (phoneDigits.length < 10 || phoneDigits.length > 11) {
      newErrors.phone = 'Informe um número de WhatsApp válido com DDD (ex: 85 99999-9999).';
    }

    const cpfDigits = cpf.replace(/\D/g, '');
    if (cpfDigits.length !== 11) {
      newErrors.cpf = 'Informe um CPF válido com 11 dígitos.';
    }

    if (!consent) {
      newErrors.consent = 'Você precisa concordar para prosseguirmos com a ativação.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmitData({
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        cpf: cpf.trim(),
        consent,
      });
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto my-4 p-5 sm:p-6 rounded-2xl bg-[#0e1424] border border-cyan-500/30 shadow-2xl animate-fadeIn">
      {/* Header & Privacy Notice */}
      <div className="mb-5 pb-3 border-b border-white/10">
        <h4 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
          <User size={18} className="text-cyan-400" />
          <span>Dados para Registro e Ativação</span>
        </h4>
        <p className="text-xs text-slate-400 mt-1 flex items-start gap-1.5 leading-relaxed">
          <Shield size={14} className="text-emerald-400 flex-shrink-0 mt-0.5" />
          <span>
            Seus dados são protegidos e utilizados exclusivamente para emissão do pedido e liberação do seu acesso no WhatsApp.
          </span>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Nome Completo */}
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
            Nome Completo <span className="text-pink-400">*</span>
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="Ex: João da Silva Santos"
              value={name}
              onChange={e => {
                setName(e.target.value);
                if (errors.name) setErrors(prev => ({ ...prev, name: '' }));
              }}
              className={`w-full py-2.5 px-3.5 pl-10 rounded-xl bg-black/40 border text-white text-sm focus:outline-none focus:ring-2 transition-all ${
                errors.name
                  ? 'border-rose-500/80 focus:ring-rose-500/30'
                  : 'border-white/15 focus:border-cyan-400 focus:ring-cyan-500/20'
              }`}
            />
            <User size={16} className="absolute left-3.5 top-3 text-slate-400" />
          </div>
          {errors.name && (
            <span className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
              <AlertCircle size={12} /> {errors.name}
            </span>
          )}
        </div>

        {/* E-mail */}
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1.5">
            E-mail para Acesso <span className="text-pink-400">*</span>
          </label>
          <div className="relative">
            <input
              type="email"
              placeholder="seu.email@exemplo.com"
              value={email}
              onChange={e => {
                setEmail(e.target.value);
                if (errors.email) setErrors(prev => ({ ...prev, email: '' }));
              }}
              className={`w-full py-2.5 px-3.5 pl-10 rounded-xl bg-black/40 border text-white text-sm focus:outline-none focus:ring-2 transition-all ${
                errors.email
                  ? 'border-rose-500/80 focus:ring-rose-500/30'
                  : 'border-white/15 focus:border-cyan-400 focus:ring-cyan-500/20'
              }`}
            />
            <Mail size={16} className="absolute left-3.5 top-3 text-slate-400" />
          </div>
          {errors.email && (
            <span className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
              <AlertCircle size={12} /> {errors.email}
            </span>
          )}
        </div>

        {/* WhatsApp & CPF Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {/* WhatsApp */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              WhatsApp com DDD <span className="text-pink-400">*</span>
            </label>
            <div className="relative">
              <input
                type="tel"
                placeholder="(85) 99999-9999"
                value={phone}
                onChange={e => {
                  setPhone(formatPhoneInput(e.target.value));
                  if (errors.phone) setErrors(prev => ({ ...prev, phone: '' }));
                }}
                className={`w-full py-2.5 px-3.5 pl-10 rounded-xl bg-black/40 border text-white text-sm font-mono focus:outline-none focus:ring-2 transition-all ${
                  errors.phone
                    ? 'border-rose-500/80 focus:ring-rose-500/30'
                    : 'border-white/15 focus:border-cyan-400 focus:ring-cyan-500/20'
                }`}
              />
              <Phone size={16} className="absolute left-3.5 top-3 text-slate-400" />
            </div>
            {errors.phone && (
              <span className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                <AlertCircle size={12} /> {errors.phone}
              </span>
            )}
          </div>

          {/* CPF */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              CPF do Titular <span className="text-pink-400">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="000.000.000-00"
                value={cpf}
                onChange={e => {
                  setCpf(formatCpfInput(e.target.value));
                  if (errors.cpf) setErrors(prev => ({ ...prev, cpf: '' }));
                }}
                className={`w-full py-2.5 px-3.5 pl-10 rounded-xl bg-black/40 border text-white text-sm font-mono focus:outline-none focus:ring-2 transition-all ${
                  errors.cpf
                    ? 'border-rose-500/80 focus:ring-rose-500/30'
                    : 'border-white/15 focus:border-cyan-400 focus:ring-cyan-500/20'
                }`}
              />
              <FileText size={16} className="absolute left-3.5 top-3 text-slate-400" />
            </div>
            {errors.cpf && (
              <span className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                <AlertCircle size={12} /> {errors.cpf}
              </span>
            )}
          </div>
        </div>

        {/* Consent Checkbox */}
        <div className="pt-2">
          <label className="flex items-start gap-2.5 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={consent}
              onChange={e => {
                setConsent(e.target.checked);
                if (errors.consent) setErrors(prev => ({ ...prev, consent: '' }));
              }}
              className="mt-0.5 rounded border-white/20 bg-black/40 text-pink-500 focus:ring-pink-500 focus:ring-offset-0 w-4 h-4 cursor-pointer"
            />
            <span className="text-xs text-slate-400 leading-relaxed">
              Concordo com o uso dos dados para ativação, suporte e faturamento do serviço BoraFlix.
            </span>
          </label>
          {errors.consent && (
            <span className="text-[11px] text-rose-400 mt-1 block">
              {errors.consent}
            </span>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-3">
          <button
            type="submit"
            className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-400 hover:to-rose-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-pink-500/25 transition-all active:scale-95"
          >
            <span>CONTINUAR PARA REVISÃO</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </form>
    </div>
  );
};
