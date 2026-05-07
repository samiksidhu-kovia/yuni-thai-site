export default function SectionEyebrow({ text, centered = true }) {
  return (
    <p className={`font-ui text-xs tracking-[0.3em] uppercase text-primary mb-4 ${centered ? 'text-center' : ''}`}>
      {text}
    </p>
  );
}