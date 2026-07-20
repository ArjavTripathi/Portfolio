import { Github, ExternalLink } from 'lucide-react';

const PROJECTS = [
  {
    index: '01',
    name: 'ExpenseTracker',
    description: 'Full-stack expense tracking app with JWT auth and real-time features.',
    repoUrl: '#',
    demoUrl: '#',
    highlights: ['WebSocket-based live updates', 'JWT authentication'],
    tags: ['Java', 'Spring Boot', 'React', 'PostgreSQL'],
  },
  {
    index: '02',
    name: 'GetFolio',
    description: 'Good-looking GitHub profile display.',
    repoUrl: 'https://www.getfolio.page/',
    demoUrl: 'https://www.getfolio.page/',
    highlights: ['Clean profile card generation', 'Built with FastAPI + React'],
    tags: ['Python', 'FastAPI', 'React'],
  },
  {
    index: '03',
    name: 'WeLinkIt',
    description: 'JWT-secured full stack link shortener.',
    repoUrl: 'https://welinkit.tech/',
    demoUrl: 'https://welinkit.tech/',
    highlights: ['JWT-based auth', 'Spring Boot + React'],
    tags: ['SpringBoot', 'React', 'JWT'],
  },
  {
    index: '04',
    name: 'Redis-like In-Memory KV Store',
    description: 'Custom implementation of core Redis functionality from scratch.',
    repoUrl: '#',
    highlights: ['RESP protocol parsing', 'Concurrent-safe data access'],
    tags: ['Go'],
  },
  {
    index: '05',
    name: 'Raft-based Distributed KV Store',
    description: 'Distributed key-value store implementing the Raft consensus algorithm.',
    repoUrl: '#',
    highlights: ['Timer-based leader election', 'AppendEntries RPC + log replication'],
    tags: ['Go', 'Distributed Systems'],
  },
  {
    index: '06',
    name: 'CollabTree',
    description: 'Tinder-style collaborator-matching app for students to find project partners.',
    repoUrl: '#',
    highlights: ['Repository-pattern backend (pgx)', 'GitHub OAuth'],
    tags: ['Go', 'PostgreSQL'],
  },
];

export function Projects() {
  return (
    <section id="projects" style={{ padding: '120px 72px', maxWidth: 1100 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 48, marginBottom: 8 }}>
        <div className="reveal" style={{ fontSize: 120, fontWeight: 700, color: 'var(--color-canvas-soft)', lineHeight: 1, letterSpacing: '-4px' }}>
          03
        </div>
        <div>
          <div
            className="reveal"
            style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-primary)', letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: 12 }}
          >
            Projects
          </div>
          <div className="reveal" style={{ fontSize: 40, fontWeight: 700, letterSpacing: '-1px', marginBottom: 16 }}>
            Selected work.
          </div>
        </div>
      </div>
      <div>
        {PROJECTS.map((project) => (
          <div
            key={project.name}
            className="reveal"
            style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 48, padding: '36px 0', borderBottom: '1px solid var(--color-hairline)' }}
          >
            <div style={{ fontSize: 15, color: 'var(--text-faint)', fontWeight: 600 }}>{project.index}</div>
            <div>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, marginBottom: 8 }}>
                <div style={{ fontWeight: 700, fontSize: 24, letterSpacing: '-0.5px' }}>{project.name}</div>
                <div style={{ display: 'flex', gap: 10, flexShrink: 0, marginTop: 4 }}>
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-faint)' }}>
                    <Github size={18} />
                  </a>
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-faint)' }}>
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
              <div style={{ fontSize: 15, color: 'var(--text-secondary)', marginBottom: 14, maxWidth: 640 }}>{project.description}</div>
              <ul style={{ margin: '0 0 16px 18px', padding: 0, fontSize: 14, lineHeight: 1.6, color: 'var(--text-secondary)', maxWidth: 640 }}>
                {project.highlights.map((hl) => (
                  <li key={hl}>{hl}</li>
                ))}
              </ul>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{ fontSize: 11, fontWeight: 600, color: 'var(--text-secondary)', background: 'var(--color-canvas-soft)', borderRadius: 'var(--radius-full)', padding: '4px 12px' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
