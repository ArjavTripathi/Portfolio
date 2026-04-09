import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0A2540] text-white">
      {/* Divider */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-teal-300/60 to-transparent" />

      <div className="max-w-screen-lg mx-auto px-4 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-gray-300 text-sm">
          © {new Date().getFullYear()} Arjava Tripathi. Built with React + Tailwind.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/ArjavTripathi"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg border border-white/10 hover:border-teal-400/40 hover:text-teal-300 transition"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg border border-white/10 hover:border-teal-400/40 hover:text-teal-300 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:arjavatripathi2+portfolio@gmail.com"
            className="p-2 rounded-lg border border-white/10 hover:border-teal-400/40 hover:text-teal-300 transition"
            aria-label="Email"
          >
            <HiOutlineMail />
          </a>

          <a
            href="/resume.pdf"
            download="Resume.pdf"
            className="px-4 py-2 rounded-lg bg-teal-500 hover:bg-teal-400 text-[#0A2540] font-semibold transition text-sm"
          >
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
