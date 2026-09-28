import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { faqItems } from '../data/faqData';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-wrap" id="faq">
      <div className="ambient-glow ambient-cyan" style={{ top: '30%', right: '20%', width: '500px', height: '500px' }} />

      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <HelpCircle size={14} />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="section-title">
            Ainda ficou <span className="text-gradient">alguma dúvida?</span>
          </h2>
          <p className="section-subtitle">
            Transparência total desde o início. Confira as respostas diretas para as perguntas mais frequentes.
          </p>
        </div>

        {/* Modern Accordion */}
        <div className="faq-accordion-wrap">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`faq-item ${isOpen ? 'open' : ''}`}
              >
                <button
                  className="faq-question-btn"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                >
                  <span>{item.question}</span>
                  <ChevronDown size={20} className="faq-icon-chevron" />
                </button>

                {isOpen && (
                  <div className="faq-answer-panel animate-fadeIn">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Support Direct Help Pill */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-400 mb-3">
            Não encontrou a resposta para a sua dúvida específica?
          </p>
          <a
            href="https://wa.me/5500000000000?text=Olá,%20tenho%20uma%20dúvida%20sobre%20a%20BoraFlix"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors bg-white/5 border border-white/10 px-5 py-2.5 rounded-full hover:border-cyan-400/40"
          >
            <MessageCircle size={18} className="text-emerald-400" />
            <span>Falar com especialista no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
