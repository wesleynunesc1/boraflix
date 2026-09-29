import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeatureStrip } from './components/FeatureStrip';
import { PosterCarousel } from './components/PosterCarousel';
import { StepTimeline } from './components/StepTimeline';
import { BentoBenefits } from './components/BentoBenefits';
import { ValueComparison } from './components/ValueComparison';
import { Pricing } from './components/Pricing';
import { TestimonialCarousel } from './components/TestimonialCarousel';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { BotPage } from './bot/BotPage';

export const App: React.FC = () => {
  const [isBotRoute, setIsBotRoute] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    const pathname = window.location.pathname.toLowerCase();
    const hash = window.location.hash.toLowerCase();
    return pathname.startsWith('/bot') || hash.startsWith('#/bot') || hash === '#bot';
  });

  useEffect(() => {
    const handleRouteChange = () => {
      const pathname = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      setIsBotRoute(pathname.startsWith('/bot') || hash.startsWith('#/bot') || hash === '#bot');
    };

    window.addEventListener('popstate', handleRouteChange);
    window.addEventListener('hashchange', handleRouteChange);
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
      window.removeEventListener('hashchange', handleRouteChange);
    };
  }, []);

  const navigateToSite = () => {
    if (window.location.hash.startsWith('#/bot') || window.location.hash === '#bot') {
      window.location.hash = '';
    } else {
      window.history.pushState({}, '', '/');
    }
    setIsBotRoute(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isBotRoute) {
    return <BotPage onBackToSite={navigateToSite} />;
  }

  return (
    <div className="relative min-h-screen bg-[var(--bg-canvas)] text-[var(--text-primary)] selection:bg-pink-500 selection:text-white">
      {/* Subtle Grain Overlay for Film Texture */}
      <div className="cinema-grain" aria-hidden="true" />

      {/* Main Navigation Header */}
      <Header />

      {/* Main Page Flow */}
      <main id="main-content">
        {/* 1. Hero Cinematográfico */}
        <Hero />

        {/* 2. Em alta na BoraFlix (Catálogo & Categorias) */}
        <PosterCarousel />

        {/* 3. Do Primeiro Clique ao Play (Como funciona) */}
        <StepTimeline />

        {/* 4. Tudo Pensado Para Você Aproveitar Mais (Bento Grid) */}
        <BentoBenefits />

        {/* 5. Comparativo de Valor */}
        <ValueComparison />

        {/* 6. Planos de Assinatura */}
        <Pricing />

        {/* 7. Experiências Reais (Prova Social) */}
        <TestimonialCarousel />

        {/* 8. FAQ Accordion */}
        <FAQ />

        {/* 9. CTA Final */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
