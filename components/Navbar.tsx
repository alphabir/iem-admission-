
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Eligibility', href: '#eligibility' },
    { name: 'Fees', href: '#fees' },
    { name: 'Cutoff', href: '#cutoffs' },
    { name: 'Placements', href: '#placements' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className={`fixed w-full top-0 z-[90] transition-all duration-300 ${scrolled ? 'py-4 bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-sm' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-indigo-200">I</div>
            <div className="flex flex-col">
              <span className={`text-xl font-bold tracking-tight leading-none ${scrolled ? 'text-slate-900' : 'text-slate-900'}`}>IEM KOLKATA</span>
              <span className="text-[10px] font-bold text-indigo-600 tracking-wider uppercase mt-1">Admission 2026</span>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-slate-600 hover:text-indigo-600 font-semibold text-sm transition-all relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <button 
              onClick={() => document.getElementById('admission-query')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-indigo-600 text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-indigo-700 transition-all shadow-md active:scale-95"
            >
              Apply Now
            </button>
          </div>

          <div className="lg:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 flex items-center justify-center bg-slate-100 rounded-xl text-slate-900"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 bg-white transition-all duration-500 z-[100] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full px-8 py-20 space-y-6">
          <button onClick={() => setIsOpen(false)} className="absolute top-6 right-8 text-slate-400 font-bold">CLOSE</button>
          <div className="flex items-center gap-3 mb-10">
             <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold">I</div>
             <span className="text-xl font-bold text-slate-900">IEM Portal</span>
          </div>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-3xl font-bold text-slate-900"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-8">
            <button 
              onClick={() => {
                setIsOpen(false);
                document.getElementById('admission-query')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-bold text-lg shadow-lg"
            >
              START APPLICATION
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
