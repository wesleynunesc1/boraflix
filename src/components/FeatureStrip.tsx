import React from 'react';
import { Tv, SlidersHorizontal, LayoutGrid, MessageSquareText } from 'lucide-react';

export const FeatureStrip: React.FC = () => {
  const features = [
    {
      icon: <Tv size={22} className="text-cyan-400" />,
      title: 'Diversos dispositivos',
      desc: 'Assista na TV, celular, tablet, computador ou TV Box.'
    },
    {
      icon: <SlidersHorizontal size={22} className="text-pink-400" />,
      title: 'Configuração simples',
      desc: 'Comece em menos de 5 minutos com tutorial passo a passo.'
    },
    {
      icon: <LayoutGrid size={22} className="text-purple-400" />,
      title: 'Interface intuitiva',
      desc: 'Navegação fluida e categorizada para encontrar tudo rápido.'
    },
    {
      icon: <MessageSquareText size={22} className="text-emerald-400" />,
      title: 'Suporte dedicado',
      desc: 'Ajuda humanizada e imediata via WhatsApp sempre disponível.'
    }
  ];

  return (
    <section className="feature-strip-unified" aria-label="Principais Diferenciais BoraFlix">
      <div className="container">
        <div className="feature-strip-bar">
          {features.map((item, index) => (
            <div key={index} className="feature-strip-col group">
              <div className="feature-strip-icon-halo">
                {item.icon}
              </div>
              <div className="feature-strip-text">
                <h3 className="feature-strip-title">{item.title}</h3>
                <p className="feature-strip-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
