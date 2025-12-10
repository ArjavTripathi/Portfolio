import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-20 flex justify-between items-center px-4 bg-[#0A2540]/95 backdrop-blur-md text-white shadow-lg z-50">

      {/* Logo */}
      <h1 className="font-bold text-3xl tracking-wide text-teal-300 select-none">AJ</h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-x-10">
        {["home", "about", "skills", "projects", "contact"].map((section) => (
          <li key={section} className="hover:text-teal-300 transition duration-200 cursor-pointer">
            <Link to={section} smooth duration={500}>
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <div onClick={handleClick} className="md:hidden cursor-pointer z-10">
        {!nav ? <FaBars size={25} /> : <FaTimes size={25} />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0A2540] flex flex-col justify-center items-center text-white"
        }
      >
        {["home", "about", "skills", "projects", "contact"].map((section) => (
          <li key={section} className="py-6 text-4xl hover:text-teal-300">
            <Link onClick={handleClick} to={section} smooth duration={500}>
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          </li>
        ))}
      </ul>

      {/* Social Sidebar */}
      <div className="hidden lg:flex fixed flex-col top-[350%] left-0">
        <ul>
          <li className="w-44 h-14 flex justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300 bg-[#0A2540] border-l-4 border-teal-400 rounded-r-md">
            <a href="https://linkedin.com" className="flex justify-between items-center w-full px-4">
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>

          <li className="w-44 h-14 flex justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300 bg-[#0A2540] border-l-4 border-teal-400 rounded-r-md">
            <a href="https://github.com" className="flex justify-between items-center w-full px-4">
              GitHub <FaGithub size={30} />
            </a>
          </li>

          <li className="w-44 h-14 flex justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300 bg-[#0A2540] border-l-4 border-teal-400 rounded-r-md">
            <a href="mailto:arjavatripathi2+portfolio@gmail.com" className="flex justify-between items-center w-full px-4">
              Email <HiOutlineMail size={30} />
            </a>
          </li>

          <li className="w-44 h-14 flex justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300 bg-[#0A2540] border-l-4 border-teal-400 rounded-r-md">
            <a href="/resume.pdf" className="flex justify-between items-center w-full px-4">
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>

    </div>
  );
};

export default Navbar;
