import React, { useRef, useState } from "react";
import banner from "../assets/bannerimg.gif";

// YouTube video IDs provided by the user
const videoCards = [
  { id: 1,  videoId: "1TJOsQ-douc" },
  { id: 2, videoId: "PjcmWWYKSwc" },
  { id: 3,  videoId: "J5EGcJz7mPo" },
  { id: 4, videoId: "fgXrbvJ9e00" },
  { id: 5, videoId: "1tJDmYxXDu8" },
  { id: 6, videoId: "O4O3b1HdWRw" },
  { id: 7,  videoId: "AnEmjQOFhLU" },
  { id: 8, videoId: "mrSCT1X6JkM" },
  { id: 9, videoId: "wPJ1X5YV9u8" },
  { id: 10,  videoId: "U2V7cgn8pKs" },
];

export default function ProjectVideos() {
  const [active, setActive] = useState(videoCards[0]);

  return (
    <main className="bg-white">
      {/* Banner */}
      <div
        className="w-full h-44 sm:h-56 md:h-72 bg-center bg-cover flex items-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white drop-shadow">Project Videos</h1>
          <p className="text-sm text-white/90 mt-1">Browse our project walkthroughs and progress videos.</p>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Main player area */}
        <div className="mb-6">
          <div className="rounded-2xl overflow-hidden shadow-lg bg-black">
            <div className="w-full h-[56vh] sm:h-[60vh] md:h-[64vh] lg:h-[68vh] relative">
              <iframe
                title={active.title}
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${active.videoId}?rel=0`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Thumbnails row inside same container to match the design */}
            <div className="bg-gray-100 p-3">
              <div className="flex gap-3 overflow-x-auto py-2">
                {videoCards.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setActive(c)}
                    className={`flex-shrink-0 w-48 sm:w-56 md:w-60 lg:w-64 rounded overflow-hidden shadow-sm ${active.id === c.id ? "ring-4 ring-orange-300" : ""}`}
                    aria-label={`Play ${c.title}`}
                  >
                    <img src={`https://img.youtube.com/vi/${c.videoId}/hqdefault.jpg`} alt={c.title} className="w-full h-28 object-cover" />
                    <div className="p-2 bg-white">
                      <h4 className="text-sm font-semibold text-gray-800 truncate">{c.title}</h4>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

      </section>
    </main>
  );
}
