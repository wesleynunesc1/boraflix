import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Play, Sparkles, Film, Info } from 'lucide-react';
import { catalogItems, catalogCategories } from '../data/catalogData';
import { PosterItem } from '../types';

export const PosterCarousel: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [hoveredPoster, setHoveredPoster] = useState<PosterItem>(catalogItems[0]);
  const [selectedPoster, setSelectedPoster] = useState<PosterItem | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const filteredItems = activeCategory === 'all'
    ? catalogItems
    : catalogItems.filter(item => item.category === activeCategory);

  const scroll = (direction: 'left' | 'right') => {
    if (trackRef.current) {
      const scrollAmount = direction === 'left' ? -420 : 420;
      trackRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="section-wrap catalog-cinematic-section" id="experiencia">
      {/* Dynamic Atmospheric Blurred Backdrop reacting to hovered poster (Section 11) */}
      <div className="catalog-dynamic-backdrop" aria-hidden="true">
        <img
          src={hoveredPoster.image}
          alt=""
          className="catalog-backdrop-img"
        />
        <div className="catalog-backdrop-overlay" />
      </div>

      <div className="container relative z-10">
        {/* Section Header with Editorial Presence */}
        <div className="section-header">
          <div className="section-badge">
            <Film size={14} />
            <span>Catálogo Cinematográfico em 4K</span>
          </div>
          <h2 className="section-title">
            Sempre existe algo para <br />
            <span className="text-gradient">entrar no clima.</span>
          </h2>
          <p className="section-subtitle">
            Uma experiência visual desenhada para você encontrar em segundos o que deseja assistir:
            grandes blockbusters de cinema, séries consagradas, esportes ao vivo e produções aclamadas.
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

        {/* Carousel Showcase Container with Edge Fade Masks (Section 10) */}
        <div className="catalog-carousel-container-cinematic">
          {/* Navigation Controls */}
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
            className="catalog-track-cinematic"
          >
            {filteredItems.map(item => (
              <div
                key={item.id}
                className="poster-card-cinematic"
                onMouseEnter={() => setHoveredPoster(item)}
                onClick={() => setSelectedPoster(item)}
              >
                <div className="poster-img-wrap-cinematic">
                  <img
                    src={item.image}
                    alt={`Pôster de ${item.title}`}
                    className="poster-img-cinematic"
                    loading="lazy"
                  />
                  {item.badge && (
                    <span className="poster-badge-top-cinematic">{item.badge}</span>
                  )}
                  <span className="poster-rating-badge-cinematic">
                    <Star size={12} className="fill-current text-amber-400" />
                    <span>{item.rating}</span>
                  </span>
                </div>

                <div className="poster-info-overlay-cinematic">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-cyan-400 font-semibold tracking-wide">
                      {item.categoryLabel}
                    </span>
                    <span className="poster-quality-tag-cinematic">{item.quality}</span>
                  </div>
                  <h3 className="poster-title-cinematic">{item.title}</h3>
                  <div className="poster-meta-cinematic">
                    <span>{item.year}</span>
                    {item.duration && <span>{item.duration}</span>}
                    <span className="text-cyan-300 text-[11px] font-semibold flex items-center gap-1 group-hover:text-pink-400">
                      <Play size={11} className="fill-current" /> Ver Detalhes
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
            onClick={() => setSelectedPoster(null)}
          >
            <div
              className="glass-panel max-w-xl w-full p-6 relative border border-white/20 shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex flex-col sm:flex-row gap-6">
                <img
                  src={selectedPoster.image}
                  alt={selectedPoster.title}
                  className="w-36 h-52 sm:w-44 sm:h-64 object-cover rounded-xl shadow-2xl flex-shrink-0 mx-auto sm:mx-0 border border-white/10"
                />
                <div className="flex flex-col justify-between flex-1">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-cyan-400 font-mono font-bold">
                        {selectedPoster.categoryLabel}
                      </span>
                      <span className="text-[10px] bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded font-mono font-bold">
                        {selectedPoster.quality}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl md:text-3xl font-bold text-white mt-1.5">
                      {selectedPoster.title}
                    </h3>

                    <div className="flex items-center gap-4 mt-2 text-sm text-slate-300 font-medium">
                      <span className="flex items-center gap-1 text-amber-400 font-bold">
                        <Star size={14} className="fill-current" /> {selectedPoster.rating}
                      </span>
                      <span>{selectedPoster.year}</span>
                      {selectedPoster.duration && <span>{selectedPoster.duration}</span>}
                    </div>

                    <p className="text-xs md:text-sm text-slate-300 mt-3 leading-relaxed">
                      {selectedPoster.description}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href="#planos"
                      className="btn btn-primary btn-sm"
                      onClick={() => setSelectedPoster(null)}
                    >
                      Assinar e Assistir Agora
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
