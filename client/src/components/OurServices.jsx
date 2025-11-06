import React, { useEffect, useRef, useState } from "react";
import ServiceStep from "./ServiceStep";
import houseImg from "../assets/ourhome.jpg"; 

const Arrow = ({ dir = "right", className = "" }) => {
  const base = "hidden md:flex items-center justify-center";
  const icon =
    dir === "right" ? (
      <svg viewBox="0 0 24 24" className="w-6 h-6 animate-[arrowX_1.6s_ease-in-out_infinite]">
        <path d="M5 12h13M13 5l7 7-7 7" fill="none" stroke="#26406b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ) : dir === "left" ? (
      <svg viewBox="0 0 24 24" className="w-6 h-6 animate-[arrowX_1.6s_ease-in-out_infinite_reverse]">
        <path d="M19 12H6M11 19l-7-7 7-7" fill="none" stroke="#26406b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ) : (
      <svg viewBox="0 0 24 24" className="w-6 h-6 animate-[arrowY_1.6s_ease-in-out_infinite]">
        <path d="M12 5v13M5 13l7 7 7-7" fill="none" stroke="#26406b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );

  return <div className={[base, className].join(" ")}>{icon}</div>;
};

const useReveal = () => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setInView(true)),
      { threshold: 0.15 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return { ref, inView };
};

const OurServices = () => {
  const { ref, inView } = useReveal();

  return (
    <section className="bg-[#f1f5f9] py-12 sm:py-16 lg:py-20">
      {/* custom keyframes (Tailwind arbitrary) */}
      <style>
        {`
        @keyframes arrowX { 0%,100%{ transform: translateX(0) } 50%{ transform: translateX(6px) } }
        @keyframes arrowY { 0%,100%{ transform: translateY(0) } 50%{ transform: translateY(6px) } }
        `}
      </style>

      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-[12px] tracking-[0.25em] text-[#ff6a1a] font-extrabold">
            WHAT WE DO
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#0f2230]">
            Our Services
          </h2>
          <div className="mt-3 h-[3px] w-12 bg-[#ff6a1a] mx-auto rounded-full" />
        </div>

        {/* Flow grid */}
        <div
          ref={ref}
          className={[
            "group transition-all duration-700 motion-safe:transform-gpu",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5",
          ].join(" ")}
        >
          {/* Row 1 */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-5">
            <ServiceStep
              title="Design and Specification"
              lines={[" "]} // leave a blank line to keep height similar
            />
            <Arrow dir="right" />
            <ServiceStep
              title="Estimation & Building Approval"
              lines={[" "]}
            />
            <Arrow dir="right" />
            <ServiceStep title="Arrangements Scheduling" lines={[" "]} />
          </div>

          {/* Down arrow below the third box (to next row) */}
          <Arrow dir="down" className="md:hidden my-4" />
          <div className="hidden md:flex justify-center my-3">
            <Arrow dir="down" />
          </div>

          {/* Row 2 (reverse flow ←) */}
          <div className="mt-6 md:mt-2 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-5">
            <ServiceStep
              title="Structural Detail Planning Elevation"
              lines={[" "]}
            />
            <Arrow dir="left" />
            <ServiceStep
              title="Execution Construction Phase"
              lines={[" "]}
            />
            <Arrow dir="left" />
            <ServiceStep
              title="Execution Interior Phase"
              lines={[" "]}
            />
          </div>

          {/* Down arrow under the first column to the image card */}
          <div className="flex justify-center md:justify-start mt-6 md:mt-4">
            <Arrow dir="down" />
          </div>

          {/* Image card under first column */}
          <div className="mt-4 md:mt-2 flex justify-center md:justify-start">
            <div className="rounded-xl border-2 border-[#1b49ff] bg-white/90 shadow-md overflow-hidden w-[260px] h-[200px]">
              <img
                src={houseImg}
                alt="House on hand"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
