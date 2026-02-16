
import React from 'react';

const Eligibility: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">IEM Kolkata Eligibility Criteria 2026</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Ensure you meet the basic requirements before applying for the 2026-27 academic session.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-shadow">
          <div className="w-16 h-16 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mb-6 text-2xl font-bold">01</div>
          <h4 className="text-xl font-bold mb-4">Educational Qualification</h4>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✔</span>
              <span>10+2 with Physics and Mathematics (Mandatory).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✔</span>
              <span>Third subject can be Chemistry / Biotech / Biology / IT.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✔</span>
              <span>Minimum 45% aggregate in PCM (40% for SC/ST).</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-shadow relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-1 text-xs font-bold rounded-bl-lg uppercase tracking-wider">Crucial</div>
          <div className="w-16 h-16 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mb-6 text-2xl font-bold">02</div>
          <h4 className="text-xl font-bold mb-4">Entrance Exams</h4>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✔</span>
              <span><strong>WBJEE 2026:</strong> Primary mode of admission for West Bengal students.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✔</span>
              <span><strong>JEE Main 2026:</strong> Eligible candidates can apply through All India quota.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✔</span>
              <span>IEMJEE: Candidates can also appear for institutional level tests.</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-shadow">
          <div className="w-16 h-16 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mb-6 text-2xl font-bold">03</div>
          <h4 className="text-xl font-bold mb-4">Other Channels</h4>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✔</span>
              <span><strong>Direct Admission:</strong> Limited seats available under Management Quota.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✔</span>
              <span><strong>Lateral Entry (JELET):</strong> For Diploma holders entering directly into 2nd year.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✔</span>
              <span>Minimum 60% in Class 10/12 preferred for top branches.</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="mt-12 p-6 bg-yellow-50 rounded-xl border-l-8 border-yellow-400">
        <p className="text-yellow-800 font-semibold italic flex items-center gap-2">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/></svg>
          Pro Tip for Parents: Start the application process early. CSE and IT seats in IEM usually fill up by the end of Round 1 of WBJEE Counselling.
        </p>
      </div>
    </div>
  );
};

export default Eligibility;
