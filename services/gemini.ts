
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getCollegeMatchResponse = async (studentInfo: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are an expert engineering admission counselor for West Bengal. 
      Analyze this student's data and provide a concise (under 100 words) prediction for their chances at IEM Kolkata 2026.
      Mention which branch they might get (CSE, IT, ECE, EE) and if they should consider management quota.
      
      Student Data: ${studentInfo}
      
      Tone: Professional, encouraging but realistic.`,
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API error:", error);
    return "I'm sorry, I couldn't calculate your result right now. Please fill the main form and our human experts will call you!";
  }
};
