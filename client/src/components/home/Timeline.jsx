// src/components/home/Timeline.jsx

import React from "react";
import { motion } from "framer-motion";

const journeyData = [
  {
    year: "2022",
    title: "Started B.Tech in Electronics & Communication",
  },
  {
    year: "2023",
    title: "Won Regional Hackathon for IoT Smart Cities",
  },
  {
    year: "2024",
    title: "Mastered React & Started Full-Stack Journey",
  },
  {
    year: "2025",
    title: "Focusing on Deep-Tech & AI Integration",
  },
];

const Timeline = () => {
  return (
    <section id="journey" className="py-24 px-6 bg-slate-900/30">
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-semibold">
            My Journey
          </span>

          <h2 className="text-4xl md:text-5xl font-black mt-4 mb-4 bg-clip-text text-transparent bg-linear-to-r from-cyan-400 to-purple-500">
            Progress Log
          </h2>

          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            My evolution as an engineer and builder.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-slate-800 ml-4 space-y-14">
          {journeyData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative pl-10"
            >
              {/* Dot */}
              <div className="absolute -left-2.75 top-1 w-5 h-5 rounded-full bg-slate-950 border-2 border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.5)]" />

              {/* Year */}
              <span className="text-cyan-400 font-mono text-sm mb-2 block tracking-widest">
                {item.year}
              </span>

              {/* Card */}
              <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-500">
                <h3 className="text-xl md:text-2xl font-bold text-white leading-relaxed">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
