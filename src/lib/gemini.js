import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  process.env.REACT_APP_GEMINI_API_KEY
);

export async function generateProjectPlan(prompt) {
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    const result = await model.generateContent(`
You are an AI Project Architect specializing in modern AI-powered development tools.

Analyze this project idea:

"${prompt}"

Return STRICT JSON only with this exact structure:

{
  "valid": true,
  "projectType": "Brief project category (e.g., Web App, Mobile App, AI Tool)",
  "aiTools": [
    {
      "name": "Tool Name",
      "purpose": "Specific use case for THIS project (be detailed about how it helps)",
      "url": "https://actual-tool-website.com",
      "category": "Category (e.g., AI Development, Design, Database, Deployment)"
    }
  ],
  "roadmap": [
    {
      "phase": "1",
      "step": "Phase name (e.g., Planning & Setup, Development, Testing, Deployment)",
      "description": "What to do in this phase",
      "duration": "Estimated time (e.g., 1-2 weeks)",
      "tools": ["Tool names to use in this phase"],
      "tasks": [
        "Specific task 1",
        "Specific task 2",
        "Specific task 3"
      ]
    }
  ]
}

CRITICAL REQUIREMENTS FOR AI TOOLS:
1. Select tools based on project needs (not a fixed number)
2. MUST include relevant tools from this list with EXACT URLs:
   - v0.dev (https://v0.dev) - AI UI component generator
   - Vercel (https://vercel.com) - Deployment platform
   - Cursor (https://cursor.sh) - AI code editor
   - GitHub Copilot (https://github.com/features/copilot) - AI pair programmer
   - Claude (https://claude.ai) - AI assistant for coding
   - ChatGPT (https://chat.openai.com) - AI assistant
   - Midjourney (https://midjourney.com) - AI image generation
   - Replicate (https://replicate.com) - Run AI models
   - Hugging Face (https://huggingface.co) - AI model hub
   - OpenAI API (https://platform.openai.com) - AI APIs
   - Supabase (https://supabase.com) - Backend as a service
   - Firebase (https://firebase.google.com) - Backend platform
   - Eraser (https://eraser.io) - Diagram and documentation
   - Figma (https://figma.com) - Design tool
   - Framer (https://framer.com) - Website builder
   - Notion AI (https://notion.so) - Documentation with AI
   - Perplexity (https://perplexity.ai) - AI research
   - Anthropic (https://anthropic.com) - Claude AI
   - Stability AI (https://stability.ai) - Image generation
   - ElevenLabs (https://elevenlabs.io) - AI voice generation
   - Runway (https://runwayml.com) - AI video tools

   and you can include more tools if you know with their urls according to need of project

3. For each tool, explain SPECIFICALLY how it will be used in THIS project
4. Include 4-12 tools depending on project complexity
5. Prioritize modern AI-powered tools
6. Include tools for: Planning, Design, Development, AI Features, Testing, Deployment

ROADMAP REQUIREMENTS:
1. Create 5-7 phases from planning to deployment
2. Each phase: 3-5 specific actionable tasks
3. Match tools to appropriate phases
4. Include realistic time estimates
5. Cover complete lifecycle: Planning → Design → Development → AI Integration → Testing → Deployment → Maintenance
`);

    let text = result.response.text();

    // Remove markdown code blocks if present
    text = text.replace(/```json\s*/g, '').replace(/```\s*/g, '').trim();

    // Safely parse JSON
    try {
      const parsedData = JSON.parse(text);
      
      // Validate required fields
      if (!parsedData.aiTools || !parsedData.roadmap) {
        throw new Error("Invalid response structure");
      }
      
      return parsedData;
    } catch (parseError) {
      console.error("JSON Parse Error:", parseError);
      console.error("Raw response:", text);
      throw new Error("Failed to parse AI response. Please try again.");
    }
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
}