import React from 'react';
import { BoraRobot } from './BoraRobot';

export const TypingIndicator: React.FC = () => {
  return (
    <div className="flex items-end gap-2.5 my-3 w-full animate-fadeIn">
      {/* Bot Robot Avatar in typing state */}
      <div className="flex-shrink-0 mb-1">
        <BoraRobot size="sm" state="typing" />
      </div>

      {/* Bubble with 3 animated pulsing dots */}
      <div className="px-4 py-3 rounded-2xl rounded-bl-sm bg-[#0e1322] border border-white/[0.08] shadow-lg flex items-center gap-1.5">
        <span
          className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce"
          style={{ animationDelay: '0ms', animationDuration: '900ms' }}
        />
        <span
          className="w-2 h-2 rounded-full bg-purple-400 animate-bounce"
          style={{ animationDelay: '200ms', animationDuration: '900ms' }}
        />
        <span
          className="w-2 h-2 rounded-full bg-pink-400 animate-bounce"
          style={{ animationDelay: '400ms', animationDuration: '900ms' }}
        />
        <span className="text-[11px] text-slate-400 ml-2 font-medium hidden sm:inline">
          digitando...
        </span>
      </div>
    </div>
  );
};
