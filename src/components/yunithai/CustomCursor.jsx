import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const posRef = useRef({ x: -100, y: -100 });
  const currentPos = useRef({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const rafRef = useRef(null);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const LERP = 0.12;

    const onMove = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    const checkHover = (e) => {
      const el = e.target;
      const isClickable = el.closest(
        'a, button, [role="button"], input, textarea, select, label, [data-clickable], .group'
      );
      setHovered(!!isClickable);
    };

    const animate = () => {
      const cur = currentPos.current;
      const target = posRef.current;

      cur.x += (target.x - cur.x) * LERP;
      cur.y += (target.y - cur.y) * LERP;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${cur.x}px, ${cur.y}px) translate(-50%, -50%)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mousemove', checkHover, { passive: true });
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseenter', onEnter);

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mousemove', checkHover);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseenter', onEnter);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  const size = hovered ? 62 : 44;

  return (
    <div
      ref={cursorRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: size,
        height: size,
        border: '1px solid #D4AF37',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9999,
        opacity: visible ? (hovered ? 0.7 : 1) : 0,
        transition: 'width 0.25s cubic-bezier(0.25,0.46,0.45,0.94), height 0.25s cubic-bezier(0.25,0.46,0.45,0.94), opacity 0.3s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        mixBlendMode: 'normal',
        willChange: 'transform',
      }}
    >
      <div
        style={{
          width: 8,
          height: 8,
          borderRadius: '50%',
          backgroundColor: '#D4AF37',
          flexShrink: 0,
          transition: 'transform 0.25s ease',
          transform: hovered ? 'scale(0.6)' : 'scale(1)',
        }}
      />
    </div>
  );
}