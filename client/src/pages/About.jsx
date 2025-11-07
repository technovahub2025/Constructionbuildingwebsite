import React from "react";
import founderImg from "../assets/founder.png";
import leaderImg from "../assets/leader.jpg"; 

const CircleImage = ({ src, alt = "", size = 168 }) => (
  <div
    className="shrink-0 rounded-full ring-1 ring-black/5 shadow-sm overflow-hidden bg-white"
    style={{ width: size, height: size }}
  >
    <img src={src} alt={alt} className="w-full h-full object-cover" />
  </div>
);

const GradientButton = ({ children = "For More", onClick }) => (
  <button
    onClick={onClick}
    className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 bg-gradient-to-r from-indigo-500 to-purple-500 hover:opacity-95 active:opacity-90"
  >
    {children}
  </button>
);

const CardShell = ({ children, reverse = false, className = "" }) => (
  <section
    className={[
      "w-full rounded-2xl bg-white/80 backdrop-blur-sm ring-1 ring-black/5 shadow-sm",
      "p-5 sm:p-6 md:p-8",
      "grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center",
      reverse ? "md:[&>*:first-child]:order-2" : "",
      className,
    ].join(" ")}
  >
    {children}
  </section>
);

const About = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10 space-y-6 md:space-y-8">
      {/* Founder Card */}
      <CardShell>
        <div className="mx-auto md:mx-0">
          <CircleImage src={founderImg} alt="Founder" size={300} />
        </div>
        <div className="text-slate-700">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-snug text-slate-900">
            Gulf Raj Builders is a part of
            {" "}
            <span className="text-orange-600">Gulf Group’s Company</span>
          </h2>
          <div className="mt-3 space-y-3 text-sm sm:text-[15px] leading-relaxed">
            <p>
              <span className="font-medium text-slate-900">Mr. R.P. Raj</span> began his
              professional journey as a foreman in the Gulf region, particularly in Dubai,
              where he worked from 1980 to 1990.
            </p>
            <p>
              During this period, he gained valuable technical expertise and hands-on
              experience in the construction field, which laid a strong foundation for his
              future entrepreneurial efforts.
            </p>
            <p>
              After completing his tenure in the Gulf, Mr. Raj returned with a vision to
              build something of his own. In 1997, he took the bold step of establishing
              Gulf Group, a construction company.
            </p>
          </div>
        </div>
      </CardShell>

      {/* Expert Card */}
      <CardShell  className="bg-gradient-to-b from-slate-50 to-white">
        <div className="text-slate-700 ">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-snug text-slate-900">
            We are <span className="text-orange-600">Experts</span> in the Construction Industry
          </h2>
          <div className="mt-3 space-y-3 text-sm sm:text-[15px] leading-relaxed">
            <p>
              Led by Executive Engineer <span className="font-medium">Er. Lj Simonraj</span>, a
              B.Tech graduate from SRM University and a registered engineer with the Pondicherry
              Planning Authority.
            </p>
            <p>
              Gulf Raj Builders has completed over 65 homes, ensuring top‑notch quality and
              customer satisfaction. The team is known for transparency and efficient project
              delivery.
            </p>
            <p>
              The company is committed to building 500 homes over the next five years,
              demonstrating its growth mindset and ambition.
            </p>
          </div>
          <div className="mt-5">
            <GradientButton>For More</GradientButton>
          </div>
        </div>
        <div className="mx-auto md:mx-0">
          <CircleImage src={leaderImg} alt="Executive Engineer" size={300} />
        </div>
      </CardShell>
    </div>
  );
};

export default About;
