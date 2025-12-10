import React from "react";

const About = () => {
  return (
    <div
      name="about"
      id="about"
      className="w-full min-h-screen bg-[#0A2540] text-white flex items-center"
    >
      <div className="max-w-screen-lg mx-auto px-4 py-16 flex flex-col gap-8">

        {/* Title */}
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-teal-400">
            About
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid sm:grid-cols-2 gap-8">
          <div className="text-3xl sm:text-right font-bold text-teal-300">
            <p>
              Hi, I'm AJ. Nice to meet you.  
              <br />Welcome to my portfolio.
            </p>
          </div>

          <div className="text-gray-300 leading-relaxed">
            <p>
              I'm a software developer focused on building scalable, clean, and
              efficient applications. My work spans backend development,
              mobile applications, and cloud infrastructure.  
            </p>
            <br />
            <p>
              I enjoy solving real-world problems, learning new technologies,
              and creating meaningful products. Whether I'm engineering a
              feature, designing an API, or improving performance, I bring
              curiosity, focus, and craftsmanship to the work I do.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
