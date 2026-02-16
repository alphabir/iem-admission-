
import React from 'react';

const Fees: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">IEM Kolkata Fee Structure 2026</h2>
        <p className="text-lg text-gray-600">Transparent breakdown of B.Tech investment for the 4-year course.</p>
      </div>

      <div className="overflow-x-auto rounded-3xl border border-gray-200 shadow-xl mb-12">
        <table className="w-full text-left bg-white">
          <thead className="bg-blue-700 text-white">
            <tr>
              <th className="px-8 py-6 text-lg font-bold">Category</th>
              <th className="px-8 py-6 text-lg font-bold">Approx. Amount (INR)</th>
              <th className="px-8 py-6 text-lg font-bold">Remarks</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="px-8 py-6 font-semibold text-gray-800">1st Semester (Admission)</td>
              <td className="px-8 py-6 text-blue-700 font-bold">₹1,10,000 - ₹1,25,000</td>
              <td className="px-8 py-6 text-gray-600">Includes Caution Deposit & Univ. Fees</td>
            </tr>
            <tr className="hover:bg-gray-50 transition-colors">
              <td className="px-8 py-6 font-semibold text-gray-800">2nd to 8th Semester (Per Sem)</td>
              <td className="px-8 py-6 text-blue-700 font-bold">₹90,000 - ₹95,000</td>
              <td className="px-8 py-6 text-gray-600">Tution fees payable every 6 months</td>
            </tr>
            <tr className="bg-blue-50/50">
              <td className="px-8 py-6 font-bold text-blue-900">Total B.Tech Course Fees</td>
              <td className="px-8 py-6 text-blue-900 font-black text-2xl">₹6,40,000 - ₹6,80,000*</td>
              <td className="px-8 py-6 text-gray-800 font-medium">Estimated total for 4 years</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-50 p-8 rounded-2xl border border-dashed border-gray-300">
          <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
            <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/></svg>
            Hostel Facilities & Cost
          </h4>
          <p className="text-gray-600 mb-4 leading-relaxed">
            IEM offers separate hostel facilities for boys and girls with high-speed internet and nutritious meals.
          </p>
          <div className="flex justify-between items-center py-3 border-b border-gray-200">
            <span className="text-gray-700 font-medium">Hostel Rent + Food (Per Month)</span>
            <span className="font-bold text-gray-900">₹9,000 - ₹11,000</span>
          </div>
          <p className="text-sm text-gray-500 mt-4 italic">*Many private PGs are also available within walking distance of Sector V campus.</p>
        </div>

        <div className="bg-blue-900 text-white p-8 rounded-2xl shadow-xl flex flex-col justify-center">
          <h4 className="text-2xl font-bold mb-4">Financial Assistance</h4>
          <p className="text-blue-100 mb-6 leading-relaxed">
            IEM Kolkata supports multiple West Bengal Government scholarship schemes:
          </p>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              Swami Vivekananda Merit-cum-Means (SVMCM)
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              WBSCC - Student Credit Card Scheme (Upto 10 Lakhs)
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              Institutional Merit-based Scholarships
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Fees;
