
import React from 'react';

const Comparison: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="text-center mb-16">
        <h2 className="text-indigo-600 font-bold tracking-widest uppercase mb-4 text-xs">Benchmark Analysis</h2>
        <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight italic">
          Why IEM consistently <br/> <span className="text-indigo-600">Leads the ROI Charts</span>
        </h3>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 opacity-60">
           <h4 className="text-xl font-bold text-slate-400 mb-6 uppercase italic tracking-tighter">Local Private Colleges</h4>
           <ul className="space-y-4 text-slate-500 font-medium text-sm">
            <li className="pb-3 border-b border-slate-200">Standard Placement Cell</li>
            <li className="pb-3 border-b border-slate-200">Limited Coding Culture</li>
            <li className="pb-3 border-b border-slate-200">Suburban Connectivity</li>
            <li className="pt-2 font-bold">Avg Package: ₹3.5L - ₹4.5L</li>
          </ul>
        </div>

        <div className="bg-indigo-600 text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden transform lg:scale-105 z-10">
          <div className="absolute top-0 right-0 bg-white/20 px-4 py-1 text-[10px] font-bold uppercase tracking-widest">Elite Choice</div>
          <h4 className="text-3xl font-black mb-8 italic tracking-tighter">IEM KOLKATA</h4>
          <ul className="space-y-5 font-bold text-lg">
            <li className="pb-3 border-b border-white/10 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              98%+ Global Placements
            </li>
            <li className="pb-3 border-b border-white/10 italic">Core Tech Hub Location</li>
            <li className="pb-3 border-b border-white/10">35+ Years of Trust</li>
            <li className="pt-2 text-indigo-100 font-black">Avg: ₹7.5L (CSE)</li>
          </ul>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 opacity-60">
           <h4 className="text-xl font-bold text-slate-400 mb-6 uppercase italic tracking-tighter">Mid-Tier Institutions</h4>
           <ul className="space-y-4 text-slate-500 font-medium text-sm">
            <li className="pb-3 border-b border-slate-200">Moderate Industry Ties</li>
            <li className="pb-3 border-b border-slate-200">Standard Lab Facilities</li>
            <li className="pb-3 border-b border-slate-200">Outer Ring Locations</li>
            <li className="pt-2 font-bold">Avg Package: ₹5.5L - ₹6L</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Comparison;
