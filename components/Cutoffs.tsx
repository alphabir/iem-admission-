
import React from 'react';

const Cutoffs: React.FC = () => {
  const cutoffData = [
    { branch: 'CSE (Computer Science)', round1: '2,800 - 3,500', mopUp: '4,500 - 5,200', competition: 'Very High' },
    { branch: 'IT (Information Technology)', round1: '4,200 - 5,000', mopUp: '6,000 - 7,200', competition: 'High' },
    { branch: 'CSE (AI & ML)', round1: '3,500 - 4,200', mopUp: '5,500 - 6,500', competition: 'High' },
    { branch: 'ECE (Electronics)', round1: '7,000 - 8,500', mopUp: '12,000 - 15,000', competition: 'Moderate' },
    { branch: 'Electrical Engineering', round1: '12,000 - 15,000', mopUp: '25,000 - 30,000', competition: 'Normal' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">WBJEE Cutoff Analysis 2026 (Estimated)</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Based on previous year trends, here are the estimated rank ranges for admission in various B.Tech branches at IEM Kolkata.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6">
          <div className="overflow-x-auto shadow-lg rounded-2xl">
            <table className="w-full text-left bg-white border-collapse">
              <thead>
                <tr className="bg-gray-100 border-b border-gray-200">
                  <th className="px-6 py-4 font-bold text-gray-800">Branch Name</th>
                  <th className="px-6 py-4 font-bold text-gray-800">Round 1 (GMR)</th>
                  <th className="px-6 py-4 font-bold text-gray-800">Competition</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {cutoffData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-5 font-medium text-gray-900">{row.branch}</td>
                    <td className="px-6 py-5 font-bold text-blue-600">{row.round1}</td>
                    <td className="px-6 py-5">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                        row.competition === 'Very High' ? 'bg-red-100 text-red-700' : 
                        row.competition === 'High' ? 'bg-orange-100 text-orange-700' : 'bg-green-100 text-green-700'
                      }`}>
                        {row.competition}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg text-sm text-blue-800 flex items-center gap-2">
            <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 11V5a1 1 0 112 0v6a1 1 0 11-2 0zm0 4a1 1 0 112 0 1 1 0 01-2 0z"/></svg>
            Note: Ranks shown are General Merit Ranks (GMR). SC/ST/OBC ranks will be significantly higher.
          </div>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
          <h4 className="text-2xl font-bold text-gray-900 mb-6">How Seat Allocation Works</h4>
          <ol className="space-y-6">
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">1</span>
              <div>
                <h5 className="font-bold text-gray-900">Registration</h5>
                <p className="text-sm text-gray-600">Register on WBJEE portal after result declaration using your roll number.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">2</span>
              <div>
                <h5 className="font-bold text-gray-900">Choice Filling</h5>
                <p className="text-sm text-gray-600">Place IEM CSE as Choice #1 to maximize chances if your rank is under 4,000.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">3</span>
              <div>
                <h5 className="font-bold text-gray-900">Seat Allotment</h5>
                <p className="text-sm text-gray-600">Download your allotment letter and pay the seat acceptance fee online.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">4</span>
              <div>
                <h5 className="font-bold text-gray-900">Physical Verification</h5>
                <p className="text-sm text-gray-600">Visit IEM Salt Lake campus for final document verification and admission.</p>
              </div>
            </li>
          </ol>
          <div className="mt-8">
            <button 
              onClick={() => document.getElementById('admission-query')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 rounded-xl transition-all shadow-lg"
            >
              Get Detailed Cutoff Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cutoffs;
