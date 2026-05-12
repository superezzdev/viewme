// src/components/home/About.jsx

import React from "react";
import { motion } from "framer-motion";
import { Rocket, Brain } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-semibold">
            About Me
          </span>

          <h2 className="text-4xl md:text-5xl font-black mt-4 mb-6 leading-tight">
            Building the bridge between{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-500">
              Hardware & Software
            </span>
          </h2>

          <p className="text-slate-400 text-lg leading-relaxed mb-6">
            I am a builder at heart, currently pursuing Electronics &
            Communication Engineering while mastering the MERN stack. My focus
            lies at the intersection of AI, Embedded Systems, and VLSI —
            creating technologies that connect the digital and physical world.
          </p>

          <p className="text-slate-500 leading-relaxed">
            My long-term vision is to evolve from a developer into a deep-tech
            founder building autonomous systems and intelligent infrastructure
            solutions.
          </p>
        </motion.div>

        {/* Right Side Cards */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid gap-6"
        >
          {/* Card 1 */}
          <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-500">
            <Rocket className="text-cyan-400 mb-5" size={40} />

            <h3 className="text-2xl font-bold text-white mb-3">
              Innovation First
            </h3>

            <p className="text-slate-400 leading-relaxed">
              Constantly experimenting with emerging technologies in AI, IoT,
              Embedded Systems, and modern web development.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-500">
            <Brain className="text-purple-400 mb-5" size={40} />

            <h3 className="text-2xl font-bold text-white mb-3">
              Continuous Learner
            </h3>

            <p className="text-slate-400 leading-relaxed">
              Always learning new stacks, frameworks, and engineering concepts
              to stay adaptable in the fast-changing tech world.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
