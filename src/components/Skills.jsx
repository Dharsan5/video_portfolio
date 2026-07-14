import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Programming Languages",
    icon: (
      <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    skills: ["JavaScript", "Java", "Python", "C"]
  },
  {
    title: "Front-End",
    icon: (
      <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    skills: ["HTML", "CSS", "ReactJS", "React Native", "Tailwind CSS", "Vite", "Figma"]
  },
  {
    title: "Back-End",
    icon: (
      <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    skills: ["Node.js", "Express.js", "Flask (FastAPI)"]
  },
  {
    title: "Database",
    icon: (
      <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Firebase", "Supabase"]
  },
  {
    title: "Cloud & DevOps",
    icon: (
      <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    skills: ["AWS Lambda", "AWS Bedrock", "AWS S3", "AWS DynamoDB", "Git", "GitHub"]
  },
  {
    title: "Media & Design",
    icon: (
      <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
      </svg>
    ),
    skills: ["Video Editing", "Photo Editing", "UI/UX Design", "Figma"]
  },
  {
    title: "Soft Skills",
    icon: (
      <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    skills: ["Time Management", "Communication", "Adaptability"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="bg-[#0a0a0a] py-28 px-6 md:px-12 w-full relative overflow-hidden font-sans border-t border-gray-900">
      
      {/* Decorative background glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/5 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-600/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div data-aos="fade-up" className="mb-20 text-center">
          <div className="inline-block border border-red-500/20 rounded-full px-5 py-1.5 text-xs text-red-500 font-bold uppercase tracking-widest mb-6 shadow-[0_0_15px_rgba(239,68,68,0.1)] bg-red-500/5">
            Technical Stack
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-6">
            Skills & <span className="text-[#ff2a2a]">Expertise</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg font-medium leading-relaxed">
            A comprehensive set of tools, frameworks, and technologies that I leverage to build state-of-the-art websites.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-zinc-900/40 backdrop-blur-md border border-zinc-800/60 rounded-3xl p-8 hover:border-red-500/30 hover:bg-zinc-900/60 transition-all duration-500 group shadow-lg"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-red-500/10 rounded-2xl group-hover:scale-110 transition-all duration-500 shadow-inner">
                  {category.icon}
                </div>
                <h3 className="text-lg font-extrabold text-white tracking-tight group-hover:text-red-400 transition-colors">
                  {category.title}
                </h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs md:text-sm bg-zinc-800/40 text-zinc-300 font-semibold px-3 py-1.5 rounded-xl border border-zinc-800/60 hover:text-white hover:bg-red-500/10 hover:border-red-500/30 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
