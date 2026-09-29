import React from 'react';
import { Star, MessageSquareQuote, CheckCircle2 } from 'lucide-react';
import { testimonialsData } from '../data/testimonialsData';

export const TestimonialCarousel: React.FC = () => {
  const reviews = [
    {
      id: 'rev-1',
      name: 'Lucas M.',
      device: 'Smart TV LG OLED 4K',
      plan: 'Plano Semestral',
      stars: 5,
      comment: 'A estabilidade me impressionou muito. Já testei outros serviços que travavam justo na hora do jogo do meu time. Na BoraFlix rodou liso o clássico inteiro em 4K. Recomendo de olhos fechados.',
      time: 'Cliente há 8 meses'
    },
    {
      id: 'rev-2',
      name: 'Juliana C.',
      device: 'Fire TV Stick 4K',
      plan: 'Plano Anual',
      stars: 5,
      comment: 'A facilidade de organizar as categorias e o catálogo para as crianças fez toda a diferença em casa. Minha filha assiste aos desenhos no tablet enquanto assisto minhas séries na sala.',
      time: 'Cliente há 1 ano'
    },
    {
      id: 'rev-3',
      name: 'Rodrigo S.',
      device: 'Samsung Tizen + Celular',
      plan: 'Plano Anual',
      stars: 5,
      comment: 'Configurei em menos de 3 minutos seguindo o passo a passo. O suporte no WhatsApp me atendeu com muita atenção. Vale cada centavo economizado.',
      time: 'Cliente há 5 meses'
    },
    {
      id: 'rev-4',
      name: 'Camila F.',
      device: 'Chromecast com Google TV',
      plan: 'Plano Trimestral',
      stars: 5,
      comment: 'Catálogo sempre atualizado com filmes recém-saídos do cinema. A imagem em 4K é excelente e não trava aos finais de semana. Experiência de plataforma grande!',
      time: 'Cliente há 6 meses'
    }
  ];

  return (
    <section className="section-wrap reviews-section-wrap" id="depoimentos">
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <MessageSquareQuote size={13} className="text-cyan-400" />
            <span>OPINIÕES DE QUEM JÁ ASSISTE</span>
          </div>
          <h2 className="section-title font-display">
            Experiências <span className="text-gradient">reais.</span>
          </h2>
          <p className="section-subtitle">
            Veja o que assinantes dizem sobre a facilidade de instalação, qualidade de imagem em 4K
            e agilidade do suporte no dia a dia.
          </p>
        </div>

        {/* Reviews Container: Desktop Grid & Mobile Horizontal Carousel */}
        <div className="reviews-layout-track">
          {reviews.map(item => (
            <div key={item.id} className="review-card group">
              {/* Stars & Plan Tag */}
              <div className="review-card-top">
                <div className="review-stars-row" aria-label={`${item.stars} de 5 estrelas`}>
                  {[...Array(item.stars)].map((_, i) => (
                    <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="review-plan-badge font-mono">{item.plan}</span>
              </div>

              {/* Comment Quote */}
              <p className="review-quote-text">
                "{item.comment}"
              </p>

              {/* Review Author & Device */}
              <div className="review-author-row">
                <div className="author-avatar-initial">
                  {item.name.charAt(0)}
                </div>
                <div className="author-details">
                  <div className="flex items-center gap-1.5">
                    <span className="author-name font-display font-bold text-white text-sm">
                      {item.name}
                    </span>
                    <CheckCircle2 size={13} className="text-cyan-400" />
                  </div>
                  <span className="author-device text-xs text-slate-400">
                    {item.device} • <span className="text-slate-500 font-mono">{item.time}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
