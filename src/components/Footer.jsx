import { Github, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer
      style={{
        background: 'var(--color-secondary)',
        color: '#fff',
        padding: '32px 72px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 16,
      }}
    >
      <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>© {new Date().getFullYear()} Arjava Tripathi</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        <a href="https://github.com/ArjavTripathi" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.85)', display: 'flex' }}>
          <Github size={18} />
        </a>
        <a href="https://www.linkedin.com/in/arjavatripathi/" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.85)', display: 'flex' }}>
          <Linkedin size={18} />
        </a>
      </div>
    </footer>
  );
}
