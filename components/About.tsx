
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="text-center mb-20">
        <h2 className="text-indigo-600 font-bold tracking-[0.2em] uppercase mb-4 text-sm">Why IEM Kolkata?</h2>
        <h3 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-8 leading-tight">
          Legacy of Excellence. <br/> <span className="text-indigo-600">Built for the Future.</span>
        </h3>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
          Located in the heart of Salt Lake, Sector V, IEM Kolkata is the premier private engineering destination for WBJEE & JEE Main aspirants.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
        <div className="group relative p-8 bg-slate-50 border border-slate-100 rounded-[2rem] hover:bg-white hover:shadow-2xl hover:border-indigo-100 transition-all">
          <div className="w-14 h-14 bg-indigo-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
          </div>
          <h4 className="text-2xl font-bold text-slate-900 mb-4">Prime Location</h4>
          <p className="text-slate-600 font-medium leading-relaxed">Situated in the IT Hub of Sector V, Kolkata. Direct access to internships and industry events just minutes from campus.</p>
        </div>

        <div className="group relative p-8 bg-slate-50 border border-slate-100 rounded-[2rem] hover:bg-white hover:shadow-2xl hover:border-indigo-100 transition-all">
          <div className="w-14 h-14 bg-indigo-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 21a11.955 11.955 0 01-9.618-7.016m19.236 0h-3.236M3.144 14h3.236m12.856 0l-1.397-3.697A2 2 0 0015.845 9H8.155a2 2 0 00-1.996 1.303L4.762 14" /></svg>
          </div>
          <h4 className="text-2xl font-bold text-slate-900 mb-4">Stellar Accreditation</h4>
          <p className="text-slate-600 font-medium leading-relaxed">NAAC 'A' Grade & NIRF Ranked. Affiliated with MAKAUT, ensuring degrees are globally recognized and highly valued.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
