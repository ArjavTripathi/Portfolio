import { Code2, Coffee, FileCode2, Database, Container, Boxes, Cloud } from 'lucide-react';

const SKILLS = [
  { icon: Code2, name: 'Go', note: 'Primary language for current systems projects (Raft, Redis-clone, CollabTree).' },
  { icon: Coffee, name: 'Java / Spring Boot', note: 'Backend services and REST APIs.' },
  { icon: FileCode2, name: 'Python', note: 'Scripting, data and backend work.' },
  { icon: Database, name: 'PostgreSQL', note: 'Primary datastore' },
  { icon: Container, name: 'Docker', note: 'Containerization across projects and homelab.' },
  { icon: Boxes, name: 'Kubernetes (k3s)', note: 'Homelab cluster orchestration across three physical devices.' },
  { icon: Cloud, name: 'AWS', note: 'Cloud deployment; SAA-C03 certification in progress.' },
];

export function Skills() {
  return (
    <section id="skills" style={{ background: 'var(--color-canvas-soft)', padding: '120px 72px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 48, maxWidth: 1100 }}>
        <div className="reveal" style={{ fontSize: 120, fontWeight: 700, color: 'var(--color-canvas)', lineHeight: 1, letterSpacing: '-4px' }}>
          02
        </div>
        <div>
          <div
            className="reveal"
            style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-primary)', letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: 12 }}
          >
            Skills
          </div>
          <div className="reveal" style={{ fontSize: 40, fontWeight: 700, letterSpacing: '-1px', marginBottom: 36 }}>
            Tools I reach for.
          </div>
          <div>
            {SKILLS.map((skill) => (
              <div
                key={skill.name}
                className="reveal"
                style={{ display: 'flex', alignItems: 'center', gap: 24, padding: '20px 0', borderBottom: '1px solid var(--color-hairline)' }}
              >
                <skill.icon size={24} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                <div style={{ width: 200, flexShrink: 0, fontWeight: 700, fontSize: 17 }}>{skill.name}</div>
                <div style={{ fontSize: 14, lineHeight: 1.5, color: 'var(--text-secondary)' }}>{skill.note}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
