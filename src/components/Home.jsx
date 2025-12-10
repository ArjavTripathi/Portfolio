import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import me from '../assets/me.png';
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-[#0A2540] text-white">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">

        {/* Left Side */}
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-extrabold bg-gradient-to-r from-teal-300 to-teal-500 bg-clip-text text-transparent">
            Hey, I'm Arjava Tripathi
          </h2>

          <p className="text-gray-300 py-4 max-w-md">
            Computer Science Undergraduate from Iowa State University
          </p>

          <div>
            <Link
              to="about"
              smooth
              duration={500}
              className="group w-fit px-6 py-3 my-2 flex items-center rounded-md font-semibold cursor-pointer bg-teal-600 hover:bg-teal-500 text-white transition"
            >
              About Me
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight size={25} className="ml-3" />
              </span>
            </Link>
          </div>
        </div>

        {/* Right Side */}
        <div>
          <img
            src={me}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full shadow-[0_0_30px_rgba(0,200,180,0.3)]"
          />
        </div>

      </div>
    </div>
  );
};

export default Home;
