import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-[#d4d4d4] py-16 px-6 md:px-12 w-full font-mono text-[10px] md:text-xs tracking-widest flex flex-col justify-between min-h-[50vh]">
      
      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full font-medium">
        <div className="flex flex-col gap-1">
          <p>Full Stack Development</p>
          <p>Frontend · UI/UX Design</p>
          <p>Mobile Apps · Cloud & AWS</p>
        </div>
        
        <div className="flex flex-col gap-1 md:items-center">
          <p>Kongu Engineering College</p>
          <a href="#work" className="underline hover:text-white transition-colors mt-1 underline-offset-4 decoration-1">View Work</a>
        </div>
        
        <div className="flex flex-col gap-1 md:items-end">
          <p>Tamil Nadu, India</p>
          <p>{new Date().getFullYear()}</p>
        </div>
      </div>

      {/* Middle Huge Text */}
      <div className="w-full flex justify-center items-center py-20 md:py-24 overflow-hidden">
        <h2 className="text-[14vw] md:text-[12vw] leading-none font-sans font-bold tracking-tighter lowercase select-none text-[#f4f4f4] w-full text-center">
          dharsan sp
        </h2>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full items-end font-medium">
        <div className="flex flex-col gap-6">
          <a href="#contact" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 font-bold">Contact</a>
          <p className="text-white/60 font-mono text-[9px] md:text-[10px]">
            &copy; {new Date().getFullYear()} Dharsan SP | Built with React
          </p>
        </div>
        
        <div className="flex flex-col gap-2 md:items-center">
          <a href="mailto:dharsansp254@gmail.com" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 lowercase">dharsansp254@gmail.com</a>
          <a href="https://linkedin.com/in/dharsan-sp" target="_blank" rel="noreferrer" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 lowercase">linkedin.com/in/dharsan-sp</a>
        </div>
        
        <div className="flex flex-col gap-2 md:items-end">
          <a href="https://github.com/Dharsan5" target="_blank" rel="noreferrer" className="underline hover:text-white transition-colors underline-offset-4 decoration-1">github.com/Dharsan5</a>
          <a href="https://dharsan-sp.netlify.app" target="_blank" rel="noreferrer" className="underline hover:text-white transition-colors underline-offset-4 decoration-1">dharsan-sp.netlify.app</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
