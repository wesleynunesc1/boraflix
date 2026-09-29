import React from 'react';
import { MessageCircle, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer-institutional" role="contentinfo">
      <div className="container">
        <div className="footer-main-row">
          {/* Brand Info */}
          <div className="footer-brand-box">
            <a href="#" className="footer-logo-link" aria-label="BoraFlix Início">
              <img
                src="/assets/logos/boraflix-logo.png"
                alt="BoraFlix"
                className="footer-logo-img"
              />
            </a>
            <p className="footer-brand-text">
              Plataforma de entretenimento digital de alta performance desenvolvida para proporcionar a melhor experiência cinematográfica em qualquer tela.
            </p>
          </div>

          {/* Institutional Links: Planos, Como funciona, FAQ, Suporte, Termos de Uso, Política de Privacidade */}
          <div className="footer-nav-groups">
            <div className="footer-nav-col">
              <span className="footer-group-title font-mono">PLATAFORMA</span>
              <ul className="footer-links-list">
                <li><a href="#planos" className="footer-link">Planos</a></li>
                <li><a href="#como-funciona" className="footer-link">Como funciona</a></li>
                <li><a href="#experiencia" className="footer-link">Conteúdo</a></li>
                <li><a href="#beneficios" className="footer-link">Vantagens</a></li>
              </ul>
            </div>

            <div className="footer-nav-col">
              <span className="footer-group-title font-mono">SUPORTE & LEGAL</span>
              <ul className="footer-links-list">
                <li><a href="#faq" className="footer-link">FAQ</a></li>
                <li>
                  <a
                    href="https://wa.me/558594480239?text=Ol%C3%A1!%20Preciso%20de%20suporte%20BoraFlix."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                  >
                    Suporte WhatsApp
                  </a>
                </li>
                <li><a href="#termos" className="footer-link" onClick={(e) => { e.preventDefault(); alert('Termos de Uso: Serviço destinado ao entretenimento pessoal e familiar.'); }}>Termos de Uso</a></li>
                <li><a href="#privacidade" className="footer-link" onClick={(e) => { e.preventDefault(); alert('Política de Privacidade: Seus dados estão seguros e protegidos por criptografia SSL.'); }}>Política de Privacidade</a></li>
              </ul>
            </div>

            {/* Direct Official Contact */}
            <div className="footer-nav-col footer-contact-col">
              <span className="footer-group-title font-mono">ATENDIMENTO OFICIAL</span>
              <p className="footer-contact-text">
                Equipe humanizada à disposição para ativação ou assistência técnica:
              </p>
              <a
                href="https://wa.me/558594480239"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-support-btn"
              >
                <MessageCircle size={16} className="text-emerald-400" />
                <span>+55 85 9448-0239</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Line */}
        <div className="footer-copyright-bar">
          <p>© {new Date().getFullYear()} BoraFlix. Todos os direitos reservados.</p>
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <ShieldCheck size={14} className="text-cyan-500" />
            <span>Conexão Segura SSL 256-bit</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
