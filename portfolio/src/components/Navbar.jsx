import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaCode } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = [
        "about",
        "skills",
        "experience",
        "education",
        "projects",
        "contact",
      ];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-2.5 sm:top-5 left-1/2 -translate-x-1/2 w-[calc(100%-24px)] md:w-[90%] max-w-[1200px] z-50 transition-all duration-300`}
      >
        <nav
          className={`flex items-center justify-between px-4 py-2 sm:px-6 sm:py-3 md:px-7 md:py-3 bg-[#080808]/90 backdrop-blur-xl border border-primary-red/25 rounded-full shadow-[0_10px_35px_-5px_rgba(0,0,0,0.9),0_0_20px_rgba(229,9,20,0.12)] transition-all duration-300 ${
            scrolled
              ? "bg-[#040404]/95 border-primary-red/45 shadow-[0_12px_40px_rgba(0,0,0,0.95),0_0_25px_rgba(229,9,20,0.22)] py-1.5 sm:py-2.5"
              : ""
          }`}
        >
          <a
            href="#"
            className="flex items-center gap-3 no-underline"
            onClick={closeMenu}
          >
            <div className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
              Aniruddha<span className="text-primary-red"> Sain</span>
            </div>
          </a>

          <ul className="hidden md:flex items-center gap-1.5 list-none bg-black/30 px-2 py-1 rounded-full border border-primary-red/20">
            {navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={`inline-block text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200 ${
                      isActive
                        ? "text-white bg-gradient-to-r from-[#e50914] via-[#ff2a2a] to-[#a80000] border border-white/25 shadow-[0_0_20px_rgba(229,9,20,0.55)]"
                        : "text-zinc-400 hover:text-primary-red hover:bg-primary-red/10"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3.5">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 px-4.5 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-[#e50914] via-[#ff2a2a] to-[#a80000] text-white border border-white/20 shadow-[0_4px_25px_rgba(229,9,20,0.45)] hover:-translate-y-0.5 hover:shadow-[0_8px_35px_rgba(229,9,20,0.7)] transition-all duration-300"
            >
              <HiSparkles /> Let's Talk
            </a>

            <button
              id="hamburger-btn"
              className="flex md:hidden items-center justify-center w-10 h-10 rounded-full bg-black/40 border border-primary-red/30 text-primary-red hover:bg-primary-red hover:text-white transition-all duration-200 cursor-pointer"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <FaBars />
            </button>
          </div>
        </nav>
      </header>

      <div
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-50 transition-opacity duration-300 md:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
        aria-hidden={!menuOpen}
      />

      <div
        id="mobile-drawer"
        className={`fixed top-0 right-0 h-dvh w-[min(320px,85vw)] bg-gradient-to-b from-[#070707] to-[#121212] border-l-2 border-primary-red z-50 flex flex-col p-6 shadow-[-15px_0_50px_rgba(0,0,0,0.95)] transform transition-transform duration-300 ease-out overflow-y-auto md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation Menu"
      >
        <div className="flex items-center justify-between pb-4 border-b border-primary-red/20 mb-6">
          <div className="text-lg font-extrabold text-white tracking-tight">
            Aniruddha<span className="text-primary-red"> Sain</span>
          </div>
          <button
            id="close-drawer-btn"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-black/40 border border-primary-red/30 text-primary-red hover:bg-primary-red hover:text-white transition-all cursor-pointer"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
        </div>

        <ul className="flex flex-col gap-2.5 list-none">
          {navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`flex items-center justify-between px-4 py-3 text-zinc-300 font-semibold rounded-xl bg-black/30 border border-primary-red/15 transition-all duration-200 hover:bg-primary-red/20 hover:text-white hover:border-primary-red hover:pl-5 ${
                    isActive
                      ? "text-white bg-primary-red/20 border-primary-red pl-5"
                      : ""
                  }`}
                  onClick={closeMenu}
                >
                  <span>{link.label}</span>
                  <FaCode className="opacity-40 text-xs" />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="mt-auto pt-6 border-t border-primary-red/20 flex flex-col gap-4">
          <a
            href="#contact"
            className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl font-bold bg-gradient-to-r from-[#e50914] via-[#ff2a2a] to-[#a80000] text-white border border-white/20 shadow-[0_4px_25px_rgba(229,9,20,0.45)] hover:shadow-[0_8px_35px_rgba(229,9,20,0.7)] transition-all"
            onClick={closeMenu}
          >
            <HiSparkles /> Get In Touch
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
