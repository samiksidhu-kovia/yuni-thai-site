export default function GoldDivider({ className = '' }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <div className="h-px w-12 bg-primary/40" />
      <div className="h-1.5 w-1.5 rotate-45 bg-primary" />
      <div className="h-px w-12 bg-primary/40" />
    </div>
  );
}