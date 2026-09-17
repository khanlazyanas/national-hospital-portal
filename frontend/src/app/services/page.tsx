import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import DepartmentsSection from "@/components/sections/DepartmentsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AppointmentCTA from "@/components/sections/AppointmentCTA";
import { ShieldPlus } from "lucide-react";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Premium Header Banner - Deep Dark Glassmorphism Theme */}
      <section className="relative w-full pt-40 pb-32 md:pt-48 md:pb-40 px-6 md:px-16 lg:px-24 overflow-hidden bg-[#020813]">
        
        {/* Background Effects & Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1920" 
            alt="Medical Services" 
            className="w-full h-full object-cover object-center opacity-20 mix-blend-luminosity"
          />
          {/* Multi-layered gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#020b1a]/95 via-[#0b2447]/80 to-[#020813] backdrop-blur-[2px]"></div>
        </div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-500/20 rounded-full blur-[120px] pointer-events-none translate-y-1/2 -translate-x-1/4"></div>

        {/* Header Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] text-blue-300 mb-6 backdrop-blur-md shadow-sm">
            <ShieldPlus className="w-4 h-4" />
            What We Offer
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 text-white drop-shadow-lg leading-tight">
            Comprehensive <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">Medical Services</span>
          </h1>
          
          <p className="text-blue-50/80 text-base md:text-lg max-w-2xl leading-relaxed font-light">
            From advanced life-saving surgeries to routine health check-ups, explore our complete range of specialized medical treatments and world-class departments.
          </p>
        </div>
      </section>

      {/* Main Content Layout with 3D Overlap Effect */}
      <div className="relative z-20 -mt-12 md:-mt-20">
        {/* Layered rounded container wrapping the sections for a seamless flow */}
        <div className="bg-white rounded-t-[2.5rem] md:rounded-t-[4rem] overflow-hidden shadow-[0_-20px_40px_rgba(0,0,0,0.2)]">
          <DepartmentsSection />
          
          <div className="border-t border-gray-100">
            <ServicesSection />
          </div>
        </div>
      </div>

      <AppointmentCTA />
      <Footer />
    </main>
  );
}