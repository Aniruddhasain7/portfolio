import React, { useState, useEffect } from "react";
import { FaArrowRight, FaCode } from "react-icons/fa";
import { FaMicrochip } from "react-icons/fa6";
import { HiSparkles } from "react-icons/hi2";

const Hero = () => {
  const roles = [
    "AI & Machine Learning Enthusiast",
    "Full-Stack Web Developer",
    "B.Tech CSE Undergraduate",
    "Problem Solver & Tech Innovator",
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100;

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];

    const handleType = () => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(handleType, isDeleting ? 45 : typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between pt-[120px] sm:pt-[140px] pb-12 sm:pb-16 gap-9 w-full max-w-[1280px] mx-auto px-4 sm:px-6 relative z-10 scroll-mt-[90px]"
    >
      <div className="flex-1 max-w-[600px] flex flex-col items-center md:items-start text-center md:text-left">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 sm:px-4.5 sm:py-2 rounded-full bg-black/40 border border-primary-red/35 text-xs sm:text-sm font-bold text-primary-red mb-6 shadow-[0_0_15px_rgba(229,9,20,0.2)] font-mono">
          <HiSparkles className="text-primary-red" />
          <span>Innovating with Code & Intelligence</span>
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-[1.15] tracking-tight mb-5 text-white">
          <span className="text-lg sm:text-2xl font-semibold text-zinc-400 block mb-1 font-sans">
            Hello, I'm
          </span>
          <span className="gradient-red-text drop-shadow-[0_0_35px_rgba(229,9,20,0.45)] inline-block">
            Aniruddha Sain
          </span>
        </h1>

        <div className="flex items-center justify-center md:justify-start gap-2.5 text-base sm:text-xl md:text-2xl font-semibold text-zinc-400 mb-6 min-h-[2.2rem]">
          <span className="text-white border-b-2 border-primary-red pb-0.5">
            {displayText}
          </span>
          <span className="inline-block w-[3px] h-[1.3rem] bg-primary-red animate-blink shadow-[0_0_8px_#e50914]"></span>
        </div>

        <p className="text-sm sm:text-base text-zinc-400 leading-relaxed mb-8 max-w-[540px]">
          Computer Science Engineering student passionate about engineering
          scalable{" "}
          <strong className="text-primary-red font-semibold">
            AI-powered applications
          </strong>
          ,{" "}
          <strong className="text-primary-red font-semibold">
            machine learning pipelines
          </strong>
          , and seamless{" "}
          <strong className="text-primary-red font-semibold">
            modern web experiences
          </strong>{" "}
          that solve real-world problems.
        </p>

        <div className="flex items-center justify-center md:justify-start gap-3 sm:gap-4 flex-wrap mb-10 w-full">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-[#e50914] via-[#ff2a2a] to-[#a80000] text-white font-bold text-sm sm:text-[0.95rem] border border-white/20 shadow-[0_4px_25px_rgba(229,9,20,0.45)] hover:shadow-[0_8px_35px_rgba(229,9,20,0.7)] hover:-translate-y-0.5 transition-all duration-300"
          >
            <span>Explore Projects</span>
            <FaArrowRight className="text-xs" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl bg-[#0e0e0e]/90 text-zinc-200 font-semibold text-sm sm:text-[0.95rem] border border-primary-red/30 backdrop-blur-md hover:bg-primary-red/15 hover:border-primary-red hover:text-primary-red hover:-translate-y-0.5 hover:shadow-[0_6px_25px_rgba(229,9,20,0.3)] transition-all duration-300"
          >
            <span>Let's Connect</span>
          </a>
        </div>

        <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-7 border-t border-primary-red/20 w-full max-w-[520px] md:max-w-none">
          <div className="flex flex-col">
            <div className="text-2xl sm:text-3xl font-extrabold text-white leading-none mb-1.5">
              4<span className="text-primary-red drop-shadow-[0_0_15px_#e50914]">+</span>
            </div>
            <div className="text-[0.68rem] sm:text-xs font-semibold text-zinc-500 uppercase tracking-wider">
              Production Projects
            </div>
          </div>

          <div className="flex flex-col">
            <div className="text-2xl sm:text-3xl font-extrabold text-white leading-none mb-1.5">
              2<span className="text-primary-red drop-shadow-[0_0_15px_#e50914]">+</span>
            </div>
            <div className="text-[0.68rem] sm:text-xs font-semibold text-zinc-500 uppercase tracking-wider">
              AI & Cloud Internships
            </div>
          </div>

          <div className="flex flex-col">
            <div className="text-2xl sm:text-3xl font-extrabold text-white leading-none mb-1.5">
              15<span className="text-primary-red drop-shadow-[0_0_15px_#e50914]">+</span>
            </div>
            <div className="text-[0.68rem] sm:text-xs font-semibold text-zinc-500 uppercase tracking-wider">
              Core Technologies
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center relative max-w-[440px] md:max-w-[580px] w-full mt-6 md:mt-0">
        <div className="relative flex justify-center items-center w-full">
          <img
            src="/assets/profile.png"
            alt="Aniruddha Sain"
            className="w-full max-w-[280px] sm:max-w-[380px] md:max-w-[520px] h-auto object-contain drop-shadow-[0_15px_35px_rgba(0,0,0,0.8)] drop-shadow-[0_0_25px_rgba(229,9,20,0.2)] transition-transform duration-500 hover:scale-[1.02]"
          />

          <div className="flex absolute top-1 -left-1 sm:top-2.5 sm:left-0 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#0c0c0c]/90 border border-primary-red backdrop-blur-md shadow-[0_10px_25px_rgba(0,0,0,0.8),0_0_20px_rgba(229,9,20,0.3)] items-center gap-1.5 sm:gap-2 text-[0.72rem] sm:text-sm font-bold text-white z-10 animate-float-chip whitespace-nowrap select-none hover:shadow-[0_0_25px_rgba(229,9,20,0.6)] transition-shadow duration-300">
            <FaMicrochip className="text-primary-red text-xs sm:text-base flex-shrink-0" />
            <span>AI & Deep Learning</span>
          </div>

          <div className="flex absolute bottom-2 -right-1 sm:bottom-5 sm:right-0 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#0c0c0c]/90 border border-primary-red backdrop-blur-md shadow-[0_10px_25px_rgba(0,0,0,0.8),0_0_20px_rgba(229,9,20,0.3)] items-center gap-1.5 sm:gap-2 text-[0.72rem] sm:text-sm font-bold text-white z-10 animate-float-chip [animation-delay:2.5s] whitespace-nowrap select-none hover:shadow-[0_0_25px_rgba(229,9,20,0.6)] transition-shadow duration-300">
            <FaCode className="text-primary-red text-xs sm:text-base flex-shrink-0" />
            <span>Full-Stack Engineer</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
