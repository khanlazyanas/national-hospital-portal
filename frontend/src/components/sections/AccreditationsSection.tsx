import React from "react";
import { ShieldCheck, Award, Trophy, Medal, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const accreditations = [
  {
    title: "NABH Accredited",
    description: "The highest national standard for hospital quality, clinical excellence, and absolute patient safety.",
    icon: ShieldCheck,
    highlight: "Since 2010",
    color: "from-blue-400 to-blue-600"
  },
  {
    title: "ISO 13485:2016",
    description: "International certification ensuring rigorous quality management systems in medical devices and care.",
    icon: Award,
    highlight: "Global Standard",
    color: "from-teal-400 to-teal-600"
  },
  {
    title: "Best Neuro Center",
    description: "Honored by the National Healthcare Excellence Awards for groundbreaking neurological surgeries.",
    icon: Trophy,
    highlight: "2023 & 2024",
    color: "from-yellow-400 to-orange-500"
  },
  {
    title: "NABL Accredited Labs",
    description: "Internationally recognized laboratories delivering 100% precise and highly accurate diagnostics.",
    icon: Medal,
    highlight: "100% Accuracy",
    color: "from-blue-300 to-teal-400"
  }
];

export default function AccreditationsSection() {
  return (
    <section className="relative w-full py-24 md:py-32 px-4 sm:px-6 md:px-16 lg:px-24 bg-[#020813] overflow-hidden">
      
      {/* Background Premium Glow Effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none translate-y-1/3 -translate-x-1/3"></div>
      
      {/* Grid Pattern Overlay for Tech-Hospital Vibe */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-teal-400 mb-6 backdrop-blur-md shadow-sm">
              <CheckCircle2 className="w-4 h-4" />
              Global Recognition
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter leading-[1] md:leading-[0.9]">
              Certified for <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300 pr-2">Excellence.</span>
            </h2>
          </div>
          
          <p className="text-blue-50/70 text-base md:text-lg font-medium max-w-md leading-relaxed border-l-2 border-white/10 pl-6">
            Our commitment to world-class healthcare is validated by top national and international medical boards.
          </p>
        </div>

        {/* Accreditations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {accreditations.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden flex flex-col justify-between h-full min-h-[320px] shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_rgba(16,185,189,0.15)] hover:-translate-y-2"
              >
                {/* Card Top: Icon & Highlight Badge */}
                <div>
                  <div className="flex items-start justify-between mb-8">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} bg-opacity-20 flex items-center justify-center shadow-inner relative`}>
                      <div className="absolute inset-0 bg-white/20 rounded-2xl backdrop-blur-sm"></div>
                      <Icon className="w-8 h-8 text-white relative z-10 drop-shadow-md" />
                    </div>
                    <span className="bg-white/5 border border-white/10 text-white/80 text-[9px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full backdrop-blur-md">
                      {item.highlight}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-black text-white mb-4 tracking-tight group-hover:text-teal-300 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-blue-50/60 text-sm font-medium leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Ambient Card Glow on Hover */}
                <div className={`absolute -bottom-20 -right-20 w-48 h-48 bg-gradient-to-br ${item.color} rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none`}></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA for Trust */}
        <div className="mt-16 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/10 pt-10">
          <p className="text-blue-50/60 text-sm font-medium">
            Over <strong className="text-white">1 Million+</strong> patients treated with verified safety standards.
          </p>
          <Link 
            href="/about" 
            className="group flex items-center gap-2 text-sm font-bold text-teal-400 hover:text-teal-300 transition-colors uppercase tracking-widest"
          >
            Learn more about our legacy 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}