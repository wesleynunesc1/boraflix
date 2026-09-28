import React from 'react';
import { Image as ImageIcon, Sparkles } from 'lucide-react';

interface ImagePlaceholderProps {
  id: string;
  label: string;
  src?: string;
  alt?: string;
  aspectRatio?: string;
  className?: string;
  children?: React.ReactNode;
}

/**
 * ImagePlaceholder Component (Rule 31)
 * Renders an actual image if `src` is supplied, or an elegant, high-tech,
 * responsive placeholder container identifying the asset if absent.
 */
export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  id,
  label,
  src,
  alt,
  aspectRatio = '16/9',
  className = '',
  children
}) => {
  if (src) {
    return (
      <div
        id={id}
        data-placeholder-id={id}
        className={`relative overflow-hidden ${className}`}
        style={{ aspectRatio }}
      >
        <img
          src={src}
          alt={alt || label}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {children}
      </div>
    );
  }

  return (
    <div
      id={id}
      data-placeholder-id={id}
      className={`image-placeholder-box ${className}`}
      style={{ aspectRatio }}
    >
      <div className="flex items-center gap-2 text-cyan-400 mb-1">
        <ImageIcon size={28} className="text-cyan-400 opacity-90" />
        <Sparkles size={16} className="text-pink-500 animate-pulse" />
      </div>
      <span className="placeholder-tag font-mono">[{id.toUpperCase()}]</span>
      <p className="text-xs uppercase tracking-wider text-slate-300 font-semibold max-w-xs leading-relaxed">
        {label}
      </p>
      <span className="text-[11px] text-slate-400">
        Resolução recomendada adaptativa • Substitua via src
      </span>
      {children}
    </div>
  );
};
