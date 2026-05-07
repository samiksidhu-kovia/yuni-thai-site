import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionEyebrow from './SectionEyebrow';
import SectionHeading from './SectionHeading';

const IMG_1 = 'https://media.base44.com/images/public/69fbf37d958899c8039ce987/37c10867d_generated_1b128a51.png';
const IMG_2 = 'https://media.base44.com/images/public/69fbf37d958899c8039ce987/778562ac2_generated_6b62fea3.png';
const IMG_3 = 'https://media.base44.com/images/public/69fbf37d958899c8039ce987/342f753dd_generated_7f8ebbf8.png';
const IMG_4 = 'https://media.base44.com/images/public/69fbf37d958899c8039ce987/3d789267e_generated_5320fcbf.png';

const accommodations = [
  {
    image: IMG_1,
    name: 'Muay Thai Guesthouse',
    label: 'WARRIOR PATH INCLUDED',
    description: 'Authentic Thai-style rooms located within the training compound. Immersive atmosphere, communal dining, and instant access to the gym floor.',
    tags: ['Pool', 'WiFi', 'AC', 'Gym Access 24/7'],
  },
  {
    image: IMG_2,
    name: 'Boutique Training Lodge',
    label: "CHAMPION'S CAMP INCLUDED",
    description: 'Upscale private rooms with Thai decor, en-suite bathrooms, and a serene garden setting — 5 minutes from the main training hall.',
    tags: ['Private Bath', 'Garden', 'Massage Suite', 'Restaurant'],
  },
  {
    image: IMG_3,
    name: 'Private Luxury Villa',
    label: 'GRAND MASTER INCLUDED',
    description: "Exclusive private villa with personal staff, infinity pool, and a dedicated wellness terrace. The ultimate warrior's retreat.",
    tags: ['Infinity Pool', 'Chef', 'Private Trainer', 'Concierge'],
  },
  {
    image: IMG_4,
    name: 'Beachside Wellness Retreat',
    label: 'ADD-ON OPTION',
    description: 'End your programme with 3 nights at a beachside resort. Traditional herbal therapies, ocean meditation, and Muay Thai sunset sessions.',
    tags: ['Beach', 'Spa', 'Yoga', 'Ocean View'],
  },
];

export default function Accommodations() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % accommodations.length);
  const prev = () => setCurrent((c) => (c - 1 + accommodations.length) % accommodations.length);

  return (
    <section className="relative py-24 md:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionEyebrow text="Where You'll Rest" />
        <SectionHeading>Curated Accommodations</SectionHeading>
        <p className="font-body text-base md:text-lg text-foreground/50 text-center max-w-2xl mx-auto mt-5 leading-relaxed">
          Every stay is selected for comfort, proximity to training facilities, and authentic Thai atmosphere.
        </p>

        {/* Desktop grid */}
        <div className="hidden lg:grid grid-cols-4 gap-5 mt-16">
          {accommodations.map((acc) => (
            <AccommodationCard key={acc.name} acc={acc} />
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="lg:hidden mt-12">
          <AccommodationCard acc={accommodations[current]} />
          <div className="flex items-center justify-center gap-4 mt-6">
            <button onClick={prev} className="w-10 h-10 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="font-ui text-xs tracking-[0.15em] text-foreground/40">
              {current + 1} / {accommodations.length}
            </span>
            <button onClick={next} className="w-10 h-10 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function AccommodationCard({ acc }) {
  return (
    <div className="group bg-card border border-primary/10 hover:border-primary/30 transition-all duration-500 overflow-hidden clip-corner">
      <div className="relative overflow-hidden aspect-video">
        <img
          src={acc.image}
          alt={acc.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        <div className="absolute top-3 left-3 bg-primary/90 text-primary-foreground px-2.5 py-1">
          <span className="font-ui text-[8px] tracking-[0.15em] font-semibold">{acc.label}</span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-heading text-base font-bold">{acc.name}</h3>
        <p className="font-body text-sm text-foreground/50 mt-3 leading-relaxed">{acc.description}</p>
        <div className="flex flex-wrap gap-1.5 mt-4">
          {acc.tags.map((tag) => (
            <span key={tag} className="font-ui text-[8px] tracking-[0.1em] uppercase border border-primary/20 text-foreground/40 px-2 py-1">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}