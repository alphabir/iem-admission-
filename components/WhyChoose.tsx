
import React from 'react';

const WhyChoose: React.FC = () => {
  const reasons = [
    {
      title: 'Global Alumni Network',
      desc: 'Connect with IEM graduates working in Google, Amazon, and Microsoft worldwide.',
      icon: '🌍'
    },
    {
      title: 'World-Class Labs',
      desc: 'Access advanced research labs for AI, Blockchain, and Robotics in Sector V.',
      icon: '🔬'
    },
    {
      title: 'Smart Learning',
      desc: 'Hybrid learning model with massive open online courses (MOOCs) integration.',
      icon: '💻'
    },
    {
      title: 'Vibrant Campus Life',
      desc: 'Participate in IEM Utsav, annual hackathons, and various tech-clubs.',
      icon: '🎉'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="text-center mb-16">
        <h2 className="text-indigo-600 font-bold tracking-widest uppercase mb-4 text-xs">Edge Advantage</h2>
        <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Why Choose IEM Kolkata?</h3>
        <p className="text-lg text-indigo-100 max-w-2xl mx-auto font-medium">
          The only private institute in West Bengal that bridges the gap between academics and the global tech industry.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map((r, i) => (
          <div key={i} className="bg-white/10 backdrop-blur-md p-8 rounded-[2rem] border border-white/20 hover:bg-white/20 transition-all group">
            <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform">{r.icon}</div>
            <h4 className="text-xl font-bold text-white mb-4">{r.title}</h4>
            <p className="text-indigo-50 text-sm leading-relaxed font-medium">{r.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-20 bg-white text-slate-900 rounded-[3rem] p-10 lg:p-16 relative overflow-hidden shadow-2xl border border-indigo-50">
        <div className="lg:flex gap-12 items-center relative z-10">
          <div className="lg:w-1/2">
            <div className="inline-block bg-indigo-50 text-indigo-600 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">Limited Intake</div>
            <h3 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight text-slate-900">Special Direct Admission <br/><span className="text-indigo-600">Quota 2026</span></h3>
            <p className="text-slate-600 mb-10 leading-relaxed font-medium">
              Confused about WBJEE choice filling? We offer a limited number of <strong>Institutional Quota seats</strong> for high-merit students who miss the first cutoff.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-slate-50 border border-slate-100 px-6 py-4 rounded-2xl">
                <div className="text-indigo-600 font-bold text-xl tracking-tight italic">CSE / IT</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">High Demand</div>
              </div>
              <div className="bg-slate-50 border border-slate-100 px-6 py-4 rounded-2xl">
                <div className="text-indigo-600 font-bold text-xl tracking-tight italic">Limited</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Seats Remaining</div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <div className="bg-indigo-600 text-white p-8 md:p-10 rounded-[2.5rem] shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="text-xl font-bold mb-6">Management Quota Inquiry</h4>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <input type="text" placeholder="Full Name" className="w-full bg-white/10 border border-white/20 placeholder:text-indigo-100 p-4 rounded-xl focus:bg-white/20 outline-none transition-all" />
                  <input type="tel" placeholder="Mobile Number" className="w-full bg-white/10 border border-white/20 placeholder:text-indigo-100 p-4 rounded-xl focus:bg-white/20 outline-none transition-all" />
                  <button className="w-full bg-white text-indigo-600 font-bold py-4 rounded-xl hover:bg-slate-50 transition-all shadow-lg text-sm uppercase tracking-widest">Check Seat Availability</button>
                </form>
              </div>
              {/* Background Blob */}
              <div className="absolute top-[-20%] right-[-20%] w-40 h-40 bg-indigo-500 rounded-full blur-3xl opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
