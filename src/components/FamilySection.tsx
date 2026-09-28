import React from 'react';
import { Users, Lock, Heart, Shield, CheckCircle2 } from 'lucide-react';

export const FamilySection: React.FC = () => {
  return (
    <section className="section-wrap" id="familia">
      <div className="ambient-glow ambient-cyan" style={{ top: '20%', left: '10%', width: '500px', height: '500px' }} />

      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Users size={14} />
            <span>Entretenimento Seguro</span>
          </div>
          <h2 className="section-title">
            Experiências pensadas para <span className="text-gradient">toda a família.</span>
          </h2>
          <p className="section-subtitle">
            Ambiente personalizado e seguro onde adultos e crianças encontram o que amam
            com proteção de acesso e máxima comodidade.
          </p>
        </div>

        {/* Asymmetrical Editorial Composition */}
        <div className="family-editorial-grid">
          {/* Large Left Card: Kids & Family Adventure */}
          <div className="family-card-large group">
            <div className="relative z-10 max-w-md">
              <span className="family-tag-pill">
                <Heart size={14} />
                <span>Espaço Kids & Animações</span>
              </span>

              <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                O universo lúdico que as crianças adoram, com segurança total.
              </h3>

              <p className="text-sm md:text-base text-slate-300 mb-6 leading-relaxed">
                Catálogo completo de desenhos animados, filmes infantis e lançamentos Disney/Pixar em um ambiente
                visual intuitivo que os pequenos conseguem navegar sozinhos e com tranquilidade para os pais.
              </p>

              <div className="flex flex-col gap-2.5 mb-8">
                <div className="flex items-center gap-2 text-sm text-slate-200">
                  <CheckCircle2 size={16} className="text-amber-400 flex-shrink-0" />
                  <span>Filmes dublados em alta definição e sem anúncios</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-200">
                  <CheckCircle2 size={16} className="text-amber-400 flex-shrink-0" />
                  <span>Animações clássicas e os maiores sucessos atuais</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-200">
                  <CheckCircle2 size={16} className="text-amber-400 flex-shrink-0" />
                  <span>Interface simplificada com cores amigáveis</span>
                </div>
              </div>
            </div>

            {/* Poster Cutout / Composition using image2-1.webp (Mufasa) */}
            <div className="relative mt-4 md:mt-0 flex justify-end">
              <div className="relative w-full max-w-[280px] rounded-xl overflow-hidden shadow-2xl border border-amber-500/30 transform group-hover:scale-105 transition-transform duration-500">
                <img
                  src="/assets/capas/image2-1.webp"
                  alt="Mufasa: O Rei Leão em 4K"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                  <span className="text-xs font-bold text-amber-300 bg-black/60 px-2 py-1 rounded backdrop-blur-sm">
                    Destaque Família • 4K
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Stack: Profiles & Parental Control */}
          <div className="family-right-stack">
            {/* Card 1: Multiple Profiles */}
            <div className="family-card-small group">
              <div className="flex items-center justify-between">
                <div className="family-icon-box">
                  <Heart size={22} className="text-pink-500" />
                </div>
                <span className="text-xs font-mono text-pink-400 font-bold uppercase tracking-wider">
                  4 Telas Simultâneas
                </span>
              </div>

              <h4 className="font-display text-xl font-bold text-white">
                Perfis independentes para cada membro
              </h4>

              <p className="text-sm text-slate-400 leading-relaxed">
                Cada pessoa da casa tem sua própria lista de favoritos, histórico de exibição
                e recomendações personalizadas sem misturar o que cada um assiste.
              </p>
            </div>

            {/* Card 2: Parental Control & PIN Safety */}
            <div className="family-card-small group">
              <div className="flex items-center justify-between">
                <div className="family-icon-box">
                  <Lock size={22} className="text-cyan-400" />
                </div>
                <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
                  Bloqueio por Senha
                </span>
              </div>

              <h4 className="font-display text-xl font-bold text-white">
                Controle Parental e Bloqueio com PIN
              </h4>

              <p className="text-sm text-slate-400 leading-relaxed">
                Proteja os canais adultos (+18) e conteúdos maduros com senha PIN de segurança.
                As crianças só acessam o que você autorizar, garantindo tranquilidade absoluta.
              </p>

              <div className="mt-2 pt-3 border-t border-white/5 flex items-center gap-2 text-xs text-slate-300">
                <Shield size={14} className="text-cyan-400" />
                <span>Configuração rápida pelo próprio aplicativo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
