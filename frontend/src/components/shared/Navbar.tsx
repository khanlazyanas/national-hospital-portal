"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect ke liye listener
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out px-8 md:px-16 lg:px-24 text-white ${
        scrolled ? "py-4 bg-deepNavy/95 backdrop-blur-md shadow-lg border-b border-white/10" : "py-6 bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 bg-white text-heroBlue flex items-center justify-center rounded-lg font-bold text-lg shadow-sm group-hover:scale-105 transition-transform">
            +
          </div>
          <span className="text-xl font-bold tracking-wide">
            National <span className="text-medicalCyan font-light">Hospital</span>
          </span>
        </Link>

        {/* Desktop Links with Animated Underline */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.path} 
              className="relative group py-2"
            >
              <span className="hover:text-medicalCyan transition-colors duration-300">
                {link.name}
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-medicalCyan transition-all duration-300 group-hover:w-full rounded-full"></span>
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-6">
          <div className="p-2 hover:bg-white/10 rounded-full cursor-pointer transition-colors">
            <Search className="w-5 h-5 text-white" />
          </div>
          <Link href="/contact">
            <button className="flex items-center gap-2 bg-white text-deepNavy px-6 py-2.5 text-sm font-bold rounded-lg hover:bg-medicalCyan hover:text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Appointment
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button 
          className="md:hidden relative z-50 p-2 text-white hover:bg-white/10 rounded-full transition-colors" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Full-Screen Dropdown Menu */}
      <div 
        className={`fixed inset-0 bg-deepNavy z-40 flex flex-col items-center justify-center transition-all duration-500 ease-in-out md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-8 w-full px-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.path} 
              onClick={() => setIsOpen(false)} 
              className={`text-2xl font-semibold text-white hover:text-medicalCyan transition-all duration-300 ${
                isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${isOpen ? navLinks.indexOf(link) * 50 : 0}ms` }}
            >
              {link.name}
            </Link>
          ))}
          
          <Link 
            href="/contact" 
            onClick={() => setIsOpen(false)}
            className={`w-full max-w-xs mt-4 ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            style={{ transitionDelay: `${isOpen ? navLinks.length * 50 : 0}ms` }}
          >
            <button className="w-full flex justify-center items-center gap-2 bg-medicalCyan text-white px-8 py-4 text-lg font-bold rounded-xl hover:bg-heroBlue transition-colors shadow-lg">
              Book Appointment
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}