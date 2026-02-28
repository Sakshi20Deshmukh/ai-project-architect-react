'use client';

export function Header() {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">PA</span>
          </div>
          <div>
            <h1 className="text-lg font-bold text-foreground">Project Architect</h1>
            <p className="text-xs text-muted-foreground">AI-Powered Architecture Generator</p>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-1 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            Ready to architect
          </span>
        </div>
      </div>
    </header>
  );
}
