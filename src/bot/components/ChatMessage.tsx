import React from 'react';
import { User } from 'lucide-react';
import { BoraRobot } from './BoraRobot';

interface ChatMessageProps {
  sender: 'bot' | 'user';
  text: string;
  timestamp?: string;
  isRecent?: boolean;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({
  sender,
  text,
  timestamp,
  isRecent = false,
}) => {
  const isBot = sender === 'bot';

  return (
    <div
      className={`flex items-end gap-2.5 my-3 w-full animate-fadeIn transition-all duration-300 ${
        isBot ? 'justify-start' : 'justify-end flex-row-reverse'
      }`}
    >
      {/* Avatar Anchor */}
      <div className="flex-shrink-0 mb-1">
        {isBot ? (
          <BoraRobot size="sm" state={isRecent ? 'speaking' : 'idle'} />
        ) : (
          <div className="w-8 h-8 rounded-2xl bg-gradient-to-tr from-cyan-600/30 to-blue-600/30 border border-cyan-400/40 text-cyan-200 flex items-center justify-center shadow-md shadow-cyan-500/10">
            <User size={15} />
          </div>
        )}
      </div>

      {/* Bubble Container with controlled width */}
      <div
        className={`max-w-[88%] sm:max-w-[72%] md:max-w-[65%] p-3.5 sm:p-4 rounded-2xl leading-relaxed text-sm sm:text-[14.5px] transition-all ${
          isBot
            ? 'bg-[#0e1322] border border-white/[0.08] text-slate-100 rounded-bl-sm shadow-[0_4px_20px_rgba(0,0,0,0.4)]'
            : 'bg-gradient-to-r from-pink-600 to-purple-600 text-white font-medium rounded-br-sm shadow-[0_4px_20px_rgba(255,0,140,0.25)]'
        }`}
      >
        <p className="tracking-wide whitespace-pre-line break-words leading-relaxed font-normal">
          {text}
        </p>

        {timestamp && (
          <span
            className={`block text-[10px] mt-1.5 font-mono ${
              isBot ? 'text-slate-500 text-left' : 'text-pink-200/80 text-right'
            }`}
          >
            {timestamp}
          </span>
        )}
      </div>
    </div>
  );
};
