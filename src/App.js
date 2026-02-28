import React, { useState } from "react";
import { Header } from "./components/Header";
import { ProjectForm } from "./components/ProjectForm";
import { RoadmapTimeline } from "./components/RoadmapTimeline";
import { AIToolsSection } from "./components/AIToolsSection";
import "./index.css";

function App() {
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleResult = (data) => {
    setResult(data);
    setIsLoading(false);
  };

  const handleLoadingStart = () => {
    setIsLoading(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-8 space-y-12">
        <ProjectForm onResult={handleResult} onLoadingStart={handleLoadingStart} />
        
        {isLoading && (
          <div className="text-center py-12">
            <div className="inline-flex items-center gap-3 text-lg text-muted-foreground">
              <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
              <span>Analyzing project...</span>
            </div>
          </div>
        )}

        {result && <AIToolsSection tools={result.aiTools} />}
        {result && <RoadmapTimeline roadmap={result.roadmap} />}
      </main>
    </div>
  );
}

export default App;
