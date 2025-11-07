import React from "react";
import heroMedia from "../assets/bannerimg.gif";

/**
 * SplitHero.jsx — Left content, right image (fully responsive)
 * - Two-column split on md+; stacked on mobile (content → image)
 * - Premium visuals: gradient border frame, subtle glow, glass badges
 * - Accessible, keyboard-focus friendly CTAs
 * - No external libs
 */

const Bullet = ({ children }) => (
  <li className="flex items-start gap-3">
    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-amber-400/20 text-amber-300 ring-1 ring-amber-300/40">
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="3"><path d="m5 13 4 4L19 7"/></svg>
    </span>
    <span className="text-white/90">{children}</span>
  </li>
);

const SplitHero = ({
  eyebrow = "Trusted Construction Partner",
  title = (
    <>
      BUILDING THE <span className="text-amber-300">FUTURE</span>
      <br className="hidden sm:block" /> RESTORING THE <span className="text-amber-300">PAST</span>
    </>
  ),
  subtitle = "From turnkey commercial builds to heritage renovations—on time, on budget, with zero compromise on safety.",
  bullets = [
    "250+ projects delivered across residential & commercial",
    "ISO 9001 certified team • Insured & bonded",
    "End‑to‑end: design, build, and maintenance",
  ],
  primaryCta = { label: "Get Free Site Consultation", href: "#consultation" },
  secondaryCta = { label: "View Recent Work", href: "#projects" },
  stats = [
    { label: "Years", value: "12" },
    { label: "On‑Time", value: "98%" },
    { label: "Satisfaction", value: "4.9★" },
  ],
}) => {
  return (
    <section className="relative isolate overflow-hidden bg-[#112454] text-white">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-amber-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-amber-400/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[70vh]">
          {/* LEFT — Content */}
          <div className="order-3 md:order-1">
            {/* Eyebrow with pill */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 ring-1 ring-white/10 backdrop-blur">
              <span className="inline-block h-2 w-2 rounded-full bg-amber-300" />
              <span className="text-xs font-semibold tracking-wider uppercase text-white/80">{eyebrow}</span>
            </div>

            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
              {title}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-white/80 max-w-xl">
              {subtitle}
            </p>

            {/* Bullets */}
            <ul className="mt-6 space-y-3">
              {bullets.map((b, i) => (
                <Bullet key={i}>{b}</Bullet>
              ))}
            </ul>

            {/* CTAs */}
            <div className="mt-7 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href={primaryCta.href}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-400 px-5 py-3 font-semibold text-gray-900 shadow-lg ring-1 ring-black/10 hover:brightness-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
              >
                <span>{primaryCta.label}</span>
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
              <a
                href={secondaryCta.href}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 px-5 py-3 font-semibold text-white ring-1 ring-white/15 hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 8 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 3 15.4 1.65 1.65 0 0 0 1.49 14H1a2 2 0 1 1 0-4h.49A1.65 1.65 0 0 0 3 8.6a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 8 3.6 1.65 1.65 0 0 0 9.51 2H10a2 2 0 1 1 4 0h.49A1.65 1.65 0 0 0 16 3.6c.3.3.54.64.7 1.02l.06.06a2 2 0 1 1 2.83 2.83l-.06.06c-.38.16-.72.4-1.02.7-.44.44-.76.98-.91 1.57A6 6 0 0 1 12 18a6 6 0 0 1-6-6"/></svg>
                <span>{secondaryCta.label}</span>
              </a>
            </div>

            {/* Stats row */}
            <div className="mt-8 grid grid-cols-3 max-w-md gap-3">
              {stats.map((s, i) => (
                <div key={i} className="rounded-xl bg-white/5 px-3 py-3 text-center ring-1 ring-white/10 backdrop-blur">
                  <div className="text-xl font-extrabold text-white">{s.value}</div>
                  <div className="text-xs uppercase tracking-wider text-white/60">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Media */}
          <div className="order-2 md:order-2">
            <div className="relative max-w-2xl md:ml-auto">
              {/* Gradient frame */}
              <div className="rounded-2xl p-[2px] bg-gradient-to-br from-amber-400/60 via-amber-300/30 to-transparent">
                <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-2xl mt-[-30px] md:mt-0">
                  <img
                    src={heroMedia}
                    alt="Site crew at work — cranes and scaffolding"
                    className="h-[38vh] w-full  object-cover md:h-[64vh]"
                    loading="eager"
                  />
                  {/* top vignette */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                </div>
              </div>

              {/* floating corner badge */}
              <div className="absolute -top-4 -left-4 hidden sm:flex items-center gap-2 rounded-full bg-black/70 px-3 py-2 text-sm ring-1 ring-white/10 backdrop-blur">
                <span className="inline-block h-2 w-2 rounded-full bg-amber-300" />
                ISO 9001 • Safety First
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplitHero;
