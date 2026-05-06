import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  FaDownload,
  FaEye,
  FaGraduationCap,
  FaBriefcase,
  FaCode,
  FaServer,
  FaTools,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
  FaPaperPlane,
  FaLaptopCode,
} from "react-icons/fa";
import "./index.css";

function App() {
  const [activeDot, setActiveDot] = React.useState(0);
  const projectsGridRef = useRef(null);
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    const handleAnchorClick = (e) => {
      const href = e.currentTarget.getAttribute("href");
      if (href.startsWith("#")) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    };
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => link.addEventListener("click", handleAnchorClick));
    const handleScroll = () => {
      if (!projectsGridRef.current) return;
      const container = projectsGridRef.current;
      const cards = container.querySelectorAll(".project-card");
      let containerCenter = container.scrollLeft + container.offsetWidth / 2;
      let closestIndex = 0;
      let closestDistance = Infinity;
      cards.forEach((card, index) => {
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const distance = Math.abs(containerCenter - cardCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });
      setActiveDot(closestIndex);
    };
    const container = projectsGridRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }
    return () => {
      links.forEach((link) =>
        link.removeEventListener("click", handleAnchorClick),
      );
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);
  const scrollToProject = (index) => {
    if (projectsGridRef.current) {
      const cards = projectsGridRef.current.querySelectorAll(".project-card");
      if (cards[index]) {
        const cardWidth = cards[0].offsetWidth + 35;
        projectsGridRef.current.scrollTo({
          left: index * cardWidth,
          behavior: "smooth",
        });
      }
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
      )
      .then(() => {
        alert("Message sent successfully ✅");
        e.target.reset();
      })
      .catch((error) => {
        console.error(error);
        alert("Failed ❌");
      });
  };
  return (
    <div className="App">
      <nav>
        <h1 className="logo">
          Aniruddha<span> Sain</span>
        </h1>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Connect</a>
          </li>
        </ul>
      </nav>
      <section className="hero">
        <div className="hero-content">
          <h1>Hello, </h1>
          <h1>
            I'm <span>Aniruddha</span>{" "}
          </h1>
          <h2>AI | Web Developer | Student</h2>
          <div className="hero-btns">
            <a href="#projects" className="btn">
              <FaEye style={{ marginRight: "8px" }} /> View My Work
            </a>
            <a href="/assets/CV.pdf" className="btn" target="_blank">
              <FaDownload style={{ marginRight: "8px" }} /> Download CV
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src="/assets/profile-pic_1.png" alt="Profile Picture" />
        </div>
      </section>
      <section id="about" className="about">
        <div className="about-container">
          <div className="about-image">
            <img src="/assets/about-me.png" alt="About Me" />
          </div>
          <div className="about-content">
            <h2>About Me</h2>
            <p>
              I am a Computer Science and Engineering undergraduate with a
              strong passion for Artificial Intelligence, Machine Learning, and
              Web Development. I enjoy building real-world, scalable
              applications that solve practical problems.
            </p>
            <p>
              With a solid foundation in programming and data-driven
              technologies, I continuously strive to enhance my technical
              expertise and problem-solving abilities. I am driven by curiosity,
              innovation, and the desire to create impactful digital solutions.
            </p>
          </div>
        </div>
      </section>
      <section className="edu-exp">
        <div className="edu-exp-container">
          <div id="education" className="edu-left">
            <h2>
              <FaGraduationCap style={{ marginRight: "12px" }} /> Education
            </h2>
            <div className="card">
              <h3>NSHM Knowledge Campus</h3>
              <div className="role">
                <h4>B.Tech in Computer Science & Engineering</h4>
                <div className="course-duration">Aug 2023- Jun 2027</div>
                <ul className="exp-list">
                  <li>Actively involved in academic and technical projects.</li>
                  <li>Focused on developing strong problem-solving skills.</li>
                </ul>
              </div>
            </div>
          </div>
          <div id="experience" className="exp-right">
            <h2>
              <FaBriefcase style={{ marginRight: "12px" }} /> Experience
            </h2>
            <div className="experience-card">
              <h3 className="company">Edunet Foundation</h3>
              <div className="role">
                <h4>AI & Cloud Intern</h4>
                <p className="duration">Jul 2025 – Aug 2025</p>
                <ul className="exp-list">
                  <li>
                    Worked on AI-driven solutions and cloud-based applications
                    using IBM Cloud.
                  </li>
                  <li>
                    Gained hands-on experience in cloud services, model
                    deployment, and project workflows.
                  </li>
                </ul>
              </div>
              <div className="role">
                <h4>AI & ML Intern</h4>
                <p className="duration">Jan 2026 – Feb 2026</p>
                <ul className="exp-list">
                  <li>
                    Built and trained machine learning models using Python.
                  </li>
                  <li>Performed data preprocessing and feature engineering.</li>
                  <li>Worked with Pandas, NumPy, and Scikit-learn.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="skills">
        <h2>
          <FaLaptopCode style={{ marginRight: "15px" }} />
          Technical Skills
        </h2>
        <div className="skills-container">
          <div className="skill-box">
            <h3>
              <FaCode style={{ marginRight: "10px", color: "#ff0000" }} />{" "}
              Frontend
            </h3>
            <div className="skills-grid">
              <div>
                <img src="/assets/skill-logos/html.svg" alt="HTML" />
                <p>HTML</p>
              </div>
              <div>
                <img src="/assets/skill-logos/css.svg" alt="CSS" />
                <p>CSS</p>
              </div>
              <div>
                <img src="/assets/skill-logos/js.svg" alt="JavaScript" />
                <p>JavaScript</p>
              </div>
              <div>
                <img src="/assets/skill-logos/react.svg" alt="React" />
                <p>React</p>
              </div>
              <div>
                <img
                  src="/assets/skill-logos/Tailwind CSS.svg"
                  alt="Tailwind CSS"
                />
                <p>Tailwind CSS</p>
              </div>
            </div>
          </div>
          <div className="skill-box">
            <h3>
              <FaServer style={{ marginRight: "10px", color: "#ff0000" }} />{" "}
              Backend
            </h3>
            <div className="skills-grid">
              <div>
                <img src="/assets/skill-logos/nodejs.svg" alt="Node.js" />
                <p>Node.js</p>
              </div>
              <div>
                <img src="/assets/skill-logos/express.svg" alt="Express" />
                <p>Express</p>
              </div>
              <div>
                <img src="/assets/skill-logos/flask.svg" alt="Flask" />
                <p>Flask</p>
              </div>
              <div>
                <img src="/assets/skill-logos/mysql.svg" alt="MySQL" />
                <p>MySQL</p>
              </div>
              <div>
                <img src="/assets/skill-logos/mongodb.svg" alt="MongoDB" />
                <p>MongoDB</p>
              </div>
            </div>
          </div>
          <div className="skill-box">
            <h3>
              <FaTools style={{ marginRight: "10px", color: "#ff0000" }} />{" "}
              Tools & Platforms
            </h3>
            <div className="skills-grid">
              <div>
                <img src="/assets/skill-logos/git.svg" alt="Git" />
                <p>Git</p>
              </div>
              <div>
                <img src="/assets/skill-logos/github.png" alt="GitHub" />
                <p>GitHub</p>
              </div>
              <div>
                <img src="/assets/skill-logos/vscode.svg" alt="VS Code" />
                <p>VS Code</p>
              </div>
              <div>
                <img
                  src="/assets/skill-logos/googlecolab-original.svg"
                  alt="Google Colab"
                />
                <p>Google Colab</p>
              </div>
              <div>
                <img src="/assets/skill-logos/Streamlit.svg" alt="Streamlit" />
                <p>Streamlit</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className="projects">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Explore my recent work where <span>innovation</span> meets{" "}
          <span>execution</span>
        </p>
        <div className="projects-wrapper">
          <div className="project-controls">
            <button
              onClick={() => {
                if (projectsGridRef.current) {
                  projectsGridRef.current.scrollBy({
                    left: -400,
                    behavior: "smooth",
                  });
                }
              }}
            >
              ❮
            </button>
            <button
              onClick={() => {
                if (projectsGridRef.current) {
                  projectsGridRef.current.scrollBy({
                    left: 400,
                    behavior: "smooth",
                  });
                }
              }}
            >
              ❯
            </button>
          </div>
          <div className="projects-grid" ref={projectsGridRef}>
            <div className="project-card">
              <img
                src="/assets/projects/myra.png"
                alt="Myra AI Voice Assistant"
              />
              <div className="project-content">
                <h3>Myra — AI Voice Assistant</h3>
                <p>
                  A voice-activated virtual assistant that connects the Web
                  Speech API with Gemini AI to process spoken commands and
                  perform automated browser tasks.
                </p>
                <div className="tech-stack">
                  <span>React 19</span>
                  <span>Vite 8</span>
                  <span>Google Gemini AI</span>
                  <span>Web Speech API</span>
                </div>
                <div className="project-links">
                  <a
                    href="https://github.com/Aniruddhasain7/Myra-Voice-Assistant"
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://myra-ai-va.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </div>
            <div className="project-card">
              <img src="/assets/projects/nexa.png" alt="Nexa" />
              <div className="project-content">
                <h3>Nexa</h3>
                <p>
                  A full-stack AI application that allows users to chat with AI,
                  generate images from prompts, and explore a community of
                  AI-generated content.
                </p>
                <div className="tech-stack">
                  <span>MongoDB</span>
                  <span>Express</span>
                  <span>React</span>
                  <span>Node.js</span>
                  <span>Google Gemini AI</span>
                </div>
                <div className="project-links">
                  <a
                    href="https://github.com/Aniruddhasain7/Nexa"
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://nexa-7.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </div>
            <div className="project-card">
              <img src="/assets/projects/exp.png" alt="Expense Tracker" />
              <div className="project-content">
                <h3>Expense Tracker</h3>
                <p>
                  A full-stack MERN app to track income, categorize expenses,
                  and visualize financial habits with interactive charts.
                </p>
                <div className="tech-stack">
                  <span>MongoDB</span>
                  <span>Express</span>
                  <span>React</span>
                  <span>Node.js</span>
                  <span>Tailwind CSS</span>
                </div>
                <div className="project-links">
                  <a
                    href="https://github.com/Aniruddhasain7/Expense-Tracker"
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://expense-tracker-skxx.onrender.com"
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </div>
            <div className="project-card">
              <img
                src="/assets/projects/crop.png"
                alt="AI Crop Recommendation System"
              />
              <div className="project-content">
                <h3>Crop Recommendation System</h3>
                <p>
                  An intelligent machine learning–based system that recommends
                  the most suitable crop based on soil nutrients and
                  environmental conditions.
                </p>
                <div className="tech-stack">
                  <span>Python</span>
                  <span>Streamlit</span>
                  <span>Pandas</span>
                  <span>Numpy</span>
                  <span>Matplotlib</span>
                  <span>Seaborn</span>
                </div>
                <div className="project-links">
                  <a
                    href="https://github.com/Aniruddhasain7/Crop-Recommendation-System"
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://crop-recommendation-sy.streamlit.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </div>
            <div className="project-card">
              <img src="/assets/projects/weather.png" alt="Weather App" />
              <div className="project-content">
                <h3>Weather App</h3>
                <p>
                  A simple and responsive that fetches real-time weather data
                  for any city, showing temperature, humidity, and wind speed.
                </p>
                <div className="tech-stack">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                </div>
                <div className="project-links">
                  <a
                    href="https://github.com/Aniruddhasain7/Weather-App"
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://my-weather-app-7.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="project-dots">
            {[0, 1, 2, 3, 4].map((index) => (
              <span
                key={index}
                className={`dot ${activeDot === index ? "active" : ""}`}
                onClick={() => scrollToProject(index)}
              ></span>
            ))}
          </div>
        </div>
      </section>
      <section id="contact" className="contact">
        <h2 className="contact-title">
          Get In <span>Touch</span>
        </h2>
        <div className="contact-line"></div>
        <div className="contact-container">
          <div className="contact-left">
            <div className="contact-card">
              <h3>Let's Connect</h3>
              <p>Let’s connect and build something great together.</p>
            </div>
            <div className="contact-card contact-info">
              <div className="icon-box">
                <FaEnvelope style={{ fontSize: "1.2rem" }} />
              </div>
              <div>
                <h4>Email</h4>
                <a href="mailto:aniruddhasain315@gmail.com">
                  aniruddhasain315@gmail.com
                </a>
              </div>
            </div>
            <div className="contact-card contact-info">
              <div className="icon-box">
                <FaMapMarkerAlt style={{ fontSize: "1.2rem" }} />
              </div>
              <div>
                <h4>Location</h4>
                <p className="location">Durgapur, West Bengal</p>
              </div>
            </div>
            <div className="social-icons">
              <a
                href="https://github.com/Aniruddhasain7"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/aniruddha-sain-706220280"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://x.com/SainAniruddha"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
          <div className="contact-right">
            <form
              id="contact-form"
              className="contact-form"
              onSubmit={handleSubmit}
            >
              <label>Name</label>
              <input
                type="text"
                placeholder="Your name"
                name="user_name"
                required
              />
              <label>Email</label>
              <input
                type="email"
                placeholder="Your email"
                name="user_email"
                required
              />
              <label>Subject</label>
              <input
                type="text"
                placeholder="Your subject"
                name="user_subject"
              />
              <label>Message</label>
              <textarea
                rows="4"
                placeholder="Your message"
                name="user_message"
                required
              ></textarea>
              <button type="submit" className="send-btn">
                Send Message{" "}
                <FaPaperPlane
                  style={{ marginLeft: "10px", fontSize: "0.9rem" }}
                />
              </button>
            </form>
          </div>
        </div>
      </section>
      <footer>
        <p>© 2026 Aniruddha. All rights reserved.</p>
      </footer>
    </div>
  );
}
export default App;
