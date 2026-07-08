import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: "Guhan (AD) – Personal Project",
    role: "Video & Photo Editor (Freelance)",
    description: "Served as personal project editor – handled end-to-end video and photo editing for AD content.",
    period: "Recent"
  },
  {
    company: "FundX",
    role: "Web Developer & Media Editor (Freelance)",
    description: "Built the FundX website and handled video and photo editing for promotional content.",
    period: "Freelance"
  },
  {
    company: "Sanju Oil and Textile",
    role: "Web Developer & Designer (Freelance)",
    description: "Developed company website and designed business cards and branding materials.",
    period: "Freelance"
  },
  {
    company: "Weaimpex",
    role: "Web Developer & Data Analyst (Freelance)",
    description: "Built company website and performed data analytics to support business decision-making.",
    period: "Freelance"
  },
  {
    company: "Sri Jayendra Golden Jubilee School",
    role: "Web Developer (Freelance)",
    description: "Designed and developed the official school website with a clean, responsive layout.",
    period: "Freelance"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="bg-[#0a0a0a] py-28 px-6 md:px-12 w-full relative overflow-hidden font-sans border-t border-gray-900">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/5 blur-[180px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header */}
        <div data-aos="fade-up" className="mb-20 text-center">
          <div className="inline-block border border-red-500/20 rounded-full px-5 py-1.5 text-xs text-red-500 font-bold uppercase tracking-widest mb-6 shadow-[0_0_15px_rgba(239,68,68,0.1)] bg-red-500/5">
            My Journey
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-6">
            Work <span className="text-[#ff2a2a]">Experience</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg font-medium leading-relaxed">
            A history of my freelance collaborations, building production websites, editing media, and delivering business solutions.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-zinc-800/80 ml-4 md:ml-32">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="relative pl-8 pb-12 last:pb-0 group"
            >
              {/* Point Indicator */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 border-red-500 bg-[#0a0a0a] group-hover:bg-red-500 group-hover:scale-120 transition-all duration-300"></div>

              {/* Side Date (For desktop screens) */}
              <div className="hidden md:block absolute -left-36 top-1 text-right w-28 text-xs font-mono uppercase tracking-wider text-zinc-500 group-hover:text-red-400 transition-colors">
                {exp.period}
              </div>

              {/* Content Card */}
              <div className="bg-zinc-950 border border-zinc-900 rounded-2xl p-6 md:p-8 hover:border-zinc-800 hover:bg-zinc-900/20 transition-all duration-300">
                <span className="md:hidden block text-[10px] font-mono uppercase tracking-wider text-red-400 mb-2">
                  {exp.period}
                </span>
                
                <h3 className="text-lg md:text-xl font-bold text-white mb-1 group-hover:text-red-500 transition-colors">
                  {exp.company}
                </h3>
                
                <h4 className="text-xs md:text-sm font-semibold text-zinc-400 mb-4">
                  {exp.role}
                </h4>
                
                <p className="text-sm text-zinc-500 font-medium leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
