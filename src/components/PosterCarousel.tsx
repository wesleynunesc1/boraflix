import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Play, Sparkles } from 'lucide-react';
import { catalogItems, catalogCategories } from '../data/catalogData';
import { PosterItem } from '../types';

export const PosterCarousel: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedPoster, setSelectedPoster] = useState<PosterItem | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const filteredItems = activeCategory === 'all'
    ? catalogItems
    : catalogItems.filter(item => item.category === activeCategory);

  const scroll = (direction: 'left' | 'right') => {
    if (trackRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      trackRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="section-wrap" id="experiencia">
      <div className="ambient-glow ambient-magenta" style={{ top: '10%', right: '10%', width: '500px', height: '500px' }} />

      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>Catálogo Cinematográfico</span>
          </div>
          <h2 className="section-title">
            Sempre existe algo para <span className="text-gradient">entrar no clima.</span>
          </h2>
          <p className="section-subtitle">
            Uma experiência visual organizada para você encontrar exatamente o que quer assistir,
            desde lançamentos recém-saídos do cinema até sagas completas.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="catalog-tabs" role="tablist">
          {catalogCategories.map(cat => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeCategory === cat.id}
              className={`catalog-tab ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Carousel Showcase */}
        <div className="catalog-carousel-container">
          {/* Navigation Arrows */}
          <button
            className="carousel-nav-btn prev"
            onClick={() => scroll('left')}
            aria-label="Rolar para a esquerda"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="carousel-nav-btn next"
            onClick={() => scroll('right')}
            aria-label="Rolar para a direita"
          >
            <ChevronRight size={24} />
          </button>

          {/* Cards Track with smooth native touch scroll on mobile & transform support */}
          <div
            ref={trackRef}
            className="catalog-track overflow-x-auto scrollbar-none pb-4"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {filteredItems.map(item => (
              <div
                key={item.id}
                className="poster-card flex-shrink-0"
                style={{ scrollSnapAlign: 'start' }}
                onClick={() => setSelectedPoster(item)}
              >
                <div className="poster-img-wrap">
                  <img
                    src={item.image}
                    alt={`Pôster do filme ou série ${item.title}`}
                    className="poster-img"
                    loading="lazy"
                  />
                  {item.badge && (
                    <span className="poster-badge-top">{item.badge}</span>
                  )}
                  <span className="poster-rating-badge">
                    <Star size={12} className="fill-current text-amber-400" />
                    <span>{item.rating}</span>
                  </span>
                </div>

                <div className="poster-info-overlay">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-cyan-400 font-semibold tracking-wide">
                      {item.categoryLabel}
                    </span>
                    <span className="poster-quality-tag">{item.quality}</span>
                  </div>
                  <h3 className="poster-title">{item.title}</h3>
                  <div className="poster-meta">
                    <span>{item.year}</span>
                    {item.duration && <span>{item.duration}</span>}
                    <span className="text-slate-400 text-[11px] flex items-center gap-1 group-hover:text-pink-400">
                      <Play size={10} className="fill-current" /> Assistir
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Quick View / Preview when card clicked */}
        {selectedPoster && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
            onClick={() => setSelectedPoster(null)}
          >
            <div
              className="glass-panel max-w-lg w-full p-6 relative border border-white/20 shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex gap-5">
                <img
                  src={selectedPoster.image}
                  alt={selectedPoster.title}
                  className="w-32 h-48 object-cover rounded-lg shadow-lg flex-shrink-0"
                />
                <div className="flex flex-col justify-between">
                  <div>
                    <span className="text-xs text-cyan-400 font-mono font-bold">
                      {selectedPoster.categoryLabel} • {selectedPoster.quality}
                    </span>
                    <h3 className="font-display text-2xl font-bold text-white mt-1">
                      {selectedPoster.title}
                    </h3>
                    <div className="flex items-center gap-3 mt-2 text-sm text-slate-300">
                      <span className="flex items-center gap-1 text-amber-400 font-bold">
                        <Star size={14} className="fill-current" /> {selectedPoster.rating}
                      </span>
                      <span>{selectedPoster.year}</span>
                      {selectedPoster.duration && <span>{selectedPoster.duration}</span>}
                    </div>
                    <p className="text-xs text-slate-300 mt-3 line-clamp-3 leading-relaxed">
                      {selectedPoster.description}
                    </p>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <a
                      href="#planos"
                      className="btn btn-primary btn-sm"
                      onClick={() => setSelectedPoster(null)}
                    >
                      Assista Agora na BoraFlix
                    </a>
                    <button
                      className="btn btn-secondary btn-sm"
                      onClick={() => setSelectedPoster(null)}
                    >
                      Fechar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
