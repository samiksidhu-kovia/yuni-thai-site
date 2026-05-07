import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['contact', 'gallery', 'experience', 'about', 'hero'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-background/95 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between h-20 md:h-28">
        {/* Logo */}
        <button onClick={() => handleNav('#hero')} className="flex items-center group">
          <img src="https://media.base44.com/images/public/69fbf37d958899c8039ce987/7c827f01c_yunilogo.png" alt="YuNiThai Logo" className="h-20 md:h-24 w-auto object-contain" />
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNav(item.href)}
              className={`font-ui text-[11px] tracking-[0.2em] uppercase transition-colors duration-300 relative pb-1 ${
                activeSection === item.href.slice(1)
                  ? 'text-primary'
                  : 'text-foreground/70 hover:text-primary'
              }`}
            >
              {item.label}
              {activeSection === item.href.slice(1) && (
                <span className="absolute bottom-0 left-0 right-0 h-px bg-primary" />
              )}
            </button>
          ))}
        </nav>

        {/* Book Now + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => handleNav('#contact')}
            className="hidden md:block font-ui text-[11px] tracking-[0.2em] uppercase bg-primary text-primary-foreground px-6 py-2.5 hover:bg-primary/90 transition-all duration-300 clip-corner-sm"
          >
            Book Now
          </button>
          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Gold underline */}
      <div className="h-px bg-primary/20" />

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background/98 backdrop-blur-xl border-b border-primary/20">
          <nav className="flex flex-col px-6 py-6 gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNav(item.href)}
                className={`font-ui text-sm tracking-[0.2em] uppercase py-3 text-left transition-colors ${
                  activeSection === item.href.slice(1)
                    ? 'text-primary'
                    : 'text-foreground/70'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNav('#contact')}
              className="font-ui text-sm tracking-[0.2em] uppercase bg-primary text-primary-foreground px-6 py-3 mt-4 clip-corner-sm text-center"
            >
              Book Now
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}