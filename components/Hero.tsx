
import React from 'react';

interface HeroProps {
  onOpenMatchTest: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenMatchTest }) => {
  return (
    <div className="relative bg-white overflow-hidden pt-20 pb-20 md:pt-32 md:pb-40">
      {/* Dynamic Light Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-indigo-100/50 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-blue-50/80 blur-[120px] rounded-full"></div>
        
        {/* Subtle Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-indigo-50 border border-indigo-100 rounded-full mb-8 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-indigo-600 animate-pulse"></span>
            <span className="text-indigo-700 font-bold text-xs tracking-wider uppercase">
              Admission Intake 2026: Open
            </span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-extrabold text-slate-900 leading-[1.1] mb-8 tracking-tight">
            Elevate Your <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">Engineering</span> Career
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            IEM Kolkata B.Tech Admission 2026. Secure your seat in West Bengal's premier institute for CSE, IT, and specialized tech branches.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <button 
              onClick={onOpenMatchTest}
              className="w-full sm:w-auto bg-indigo-600 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-xl hover:bg-indigo-700 hover:scale-105 active:scale-95"
            >
              Check My Eligibility
            </button>
            <button 
              onClick={() => document.getElementById('admission-query')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto bg-white border-2 border-slate-200 text-slate-700 hover:bg-slate-50 px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-sm active:scale-95"
            >
              Fee Structure
            </button>
          </div>

          <div className="mt-16 flex flex-col items-center gap-6">
            <div className="flex -space-x-3">
              {[...Array(5)].map((_, i) => (
                <img key={i} src={`https://i.pravatar.cc/100?u=iemstudent${i}`} className="w-12 h-12 rounded-full border-4 border-white shadow-md object-cover" alt="Student" />
              ))}
            </div>
            <div className="text-center">
              <div className="text-slate-900 font-bold text-lg italic">8.4k+ Aspirants Guided for 2026</div>
              <div className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">Join the Elite Tech Community</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
