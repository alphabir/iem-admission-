
import React from 'react';

const Comparison: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-[1.05] tracking-tighter italic uppercase">
          Benchmarking <br/> <span className="text-indigo-500">IEM Performance</span>
        </h2>
        <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto uppercase tracking-widest text-[10px] md:text-xs">
          Engineered for outcome. Built for high-performers.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Tier 3 Card */}
        <div className="bg-white/5 border border-white/5 rounded-[3rem] p-10 flex flex-col items-center opacity-40 hover:opacity-100 transition-all group scale-95 hover:scale-100">
           <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all">📉</div>
           <h4 className="text-2xl font-black text-gray-400 group-hover:text-white mb-8 tracking-tighter uppercase italic">Tier 3 Locals</h4>
           <ul className="space-y-6 text-center w-full text-gray-600 group-hover:text-gray-400 font-bold text-sm">
            <li className="pb-4 border-b border-white/5 italic">Basic Labs</li>
            <li className="pb-4 border-b border-white/5 italic">60% Placement</li>
            <li className="pb-4 border-b border-white/5 italic">Rural Connectivity</li>
            <li className="pb-4 border-b border-white/5 italic">₹3L - ₹4L Avg</li>
          </ul>
        </div>

        {/* IEM Kolkata Column - High Impact */}
        <div className="bg-white text-black p-12 rounded-[3.5rem] flex flex-col items-center shadow-[0_40px_100px_rgba(255,255,255,0.1)] relative overflow-hidden group">
          <div className="absolute top-0 right-0 bg-indigo-600 text-white px-6 py-2 font-black text-[10px] tracking-[0.3em] uppercase">ULTIMATE</div>
          <div className="w-20 h-20 bg-black text-white rounded-3xl flex items-center justify-center font-black text-4xl mb-8 group-hover:scale-110 transition-transform">I</div>
          <h4 className="text-3xl font-black mb-10 tracking-tighter uppercase italic">IEM KOLKATA</h4>
          <ul className="space-y-6 text-center w-full font-black text-lg">
            <li className="pb-4 border-b border-black/5 flex items-center justify-center gap-3">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
              98%+ Placement
            </li>
            <li className="pb-4 border-b border-black/5 italic">Salt Lake Sector V</li>
            <li className="pb-4 border-b border-black/5">35+ Year Alpha Legacy</li>
            <li className="pb-4 border-b border-black/5 text-indigo-600">Avg: ₹7.5L (CSE)</li>
            <li className="pt-4 text-sm tracking-widest font-black uppercase text-black/40">Tier 1 Private</li>
          </ul>
          <button 
            onClick={() => document.getElementById('admission-query')?.scrollIntoView({ behavior: 'smooth' })}
            className="mt-12 w-full bg-black text-white py-6 rounded-full font-black uppercase tracking-widest text-xs hover:bg-gray-800 transition-all"
          >
            Match My Score
          </button>
        </div>

        {/* Mid Tier Card */}
        <div className="bg-white/5 border border-white/5 rounded-[3rem] p-10 flex flex-col items-center opacity-40 hover:opacity-100 transition-all group scale-95 hover:scale-100">
           <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all">⚖️</div>
           <h4 className="text-2xl font-black text-gray-400 group-hover:text-white mb-8 tracking-tighter uppercase italic">Peer Tier</h4>
           <ul className="space-y-6 text-center w-full text-gray-600 group-hover:text-gray-400 font-bold text-sm">
            <li className="pb-4 border-b border-white/5 italic">Standard Faculty</li>
            <li className="pb-4 border-b border-white/5 italic">80% Placement</li>
            <li className="pb-4 border-b border-white/5 italic">Suburban Campus</li>
            <li className="pb-4 border-b border-white/5 italic">₹5L - ₹6L Avg</li>
          </ul>
        </div>
      </div>

      <div className="mt-24 text-center">
        <div className="inline-block p-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500">
            <div className="bg-[#050507] px-10 py-4 rounded-full">
                <span className="text-gray-500 font-bold text-xs md:text-sm italic">
                  "IEM consistently leads ROI benchmarks in West Bengal Private Engineering sector."
                </span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Comparison;
