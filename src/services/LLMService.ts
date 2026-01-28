import { GoogleGenerativeAI } from "@google/generative-ai";

if (!process.env.GEMINI_API_KEY) {
  throw new Error("GEMINI_API_KEY is missing");
}


const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
console.log("checking api key:",process.env.GEMINI_API_KEY);
console.log("Gemini API Key:", process.env.GEMINI_API_KEY ? "Loaded" : "Not Loaded");
export class LLMService {
  async analyze(prompt: string): Promise<string> {
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

      const result = await model.generateContent(prompt);

      const response = await result.response.text();

      return response || "No analysis returned.";
    } catch (error) {
      console.error("Gemini API error:", error);
      throw new Error("LLM analysis failed");
    }
  }
}
