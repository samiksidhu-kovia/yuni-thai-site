import { Star, Quote } from 'lucide-react';
import SectionEyebrow from './SectionEyebrow';
import SectionHeading from './SectionHeading';

const testimonials = [
  {
    name: 'James Thornton',
    country: 'United States',
    image: 'https://media.base44.com/images/public/69fbf37d958899c8039ce987/162df1b0f_image.png',
    text: "I came for the training. I left with a second family. The instructors don't just teach technique — they teach life through Muay Thai. Absolutely life-changing.",
  },
  {
    name: 'Sofia Andersson',
    country: 'Sweden',
    image: 'https://media.base44.com/images/public/69fbf37d958899c8039ce987/8d439a1f7_image.png',
    text: "Three weeks in the Champion's Camp transformed my game completely. The cultural immersion was unexpected — I trained Muay Thai but discovered Thailand's soul.",
  },
  {
    name: "Marco D'Angelo",
    country: 'Italy',
    image: 'https://media.base44.com/images/public/69fbf37d958899c8039ce987/19da45309_image.png',
    text: "The Grand Master programme exceeded every expectation. Fighting in an amateur bout at the end was the proudest moment of my life. YuNiThai delivers on every promise.",
  },
];

export default function Alumni() {
  return (
    <section className="relative py-24 md:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionEyebrow text="Alumni Voices" />
        <SectionHeading>Stories from the Ring</SectionHeading>

        <div className="grid md:grid-cols-3 gap-5 mt-16">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card border border-primary/10 hover:border-primary/30 transition-all duration-500 p-6 md:p-8 clip-corner relative group"
            >
              <Quote className="w-8 h-8 text-primary/20 mb-4" />

              <div className="flex items-center gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
                ))}
              </div>

              <p className="font-body text-base text-foreground/70 leading-relaxed italic mb-8">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 overflow-hidden rounded-full flex-shrink-0">
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-heading text-sm font-bold">{t.name}</p>
                  <p className="font-ui text-[9px] tracking-[0.15em] uppercase text-foreground/40">{t.country}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}