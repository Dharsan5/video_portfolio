import React from 'react';
import stackImage from '../assets/about/image.png';
import reactImage from '../assets/about/react.png';
import nodeImage from '../assets/about/node.png';
import mongoImage from '../assets/about/mongodb.png';

const About = () => {
  return (
    <section id="about" className="bg-[#ff2a2a] pt-20 pb-44 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col gap-20">
        
        {/* Top Row: Avatar & Bio */}
        <div className="flex flex-col md:flex-row gap-16 items-start">
          {/* Left Side: ID Badge and Skills */}
          <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
            <div data-aos="drop-bounce" className="relative flex justify-center w-full">
              {/* Lanyard string */}
              <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
              {/* Lanyard clip */}
              <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>
              
              {/* Badge Card */}
              <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                {/* Cutout Hole */}
                <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                  <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
                </div>
                {/* Image Container */}
                <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border-2 border-transparent">
                  <img 
                    src={stackImage} 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Info Content */}
          <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-8 md:mt-0 relative z-20">
            <h2 className="text-4xl md:text-5xl font-black text-black mb-4">Hello!</h2>
            <p className="text-lg font-bold mb-12 leading-relaxed max-w-3xl text-red-50">
              Hi, my name is <span className="text-black text-xl font-black mx-1 tracking-wide uppercase">Dharsan SP</span>, a motivated and flexible fresher with strong frontend development and full stack skills, based in <span className="text-black font-black">Tamil Nadu, India</span>. I build impactful websites and love contributing to innovative software products.
            </p>

            {/* Horizontal Skills Row (Transparent & Large) */}
            <div className="flex items-center gap-10 mt-8">
              <img 
                data-aos="zoom-in" data-aos-delay="300"
                src={reactImage} 
                alt="React" 
                className="w-20 h-20 md:w-24 md:h-24 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl" 
              />
              <img 
                data-aos="zoom-in" data-aos-delay="450"
                src={nodeImage} 
                alt="Node.js" 
                className="w-20 h-20 md:w-24 md:h-24 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl" 
              />
              <img 
                data-aos="zoom-in" data-aos-delay="600"
                src={mongoImage} 
                alt="MongoDB" 
                className="w-20 h-20 md:w-24 md:h-24 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl" 
              />
            </div>
          </div>
        </div>

        {/* Bottom Row: Cards for Education, Certifications & Achievements */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-white relative z-20" data-aos="fade-up" data-aos-delay="200">
          
          {/* Education Card */}
          <div className="bg-black/35 backdrop-blur-md rounded-[2rem] p-8 border border-white/10 hover:border-black/30 transition-all duration-500 shadow-[0_15px_35px_rgba(0,0,0,0.15)] flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-black text-black uppercase tracking-wider mb-6 border-b border-black/10 pb-3 flex items-center gap-3">
                <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-4-9 4 9 5z"/><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-4-9 4 9 5zm0 0v6"/></svg>
                Education
              </h3>
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold text-red-200 block mb-1">2024 – 2027</span>
                  <h4 className="font-bold text-lg leading-tight text-white">Kongu Engineering College</h4>
                  <p className="text-xs text-red-50/80 mt-1">BE – Computer Science and Engg.</p>
                  <p className="text-xs font-black text-black mt-1">CGPA – 6.87*</p>
                </div>
                <div>
                  <span className="text-xs font-bold text-red-200 block mb-1">2021 – 2024</span>
                  <h4 className="font-bold text-lg leading-tight text-white">Kongu Polytechnic College</h4>
                  <p className="text-xs text-red-50/80 mt-1">Diploma – Communication & Computer Networking</p>
                  <p className="text-xs font-black text-black mt-1">Percentage – 88.44%</p>
                </div>
                <div>
                  <span className="text-xs font-bold text-red-200 block mb-1">2018</span>
                  <h4 className="font-bold text-lg leading-tight text-white">Rasi International School</h4>
                  <p className="text-xs text-red-50/80 mt-1">Secondary Education</p>
                  <p className="text-xs font-black text-black mt-1">Percentage – 69%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications Card */}
          <div className="bg-black/35 backdrop-blur-md rounded-[2rem] p-8 border border-white/10 hover:border-black/30 transition-all duration-500 shadow-[0_15px_35px_rgba(0,0,0,0.15)]">
            <h3 className="text-xl font-black text-black uppercase tracking-wider mb-6 border-b border-black/10 pb-3 flex items-center gap-3">
              <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>
              Certifications
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <span className="text-black font-bold text-lg leading-none mt-0.5">✓</span>
                <div>
                  <h4 className="font-bold text-sm leading-tight text-white">MongoDB Associate Developer</h4>
                  <p className="text-[10px] uppercase font-mono tracking-wider text-red-200 mt-1">April 2025</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-black font-bold text-lg leading-none mt-0.5">✓</span>
                <div>
                  <h4 className="font-bold text-sm leading-tight text-white">Oracle APEX Cloud Developer</h4>
                  <p className="text-[10px] uppercase font-mono tracking-wider text-red-200 mt-1">May 2025</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-black font-bold text-lg leading-none mt-0.5">✓</span>
                <div>
                  <h4 className="font-bold text-sm leading-tight text-white">TNSDC – PCB Designing Course</h4>
                  <p className="text-[10px] uppercase font-mono tracking-wider text-red-200 mt-1">2023</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-black font-bold text-lg leading-none mt-0.5">✓</span>
                <div>
                  <h4 className="font-bold text-sm leading-tight text-white">KPC – Data Entry Operator</h4>
                  <p className="text-[10px] uppercase font-mono tracking-wider text-red-200 mt-1">2023</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-black font-bold text-lg leading-none mt-0.5">✓</span>
                <div>
                  <h4 className="font-bold text-sm leading-tight text-white">TNSCST – Science & Tech Capacity</h4>
                  <p className="text-[10px] uppercase font-mono tracking-wider text-red-200 mt-1">2023</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Achievements Card */}
          <div className="bg-black/35 backdrop-blur-md rounded-[2rem] p-8 border border-white/10 hover:border-black/30 transition-all duration-500 shadow-[0_15px_35px_rgba(0,0,0,0.15)]">
            <h3 className="text-xl font-black text-black uppercase tracking-wider mb-6 border-b border-black/10 pb-3 flex items-center gap-3">
              <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>
              Achievements
            </h3>
            <ul className="space-y-4 text-xs text-red-50/90 font-medium">
              <li className="flex items-start gap-2.5">
                <span className="text-black text-sm">✦</span>
                <div>
                  <strong>Smart India Hackathon Finalist</strong>
                  <p className="text-[10px] text-red-200 mt-0.5">SIH'25 · 2025</p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-black text-sm">✦</span>
                <div>
                  <strong>HackBuzz Hackathon Winners</strong>
                  <p className="text-[10px] text-red-200 mt-0.5">First Place · 2025</p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-black text-sm">✦</span>
                <div>
                  <strong>Tamil Mandram Hackathon Winners</strong>
                  <p className="text-[10px] text-red-200 mt-0.5">First Place · 2025</p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-black text-sm">✦</span>
                <div>
                  <strong>NITK UAV Camp Best Pilot</strong>
                  <p className="text-[10px] text-red-200 mt-0.5">Best Pilot Award · 2025</p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-black text-sm">✦</span>
                <div>
                  <strong>Kanini Pvt Pragayan NITT Finalist</strong>
                  <p className="text-[10px] text-red-200 mt-0.5">Finalist · 2026</p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-black text-sm">✦</span>
                <div>
                  <strong>Basketball State Level & Centies</strong>
                  <p className="text-[10px] text-red-200 mt-0.5">Runner-up (22/23) · Winner (2026)</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;
