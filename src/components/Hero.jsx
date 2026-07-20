import { ChevronDown } from 'lucide-react';
import { Button } from './Button';

export function Hero({ onScrollToProjects, onScrollToAbout }) {
  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '64px 72px',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '8%',
          right: '4%',
          fontSize: 340,
          fontWeight: 700,
          lineHeight: 1,
          color: 'var(--color-canvas-soft)',
          letterSpacing: '-10px',
          pointerEvents: 'none',
          zIndex: 0,
          userSelect: 'none',
        }}
      >
        AJ
      </div>
      <div style={{ position: 'relative', zIndex: 1, maxWidth: 680 }}>
        <div
          className="fade-up"
          style={{
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: '1px',
            color: 'var(--color-primary)',
            textTransform: 'uppercase',
            marginBottom: 20,
          }}
        >
          CS Student · Iowa State University
        </div>
        <div
          className="fade-up"
          style={{
            fontSize: 96,
            fontWeight: 700,
            letterSpacing: '-3px',
            lineHeight: 0.98,
            marginBottom: 24,
            animationDelay: '0.08s',
          }}
        >
          Arjava
          <br />
          Tripathi
        </div>
        <div
          className="fade-up"
          style={{
            fontSize: 22,
            fontWeight: 600,
            lineHeight: 1.4,
            color: 'var(--color-ink)',
            marginBottom: 16,
            animationDelay: '0.16s',
          }}
        >
          Building distributed systems and backend infrastructure.
        </div>
        <div
          className="fade-up"
          style={{
            maxWidth: 480,
            fontSize: 15,
            lineHeight: 1.6,
            color: 'var(--text-secondary)',
            marginBottom: 36,
            animationDelay: '0.24s',
          }}
        >
          Graduating May 2027, focused on backend and infrastructure engineering
        </div>
        <div className="fade-up" style={{ display: 'flex', gap: 12, animationDelay: '0.32s' }}>
          <Button variant="primary" onClick={onScrollToProjects} style={{ width: 160, height: 48 }}>
            View projects
          </Button>
        </div>
      </div>
      <div
        onClick={onScrollToAbout}
        style={{
          position: 'absolute',
          bottom: 32,
          left: 72,
          color: 'var(--text-faint)',
          cursor: 'pointer',
          animation: 'pulseGlow 2s ease-in-out infinite',
          zIndex: 1,
        }}
      >
        <ChevronDown size={24} />
      </div>
    </section>
  );
}
