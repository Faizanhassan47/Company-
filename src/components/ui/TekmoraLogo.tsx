import React from 'react';

interface LogoProps {
  className?: string;
  height?: number | string;
  showWordmark?: boolean;
  theme?: 'dark' | 'light' | 'auto';
  variant?: 'full' | 'mark-only' | 'badge-square' | 'badge-circle';
}

/**
 * Tekmora Official Brand Icon (tk mark with orange junction dot)
 */
export const TekmoraIcon: React.FC<{ size?: number | string; className?: string; color?: string }> = ({
  size = 32,
  className = '',
  color = 'currentColor'
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={size}
      height={size}
      fill="none"
      className={`tekmora-icon ${className}`}
      aria-label="Tekmora Symbol"
    >
      {/* T-Stem & Left Crossbar */}
      {/* Top stem */}
      <path
        d="M32 12 H46 V30 H62 V43 H46 V66 C46 72 43 76 36 78 C31 79.5 24 78 20 74 L25 63 C27 65 30 66 32 65 C33.5 64 34 62 34 58 V43 H10 V30 H32 V12 Z"
        fill={color}
      />
      
      {/* K-Arms (Upper diagonal and lower diagonal) */}
      {/* Top right arm */}
      <path
        d="M52 46 L78 20 H96 L67 48 L52 46 Z"
        fill={color}
      />
      {/* Bottom right leg */}
      <path
        d="M58 52 L96 86 H77 L48 60 L58 52 Z"
        fill={color}
      />

      {/* Signature Junction Orange Dot */}
      <circle cx="49" cy="52" r="8.5" fill="#FF4D1C" />
    </svg>
  );
};

/**
 * Tekmora App Icon Badge (Rounded Square or Circle)
 */
export const TekmoraBadge: React.FC<{
  size?: number;
  shape?: 'square' | 'circle';
  bg?: string;
  className?: string;
}> = ({ size = 48, shape = 'square', bg = 'var(--bg-elevated)', className = '' }) => {
  const rx = shape === 'circle' ? size / 2 : Math.round(size * 0.24);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={`tekmora-badge ${className}`}
    >
      <rect width="100" height="100" rx={rx} fill={bg} />
      <g transform="translate(10, 10) scale(0.8)">
        <path
          d="M32 12 H46 V30 H62 V43 H46 V66 C46 72 43 76 36 78 C31 79.5 24 78 20 74 L25 63 C27 65 30 66 32 65 C33.5 64 34 62 34 58 V43 H10 V30 H32 V12 Z"
          fill="currentColor"
        />
        <path d="M52 46 L78 20 H96 L67 48 L52 46 Z" fill="currentColor" />
        <path d="M58 52 L96 86 H77 L48 60 L58 52 Z" fill="currentColor" />
        <circle cx="49" cy="52" r="8.5" fill="#FF4D1C" />
      </g>
    </svg>
  );
};

/**
 * Tekmora Full Brand Lockup (tk symbol + tekmora. typography)
 */
export const TekmoraLogo: React.FC<LogoProps> = ({
  className = '',
  height = 32,
  showWordmark = true,
  theme = 'auto',
  variant = 'full'
}) => {
  const textColor = theme === 'dark' ? '#FFFFFF' : theme === 'light' ? '#0F172A' : 'var(--text-primary)';

  if (variant === 'mark-only') {
    return <TekmoraIcon size={height} className={className} color={textColor} />;
  }

  return (
    <div
      className={`tekmora-brand-lockup flex items-center gap-2.5 select-none ${className}`}
      style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', color: textColor }}
    >
      <TekmoraIcon size={height} color={textColor} />
      {showWordmark && (
        <span
          className="tekmora-brand-text"
          style={{
            fontFamily: '"Poppins", sans-serif',
            fontSize: typeof height === 'number' ? `${Math.round(height * 0.78)}px` : '1.35rem',
            fontWeight: 800,
            letterSpacing: '-0.04em',
            lineHeight: 1,
            color: textColor,
            display: 'inline-flex',
            alignItems: 'baseline'
          }}
        >
          tekmora<span style={{ color: 'var(--accent-orange)' }}>.</span>
        </span>
      )}
    </div>
  );
};
