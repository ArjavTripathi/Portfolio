import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="w-full bg-[#060f1e] text-white">
      <div className="max-w-screen-lg mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="text-gray-500 text-xs">Designed &amp; built by Arjava Tripathi</p>
          <p className="text-gray-600 text-xs mt-1">
            © {new Date().getFullYear()} · Built with React + Tailwind
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/ArjavTripathi"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg border border-white/8 text-gray-500
                       hover:border-teal-400/40 hover:text-teal-300 transition-all duration-200"
            aria-label="GitHub"
          >
            <FaGithub size={15} />
          </a>
          <a
            href="https://www.linkedin.com/in/arjava-tripathi-b11bb4259/"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg border border-white/8 text-gray-500
                       hover:border-teal-400/40 hover:text-teal-300 transition-all duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={15} />
          </a>
          <a
            href="mailto:arjavatripathi2+portfolio@gmail.com"
            className="p-2 rounded-lg border border-white/8 text-gray-500
                       hover:border-teal-400/40 hover:text-teal-300 transition-all duration-200"
            aria-label="Email"
          >
            <HiOutlineMail size={16} />
          </a>
          <a
            href="Resume.pdf"
            download="Resume.pdf"
            className="px-4 py-2 rounded-lg bg-teal-500 hover:bg-teal-400
                       text-[#060f1e] font-semibold transition-colors duration-200 text-xs"
          >
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
