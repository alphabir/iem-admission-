
import React from 'react';

interface HeroProps {
  onOpenMatchTest: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenMatchTest }) => {
  return (
    <div className="relative bg-[#0d0e12] overflow-hidden pt-24 pb-28 md:pt-40 md:pb-60">
      {/* High-Fidelity Background FX */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-indigo-600/25 blur-[160px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-500/15 blur-[160px] rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_transparent_0%,_#0d0e12_70%)] opacity-80"></div>
        
        {/* Animated Grid System */}
        <div className="grid grid-cols-[repeat(20,minmax(0,1fr))] gap-px opacity-[0.04] pointer-events-none h-full w-full">
          {[...Array(400)].map((_, i) => (
            <div key={i} className="border-[0.5px] border-indigo-400/30 h-32"></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 backdrop-blur-xl rounded-full mb-10 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
            <span className="flex h-2.5 w-2.5 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e] animate-pulse"></span>
            <span className="text-white font-black text-[10px] md:text-xs tracking-[0.25em] uppercase">
              Admission Protocol 2026: ACTIVE
            </span>
          </div>
          
          <h1 className="text-6xl md:text-[9rem] font-black text-white leading-[0.85] mb-12 tracking-tighter italic">
            UPGRADE <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-300 via-indigo-500 to-purple-500 animate-gradient-x">YOUR TECH</span> <br/>
            <span className="relative">
              FUTURE @ IEM
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-indigo-500/30" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="currentColor" strokeWidth="4" /></svg>
            </span>
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-400 mb-16 max-w-2xl mx-auto font-bold leading-relaxed uppercase tracking-tight">
            Stop guessing. Start winning. Navigate WBJEE 2026 like a pro and secure your spot in Kolkata's premier tech launchpad.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={onOpenMatchTest}
              className="group relative bg-white text-black px-14 py-6 rounded-2xl font-black text-xl transition-all shadow-[0_20px_50px_rgba(255,255,255,0.15)] hover:scale-105 active:scale-95 uppercase italic tracking-tighter"
            >
              <span className="relative z-10">Check Eligibility 2026</span>
              <div className="absolute inset-0 bg-indigo-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            <button 
              onClick={() => document.getElementById('admission-query')?.scrollIntoView({ behavior: 'smooth' })}
              className="group bg-indigo-600/10 border-2 border-indigo-500/50 text-indigo-400 hover:bg-indigo-500 hover:text-white px-14 py-6 rounded-2xl font-black text-xl backdrop-blur-md transition-all active:scale-95 uppercase italic tracking-tighter"
            >
              Free Counselling
            </button>
          </div>

          <div className="mt-24 flex flex-col items-center gap-8">
            <div className="flex -space-x-4">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="relative group">
                  <img src={`https://i.pravatar.cc/150?u=iemstudent${i}`} className="w-14 h-14 rounded-full border-4 border-[#0d0e12] object-cover shadow-2xl transition-transform group-hover:-translate-y-2" alt="Student" />
                  <div className="absolute inset-0 rounded-full border border-white/10 pointer-events-none"></div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <div className="text-white font-black text-xl tracking-tighter italic">JOIN 8,400+ ASPIRANTS</div>
              <div className="text-indigo-500 text-[10px] font-black uppercase tracking-[0.4em] mt-2">Mission 2026 Recruitment Window Open</div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 15s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default Hero;
