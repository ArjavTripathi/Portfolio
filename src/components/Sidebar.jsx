import { Github, Linkedin } from 'lucide-react';
import { Button } from './Button';

const SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export function Sidebar({ active, onNavigate }) {
  return (
    <nav
      className="sidebar"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 240,
        height: '100vh',
        boxSizing: 'border-box',
        padding: '40px 28px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRight: '1px solid var(--color-hairline)',
        background: 'var(--color-canvas)',
        zIndex: 20,
      }}
    >
      <div>
        <div style={{ fontWeight: 700, fontSize: 22, letterSpacing: '-0.5px', marginBottom: 48 }}>AJ</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {SECTIONS.map((link) => {
            const isActive = active === link.id;
            return (
              <div
                key={link.id}
                onClick={() => onNavigate(link.id)}
                style={{
                  cursor: 'pointer',
                  padding: '8px 0 8px 12px',
                  marginLeft: -12,
                  fontSize: 15,
                  fontWeight: isActive ? 700 : 400,
                  color: isActive ? 'var(--color-ink)' : 'var(--text-faint)',
                  borderLeft: `2px solid ${isActive ? 'var(--color-primary)' : 'transparent'}`,
                }}
              >
                {link.label}
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div style={{ display: 'flex', gap: 16, marginBottom: 20 }}>
          <a href="https://github.com/ArjavTripathi" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-ink)' }}>
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/arjavatripathi/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-ink)' }}>
            <Linkedin size={18} />
          </a>
        </div>
        <Button variant="primary" onClick={() => window.open('/Resume.pdf', '_blank')} style={{ width: '100%' }}>
          Resume
        </Button>
      </div>
    </nav>
  );
}

export { SECTIONS };
