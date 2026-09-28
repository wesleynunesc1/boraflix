import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from './Button';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        {/* Brand Logo */}
        <a href="#" className="nav-brand" aria-label="BoraFlix Página Inicial">
          <img
            src="/assets/logos/8.png"
            alt="BoraFlix Logo Oficial"
            className="nav-logo-img"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="nav-links" aria-label="Navegação Principal">
          <a href="#experiencia" className="nav-link">
            Experiência
          </a>
          <a href="#como-funciona" className="nav-link">
            Como funciona
          </a>
          <a href="#beneficios" className="nav-link">
            Diferenciais
          </a>
          <a href="#planos" className="nav-link">
            Planos
          </a>
          <a href="#faq" className="nav-link">
            FAQ
          </a>
        </nav>

        {/* Desktop Actions */}
        <div className="nav-actions">
          <div className="status-pill" title="Servidores Online">
            <span className="pulse-dot" />
            <span>Sinal 4K Online</span>
          </div>

          <Button
            href="#planos"
            variant="primary"
            size="sm"
            icon={<ArrowRight size={16} />}
          >
            VER PLANOS
          </Button>

          {/* Mobile Hamburger Toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <img
            src="/assets/logos/8.png"
            alt="BoraFlix Logo"
            className="h-8 object-contain"
          />
          <button
            onClick={closeMenu}
            className="p-2 text-slate-400 hover:text-white"
            aria-label="Fechar menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex flex-col gap-2 mt-4" aria-label="Menu Mobile">
          <a
            href="#experiencia"
            className="mobile-nav-link"
            onClick={closeMenu}
          >
            <span>Experiência</span>
            <ArrowRight size={18} className="text-cyan-400" />
          </a>
          <a
            href="#como-funciona"
            className="mobile-nav-link"
            onClick={closeMenu}
          >
            <span>Como funciona</span>
            <ArrowRight size={18} className="text-cyan-400" />
          </a>
          <a
            href="#beneficios"
            className="mobile-nav-link"
            onClick={closeMenu}
          >
            <span>Diferenciais</span>
            <ArrowRight size={18} className="text-cyan-400" />
          </a>
          <a
            href="#planos"
            className="mobile-nav-link"
            onClick={closeMenu}
          >
            <span>Planos & Ofertas</span>
            <ArrowRight size={18} className="text-cyan-400" />
          </a>
          <a
            href="#faq"
            className="mobile-nav-link"
            onClick={closeMenu}
          >
            <span>Dúvidas Frequentes</span>
            <ArrowRight size={18} className="text-cyan-400" />
          </a>
        </nav>

        <div className="mt-auto pt-6 flex flex-col gap-3">
          <div className="flex items-center gap-2 text-xs text-cyan-400 justify-center">
            <Sparkles size={14} />
            <span>Mais de 60.000 conteúdos liberados</span>
          </div>
          <Button
            href="#planos"
            variant="primary"
            size="lg"
            className="w-full justify-center"
            onClick={closeMenu}
            icon={<ArrowRight size={18} />}
          >
            CONHECER PLANOS
          </Button>
        </div>
      </div>
    </header>
  );
};
