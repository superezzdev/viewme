// src/components/home/Projects.jsx

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

const PROJECTS_DATA = [
  {
    id: 1,
    title: "AI Smart University Gate",
    category: "AI & Embedded",
    tech: ["Python", "OpenCV", "Arduino", "ESP32"],
    description:
      "Autonomous monitoring system using computer vision for vehicle and personnel access control.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    link: "#",
  },
  {
    id: 2,
    title: "Predictive Battery Monitor",
    category: "Embedded",
    tech: ["React", "Node.js", "IoT", "Sensors"],
    description:
      "Multi-battery health monitoring system with cloud-based predictive maintenance analytics.",
    image:
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=800",
    link: "#",
  },
  {
    id: 3,
    title: "AI Quiz Generator",
    category: "Web App",
    tech: ["MERN Stack", "OpenAI API", "Tailwind"],
    description:
      "Full-stack platform that generates interactive quizzes from PDF/Text using LLMs.",
    image:
      "https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?auto=format&fit=crop&q=80&w=800",
    link: "#",
  },
  {
    id: 4,
    title: "FPV Camera Drone",
    category: "Hardware",
    tech: ["Robotics", "ESP32-Cam", "C++"],
    description:
      "Custom-built drone with mobile integration and live video streaming capabilities.",
    image:
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=800",
    link: "#",
  },
];

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const categories = [
    "All",
    ...new Set(PROJECTS_DATA.map((project) => project.category)),
  ];

  const filteredProjects = useMemo(() => {
    return filter === "All"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((project) => project.category === filter);
  }, [filter]);

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      {/* Section Title */}
      <div className="mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-cyan-400 to-purple-500 mb-4">
          Featured Deployments
        </h2>

        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Real-world systems engineered from scratch.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-6 py-2 rounded-full border transition-all ${
              filter === category
                ? "bg-cyan-500 border-cyan-500 text-slate-950"
                : "border-slate-800 text-slate-400 hover:border-cyan-500/50"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
            >
              <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 shadow-2xl group flex flex-col md:flex-row h-full">
                
                {/* Image */}
                <div className="md:w-2/5 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Content */}
                <div className="md:w-3/5 p-8 flex flex-col justify-between">
                  <div>
                    <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-2 block">
                      {project.category}
                    </span>

                    <h3 className="text-2xl font-bold text-white mb-3">
                      {project.title}
                    </h3>

                    <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-slate-800 text-slate-300 text-[10px] rounded border border-slate-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Link */}
                  <a
                    href={project.link}
                    className="flex items-center gap-2 text-cyan-400 hover:text-white transition-colors group"
                  >
                    View Project Case Study

                    <ChevronRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Projects;