import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Play, Sparkles, TrendingUp, Info } from 'lucide-react';
import { catalogItems, catalogCategories } from '../data/catalogData';
import { PosterItem } from '../types';

export const PosterCarousel: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedPoster, setSelectedPoster] = useState<PosterItem | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const filteredItems = activeCategory === 'all'
    ? catalogItems
    : catalogItems.filter(item => item.category === activeCategory);

  const isRankingMode = activeCategory === 'all';

  const scroll = (direction: 'left' | 'right') => {
    if (trackRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      trackRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="section-wrap catalog-streaming-section" id="experiencia">
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="catalog-header-row">
          <div>
            <div className="section-badge mb-2.5">
              <TrendingUp size={13} className="text-cyan-400" />
              <span>CATÁLOGO ATUALIZADO DIARIAMENTE</span>
            </div>
            <h2 className="catalog-main-title font-display">
              Em alta na <span className="text-gradient">BoraFlix</span>
            </h2>
          </div>

          {/* Desktop Navigation Arrows */}
          <div className="catalog-nav-arrows hidden sm:flex">
            <button
              className="catalog-arrow-btn"
              onClick={() => scroll('left')}
              aria-label="Anterior"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              className="catalog-arrow-btn"
              onClick={() => scroll('right')}
              aria-label="Próximo"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Category Chips: Todos, Filmes, Séries, Animes, Esportes, Infantil */}
        <div className="catalog-chips-bar" role="tablist" aria-label="Categorias de Conteúdo">
          {catalogCategories.map(cat => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                className={`catalog-chip ${isActive ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Horizontal Carousel Track */}
        <div className="catalog-carousel-wrapper">
          <div
            ref={trackRef}
            className="catalog-snap-track"
          >
            {filteredItems.map((item, index) => {
              const rankNumber = index + 1;
              const isTopRanked = isRankingMode && rankNumber <= 10;

              return (
                <div
                  key={item.id}
                  className={`catalog-card-item group ${isTopRanked ? 'has-rank' : ''}`}
                  onClick={() => setSelectedPoster(item)}
                >
                  {/* Big Typographic Ranking Number (Netflix Style) */}
                  {isTopRanked && (
                    <div className="catalog-rank-numeral" aria-label={`Posição ${rankNumber}`}>
                      <span className="rank-stroke">{rankNumber}</span>
                      <span className="rank-fill">{rankNumber}</span>
                    </div>
                  )}

                  {/* Poster Shell */}
                  <div className="catalog-poster-shell">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="catalog-poster-img"
                      loading="lazy"
                    />

                    {/* Quality & Rating Tags */}
                    <div className="catalog-poster-tags">
                      <span className="poster-pill-quality">
                        {item.quality}
                      </span>
                      <span className="poster-pill-rating">
                        <Star size={10} className="fill-amber-400 text-amber-400" />
                        <span>{item.rating}</span>
                      </span>
                    </div>

                    {/* Hover Overlay with Action Button */}
                    <div className="catalog-poster-overlay">
                      <div className="poster-play-circle">
                        <Play size={16} className="fill-current ml-0.5" />
                      </div>
                      <span className="poster-click-hint">Clique para detalhes</span>
                    </div>
                  </div>

                  {/* Poster Title & Meta */}
                  <div className="catalog-card-info">
                    <h3 className="catalog-item-title" title={item.title}>
                      {item.title}
                    </h3>
                    <div className="catalog-item-meta">
                      <span>{item.year}</span>
                      <span className="meta-separator">•</span>
                      <span>{item.categoryLabel.split('•')[0].trim()}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Modal Quick View / Preview when card clicked */}
        {selectedPoster && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
            onClick={() => setSelectedPoster(null)}
          >
            <div
              className="glass-panel max-w-xl w-full p-6 relative border border-white/20 shadow-2xl rounded-2xl overflow-hidden"
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
                    {selectedPoster.badge && (
                      <div className="mb-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/40 text-pink-300">
                          <Sparkles size={12} className="text-pink-400" />
                          {selectedPoster.badge}
                        </span>
                      </div>
                    )}
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

                    <div className="flex items-center gap-3 mt-2 text-sm text-slate-300 font-medium">
                      <span className="flex items-center gap-1 text-amber-400 font-bold">
                        <Star size={14} className="fill-current" /> {selectedPoster.rating}
                      </span>
                      <span>•</span>
                      <span>{selectedPoster.year}</span>
                      {selectedPoster.duration && (
                        <>
                          <span>•</span>
                          <span>{selectedPoster.duration}</span>
                        </>
                      )}
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
