import React from "react";
import { Camera, ArrowRight, Activity, ShieldCheck, HeartPulse, Stethoscope } from "lucide-react";
import Link from "next/link";

const facilities = [
  {
    id: 1,
    title: "Advanced Operation Theatres",
    description: "Equipped with state-of-the-art robotic surgery systems and laminar airflow for zero infection risk.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=100&w=2000&auto=format&fit=crop",
    icon: Activity,
    gridClass: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    title: "Premium Private Suites",
    description: "Luxurious, sound-proof healing environments with dedicated attendant beds and 24/7 nursing.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=100&w=1500&auto=format&fit=crop",
    icon: ShieldCheck,
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: 3,
    title: "Level 1 Trauma & ICU",
    description: "Ultra-modern intensive care units with 1:1 patient-to-nurse ratio and life-support.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=100&w=1500&auto=format&fit=crop",
    icon: HeartPulse,
    gridClass: "md:col-span-1 md:row-span-1",
  },
  {
    id: 4,
    title: "Advanced Diagnostics",
    description: "3T MRI, 256-Slice CT Scan, and fully automated labs for 100% precise imaging.",
    image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=100&w=1500&auto=format&fit=crop",
    icon: Stethoscope,
    gridClass: "md:col-span-2 md:row-span-1",
  },
];

export default function FacilityTourSection() {
  return (
    <section className="relative w-full py-24 md:py-32 px-4 sm:px-6 md:px-16 lg:px-24 bg-white overflow-hidden">
      
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-slate-50 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="relative z-10 max-w-[90rem] mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-[#0b2447] mb-6 shadow-sm">
              <Camera className="w-4 h-4" />
              Infrastructure & Tech
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#0b2447] tracking-tighter leading-[1] md:leading-[0.9]">
              World-Class <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 pr-2">Healing Environment.</span>
            </h2>
          </div>
          
          <div className="flex flex-col gap-6 max-w-sm">
            <p className="text-slate-500 text-base md:text-lg font-medium leading-relaxed">
              Experience healthcare in a facility designed for absolute precision, comfort, and zero-compromise patient safety.
            </p>
            <Link 
              href="/gallery" 
              className="group inline-flex items-center gap-2 text-[#0b2447] font-black uppercase tracking-widest text-[11px] hover:text-blue-600 transition-colors"
            >
              View Full Gallery 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform ease-[cubic-bezier(0.19,1,0.22,1)]" />
            </Link>
          </div>
        </div>

        {/* Premium Bento Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[300px] gap-4 md:gap-6">
          {facilities.map((facility) => {
            const Icon = facility.icon;
            return (
              <div 
                key={facility.id} 
                className={`group relative overflow-hidden rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-700 bg-slate-100 ${facility.gridClass}`}
              >
                {/* HD Background Image with Parallax Hover */}
                <img 
                  src={facility.image} 
                  alt={facility.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-105"
                />
                
                {/* Advanced Gradient Overlays for Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020b1a]/90 via-[#020b1a]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end text-white">
                  
                  {/* Floating Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mb-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]">
                    <Icon className="w-6 h-6 text-teal-300" />
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-2 transform transition-transform duration-500 group-hover:-translate-y-2">
                    {facility.title}
                  </h3>
                  
                  <p className="text-blue-50/80 font-medium text-sm md:text-base leading-relaxed max-w-lg transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] delay-75">
                    {facility.description}
                  </p>
                  
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}