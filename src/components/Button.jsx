import { useState } from 'react';

const base = {
  fontFamily: 'var(--font-sans)',
  fontSize: '16px',
  fontWeight: 500,
  lineHeight: 1.5,
  border: 'none',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  transition: 'transform 0.12s ease, background-color 0.12s ease',
};

const variants = {
  primary: {
    background: 'var(--color-primary)',
    color: 'var(--color-on-primary)',
    borderRadius: 'var(--radius-full)',
    padding: '12px 24px',
  },
  secondary: {
    background: 'var(--color-surface)',
    color: 'var(--color-ink)',
    borderRadius: 'var(--radius-full)',
    padding: '12px 24px',
    boxShadow: '0 1px 2px rgba(0,0,0,0.08)',
  },
};

export function Button({ variant = 'primary', children, onClick, style, ...rest }) {
  const v = variants[variant] || variants.primary;
  const [pressed, setPressed] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      style={{
        ...base,
        ...v,
        ...(variant === 'primary' && pressed ? { background: 'var(--color-primary-active)' } : {}),
        transform: pressed ? 'scale(0.96)' : 'scale(1)',
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
