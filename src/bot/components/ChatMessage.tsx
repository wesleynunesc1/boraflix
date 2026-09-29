import React from 'react';
import { User } from 'lucide-react';

interface ChatMessageProps {
  sender: 'bot' | 'user';
  text: string;
  timestamp?: string;
  avatarSrc?: string;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({
  sender,
  text,
  timestamp,
  avatarSrc = '/assets/logos/boraflix-icon.png',
}) => {
  const isBot = sender === 'bot';

  return (
    <div
      className={`flex items-start gap-3 my-3 w-full animate-fadeIn transition-all duration-300 ${
        isBot ? 'justify-start' : 'justify-end flex-row-reverse'
      }`}
    >
      {/* Avatar */}
      <div className="flex-shrink-0 mt-0.5">
        {isBot ? (
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-purple-600/30 to-pink-500/30 border border-pink-500/30 flex items-center justify-center p-1 shadow-lg shadow-pink-500/10">
            <img src={avatarSrc} alt="BoraFlix Bot" className="w-full h-full object-contain" />
          </div>
        ) : (
          <div className="w-9 h-9 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 flex items-center justify-center shadow-lg">
            <User size={18} />
          </div>
        )}
      </div>

      {/* Bubble Content */}
      <div
        className={`max-w-[85%] sm:max-w-md p-3.5 sm:p-4 rounded-2xl shadow-xl leading-relaxed text-sm sm:text-[15px] whitespace-pre-line ${
          isBot
            ? 'bg-gradient-to-b from-[#141a2e] to-[#0c1020] text-slate-100 border border-white/10 rounded-tl-sm'
            : 'bg-gradient-to-r from-pink-600 to-rose-600 text-white font-medium rounded-tr-sm shadow-pink-500/20'
        }`}
      >
        <p className="tracking-wide break-words">{text}</p>
        {timestamp && (
          <span
            className={`block text-[10px] mt-1.5 font-mono ${
              isBot ? 'text-slate-400 text-left' : 'text-pink-200 text-right'
            }`}
          >
            {timestamp}
          </span>
        )}
      </div>
    </div>
  );
};
