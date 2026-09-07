import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projectList = [
    {
      id: "agriai",
      title: "AgriAI – Smart Farming Assistant",
      image: "/assets/projects/agriai.png",
      description:
        "An end-to-end intelligent agricultural web platform empowering farmers with computer vision crop disease detection, Scikit-learn harvest yield prediction, live commodity market prices, and multilingual advisory.",
      techStack: [
        "React 18",
        "Flask",
        "TensorFlow",
        "Scikit-Learn",
        "PostgreSQL",
        "i18next",
      ],
      githubUrl: "https://github.com/Aniruddhasain7/Agri-ai",
      liveUrl: "https://agri-ai-5.vercel.app/",
    },
    {
      id: "nexa",
      title: "Nexa – AI Creation & Chat Platform",
      image: "/assets/projects/nexa.png",
      description:
        "A full-stack generative AI suite enabling users to chat with conversational AI, generate images from natural language prompts, and showcase discoveries in an interactive public gallery.",
      techStack: ["MongoDB", "Express", "React", "Node.js", "Gemini AI", "JWT"],
      githubUrl: "https://github.com/Aniruddhasain7/Nexa",
      liveUrl: "https://nexa-7.vercel.app/",
    },
    {
      id: "docuask",
      title: "DocuAsk – Document Intelligence RAG",
      image: "/assets/projects/docuask.png",
      description:
        "Retrieval-Augmented Generation (RAG) platform allowing users to upload complex PDF documents and converse in natural language for ultra-fast, citation-backed answers and executive summaries.",
      techStack: [
        "Python",
        "Streamlit",
        "LangChain",
        "Groq AI",
        "FAISS",
        "HuggingFace",
      ],
      githubUrl: "https://github.com/Aniruddhasain7/DocuAsk",
      liveUrl: "https://docuask.streamlit.app/",
    },
    {
      id: "fitbuddy",
      title: "FitBuddy – AI Health & Fitness Hub",
      image: "/assets/projects/fitbuddy.png",
      description:
        "Personalized fitness companion utilizing Google Gemini AI to analyze diet metrics, generate adaptive workout schedules, track macro nutrients, and deliver customized wellness recommendations.",
      techStack: [
        "React 19",
        "Vite",
        "Google Gemini AI",
        "Vanilla CSS",
        "Axios",
      ],
      githubUrl: "https://github.com/Aniruddhasain7/FitBuddy",
      liveUrl: "https://fitbuddy-ac.vercel.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 w-full max-w-[1280px] mx-auto scroll-mt-[90px]"
    >
      <div className="text-center mb-12 flex flex-col items-center w-full">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 border border-primary-red/35 text-primary-red font-mono text-xs font-bold uppercase tracking-wider mb-4 shadow-[0_0_15px_rgba(229,9,20,0.18)]">
          <span className="w-1.5 h-1.5 rounded-full bg-primary-red shadow-[0_0_10px_#e50914] animate-pulse-dot"></span>
          <span>Engineered Solutions</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3 text-center">
          Featured{" "}
          <span className="gradient-red-text drop-shadow-[0_0_20px_rgba(229,9,20,0.35)]">
            Projects
          </span>
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 max-w-[650px] mx-auto text-center leading-relaxed">
          A showcase of{" "}
          <span className="text-primary-red font-semibold">
            production-grade applications
          </span>{" "}
          built to solve concrete challenges across AI, Cloud, and Web.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-[1200px] mx-auto">
        {projectList.map((project) => (
          <div
            key={project.id}
            className="glass-card rounded-3xl overflow-hidden flex flex-col hover:-translate-y-2 transition-all duration-300 group"
          >
            <div className="relative w-full h-[200px] sm:h-[260px] overflow-hidden bg-black">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/95 via-transparent to-transparent pointer-events-none"></div>
            </div>

            <div className="p-5 sm:p-7 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-black/40 border border-primary-red/25 text-white font-mono text-xs font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-primary-red/15">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-[#e50914] via-[#ff2a2a] to-[#a80000] text-white shadow-[0_4px_20px_rgba(229,9,20,0.4)] hover:shadow-[0_6px_25px_rgba(229,9,20,0.65)] hover:-translate-y-0.5 transition-all duration-200"
                >
                  <FaExternalLinkAlt className="text-xs" />
                  <span>Live Demo</span>
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl text-xs sm:text-sm font-semibold bg-black/40 border border-primary-red/35 text-zinc-200 hover:bg-primary-red/20 hover:border-primary-red hover:text-primary-red hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(229,9,20,0.3)] transition-all duration-200"
                >
                  <FaGithub className="text-sm sm:text-base" />
                  <span>Source Code</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
