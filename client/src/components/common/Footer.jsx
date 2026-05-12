// src/components/common/Footer.jsx

import React from "react";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-slate-900 py-10 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-black tracking-tight text-white">
            FUTURE_GEN
          </h3>

          <p className="text-slate-500 text-sm mt-2">
            Engineering futuristic experiences with React, AI & Embedded
            Systems.
          </p>
        </div>

        {/* Center */}
        <div className="flex items-center gap-2 text-slate-500 text-sm">
          <span>Built with</span>

          <Heart
            size={16}
            className="text-cyan-400 fill-cyan-400 animate-pulse"
          />

          <span>using React & Tailwind CSS</span>
        </div>

        {/* Right */}
        <div className="text-slate-600 text-sm text-center md:text-right">
          © {new Date().getFullYear()} YourName.
          <br />
          All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
