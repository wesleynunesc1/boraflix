import React from 'react';

export type RobotState = 'idle' | 'typing' | 'speaking' | 'celebrating' | 'waiting';

interface BoraRobotProps {
  state?: RobotState;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  className?: string;
}

/**
 * BoraRobot - Official digital assistant character of BoraFlix.
 * Features:
 * - Rounded digital screen head with glossy reflection and BoraFlix gradient frame.
 * - Dynamic animated digital LED eyes (blinking, typing pulse, happy arc eyes).
 * - Subtle breathing / float micro-interactions.
 * - Brand accents in Cyan (#00CFFF), Purple (#6C2BFF), and Magenta (#FF008C).
 */
export const BoraRobot: React.FC<BoraRobotProps> = ({
  state = 'idle',
  size = 'md',
  className = '',
}) => {
  const sizeMap = {
    sm: { width: 34, height: 34, eyeW: 4, eyeH: 7 },
    md: { width: 44, height: 44, eyeW: 5, eyeH: 9 },
    lg: { width: 72, height: 72, eyeW: 8, eyeH: 14 },
    hero: { width: 110, height: 110, eyeW: 12, eyeH: 20 },
  };

  const currentSize = sizeMap[size];

  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={{ width: currentSize.width, height: currentSize.height }}
      aria-label="Assistente BoraFlix"
    >
      {/* Ambient Halo behind head */}
      <div
        className={`absolute inset-0 rounded-full transition-all duration-500 pointer-events-none ${
          state === 'celebrating'
            ? 'bg-emerald-500/35 blur-xl scale-125'
            : state === 'typing'
            ? 'bg-cyan-500/30 blur-lg scale-110'
            : 'bg-gradient-to-tr from-cyan-500/25 via-purple-600/20 to-pink-500/25 blur-md'
        }`}
      />

      {/* Robot Head SVG */}
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-full relative z-10 transition-transform duration-300 ${
          state === 'celebrating' ? 'animate-bounce' : state === 'idle' ? 'animate-float-slow' : ''
        }`}
      >
        <defs>
          {/* Outer Ring Brand Gradient */}
          <linearGradient id="boraRobotRing" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00CFFF" />
            <stop offset="50%" stopColor="#6C2BFF" />
            <stop offset="100%" stopColor="#FF008C" />
          </linearGradient>

          {/* Success Ring Gradient */}
          <linearGradient id="boraRobotSuccessRing" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#00CFFF" />
          </linearGradient>

          {/* Screen Inner Gradient */}
          <linearGradient id="boraRobotScreen" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0A0E1A" />
            <stop offset="100%" stopColor="#030509" />
          </linearGradient>

          {/* Gloss Sheen */}
          <linearGradient id="boraRobotGloss" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.0" />
          </linearGradient>

          {/* Eye Cyan Glow */}
          <radialGradient id="eyeGlowCyan" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#E0F7FF" />
            <stop offset="70%" stopColor="#00CFFF" />
            <stop offset="100%" stopColor="#008CFF" />
          </radialGradient>
        </defs>

        {/* Small Antenna / Signal Node */}
        <line
          x1="50"
          y1="8"
          x2="50"
          y2="18"
          stroke={state === 'celebrating' ? '#10B981' : 'url(#boraRobotRing)'}
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <circle
          cx="50"
          cy="7"
          r="4.5"
          fill={state === 'celebrating' ? '#10B981' : '#00CFFF'}
          className={state === 'typing' ? 'animate-ping' : ''}
        />
        <circle cx="50" cy="7" r="2.5" fill="#FFFFFF" />

        {/* Outer Head Shell (Rounded Squircle) */}
        <rect
          x="12"
          y="18"
          width="76"
          height="70"
          rx="24"
          fill="url(#boraRobotScreen)"
          stroke={state === 'celebrating' ? 'url(#boraRobotSuccessRing)' : 'url(#boraRobotRing)'}
          strokeWidth="3"
        />

        {/* Ear Pods / Audio Nodes on sides */}
        <rect x="6" y="44" width="7" height="18" rx="3.5" fill="#6C2BFF" opacity="0.85" />
        <rect x="87" y="44" width="7" height="18" rx="3.5" fill="#FF008C" opacity="0.85" />

        {/* Inner Digital Face Visor */}
        <rect
          x="18"
          y="24"
          width="64"
          height="58"
          rx="18"
          fill="#020306"
          stroke="rgba(255, 255, 255, 0.08)"
          strokeWidth="1"
        />

        {/* Gloss highlight on top curve of the visor */}
        <path
          d="M 22 34 Q 50 25 78 34"
          stroke="url(#boraRobotGloss)"
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* EYES RENDERING ACCORDING TO STATE */}
        {state === 'celebrating' ? (
          /* Happy Arc Eyes ^_^ */
          <g>
            <path
              d="M 33 53 Q 40 44 47 53"
              stroke="#10B981"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M 53 53 Q 60 44 67 53"
              stroke="#10B981"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />
            {/* Friendly Little Smile */}
            <path
              d="M 44 62 Q 50 67 56 62"
              stroke="#34D399"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
          </g>
        ) : state === 'typing' ? (
          /* Typing Eyes: Pulsing processing dots */
          <g className="animate-pulse">
            <circle cx="36" cy="52" r="4.5" fill="url(#eyeGlowCyan)" />
            <circle cx="50" cy="52" r="4.5" fill="url(#eyeGlowCyan)" />
            <circle cx="64" cy="52" r="4.5" fill="url(#eyeGlowCyan)" />
          </g>
        ) : (
          /* Normal / Idle / Speaking Eyes (Vertical Oval LEDs with smooth blink) */
          <g className="robot-eyes-group">
            {/* Left Eye */}
            <ellipse
              cx="39"
              cy="52"
              rx="6"
              ry="10"
              fill="url(#eyeGlowCyan)"
              className="robot-eye-left"
            />
            <circle cx="41" cy="49" r="2.2" fill="#FFFFFF" opacity="0.9" />

            {/* Right Eye */}
            <ellipse
              cx="61"
              cy="52"
              rx="6"
              ry="10"
              fill="url(#eyeGlowCyan)"
              className="robot-eye-right"
            />
            <circle cx="63" cy="49" r="2.2" fill="#FFFFFF" opacity="0.9" />

            {/* Subtle Brand Cheek Spots */}
            <circle cx="28" cy="62" r="2" fill="#FF008C" opacity="0.5" />
            <circle cx="72" cy="62" r="2" fill="#00CFFF" opacity="0.5" />
          </g>
        )}
      </svg>
    </div>
  );
};
