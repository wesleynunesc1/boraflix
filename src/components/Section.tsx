import React from 'react';

interface SectionProps {
  id?: string;
  badge?: string;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  ambientGlowColor?: 'cyan' | 'magenta' | 'purple' | 'none';
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({
  id,
  badge,
  title,
  subtitle,
  className = '',
  containerClassName = '',
  ambientGlowColor = 'none',
  children
}) => {
  return (
    <section id={id} className={`section-wrap ${className}`}>
      {ambientGlowColor !== 'none' && (
        <div
          className={`ambient-glow ambient-${ambientGlowColor}`}
          style={{
            top: '20%',
            left: ambientGlowColor === 'cyan' ? '15%' : ambientGlowColor === 'magenta' ? '70%' : '50%',
            width: '450px',
            height: '450px',
            transform: 'translate(-50%, -20%)'
          }}
        />
      )}

      <div className={`container ${containerClassName}`}>
        {(badge || title || subtitle) && (
          <div className="section-header">
            {badge && <div className="section-badge">{badge}</div>}
            {title && <h2 className="section-title">{title}</h2>}
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
          </div>
        )}

        {children}
      </div>
    </section>
  );
};
