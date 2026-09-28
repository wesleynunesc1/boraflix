import React from 'react';
import { Tv, Sparkles, LayoutGrid, MessageSquareText } from 'lucide-react';

export const FeatureStrip: React.FC = () => {
  const features = [
    {
      icon: <Tv size={22} />,
      title: 'Diversos dispositivos',
      desc: 'Assista da forma que preferir na TV, celular, tablet, computador ou TV Box.'
    },
    {
      icon: <Sparkles size={22} />,
      title: 'Configuração simples',
      desc: 'Comece em menos de 5 minutos com tutorial passo a passo sem complicação.'
    },
    {
      icon: <LayoutGrid size={22} />,
      title: 'Interface intuitiva',
      desc: 'Navegação fluida, veloz e categorizada para encontrar o que quiser em segundos.'
    },
    {
      icon: <MessageSquareText size={22} />,
      title: 'Suporte dedicado',
      desc: 'Ajuda humanizada e imediata via WhatsApp sempre que você precisar.'
    }
  ];

  return (
    <section className="feature-strip-section" aria-label="Principais Diferenciais">
      <div className="container">
        <div className="feature-strip-grid">
          {features.map((item, index) => (
            <div key={index} className="feature-strip-card group">
              <div className="feature-strip-icon-wrap">
                {item.icon}
              </div>
              <div>
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
