// src/components/home/Vision.jsx

import React from "react";
import { motion } from "framer-motion";
import { Microscope } from "lucide-react";

const Vision = () => {
  return (
    <section id="vision" className="py-24 px-6 bg-slate-900/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-linear-to-br from-slate-900 to-slate-950 border border-cyan-500/20 rounded-3xl p-10 md:p-14 backdrop-blur-xl shadow-2xl"
        >
          {/* Heading */}
          <div className="flex items-center gap-4 mb-8">
            <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/20">
              <Microscope className="text-cyan-400" size={34} />
            </div>

            <div>
              <span className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-semibold">
                Future Goal
              </span>

              <h2 className="text-4xl md:text-5xl font-black text-white mt-2">
                The Vision
              </h2>
            </div>
          </div>

          {/* Vision Text */}
          <p className="text-2xl md:text-3xl text-slate-200 leading-relaxed font-light italic mb-10">
            “To transition from a developer into a deep-tech founder, building
            intelligent autonomous systems that solve real-world infrastructure
            challenges.”
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 text-center hover:border-cyan-500/40 transition-all">
              <h3 className="text-4xl font-black text-white mb-2">10+</h3>

              <p className="text-slate-500 uppercase tracking-widest text-sm">
                Builds
              </p>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 text-center hover:border-purple-500/40 transition-all">
              <h3 className="text-4xl font-black text-white mb-2">3+</h3>

              <p className="text-slate-500 uppercase tracking-widest text-sm">
                Tech Domains
              </p>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 text-center hover:border-cyan-500/40 transition-all">
              <h3 className="text-4xl font-black text-white mb-2">∞</h3>

              <p className="text-slate-500 uppercase tracking-widest text-sm">
                Curiosity
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;
