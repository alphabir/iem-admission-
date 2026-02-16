
import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Is WBJEE mandatory for IEM Kolkata B.Tech Admission?",
      a: "WBJEE is the primary entrance exam for the majority of seats (80%). However, 10% of seats are reserved for JEE Main candidates and 10% for Management Quota. For most students in West Bengal, appearing for WBJEE is highly recommended."
    },
    {
      q: "Can I get CSE in IEM with a 15,000 rank in WBJEE?",
      a: "Typically, CSE (Core) closes under 5,000 GMR. However, with a 15,000 rank, you might be eligible for other branches like ECE, EE or Specializations in later rounds or through the Management Quota. It's best to consult an expert for choice-filling."
    },
    {
      q: "What is the direct admission process for IEM Kolkata?",
      a: "Direct admission is possible through the 'Institutional Quota'. Candidates must have a strong academic record (60%+ in PCM) and valid entrance scores. Contact our admission desk for current availability in top branches like CSE and IT."
    },
    {
      q: "Is IEM Kolkata good for placements compared to Govt Colleges?",
      a: "IEM offers one of the best placement records among private colleges in India. While Jadavpur University or IIEST are premier, IEM's placement cell often provides better 'campus readiness training' tailored for top IT giants like TCS, CTS, and Amazon."
    },
    {
      q: "Does IEM provide hostel facilities?",
      a: "Yes, IEM has separate hostels for boys and girls with full amenities including mess, Wi-Fi, and security. Many students also prefer high-quality private PGs located in Salt Lake Sector V which are very affordable."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <p className="text-lg text-gray-600">Quick answers to help parents and students make informed decisions.</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm transition-all hover:shadow-md">
            <button 
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              className="w-full text-left px-8 py-6 flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
            >
              <span className="font-bold text-gray-800 md:text-lg pr-4">{faq.q}</span>
              <span className={`text-blue-600 font-black text-2xl transform transition-transform ${openIdx === idx ? 'rotate-45' : 'rotate-0'}`}>+</span>
            </button>
            <div className={`px-8 transition-all duration-300 ease-in-out ${openIdx === idx ? 'max-h-96 py-6 border-t border-gray-100 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">{faq.a}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-500 mb-6">Still have questions about WBJEE 2026 or IEM? Our experts are here to help.</p>
        <button 
          onClick={() => document.getElementById('admission-query')?.scrollIntoView({ behavior: 'smooth' })}
          className="text-blue-700 font-bold hover:underline"
        >
          Ask a different question →
        </button>
      </div>
    </div>
  );
};

export default FAQ;
