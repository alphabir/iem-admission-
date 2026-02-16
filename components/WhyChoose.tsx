
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Why Choose IEM Kolkata in 2026?</h2>
        <p className="text-xl text-blue-200 max-w-2xl mx-auto">
          More than just a degree – a launchpad for your global tech career.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {reasons.map((r, i) => (
          <div key={i} className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl hover:bg-white/20 transition-all border border-white/10 group">
            <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform">{r.icon}</div>
            <h4 className="text-xl font-bold mb-4">{r.title}</h4>
            <p className="text-blue-100 text-sm leading-relaxed">{r.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-20 bg-white text-gray-900 rounded-[3rem] p-12 lg:p-16 relative overflow-hidden shadow-2xl">
        <div className="lg:flex gap-12 items-center relative z-10">
          <div className="lg:w-1/2">
            <h3 className="text-3xl font-black mb-6">Special Direct Admission Quota 2026</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Are you worried about your WBJEE rank or confused about choice filling? We offer a limited number of <strong>Institutional Quota seats</strong> for meritorious students who might miss the cutoff by a small margin.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-blue-50 px-6 py-4 rounded-xl">
                <div className="text-blue-700 font-black text-xl">Limited</div>
                <div className="text-xs font-bold text-gray-500 uppercase">CSE Seats</div>
              </div>
              <div className="bg-blue-50 px-6 py-4 rounded-xl">
                <div className="text-blue-700 font-black text-xl">First-Come</div>
                <div className="text-xs font-bold text-gray-500 uppercase">First-Served</div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <div className="bg-blue-600 text-white p-8 rounded-3xl shadow-xl">
              <h4 className="text-xl font-bold mb-4">Request Callback for Management Quota</h4>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="Student Name" className="w-full bg-blue-700/50 border border-blue-400 placeholder:text-blue-200 p-4 rounded-xl focus:ring-2 ring-yellow-400 outline-none" />
                <input type="tel" placeholder="Mobile Number" className="w-full bg-blue-700/50 border border-blue-400 placeholder:text-blue-200 p-4 rounded-xl focus:ring-2 ring-yellow-400 outline-none" />
                <button className="w-full bg-yellow-400 text-blue-900 font-black py-4 rounded-xl hover:bg-yellow-500 transition-all uppercase tracking-widest">Reserve My Seat</button>
              </form>
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-50 rounded-full -ml-16 -mb-16"></div>
      </div>
    </div>
  );
};

export default WhyChoose;
