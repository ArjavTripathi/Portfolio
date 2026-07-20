import { Github, Linkedin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" style={{ padding: '140px 72px', maxWidth: 1100 }}>
      <div
        className="reveal"
        style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-primary)', letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: 16 }}
      >
        Contact
      </div>
      <div className="reveal" style={{ fontSize: 56, fontWeight: 700, letterSpacing: '-1.5px', lineHeight: 1.05, marginBottom: 32, maxWidth: 700 }}>
        Let's build
        <br />
        something together.
      </div>
      <a
        className="reveal"
        href="mailto:arjavatripathi2@gmail.com"
        style={{ fontSize: 28, fontWeight: 700, color: 'var(--color-primary)', textDecoration: 'none', display: 'inline-block', marginBottom: 20 }}
      >
        arjavatripathi2@gmail.com
      </a>
      <div className="reveal" style={{ display: 'flex', gap: 20 }}>
        <a href="https://github.com/ArjavTripathi" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-ink)', display: 'flex' }}>
          <Github size={24} />
        </a>
        <a href="https://www.linkedin.com/in/arjavatripathi/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-ink)', display: 'flex' }}>
          <Linkedin size={24} />
        </a>
      </div>
    </section>
  );
}
