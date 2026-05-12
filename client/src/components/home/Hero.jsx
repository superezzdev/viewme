// src/components/home/Hero.jsx

import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden px-6"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-1/4 w-125 h-125 bg-cyan-500/10 rounded-full blur-[120px]" />

        <div className="absolute bottom-1/4 -right-1/4 w-125 h-125 bg-purple-500/10 rounded-full blur-[120px]" />

        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, #334155 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <span className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-6">
            Available for Internships & Collaborations
          </span>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black mb-6 tracking-tighter leading-tight">
            Designing the{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-600">
              Future Tech
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            B.Tech ECE | Full-Stack Developer | Deep-Tech Enthusiast
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl transition-all shadow-lg shadow-cyan-500/20 w-full sm:w-auto"
            >
              Explore My Builds
            </a>

            <a
              href="#contact"
              className="px-8 py-4 border border-slate-700 hover:border-cyan-500/50 bg-slate-900/50 backdrop-blur-sm rounded-xl transition-all w-full sm:w-auto"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
      >
        <div className="w-6 h-10 border-2 border-slate-700 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-cyan-500 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
