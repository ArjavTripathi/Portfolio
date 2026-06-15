import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useScrollReveal } from "../hooks/useScrollReveal";

const projects = [
  {
    number: "01",
    title: "Folio",
    value: "Full-stack Github Profile Platform",
    description: "A full-stack github profile application integrated with Github OAuth featuring a repository scoring algorithm",
    tech: ["Vite", "Typescript", "Python", "FastAPI", "PostgreSQL", "Vercel", "Supabase", "Render"],
    bullets: [
      "Planned data model + CRUD endpoints",
      "Added Respository Scoring + Designed UI",
      "Deployed Frontend, Backend, and Database",
    ],
    github: "https://github.com/ArjavTripathi/Github-Analyser",
    demo: "https://getfolio.page",
    featured: true,
  },
  {
    number: "02",
    title: "Linkit",
    value: "Full-stack link management platform",
    description: "A full-stack link management platform with user authentication, a dashboard, and clean CRUD endpoints. Built with a Spring Boot backend and a Vite-powered frontend.",
    tech: ["Spring Boot", "MySQL", "Vite"],
    bullets: [
      "Designed data model + CRUD endpoints",
      "Added authentication + Dashboard UI",
      "Wrote clean services + controllers structure",
    ],
    github: "https://github.com/ArjavTripathi/linkly",
    demo: "https://welinkit.tech/",
    featured: false,
  },
  {
    number: "03",
    title: "GeoHunt",
    value: "IRL geolocation guessing game",
    description: "A real-world location guessing game where players compete to identify places from photos. Focused on backend services for game logic, scoring, and session management.",
    tech: ["Spring Boot", "REST API", "MySQL"],
    bullets: [
      "Built game logic + scoring engine",
      "Designed REST endpoints for sessions, guesses, and leaderboards",
    ],
    github: "https://github.com/ArjavTripathi/Geohunt-Backend",
    demo: null,
    featured: false,
  },
  
  
];

const Works = () => {
  const [ref, visible] = useScrollReveal();

  return (
    <section name="projects" id="projects" className="w-full bg-[#060f1e] text-white pt-28 pb-0">
      <div
        ref={ref}
        className={`max-w-screen-lg mx-auto px-6 py-16 reveal ${visible ? 'visible' : ''}`}
      >
        {/* Section label */}
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-teal-400/70">03 — Projects</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">Things I've Built</h2>
          <p className="mt-2 text-gray-500 text-sm">A selection of projects I've shipped.</p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 gap-6 items-stretch">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="relative rounded-xl bg-white/3 border border-white/8 border-t-2 border-t-teal-500/60 p-7
                         hover:border-teal-400/30 hover:bg-white/5 hover:shadow-[0_0_30px_rgba(45,212,191,0.05)]
                         transition-all duration-300 flex flex-col overflow-hidden"
              style={visible ? { animationDelay: `${i * 0.12}s` } : {}}
            >
              {/* Faint project number */}
              <span className="absolute -top-2 -right-1 text-[7rem] font-extrabold text-teal-300/5 select-none leading-none pointer-events-none">
                {p.number}
              </span>

              {/* Top row */}
              <div className="flex items-start justify-between gap-4 relative z-10">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-bold text-white">{p.title}</h3>
                    {p.featured && (
                      <span className="text-[10px] font-semibold tracking-widest uppercase px-2 py-0.5
                                       rounded-full bg-teal-400/10 border border-teal-400/25 text-teal-300">
                        Featured
                      </span>
                    )}
                  </div>
                  <p className="text-gray-500 text-xs font-medium">{p.value}</p>
                </div>

                {/* Icon links */}
                <div className="flex gap-2 shrink-0">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${p.title} GitHub`}
                    className="p-2 rounded-lg border border-white/8 text-gray-400
                               hover:border-teal-400/40 hover:text-teal-300 transition-all duration-200"
                  >
                    <FaGithub size={15} />
                  </a>
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${p.title} Demo`}
                      className="p-2 rounded-lg border border-white/8 text-gray-400
                                 hover:border-teal-400/40 hover:text-teal-300 transition-all duration-200"
                    >
                      <FaExternalLinkAlt size={13} />
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-gray-400 text-sm leading-relaxed relative z-10">{p.description}</p>

              {/* Tech chips */}
              <div className="flex flex-wrap gap-2 mt-5 relative z-10">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] px-2.5 py-1 rounded-full bg-white/4 border border-white/8 text-gray-400 font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* CTA row */}
              <div className="mt-auto pt-6 flex gap-3 relative z-10">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-lg border border-white/10 text-gray-400 text-sm
                             hover:border-teal-400/40 hover:text-teal-300 transition-all duration-200"
                >
                  View Code
                </a>
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-lg bg-teal-500 hover:bg-teal-400
                               text-[#060f1e] font-semibold text-sm transition-colors duration-200"
                  >
                    Live Demo ↗
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/8 to-transparent" />
    </section>
  );
};

export default Works;
