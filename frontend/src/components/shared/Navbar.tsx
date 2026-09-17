"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Menu, X, ArrowRight, ShieldPlus, ChevronRight, Phone } from "lucide-react";

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
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out px-6 md:px-16 lg:px-24 text-white ${
          scrolled 
            ? "py-3 md:py-4 bg-[#020813]/85 backdrop-blur-2xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] border-b border-white/10" 
            : "py-5 md:py-6 bg-transparent border-b border-transparent"
        }`}
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto w-full">
          
          {/* Premium Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group relative z-50">
            <div className="w-9 h-9 md:w-10 md:h-10 bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.3)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transition-all duration-300">
              <ShieldPlus className="w-5 h-5 text-white" />
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
            className="lg:hidden relative z-50 w-11 h-11 flex items-center justify-center bg-white/5 border border-white/10 text-white hover:bg-white/10 rounded-xl transition-colors shadow-sm" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Professional Side Drawer (Replaces Full-Screen Menu) */}
      
      {/* Background Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-500 lg:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer Panel */}
      <div 
        className={`fixed top-0 right-0 h-[100dvh] w-[85%] max-w-[360px] bg-[#020813]/95 backdrop-blur-3xl z-50 border-l border-white/10 shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header / Logo Area */}
        <div className="flex items-center justify-between p-6 border-b border-white/5">
          <span className="text-white/50 font-bold tracking-widest text-[10px] uppercase">Navigation</span>
          <button 
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Drawer Links */}
        <div className="flex-1 overflow-y-auto py-6 px-6 flex flex-col gap-2">
          {navLinks.map((link, index) => (
            <Link 
              key={link.name}
              href={link.path} 
              onClick={() => setIsOpen(false)} 
              className={`flex items-center justify-between w-full p-4 rounded-2xl text-lg font-bold text-white/80 hover:text-white hover:bg-white/5 transition-all duration-300 ${
                isOpen ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
              }`}
              style={{ transitionDelay: `${isOpen ? index * 50 : 0}ms` }}
            >
              {link.name}
              <ChevronRight className="w-4 h-4 text-blue-500" />
            </Link>
          ))}
        </div>

        {/* Drawer Footer / Emergency Action */}
        <div 
          className={`p-6 border-t border-white/5 bg-gradient-to-t from-blue-900/20 to-transparent transition-all duration-500 delay-300 ${
            isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400 border border-blue-500/20">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white/50 text-xs font-bold uppercase tracking-wider mb-0.5">24/7 Emergency</p>
              <p className="text-white font-extrabold">+91 800 123 4567</p>
            </div>
          </div>
          
          <Link 
            href="/contact" 
            onClick={() => setIsOpen(false)}
            className="w-full flex justify-center items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-4 text-sm font-bold rounded-xl shadow-[0_10px_20px_-10px_rgba(37,99,235,0.5)] active:scale-95 transition-all"
          >
            Book Appointment
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </>
  );
}