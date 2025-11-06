import React, { useEffect, useRef, useState } from "react";

const ServiceCard = ({
  title,
  image,
  frontLines = [],
  accent = "#ff661a",
  index = 0,
}) => {
  const [flipped, setFlipped] = useState(false);
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setInView(true)),
      { threshold: 0.2 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  const toggle = () => setFlipped((s) => !s);

  return (
    <div
      ref={ref}
      className={`
        group relative w-full max-w-[23rem] md:max-w-none
        [perspective:1200px]
        transition-transform duration-300 will-change-transform
        motion-safe:transform-gpu
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
      style={{ transitionDelay: `${index * 90}ms` }}
      onClick={toggle}
      role="button"
      aria-label={`${title} service card`}
    >
      <div
        className={`
          relative rounded-2xl overflow-hidden shadow-lg
          aspect-[3/4]
          transition-transform duration-700 [transform-style:preserve-3d]
          motion-safe:transform-gpu
          ${flipped ? "[transform:rotateY(180deg)]" : ""}
          group-hover:[transform:rotateY(180deg)]
        `}
      >
        {/* FRONT (unchanged) */}
        <div className="absolute inset-0 [backface-visibility:hidden]">
          <div
            className="absolute inset-0 bg-center bg-cover"
            style={{ backgroundImage: `url(${image})` }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-[#0a1e52]/65" aria-hidden />
          <div className="relative z-10 h-full p-6 sm:p-7 flex flex-col justify-between text-white">
            <div
              className="text-sm sm:text-[0.95rem] font-extrabold tracking-[0.2em]"
              style={{ color: accent }}
            >
              {title.toUpperCase()}
            </div>

            <div className="text-center space-y-1.5 px-1">
              {frontLines.map((line, i) => (
                <p
                  key={i}
                  className="text-white/95 text-lg sm:text-xl font-semibold leading-snug"
                >
                  {line}
                </p>
              ))}
            </div>

            <div className="flex justify-center">
              <span
                className="grid place-items-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white text-[#0a1e52] shadow-xl"
                title="View image"
                aria-hidden
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
                </svg>
              </span>
            </div>
          </div>
        </div>

        {/* BACK — IMAGE ONLY (no title/lines/overlay) */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>

      {/* accent underline */}
      <div
        className="mx-auto mt-3 h-[3px] w-12 rounded-full"
        style={{ backgroundColor: accent }}
      />
    </div>
  );
};

export default ServiceCard;
