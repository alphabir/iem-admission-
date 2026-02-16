
import React from 'react';

const Placements: React.FC = () => {
  const stats = [
    { label: 'Highest Package', value: '₹72 LPA', icon: '🚀' },
    { label: 'Average (CSE)', value: '₹7.5 LPA', icon: '📈' },
    { label: 'Avg (Overall)', value: '₹5.8 LPA', icon: '📊' },
    { label: 'Placement Rate', value: '98%', icon: '✅' },
  ];

  const recruiters = [
    'TCS', 'Cognizant', 'Wipro', 'Capgemini', 'Adobe', 'Oracle', 'PwC', 'Infosys', 'Mindtree', 'Accenture'
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-blue-600 font-bold uppercase mb-2">Industry Leaders Prefer Us</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">
            Strongest Placement Track Record in Eastern India
          </h3>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            IEM Kolkata's placement cell works tirelessly with over 500+ global corporate partners. Our Salt Lake location ensures students are at the doorstep of top-tier IT companies.
          </p>

          <div className="grid grid-cols-2 gap-6 mb-12">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:border-blue-300 transition-all">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-black text-blue-900">{stat.value}</div>
                <div className="text-sm text-gray-500 font-semibold uppercase">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
            <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path d="M10.394 2.827a1 1 0 00-.788 0l-7 3a1 1 0 000 1.846l7 3a1 1 0 00.788 0l7-3a1 1 0 000-1.846l-7-3z"/><path d="M6.75 12.135V14.75a.75.75 0 00.196.5l2.25 2.25a.75.75 0 001.054 0l2.25-2.25a.75.75 0 00.196-.5v-2.615l-4.171 1.787a.75.75 0 01-.658 0l-4.171-1.787z"/></svg>
              Key Placement Partners
            </h4>
            <div className="flex flex-wrap gap-2">
              {recruiters.map((name, i) => (
                <span key={i} className="bg-white px-3 py-1.5 rounded-lg border border-gray-200 text-sm font-bold text-gray-700">
                  {name}
                </span>
              ))}
              <span className="text-blue-600 font-bold text-sm px-2 py-1.5">+ 450 more</span>
            </div>
          </div>
        </div>

        <div className="mt-12 lg:mt-0 relative">
          <div className="bg-blue-600 rounded-3xl p-8 relative overflow-hidden text-white shadow-2xl">
             <h4 className="text-2xl font-bold mb-6">Why Companies Choose IEM:</h4>
             <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="bg-white/20 p-2 rounded-lg h-fit">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <h5 className="font-bold">Aptitude & Soft Skills Training</h5>
                    <p className="text-blue-100 text-sm">Mandatory sessions starting from the 3rd year to crack technical interviews.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="bg-white/20 p-2 rounded-lg h-fit">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                  </div>
                  <div>
                    <h5 className="font-bold">Strong Coding Culture</h5>
                    <p className="text-blue-100 text-sm">Competitive programming bootcamps and hackathons hosted throughout the semester.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="bg-white/20 p-2 rounded-lg h-fit">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <div>
                    <h5 className="font-bold">Internship Readiness</h5>
                    <p className="text-blue-100 text-sm">6-month mandatory internships in top firms before final year graduation.</p>
                  </div>
                </li>
             </ul>
             <img src="https://picsum.photos/seed/placement/400/400" className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full opacity-20 pointer-events-none" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Placements;
