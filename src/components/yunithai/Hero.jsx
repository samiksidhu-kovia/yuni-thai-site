import { useEffect, useRef } from 'react';
import { Award, Users, Star, Globe } from 'lucide-react';

const HERO_IMG = 'https://media.base44.com/images/public/69fbf37d958899c8039ce987/f05571952_image.png';

export default function Hero() {
  const imgRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!imgRef.current) return;
      const scrollY = window.scrollY;
      // Move image at 40% of scroll speed for a subtle parallax
      imgRef.current.style.transform = `translateY(${scrollY * 0.4}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          ref={imgRef}
          src={HERO_IMG}
          alt="Muay Thai training in Thailand"
          className="w-full h-full object-cover will-change-transform"
          style={{ transform: 'translateY(0px)', top: '-10%', height: '120%' }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-5 max-w-4xl mx-auto pt-24">
        <p className="font-ui text-[10px] md:text-xs tracking-[0.4em] uppercase text-primary mb-6 md:mb-8">
          Thailand's Premier Training Experience
        </p>

        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold uppercase leading-[1.1] tracking-wide mb-6 md:mb-8">
          Train Where<br />
          <span className="text-primary">Legends</span> Are Forged
        </h1>

        <p className="font-body text-base md:text-lg lg:text-xl text-foreground/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          Total immersion in authentic Muay Thai — guided by Thailand's elite WMC-accredited masters.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <button
            onClick={() => scrollTo('contact')}
            className="font-ui text-[11px] tracking-[0.2em] uppercase bg-primary text-primary-foreground px-8 py-3.5 hover:bg-primary/90 transition-all duration-300 clip-corner-sm w-full sm:w-auto"
          >
            View Packages
          </button>
          <button
            onClick={() => scrollTo('about')}
            className="font-ui text-[11px] tracking-[0.2em] uppercase border border-foreground/30 text-foreground px-8 py-3.5 hover:border-primary hover:text-primary transition-all duration-300 clip-corner-sm w-full sm:w-auto"
          >
            Discover More
          </button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-foreground/60">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-primary" />
            <span className="font-ui text-[10px] tracking-[0.15em] uppercase">WMC Accredited</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-primary" />
            <span className="font-ui text-[10px] tracking-[0.15em] uppercase">500+ Alumni</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-primary" />
            <span className="font-ui text-[10px] tracking-[0.15em] uppercase">4.9/5 Rating</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-primary" />
            <span className="font-ui text-[10px] tracking-[0.15em] uppercase">12 Nations</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-60">
        <span className="font-ui text-[9px] tracking-[0.3em] uppercase text-foreground/50">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
}