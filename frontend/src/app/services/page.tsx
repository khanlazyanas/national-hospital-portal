import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import DepartmentsSection from "@/components/sections/DepartmentsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AppointmentCTA from "@/components/sections/AppointmentCTA";
import { ShieldPlus } from "lucide-react";

export default function ServicesPage() {
  return (
    <main className="font-sans text-white bg-white selection:bg-teal-500 selection:text-white overflow-x-hidden">
      <Navbar />
      
      {/* Premium Header Banner - Deep Dark Glassmorphism Theme */}
      <section className="relative w-full pt-36 pb-28 md:pt-48 md:pb-40 px-4 sm:px-6 md:px-16 lg:px-24 overflow-hidden bg-[#020813]">
        
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

        {/* Header Content - FULLY RESPONSIVE */}
        <div className="relative z-10 max-w-4xl lg:max-w-6xl mx-auto text-center flex flex-col items-center">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/5 border border-white/10 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-8 md:mb-12 backdrop-blur-md shadow-sm">
            <ShieldPlus className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-400" />
            What We Offer
          </div>
          
          {/* RESPONSIVE MASSIVE TYPOGRAPHY (Adjusted Base Size to 2.75rem for Mobile) */}
          <h1 className="text-[2.75rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[8.5rem] font-black tracking-tighter leading-[1] md:leading-[0.88] mb-6 md:mb-10 text-white drop-shadow-2xl break-words w-full px-2">
            Comprehensive <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300 pr-2 pb-2 block md:inline">
              Medical Services.
            </span>
          </h1>
          
          {/* SUBTITLE */}
          <p className="text-blue-50/80 text-base sm:text-xl md:text-2xl max-w-3xl leading-relaxed md:leading-[1.7] font-medium px-4">
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