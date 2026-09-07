import React, { useState, useEffect } from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import EducationExperience from "./components/EducationExperience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { FaArrowUp } from "react-icons/fa";

function App() {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center w-full overflow-x-hidden bg-black text-[#f8fafc]">
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-black">
        <div
          className="absolute w-[650px] h-[650px] rounded-full -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 pointer-events-none"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            background:
              "radial-gradient(circle, rgba(229, 9, 20, 0.12) 0%, rgba(229, 9, 20, 0) 70%)",
          }}
        />
        <div
          className="absolute -top-[120px] -right-[100px] w-[600px] h-[600px] rounded-full blur-[60px] animate-float-slow"
          style={{
            background:
              "radial-gradient(circle, rgba(229, 9, 20, 0.16) 0%, rgba(229, 9, 20, 0) 65%)",
          }}
        />
        <div
          className="absolute top-[45%] -left-[150px] w-[650px] h-[650px] rounded-full blur-[70px] animate-float-slow-rev"
          style={{
            background:
              "radial-gradient(circle, rgba(229, 9, 20, 0.13) 0%, rgba(229, 9, 20, 0) 65%)",
          }}
        />
        <div className="cyber-grid" />
      </div>

      <Navbar />
      <main className="w-full flex flex-col items-center justify-center relative z-10">
        <Hero />
        <About />
        <Skills />
        <EducationExperience />
        <Projects />
        <Contact />
      </main>
      <Footer />

      <button
        type="button"
        className={`fixed bottom-[30px] right-5 md:left-[30px] md:right-auto w-11 h-11 md:w-12 md:h-12 rounded-full bg-[#0a0a0a]/90 border border-primary-red text-primary-red flex items-center justify-center cursor-pointer z-50 backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.85)] transition-all duration-300 hover:bg-primary-red hover:text-white hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(229,9,20,0.5)] ${
          showBackToTop
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-5 pointer-events-none"
        }`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
        title="Scroll to top"
      >
        <FaArrowUp />
      </button>
    </div>
  );
}

export default App;
