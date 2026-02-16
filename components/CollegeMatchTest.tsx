
import React, { useState } from 'react';
import { getCollegeMatchResponse } from '../services/gemini';

interface Props {
  onClose: () => void;
}

const CollegeMatchTest: React.FC<Props> = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({ rank: '', marks: '', branch: '' });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handlePredict = async () => {
    setLoading(true);
    const info = `Expected Rank: ${data.rank}, Class 12 PCM%: ${data.marks}, Preferred Branch: ${data.branch}`;
    const aiResult = await getCollegeMatchResponse(info);
    setResult(aiResult);
    setLoading(false);
    setStep(3);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-blue-900/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-[2rem] w-full max-w-lg overflow-hidden shadow-2xl relative">
        <button onClick={onClose} className="absolute top-6 right-6 text-gray-400 hover:text-gray-900 z-10 font-bold text-xl">✕</button>
        
        <div className="p-8 md:p-12">
          {step === 1 && (
            <div className="animate-fade-in-down">
              <h3 className="text-3xl font-black text-blue-900 mb-4">Start Your Match Test</h3>
              <p className="text-gray-600 mb-8">Tell us about your expected performance in WBJEE 2026.</p>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Expected WBJEE Rank (Estimate)</label>
                  <input 
                    type="number" 
                    placeholder="e.g. 4500" 
                    className="w-full border-2 border-gray-100 p-4 rounded-xl focus:border-blue-500 outline-none"
                    value={data.rank}
                    onChange={(e) => setData({...data, rank: e.target.value})}
                  />
                </div>
                <button 
                  onClick={() => setStep(2)}
                  className="w-full bg-blue-700 text-white font-black py-4 rounded-xl hover:bg-blue-800 shadow-lg"
                >
                  Next Step
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="animate-fade-in-down">
              <h3 className="text-3xl font-black text-blue-900 mb-4">Final Details</h3>
              <p className="text-gray-600 mb-8">Almost there! We just need two more details to calculate.</p>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Class 12 PCM Percentage (%)</label>
                  <input 
                    type="number" 
                    placeholder="e.g. 85" 
                    className="w-full border-2 border-gray-100 p-4 rounded-xl focus:border-blue-500 outline-none"
                    value={data.marks}
                    onChange={(e) => setData({...data, marks: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Preferred Branch</label>
                  <select 
                    className="w-full border-2 border-gray-100 p-4 rounded-xl focus:border-blue-500 outline-none"
                    value={data.branch}
                    onChange={(e) => setData({...data, branch: e.target.value})}
                  >
                    <option value="">Select Branch</option>
                    <option value="CSE">CSE (Computer Science)</option>
                    <option value="IT">IT (Information Tech)</option>
                    <option value="ECE">ECE (Electronics)</option>
                  </select>
                </div>
                <button 
                  onClick={handlePredict}
                  disabled={loading}
                  className="w-full bg-yellow-400 text-blue-900 font-black py-4 rounded-xl hover:bg-yellow-500 shadow-lg disabled:opacity-50"
                >
                  {loading ? 'Analyzing with AI...' : 'Predict My Branch'}
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="animate-fade-in-down text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl">🤖</div>
              <h3 className="text-2xl font-black text-blue-900 mb-4">AI Prediction Result</h3>
              <div className="bg-blue-50 p-6 rounded-2xl text-gray-700 text-left mb-8 leading-relaxed italic">
                {result}
              </div>
              <button 
                onClick={onClose}
                className="w-full bg-blue-700 text-white font-black py-4 rounded-xl hover:bg-blue-800"
              >
                Got it, Thank you!
              </button>
              <button 
                onClick={() => {
                   onClose();
                   document.getElementById('admission-query')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="mt-4 text-blue-700 font-bold underline"
              >
                Talk to a Human Expert for Details
              </button>
            </div>
          )}
        </div>
        
        <div className="bg-gray-50 px-8 py-4 text-center">
          <p className="text-xs text-gray-400 font-medium">Powering by AI Counseling Engine 2.0</p>
        </div>
      </div>
    </div>
  );
};

export default CollegeMatchTest;
