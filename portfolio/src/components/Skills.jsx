import React from "react";
import { FaCode, FaServer, FaMicrochip } from "react-icons/fa6";

const Skills = () => {
  const skillCategories = [
    {
      category: "frontend",
      title: "Frontend Engineering",
      icon: <FaCode />,
      description:
        "Building responsive, highly interactive, and accessible web experiences.",
      skills: [
        { name: "React", logo: "/assets/skill-logos/react.svg" },
        { name: "JavaScript", logo: "/assets/skill-logos/js.svg" },
        { name: "HTML5", logo: "/assets/skill-logos/html.svg" },
        { name: "CSS3", logo: "/assets/skill-logos/css.svg" },
        { name: "Tailwind CSS", logo: "/assets/skill-logos/Tailwind CSS.svg" },
      ],
    },
    {
      category: "backend",
      title: "Backend & Cloud",
      icon: <FaServer />,
      description:
        "Architecting scalable microservices, robust REST APIs, and database systems.",
      skills: [
        { name: "Node.js", logo: "/assets/skill-logos/nodejs.svg" },
        { name: "Express.js", logo: "/assets/skill-logos/express.svg" },
        { name: "Flask", logo: "/assets/skill-logos/flask.svg" },
        { name: "PostgreSQL", logo: "/assets/skill-logos/postgresql.svg" },
        { name: "MongoDB", logo: "/assets/skill-logos/mongodb.svg" },
      ],
    },
    {
      category: "aiml",
      title: "AI & ML",
      icon: <FaMicrochip />,
      description:
        "Designing predictive machine learning pipelines, LLM agents, and cognitive systems.",
      skills: [
        { name: "Scikit-Learn", logo: "/assets/skill-logos/scikitlearn.svg" },
        { name: "Pandas", logo: "/assets/skill-logos/pandas.svg" },
        { name: "NumPy", logo: "/assets/skill-logos/numpy.svg" },
        { name: "Hugging Face", logo: "/assets/skill-logos/huggingface.svg" },
        { name: "LangChain", logo: "/assets/skill-logos/Langchain.svg" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 w-full max-w-[1360px] mx-auto scroll-mt-[90px]"
    >
      <div className="text-center mb-12 flex flex-col items-center w-full">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 border border-primary-red/35 text-primary-red font-mono text-xs font-bold uppercase tracking-wider mb-4 shadow-[0_0_15px_rgba(229,9,20,0.18)]">
          <span className="w-1.5 h-1.5 rounded-full bg-primary-red shadow-[0_0_10px_#e50914] animate-pulse-dot"></span>
          <span>Technical Toolkit</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3 text-center">
          Skills &{" "}
          <span className="gradient-red-text drop-shadow-[0_0_20px_rgba(229,9,20,0.35)]">
            Expertise
          </span>
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 max-w-[650px] mx-auto text-center leading-relaxed">
          A comprehensive suite of{" "}
          <span className="text-primary-red font-semibold">
            technologies, libraries, and frameworks
          </span>{" "}
          I leverage to build robust software.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 w-full max-w-[1340px] mx-auto">
        {skillCategories.map((category, idx) => (
          <div
            key={category.title}
            className={`glass-card p-5 sm:p-7 lg:p-8 flex flex-col min-h-[380px] sm:min-h-[410px] ${
              idx === 2 ? "md:col-span-2 lg:col-span-1" : ""
            }`}
          >
            <div className="flex items-start gap-4 mb-6 pb-5 border-b border-primary-red/15">
              <div className="text-primary-red text-2xl sm:text-3xl flex-shrink-0 pt-0.5">
                {category.icon}
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-snug">
                  {category.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1.5 leading-relaxed">
                  {category.description}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:gap-3 mt-auto">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="group flex items-center gap-2.5 sm:gap-3 px-2.5 sm:px-3 py-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-primary-red/40 hover:bg-primary-red/10 hover:-translate-y-1 transition-all duration-300 cursor-pointer select-none"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 p-1.5 rounded-lg bg-black/60 border border-white/10 flex-shrink-0 flex items-center justify-center transition-all duration-300">
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      loading="lazy"
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-115"
                    />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-zinc-300 group-hover:text-white transition-colors duration-200 leading-snug">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
