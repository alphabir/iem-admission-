
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Eligibility from './components/Eligibility';
import Fees from './components/Fees';
import Cutoffs from './components/Cutoffs';
import Placements from './components/Placements';
import WhyChoose from './components/WhyChoose';
import Comparison from './components/Comparison';
import FAQ from './components/FAQ';
import LeadForm from './components/LeadForm';
import Footer from './components/Footer';
import CollegeMatchTest from './components/CollegeMatchTest';

const App: React.FC = () => {
  const [showMatchTest, setShowMatchTest] = useState(false);
  const [isUrgencyVisible, setIsUrgencyVisible] = useState(true);

  const WHATSAPP_LINK = "https://wa.me/919382082728?text=Hi!%20I%20am%20interested%20in%20IEM%20Kolkata%20B.Tech%20Admission%202026.";

  return (
    <div className="relative bg-white text-slate-900 min-h-screen font-sans selection:bg-indigo-600 selection:text-white">
      {/* High-Impact Trust Banner */}
      {isUrgencyVisible && (
        <div className="bg-indigo-600 text-white py-3 px-4 text-center sticky top-0 z-[100] flex justify-center items-center gap-4 shadow-lg">
          <span className="font-bold text-[10px] md:text-xs tracking-widest uppercase flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping"></span>
            Admission Alert 2026: Official Portal Active
          </span>
          <button onClick={() => setIsUrgencyVisible(false)} className="hover:scale-110 transition-transform p-1 opacity-60 hover:opacity-100">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
      )}

      <Navbar />
      
      <main className="overflow-hidden">
        <section id="hero">
          <Hero onOpenMatchTest={() => setShowMatchTest(true)} />
        </section>

        {/* Floating Action Component */}
        <div className="flex justify-center -mt-8 md:-mt-10 mb-20 relative z-20 px-6">
          <button 
            onClick={() => document.getElementById('admission-query')?.scrollIntoView({ behavior: 'smooth' })}
            className="group w-full max-w-sm bg-indigo-600 text-white px-10 py-5 rounded-2xl font-bold shadow-xl hover:bg-indigo-700 transition-all hover:scale-105 flex justify-center items-center gap-3 text-lg"
          >
            Start Free Consultation
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </button>
        </div>

        <section id="about" className="py-24 bg-white">
          <About />
        </section>

        <section id="eligibility" className="py-24 bg-slate-50 border-y border-slate-100">
          <Eligibility />
        </section>

        <section id="fees" className="py-24 bg-white">
          <Fees />
        </section>

        <section id="cutoffs" className="py-24 bg-slate-50 border-y border-slate-100">
          <Cutoffs />
        </section>

        <section id="placements" className="py-24 bg-white">
          <Placements />
        </section>

        <section id="why-iem" className="py-24 bg-indigo-600">
          <WhyChoose />
        </section>

        <section id="comparison" className="py-24 bg-white">
          <Comparison />
        </section>

        <section id="faq" className="py-24 bg-slate-50 border-y border-slate-100">
          <FAQ />
        </section>

        <section id="admission-query" className="py-32 bg-white relative">
           <LeadForm />
        </section>
      </main>

      <Footer />

      {showMatchTest && (
        <CollegeMatchTest onClose={() => setShowMatchTest(false)} />
      )}

      {/* Floating CTA */}
      <a 
        href={WHATSAPP_LINK}
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all z-50 flex items-center gap-3 group border-4 border-white active:scale-95"
      >
        <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.891 11.891-11.891 3.181 0 6.167 1.24 8.413 3.488 2.248 2.248 3.488 5.232 3.488 8.412 0 6.556-5.332 11.891-11.891 11.891-2.015 0-3.991-.511-5.741-1.482l-6.259 1.691zm6.05-4.471c1.556.924 3.082 1.411 4.78 1.411 5.011 0 9.091-4.079 9.091-9.091 0-2.431-.945-4.714-2.661-6.43-1.717-1.717-4.001-2.662-6.43-2.662-5.011 0-9.091 4.079-9.091 9.091 0 1.761.47 3.473 1.36 5.018l-.946 3.453 3.538-.956zm11.332-6.83c-.066-.109-.241-.175-.505-.307-.263-.132-1.558-.769-1.8-.857-.242-.088-.417-.132-.593.132-.175.263-.68.857-.834 1.032-.153.175-.307.198-.57.066-.263-.132-1.113-.41-2.12-1.309-.784-.699-1.314-1.562-1.468-1.826-.153-.263-.016-.406.115-.537.118-.118.263-.307.395-.461.132-.153.175-.263.263-.44.088-.175.044-.33-.022-.461-.066-.132-.593-1.428-.813-1.956-.214-.515-.43-.445-.593-.453-.153-.008-.33-.008-.505-.008-.175 0-.461.066-.702.33-.242.263-.923.901-.923 2.198 0 1.297.945 2.549 1.077 2.725.132.175 1.86 2.84 4.505 3.984.63.272 1.12.435 1.503.556.633.201 1.21.173 1.666.105.508-.076 1.558-.637 1.777-1.253.22-.615.22-1.143.153-1.253z"/></svg>
        <span className="font-bold text-sm hidden md:block uppercase tracking-widest">Chat with Expert</span>
      </a>
    </div>
  );
};

export default App;
