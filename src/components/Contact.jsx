import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";
import { useScrollReveal } from "../hooks/useScrollReveal";

const Contact = () => {
  const [ref, visible] = useScrollReveal();

  return (
    <section name="contact" id="contact" className="w-full bg-[#060f1e] text-white pt-28 pb-0">
      <div
        ref={ref}
        className={`max-w-screen-lg mx-auto px-6 py-20 reveal ${visible ? 'visible' : ''}`}
      >
        <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-6">

          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-teal-400/70">
            04 — Contact
          </span>

          <h2 className="text-3xl sm:text-5xl font-bold text-white leading-tight">
            Have a project in mind?<br />
            <span className="text-teal-300">Let's make it happen.</span>
          </h2>

          <p className="text-gray-400 leading-relaxed max-w-lg">
            I'm currently open to new opportunities — whether it's a full-time role,
            internship, or freelance project. My inbox is always open.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <a
              href="mailto:arjavatripathi2+portfolio@gmail.com"
              className="inline-flex items-center gap-2.5 px-7 py-3 rounded-lg
                         bg-teal-500 hover:bg-teal-400 text-[#060f1e] font-semibold
                         text-sm transition-colors duration-200"
            >
              <HiOutlineMail size={17} />
              Send me an email
            </a>
            <a
              href="https://www.linkedin.com/in/arjava-tripathi-b11bb4259/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3 rounded-lg
                         border border-white/10 text-gray-300
                         hover:border-teal-400/50 hover:text-teal-300
                         text-sm font-medium transition-all duration-200"
            >
              <FaLinkedin size={15} />
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>

      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/8 to-transparent" />
    </section>
  );
};

export default Contact;
