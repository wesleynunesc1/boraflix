import React from 'react';
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

export const App: React.FC = () => {
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
