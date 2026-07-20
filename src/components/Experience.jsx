const EXPERIENCE = [
  {
    role: 'Computer Vision Engineer Intern',
    company: 'Cresento.HK',
    type: 'Internship',
    dates: 'Jun 2026 – Present',
    location: 'Remote',
    bullets: [
      'Curated and validated CV datasets from football match footage — annotation, classification, error analysis',
      'Fine-tuned and evaluated CV models for sports-performance analysis across variable camera angles',
      'Contributed to an end-to-end pipeline turning match video into event data and analytics',
    ],
  },
  {
    role: 'Summer Campus Moving and Repair Team',
    company: 'Iowa Home Consulting',
    type: 'Seasonal',
    dates: 'May 2026 – Present',
    location: 'Ames, Iowa · On-site',
    bullets: [
      'Managed high-volume furniture setup, repair, and distribution across university housing (40 hr/week)',
      'Used hand and power tools to assemble, disassemble, and refurbish equipment to compliance standards',
    ],
  },
  {
    role: 'Student Dining Worker',
    company: 'ISU Dining',
    type: 'Part-time',
    dates: 'Aug 2023 – Dec 2023',
    location: 'Ames, Iowa · On-site',
    bullets: [
      'Managed orders for 100+ customers daily with 100% accuracy',
      'Coordinated with kitchen and front-of-house staff for efficient service',
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" style={{ background: 'var(--color-canvas-soft)', padding: '120px 72px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 48, maxWidth: 1100 }}>
        <div className="reveal" style={{ fontSize: 120, fontWeight: 700, color: 'var(--color-canvas)', lineHeight: 1, letterSpacing: '-4px' }}>
          04
        </div>
        <div>
          <div
            className="reveal"
            style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-primary)', letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: 12 }}
          >
            Experience
          </div>
          <div className="reveal" style={{ fontSize: 40, fontWeight: 700, letterSpacing: '-1px', marginBottom: 36 }}>
            Where I've worked.
          </div>
          {EXPERIENCE.map((job) => (
            <div
              key={job.role}
              className="reveal"
              style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: 24, padding: '28px 0', borderBottom: '1px solid var(--color-hairline)' }}
            >
              <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-faint)' }}>{job.dates}</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 2 }}>{job.role}</div>
                <div style={{ fontSize: 14, color: 'var(--color-primary)', fontWeight: 600, marginBottom: 2 }}>
                  {job.company} · {job.type}
                </div>
                <div style={{ fontSize: 13, color: 'var(--text-faint)', marginBottom: 12 }}>{job.location}</div>
                <ul style={{ margin: 0, paddingLeft: 18, fontSize: 14, lineHeight: 1.6, color: 'var(--text-secondary)' }}>
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
