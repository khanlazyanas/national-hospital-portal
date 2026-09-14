import Navbar from "@/components/shared/Navbar";
import DepartmentsSection from "@/components/sections/DepartmentsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import FeaturedDoctors from "@/components/sections/FeaturedDoctors";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import AppointmentCTA from "@/components/sections/AppointmentCTA";
import Footer from "@/components/shared/Footer";
import { Star } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-surfaceWhite">
      {/* Hero Section - Full Background Image Style */}
      <section className="relative w-full h-[100vh] md:h-[800px] flex flex-col justify-center overflow-hidden">
        
        {/* Background Image & Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1758691461957-474a7686e388?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fGRvY3RvciUyMHByb2Zlc3Npb25hbCUyMGltYWdlfGVufDB8fDB8fHww" 
            alt="Medical Care Background" 
            className="w-full h-full object-cover object-center"
          />
          {/* Dark gradient overlay to make text readable */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b2447]/70 via-[#0b2447]/50 to-[#0b2447]/90 backdrop-blur-[2px]"></div>
        </div>

        {/* Navbar on top */}
        <div className="absolute top-0 w-full z-30">
          <Navbar />
        </div>

        {/* Main Content */}
        <div className="relative z-20 px-6 md:px-16 lg:px-24 mt-16 md:mt-0 text-white w-full max-w-4xl">
          <div className="inline-flex items-center gap-2 border border-white/30 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold mb-6 tracking-wide shadow-sm">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            TRUSTED BY 50,000+ FAMILIES ACROSS INDIA
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] text-white drop-shadow-lg mb-8">
            Clinical-Grade Care,<br className="hidden md:block" /> Delivered Home.
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md md:max-w-none">
            <button className="bg-[#1a5b9b] text-white px-8 py-3.5 text-sm font-semibold rounded-lg hover:bg-[#124273] transition-colors shadow-xl w-full sm:w-auto text-center">
              Book a Care Service
            </button>
            <button className="bg-transparent border-2 border-white/60 text-white px-8 py-3.5 text-sm font-semibold rounded-lg hover:bg-white/10 transition-colors w-full sm:w-auto text-center backdrop-blur-sm">
              Browse Equipment
            </button>
          </div>
        </div>

        {/* Bottom Floating Quick Actions (Like in Screenshot) */}
        <div className="absolute bottom-6 left-6 right-6 md:left-16 md:right-16 z-20 flex justify-between items-end">
          <div className="flex flex-col items-start gap-1">
            <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full ml-4 relative top-2 z-10">24*7</span>
            <button className="bg-blue-600 text-white px-4 py-2.5 rounded-full text-xs font-semibold flex items-center gap-2 shadow-lg">
              <span className="text-lg">📞</span> Just 30 mins away
            </button>
          </div>
          <div className="flex flex-col items-end gap-1">
            <span className="bg-green-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full mr-4 relative top-2 z-10">● ONLINE</span>
            <button className="bg-green-500 text-white px-5 py-2.5 rounded-full text-xs font-semibold flex items-center gap-2 shadow-lg">
              WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-20 px-6 md:px-16 lg:px-24 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 text-[#0b2447] border-b border-gray-100 bg-white">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-end gap-4 md:gap-6 w-full md:w-1/2 md:pr-12 border-b md:border-b-0 md:border-r border-gray-200 pb-8 md:pb-0">
          <div className="text-center md:text-right">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Medical excellence</p>
            <p className="text-xs font-semibold text-[#0b2447]">25 years of excellence</p>
          </div>
          <h2 className="text-6xl md:text-[6.5rem] font-bold text-[#0b2447] tracking-tighter leading-none">
            25+
          </h2>
        </div>
        
        <div className="w-full md:w-1/2 md:pl-4 max-w-md text-center md:text-left">
          <p className="text-lg md:text-xl font-bold leading-snug mb-5 text-[#0b2447]">
            Trusted medical professionals united by one purpose — delivering compassionate, quality healthcare.
          </p>
          <button className="bg-[#0b2447] text-white px-7 py-3 text-xs font-bold rounded-md hover:bg-[#8aa4b5] transition-colors shadow-md">
            Explore more
          </button>
        </div>
      </section>

      <DepartmentsSection />
      <ServicesSection />
      <FeaturedDoctors />
      <TestimonialsSection />
      <FAQSection />
      <AppointmentCTA />
      <Footer />
    </main>
  );
}