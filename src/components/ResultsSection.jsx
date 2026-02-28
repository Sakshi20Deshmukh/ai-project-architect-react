'use client';

import { AIToolsSection } from './AIToolsSection';
import { RoadmapTimeline } from './RoadmapTimeline';

export function ResultsSection({ tools = [], roadmap = [] }) {
  return (
    <div className="space-y-16 pb-12">
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      <AIToolsSection tools={tools} />
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      <RoadmapTimeline roadmap={roadmap} />
    </div>
  );
}
