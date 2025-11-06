import React from "react";

const ServiceStep = ({ title, lines = [], className = "" }) => {
  return (
    <div
      className={[
        "rounded-xl border-2 border-[#ff6a1a] bg-white/90 shadow-sm",
        "w-full max-w-[260px] sm:max-w-[280px] min-h-[150px]",
        "flex items-center justify-center text-center px-5 py-6",
        "transition-transform duration-500 motion-safe:transform-gpu",
        "group-hover:translate-y-[-2px]",
        className,
      ].join(" ")}
    >
      <div className="space-y-2">
        <p className="text-[11px] uppercase tracking-widest text-[#ff6a1a] font-extrabold">
          {title}
        </p>
        <div className="h-px w-8 mx-auto bg-[#ff6a1a]/70" />
        <div className="space-y-1">
          {lines.map((t, i) => (
            <p
              key={i}
              className="text-xs sm:text-[13px] text-[#0f2230] font-semibold leading-tight"
            >
              {t}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceStep;
