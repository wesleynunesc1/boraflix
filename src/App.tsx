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

// Code-split: BotPage is lazy-loaded so regular visitors download zero bot/checkout JS overhead
const BotPage = React.lazy(() =>
  import('./bot/BotPage').then(module => ({ default: module.BotPage }))
);

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
    return (
      <React.Suspense
        fallback={
          <div className="min-h-screen bg-[#03050a] flex items-center justify-center text-white">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
              <span className="text-sm font-medium text-slate-300">Carregando assistente...</span>
            </div>
          </div>
        }
      >
        <BotPage onBackToSite={navigateToSite} />
      </React.Suspense>
    );
  }

  return (
    <div className="relative min-h-screen bg-[var(--bg-canvas)] text-[var(--text-primary)] selection:bg-pink-500 selection:text-white">
      {/* Subtle Grain Overlay for Film Texture */}
      <div className="cinema-grain" aria-hidden="true" />

      {/* Main Navigation Header */}
      <Header />

      {/* Main Page Flow */}
      <main id="main-content">
        {/* 1. Hero Section (First Fold 100vh) */}
        <Hero />

        {/* 2. Feature Strip */}
        <FeatureStrip />

        {/* 3. Catalog Experience Carousel */}
        <PosterCarousel />

        {/* 4. Step Timeline (How It Works) */}
        <StepTimeline />

        {/* 5. Bento Grid Benefits */}
        <BentoBenefits />

        {/* 6. Value Comparison (Fragmented vs Unified) */}
        <ValueComparison />

        {/* 7. Pricing & Subscription Plans */}
        <Pricing />

        {/* 7. Social Proof & Real Experiences */}
        <TestimonialCarousel />

        {/* 8. FAQ Accordion */}
        <FAQ />

        {/* 9. Final High-Impact CTA */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
