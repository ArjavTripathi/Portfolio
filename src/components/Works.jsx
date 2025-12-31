import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "GeoHunt",
    value: "IRL location guessing game",
    tech: ["Spring Boot", "REST API", "MySQL"],
    bullets: [
      "Built backend services for game logic + scoring",
      "Designed REST endpoints for sessions, guesses, and leaderboards",
      "Deployed with environment-based config for prod/dev",
    ],
    github: "https://github.com/ArjavTripathi/Geohunt-Backend", // replace with real link
    demo: "demo",     // replace with real link
  },
  {
    title: "Project Placeholder",
    value: "Backend service / API project",
    tech: ["Node.js", "Express", "MongoDB"],
    bullets: [
      "Designed data model + CRUD endpoints",
      "Added authentication + rate limiting",
      "Wrote clean services + controllers structure",
    ],
    github: "#",
    demo: null, // or "#"
  },
  {
    title: "Project Placeholder",
    value: "Cloud / DevOps focused build",
    tech: ["Docker", "GitHub Actions", "Nginx"],
    bullets: [
      "Containerized app for repeatable builds",
      "CI pipeline: lint, test, build, deploy",
      "Reverse proxy + env-based deployment",
    ],
    github: "#",
    demo: null,
  },
  {
    title: "Project Placeholder",
    value: "Database / performance project",
    tech: ["SQL", "Redis", "Caching"],
    bullets: [
      "Optimized queries + indexing strategy",
      "Added caching layer to reduce latency",
      "Measured performance before/after",
    ],
    github: "#",
    demo: null,
  },
];

const Works = () => {
  return (
    <section
      name="projects"
      className="w-full min-h-screen bg-[#0A2540] text-white pt-24"
    >
      <div className="max-w-screen-lg mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold inline border-b-4 border-teal-400">
            Projects
          </h2>
          <p className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto">
            All my projects!
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className="rounded-xl bg-white/5 border border-white/10 p-6
                         hover:border-teal-400/40 hover:ring-1 hover:ring-teal-400/20
                         transition"
            >
              {/* Top row */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-teal-300">{p.title}</h3>
                  <p className="text-gray-300 mt-1">{p.value}</p>
                </div>

                {/* Links */}
                <div className="flex gap-3 shrink-0">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${p.title} GitHub`}
                    className="p-2 rounded-lg border border-white/10 hover:border-teal-400/40 transition"
                  >
                    <FaGithub />
                  </a>
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${p.title} Demo`}
                      className="p-2 rounded-lg border border-white/10 hover:border-teal-400/40 transition"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>

              {/* Tech chips */}
              <div className="flex flex-wrap gap-2 mt-4">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-gray-200"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Highlights */}
              <ul className="mt-4 space-y-2 text-gray-300 list-disc pl-5">
                {p.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              {/* Optional CTA row */}
              <div className="mt-6 flex gap-3">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-lg border border-white/15 hover:border-teal-400/40 transition text-sm"
                >
                  View Code
                </a>
                {p.demo ? (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-lg bg-teal-500 hover:bg-teal-400 text-[#0A2540] font-semibold transition text-sm"
                  >
                    Live Demo
                  </a>
                ) : (
                  <span className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 text-sm">
                    Demo coming soon
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
