import SectionEyebrow from './SectionEyebrow';
import SectionHeading from './SectionHeading';
import { Swords, Landmark, Heart } from 'lucide-react';

const IMG_TRAINING = 'https://media.base44.com/images/public/69fbf37d958899c8039ce987/4e1715a1f_generated_101fbef7.png';
const IMG_CULTURE = 'https://media.base44.com/images/public/69fbf37d958899c8039ce987/0545b6491_generated_db6ce60f.png';
const IMG_WELLNESS = 'https://media.base44.com/images/public/69fbf37d958899c8039ce987/ee5783584_generated_37829310.png';

const experiences = [
  {
    num: '01',
    title: 'Certified Muay Thai Training',
    image: IMG_TRAINING,
    icon: Swords,
  },
  {
    num: '02',
    title: 'Cultural Deep Dive',
    image: IMG_CULTURE,
    icon: Landmark,
  },
  {
    num: '03',
    title: 'Recovery & Wellness',
    image: IMG_WELLNESS,
    icon: Heart,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionEyebrow text="What Awaits You" />
        <SectionHeading>The Full Immersion Experience</SectionHeading>
        <p className="font-body text-base md:text-lg text-foreground/50 text-center max-w-2xl mx-auto mt-5 leading-relaxed">
          Each element of your journey is designed to awaken discipline, respect, and excellence — the five pillars of YuNiThai.
        </p>

        <div className="grid md:grid-cols-3 gap-5 mt-16">
          {experiences.map((exp) => {
            const Icon = exp.icon;
            return (
              <div
                key={exp.num}
                className="group relative overflow-hidden clip-corner aspect-[3/4] cursor-pointer"
              >
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                {/* Number */}
                <span className="absolute top-5 right-5 font-heading text-5xl md:text-6xl font-bold text-white/[0.06]">
                  {exp.num}
                </span>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="w-10 h-10 border border-primary/50 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-heading text-lg md:text-xl font-bold uppercase tracking-wide">{exp.title}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}