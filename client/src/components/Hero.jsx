// src/components/Hero.jsx
import React from "react";
import heroVideo from "../assets/bannernew1.gif";

const Hero = () => {
  return (
    <section className="relative w-full h-[80vh] md:h-[80vh] overflow-hidden ">
      {/* Background media */}
      <img
        src={heroVideo}
        alt="Construction work showcase"
        className="absolute inset-0 h-full w-full object-cover md:object-cover"
        loading="eager"
        fetchpriority="high"
      />

      {/* Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        {/* soft gradient + dark veil for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/35 to-transparent" />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Optional center content (kept minimal like your screenshot) */}
      <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6" />

      {/* Bottom CTA banner */}
      <div className="absolute bottom-0 left-0 right-0 ">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pb-5 sm:pb-8">
          <div className="backdrop-blur-sm bg-black/55 text-white rounded-lg md:rounded-xl shadow-lg ring-1 ring-white/10">
            <div className="flex flex-col md:flex-row items-center md:items-stretch justify-between gap-3 sm:gap-4 p-4 sm:p-5">
              <h1 className="text-center md:text-left font-extrabold leading-tight tracking-wide
                             text-2xl sm:text-3xl md:text-4xl">
                <span className="block">BUILDING THE FUTURE</span>
                <span className="block text-yellow-400">RESTORING THE PAST</span>
              </h1>

              <div className="flex-shrink-0 w-full md:w-auto">
                <a
                  href="#consultation"
                  className="group inline-flex w-full md:w-auto items-center justify-center gap-2
                             rounded-md sm:rounded-lg bg-yellow-400 text-gray-900 font-semibold
                             px-4 sm:px-5 md:px-6 py-2.5 sm:py-3
                             shadow hover:brightness-95 focus:outline-none focus-visible:ring-2
                             focus-visible:ring-offset-2 focus-visible:ring-yellow-300"
                >
                  <span>Get a Free Site Consultation</span>
                  <svg
                    className="h-5 w-5 translate-x-0 transition-transform group-hover:translate-x-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* subtle space below on very small screens */}
          <div className="h-2 sm:h-0" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
