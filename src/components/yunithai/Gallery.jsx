import SectionEyebrow from './SectionEyebrow';
import SectionHeading from './SectionHeading';

const IMG_LARGE = 'https://media.base44.com/images/public/69fbf37d958899c8039ce987/576000590_generated_f455f6ea.png';
const IMG_RING = 'https://media.base44.com/images/public/69fbf37d958899c8039ce987/b60738c26_generated_851e2569.png';
const IMG_SCENERY = 'https://media.base44.com/images/public/69fbf37d958899c8039ce987/762c5160c_generated_adc2a322.png';
const IMG_POOL = 'https://media.base44.com/images/public/69fbf37d958899c8039ce987/38c07c3c0_generated_559770f6.png';
const IMG_PADS = 'https://media.base44.com/images/public/69fbf37d958899c8039ce987/ed4ab9c28_generated_c042dd3c.png';
const IMG_CULTURE = 'https://media.base44.com/images/public/69fbf37d958899c8039ce987/1e8c0101a_generated_ee5b887c.png';

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-24 md:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <SectionEyebrow text="Through the Lens" />
        <SectionHeading>Life in Thailand</SectionHeading>

        <div className="grid md:grid-cols-3 gap-3 mt-16">
          {/* Large left image */}
          <div className="md:row-span-2 overflow-hidden clip-corner group">
            <img
              src={IMG_LARGE}
              alt="Traditional Wai Kru ceremony"
              className="w-full h-full object-cover min-h-[300px] md:min-h-0 transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Right grid */}
          <div className="overflow-hidden clip-corner-sm group">
            <img
              src={IMG_RING}
              alt="Outdoor Muay Thai ring"
              className="w-full h-full object-cover aspect-[4/3] transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="overflow-hidden clip-corner-sm group">
            <img
              src={IMG_SCENERY}
              alt="Thailand landscape"
              className="w-full h-full object-cover aspect-[4/3] transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="overflow-hidden clip-corner-sm group">
            <img
              src={IMG_POOL}
              alt="Resort pool"
              className="w-full h-full object-cover aspect-[4/3] transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="overflow-hidden clip-corner-sm group hidden md:block">
            <img
              src={IMG_PADS}
              alt="Pad training"
              className="w-full h-full object-cover aspect-[4/3] transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Extra row on mobile */}
        <div className="grid grid-cols-2 gap-3 mt-3 md:hidden">
          <div className="overflow-hidden clip-corner-sm group">
            <img src={IMG_PADS} alt="Pad training" className="w-full h-full object-cover aspect-square transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="overflow-hidden clip-corner-sm group">
            <img src={IMG_CULTURE} alt="Thai night market" className="w-full h-full object-cover aspect-square transition-transform duration-700 group-hover:scale-105" />
          </div>
        </div>

        <p className="font-body text-base text-foreground/40 text-center mt-10 italic">
          Train hard, recover deeply, and experience Thailand beyond the tourist path.
        </p>
      </div>
    </section>
  );
}