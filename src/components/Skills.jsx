import React from "react";
import { FaCode, FaCubes, FaDatabase, FaServer, FaToolbox, FaCloud } from "react-icons/fa";
import {
  SiJavascript,
  SiPython,
  SiJava,
  SiReact,
  SiSpringboot,
  SiMysql,
  SiDocker,
  SiGithubactions,
  SiPostman,
  SiGit,
} from "react-icons/si";

const stack = [
  {
    title: "Languages",
    icon: <FaCode />,
    items: [
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Python", icon: <SiPython /> },
      { name: "Java", icon: <SiJava /> },
    ],
  },
  {
    title: "Frameworks",
    icon: <FaCubes />,
    items: [
      { name: "Spring Boot", icon: <SiSpringboot /> },
      { name: "React", icon: <SiReact /> },
    ],
  },
  {
    title: "Databases",
    icon: <FaDatabase />,
    items: [{ name: "MySQL", icon: <SiMysql /> }],
  },
  {
    title: "DevOps",
    icon: <FaServer />,
    items: [
      { name: "Docker", icon: <SiDocker /> },
      { name: "GitHub Actions", icon: <SiGithubactions /> },
      { name: "Render", icon: <FaCloud /> },
    ],
  },
  {
    title: "Tools",
    icon: <FaToolbox />,
    items: [
      { name: "Postman", icon: <SiPostman /> },
      { name: "Git", icon: <SiGit /> },
    ],
  },
];

const Skills = () => {
  return (
    <section name="skills" className="w-full  bg-[#0A2540] text-white pt-24">
      <div className="max-w-screen-lg mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold inline border-b-4 border-teal-400">
            My Stack
          </h2>
          <p className="mt-4 text-gray-300 text-lg">
            Tools and technologies I work with:
          </p>
        </div>

        {/* Categories */}
        <div className="grid md:grid-cols-2 gap-6">
          {stack.map((group) => (
            <div
              key={group.title}
              className="rounded-xl border border-white/10 bg-white/5 p-6 hover:border-teal-400/30 transition"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-teal-300 text-xl">{group.icon}</span>
                <h3 className="text-xl font-bold text-teal-300">{group.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span
                    key={item.name}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-full
                               bg-[#0A2540]/40 border border-white/10 text-gray-200 text-sm
                               hover:border-teal-400/40 hover:text-teal-300 hover:bg-white/5
                               transition"
                  >
                    <span className="text-base">{item.icon}</span>
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 h-[2px] w-full bg-gradient-to-r from-transparent via-teal-300/60 to-transparent" />
    </section>
  );
};

export default Skills;
