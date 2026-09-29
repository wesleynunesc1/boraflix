import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, UserCheck } from 'lucide-react';
import { Button } from './Button';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
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
        {/* Brand Logo */}
        <a href="#" className="nav-brand" aria-label="BoraFlix Página Inicial">
          <img
            src="/assets/logos/boraflix-logo.png"
            alt="BoraFlix"
            className="nav-logo-img"
          />
        </a>

        {/* Desktop Navigation - Central Discrete Links */}
        <nav className="nav-links" aria-label="Navegação Principal">
          <a href="#experiencia" className="nav-link">
            Conteúdo
          </a>
          <a href="#beneficios" className="nav-link">
            Vantagens
          </a>
          <a href="#como-funciona" className="nav-link">
            Como funciona
          </a>
          <a href="#planos" className="nav-link">
            Planos
          </a>
          <a href="#faq" className="nav-link">
            FAQ
          </a>
        </nav>

        {/* Desktop Actions: Secondary "Já sou cliente" + Primary CTA "ASSINAR AGORA" */}
        <div className="nav-actions">
          <a
            href="https://wa.me/558594480239?text=Ol%C3%A1!%20J%C3%A1%20sou%20cliente%20BoraFlix%20e%20preciso%20de%20suporte."
            target="_blank"
            rel="noopener noreferrer"
            className="nav-client-btn hidden lg:inline-flex"
            title="Acesso exclusivo para quem já é cliente"
          >
            <UserCheck size={15} className="text-cyan-400" />
            <span>Já sou cliente</span>
          </a>

          <Button
            href="#planos"
            variant="primary"
            size="sm"
            className="nav-cta-desktop"
            icon={<ArrowRight size={15} />}
          >
            ASSINAR AGORA
          </Button>

          {/* Mobile Direct CTA */}
          <a
            href="#planos"
            className="mobile-quick-cta lg:hidden"
            onClick={closeMenu}
          >
            Assinar
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            className="mobile-toggle lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
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
            <span>Conteúdo & Catálogo</span>
            <ArrowRight size={18} className="text-cyan-400" />
          </a>
          <a
            href="#beneficios"
            className="mobile-nav-link"
            onClick={closeMenu}
          >
            <span>Vantagens & Qualidade</span>
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
            <span>Planos de Assinatura</span>
            <ArrowRight size={18} className="text-cyan-400" />
          </a>
          <a
            href="#depoimentos"
            className="mobile-nav-link"
            onClick={closeMenu}
          >
            <span>Experiências Reais</span>
            <ArrowRight size={18} className="text-cyan-400" />
          </a>
          <a
            href="#faq"
            className="mobile-nav-link"
            onClick={closeMenu}
          >
            <span>Perguntas Frequentes</span>
            <ArrowRight size={18} className="text-cyan-400" />
          </a>
        </nav>

        <div className="mobile-drawer-footer">
          <a
            href="https://wa.me/558594480239?text=Ol%C3%A1!%20J%C3%A1%20sou%20cliente%20BoraFlix%20e%20preciso%20de%20suporte."
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-drawer-client-link"
            onClick={closeMenu}
          >
            <UserCheck size={16} className="text-cyan-400" />
            <span>Já sou cliente • Acessar Suporte</span>
          </a>

          <Button
            href="#planos"
            variant="primary"
            size="lg"
            className="w-full justify-center text-sm py-3.5"
            onClick={closeMenu}
            icon={<ArrowRight size={18} />}
          >
            ASSINAR AGORA
          </Button>
        </div>
      </div>
    </header>
  );
};
