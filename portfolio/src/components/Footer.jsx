import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 bg-black border-t border-primary-red/20 py-12 sm:py-16 px-4 sm:px-6 mt-16 sm:mt-24 w-full flex justify-center">
      <div className="max-w-[1200px] w-full mx-auto flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-5 pb-8 border-b border-primary-red/15">
          <div>
            <h3 className="text-xl font-extrabold text-white tracking-tight">
              Aniruddha<span className="text-primary-red"> Sain</span>
            </h3>
            <p className="text-zinc-500 text-xs sm:text-sm mt-1">
              Computer Science Undergraduate & AI / Web Developer
            </p>
          </div>

          <ul className="flex flex-wrap justify-center gap-5 sm:gap-6 list-none">
            <li>
              <a
                href="#about"
                className="text-zinc-400 text-xs sm:text-sm hover:text-primary-red hover:drop-shadow-[0_0_8px_#e50914] transition-all no-underline font-medium"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-zinc-400 text-xs sm:text-sm hover:text-primary-red hover:drop-shadow-[0_0_8px_#e50914] transition-all no-underline font-medium"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="text-zinc-400 text-xs sm:text-sm hover:text-primary-red hover:drop-shadow-[0_0_8px_#e50914] transition-all no-underline font-medium"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-zinc-400 text-xs sm:text-sm hover:text-primary-red hover:drop-shadow-[0_0_8px_#e50914] transition-all no-underline font-medium"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-zinc-400 text-xs sm:text-sm hover:text-primary-red hover:drop-shadow-[0_0_8px_#e50914] transition-all no-underline font-medium"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center text-center gap-3 text-zinc-500 text-xs">
          <p>© {currentYear} Aniruddha Sain. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
