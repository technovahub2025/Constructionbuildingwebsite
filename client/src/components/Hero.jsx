import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
// Local hero images (from src/assets)
import home2 from "../assets/home2.jpg";
import home3 from "../assets/home3.jpg";

/**
 * Hero.jsx — Premium 2-slide hero (React + Tailwind) — BLUE THEME
 */

const SLIDES = [
  {
    id: 1,
    badge: "SERVICES",
    title: "BUILDING APPROVAL",
    subtitle:
      "Fast-track your permits, drawings, and compliance with our expert team.",
    ctaLabel: "VIEW PROJECTS",
    ctaHref: "#projects",
    // use local asset home2
    image: home2,
  },
  {
    id: 2,
    badge: "DESIGN",
    title: "ARCHITECTURAL DESIGN",
    subtitle: "From concept to construction — elegant, efficient, on budget.",
    ctaLabel: "GET A QUOTE",
    ctaHref: "#contact",
    // use local asset home3
    image: home3,
  },
];

export default function Hero({
  slides = SLIDES,
  height = "h-[78vh] md:h-[92vh] min-h-[520px]",
  interval = 5200,
  transitionMs = 700,
  className = "",
}) {
  const [index, setIndex] = useState(0);
  const [isHover, setIsHover] = useState(false);
  const [drag, setDrag] = useState({ active: false, dx: 0, startX: 0 });
  const rootRef = useRef(null);

  const count = slides.length;
  const goTo = (i) => setIndex(((i % count) + count) % count);
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  useEffect(() => {
    if (isHover || document.hidden) return;
    const id = setInterval(next, interval);
    return () => clearInterval(id);
  }, [index, isHover, interval]);

  useEffect(() => {
    const onVis = () => setIsHover((v) => v);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  const onDown = (e) => {
    const x = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
    setDrag({ active: true, dx: 0, startX: x });
  };
  const onMove = (e) => {
    if (!drag.active) return;
    const x = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
    setDrag((d) => ({ ...d, dx: x - d.startX }));
  };
  const onUp = () => {
    if (!drag.active) return;
    const w = rootRef.current?.clientWidth || 1;
    const thresh = w * 0.12;
    if (drag.dx > thresh) prev();
    else if (drag.dx < -thresh) next();
    setDrag({ active: false, dx: 0, startX: 0 });
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  };

  const translatePct = useMemo(() => {
    const base = -index * 100;
    if (!drag.active || !(rootRef.current?.clientWidth)) return base;
    const dxPct = (drag.dx / rootRef.current.clientWidth) * 100;
    return base + dxPct;
  }, [index, drag]);

  return (
    <section
      ref={rootRef}
      className={`relative w-full ${height} overflow-hidden ${className}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onKeyDown={onKeyDown}
      role="region"
      aria-roledescription="carousel"
      aria-label="Hero"
    >
      {/* Decorative backdrop glow (BLUE) */}
      <div className="pointer-events-none absolute -inset-20 bg-[radial-gradient(circle_at_20%_10%,rgba(12,176,248,0.25),transparent_45%),radial-gradient(circle_at_80%_90%,rgba(255,255,255,0.12),transparent_40%)]" />

      {/* Slides track */}
      <div
        className="absolute inset-0 flex"
        style={{
          width: `${count * 100}%`,
          transform: `translate3d(${translatePct}%,0,0)`,
          transition: drag.active ? "none" : `transform ${transitionMs}ms ease`,
          touchAction: "pan-y",
          cursor: drag.active ? "grabbing" : "grab",
        }}
        onMouseDown={onDown}
        onMouseMove={onMove}
        onMouseUp={onUp}
        onMouseLeave={onUp}
        onTouchStart={onDown}
        onTouchMove={onMove}
        onTouchEnd={onUp}
      >
        {slides.map((s, i) => (
          <article key={s.id} className="relative w-full h-full shrink-0" aria-label={`Slide ${i + 1}`}>
            {/* Background image with Ken Burns + subtle framer-motion fade */}
            <motion.div
              className="absolute inset-0 bg-center bg-cover will-change-transform animate-kenburns"
              style={{ backgroundImage: `url(${s.image})` }}
              initial={{ opacity: i === index ? 1 : 0.6, scale: 1 }}
              animate={i === index ? { opacity: 1, scale: 1.03 } : { opacity: 0.6, scale: 1 }}
              transition={{ duration: 0.8 }}
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/35 sm:bg-black/40" />

            {/* Diagonal ribbon — ORANGE gradient + glossy edge (matches design) */}
            <div
              aria-hidden
              className="absolute inset-y-[-25%] left-1/2 -translate-x-1/2 w-[30%] min-w-[160px] max-w-[420px] rotate-[-18deg]"
            >
              <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-b from-orange-500/95 via-orange-500/85 to-orange-600/90 shadow-2xl" />
                <div className="absolute inset-0 [mask-image:linear-gradient(to_right,transparent,black,transparent)] bg-white/30 mix-blend-overlay" />
                <div className="absolute -inset-[1px] rounded-sm pointer-events-none ring-1 ring-white/10" />
              </div>
            </div>

            {/* Content (glass card) */}
            <div className="relative h-full">
              <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center">
                <motion.div
                  className="max-w-xl text-white"
                  key={index}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {s.badge && (
                    <span className="inline-flex items-center text-[11px] sm:text-xs font-semibold tracking-widest uppercase text-white/90 bg-white/10 backdrop-blur px-2.5 py-1 rounded-full ring-1 ring-white/20">
                      {s.badge}
                    </span>
                  )}

                  <div className="mt-3 sm:mt-4 md:mt-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-6 md:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight drop-shadow-md">
                      Construction
                    </h2>
                    {/* Intentionally simplified: no subtitle (cleaner UI) */}
                    <div className="mt-6 flex flex-wrap gap-3">
                      <a
                        href={s.ctaHref}
                        className="inline-flex items-center gap-2 rounded-md bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 shadow-lg shadow-orange-900/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white transition-transform active:scale-[0.98]"
                      >
                        View Project
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M13.5 4.5a.75.75 0 000 1.5h4.19l-9.22 9.22a.75.75 0 101.06 1.06L18.75 7.06v4.19a.75.75 0 001.5 0v-6a.75.75 0 00-.75-.75h-6z"/></svg>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Vertical bullets (right) */}
      <div className="absolute right-6 md:right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-3.5 h-3.5 rounded-full ring-2 ring-orange-500/80 transition transform ${
              i === index
                ? "bg-orange-500 scale-100 opacity-100"
                : "bg-white/70 hover:bg-white scale-90 opacity-80"
            }`}
          />
        ))}
      </div>

      {/* Decorative concentric rings (right side) */}
      <div className="pointer-events-none absolute right-6 md:right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-3 z-10">
        <span className="block w-9 h-9 rounded-full border-2 border-orange-500/70" />
        <span className="block w-5 h-5 rounded-full border-2 border-orange-500/80" />
      </div>

      {/* Prev/Next (optional) */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="hidden sm:grid place-items-center absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white shadow"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M15.78 4.72a.75.75 0 010 1.06L10.56 11l5.22 5.22a.75.75 0 11-1.06 1.06l-5.75-5.75a.75.75 0 010-1.06l5.75-5.75a.75.75 0 011.06 0z" clipRule="evenodd" /></svg>
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="hidden sm:grid place-items-center absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white shadow"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M8.22 19.28a.75.75 0 010-1.06L13.44 13 8.22 7.78a.75.75 0 111.06-1.06l5.75 5.75a.75.75 0 010 1.06l-5.75 5.75a.75.75 0 01-1.06 0z" clipRule="evenodd" /></svg>
      </button>

      {/* Bottom polish gradient */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/30 to-transparent" />

      {/* Ken Burns */}
      <style>{`
        @keyframes kenburnsZoom {
          0% { transform: scale(1) translateZ(0); }
          100% { transform: scale(1.05) translateZ(0); }
        }
        .animate-kenburns { animation: kenburnsZoom 18s ease-in-out infinite alternate; }
      `}</style>
    </section>
  );
}
