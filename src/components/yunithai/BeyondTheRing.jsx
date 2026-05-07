import GoldDivider from './GoldDivider';

export default function BeyondTheRing() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
        <GoldDivider className="mb-10" />
        <p className="font-ui text-[10px] tracking-[0.3em] uppercase text-primary mb-4">Beyond the Ring</p>
        <h3 className="font-heading text-2xl md:text-3xl font-extrabold uppercase tracking-wide mb-6">
          More Than Muay Thai
        </h3>
        <p className="font-body text-base md:text-lg text-foreground/60 leading-relaxed mb-8">
          YuNiThai is designed to introduce students to more than technique. Between training sessions, guests experience the atmosphere, hospitality, food, landscapes, and traditions that make Thailand the birthplace of Muay Thai. The journey is built around respect for the sport and respect for the country behind it.
        </p>
        <button
          onClick={() => scrollTo('experience')}
          className="font-ui text-[11px] tracking-[0.2em] uppercase border border-primary/40 text-primary px-8 py-3 hover:bg-primary hover:text-primary-foreground transition-all duration-300 clip-corner-sm"
        >
          Explore the Experience
        </button>
        <GoldDivider className="mt-10" />
      </div>
    </section>
  );
}