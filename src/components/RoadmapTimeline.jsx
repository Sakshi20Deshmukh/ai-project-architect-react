'use client';

export function RoadmapTimeline({ roadmap = [] }) {
  if (!roadmap || roadmap.length === 0) {
    return null;
  }

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Development Roadmap</h2>
          <p className="text-muted-foreground">
            A structured timeline to guide your project from planning to deployment
          </p>
        </div>

        <div className="relative space-y-8">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-8 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20 md:transform md:-translate-x-1/2"></div>

          {/* Timeline items */}
          <div className="space-y-8">
            {roadmap.map((item, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-2 md:transform md:-translate-x-1/2 -translate-x-1/2 w-8 h-8 md:w-10 md:h-10 bg-card border-2 border-primary rounded-full flex items-center justify-center z-10">
                  <span className="text-xs md:text-sm font-bold text-primary">{item.phase || index + 1}</span>
                </div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:${index % 2 === 0 ? 'mr-1/2 pr-8 text-right' : 'ml-1/2 pl-8'}`}>
                  <div className="bg-card/50 border border-border rounded-lg p-6 hover:border-primary transition-all duration-300">
                    <div className="flex flex-col gap-2 mb-3">
                      <div className="flex items-center gap-2 justify-between">
                        <h3 className="text-lg font-semibold text-foreground">{item.step}</h3>
                        {item.duration && (
                          <span className="inline-flex items-center gap-1 text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded whitespace-nowrap">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                            {item.duration}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>

                    {/* Tools for this phase */}
                    {item.tools && item.tools.length > 0 && (
                      <div className="mb-3 flex flex-wrap gap-1">
                        {item.tools.map((tool, toolIndex) => (
                          <span
                            key={toolIndex}
                            className="text-xs bg-accent/20 text-accent-foreground px-2 py-1 rounded"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Tasks */}
                    {item.tasks && item.tasks.length > 0 && (
                      <ul className="space-y-2">
                        {item.tasks.map((task, taskIndex) => (
                          <li key={taskIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-1.5"></span>
                            <span>{task}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
