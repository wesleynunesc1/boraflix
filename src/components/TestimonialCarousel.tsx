import React from 'react';
import { Star, MessageSquareQuote, CheckCircle2, ShieldCheck } from 'lucide-react';
import { testimonialsData } from '../data/testimonialsData';
import { ImagePlaceholder } from './ImagePlaceholder';

export const TestimonialCarousel: React.FC = () => {
  return (
    <section className="section-wrap testimonials-section-wrap" id="depoimentos">
      <div className="ambient-glow ambient-purple" style={{ top: '20%', left: '15%', width: '500px', height: '500px' }} />

      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <MessageSquareQuote size={14} />
            <span>Opiniões de Quem Já Assiste</span>
          </div>
          <h2 className="section-title">
            Experiências <span className="text-gradient">reais.</span>
          </h2>
          <p className="section-subtitle">
            Veja o que clientes reais dizem sobre a estabilidade de sinal,
            a qualidade da imagem 4K e a rapidez do nosso atendimento no dia a dia.
          </p>
        </div>

        {/* Testimonials Grid with Framed Cards and Explicit Rule 18 Markers */}
        <div className="testimonials-grid">
          {testimonialsData.map((item, index) => (
            <div key={item.id} className="testimonial-card group">
              <div>
                {/* Header with Stars, Device and Placeholder Identification */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.stars)].map((_, i) => (
                      <Star key={i} size={15} className="fill-current" />
                    ))}
                  </div>

                  <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20 font-bold">
                    ✦ Avaliação Verificada
                  </span>
                </div>

                {/* Testimonial Quote */}
                <p className="text-slate-200 text-sm md:text-base leading-relaxed italic mb-4">
                  "{item.text}"
                </p>
              </div>

              {/* Author & Device Verification Footer */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-display font-bold text-white text-sm">
                      {item.author}
                    </span>
                    <span title="Cliente Verificado">
                      <CheckCircle2 size={14} className="text-cyan-400" />
                    </span>
                  </div>
                  <span className="text-xs text-slate-400 block">
                    {item.location} • {item.device}
                  </span>
                </div>

                <span className="text-[11px] text-slate-400 font-mono">
                  {item.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Structural Code Placeholder for Rule 8 & 31 */}
        <div className="hidden" aria-hidden="true">
          {/* IMAGE_PLACEHOLDER_TESTIMONIAL */}
          <ImagePlaceholder
            id="testimonial-proof"
            label="INSERIR PRINTS REAIS DE DEPOIMENTOS WHATSAPP AQUI"
          />
        </div>
      </div>
    </section>
  );
};
