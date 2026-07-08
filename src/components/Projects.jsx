import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "BolBharat – Voice-First AI Assistant",
    description: "Generative AI-powered multilingual mobile app helping rural citizens access Indian government schemes via voice in Hindi, Tamil, Telugu, and Hinglish. Features agentic form filling, OCR document scanner, and scheme matchmaker.",
    tech: ["React Native", "Expo", "AWS Bedrock", "AWS Lambda", "Amazon Transcribe", "Polly", "Textract", "DynamoDB", "S3"],
    color: "from-blue-600 to-indigo-600",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    )
  },
  {
    title: "ThinkForge – AI Learning Platform",
    description: "Intelligent learning companion with AI-driven chat, adaptive MCQ practice, mistake analysis, and progress analytics across 9 subjects. Features Ollama local AI integration with smart fallbacks and Supabase backend.",
    tech: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "Supabase", "PostgreSQL", "Ollama"],
    color: "from-purple-600 to-pink-600",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  {
    title: "Sports Sense AI – Vision Analytics",
    description: "Real-time sports analytics application using OpenCV for player and movement detection, featuring an interactive React frontend and Supabase for authentication and database storage.",
    tech: ["Python", "React", "CSS", "OpenCV", "Supabase"],
    color: "from-emerald-600 to-teal-600",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    )
  },
  {
    title: "UniShield 360 – Campus Wellness",
    description: "Integrated mobile platform for campus safety with AI voice gender verification, women's SOS guardian mode (live GPS + emergency alerts), anonymous men's mental health chat (BroCode), and admin crowd analytics.",
    tech: ["Flutter", "FastAPI", "Firebase", "YOLOv8", "OpenCV", "Librosa", "Transformers (BERT)"],
    color: "from-orange-600 to-red-600",
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  }
];

const Projects = () => {
  return (
    <section id="projects" className="bg-[#f8f9fa] py-28 px-6 md:px-12 w-full relative overflow-hidden font-sans border-t border-gray-200">
      
      {/* Decorative grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div data-aos="fade-up" className="mb-20 text-center">
          <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-xs text-gray-600 font-bold uppercase tracking-widest mb-6 shadow-sm bg-white">
            My Creations
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 mb-6">
            Featured <span className="text-[#ff2a2a]">Projects</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg font-medium leading-relaxed">
            Here are some of the key software applications I have designed, built, and launched.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="bg-white rounded-[2rem] overflow-hidden border border-gray-150 shadow-[0_15px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.09)] transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between"
            >
              <div className="p-8 md:p-10">
                {/* Project Header Banner */}
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${project.color} flex items-center justify-center shadow-md mb-8`}>
                  {project.icon}
                </div>

                <h3 className="text-2xl font-black text-gray-900 mb-4 tracking-tight leading-tight">
                  {project.title}
                </h3>
                
                <p className="text-sm md:text-base text-gray-500 font-medium leading-relaxed mb-8">
                  {project.description}
                </p>
              </div>

              {/* Bottom Tech Section */}
              <div className="bg-[#fcfdfe] px-8 py-6 border-t border-gray-100/60 mt-auto">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs bg-gray-100 text-gray-700 font-bold px-3 py-1.5 rounded-xl border border-gray-200/50 hover:bg-[#ff2a2a]/10 hover:text-[#ff2a2a] hover:border-[#ff2a2a]/20 transition-all duration-200 cursor-default"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
