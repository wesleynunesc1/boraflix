import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle, ArrowRight } from 'lucide-react';
import { faqItems } from '../data/faqData';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-wrap faq-section-wrap" id="faq">
      {/* Precision Ambient Volumetric Glow */}
      <div
        className="ambient-glow ambient-cyan"
        style={{ top: '25%', right: '15%', width: '550px', height: '550px', opacity: 0.18 }}
      />

      <div className="container">
        {/* Two-Column Editorial Layout (Section 19) */}
        <div className="faq-split-grid">
          {/* Left Column: Fixed / Sticky Editorial Anchor */}
          <div className="faq-sidebar-sticky">
            <div className="section-badge mb-4">
              <HelpCircle size={14} />
              <span>Dúvidas & Respostas</span>
            </div>

            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-white leading-tight mb-4">
              Ainda ficou <br />
              <span className="text-gradient">alguma dúvida?</span>
            </h2>

            <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-8 max-w-sm">
              Transparência absoluta do início ao fim. Reunimos aqui os principais questionamentos
              dos nossos clientes para você começar com total segurança.
            </p>

            {/* Direct WhatsApp Contact Card */}
            <div className="faq-support-box">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <h4 className="font-display text-sm font-bold text-white">Prefere tirar dúvidas ao vivo?</h4>
                  <span className="text-xs text-slate-400">Suporte 24h via WhatsApp</span>
                </div>
              </div>

              <a
                href="https://wa.me/5500000000000?text=Olá,%20tenho%20uma%20dúvida%20sobre%20a%20BoraFlix"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm w-full justify-center text-xs py-2.5 hover:border-emerald-400/40"
              >
                <span>Falar com Atendente</span>
                <ArrowRight size={14} className="text-emerald-400" />
              </a>
            </div>
          </div>

          {/* Right Column: Modern Animated Accordion */}
          <div className="faq-accordion-column">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`faq-item-refined ${isOpen ? 'open' : ''}`}
                >
                  <button
                    className="faq-question-bar"
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-q-text">{item.question}</span>
                    <div className="faq-chevron-wrap">
                      <ChevronDown size={18} className="faq-icon-chevron" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="faq-answer-drawer animate-fadeIn">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
