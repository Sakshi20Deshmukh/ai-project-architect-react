'use client';

import { Card } from './ui/card';

export function AIToolsSection({ tools = [] }) {
  if (!tools || tools.length === 0) {
    return null;
  }

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Recommended AI Tools & Technologies</h2>
          <p className="text-muted-foreground">
            Best-in-class technologies selected for your project architecture
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {tools.map((tool, index) => (
            <a
              key={index}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="group relative overflow-hidden bg-card/50 border border-border hover:border-primary transition-all duration-300 cursor-pointer h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/10 group-hover:to-accent/10 transition-all duration-300"></div>
                <div className="relative p-6 space-y-3 flex flex-col h-full">
                  <div className="flex-1">
                    <div className="mb-2">
                      <h3 className="text-lg font-semibold text-foreground">{tool.name}</h3>
                      {tool.category && (
                        <p className="text-xs font-medium text-primary uppercase tracking-wide mt-1">
                          {tool.category}
                        </p>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{tool.purpose}</p>
                  </div>
                  <div className="pt-2 flex items-center gap-1 text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Visit website</span>
                    <span>→</span>
                  </div>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
