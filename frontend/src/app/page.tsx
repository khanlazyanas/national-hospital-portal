import Navbar from "@/components/shared/Navbar";
import DepartmentsSection from "@/components/sections/DepartmentsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import FeaturedDoctors from "@/components/sections/FeaturedDoctors";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import AppointmentCTA from "@/components/sections/AppointmentCTA";
import Footer from "@/components/shared/Footer";
import { Star, Phone, MessageCircle, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-surfaceWhite">
      {/* Hero Section - Ultra Premium Glassmorphism & Mesh Gradient Style */}
      <section className="relative w-full min-h-[100dvh] flex flex-col justify-center overflow-hidden">
        
        {/* Background Image & Advanced Gradient Overlay */}
        <div className="absolute inset-0 z-0 bg-[#020813]">
          <img 
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1920" 
            alt="National Hospital Facility" 
            className="w-full h-full object-cover object-center opacity-60 mix-blend-luminosity"
          />
          {/* Multi-layered premium overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#020b1a]/95 via-[#0b2447]/60 to-[#020b1a]/95 backdrop-blur-[3px]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent"></div>
        </div>

        {/* Navbar on top */}
        <div className="absolute top-0 w-full z-30">
          <Navbar />
        </div>

        {/* Main Content - Ultra Professional Typography */}
        <div className="relative z-20 px-6 md:px-16 lg:px-24 mt-20 md:mt-0 text-white w-full max-w-6xl pb-32 md:pb-0">
          
          {/* Trust Badge - Frosted Glass Effect */}
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] text-blue-100 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.5)] mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse shadow-[0_0_10px_rgba(96,165,250,0.8)]"></span>
            Premier Neurology & Multispecialty Care
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tighter leading-[1.05] text-white drop-shadow-2xl mb-6">
            Advanced Medical &<br className="hidden md:block" /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-200"> Neurological Excellence.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-sm md:text-lg text-blue-50/80 max-w-2xl mb-10 leading-relaxed font-light">
            At National Hospital & Neuro Center, we combine state-of-the-art technology with compassionate care to deliver world-class medical treatments tailored to your health.
          </p>
          
          {/* CTA Buttons - High Contrast & Glow Effects */}
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md md:max-w-none">
            <button className="relative group overflow-hidden bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-4 text-sm font-bold rounded-xl shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)] border border-blue-400/50 hover:scale-[1.02] transition-all duration-300 w-full sm:w-auto text-center">
              <span className="relative z-10">Book an Appointment</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="bg-white/5 backdrop-blur-md border border-white/20 text-white px-8 py-4 text-sm font-bold rounded-xl hover:bg-white/10 hover:border-white/40 transition-all duration-300 w-full sm:w-auto text-center">
              Explore Departments
            </button>
          </div>
        </div>

        {/* Bottom Floating Dock (Apple-style Glassmorphism for Actions) */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] md:w-auto z-30">
          <div className="flex flex-col md:flex-row items-center justify-between md:justify-center gap-4 md:gap-8 bg-white/10 backdrop-blur-2xl border border-white/20 px-6 py-4 rounded-3xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)]">
            
            {/* Accreditation / Trust Symbol */}
            <div className="hidden md:flex items-center gap-2 pr-8 border-r border-white/20">
              <ShieldCheck className="w-5 h-5 text-blue-400" />
              <div className="flex flex-col text-left">
                <span className="text-white text-[10px] font-bold tracking-wider">NABH ACCREDITED</span>
                <span className="text-white/60 text-[9px] uppercase">ISO 13485 Certified</span>
              </div>
            </div>

            <div className="flex w-full md:w-auto justify-between md:justify-center gap-4 md:gap-8">
              {/* Emergency Action */}
              <div className="flex flex-col items-center gap-1.5 group cursor-pointer w-1/2 md:w-auto">
                <span className="bg-red-500/20 border border-red-500/50 text-red-200 text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">24/7 Emergency</span>
                <button className="bg-gradient-to-t from-red-600 to-red-500 text-white w-full md:w-auto px-5 py-2.5 rounded-full text-xs font-bold flex items-center justify-center gap-2 shadow-lg group-hover:shadow-red-500/30 transition-all">
                  <Phone className="w-3.5 h-3.5" /> Ambulance
                </button>
              </div>
              
              {/* Online Consult Action */}
              <div className="flex flex-col items-center gap-1.5 group cursor-pointer w-1/2 md:w-auto">
                <span className="bg-green-500/20 border border-green-500/50 text-green-200 text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span> Online Consult
                </span>
                <button className="bg-gradient-to-t from-green-600 to-green-500 text-white w-full md:w-auto px-6 py-2.5 rounded-full text-xs font-bold flex items-center justify-center gap-2 shadow-lg group-hover:shadow-green-500/30 transition-all">
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Premium Stats Section */}
      <section className="relative w-full py-24 px-6 md:px-16 lg:px-24 flex flex-col md:flex-row items-center justify-center gap-12 bg-white overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>

        <div className="flex flex-col md:flex-row items-center justify-center md:justify-end gap-6 w-full md:w-1/2 md:pr-16 border-b md:border-b-0 md:border-r border-gray-200 pb-10 md:pb-0 relative z-10">
          <div className="text-center md:text-right">
            <p className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.2em] mb-1">Legacy of Trust</p>
            <p className="text-sm font-semibold text-gray-500">Years of Excellence</p>
          </div>
          <h2 className="text-7xl md:text-[7.5rem] font-black text-[#0b2447] tracking-tighter leading-none drop-shadow-sm">
            15<span className="text-blue-600 text-6xl md:text-[6rem]">+</span>
          </h2>
        </div>
        
        <div className="w-full md:w-1/2 md:pl-6 max-w-lg text-center md:text-left relative z-10">
          <p className="text-xl md:text-2xl font-bold leading-tight mb-6 text-[#0b2447]">
            Trusted specialists united by one purpose — delivering compassionate, life-saving healthcare.
          </p>
          <button className="bg-[#0b2447] text-white px-8 py-3.5 text-xs font-bold rounded-lg hover:bg-blue-600 transition-colors shadow-[0_10px_20px_-10px_rgba(11,36,71,0.5)]">
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