// src/components/home/Skills.jsx

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Code2, Terminal, Database, Layers, Brain } from "lucide-react";

const SKILLS = [
  {
    name: "React / Next.js",
    category: "Software",
    icon: <Code2 size={20} />,
    level: 90,
  },
  {
    name: "Node.js / Express",
    category: "Software",
    icon: <Terminal size={20} />,
    level: 80,
  },
  {
    name: "MongoDB",
    category: "Software",
    icon: <Database size={20} />,
    level: 75,
  },
  {
    name: "Embedded C / Arduino",
    category: "Hardware",
    icon: <Cpu size={20} />,
    level: 85,
  },
  {
    name: "VLSI Design (Verilog)",
    category: "Hardware",
    icon: <Layers size={20} />,
    level: 70,
  },
  {
    name: "Python / AI Libraries",
    category: "Software",
    icon: <Brain size={20} />,
    level: 75,
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-cyan-400 to-purple-500 mb-4">
            Technical Arsenal
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A fusion of silicon and software.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-500 shadow-2xl group">
                <div className="flex justify-between items-center mb-4">
                  <div className="p-3 rounded-xl bg-slate-800 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all">
                    {skill.icon}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                    {skill.category}
                  </span>
                </div>

                <h4 className="text-xl font-bold text-white mb-4">
                  {skill.name}
                </h4>

                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-linear-to-r from-cyan-500 to-purple-600"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
