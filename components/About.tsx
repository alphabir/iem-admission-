
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="text-center mb-20">
        <h2 className="text-indigo-500 font-black tracking-[0.4em] uppercase mb-4 text-[10px] md:text-xs">The Tech Epicenter</h2>
        <h3 className="text-5xl md:text-7xl font-black text-white mb-10 leading-[1.05] tracking-tighter italic">
          BORN IN '89. <br/> <span className="text-indigo-600">EVOLVED FOR '26.</span>
        </h3>
        <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed font-bold uppercase tracking-tight">
          Kolkata’s premier private engineering gateway. Strategically located in Sector V—the digital heartbeat of Eastern India.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <div className="group relative p-10 bg-white/5 border border-white/5 rounded-[3rem] hover:bg-white/10 transition-all shadow-2xl">
          <div className="absolute -top-6 -left-6 w-16 h-16 bg-indigo-600 rounded-3xl flex items-center justify-center text-white shadow-xl group-hover:rotate-12 transition-transform">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
          </div>
          <h4 className="text-2xl font-black text-white mb-4 uppercase italic tracking-tighter">Elite Accreditation</h4>
          <p className="text-gray-500 font-bold leading-relaxed">AICTE Approved & MAKAUT Affiliated. We don't just teach the syllabus; we architect careers for global firms through industry-synced labs.</p>
        </div>

        <div className="group relative p-10 bg-white/5 border border-white/5 rounded-[3rem] hover:bg-white/10 transition-all shadow-2xl">
          <div className="absolute -top-6 -left-6 w-16 h-16 bg-indigo-600 rounded-3xl flex items-center justify-center text-white shadow-xl group-hover:rotate-12 transition-transform">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          </div>
          <h4 className="text-2xl font-black text-white mb-4 uppercase italic tracking-tighter">Hyper-Local Industry</h4>
          <p className="text-gray-500 font-bold leading-relaxed">Campus is situated inside the IT Hub. Walk out of class and into high-value internships with 1500+ tech giants located just steps away.</p>
        </div>

        <div className="group relative p-10 bg-white/5 border border-white/5 rounded-[3rem] hover:bg-white/10 transition-all shadow-2xl md:col-span-2">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-20 h-20 bg-indigo-600 rounded-3xl flex items-center justify-center text-white shadow-xl flex-shrink-0">
               <span className="text-3xl font-black">35+</span>
            </div>
            <div>
              <h4 className="text-2xl font-black text-white mb-2 uppercase italic tracking-tighter">A Legacy of Alpha Grads</h4>
              <p className="text-gray-500 font-bold leading-relaxed">With over three decades of excellence, our alumni network spans across every major tech hub from Silicon Valley to Bangalore.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
