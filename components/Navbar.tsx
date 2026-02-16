
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
    <nav className={`fixed w-full top-0 z-[90] transition-all duration-500 ${scrolled ? 'py-4 bg-black/60 backdrop-blur-2xl border-b border-white/5' : 'py-8 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-indigo-600 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-[0_0_20px_rgba(79,70,229,0.4)]">I</div>
            <div className="flex flex-col">
              <span className="text-xl font-black text-white tracking-tighter italic leading-none">IEM KOLKATA</span>
              <span className="text-[10px] font-bold text-indigo-400 tracking-[0.3em] uppercase">Admission 2026</span>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-gray-400 hover:text-white font-black text-xs uppercase tracking-[0.15em] transition-all relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <button 
              onClick={() => document.getElementById('admission-query')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-indigo-600 text-white px-8 py-3 rounded-full font-black text-xs uppercase tracking-widest hover:bg-indigo-500 transition-all shadow-[0_10px_30px_-5px_rgba(79,70,229,0.5)] active:scale-95"
            >
              Start Application
            </button>
          </div>

          <div className="lg:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/10 rounded-2xl text-white"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 8h16M4 16h16" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Modern Fullscreen-ish Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 bg-black/95 backdrop-blur-3xl transition-all duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full px-8 py-24 space-y-8">
          <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-white/50 text-sm font-black tracking-widest">CLOSE</button>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-4xl font-black text-white italic tracking-tighter hover:text-indigo-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-10">
            <button 
              onClick={() => {
                setIsOpen(false);
                document.getElementById('admission-query')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full bg-indigo-600 text-white py-6 rounded-3xl font-black text-lg shadow-xl"
            >
              APPLY NOW
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
