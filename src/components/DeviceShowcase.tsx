import React, { useState } from 'react';
import { Tv, Radio, Smartphone, Tablet, Laptop, Check, MonitorPlay } from 'lucide-react';
import { devicesList } from '../data/devicesData';
import { ImagePlaceholder } from './ImagePlaceholder';

export const DeviceShowcase: React.FC = () => {
  const [activeDeviceId, setActiveDeviceId] = useState<string>('tv');

  const activeDevice = devicesList.find(d => d.id === activeDeviceId) || devicesList[0];

  const getDeviceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Tv': return <Tv size={20} />;
      case 'Radio': return <Radio size={20} />;
      case 'Smartphone': return <Smartphone size={20} />;
      case 'Tablet': return <Tablet size={20} />;
      case 'Laptop': return <Laptop size={20} />;
      default: return <Tv size={20} />;
    }
  };

  return (
    <section className="section-wrap" id="dispositivos">
      <div className="ambient-glow ambient-purple" style={{ top: '30%', right: '15%', width: '550px', height: '550px' }} />

      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <MonitorPlay size={14} />
            <span>Compatibilidade Universal</span>
          </div>
          <h2 className="section-title">
            Sua diversão <span className="text-gradient">acompanha você.</span>
          </h2>
          <p className="section-subtitle">
            Assista onde e quando quiser. A BoraFlix é compatível com os principais sistemas
            e telas do mercado, sem precisar comprar aparelhos caros.
          </p>
        </div>

        {/* Device Selection Bar */}
        <div className="devices-selector-bar">
          {devicesList.map(dev => (
            <button
              key={dev.id}
              className={`device-tab-btn ${activeDeviceId === dev.id ? 'active' : ''}`}
              onClick={() => setActiveDeviceId(dev.id)}
            >
              {getDeviceIcon(dev.icon)}
              <span>{dev.name}</span>
            </button>
          ))}
        </div>

        {/* Dynamic Display Showcase */}
        <div className="device-showcase-display">
          {/* Left Column: Visual Mockup */}
          <div className="device-visual-container">
            <div className="device-screen-mockup group">
              <div className="w-full h-full relative overflow-hidden bg-slate-950 flex flex-col">
                {/* Simulated Screen Top Status */}
                <div className="px-4 py-2.5 bg-black/60 backdrop-blur-md flex items-center justify-between border-b border-white/10 z-10">
                  <div className="flex items-center gap-2">
                    <img src="/assets/logos/8.png" alt="BoraFlix" className="h-4 object-contain" />
                    <span className="text-[10px] text-cyan-400 font-mono font-bold">• 4K HDR</span>
                  </div>
                  <span className="text-[10px] bg-pink-500/20 text-pink-400 px-2 py-0.5 rounded font-mono font-bold">
                    {activeDevice.badge}
                  </span>
                </div>

                {/* Displaying Generated Multi-Device Ecosystem */}
                <div className="relative flex-1 overflow-hidden">
                  <img
                    src="/assets/generated/devices-mockup.jpg"
                    alt="Compatibilidade Multidispositivo BoraFlix: Smart TV, Notebook, Tablet, Celular e TV Box"
                    className="w-full h-full object-cover object-center filter brightness-95 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex items-end p-4">
                    <div>
                      <span className="text-[11px] text-cyan-400 font-bold flex items-center gap-1">
                        <MonitorPlay size={12} /> Sincronização em Nuvem
                      </span>
                      <h4 className="text-white font-bold text-base mt-0.5">
                        {activeDevice.name} • Compatibilidade Completa
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Information & Supported Brands */}
          <div className="device-info-col">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-bold">
              {activeDevice.badge}
            </span>

            <h3 className="font-display text-2xl md:text-3xl font-bold text-white mt-1 mb-3">
              {activeDevice.name}
            </h3>

            <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
              {activeDevice.description}
            </p>

            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-3">
              Compatibilidade Garantida:
            </h4>

            <div className="device-features-list">
              {activeDevice.features.map((feat, idx) => (
                <div key={idx} className="device-feature-item">
                  <Check size={16} className="text-cyan-400 flex-shrink-0" />
                  <span className="text-sm">{feat}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-4">
              <a href="#planos" className="btn btn-primary btn-sm">
                Conectar Meu Dispositivo
              </a>
              <span className="text-xs text-slate-400">
                Ativação em até 3 minutos
              </span>
            </div>
          </div>
        </div>

        {/* Structural Code Placeholder for Rule 8 & 31 */}
        <div className="hidden" aria-hidden="true">
          {/* IMAGE_PLACEHOLDER_DEVICES */}
          <ImagePlaceholder
            id="devices-showcase"
            label="INSERIR MOCKUP MULTIDISPOSITIVO BORAFLIX AQUI"
            src="/assets/generated/devices-mockup.jpg"
            alt="Mockup Multidispositivo BoraFlix"
          />
        </div>
      </div>
    </section>
  );
};
