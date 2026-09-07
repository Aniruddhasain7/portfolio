import React from "react";
import {
  FaGraduationCap,
  FaMapMarkerAlt,
  FaLightbulb,
  FaCompass,
  FaCode,
  FaRocket,
} from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 w-full max-w-[1280px] mx-auto scroll-mt-[90px]"
    >
      <div className="text-center mb-12 flex flex-col items-center w-full">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 border border-primary-red/35 text-primary-red font-mono text-xs font-bold uppercase tracking-wider mb-4 shadow-[0_0_15px_rgba(229,9,20,0.18)]">
          <span className="w-1.5 h-1.5 rounded-full bg-primary-red shadow-[0_0_10px_#e50914] animate-pulse-dot"></span>
          <span>About Me</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3 text-center">
          Who I <span className="gradient-red-text drop-shadow-[0_0_20px_rgba(229,9,20,0.35)]">Am</span>
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 max-w-[650px] mx-auto text-center leading-relaxed">
          A quick look into my background, interests, and what I enjoy building.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-6 w-full max-w-[1200px] mx-auto">
        <div className="glass-card md:row-span-2 p-6 sm:p-8 md:p-10 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-5">
              Hi, I'm{" "}
              <span className="gradient-red-text drop-shadow-[0_0_15px_rgba(229,9,20,0.35)]">
                Aniruddha Sain
              </span>
            </h3>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-5">
              I am a <strong className="text-zinc-200 font-semibold">Computer Science & Engineering</strong> student at{" "}
              <strong className="text-zinc-200 font-semibold">NSHM Knowledge Campus</strong> (2023–2027) based in Durgapur, West Bengal.
            </p>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-5">
              I enjoy building practical software that solves real problems. Whether it is 
              creating intelligent AI-driven applications or developing clean, responsive 
              web experiences, I love turning ideas into working digital products.
            </p>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-5">
              I focus on writing clean, readable code and constantly learning new things to improve 
              as a developer.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5 mt-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-black/40 border border-primary-red/30 text-xs sm:text-sm text-zinc-200 font-semibold transition-all hover:bg-primary-red/15 hover:border-primary-red">
              <FaGraduationCap className="text-primary-red" />
              <span>B.Tech in CSE (2023 – 2027)</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-black/40 border border-primary-red/30 text-xs sm:text-sm text-zinc-200 font-semibold transition-all hover:bg-primary-red/15 hover:border-primary-red">
              <FaMapMarkerAlt className="text-primary-red" />
              <span>Durgapur, India</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-black/40 border border-primary-red/30 text-xs sm:text-sm text-zinc-200 font-semibold transition-all hover:bg-primary-red/15 hover:border-primary-red">
              <FaCode className="text-primary-red" />
              <span>Web & AI Developer</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-black/40 border border-primary-red/30 text-xs sm:text-sm text-zinc-200 font-semibold transition-all hover:bg-primary-red/15 hover:border-primary-red">
              <FaRocket className="text-primary-red" />
              <span>Open to Opportunities</span>
            </div>
          </div>
        </div>

        <div className="glass-card p-6 sm:p-8 flex flex-col justify-center">
          <div className="text-primary-red text-2xl mb-4">
            <FaLightbulb />
          </div>
          <h4 className="text-lg sm:text-xl font-bold text-white mb-2.5">
            What I Care About
          </h4>
          <p className="text-zinc-400 text-sm sm:text-[0.95rem] leading-relaxed">
            Writing clean, maintainable code, keeping things simple, and building software that people actually enjoy using.
          </p>
          <a
            href="#experience"
            className="inline-flex items-center gap-1.5 text-primary-red text-sm font-bold no-underline mt-4 transition-all hover:gap-2.5 hover:drop-shadow-[0_0_10px_#e50914]"
          >
            My Journey →
          </a>
        </div>

        <div className="glass-card p-6 sm:p-8 flex flex-col justify-center">
          <div className="text-primary-red text-2xl mb-4">
            <FaCompass />
          </div>
          <h4 className="text-lg sm:text-xl font-bold text-white mb-2.5">
            Continuous Learning
          </h4>
          <p className="text-zinc-400 text-sm sm:text-[0.95rem] leading-relaxed">
            Always curious about new technologies, experimenting with personal projects, and growing with every challenge.
          </p>
          <a
            href="#projects"
            className="inline-flex items-center gap-1.5 text-primary-red text-sm font-bold no-underline mt-4 transition-all hover:gap-2.5 hover:drop-shadow-[0_0_10px_#e50914]"
          >
            View Projects →
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
