import React from 'react';
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
      className={`flex items-end gap-2 my-2 w-full animate-fadeIn transition-all duration-200 ${
        isBot ? 'justify-start' : 'justify-end'
      }`}
    >
      {/* Bot Robot Avatar (only on bot messages) */}
      {isBot && (
        <div className="flex-shrink-0 mb-0.5">
          <BoraRobot size="sm" state={isRecent ? 'speaking' : 'idle'} />
        </div>
      )}

      {/* WhatsApp Speech Bubble */}
      <div
        className={`relative max-w-[88%] sm:max-w-[76%] md:max-w-[68%] px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-2xl text-[14.5px] sm:text-[15px] leading-relaxed shadow-[0_2px_8px_rgba(0,0,0,0.35)] ${
          isBot
            ? 'bg-[#182334] text-[#f0f2f5] rounded-tl-sm border border-white/[0.06]'
            : 'bg-[#1a3848] text-white rounded-tr-sm border border-cyan-500/20 shadow-cyan-900/10'
        }`}
      >
        {/* Message Text */}
        <p className="whitespace-pre-line break-words leading-relaxed font-normal tracking-normal select-text">
          {text}
        </p>

        {/* WhatsApp-Style Metadata: Time & Double Checkmark */}
        <div className="flex items-center justify-end gap-1 mt-1 select-none">
          {timestamp && (
            <span
              className={`text-[10.5px] font-sans ${
                isBot ? 'text-[#8696a0]' : 'text-cyan-200/70'
              }`}
            >
              {timestamp}
            </span>
          )}

          {/* User Double Blue/Cyan Checkmarks */}
          {!isBot && (
            <svg
              viewBox="0 0 16 15"
              width="15"
              height="14"
              className="text-[#00cfff] fill-current inline-block flex-shrink-0 ml-0.5"
              aria-label="Mensagem lida"
            >
              <path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};
