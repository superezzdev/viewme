// src/components/home/Contact.jsx

import React from "react";
import { motion } from "framer-motion";
import { Mail, Globe, Send, Link, FolderGit } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="text-cyan-400 uppercase tracking-[0.3em] text-sm font-semibold">
            Contact
          </span>

          <h2 className="text-4xl md:text-5xl font-black mt-4 mb-6 bg-clip-text text-transparent bg-linear-to-r from-cyan-400 to-purple-500">
            Signal Transmission
          </h2>

          <p className="text-slate-400 text-lg leading-relaxed mb-10">
            I'm always open to discussing new projects, creative ideas,
            collaborations, or opportunities to be part of your vision. Let’s
            build something futuristic together.
          </p>

          {/* Email */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-cyan-400 group-hover:border-cyan-500 transition-all">
                <Mail size={24} />
              </div>

              <div>
                <p className="text-slate-500 uppercase text-xs tracking-widest mb-1">
                  Email Me
                </p>

                <h4 className="text-white font-bold text-lg">super@ezz.in</h4>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-6">
              <a
                href="https://github.com/superezz"
                className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500 transition-all"
              >
                <FolderGit size={22} />
              </a>

              <a
                href="https://www.linkedin.com/in/superezz"
                className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500 transition-all"
              >
                <Link size={22} />
              </a>

              <a
                href="https://superezz.com"
                className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500 transition-all"
              >
                <Globe size={22} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Side Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-3xl p-10 shadow-2xl"
        >
          <form className="space-y-6">
            {/* Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-slate-500 font-bold">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-slate-950/50 border border-slate-800 rounded-xl p-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-slate-500 font-bold">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full bg-slate-950/50 border border-slate-800 rounded-xl p-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 transition-all"
                />
              </div>
            </div>

            {/* Textarea */}
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-slate-500 font-bold">
                Message
              </label>

              <textarea
                rows={6}
                placeholder="Let's build something amazing..."
                className="w-full bg-slate-950/50 border border-slate-800 rounded-xl p-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 transition-all resize-none"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-linear-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-bold transition-all flex items-center justify-center gap-3 group"
            >
              Send Message
              <Send
                size={18}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
