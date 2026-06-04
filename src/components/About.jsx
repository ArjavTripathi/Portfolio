import React from "react";
import { FaGithub, FaFileAlt, FaMapMarkerAlt, FaGraduationCap, FaBolt } from "react-icons/fa";
import { useScrollReveal } from "../hooks/useScrollReveal";

const quickFacts = [
  { icon: <FaMapMarkerAlt className="text-teal-400" />, label: "Ames, Iowa" },
  { icon: <FaGraduationCap className="text-teal-400" />, label: "CS @ Iowa State University" },
  { icon: <FaBolt className="text-teal-400" />, label: "Backend-focused" },
];

const chips = ["Always Shipping", "Open Source", "Clean APIs"];

const About = () => {
  const [ref, visible] = useScrollReveal();

  return (
    <section name="about" id="about" className="w-full bg-[#060f1e] text-white pt-28 pb-0">
      <div
        ref={ref}
        className={`max-w-screen-lg mx-auto px-6 py-16 reveal ${visible ? 'visible' : ''}`}
      >
        {/* Section label */}
        <div className="mb-10">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-teal-400/70">01 — About</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">
            But you can just call me AJ.
          </h2>
        </div>

        {/* Two-column grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left — Bio */}
          <div>
            <p className="text-gray-400 leading-relaxed">
              I'm a software developer who enjoys building scalable, high-performance applications.
              Ever since I first built a calculator in Python, I've been fascinated by how software
              can be used to solve real problems.
            </p>
            <p className="text-gray-400 mt-4 leading-relaxed">
              I like taking a feature all the way — from idea to implementation to shipped. That means
              designing clean endpoints, structuring services properly, optimizing queries, and making
              sure systems stay reliable over time.
            </p>

            {/* Chips */}
            <div className="mt-6 flex flex-wrap gap-2">
              {chips.map((chip) => (
                <span
                  key={chip}
                  className="px-3 py-1.5 rounded-full bg-white/4 border border-white/8 text-sm
                             text-gray-400 hover:border-teal-400/40 hover:text-teal-300
                             hover:shadow-[0_0_10px_rgba(45,212,191,0.15)] transition-all duration-200 cursor-default"
                >
                  {chip}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="Resume.pdf"
                download="Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg
                           bg-teal-500 hover:bg-teal-400 text-[#060f1e] font-semibold text-sm transition-colors duration-200"
              >
                <FaFileAlt size={13} /> Resume
              </a>
              <a
                href="https://github.com/ArjavTripathi"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg
                           border border-white/10 hover:border-teal-400/40 text-gray-300
                           hover:text-teal-300 text-sm transition-all duration-200"
              >
                <FaGithub size={14} /> GitHub
              </a>
            </div>
          </div>

          {/* Right — Quick facts */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500">Quick Facts</h3>
            {quickFacts.map(({ icon, label }) => (
              <div key={label} className="flex items-center gap-3 text-gray-300 text-sm">
                <span className="text-base shrink-0">{icon}</span>
                {label}
              </div>
            ))}

            {/* Subtle stat box */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              {[
                { value: '2+', label: 'Projects Shipped' },
                { value: '10+', label: 'Technologies' },
              ].map(({ value, label }) => (
                <div key={label} className="rounded-xl border border-white/8 bg-white/3 p-5">
                  <p className="text-2xl font-bold text-teal-300">{value}</p>
                  <p className="text-xs text-gray-500 mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/8 to-transparent" />
    </section>
  );
};

export default About;
