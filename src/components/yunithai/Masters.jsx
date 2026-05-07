import { useState } from 'react';
import { Star } from 'lucide-react';
import SectionEyebrow from './SectionEyebrow';
import SectionHeading from './SectionHeading';
import MasterModal from './MasterModal';
import GoldDivider from './GoldDivider';

const IMG_1 = 'https://media.base44.com/images/public/69fbf37d958899c8039ce987/bddd28163_generated_b81ed66e.png';
const IMG_2 = 'https://media.base44.com/images/public/69fbf37d958899c8039ce987/3081a9950_generated_ff02f99f.png';
const IMG_3 = 'https://media.base44.com/images/public/69fbf37d958899c8039ce987/94c7d87c8_generated_f6928266.png';
const IMG_4 = 'https://media.base44.com/images/public/69fbf37d958899c8039ce987/404d3038c_generated_431ee65e.png';

const masters = [
  {
    image: IMG_1,
    name: 'Kru Somchai Petch',
    role: 'Head Master · 28 Years',
    accreditation: 'WMC',
    years: 28,
    tags: ['Clinch', 'Wai Kru', 'Foundations'],
    shortBio: 'A former Lumpinee Stadium competitor and long-time coach devoted to discipline and authentic Thai technique.',
    specialties: 'Clinch work, traditional Wai Kru, beginner foundations, fight preparation.',
    background: 'A former Lumpinee Stadium competitor and long-time coach, Kru Somchai focuses on discipline, balance, and authentic Thai technique.',
    trainingStyle: 'Patient but demanding. Best for students who want a strong technical foundation and a traditional training environment.',
    bestFor: 'Beginners, intermediate students, and fighters looking to sharpen fundamentals.',
  },
  {
    image: IMG_2,
    name: 'Kru Anan Ratchasima',
    role: 'Striking Coach · 22 Years',
    accreditation: 'WMC',
    years: 22,
    tags: ['Striking', 'Pad Work', 'Timing'],
    shortBio: 'Known for sharp pad-holding and precision-based coaching that develops cleaner striking and better fight rhythm.',
    specialties: 'Striking, pad work, leg kicks, timing, explosive combinations.',
    background: 'Known for sharp pad-holding and precision-based coaching, Kru Anan helps students develop cleaner striking and better fight rhythm.',
    trainingStyle: 'High-energy, technical, and detail-focused.',
    bestFor: 'Students focused on striking improvement, conditioning, and practical ring skills.',
  },
  {
    image: IMG_3,
    name: 'Kru Niran Suriya',
    role: 'Conditioning · 18 Years',
    accreditation: 'WMC',
    years: 18,
    tags: ['Conditioning', 'Strength', 'Endurance'],
    shortBio: 'Blends traditional Muay Thai roadwork with modern sports-science conditioning for stamina and resilience.',
    specialties: 'Conditioning, strength, endurance, recovery protocols.',
    background: 'Kru Niran blends traditional Muay Thai roadwork with modern sports-science conditioning to help students build stamina and resilience.',
    trainingStyle: 'Structured, athletic, and performance-driven.',
    bestFor: 'Students who want better endurance, strength, and physical preparation.',
  },
  {
    image: IMG_4,
    name: 'Kru Malai Wongsa',
    role: "Women's Programme · 15 Years",
    accreditation: 'IFMA',
    years: 15,
    tags: ['Technique', 'Confidence', 'All Levels'],
    shortBio: 'An IFMA gold medalist and respected mentor leading inclusive training for women and first-time international students.',
    specialties: "Women's programme, technique, confidence-building, all levels.",
    background: 'An IFMA gold medalist and respected mentor, Kru Malai leads inclusive training for women and first-time international students.',
    trainingStyle: 'Supportive, technical, and empowering while still maintaining authentic Muay Thai standards.',
    bestFor: 'Women training solo, beginners, and students who want a welcoming but serious coaching environment.',
  },
];

export default function Masters() {
  const [selectedMaster, setSelectedMaster] = useState(null);

  return (
    <section id="masters" className="relative py-24 md:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionEyebrow text="Meet the Masters" />
        <SectionHeading>Accredited Thai Trainers</SectionHeading>
        <p className="font-body text-base md:text-lg text-foreground/50 text-center max-w-2xl mx-auto mt-5 leading-relaxed">
          Every YuNiThai master is WMC-accredited with a minimum of 15 years in the ring — former champions, current mentors.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-16">
          {masters.map((master) => (
            <div
              key={master.name}
              className="group bg-card border border-primary/10 hover:border-primary/30 transition-all duration-500 overflow-hidden clip-corner cursor-pointer"
              onClick={() => setSelectedMaster(master)}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[3/4]">
                <img
                  src={master.image}
                  alt={master.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                {/* Accreditation tag */}
                <div className="absolute top-3 right-3 bg-primary/90 text-primary-foreground px-2.5 py-1">
                  <span className="font-ui text-[9px] tracking-[0.15em] font-semibold">{master.accreditation}</span>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="flex items-center gap-0.5 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                  ))}
                </div>
                <h3 className="font-heading text-base font-bold">{master.name}</h3>
                <p className="font-ui text-[9px] tracking-[0.15em] uppercase text-foreground/40 mt-1">{master.role}</p>
                <p className="font-body text-sm text-foreground/50 mt-3 leading-relaxed line-clamp-3">{master.shortBio}</p>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {master.tags.map((tag) => (
                    <span key={tag} className="font-ui text-[9px] tracking-[0.1em] uppercase border border-primary/20 text-foreground/50 px-2.5 py-1">
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="font-ui text-[10px] tracking-[0.15em] uppercase text-primary mt-5 inline-flex items-center gap-2 hover:gap-3 transition-all duration-300">
                  View Master Profile
                  <span className="text-primary">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Accreditations strip */}
        <GoldDivider className="mt-20 mb-8" />
        <p className="font-ui text-[9px] tracking-[0.25em] uppercase text-foreground/30 text-center mb-4">Accreditations</p>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-foreground/40">
          <span className="font-ui text-[10px] tracking-[0.15em] uppercase">WMC · World Muaythai Council</span>
          <span className="text-primary/30">|</span>
          <span className="font-ui text-[10px] tracking-[0.15em] uppercase">IFMA · International Federation</span>
          <span className="text-primary/30 hidden md:block">|</span>
          <span className="font-ui text-[10px] tracking-[0.15em] uppercase">Kru Muay Thai · Royal Institute</span>
        </div>
      </div>

      <MasterModal
        master={selectedMaster}
        open={!!selectedMaster}
        onClose={() => setSelectedMaster(null)}
      />
    </section>
  );
}