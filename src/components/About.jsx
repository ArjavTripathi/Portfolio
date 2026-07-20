export function About() {
  return (
    <section
      id="about"
      className="split-row"
      style={{
        padding: 'clamp(56px, 10vw, 120px) clamp(20px, 6vw, 72px)',
        maxWidth: 1100,
      }}
    >
      <div
        className="reveal"
        style={{ fontSize: 'clamp(48px, 10vw, 120px)', fontWeight: 700, color: 'var(--color-canvas-soft)', lineHeight: 1, letterSpacing: '-4px' }}
      >
        01
      </div>
      <div>
        <div
          className="reveal"
          style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-primary)', letterSpacing: '0.5px', textTransform: 'uppercase', marginBottom: 12 }}
        >
          About
        </div>
        <div
          className="reveal"
          style={{ fontSize: 'clamp(28px, 5vw, 40px)', fontWeight: 700, letterSpacing: '-1px', lineHeight: 1.15, marginBottom: 28, maxWidth: 640 }}
        >
          A college senior who likes to build the boring parts.
        </div>
        <div className="reveal" style={{ fontSize: 17, lineHeight: 1.75, color: 'var(--text-secondary)', marginBottom: 18, maxWidth: 640 }}>
          I am focused on backend and infrastructure engineering. 
          Most of my work lives in Go, Java/Spring Boot, and Python.
        </div>
        <div className="reveal" style={{ fontSize: 17, lineHeight: 1.75, color: 'var(--text-secondary)', marginBottom: 18, maxWidth: 640 }}>
          Outside of coursework, I run a self-managed homelab. A k3s Kubernetes cluster spread
          across three physical devices, networked together with Tailscale. It's my testbed and hosting solution for
          my projects, personal cloud, and more!
        </div>
        <div className="reveal" style={{ fontSize: 17, lineHeight: 1.75, color: 'var(--text-secondary)', maxWidth: 640 }}>
          I'm currently working toward the AWS Solutions Architect Associate (SAA-C03) certification.
        </div>
      </div>
    </section>
  );
}
