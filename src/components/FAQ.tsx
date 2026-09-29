import React, { useState } from 'react';
import { Plus, HelpCircle, MessageCircle, ArrowRight } from 'lucide-react';
import { faqItems } from '../data/faqData';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-wrap faq-streaming-section" id="faq">
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <HelpCircle size={13} className="text-cyan-400" />
            <span>RESPOSTAS DIRETAS</span>
          </div>
          <h2 className="section-title font-display">
            Ainda ficou <span className="text-gradient">alguma dúvida?</span>
          </h2>
          <p className="section-subtitle">
            Transparência absoluta para você começar hoje mesmo com total segurança e sem surpresas.
          </p>
        </div>

        {/* Large Clean Streaming Accordion Container */}
        <div className="faq-accordion-container">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`faq-streaming-item ${isOpen ? 'is-open' : ''}`}
              >
                <button
                  className="faq-trigger-btn"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-question-label font-display">{item.question}</span>
                  <div className={`faq-plus-icon ${isOpen ? 'rotated' : ''}`} aria-hidden="true">
                    <Plus size={22} />
                  </div>
                </button>

                {isOpen && (
                  <div className="faq-answer-container animate-fadeIn">
                    <div className="faq-answer-inner">
                      <p className="faq-answer-text">{item.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct WhatsApp Live Help Box */}
        <div className="faq-direct-support-box">
          <div className="support-info-part">
            <div className="support-avatar-circle">
              <MessageCircle size={22} className="text-emerald-400" />
            </div>
            <div>
              <h4 className="support-title font-display">Prefere tirar dúvidas agora pelo WhatsApp?</h4>
              <span className="support-subtitle">Atendimento humanizado disponível todos os dias</span>
            </div>
          </div>

          <a
            href="https://wa.me/558594480239?text=Ol%C3%A1!%20Tenho%20uma%20d%C3%BAvida%20sobre%20a%20BoraFlix."
            target="_blank"
            rel="noopener noreferrer"
            className="faq-wa-link"
          >
            <span>Falar com atendente</span>
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
};
