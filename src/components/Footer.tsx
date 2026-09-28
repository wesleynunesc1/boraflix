import React from 'react';
import { ShieldCheck, Lock, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container">
        <div className="footer-top-grid">
          {/* Col 1: Brand & Presentation */}
          <div>
            <img
              src="/assets/logos/8.png"
              alt="BoraFlix Logo Oficial"
              className="footer-logo-img"
            />
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed mb-4">
              A nova era do entretenimento digital. Filmes, séries, esportes e canais ao vivo
              em uma plataforma moderna, fluida e com máxima estabilidade.
            </p>
            <div className="flex items-center gap-3 text-xs text-slate-400">
              <span className="flex items-center gap-1">
                <Lock size={12} className="text-cyan-400" /> Criptografia SSL 256-bit
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <ShieldCheck size={12} className="text-emerald-400" /> Servidores 99.9% Uptime
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="font-display text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">
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

          {/* Col 3: Legal & Corporate Editable Area (Rule 21) */}
          <div>
            <h4 className="font-display text-xs font-mono font-bold uppercase tracking-wider text-white mb-4">
              Informações Legais & Contato
            </h4>
            <ul className="footer-links-list mb-6">
              <li>
                <a href="#faq" className="footer-link">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#faq" className="footer-link">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer" className="footer-link">
                  Suporte Oficial no WhatsApp
                </a>
              </li>
            </ul>

            {/* Explicit Rule 21 Editable Area */}
            <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/10 text-xs text-slate-400">
              <span className="font-mono text-cyan-400 text-[11px] block font-bold mb-1">
                [DADOS EMPRESARIAIS / CNPJ / CONTATO]
              </span>
              <p className="text-[12px] leading-relaxed">
                BoraFlix Entretenimento Digital Ltda.<br />
                CNPJ: 00.000.000/0001-00<br />
                E-mail: contato@boraflix.com.br<br />
                Atendimento: Segunda a Domingo, 24 horas
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <p>© {new Date().getFullYear()} BoraFlix. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            Desenvolvido com tecnologia de ponta e paixão por cinema
            <Heart size={12} className="text-pink-500 fill-current inline ml-1" />
          </p>
        </div>
      </div>
    </footer>
  );
};
