import React from "react";
import {
  SiJavascript, SiPython, SiJava,
  SiReact, SiSpringboot,
  SiMysql,
  SiDocker, SiGithubactions,
  SiPostman, SiGit,
} from "react-icons/si";
import { FaCloud } from "react-icons/fa";
import { useScrollReveal } from "../hooks/useScrollReveal";

const categories = [
  {
    label: "Languages",
    items: [
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Python",     icon: <SiPython /> },
      { name: "Java",       icon: <SiJava /> },
    ],
  },
  {
    label: "Frameworks",
    items: [
      { name: "Spring Boot", icon: <SiSpringboot /> },
      { name: "React",       icon: <SiReact /> },
    ],
  },
  {
    label: "Databases",
    items: [
      { name: "MySQL", icon: <SiMysql /> },
    ],
  },
  {
    label: "DevOps",
    items: [
      { name: "Docker",          icon: <SiDocker /> },
      { name: "GitHub Actions",  icon: <SiGithubactions /> },
      { name: "Render",          icon: <FaCloud /> },
    ],
  },
  {
    label: "Tools",
    items: [
      { name: "Postman", icon: <SiPostman /> },
      { name: "Git",     icon: <SiGit /> },
    ],
  },
];

const Skills = () => {
  const [ref, visible] = useScrollReveal();

  let tileIndex = 0;

  return (
    <section name="skills" id="skills" className="w-full bg-[#060f1e] text-white pt-28 pb-0">
      <div
        ref={ref}
        className={`max-w-screen-lg mx-auto px-6 py-16 reveal ${visible ? 'visible' : ''}`}
      >
        {/* Section label */}
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-[0.25em] uppercase text-teal-400/70">02 — Skills</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">My Stack</h2>
          <p className="mt-2 text-gray-500 text-sm">Tools and technologies I work with.</p>
        </div>

        {/* Categories */}
        <div className="flex flex-col gap-10">
          {categories.map((cat) => (
            <div key={cat.label}>
              <h3 className="text-[10px] font-bold tracking-[0.25em] uppercase text-teal-400/50 mb-4">
                {cat.label}
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                {cat.items.map((item) => {
                  const delay = `${(tileIndex++ % 8) * 0.06}s`;
                  return (
                    <div
                      key={item.name}
                      className="group flex flex-col items-center justify-center gap-2.5 p-4 rounded-xl
                                 bg-white/3 border border-white/8 text-gray-400
                                 hover:border-teal-400/35 hover:text-teal-300 hover:bg-white/6
                                 hover:shadow-[0_0_16px_rgba(45,212,191,0.08)]
                                 transition-all duration-200 cursor-default"
                      style={visible ? { animationDelay: delay } : {}}
                    >
                      <span className="text-2xl group-hover:scale-110 transition-transform duration-200">
                        {item.icon}
                      </span>
                      <span className="text-[11px] font-medium text-center leading-tight">{item.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/8 to-transparent" />
    </section>
  );
};

export default Skills;
