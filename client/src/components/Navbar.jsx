import React, { useEffect, useRef, useState } from "react";
import LOGO from "../assets/logobuild1.PNG";

const NavLink = ({ href, onClick, children }) => (
  <a
    href={href}
    onClick={onClick}
    className="px-2 py-2 tracking-wide hover:text-[#ff6a1a] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff6a1a]/50 rounded-md transition-colors"
  >
    {children}
  </a>
);

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeBtnRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) closeBtnRef.current?.focus();
    return () => (document.body.style.overflow = "");
  }, [open]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 2);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* FIXED header with glass overlay */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-shadow ${
          scrolled ? "shadow-[0_6px_18px_rgba(0,0,0,0.08)]" : ""
        }`}
      >
        {/* glass layer */}
        <div
          aria-hidden="true"
          className={`absolute inset-0 -z-10 transition-all duration-300 ${
            scrolled
              ? // on scroll: translucent + blur (with proper fallback)
                "backdrop-blur-md bg-white/50 supports-[backdrop-filter]:bg-white/30 border-b border-white/30"
              : // at top: fully transparent, no border
                "bg-transparent border-b border-transparent"
          }`}
        />

        {/* ========== TOP STRIP ========== */}
        <div className="relative w-full">
          <div className="relative flex h-10 sm:h-11">
            {/* Orange segment with socials */}
            <div className="relative z-10 flex items-center gap-4 pl-4 pr-10 bg-[#ff6516] text-white text-sm shrink-0">
              {/* ... social svgs unchanged ... */}
              <a aria-label="Facebook" href="#" className="hover:opacity-90">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 1.576.077 1.786.112v3.340h-1.784c-1.116 0-1.419.534-1.419 1.657v2.449h3.188l-.53 3.667h-2.658v7.98H9.101z"/>
                </svg>
              </a>
              <a aria-label="Twitter" href="#" className="hover:opacity-90">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"/>
                </svg>
              </a>
              <a aria-label="YouTube" href="#" className="hover:opacity-90">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z"/>
                </svg>
              </a>
            </div>

            {/* white notch */}
            <div
              aria-hidden="true"
              className="relative z-10 w-0 h-0 border-t-[20px] sm:border-t-[22px] border-b-[20px] sm:border-b-[22px] border-l-[16px] sm:border-l-[18px] border-transparent border-l-white"
            />

            {/* navy segment */}
            <div className="flex-1 bg-[#166394] text-white">
              <div className="h-full w-full flex items-center justify-end gap-4 sm:gap-6 md:gap-8 px-3 sm:px-4 text-[11px] sm:text-xs">
                <span className="hidden lg:flex items-center gap-2 whitespace-nowrap">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#ff6516">
                    <path d="M12 2C8.1 2 5 5.1 5 9c0 5.3 7 13 7 13s7-7.7 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5z"/>
                  </svg>
                  Jawahar Nagar, Reddiarpalayam, Puducherry
                </span>
                <a className="hidden md:inline-flex items-center gap-2 hover:opacity-90" href="mailto:simonraj88@gmail.com">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#ff6516">
                    <path d="M20 6v12H4V6l8 7 8-7zM4 6h16"/>
                  </svg>
                  simonraj88@gmail.com
                </a>
                <a className="inline-flex items-center gap-2 hover:opacity-90 whitespace-nowrap" href="tel:+919626424777">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#ff6516">
                    <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2c.3-.3.8-.4 1.1-.2 1.1.5 2.3.8 3.6.8.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.1 21 3 13.9 3 5c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.7 3.6.1.3.1.6-.2 1.1l-2.2 2.2z"/>
                  </svg>
                  +91 96264 24777 / +91 96884 24777
                </a>
              </div>
            </div>

            {/* blue background shape (unchanged) */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute right-0 top-0 h-full w-[78%] bg-[#001b4a] [clip-path:polygon(6%_0,100%_0,100%_100%,0_100%)]"></div>
            </div>
          </div>
        </div>

        {/* ========== MAIN NAVBAR ========== */}
        <div className="w-full ">
          <div className="max-w-7xl flex mx-auto px-4">
            {/* Logo row */}
            <div className="h-16 flex gap-9 items-center justify-between md:justify-center mt-3 mb-10  md:mt-3  md:mb-9 ">
              <button
                onClick={() => setOpen(true)}
                className="md:hidden inline-flex items-center justify-center p-2 rounded border border-gray-200 text-gray-700 bg-white/70 supports-[backdrop-filter]:bg-white/40 backdrop-blur-md"
                aria-label="Open menu"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeWidth="2" strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
              </button>
              <img src={LOGO} alt="Gulf Raj Builders" className="w-[70px] md:h-[90px] md:w-[130px] " />
              <div></div>
            </div>

            {/* Desktop menu */}
            <nav className="hidden md:flex items-center justify-center gap-x-6 lg:gap-x-10 py-4 text-[12px] font-semibold rounded-md">
              <NavLink href="/">HOME</NavLink>
              <NavLink href="/Buildingestimate">BUILDING ESTIMATOR</NavLink>
              <NavLink href="/Pricing">PRICE BAR</NavLink>
              <NavLink href="#about">ABOUT US</NavLink>
              <NavLink href="#videos">PROJECT VIDEOS</NavLink>
              <NavLink href="#gallery">GALLERY</NavLink>
              <NavLink href="#contact">CONTACT US</NavLink>
            </nav>
          </div>
        </div>

        {/* mobile overlay & drawer (unchanged) */}
        <div
          aria-hidden={!open}
          onClick={() => setOpen(false)}
          className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-all duration-300 ${
            open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        />
        <aside
          className={`fixed top-0 right-0 h-full w-[88%] max-w-[380px] bg-white shadow-xl transform transition-transform duration-300 flex flex-col ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
        >
          {/* header */}
          <div className="flex items-center justify-between h-16 px-5 border-b bg-[#001b4a] text-white">
            <button
              ref={closeBtnRef}
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>

          {/* content */}
          <div className="flex-1 overflow-y-auto">
            {/* links */}
            <nav className="p-5">
              <ul className="space-y-2">
                <li><NavLink onClick={() => setOpen(false)} href="/">HOME</NavLink></li>
                <li><NavLink onClick={() => setOpen(false)} href="/Buildingestimate">BUILDING ESTIMATOR</NavLink></li>
                <li><NavLink onClick={() => setOpen(false)} href="/Pricing">PRICE BAR</NavLink></li>
                <li><NavLink onClick={() => setOpen(false)} href="/about">ABOUT US</NavLink></li>
                <li><NavLink onClick={() => setOpen(false)} href="/videos">PROJECT VIDEOS</NavLink></li>
                <li><NavLink onClick={() => setOpen(false)} href="/gallery">GALLERY</NavLink></li>
                <li><NavLink onClick={() => setOpen(false)} href="/contact">CONTACT US</NavLink></li>
              </ul>
            </nav>

            {/* contact + socials (unchanged) */}
            {/* ... keep your existing blocks ... */}
          </div>
        </aside>
      </header>

      {/* spacer to offset the fixed header height */}
      <div className="h-[106px] md:h-[140px]" />
    </>
  );
};

export default Navbar;
