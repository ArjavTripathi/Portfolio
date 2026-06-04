import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { Link } from 'react-scroll';

const sections = ['home', 'about', 'skills', 'projects', 'contact'];

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observers = [];

    sections.forEach((id) => {
      const el = document.getElementById(id) || document.querySelector(`[name="${id}"]`);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: '-40% 0px -55% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const closeNav = () => setNav(false);

  return (
    <header
      className={`fixed w-full h-16 flex justify-between items-center px-6 z-50 transition-all duration-300
        ${scrolled
          ? 'bg-[#060f1e]/95 backdrop-blur-md border-b border-white/5 shadow-lg'
          : 'bg-transparent'
        }`}
    >
      {/* Logo */}
      <Link
        to="home"
        smooth
        duration={500}
        className="font-bold text-2xl tracking-widest text-teal-300 select-none cursor-pointer"
      >
        AJ
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-8">
        <ul className="flex gap-8">
          {sections.map((s) => (
            <li key={s}>
              <Link
                to={s}
                smooth
                duration={500}
                className={`text-sm font-medium cursor-pointer transition-colors duration-200
                  ${activeSection === s ? 'text-teal-300' : 'text-gray-400 hover:text-white'}`}
              >
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href="Resume.pdf"
          download="Resume.pdf"
          className="px-4 py-1.5 rounded border border-teal-400/40 text-teal-300 text-sm
                     hover:bg-teal-400/10 transition-colors duration-200"
        >
          Resume
        </a>
      </nav>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setNav(!nav)}
        className="md:hidden text-white z-50"
        aria-label="Toggle menu"
      >
        {nav ? <FaTimes size={22} /> : <FaBars size={22} />}
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#060f1e]/98 backdrop-blur-sm flex flex-col justify-center items-center
                    transition-all duration-300 md:hidden
                    ${nav ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <ul className="flex flex-col items-center gap-8">
          {sections.map((s) => (
            <li key={s}>
              <Link
                to={s}
                smooth
                duration={500}
                onClick={closeNav}
                className="text-3xl font-semibold text-gray-200 hover:text-teal-300 transition-colors duration-200 cursor-pointer"
              >
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="Resume.pdf"
              download="Resume.pdf"
              onClick={closeNav}
              className="mt-4 px-6 py-2 rounded border border-teal-400/40 text-teal-300 text-lg
                         hover:bg-teal-400/10 transition-colors duration-200"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>

      {/* Social Sidebar */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul className="flex flex-col gap-1">
          {[
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/arjava-tripathi-b11bb4259/', icon: <FaLinkedin size={20} /> },
            { label: 'GitHub',   href: 'https://github.com/ArjavTripathi',                      icon: <FaGithub size={20} /> },
            { label: 'Email',    href: 'mailto:arjavatripathi2+portfolio@gmail.com',              icon: <HiOutlineMail size={20} /> },
          ].map(({ label, href, icon }) => (
            <li key={label}
              className="w-36 h-12 flex justify-between items-center ml-[-96px] hover:ml-0
                         duration-300 ease-in-out bg-[#0d1f3c] border-l-2 border-teal-400/60
                         rounded-r-lg px-4 text-sm text-gray-300 hover:text-teal-300"
            >
              <a href={href} target={label !== 'Email' ? '_blank' : undefined} rel="noreferrer"
                className="flex justify-between items-center w-full gap-2">
                {label} {icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
