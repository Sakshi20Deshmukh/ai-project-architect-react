import { useState } from "react";
import { Button } from "./ui/button";
import { LoadingSpinner } from "./LoadingSpinner";
import { generateProjectPlan } from "../lib/gemini";

export function ProjectForm({ onResult = () => {}, onLoadingStart = () => {} }) {
  const [projectIdea, setProjectIdea] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!projectIdea.trim()) return;

    setIsLoading(true);
    onLoadingStart();

    try {
      // 🔥 Call Gemini
      const data = await generateProjectPlan(projectIdea);

      console.log("AI Response:", data);

      // send result to parent (App.js)
      onResult(data);
    } catch (error) {
      console.error("Gemini Error:", error);
      
      // User-friendly error messages
      let errorMessage = "Failed to generate project plan. Please try again.";
      
      if (error.message?.includes("API key")) {
        errorMessage = "Invalid API key. Please check your configuration.";
      } else if (error.message?.includes("parse")) {
        errorMessage = "Received invalid response from AI. Please try again.";
      } else if (error.message?.includes("quota") || error.message?.includes("429")) {
        errorMessage = "API quota exceeded. Please try again later.";
      }
      
      alert(errorMessage);
      setIsLoading(false);
      return;
    }

    setIsLoading(false);
  };

  return (
    <section className="container mx-auto px-4 py-12 max-w-2xl">
      <div className="space-y-6">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Describe Your Project
          </h2>

          <p className="text-muted-foreground">
            Tell us about your idea and we'll generate AI tools and a
            development roadmap.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">
              Project Idea
            </label>

            <textarea
              placeholder="Build an AI fitness app using computer vision..."
              value={projectIdea}
              onChange={(e) => setProjectIdea(e.target.value)}
              disabled={isLoading}
              className="w-full h-36 p-4 rounded-lg bg-input border border-border focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />

            <p className="text-xs text-muted-foreground">
              {projectIdea.length} / 500 characters
            </p>
          </div>

          <Button
            type="submit"
            disabled={isLoading || !projectIdea.trim()}
            className="w-full h-12 text-base font-semibold"
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <LoadingSpinner size="sm" />
                <span>Generating...</span>
              </div>
            ) : (
              "Generate Architecture"
            )}
          </Button>
        </form>
      </div>
    </section>
  );
}

