"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Menu, X, ArrowRight, ShieldPlus } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect listener
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Doctors", path: "/doctors" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out px-6 md:px-16 lg:px-24 text-white ${
        scrolled 
          ? "py-4 bg-[#020813]/85 backdrop-blur-2xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] border-b border-white/10" 
          : "py-6 bg-transparent border-b border-transparent"
      }`}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto w-full">
        
        {/* Premium Brand Logo (Matched with Footer) */}
        <Link href="/" className="flex items-center gap-3 group relative z-50">
          <div className="w-9 h-9 md:w-10 md:h-10 bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.3)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transition-all duration-300">
            <ShieldPlus className="w-5 h-5 md:w-5 md:h-5 text-white" />
          </div>
          <span className="text-xl md:text-2xl font-extrabold tracking-tight text-white">
            National <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">Hospital</span>
          </span>
        </Link>

        {/* Desktop Links with Glowing Animated Underline */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-semibold">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.path} 
              className="relative group py-2"
            >
              <span className="text-white/80 group-hover:text-white transition-colors duration-300 tracking-wide">
                {link.name}
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-400 to-teal-300 transition-all duration-300 group-hover:w-full rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-5">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 cursor-pointer transition-all duration-300 group">
            <Search className="w-4 h-4 text-white/80 group-hover:text-white" />
          </div>
          <Link href="/contact">
            <button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white px-6 py-2.5 text-sm font-bold rounded-xl transition-all duration-300 shadow-[0_0_20px_-5px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_-5px_rgba(37,99,235,0.6)] hover:scale-[1.02] group">
              Appointment
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button 
          className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 text-white hover:bg-white/10 rounded-xl transition-colors" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-5 h-5 text-blue-400" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Full-Screen Glassmorphism Menu */}
      <div 
        className={`fixed inset-0 bg-[#020813]/95 backdrop-blur-2xl z-40 flex flex-col items-center justify-center transition-all duration-500 ease-in-out lg:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-teal-500/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="flex flex-col items-center gap-6 w-full px-8 relative z-10">
          {navLinks.map((link, index) => (
            <Link 
              key={link.name}
              href={link.path} 
              onClick={() => setIsOpen(false)} 
              className={`text-3xl font-bold text-white/80 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-teal-300 transition-all duration-300 ${
                isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${isOpen ? index * 50 : 0}ms` }}
            >
              {link.name}
            </Link>
          ))}
          
          <Link 
            href="/contact" 
            onClick={() => setIsOpen(false)}
            className={`w-full max-w-sm mt-8 ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: `${isOpen ? navLinks.length * 50 : 0}ms` }}
          >
            <button className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-4 text-lg font-bold rounded-2xl shadow-[0_0_30px_-5px_rgba(37,99,235,0.5)]">
              Book Appointment
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}