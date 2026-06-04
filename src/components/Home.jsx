import React from "react";
import { HiChevronDown } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <section
      name="home"
      id="home"
      className="relative w-full min-h-screen bg-[#060f1e] text-white flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Ambient background glow */}
      <div
        className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(45,212,191,0.06) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(45,212,191,0.04) 0%, transparent 70%)',
        }}
      />

      {/* Hero content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-6">

        {/* Eyebrow */}
        <span className="animate-fade-in text-xs font-semibold tracking-[0.3em] uppercase text-teal-400 border border-teal-400/30 px-4 py-1.5 rounded-full bg-teal-400/5">
          Available for work
        </span>

        {/* Name */}
        <h1
          className="animate-fade-in-up text-5xl sm:text-7xl md:text-8xl font-extrabold text-white leading-[1.05] tracking-tight"
          style={{ animationDelay: '0.1s' }}
        >
          Arjava Tripathi
        </h1>

        {/* Tagline */}
        <p
          className="animate-fade-in-up text-xl sm:text-2xl text-gray-400 font-light"
          style={{ animationDelay: '0.2s' }}
        >
          I build things that work and ship them.
        </p>

        {/* Descriptor */}
        <p
          className="animate-fade-in-up text-sm text-gray-500 tracking-wide"
          style={{ animationDelay: '0.3s' }}
        >
          Backend-focused full-stack developer &nbsp;·&nbsp; Spring Boot &nbsp;·&nbsp; React &nbsp;·&nbsp; MySQL
        </p>

        {/* CTAs */}
        <div
          className="animate-fade-in-up flex flex-wrap items-center justify-center gap-4 mt-2"
          style={{ animationDelay: '0.4s' }}
        >
          <Link
            to="projects"
            smooth
            duration={600}
            className="cursor-pointer px-7 py-3 rounded-lg bg-teal-500 hover:bg-teal-400
                       text-[#060f1e] font-semibold text-sm transition-colors duration-200"
          >
            View Projects
          </Link>
          <a
            href="Resume.pdf"
            download="Resume.pdf"
            className="px-7 py-3 rounded-lg border border-white/15 text-gray-300
                       hover:border-teal-400/50 hover:text-teal-300 text-sm font-medium transition-colors duration-200"
          >
            Resume ↗
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 flex flex-col items-center gap-2 animate-bounce">
        <Link to="about" smooth duration={500} className="cursor-pointer text-gray-600 hover:text-teal-400 transition-colors duration-200">
          <HiChevronDown size={28} />
        </Link>
      </div>

      {/* Section divider */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] w-full bg-gradient-to-r from-transparent via-white/8 to-transparent" />
    </section>
  );
};

export default Home;
