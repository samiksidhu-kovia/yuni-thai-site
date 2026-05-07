export default function SectionHeading({ children, centered = true, className = '' }) {
  return (
    <h2 className={`font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-wide leading-tight ${centered ? 'text-center' : ''} ${className}`}>
      {children}
    </h2>
  );
}