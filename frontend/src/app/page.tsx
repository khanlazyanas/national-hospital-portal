import Navbar from "@/components/shared/Navbar";
import DepartmentsSection from "@/components/sections/DepartmentsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import FeaturedDoctors from "@/components/sections/FeaturedDoctors";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import AppointmentCTA from "@/components/sections/AppointmentCTA";
import Footer from "@/components/shared/Footer";
import { Star, Phone, MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-surfaceWhite">
      {/* Hero Section - Full Background Image Style */}
      <section className="relative w-full h-[100vh] md:h-[850px] flex flex-col justify-center overflow-hidden">
        
        {/* Background Image & Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1920" 
            alt="National Hospital Facility" 
            className="w-full h-full object-cover object-center"
          />
          {/* Deep professional blue gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b2447]/80 via-[#0b2447]/60 to-[#0b2447]/95 backdrop-blur-[2px]"></div>
        </div>

        {/* Navbar on top */}
        <div className="absolute top-0 w-full z-30">
          <Navbar />
        </div>

        {/* Main Content Tailored for National Hospital & Neuro Center */}
        <div className="relative z-20 px-6 md:px-16 lg:px-24 mt-12 md:mt-0 text-white w-full max-w-5xl">
          <div className="inline-flex items-center gap-2 border border-white/30 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold mb-6 tracking-wide shadow-sm">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            PREMIER NEUROLOGY & MULTISPECIALTY CARE
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] text-white drop-shadow-lg mb-6">
            Advanced Medical &<br className="hidden md:block" /> Neurological Excellence.
          </h1>

          <p className="text-sm md:text-base text-white/90 max-w-xl mb-8 leading-relaxed font-medium">
            At National Hospital & Neuro Center, we combine state-of-the-art technology with compassionate care to deliver world-class medical treatments tailored to your health.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md md:max-w-none">
            <button className="bg-[#1a5b9b] text-white px-8 py-3.5 text-sm font-semibold rounded-lg hover:bg-[#124273] transition-all duration-300 shadow-xl w-full sm:w-auto text-center border border-[#1a5b9b]">
              Book an Appointment
            </button>
            <button className="bg-transparent border border-white/60 text-white px-8 py-3.5 text-sm font-semibold rounded-lg hover:bg-white hover:text-[#0b2447] transition-all duration-300 w-full sm:w-auto text-center backdrop-blur-sm">
              Explore Departments
            </button>
          </div>
        </div>

        {/* Bottom Floating Quick Actions (Hospital Emergency & Support Theme) */}
        <div className="absolute bottom-6 left-6 right-6 md:left-16 md:right-16 z-20 flex justify-between items-end">
          {/* Left Action: Emergency/Ambulance */}
          <div className="flex flex-col items-start gap-1 transform hover:-translate-y-1 transition-transform cursor-pointer">
            <span className="bg-red-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full ml-4 relative top-2 z-10 shadow-sm">24/7 EMERGENCY</span>
            <button className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-xs font-semibold flex items-center gap-2 shadow-lg hover:bg-blue-700 transition-colors">
              <Phone className="w-4 h-4" /> Call Ambulance
            </button>
          </div>
          
          {/* Right Action: Online Consultation */}
          <div className="flex flex-col items-end gap-1 transform hover:-translate-y-1 transition-transform cursor-pointer">
            <span className="bg-green-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full mr-4 relative top-2 z-10 shadow-sm">● ONLINE CONSULT</span>
            <button className="bg-green-500 text-white px-6 py-2.5 rounded-full text-xs font-semibold flex items-center gap-2 shadow-lg hover:bg-green-600 transition-colors">
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-20 px-6 md:px-16 lg:px-24 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 text-[#0b2447] border-b border-gray-100 bg-white">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-end gap-4 md:gap-6 w-full md:w-1/2 md:pr-12 border-b md:border-b-0 md:border-r border-gray-200 pb-8 md:pb-0">
          <div className="text-center md:text-right">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Legacy of Trust</p>
            <p className="text-xs font-semibold text-[#0b2447]">Years of Excellence</p>
          </div>
          <h2 className="text-6xl md:text-[6.5rem] font-bold text-[#0b2447] tracking-tighter leading-none">
            15+
          </h2>
        </div>
        
        <div className="w-full md:w-1/2 md:pl-4 max-w-md text-center md:text-left">
          <p className="text-lg md:text-xl font-bold leading-snug mb-5 text-[#0b2447]">
            Trusted specialists united by one purpose — delivering compassionate, life-saving healthcare.
          </p>
          <button className="bg-[#0b2447] text-white px-7 py-3 text-xs font-bold rounded-md hover:bg-[#1a5b9b] transition-colors shadow-md">
            Meet Our Doctors
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