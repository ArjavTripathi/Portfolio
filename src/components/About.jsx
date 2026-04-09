import React from "react";
import me from "../assets/AJIcon-nobg.png";
import { FaGithub, FaFileAlt } from "react-icons/fa";

const About = () => {
  return (
    <section
      name="about"
      id="about"
      className="w-full bg-[#0A2540] text-white pt-24"
    >
      <div className="max-w-screen-lg mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold inline border-b-4 border-teal-400">
            About
          </h2>
          <p className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto">
            Backend-focused developer who enjoys building reliable systems and clean APIs.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Text (left) */}
          <div>
            <h3 className="text-3xl font-bold text-teal-300">
              ...But you can just call me AJ.
            </h3>
            <p className="text-gray-300 mt-4 leading-relaxed">
              I’m a software developer who enjoys building scalable, high-performance applications.
              Ever since I first built a calculator using Python, I have been interested in software
              works and how it can be used to help people.
            </p>
            <p className="text-gray-300 mt-4 leading-relaxed">
              I like taking a feature from idea → implementation → shipped: designing endpoints,
              structuring services cleanly, optimizing queries, and making sure systems are reliable.
            </p>

            {/* “Chips” */}
            <div className="mt-6 flex flex-wrap gap-3">
              {["CS @ Iowa State", "Always Shipping", "Open Source"].map((chip) => (
                <span
                  key={chip}
                  className="px-3 py-2 rounded-full bg-white/5 border border-white/10
                             text-sm text-gray-200 hover:border-teal-400/40 hover:text-teal-300 transition"
                >
                  {chip}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="Resume.pdf"
                download="Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg
                           bg-teal-500 hover:bg-teal-400 text-[#0A2540] font-semibold transition"
              >
                <FaFileAlt /> Resume
              </a>
              <a
                href="https://github.com/ArjavTripathi"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg
                           border border-white/15 hover:border-teal-400/40 text-white transition"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </div>

          {/* Avatar (right on desktop) */}
          <div className="flex justify-center md:justify-end">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <img
                src={me}
                alt="AJ profile"
                className="w-44 h-44 md:w-56 md:h-56 rounded-full object-cover
                           shadow-[0_0_30px_rgba(0,200,180,0.20)]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 h-[2px] w-full bg-gradient-to-r from-transparent via-teal-300/60 to-transparent" />
    </section>
  );
};

export default About;
