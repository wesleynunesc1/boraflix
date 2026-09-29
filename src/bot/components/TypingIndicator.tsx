import React from 'react';

export const TypingIndicator: React.FC = () => {
  return (
    <div className="flex items-center gap-3 my-2 animate-fadeIn">
      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-600/30 to-pink-500/30 border border-pink-500/30 flex items-center justify-center p-1 flex-shrink-0">
        <img
          src="/assets/logos/boraflix-icon.png"
          alt="BoraFlix Digitador"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="bg-[#121829] border border-white/10 px-4 py-2.5 rounded-2xl rounded-tl-sm flex items-center gap-1.5 shadow-lg">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: '0ms' }} />
        <span className="w-2 h-2 rounded-full bg-pink-400 animate-bounce" style={{ animationDelay: '150ms' }} />
        <span className="w-2 h-2 rounded-full bg-purple-400 animate-bounce" style={{ animationDelay: '300ms' }} />
      </div>
    </div>
  );
};
