
import React, { useState } from 'react';

const LeadForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-indigo-50 border border-indigo-100 p-16 rounded-[3rem] shadow-xl">
          <div className="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-8 text-3xl shadow-lg">✓</div>
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Application Received</h2>
          <p className="text-lg text-slate-600 mb-10 font-medium">One of our senior admission counsellors will call you within the next 24 hours to discuss your B.Tech 2026 roadmap.</p>
          <button 
            onClick={() => setSubmitted(false)}
            className="text-indigo-600 font-bold hover:underline"
          >
            Submit Another Query
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="lg:flex gap-16 items-center">
        <div className="lg:w-1/2 mb-16 lg:mb-0">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
            Confused About <br/>
            <span className="text-indigo-600">Your WBJEE Rank?</span>
          </h2>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium">
            Get 1-on-1 expert guidance for IEM Kolkata Admissions 2026. Learn about seat matrix, branch-specific cutoffs, and management quota details.
          </p>
          
          <ul className="space-y-6">
            <li className="flex items-center gap-4">
              <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
              </div>
              <span className="font-bold text-slate-700">Free Choice Filling Assistance</span>
            </li>
            <li className="flex items-center gap-4">
              <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
              </div>
              <span className="font-bold text-slate-700">Management Quota Availability Status</span>
            </li>
            <li className="flex items-center gap-4">
              <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
              </div>
              <span className="font-bold text-slate-700">Latest 2026 Placement Stats</span>
            </li>
          </ul>
        </div>

        <div className="lg:w-1/2">
          <div className="bg-white border border-slate-200 p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative">
            <div className="absolute -top-4 -right-4 bg-orange-500 text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
              Priority Support
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Free Counselling</h3>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-8">Admission Cycle 2026-27</p>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <input required type="text" className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl focus:border-indigo-500 outline-none transition-all text-slate-900 placeholder:text-slate-400 font-medium" placeholder="Full Name" />
              <input required type="tel" className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl focus:border-indigo-500 outline-none transition-all text-slate-900 placeholder:text-slate-400 font-medium" placeholder="WhatsApp Number" />
              
              <select className="w-full bg-slate-50 border border-slate-200 p-4 rounded-xl focus:border-indigo-500 outline-none transition-all text-slate-700 font-medium cursor-pointer">
                <option>Preferred Branch: CSE / IT</option>
                <option>Preferred Branch: ECE</option>
                <option>Preferred Branch: Others</option>
              </select>

              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-5 rounded-xl text-lg shadow-xl transition-all transform hover:-translate-y-1 active:scale-95">
                Send Admission Request
              </button>
              
              <p className="text-center text-[10px] text-slate-400 font-medium">
                By submitting, you agree to receive admission updates via call/SMS/WhatsApp.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadForm;
