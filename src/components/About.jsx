import React from "react";
import me from '../assets/AJIcon-nobg.png'; 

const About = () => {
  return (
    <div
      name="about"
      id="about"
      className="w-full min-h-screen bg-[#0A2540] text-white flex items-center"
    >
      <div className="max-w-screen-lg mx-auto px-4 py-16 flex flex-col gap-8">

      <div className="flex justify-center sm:justify-end">
        <img src={me} alt="Profile" className="w-40 h-40 rounded-full shadow-lg" />
      </div>

        

        {/* Content Grid */}
        <div className="grid sm:grid-cols-2 gap-8">
          <div className="text-3xl sm:text-right font-bold text-teal-300">
            <p>
              ...But you can just call me AJ.
              <br />Welcome to my portfolio!
            </p>
          </div>

          <div className="text-gray-300 leading-relaxed space-y-4 text-justify">
          <p>
              I'm AJ, a software developer who loves building clean, and high-performing applications.
              I'm most passionate about designing scalable backend systems — from building REST APIs in Java to deploying services with Docker and automating CI/CD pipelines.
            </p>
            <p>
              I’m driven by curiosity and a passion for problem-solving — whether it’s designing an API, optimizing performance, 
              or learning the latest frameworks. I take pride in writing clean code and crafting meaningful digital experiences.
            </p>
            <p>
              Outside of coding, I’m into [insert hobby/fun fact]. I believe great software is built at the 
              intersection of creativity, collaboration, and code.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
