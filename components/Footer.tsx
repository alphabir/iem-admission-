
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-blue-700 rounded-md flex items-center justify-center font-bold text-xl">I</div>
              <span className="text-2xl font-bold tracking-tight">IEM Kolkata Admissions 2026</span>
            </div>
            <p className="text-gray-400 max-w-md leading-relaxed">
              We provide expert admission counseling and guidance for WBJEE and JEE Main aspirants aiming for top engineering colleges in Kolkata like IEM Salt Lake and Heritage Institute.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About IEM Kolkata</a></li>
              <li><a href="#eligibility" className="hover:text-blue-400 transition-colors">Eligibility Criteria</a></li>
              <li><a href="#fees" className="hover:text-blue-400 transition-colors">Fee Structure 2026</a></li>
              <li><a href="#cutoffs" className="hover:text-blue-400 transition-colors">WBJEE Cutoffs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Popular Keywords</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li>Best Engineering College in Kolkata 2026</li>
              <li>IEM CSE Cutoff Rank</li>
              <li>IEM Direct Admission Process</li>
              <li>WBJEE 2026 Counselling Dates</li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            © 2026 IEM Kolkata Admission Guide. All rights reserved. Not affiliated directly with IEM College.
          </p>
          <div className="flex gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
