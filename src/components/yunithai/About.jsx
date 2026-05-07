import SectionEyebrow from './SectionEyebrow';
import SectionHeading from './SectionHeading';

const ABOUT_MAIN = 'https://media.base44.com/images/public/69fbf37d958899c8039ce987/90924764c_generated_a83754fa.png';
const ABOUT_OVERLAY = 'https://media.base44.com/images/public/69fbf37d958899c8039ce987/e9cc01740_generated_c9ac635d.png';

const stats = [
  { number: '40', label: 'Elite Trainers' },
  { number: '12', label: 'Nations Served' },
  { number: '500+', label: 'Alumni Worldwide' },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 lg:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Images */}
          <div className="relative">
            <div className="relative overflow-hidden clip-corner">
              <img
                src={ABOUT_MAIN}
                alt="Muay Thai training"
                className="w-full aspect-[3/4] object-cover"
              />
              <div className="absolute inset-0 bg-black/10" />
              {/* Badge */}
              <div className="absolute top-5 left-5 bg-background/90 backdrop-blur-sm border border-primary/40 px-4 py-2">
                <p className="font-ui text-[9px] tracking-[0.25em] uppercase text-primary">15+ Years of Excellence</p>
              </div>
            </div>
            {/* Overlay card */}
            <div className="absolute -bottom-6 -right-4 md:bottom-8 md:-right-8 w-36 md:w-48 border border-primary/40 shadow-2xl">
              <img
                src={ABOUT_OVERLAY}
                alt="Muay Thai sparring"
                className="w-full aspect-[4/3] object-cover grayscale"
              />
            </div>
          </div>

          {/* Right — Content */}
          <div className="lg:pl-4 pt-8 lg:pt-0">
            <SectionEyebrow text="Who We Are" centered={false} />
            <SectionHeading centered={false}>
              More Than Training.<br />
              <span className="text-primary italic font-body">A Transformation.</span>
            </SectionHeading>

            <div className="mt-8 space-y-5">
              <p className="font-body text-base md:text-lg text-foreground/70 leading-relaxed">
                YuNiThai — Youth Uniting Nations Internationally — brings warriors from across the world to the heartland of Muay Thai. Under the SowGlobal umbrella, we connect accredited Thai masters with foreign students seeking true immersion beyond the gym.
              </p>
              <p className="font-body text-base md:text-lg text-foreground/70 leading-relaxed">
                From your first Wai Kru to your final sparring session, every day in Thailand deepens not just your technique, but your understanding of culture, discipline, and human connection.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="border-t border-primary/30 pt-4">
                  <p className="font-heading text-2xl md:text-3xl font-bold text-primary">{stat.number}</p>
                  <p className="font-ui text-[10px] tracking-[0.15em] uppercase text-foreground/50 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}