import React from "react";

const SectionTitle = ({ children }) => (
  <h4 className="text-white font-bold text-base tracking-wide mb-4">
    {children}
  </h4>
);

const IconBox = ({ children }) => (
  <span className="inline-flex w-9 h-9 items-center justify-center rounded-md bg-[#0d2a59] ring-1 ring-white/10">
    {children}
  </span>
);

const LinkItem = ({ href, children }) => (
  <a
    href={href}
    className="text-slate-300 hover:text-white transition-colors text-sm leading-7"
  >
    {children}
  </a>
);

const HoursRow = ({ day, time, closed }) => (
  <div className="flex items-center justify-between gap-3 rounded-md bg-[#0d2a59]/60 ring-1 ring-white/10 px-3 py-2">
    <span className="text-slate-200 text-sm">{day}</span>
    {closed ? (
      <span className="text-[11px] font-semibold rounded bg-[#ff6a1a] text-white px-2 py-0.5">
        Closed
      </span>
    ) : (
      <span className="text-slate-300 text-sm">{time}</span>
    )}
  </div>
);

const Footer = () => {
  const services = [
    ["Home", "#"],
    ["Building Estimator", "#estimator"],
    ["Project Videos", "#videos"],
    ["Gallery", "#gallery"],
    ["About Us", "#about"],
    ["Contact Us", "#contact"],
  ];

  const socials = [
    ["Facebook", "#"],
    ["Instagram", "#"],
    ["Youtube", "#"],
  ];

  return (
    <footer className="relative overflow-hidden bg-[#08264b]">
      {/* skyline background */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-[220px] bg-no-repeat bg-bottom opacity-30"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1440 320%22 preserveAspectRatio=%22none%22><path fill=%22%23061f3f%22 d=%22M0,224L48,234.7C96,245,192,267,288,272C384,277,480,267,576,256C672,245,768,235,864,224C960,213,1056,203,1152,186.7C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z%22/></svg>')",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-10 pb-6">
        {/* GRID */}
        <div className="grid gap-10 lg:gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Contact */}
          <div>
            <SectionTitle>Contact Us</SectionTitle>
            <p className="text-slate-300 text-sm leading-6">
              9, 1st Cross Rd, Jawahar Nagar, Reddiarpalayam,
              <br />
              Puducherry, 605005
            </p>

            <div className="mt-4 space-y-3">
              <div className="flex items-center gap-3">
                <IconBox>
                  {/* phone */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#ff6a1a">
                    <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.1-.2 1.1.5 2.3.8 3.6.8.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.1 21 3 13.9 3 5c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.7 3.6.1.3.1.6-.2 1.1l-2.2 2.2z" />
                  </svg>
                </IconBox>
                <a href="tel:+919688424777" className="text-slate-200 text-sm">
                  (+91)96884 24777
                </a>
              </div>

              <div className="flex items-center gap-3">
                <IconBox>
                  {/* email */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#ff6a1a">
                    <path d="M20 6v12H4V6l8 7 8-7zM4 6h16" />
                  </svg>
                </IconBox>
                <a
                  href="mailto:gulfrajbuilders@gmail.com"
                  className="text-slate-200 text-sm"
                >
                  gulfrajbuilders@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Service Menu */}
          <div>
            <SectionTitle>Service Menu</SectionTitle>
            <ul className="grid gap-2">
              {services.map(([label, href]) => (
                <li key={label}>
                  <LinkItem href={href}>▸ {label}</LinkItem>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <SectionTitle>Useful Links</SectionTitle>
            <ul className="grid gap-2">
              {socials.map(([label, href]) => (
                <li key={label}>
                  <LinkItem href={href}>{label}</LinkItem>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <SectionTitle>Opening Hours</SectionTitle>
            <div className="space-y-2">
              <HoursRow day="Sat - Sun" time="8.00 - 14.30" />
              <HoursRow day="Monday" time="11.00 - 16.00" />
              <HoursRow day="Wed - Thu" time="7.00 - 15.30" />
              <HoursRow day="Friday" closed />
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-3 border-t border-white/10 pt-4">
          <p className="text-slate-400 text-xs">
            ©GulfRajBuilders - {new Date().getFullYear()}. Powered by Zero
            Developers
          </p>

          <nav className="flex items-center gap-5 text-slate-300 text-xs">
            <a href="#" className="hover:text-white">
              Terms of user
            </a>
            <a href="#" className="hover:text-white">
              License
            </a>
            <a href="#" className="hover:text-white">
              Support
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
