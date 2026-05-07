import GoldDivider from './GoldDivider';

const NAV_ITEMS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const handleNav = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-primary/10">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-10 md:gap-16">
          {/* Logo + Description */}
          <div className="md:col-span-2">
            <img src="https://media.base44.com/images/public/69fbf37d958899c8039ce987/7c827f01c_yunilogo.png" alt="YuNiThai Logo" className="h-20 w-auto object-contain" />
            <p className="font-body text-sm text-foreground/40 mt-4 leading-relaxed max-w-md">
              YuNiThai connects international students with authentic Muay Thai training and cultural immersion in Thailand.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="font-ui text-[10px] tracking-[0.2em] uppercase text-foreground/30 mb-4">Navigation</p>
            <nav className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNav(item.href)}
                  className="font-ui text-[11px] tracking-[0.15em] uppercase text-foreground/50 hover:text-primary transition-colors text-left"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        <GoldDivider className="my-10" />

        <p className="font-ui text-[10px] tracking-[0.15em] text-foreground/20 text-center">
          © 2026 YuNiThai. All rights reserved.
        </p>
      </div>
    </footer>
  );
}