import React, { useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, Sparkles, Tv, ShieldCheck } from 'lucide-react';
import { ImagePlaceholder } from './ImagePlaceholder';

export const VideoDemo: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  return (
    <section className="section-wrap" id="demonstracao">
      <div className="ambient-glow ambient-magenta" style={{ top: '25%', left: '50%', width: '650px', height: '650px', transform: 'translateX(-50%)' }} />

      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Tv size={14} />
            <span>Interface Imersiva</span>
          </div>
          <h2 className="section-title">
            Conheça a experiência <span className="text-gradient">BoraFlix.</span>
          </h2>
          <p className="section-subtitle">
            Um player desenvolvido do zero para entregar fluidez cinematográfica,
            tempo de resposta instantâneo e controles elegantes que não atrapalham a sua sessão.
          </p>
        </div>

        {/* Custom Cinematic Player Frame */}
        <div className="player-demo-wrap">
          {/* Top Player Header */}
          <div className="player-header-bar">
            <div className="flex items-center gap-3">
              <img src="/assets/logos/8.png" alt="BoraFlix Logo" className="h-5 object-contain" />
              <div className="h-4 w-px bg-white/20" />
              <span className="text-xs text-slate-300 font-medium hidden sm:inline">
                Reproduzindo em 4K HDR • 60 FPS
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono bg-cyan-500/20 text-cyan-300 px-2.5 py-0.5 rounded border border-cyan-500/30 font-bold">
                BITRATE: 28.4 MBPS
              </span>
              <span className="text-[10px] font-mono bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded border border-purple-500/30 font-bold hidden sm:inline">
                DOLBY ATMOS 5.1
              </span>
            </div>
          </div>

          {/* Main Visual Screen with Generated 4K Cinema UI */}
          <div className="player-live-screen group">
            <img
              src="/assets/generated/player-demo.jpg"
              alt="Interface do Player 4K BoraFlix em Sala de Cinema"
              className="player-video-bg"
            />

            {/* Center Big Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors">
              <button
                className="w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-500 p-[2px] shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group/btn"
                onClick={() => setIsPlaying(!isPlaying)}
                aria-label={isPlaying ? 'Pausar demonstração' : 'Reproduzir demonstração'}
              >
                <div className="w-full h-full rounded-full bg-black/80 backdrop-blur-md flex items-center justify-center text-white group-hover/btn:bg-black/60 transition-colors">
                  {isPlaying ? (
                    <Pause size={30} className="text-cyan-400" />
                  ) : (
                    <Play size={30} className="fill-current text-white ml-1 text-cyan-400" />
                  )}
                </div>
              </button>
            </div>

            {/* Player Controls Bar */}
            <div className="player-controls-bar">
              {/* Progress Slider */}
              <div className="player-progress-track">
                <div className="player-progress-fill" style={{ width: '42%' }} />
              </div>

              {/* Bottom Controls Row */}
              <div className="flex items-center justify-between text-xs text-slate-300">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    {isPlaying ? <Pause size={18} /> : <Play size={18} className="fill-current" />}
                  </button>

                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                  </button>

                  <span className="font-mono text-slate-400 text-[11px]">
                    01:14:28 / 02:36:10
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="bg-black/60 px-2 py-0.5 rounded border border-white/10 text-[11px] font-mono">
                    Áudio: PT-BR (Original 5.1)
                  </span>
                  <span className="bg-black/60 px-2 py-0.5 rounded border border-white/10 text-[11px] font-mono hidden sm:inline">
                    Legenda: Desativada
                  </span>
                  <button className="hover:text-cyan-400 transition-colors" aria-label="Tela cheia">
                    <Maximize2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Structural Placeholder for Rule 8 & 31 */}
        <div className="hidden" aria-hidden="true">
          {/* IMAGE_PLACEHOLDER_INTERFACE */}
          <ImagePlaceholder
            id="demo-player"
            label="INSERIR VÍDEO DEMONSTRATIVO BORAFLIX AQUI"
            src="/assets/generated/player-demo.jpg"
            alt="Vídeo Demonstrativo Player BoraFlix"
          />
        </div>

        {/* Guarantee Banner below video */}
        <div className="mt-8 max-w-xl mx-auto flex items-center justify-center gap-3 text-xs md:text-sm text-slate-400 bg-white/[0.03] border border-white/10 py-3 px-6 rounded-full">
          <ShieldCheck size={18} className="text-cyan-400 flex-shrink-0" />
          <span>Qualidade de transmissão garantida sem perda de frames em conexões padrão.</span>
        </div>
      </div>
    </section>
  );
};
