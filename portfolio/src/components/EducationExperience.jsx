import React from "react";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

const EducationExperience = () => {
  const experiences = [
    {
      company: "Edunet Foundation",
      role: "AI & ML Intern",
      period: "Jan 2026 – Feb 2026",
      type: "Internship",
      points: [
        "Architected and deployed predictive machine learning pipelines utilizing Python, Scikit-learn, Pandas, and NumPy.",
        "Engineered robust data preprocessing and feature selection pipelines, achieving enhanced model accuracy and inference speed.",
        "Conducted cross-validation and hyperparameter tuning to ensure generalization and reliability on production-grade datasets.",
      ],
      tags: ["Python", "Scikit-Learn", "Pandas", "NumPy", "ML Pipelines"],
    },
    {
      company: "Edunet Foundation",
      role: "AI & Cloud Intern",
      period: "Jul 2025 – Aug 2025",
      type: "Internship",
      points: [
        "Engineered AI-driven cloud native applications deployed on IBM Cloud infrastructure with serverless microservices.",
        "Integrated pre-trained AI/ML models into serverless cloud microservices for real-time inference and processing.",
        "Implemented secure API endpoints and optimized latency for low-overhead client communication.",
      ],
      tags: ["IBM Cloud", "Model Inference", "Cloud Services", "Cloud Architecture"],
    },
  ];

  const education = [
    {
      institution: "NSHM Knowledge Campus",
      degree: "B.Tech in Computer Science & Engineering",
      period: "Aug 2023 – Jun 2027",
      status: "Currently Pursuing",
      points: [
        "Rigorous academic curriculum with deep emphasis on Data Structures & Algorithms (DSA), Object-Oriented Programming (OOP), and Database Management Systems (DBMS).",
        "Engaged in hands-on practical labs and project building involving Computer Networks, Operating Systems, and Applied AI.",
      ],
      tags: [
        "DSA",
        "DBMS",
        "Computer Networks",
        "OOP",
        "Operating Systems",
        "Artificial Intelligence",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 w-full max-w-[1280px] mx-auto scroll-mt-[90px]"
    >
      <div className="text-center mb-12 flex flex-col items-center w-full">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 border border-primary-red/35 text-primary-red font-mono text-xs font-bold uppercase tracking-wider mb-4 shadow-[0_0_15px_rgba(229,9,20,0.18)]">
          <span className="w-1.5 h-1.5 rounded-full bg-primary-red shadow-[0_0_10px_#e50914] animate-pulse-dot"></span>
          <span>Journey & Milestones</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3 text-center">
          Experience & <span className="gradient-red-text drop-shadow-[0_0_20px_rgba(229,9,20,0.35)]">Education</span>
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 max-w-[650px] mx-auto text-center leading-relaxed">
          My academic foundation and professional{" "}
          <span className="text-primary-red font-semibold">internship milestones</span> in Artificial Intelligence & Cloud
          computing.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-[1200px] mx-auto">
        <div className="flex flex-col">
          <div className="flex items-center gap-3.5 mb-7">
            <div className="text-primary-red text-2xl">
              <FaBriefcase />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">Work Experience</h3>
          </div>

          <div className="relative pl-6 sm:pl-7 flex flex-col gap-7 before:content-[''] before:absolute before:left-1.5 before:top-4 before:bottom-4 before:w-[2px] before:bg-gradient-to-b before:from-primary-red before:to-primary-red/20 before:shadow-[0_0_8px_rgba(229,9,20,0.4)]">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[27px] sm:-left-[31px] top-6 w-3.5 h-3.5 rounded-full bg-primary-red border-2 border-black shadow-[0_0_15px_#e50914] z-10"></div>
                <div className="glass-card p-5 sm:p-7 hover:translate-x-1.5 transition-all duration-300">
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                    <h4 className="text-base sm:text-lg font-bold text-white">{exp.company}</h4>
                    <span className="inline-flex px-3 py-1 rounded-full bg-black/40 border border-primary-red/35 font-mono text-xs text-primary-red font-bold">
                      {exp.period}
                    </span>
                  </div>
                  <div className="text-sm sm:text-base font-semibold text-primary-red mb-3.5">
                    {exp.role}
                  </div>
                  <ul className="flex flex-col gap-2.5 list-none">
                    {exp.points.map((pt, i) => (
                      <li key={i} className="relative pl-4 text-xs sm:text-sm text-zinc-400 leading-relaxed before:content-['▹'] before:absolute before:left-0 before:text-primary-red before:font-bold">
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4 pt-3.5 border-t border-primary-red/15">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-black/40 border border-primary-red/20 text-zinc-300 font-mono font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col" id="education">
          <div className="flex items-center gap-3.5 mb-7">
            <div className="text-primary-red text-2xl">
              <FaGraduationCap />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">Academic Background</h3>
          </div>

          <div className="relative pl-6 sm:pl-7 flex flex-col gap-7 before:content-[''] before:absolute before:left-1.5 before:top-4 before:bottom-4 before:w-[2px] before:bg-gradient-to-b before:from-primary-red before:to-primary-red/20 before:shadow-[0_0_8px_rgba(229,9,20,0.4)]">
            {education.map((edu, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-[27px] sm:-left-[31px] top-6 w-3.5 h-3.5 rounded-full bg-primary-red border-2 border-black shadow-[0_0_15px_#e50914] z-10"></div>
                <div className="glass-card p-5 sm:p-7 hover:translate-x-1.5 transition-all duration-300">
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                    <h4 className="text-base sm:text-lg font-bold text-white">{edu.institution}</h4>
                    <span className="inline-flex px-3 py-1 rounded-full bg-black/40 border border-primary-red/35 font-mono text-xs text-primary-red font-bold">
                      {edu.period}
                    </span>
                  </div>
                  <div className="text-sm sm:text-base font-semibold text-primary-red mb-3.5">
                    {edu.degree}
                  </div>
                  <ul className="flex flex-col gap-2.5 list-none">
                    {edu.points.map((pt, i) => (
                      <li key={i} className="relative pl-4 text-xs sm:text-sm text-zinc-400 leading-relaxed before:content-['▹'] before:absolute before:left-0 before:text-primary-red before:font-bold">
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4 pt-3.5 border-t border-primary-red/15">
                    {edu.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-black/40 border border-primary-red/20 text-zinc-300 font-mono font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationExperience;
