"use client";

import { useState } from "react";
import { MessageSquare, X, PhoneCall } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingSupport() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[200] flex flex-col items-end">
      
      {/* Popup Modal (Matched with Project's Deep Navy Theme) */}
      <div
        className={`mb-4 w-[340px] sm:w-[380px] bg-[#020813] border border-blue-900/40 rounded-[1.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.19,1,0.22,1)] origin-bottom-right ${
          isOpen ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-white/5 bg-[#0b2447]/30">
          <div className="flex items-center gap-3">
            {/* Professional Solid Glowing Dot (No annoying blink) */}
            <span className="relative flex items-center justify-center h-3 w-3">
              <span className="absolute inline-flex h-full w-full rounded-full bg-teal-500 opacity-40 blur-[2px]"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400"></span>
            </span>
            <div>
              <p className="text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-white leading-none mb-1.5">Clinical Support Node</p>
              <p className="text-[8px] sm:text-[9px] font-bold uppercase tracking-widest text-teal-400 leading-none">System Online</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors outline-none"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body Area */}
        <div className="p-5 space-y-4 bg-gradient-to-b from-transparent to-[#0b2447]/20">
          
          {/* Welcome Message Box (Glassmorphism) */}
          <div className="bg-white/5 border border-white/5 p-4 rounded-xl backdrop-blur-sm">
            <p className="text-sm text-blue-50/80 leading-relaxed font-medium mb-4">
              Welcome to National Hospital. Connect with our clinical team to initiate your medical consultation process.
            </p>
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500 text-right">
              Automated Dispatch
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-2">
            <a
              href="https://wa.me/918001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#14b8a6] hover:bg-teal-400 text-[#020813] px-4 py-3.5 rounded-xl text-[10px] sm:text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-[0_5px_15px_rgba(20,184,166,0.2)] hover:shadow-[0_10px_20px_rgba(20,184,166,0.3)] hover:-translate-y-0.5 outline-none"
            >
              <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5" /> Encrypted WhatsApp Chat
            </a>
            
            <a
              href="tel:+918001234567"
              className="w-full flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 border border-white/10 text-white px-4 py-3.5 rounded-xl text-[10px] sm:text-xs font-black uppercase tracking-wider transition-all duration-300 active:scale-95 outline-none"
            >
              <PhoneCall className="w-4 h-4" /> Voice Terminal (+91)
            </a>
          </div>
        </div>
      </div>

      {/* Floating Action Button (Matched with Screenshot: Teal BG, White Icon) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-[1.25rem] shadow-[0_8px_30px_rgba(20,184,166,0.3)] transition-all duration-500 hover:scale-105 outline-none z-50 ${
          isOpen ? "bg-white/10 backdrop-blur-md border border-white/20 text-white rotate-90" : "bg-[#14b8a6] text-white rotate-0"
        }`}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6 md:w-7 md:h-7" />}
      </button>
      
    </div>
  );
}