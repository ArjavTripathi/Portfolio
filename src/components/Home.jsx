import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import me from '../assets/AJIcon-nobg.png';
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div 
      name="home" 
      className="h-[85vh] w-full 
                 bg-gradient-to-br from-[#0A2540] to-[#071A30] 
                 text-white flex items-center"
    >
      <div className="max-w-screen-lg mx-auto 
                      h-full w-full px-4 
                      flex flex-col md:flex-row 
                      items-center justify-between">

        {/* Left Side */}
        <div className="flex flex-col justify-center w-full md:w-1/2
                        animate-fadeInUp">
          
          <h2 className="
            text-5xl sm:text-6xl md:text-7xl font-extrabold 
            bg-gradient-to-r from-teal-300 to-teal-500 
            bg-clip-text text-transparent 
            tracking-wide leading-tight
          ">
            Hey, I'm Arjava Tripathi
          </h2>

          <p className="text-gray-300 py-6 max-w-md text-lg leading-relaxed">
            Computer Science Undergraduate from Iowa State University
          </p>

          <div>
            <Link
              to="about"
              smooth
              duration={500}
              className="
                group w-fit px-8 py-3 my-2 flex items-center 
                rounded-lg font-semibold cursor-pointer
                bg-gradient-to-r from-teal-400 to-teal-600
                hover:from-teal-500 hover:to-teal-400
                shadow-lg shadow-teal-500/20
                transition-all duration-200
              "
            >
              About Me
              <span className="group-hover:translate-x-1 duration-300">
                <HiArrowNarrowRight size={22} className="ml-3" />
              </span>
            </Link>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/3 flex justify-center 
                        animate-fadeIn">
          <div className="
            w-[260px] h-[260px] md:w-[300px] md:h-[300px]
            rounded-2xl flex items-center justify-center
            bg-[#0A2540] border border-teal-500/20
            shadow-[0_0_40px_rgba(20,184,166,0.35)]
            backdrop-blur-sm
          ">
            <img
              src={me}
              alt="AJ monogram"
              className="w-3/4 object-contain"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
