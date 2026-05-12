import React from "react";

const Card = () => {
  return (
    <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-500 shadow-2xl group">
      <div className="flex justify-between items-center mb-4">
        <div className="p-3 rounded-xl bg-slate-800 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all">
          {skill.icon}
        </div>
        <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
          {skill.category}
        </span>
      </div>

      <h4 className="text-xl font-bold text-white mb-4">{skill.name}</h4>

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
  );
};

export default Card;
