import React from "react";


const Hero = () => {
  return (
    <section className="relative h-[40vh] md:h-[70vh] w-full overflow-hidden">
      {/* Video */}
      {/* <video
        className="absolute inset-0 w-full h-full object-cover"
        playsInline
        autoPlay
        muted
        loop
        src={heroVideo}
      /> */}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      {/* Center content (kept minimal per screenshot) */}
      <div className="absolute inset-0 flex items-center justify-center px-6">
        {/* if you want a small tagline above the banner, add here */}
      </div>

      {/* Bottom banner like in screenshot */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <div className="bg-black/60 backdrop-blur-sm text-white rounded-md">
            <div className="flex flex-col md:flex-row items-center md:items-stretch justify-between gap-4 p-4 sm:p-6">
              <h1 className="text-center md:text-left text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide leading-tight">
                BUILDING THE FUTURE - RESTORING THE PAST
              </h1>

              <div className="flex-shrink-0">
                <a
                  href="#consultation"
                  className="inline-flex items-center justify-center whitespace-nowrap bg-yellow-500 text-gray-900 font-semibold rounded-md px-4 sm:px-5 md:px-6 py-3 hover:opacity-95"
                >
                  Get a Free Site Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
