"use client";

import { useState } from "react";
import { MessageSquare, X, PhoneCall } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingSupport() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[200] flex flex-col items-end">
      
      {/* Popup Modal (Matches Screenshot 2) */}
      <div
        className={`mb-4 w-[340px] sm:w-[380px] bg-[#0f172a] border border-slate-700/50 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 origin-bottom-right ${
          isOpen ? "scale-100 opacity-100" : "scale-90 opacity-0 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-500"></span>
            </span>
            <div>
              <p className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-white leading-none mb-1">Clinical Support Node</p>
              <p className="text-[8px] sm:text-[9px] font-bold uppercase tracking-widest text-teal-500 leading-none">System Online</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors outline-none"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body Area */}
        <div className="p-5 space-y-4">
          
          {/* Welcome Message Box */}
          <div className="bg-[#1e293b]/50 border border-slate-700/50 p-4 rounded-xl">
            <p className="text-sm text-slate-300 leading-relaxed font-medium mb-4">
              Welcome to National Hospital. Connect with our clinical team to initiate your medical consultation process.
            </p>
            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500 text-right">
              Automated Dispatch
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <a
              href="https://wa.me/918001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#14b8a6] hover:bg-[#0d9488] text-[#0f172a] px-4 py-3.5 rounded-xl text-[10px] sm:text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-[0_5px_15px_rgba(20,184,166,0.2)] hover:shadow-[0_10px_20px_rgba(20,184,166,0.3)] hover:-translate-y-0.5 outline-none"
            >
              <FaWhatsapp className="w-4 h-4 sm:w-5 sm:h-5" /> Encrypted WhatsApp Chat
            </a>
            
            <a
              href="tel:+918001234567"
              className="w-full flex items-center justify-center gap-2 bg-[#0f172a] hover:bg-[#1e293b] border border-slate-700 text-white px-4 py-3.5 rounded-xl text-[10px] sm:text-xs font-black uppercase tracking-wider transition-all duration-300 active:scale-95 outline-none"
            >
              <PhoneCall className="w-4 h-4" /> Voice Terminal (+91)
            </a>
          </div>
        </div>
      </div>

      {/* Floating Action Button (Matches Screenshot 1) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-[1.25rem] md:rounded-[1.5rem] shadow-[0_0_30px_rgba(20,184,166,0.4)] transition-all duration-500 hover:scale-105 outline-none z-50 ${
          isOpen ? "bg-[#1e293b] border border-slate-700 text-slate-400 rotate-90" : "bg-[#14b8a6] text-[#0f172a] rotate-0"
        }`}
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6 md:w-7 md:h-7" />}
      </button>
      
    </div>
  );
}