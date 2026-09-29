import React from 'react';
import { ShieldCheck, Lock, Heart, MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="footer-top-grid">
          {/* Col 1: Brand & Presentation */}
          <div className="footer-brand-col">
            <img
              src="/assets/logos/8.png"
              alt="BoraFlix Logo Oficial"
              className="footer-logo-img"
            />
            <p className="footer-brand-desc">
              A nova era do entretenimento digital. Mais de 60.000 filmes, séries, esportes e canais ao vivo transmitidos com máxima estabilidade, qualidade 4K HDR e servidores dedicados anti-travamento.
            </p>
            <div className="footer-trust-badges">
              <div className="footer-trust-badge">
                <Lock size={14} className="text-cyan-400" />
                <span>Criptografia SSL 256-bit</span>
              </div>
              <div className="footer-trust-badge">
                <ShieldCheck size={14} className="text-emerald-400" />
                <span>Servidores 99.9% Uptime</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">
              Navegação
            </h4>
            <ul className="footer-links-list">
              <li><a href="#hero" className="footer-link">Início</a></li>
              <li><a href="#experiencia" className="footer-link">Catálogo & Experiência</a></li>
              <li><a href="#como-funciona" className="footer-link">Como Funciona</a></li>
              <li><a href="#beneficios" className="footer-link">Diferenciais & Tecnologia</a></li>
              <li><a href="#planos" className="footer-link">Planos & Assinaturas</a></li>
              <li><a href="#depoimentos" className="footer-link">Experiências Reais</a></li>
              <li><a href="#faq" className="footer-link">Perguntas Frequentes</a></li>
            </ul>
          </div>

          {/* Col 3: Official Support & Contact */}
          <div className="footer-contact-col">
            <h4 className="footer-col-title">
              Atendimento Oficial
            </h4>
            <p className="footer-contact-desc">
              Dúvidas sobre planos, suporte técnico ou ativação imediata de acesso? Fale agora mesmo com nossa equipe de suporte:
            </p>

            <a
              href="https://wa.me/558594480239"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-whatsapp-card group"
            >
              <div className="footer-wa-icon-box">
                <MessageCircle size={22} className="text-emerald-400" />
              </div>
              <div className="footer-wa-text">
                <span className="footer-wa-label">Suporte WhatsApp 24h</span>
                <span className="footer-wa-number">+55 85 9448-0239</span>
              </div>
              <ArrowRight size={16} className="text-emerald-400 transition-transform group-hover:translate-x-1" />
            </a>

            <div className="footer-security-note">
              <CheckCircle2 size={15} className="text-cyan-400 flex-shrink-0" />
              <span>Garantia de 7 dias com devolução 100% integral</span>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <p>© {new Date().getFullYear()} BoraFlix. Todos os direitos reservados.</p>
          <p className="footer-disclaimer">
            Plataforma digital de entretenimento desenvolvida para alta performance e transmissão familiar.
          </p>
          <div className="flex items-center gap-1 text-slate-400 text-xs">
            <span>Paixão por cinema e tecnologia</span>
            <Heart size={12} className="text-pink-500 fill-current ml-1" />
          </div>
        </div>
      </div>
    </footer>
  );
};
