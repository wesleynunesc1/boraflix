import React from 'react';
import { ArrowRight, Sparkles, Tv, ShieldCheck } from 'lucide-react';
import { Button } from './Button';
import { ImagePlaceholder } from './ImagePlaceholder';

export const FinalCTA: React.FC = () => {
  return (
    <section className="final-cta-section" id="comece-agora">
      {/* Subtle Oversized 3D BoraFlix symbol in background with soft ambient glow */}
      <img
        src="/assets/logos/6.png"
        alt="BoraFlix Símbolo 3D Fundo"
        className="final-cta-bg-symbol"
      />

      <div className="container">
        <div className="final-cta-content">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider mb-6">
            <Sparkles size={14} className="text-pink-400" />
            <span>Acesso Imediato sem Burocracia</span>
          </div>

          <h2 className="final-cta-title">
            A próxima sessão <br />
            <span className="text-gradient">começa aqui.</span>
          </h2>

          <p className="text-slate-300 text-base md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            Mais de 60.000 filmes, séries e canais ao vivo esperando por você.
            Transforme sua TV e todos os seus aparelhos em uma central definitiva de entretenimento.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button
              href="#planos"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto text-base px-9 py-4"
              icon={<ArrowRight size={20} />}
            >
              QUERO CONHECER A BORAFLIX
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <Tv size={15} className="text-cyan-400" /> Compatível com Smart TV, Celular e PC
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={15} className="text-cyan-400" /> Garantia incondicional de satisfação
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
