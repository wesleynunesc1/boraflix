import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Film } from 'lucide-react';
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

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        {/* Brand Logo - Transparent BoraFlix */}
        <a href="#" className="nav-brand" aria-label="BoraFlix Página Inicial">
          <img
            src="/assets/logos/boraflix-logo.png"
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
            className="nav-cta-desktop"
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

      {/* Mobile Nav Drawer */}
      <div
        className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="mobile-drawer-top">
          <img
            src="/assets/logos/boraflix-logo.png"
            alt="BoraFlix Logo"
            className="mobile-drawer-logo"
          />
          <button
            onClick={closeMenu}
            className="mobile-drawer-close"
            aria-label="Fechar menu"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="mobile-drawer-links" aria-label="Menu Mobile">
          <a
            href="#experiencia"
            className="mobile-nav-link"
            onClick={closeMenu}
          >
            <span>Catálogo & Experiência</span>
            <ArrowRight size={18} className="text-cyan-400" />
          </a>
          <a
            href="#como-funciona"
            className="mobile-nav-link"
            onClick={closeMenu}
          >
            <span>Como Funciona</span>
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
            href="#comparativo"
            className="mobile-nav-link"
            onClick={closeMenu}
          >
            <span>Comparativo de Valor</span>
            <ArrowRight size={18} className="text-cyan-400" />
          </a>
          <a
            href="#planos"
            className="mobile-nav-link"
            onClick={closeMenu}
          >
            <span>Planos & Assinaturas</span>
            <ArrowRight size={18} className="text-cyan-400" />
          </a>
          <a
            href="#depoimentos"
            className="mobile-nav-link"
            onClick={closeMenu}
          >
            <span>Depoimentos Reais</span>
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

        <div className="mobile-drawer-footer">
          <div className="mobile-drawer-perk">
            <Film size={14} className="text-cyan-400" />
            <span>Mais de 60.000 conteúdos liberados</span>
          </div>
          <Button
            href="#planos"
            variant="primary"
            size="lg"
            className="w-full justify-center text-sm py-3.5"
            onClick={closeMenu}
            icon={<ArrowRight size={18} />}
          >
            VER PLANOS E ASSINAR
          </Button>
        </div>
      </div>
    </header>
  );
};
