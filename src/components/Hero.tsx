import React from 'react';
import { Play } from 'lucide-react';

export const Hero: React.FC = () => {
  // Optimized high-impact covers from CAPAS for the backdrop collage
  const backdropPosters = [
    '/assets/capas/Filme-02-1.webp', // Oppenheimer
    '/assets/capas/Filme-01-1.webp', // Top Gun Maverick
    '/assets/capas/Serie-09-1.webp', // House of the Dragon
    '/assets/capas/Filme-10-1.webp', // Duna 2
    '/assets/capas/Serie-08-1.webp', // The Boys
    '/assets/capas/Serie-11-1.webp', // The Last of Us
    '/assets/capas/Filme-06-1.webp', // Avatar
    '/assets/capas/Serie-07-1.webp', // Stranger Things
  ];

  return (
    <section className="hero-cinematic-section" id="hero">
      {/* Immersive Poster Collage Backdrop */}
      <div className="hero-backdrop-stage" aria-hidden="true">
        <div className="hero-poster-mosaic">
          {backdropPosters.map((posterSrc, index) => (
            <div key={index} className={`hero-mosaic-tile tile-${index % 8}`}>
              <img
                src={posterSrc}
                alt=""
                className="hero-mosaic-img"
                width={220}
                height={330}
                loading={index < 2 ? 'eager' : 'lazy'}
                decoding="async"
              />
            </div>
          ))}
        </div>

        {/* Master Cinematographic Overlay System */}
        <div className="hero-overlay-vignette" />
        <div className="hero-overlay-lateral" />
        <div className="hero-overlay-bottom" />
        <div className="hero-overlay-top" />

        {/* Subtle Brand Lighting Ambient Halos */}
        <div className="hero-ambient-spot spot-cyan" />
        <div className="hero-ambient-spot spot-magenta" />
        <div className="hero-ambient-spot spot-purple" />
      </div>

      {/* Main Foreground Content */}
      <div className="container hero-container relative z-10">
        <div className="hero-content-column">
          {/* Badge: FILMES • SÉRIES • ANIMES • ESPORTES */}
          <div className="hero-badge-wrap">
            <div className="hero-category-badge">
              <span className="hero-badge-dot" />
              <span className="hero-badge-text">
                FILMES • SÉRIES • ANIMES • ESPORTES
              </span>
            </div>
          </div>

          {/* Headline with gradient strictly on "ENTRETENIMENTO." */}
          <h1 className="hero-main-title">
            TODO O SEU <br />
            <span className="hero-brand-highlight">ENTRETENIMENTO.</span> <br />
            EM UM SÓ LUGAR.
          </h1>

          {/* Subheadline */}
          <p className="hero-main-subtitle">
            Milhares de opções para você e sua família.
            Assista onde quiser, do seu jeito.
          </p>

          {/* Action CTAs */}
          <div className="hero-actions-group">
            <a
              href="#planos"
              className="hero-btn-primary"
            >
              <Play size={18} className="fill-current" />
              <span>COMEÇAR AGORA</span>
            </a>

            <a
              href="#planos"
              className="hero-btn-secondary"
            >
              <span>VER PLANOS</span>
            </a>
          </div>

          {/* Trust Marks Checklist */}
          <div className="hero-trust-list">
            <div className="hero-trust-item">
              <span className="hero-trust-check">✓</span>
              <span>Acesso imediato</span>
            </div>
            <div className="hero-trust-item">
              <span className="hero-trust-check">✓</span>
              <span>Assista em vários dispositivos</span>
            </div>
            <div className="hero-trust-item">
              <span className="hero-trust-check">✓</span>
              <span>Suporte quando precisar</span>
            </div>
          </div>
        </div>
      </div>

      {/* Cinematic Transition to Content */}
      <div className="hero-content-transition" aria-hidden="true">
        <div className="transition-glow-line" />
        <div className="transition-fade-mask" />
      </div>
    </section>
  );
};
