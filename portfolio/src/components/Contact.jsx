import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaPaperPlane,
  FaCheck,
  FaCopy,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    if (import.meta.env.VITE_EMAILJS_PUBLIC_KEY) {
      emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    }
  }, []);

  const showToast = (message, type = "success") => {
    setToastMessage({ message, type });
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleCopyEmail = () => {
    const email = "aniruddhasain315@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      showToast("Email address copied to clipboard! 📋", "success");
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    if (!serviceId || !templateId) {
      setTimeout(() => {
        setSubmitting(false);
        showToast("Message recorded! Thanks for reaching out.", "success");
        e.target.reset();
      }, 800);
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, e.target)
      .then(() => {
        setSubmitting(false);
        showToast("Message sent successfully! 🚀", "success");
        e.target.reset();
      })
      .catch((error) => {
        console.error("Email send error:", error);
        setSubmitting(false);
        showToast("Failed to send message. Please try direct email.", "error");
      });
  };

  return (
    <section
      id="contact"
      className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 w-full max-w-[1280px] mx-auto scroll-mt-[90px]"
    >
      <div className="text-center mb-12 flex flex-col items-center w-full">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 border border-primary-red/35 text-primary-red font-mono text-xs font-bold uppercase tracking-wider mb-4 shadow-[0_0_15px_rgba(229,9,20,0.18)]">
          <span className="w-1.5 h-1.5 rounded-full bg-primary-red shadow-[0_0_10px_#e50914] animate-pulse-dot"></span>
          <span>Start a Conversation</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3 text-center">
          Get In <span className="gradient-red-text drop-shadow-[0_0_20px_rgba(229,9,20,0.35)]">Touch</span>
        </h2>
        <p className="text-sm sm:text-base text-zinc-400 max-w-[650px] mx-auto text-center leading-relaxed">
          Have an opportunity, collaboration idea, or just want to talk tech?
          <span className="text-primary-red font-semibold"> I'd love to hear from you!</span>
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 sm:gap-10 items-start w-full max-w-[1200px] mx-auto">
        <div className="flex flex-col gap-5">
          <div className="glass-card p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
              Let's Build Something{" "}
              <span className="gradient-red-text drop-shadow-[0_0_15px_rgba(229,9,20,0.35)]">
                Extraordinary
              </span>
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
              I am open to full-stack engineering internships, AI/ML research
              collaborations, freelance projects, and open-source contributions.
            </p>
          </div>

          <div className="glass-card p-4 sm:p-5 flex items-center justify-between hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="text-primary-red text-xl sm:text-2xl">
                <FaEnvelope />
              </div>
              <div>
                <h4 className="text-[0.72rem] font-bold uppercase tracking-wider text-zinc-500 mb-0.5">
                  Direct Email
                </h4>
                <a
                  href="mailto:aniruddhasain315@gmail.com"
                  className="text-white font-semibold text-xs sm:text-sm hover:text-primary-red hover:drop-shadow-[0_0_8px_#e50914] transition-all break-all"
                >
                  aniruddhasain315@gmail.com
                </a>
              </div>
            </div>
            <button
              type="button"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary-red/10 border border-primary-red/30 text-primary-red text-xs font-bold hover:bg-primary-red hover:text-white transition-all cursor-pointer flex-shrink-0 ml-2"
              onClick={handleCopyEmail}
              title="Copy Email"
            >
              {copied ? (
                <FaCheck className="text-emerald-400" />
              ) : (
                <FaCopy />
              )}
              <span>{copied ? "Copied" : "Copy"}</span>
            </button>
          </div>

          <div className="glass-card p-4 sm:p-5 flex items-center justify-between hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="text-primary-red text-xl sm:text-2xl">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4 className="text-[0.72rem] font-bold uppercase tracking-wider text-zinc-500 mb-0.5">
                  Location
                </h4>
                <p className="text-white font-semibold text-xs sm:text-sm">
                  Durgapur, West Bengal, India
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
            <a
              href="https://github.com/Aniruddhasain7"
              target="_blank"
              rel="noreferrer"
              className="glass-card p-3.5 sm:p-4.5 flex flex-col items-center justify-center gap-2 text-zinc-400 no-underline hover:text-white hover:border-primary-red hover:-translate-y-1 transition-all group"
              aria-label="GitHub Profile"
            >
              <FaGithub className="text-primary-red text-xl group-hover:scale-110 transition-transform" />
              <span className="text-xs font-semibold">GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/aniruddha-sain-706220280"
              target="_blank"
              rel="noreferrer"
              className="glass-card p-3.5 sm:p-4.5 flex flex-col items-center justify-center gap-2 text-zinc-400 no-underline hover:text-white hover:border-primary-red hover:-translate-y-1 transition-all group"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="text-primary-red text-xl group-hover:scale-110 transition-transform" />
              <span className="text-xs font-semibold">LinkedIn</span>
            </a>

            <a
              href="https://x.com/SainAniruddha"
              target="_blank"
              rel="noreferrer"
              className="glass-card p-3.5 sm:p-4.5 flex flex-col items-center justify-center gap-2 text-zinc-400 no-underline hover:text-white hover:border-primary-red hover:-translate-y-1 transition-all group"
              aria-label="Twitter Profile"
            >
              <FaTwitter className="text-primary-red text-xl group-hover:scale-110 transition-transform" />
              <span className="text-xs font-semibold">Twitter</span>
            </a>
          </div>
        </div>

        <div className="glass-card p-6 sm:p-9">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6">Send a Message</h3>
          <form id="contact-form" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="user_name" className="text-xs sm:text-sm font-semibold text-zinc-300">
                  Name
                </label>
                <input
                  id="user_name"
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#080808]/90 border border-primary-red/20 text-white text-sm outline-none transition-all duration-200 focus:border-primary-red focus:shadow-[0_0_20px_rgba(229,9,20,0.4)] focus:bg-[#0c0c0c]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="user_email" className="text-xs sm:text-sm font-semibold text-zinc-300">
                  Email
                </label>
                <input
                  id="user_email"
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#080808]/90 border border-primary-red/20 text-white text-sm outline-none transition-all duration-200 focus:border-primary-red focus:shadow-[0_0_20px_rgba(229,9,20,0.4)] focus:bg-[#0c0c0c]"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 mb-4">
              <label htmlFor="user_subject" className="text-xs sm:text-sm font-semibold text-zinc-300">
                Subject
              </label>
              <input
                id="user_subject"
                type="text"
                name="user_subject"
                placeholder="Your Subject"
                className="w-full px-4 py-3 rounded-xl bg-[#080808]/90 border border-primary-red/20 text-white text-sm outline-none transition-all duration-200 focus:border-primary-red focus:shadow-[0_0_20px_rgba(229,9,20,0.4)] focus:bg-[#0c0c0c]"
              />
            </div>

            <div className="flex flex-col gap-2 mb-6">
              <label htmlFor="user_message" className="text-xs sm:text-sm font-semibold text-zinc-300">
                Message
              </label>
              <textarea
                id="user_message"
                name="user_message"
                placeholder="Write your message here..."
                required
                rows={4}
                className="w-full px-4 py-3 rounded-xl bg-[#080808]/90 border border-primary-red/20 text-white text-sm outline-none transition-all duration-200 focus:border-primary-red focus:shadow-[0_0_20px_rgba(229,9,20,0.4)] focus:bg-[#0c0c0c] resize-y min-h-[120px]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#e50914] via-[#ff2a2a] to-[#a80000] text-white font-bold text-sm sm:text-base border-none cursor-pointer flex items-center justify-center gap-2.5 shadow-[0_4px_25px_rgba(229,9,20,0.45)] hover:shadow-[0_8px_35px_rgba(229,9,20,0.7)] hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              disabled={submitting}
            >
              <span>{submitting ? "Transmitting..." : "Send Message"}</span>
              <FaPaperPlane className="text-xs" />
            </button>
          </form>
        </div>
      </div>

      {toastMessage && (
        <div className="fixed bottom-5 sm:bottom-7 right-4 sm:right-7 left-4 sm:left-auto z-50 flex flex-col gap-2.5">
          <div
            className={`flex items-center gap-3 px-5 py-3.5 rounded-xl bg-[#0a0a0a]/95 border backdrop-blur-xl text-white text-xs sm:text-sm font-semibold shadow-[0_10px_30px_rgba(0,0,0,0.95)] animate-toast-slide ${
              toastMessage.type === "success"
                ? "border-emerald-500 text-emerald-400"
                : "border-primary-red text-primary-red"
            }`}
          >
            <HiSparkles />
            <span>{toastMessage.message}</span>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
