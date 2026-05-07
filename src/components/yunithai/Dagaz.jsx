import SectionEyebrow from './SectionEyebrow';
import SectionHeading from './SectionHeading';
import GoldDivider from './GoldDivider';

const DAGAZ_IMG = 'https://media.base44.com/images/public/69fbf37d958899c8039ce987/00aa96bea_image.png';

const brainwaves = [
  {
    state: 'Delta',
    hz: '0.5 – 4 Hz',
    label: 'Deep Rest',
    description: 'The deepest recovery state. Associated with dreamless sleep, cellular repair, and growth hormone release.',
  },
  {
    state: 'Theta',
    hz: '4 – 8 Hz',
    label: 'Meditative Flow',
    description: 'The borderline between waking and sleep. Linked to deep meditation, creativity, and subconscious processing.',
  },
  {
    state: 'Alpha',
    hz: '8 – 14 Hz',
    label: 'Calm Focus',
    description: 'Relaxed but alert. Ideal for stress reduction, mental clarity, and light recovery between training sessions.',
  },
  {
    state: 'Beta',
    hz: '14 – 30 Hz',
    label: 'Active Mind',
    description: 'Alert and engaged. Used for focus and performance priming before training or competition.',
  },
];

export default function Dagaz() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        <SectionEyebrow text="Recovery Technology" />
        <SectionHeading>
          DAGAZ Light &amp; Sound<br />
          <span className="text-primary italic font-body">Recovery</span>
        </SectionHeading>

        {/* Intro two-column */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-16">
          {/* Image */}
          <div className="relative overflow-hidden clip-corner">
            <img
              src={DAGAZ_IMG}
              alt="DAGAZ light and sound glasses"
              className="w-full aspect-square object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            <div className="absolute bottom-5 left-5 bg-background/80 backdrop-blur-sm border border-primary/40 px-4 py-2">
              <p className="font-ui text-[9px] tracking-[0.25em] uppercase text-primary">Brainwave Entrainment Technology</p>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="font-body text-base md:text-lg text-foreground/70 leading-relaxed mb-5">
              DAGAZ is a non-invasive light and sound system designed to guide the brain into specific restorative states using rhythmic pulses of light and binaural audio frequencies — a process known as brainwave entrainment.
            </p>
            <p className="font-body text-base md:text-lg text-foreground/70 leading-relaxed mb-5">
              At YuNiThai, DAGAZ sessions are offered as a complement to physical training — helping students accelerate recovery, reduce mental fatigue, and arrive at each session with greater clarity and focus.
            </p>
            <p className="font-body text-base md:text-lg text-foreground/70 leading-relaxed">
              Sessions typically run 20–45 minutes and are guided by trained facilitators. No prior meditation experience is required.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <button
                onClick={() => scrollTo('contact')}
                className="font-ui text-[11px] tracking-[0.2em] uppercase bg-primary text-primary-foreground px-8 py-3.5 hover:bg-primary/90 transition-all duration-300 clip-corner-sm"
              >
                Add to My Programme
              </button>
              <button
                onClick={() => scrollTo('experience')}
                className="font-ui text-[11px] tracking-[0.2em] uppercase border border-foreground/30 text-foreground px-8 py-3.5 hover:border-primary hover:text-primary transition-all duration-300 clip-corner-sm"
              >
                View Full Experience
              </button>
            </div>
          </div>
        </div>

        {/* Brainwave Breakdown */}
        <div className="mt-20">
          <GoldDivider className="mb-12" />
          <p className="font-ui text-[10px] tracking-[0.3em] uppercase text-primary text-center mb-10">Brainwave Breakdown</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {brainwaves.map((bw) => (
              <div
                key={bw.state}
                className="bg-card border border-primary/10 hover:border-primary/30 transition-all duration-500 p-6 clip-corner"
              >
                <div className="flex items-end gap-2 mb-1">
                  <p className="font-heading text-2xl font-bold text-primary">{bw.state}</p>
                </div>
                <p className="font-ui text-[9px] tracking-[0.2em] uppercase text-foreground/40 mb-1">{bw.hz}</p>
                <p className="font-ui text-[10px] tracking-[0.15em] uppercase text-primary/70 mb-4">{bw.label}</p>
                <p className="font-body text-sm text-foreground/55 leading-relaxed">{bw.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <p className="font-ui text-[9px] tracking-[0.1em] text-foreground/25 text-center mt-14 max-w-2xl mx-auto leading-relaxed">
          DAGAZ sessions are offered as a complementary wellness experience and are not a substitute for medical treatment. Not recommended for individuals with epilepsy, photosensitivity, or certain neurological conditions. Consult your physician if in doubt.
        </p>

      </div>
    </section>
  );
}