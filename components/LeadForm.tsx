
import React, { useState } from 'react';

const LeadForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="bg-white/5 backdrop-blur-xl p-16 rounded-[3rem] border border-white/10 shadow-2xl">
          <div className="w-24 h-24 bg-indigo-600 text-white rounded-3xl flex items-center justify-center mx-auto mb-8 text-4xl shadow-[0_0_50px_rgba(79,70,229,0.5)] animate-bounce">✓</div>
          <h2 className="text-5xl font-black mb-6 tracking-tighter italic">VIBE CHECK PASSED!</h2>
          <p className="text-xl text-gray-400 mb-10 leading-relaxed font-medium">Our Senior Tech-Counsellor will ping you within 2 hours. Your 2026 journey officially starts now.</p>
          <button 
            onClick={() => setSubmitted(false)}
            className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-2xl font-black transition-all"
          >
            Send Another Query
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:flex gap-20 items-center">
        <div className="lg:w-1/2 text-white mb-16 lg:mb-0">
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-[0.95] tracking-tighter italic">
            CONFUSED ABOUT <br/>
            <span className="text-indigo-500 underline decoration-yellow-400 underline-offset-8">YOUR RANK?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-10 leading-relaxed font-medium">
            Don't let the algorithms decide your fate. Get a custom 1-on-1 roadmap from Kolkata's #1 tech mentors.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all group">
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"/></svg>
              </div>
              <h4 className="text-lg font-black mb-1">Live Match Test</h4>
              <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Instant AI Prediction</p>
            </div>
            
            <div className="p-6 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-all group">
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3.005 3.005 0 013.75-2.906z"/></svg>
              </div>
              <h4 className="text-lg font-black mb-1">Elite Mentorship</h4>
              <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">Direct Seat Guidance</p>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2">
          <div className="bg-white/5 backdrop-blur-2xl p-10 md:p-14 rounded-[3rem] border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.5)]">
            <h3 className="text-3xl font-black text-white mb-2 italic tracking-tight">MISSION ADMISSION 2026</h3>
            <p className="text-gray-500 mb-10 font-bold uppercase tracking-widest text-xs">Priority Response Form</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="relative group">
                  <input required type="text" className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl focus:border-indigo-500 outline-none transition-all text-white placeholder:text-gray-600 font-medium" placeholder="Aspirant Name" />
                </div>
                <div className="relative group">
                  <input required type="tel" className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl focus:border-indigo-500 outline-none transition-all text-white placeholder:text-gray-600 font-medium" placeholder="WhatsApp / Mobile" />
                </div>
              </div>
              
              <div className="relative group">
                <select className="w-full bg-white/5 border border-white/10 p-5 rounded-2xl focus:border-indigo-500 outline-none transition-all text-white font-medium appearance-none cursor-pointer">
                  <option className="bg-[#0d0e12]">CSE (Core) - High Priority</option>
                  <option className="bg-[#0d0e12]">AI & ML Specialization</option>
                  <option className="bg-[#0d0e12]">Information Technology</option>
                  <option className="bg-[#0d0e12]">Electronics (ECE)</option>
                  <option className="bg-[#0d0e12]">Electrical / Mechanical</option>
                </select>
              </div>

              <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-black py-6 rounded-2xl text-lg shadow-[0_15px_35px_rgba(79,70,229,0.3)] transition-all transform hover:-translate-y-1 active:scale-95 uppercase tracking-widest italic">
                Get Seat Matrix Now
              </button>
              
              <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6">
                 <div className="flex items-center gap-3">
                   <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                   <span className="text-gray-500 font-bold text-[10px] uppercase tracking-wider">Expert Online Now</span>
                 </div>
                 <a 
                  href="https://wa.me/919382082728?text=I%20want%20to%20know%20about%20IEM%20admission%202026" 
                  target="_blank"
                  className="flex items-center gap-2 text-[#25D366] font-black hover:scale-105 transition-all text-sm uppercase tracking-tighter"
                 >
                   <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.891 11.891-11.891 3.181 0 6.167 1.24 8.413 3.488 2.248 2.248 3.488 5.232 3.488 8.412 0 6.556-5.332 11.891-11.891 11.891-2.015 0-3.991-.511-5.741-1.482l-6.259 1.691zm6.05-4.471c1.556.924 3.082 1.411 4.78 1.411 5.011 0 9.091-4.079 9.091-9.091 0-2.431-.945-4.714-2.661-6.43-1.717-1.717-4.001-2.662-6.43-2.662-5.011 0-9.091 4.079-9.091 9.091 0 1.761.47 3.473 1.36 5.018l-.946 3.453 3.538-.956zm11.332-6.83c-.066-.109-.241-.175-.505-.307-.263-.132-1.558-.769-1.8-.857-.242-.088-.417-.132-.593.132-.175.263-.68.857-.834 1.032-.153.175-.307.198-.57.066-.263-.132-1.113-.41-2.12-1.309-.784-.699-1.314-1.562-1.468-1.826-.153-.263-.016-.406.115-.537.118-.118.263-.307.395-.461.132-.153.175-.263.263-.44.088-.175.044-.33-.022-.461-.066-.132-.593-1.428-.813-1.956-.214-.515-.43-.445-.593-.453-.153-.008-.33-.008-.505-.008-.175 0-.461.066-.702.33-.242.263-.923.901-.923 2.198 0 1.297.945 2.549 1.077 2.725.132.175 1.86 2.84 4.505 3.984.63.272 1.12.435 1.503.556.633.201 1.21.173 1.666.105.508-.076 1.558-.637 1.777-1.253.22-.615.22-1.143.153-1.253z"/></svg>
                   Insta-WhatsApp
                 </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadForm;
