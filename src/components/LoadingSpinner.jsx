'use client';

export function LoadingSpinner({ size = 'md' }) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  return (
    <div className={`${sizeClasses[size]} relative`}>
      <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary border-r-accent animate-spin"></div>
      <div className="absolute inset-1 rounded-full border border-primary/20"></div>
    </div>
  );
}
