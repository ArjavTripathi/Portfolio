import { useMemo, useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

const PROJECTS = [
  {
    index: '01',
    name: 'Divvy',
    description: 'Full-stack expense tracking and splitting app with JWT auth and real-time features.',
    repoUrl: 'https://github.com/ArjavTripathi/ExpenseTracker',
    demoUrl: 'https://divvy.arjavatripathi.me',
    highlights: ['WebSocket-based live updates', 'JWT authentication'],
    tags: ['Java', 'Spring Boot', 'React', 'PostgreSQL'],
  },
  {
    index: '02',
    name: 'GetFolio',
    description: 'Good-looking GitHub profile display.',
    repoUrl: 'https://github.com/ArjavTripathi/Folio',
    demoUrl: 'https://www.getfolio.page/',
    highlights: ['Clean profile card generation', 'Built with FastAPI + React'],
    tags: ['Python', 'FastAPI', 'React'],
  },
  {
    index: '03',
    name: 'WeLinkIt',
    description: 'JWT-secured full stack link shortener.',
    repoUrl: 'https://github.com/ArjavTripathi/linkit',
    demoUrl: 'https://welinkit.tech/',
    highlights: ['JWT-based auth', 'Spring Boot + React'],
    tags: ['Java', 'Spring Boot', 'React', 'JWT'],
  },
  {
    index: '04',
    name: 'Redis-like In-Memory KV Store',
    description: 'Custom implementation of core Redis functionality from scratch.',
    repoUrl: 'https://github.com/ArjavTripathi/redis',
    highlights: ['RESP protocol parsing', 'Concurrent-safe data access'],
    tags: ['Go'],
  },
  {
    index: '05',
    name: 'Raft-based Distributed KV Store',
    description: 'Distributed key-value store implementing the Raft consensus algorithm.',
    repoUrl: 'https://github.com/ArjavTripathi/raft-kv-store',
    highlights: ['Timer-based leader election', 'AppendEntries RPC + log replication'],
    tags: ['Go', 'Distributed Systems'],
  },
  {
    index: '06',
    name: 'Raytracer',
    description: 'Physically-based ray tracer written from scratch in C++.',
    repoUrl: 'https://github.com/ArjavTripathi/Raytracer',
    highlights: ['Recursive ray-object intersection', 'Diffuse, reflective, and refractive materials'],
    tags: ['C++'],
  },
];

const ALL_TAGS = [...new Set(PROJECTS.flatMap((project) => project.tags))];

export function Projects() {
  const [activeTags, setActiveTags] = useState([]);

  const toggleTag = (tag) => {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const filteredProjects = useMemo(
    () =>
      activeTags.length === 0
        ? PROJECTS
        : PROJECTS.filter((project) => activeTags.some((tag) => project.tags.includes(tag))),
    [activeTags]
  );

  return (
    <section id="projects" style={{ padding: 'clamp(56px, 10vw, 120px) clamp(20px, 6vw, 72px)', maxWidth: 1100 }}>
      <div className="split-row" style={{ marginBottom: 8 }}>
        <div className="reveal" style={{ fontSize: 'clamp(48px, 10vw, 120px)', fontWeight: 700, color: 'var(--color-canvas-soft)', lineHeight: 1, letterSpacing: '-4px' }}>
          03
        </div>
        <div>
          <div
            className="reveal"
            style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-primary)', letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: 12 }}
          >
            Projects
          </div>
          <div className="reveal" style={{ fontSize: 'clamp(28px, 5vw, 40px)', fontWeight: 700, letterSpacing: '-1px', marginBottom: 16 }}>
            Selected work.
          </div>
          <div
            className="reveal"
            role="group"
            aria-label="Filter projects by tag"
            style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 8 }}
          >
            {ALL_TAGS.map((tag) => {
              const active = activeTags.includes(tag);
              return (
                <button
                  key={tag}
                  type="button"
                  aria-pressed={active}
                  onClick={() => toggleTag(tag)}
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    color: active ? 'var(--color-canvas)' : 'var(--text-secondary)',
                    background: active ? 'var(--color-primary)' : 'var(--color-canvas-soft)',
                    border: 'none',
                    borderRadius: 'var(--radius-full)',
                    padding: '6px 14px',
                    cursor: 'pointer',
                  }}
                >
                  {tag}
                </button>
              );
            })}
            {activeTags.length > 0 && (
              <button
                type="button"
                onClick={() => setActiveTags([])}
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: 'var(--text-faint)',
                  background: 'transparent',
                  border: 'none',
                  borderRadius: 'var(--radius-full)',
                  padding: '6px 14px',
                  cursor: 'pointer',
                }}
              >
                Clear filters
              </button>
            )}
          </div>
        </div>
      </div>
      <div>
        {filteredProjects.length === 0 && (
          <div style={{ padding: '36px 0', fontSize: 15, color: 'var(--text-secondary)' }}>
            No projects match the selected tags.
          </div>
        )}
        {filteredProjects.map((project) => (
          <div
            key={project.name}
            className="reveal split-row"
            style={{ padding: '36px 0', borderBottom: '1px solid var(--color-hairline)' }}
          >
            <div style={{ fontSize: 15, color: 'var(--text-faint)', fontWeight: 600 }}>{project.index}</div>
            <div>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, marginBottom: 8 }}>
                <div style={{ fontWeight: 700, fontSize: 24, letterSpacing: '-0.5px' }}>{project.name}</div>
                <div style={{ display: 'flex', gap: 10, flexShrink: 0, marginTop: 4 }}>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.name} source on GitHub`}
                    style={{ color: 'var(--text-faint)' }}
                  >
                    <Github size={18} />
                  </a>
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.name} live demo`}
                      style={{ color: 'var(--text-faint)' }}
                    >
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
