"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShieldPlus } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Advanced scroll detection for the premium dynamic pill effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40); 
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Ensure menu closes strictly on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Doctors", path: "/doctors" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* ================= ELITE ANNOUNCEMENT BAR ================= */}
      <div 
        className={`fixed top-0 left-0 w-full z-[120] bg-[#020813] text-white overflow-hidden transition-all duration-[900ms] ease-[cubic-bezier(0.19,1,0.22,1)] ${
          scrolled ? "h-0 opacity-0 pointer-events-none" : "h-10 opacity-100"
        }`}
      >
        <div className="container mx-auto h-full px-4 sm:px-6 lg:px-12 flex justify-between items-center text-[8px] sm:text-[9px] font-black uppercase tracking-[0.2em] sm:tracking-[0.3em]">
          
          {/* Left Side: System Branding */}
          <div className="flex items-center gap-4 sm:gap-8">
            <div className="flex items-center gap-2 sm:gap-3 group cursor-default">
              <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-blue-500"></span>
              </span>
              <span className="text-slate-300 group-hover:text-white transition-colors duration-300">NABH Accredited Excellence</span>
            </div>
            <span className="hidden md:inline text-slate-600 border-l border-slate-700 pl-8 font-bold">Priority Medical Access</span>
          </div>

          {/* Right Side: Direct Terminal Contact */}
          <div className="flex items-center gap-6">
            <a href="tel:+918001234567" className="hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group">
              <span className="text-slate-500 group-hover:text-blue-400 transition-colors hidden sm:inline">Direct Helpline:</span>
              <span className="tracking-widest group-hover:tracking-[0.25em] transition-all duration-300">+91 800 123 4567</span>
            </a>
          </div>
        </div>
      </div>

      {/* ================= MAIN FLOATING HEADER (DYNAMIC PILL) ================= */}
      <header 
        className={`fixed left-0 w-full z-[110] transition-all duration-[900ms] ease-[cubic-bezier(0.19,1,0.22,1)] ${
          scrolled ? "top-4 sm:top-6" : "top-10"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 max-w-[90rem]">
          <nav 
            className={`flex items-center justify-between transition-all duration-[900ms] ease-[cubic-bezier(0.19,1,0.22,1)] relative ${
              scrolled 
                ? "bg-white/90 backdrop-blur-2xl shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)] border border-slate-200/50 rounded-full px-4 sm:px-6 py-3 sm:py-3.5" 
                : "bg-transparent border-transparent rounded-none px-2 py-6 sm:py-8"
            }`}
          >
            
            {/* Logo Section */}
            <Link href="/" className="group flex items-center gap-3 sm:gap-4 relative z-[160] outline-none">
              <div className="relative">
                <div className={`flex items-center justify-center rounded-[1rem] shadow-[0_10px_20px_-10px_rgba(0,0,0,0.3)] transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-rotate-6 group-hover:scale-105 ${
                  scrolled ? "w-10 h-10 bg-[#0b2447] text-white group-hover:bg-blue-600" : "w-12 h-12 bg-white text-[#0b2447] group-hover:bg-blue-500 group-hover:text-white"
                }`}>
                  <ShieldPlus className={`transition-all duration-500 ${scrolled ? "w-5 h-5" : "w-6 h-6"}`} />
                </div>
              </div>
              <div className="flex flex-col">
                <span className={`font-black tracking-tighter leading-none transition-all duration-500 ${
                  isOpen ? 'text-white' : (scrolled ? 'text-[#0b2447]' : 'text-white')
                } ${scrolled ? 'text-lg sm:text-xl' : 'text-xl sm:text-2xl'}`}>
                  National<span className={isOpen ? 'text-blue-400' : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400'}>Hospital</span>
                </span>
                <span className={`font-black uppercase mt-1 transition-all duration-500 ${
                  isOpen ? 'text-slate-500' : (scrolled ? 'text-slate-400' : 'text-white/60')
                } ${
                  scrolled ? 'text-[6px] tracking-[0.4em]' : 'text-[7px] tracking-[0.5em]'
                }`}>
                  Neuro Center
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className={`hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2 transition-all duration-700 ${
              scrolled ? "bg-slate-100/60 border border-slate-200/60 p-1.5 rounded-full" : ""
            }`}>
              {navLinks.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <Link 
                    key={link.name} 
                    href={link.path} 
                    className={`relative px-4 xl:px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 group overflow-hidden outline-none ${
                      isActive 
                        ? (scrolled ? "text-white shadow-md" : "text-[#0b2447] bg-white shadow-lg") 
                        : (scrolled ? "text-slate-500 hover:text-[#0b2447]" : "text-white/80 hover:text-white")
                    }`}
                  >
                    {isActive && scrolled && (
                      <div className="absolute inset-0 bg-[#0b2447] rounded-full -z-10 shadow-md transition-all duration-500"></div>
                    )}
                    {!isActive && (
                      <div className={`absolute inset-0 rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-90 group-hover:scale-100 ${scrolled ? "bg-slate-200/50" : "bg-white/10"}`}></div>
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </Link>
                );
              })}
            </div>

            {/* Action Cluster (CTA & Ultra-Premium Hamburger) */}
            <div className="flex items-center gap-4 sm:gap-6 relative z-[160]">
              <Link 
                href="/appointment" 
                className={`hidden md:flex group relative items-center justify-center rounded-xl shadow-[0_10px_20px_-10px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_30px_-10px_rgba(37,99,235,0.4)] overflow-hidden transition-all duration-500 active:scale-95 outline-none ${
                  scrolled ? "h-10 w-44" : "h-12 w-52"
                }`}
              >
                {/* Dynamic Base Background */}
                <div className={`absolute inset-0 transition-colors duration-500 ${scrolled ? "bg-[#0b2447]" : "bg-white"}`}></div>
                {/* Swipe hover effect */}
                <div className="absolute inset-0 bg-blue-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]"></div>
                
                <div className={`relative font-black uppercase flex items-center gap-2 transition-all duration-300 group-hover:text-white ${
                  scrolled ? "text-[8px] tracking-[0.2em] text-white" : "text-[9px] tracking-[0.3em] text-[#0b2447]"
                }`}>
                  Book Appointment
                  <svg className="w-3 h-3 transform transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </div>
              </Link>

              {/* Ultra-Premium Hamburger Button */}
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                aria-label="Toggle Menu"
                className={`relative w-12 h-12 lg:hidden rounded-2xl flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] outline-none ${
                  isOpen 
                  ? "bg-white/10" 
                  : scrolled 
                    ? "bg-slate-50 border border-slate-200 hover:bg-slate-100" 
                    : "bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20"
                }`}
              >
                <div className="flex flex-col items-center justify-center w-6 h-6 gap-1.5 relative">
                  <span className={`block w-6 h-[2px] rounded-full transition-all duration-500 origin-center ${
                    isOpen ? "absolute bg-white rotate-45" : (scrolled ? "bg-[#0b2447]" : "bg-white")
                  }`}></span>
                  <span className={`block w-6 h-[2px] rounded-full transition-all duration-300 ${
                    isOpen ? "opacity-0 bg-white" : (scrolled ? "bg-[#0b2447]" : "bg-white")
                  }`}></span>
                  <span className={`block w-6 h-[2px] rounded-full transition-all duration-500 origin-center ${
                    isOpen ? "absolute bg-white -rotate-45" : (scrolled ? "bg-[#0b2447]" : "bg-white")
                  }`}></span>
                </div>
              </button>
            </div>

          </nav>
        </div>
      </header>

      {/* ================= REFINED MOBILE OVERLAY (FULL SCREEN MATRIX) ================= */}
      <div 
        className={`fixed inset-0 z-[150] lg:hidden transition-all duration-[900ms] ease-[cubic-bezier(0.19,1,0.22,1)] ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Dark Background with subtle blur/gradient */}
        <div className={`absolute inset-0 bg-[#020813] transition-transform duration-[900ms] ease-[cubic-bezier(0.19,1,0.22,1)] ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}>
            <div className="absolute bottom-0 right-0 w-[150vw] h-[150vw] bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-blue-600/15 via-transparent to-transparent opacity-80 pointer-events-none translate-x-1/4 translate-y-1/4"></div>
            <div className="absolute top-1/4 left-0 w-full h-full opacity-[0.02] text-white font-black text-[22vw] leading-none select-none pointer-events-none flex items-center justify-center -rotate-12">
              HOSPITAL
            </div>
        </div>

        {/* Menu Content */}
        <div className="relative h-full flex flex-col justify-between p-8 sm:p-12 overflow-y-auto pt-32 pb-12">
          
          <div className="space-y-10 sm:space-y-12">
            <div className="flex items-center gap-4 transition-all duration-700 delay-300" style={{ opacity: isOpen ? 1 : 0, transform: isOpen ? 'translateY(0)' : 'translateY(20px)' }}>
              <div className="w-8 h-[2px] bg-blue-500"></div>
              <p className="text-blue-400 font-black uppercase tracking-[0.5em] text-[9px] sm:text-[10px]">Navigation Matrix</p>
            </div>
            
            <div className="flex flex-col gap-6 sm:gap-8">
              {navLinks.map((link, i) => (
                <Link 
                  key={link.name} 
                  href={link.path} 
                  className="group relative inline-block w-max outline-none"
                  onClick={() => setIsOpen(false)}
                >
                  <span 
                    className={`text-4xl sm:text-5xl md:text-6xl font-black text-slate-300 group-hover:text-white tracking-tighter block transition-all duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)] ${
                      isOpen ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
                    }`}
                    style={{ transitionDelay: `${isOpen ? i * 80 + 400 : 0}ms` }}
                  >
                    {link.name}
                  </span>
                  <div className="absolute -bottom-2 left-0 w-0 h-[3px] bg-blue-500 transition-all duration-500 ease-out group-hover:w-full"></div>
                </Link>
              ))}
            </div>
          </div>

          <div className={`transition-all duration-[900ms] ease-[cubic-bezier(0.19,1,0.22,1)] transform mt-16 ${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`} style={{ transitionDelay: isOpen ? '800ms' : '0ms' }}>
            
            <Link 
              href="/appointment" 
              onClick={() => setIsOpen(false)}
              className="group flex items-center justify-between w-full bg-white text-[#0b2447] p-3 pl-8 sm:p-4 sm:pl-10 rounded-[1.5rem] hover:bg-blue-600 hover:text-white transition-all duration-500 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] outline-none active:scale-[0.98]"
            >
              <span className="font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-[11px]">Book Appointment</span>
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#0b2447] rounded-full flex items-center justify-center text-white group-hover:scale-95 transition-transform duration-500 shadow-md">
                 <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </div>
            </Link>
            
            <div className="flex justify-center gap-10 mt-12 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
              <a href="#" className="hover:text-white hover:tracking-[0.4em] transition-all duration-500 outline-none">Instagram</a>
              <a href="#" className="hover:text-white hover:tracking-[0.4em] transition-all duration-500 outline-none">LinkedIn</a>
              <a href="#" className="hover:text-white hover:tracking-[0.4em] transition-all duration-500 outline-none">Twitter</a>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}