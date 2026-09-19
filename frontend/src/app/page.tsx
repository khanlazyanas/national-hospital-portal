import Navbar from "@/components/shared/Navbar";
import DepartmentsSection from "@/components/sections/DepartmentsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import FeaturedDoctors from "@/components/sections/FeaturedDoctors";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import AppointmentCTA from "@/components/sections/AppointmentCTA";
import Footer from "@/components/shared/Footer";
import { Phone, MessageCircle, ShieldCheck, ArrowRight, Star } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-surfaceWhite overflow-x-hidden">
      {/* Hero Section - Visually Upgraded for Dynamic Navbar */}
      <section className="relative w-full min-h-[100dvh] flex flex-col justify-center overflow-hidden">
        
        {/* Background Image & Advanced Gradient Overlay */}
        <div className="absolute inset-0 z-0 bg-[#020813]">
          <img 
            src="https://images.unsplash.com/photo-1618498082410-b4aa22193b38?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="National Hospital Facility" 
            className="w-full h-full object-cover object-center opacity-50 mix-blend-luminosity"
          />
          {/* Multi-layered premium overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#020b1a]/95 via-[#0b2447]/70 to-[#020b1a]/95 backdrop-blur-[2px]"></div>
        </div>

        {/* Floating Glowing Orbs for 3D Effect */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-600/30 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-teal-500/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>

        {/* Navbar on top */}
        <div className="absolute top-0 w-full z-30">
          <Navbar />
        </div>

        {/* Main Content - Noticeable Visual Upgrade */}
        <div className="relative z-20 px-4 sm:px-6 md:px-16 lg:px-24 pt-32 md:pt-40 lg:pt-48 text-white w-full max-w-[90rem] pb-32 md:pb-0 flex flex-col lg:flex-row items-center lg:items-start justify-between mx-auto">
          
          {/* Left Text Content */}
          <div className="w-full lg:w-[65%] relative z-10">
            {/* Trust Badge - Frosted Glass Effect */}
            <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-blue-400/30 bg-blue-900/30 backdrop-blur-xl text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-blue-200 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.5)] mb-6 md:mb-8">
              <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-teal-400 animate-pulse shadow-[0_0_10px_rgba(45,212,191,0.8)]"></span>
              Premier Neurology & Multispecialty Care
            </div>
            
            {/* Premium Headline (Font size balanced to fit cleanly without overlapping) */}
            <h1 className="text-[2.75rem] sm:text-5xl md:text-6xl lg:text-[5.5rem] font-black tracking-tighter leading-[1.05] md:leading-[0.95] text-white drop-shadow-2xl mb-6 break-words w-full">
              Advanced Medical &<br className="hidden md:block" /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-300 to-blue-200 block md:inline mt-2 md:mt-0"> Neurological Excellence.</span>
            </h1>

            {/* Subheadline (Margin bottom tightened to pull buttons up) */}
            <p className="text-base sm:text-lg md:text-xl text-blue-50/80 max-w-2xl mb-8 leading-relaxed font-medium">
              At National Hospital & Neuro Center, we combine state-of-the-art technology with compassionate care to deliver world-class medical treatments tailored to your health.
            </p>
            
            {/* CTA Buttons - Clean Solid Styling matching the third screenshot */}
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md md:max-w-none">
              <Link href="/appointment" className="group flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 text-sm font-bold rounded-xl shadow-[0_10px_20px_-10px_rgba(37,99,235,0.6)] transition-all duration-300 w-full sm:w-auto text-center active:scale-95 outline-none">
                <span>Book an Appointment</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/services" className="flex items-center justify-center bg-[#0f172a] hover:bg-[#1e293b] border border-slate-700 text-white px-8 py-3.5 text-sm font-bold rounded-xl transition-all duration-300 w-full sm:w-auto text-center active:scale-95 outline-none">
                Explore Departments
              </Link>
            </div>
          </div>

          {/* Right Side Floating Element */}
          <div className="hidden lg:flex w-[35%] justify-end pt-12 relative z-10">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)] transform rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-500 max-w-xs">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full border-2 border-[#0b2447] bg-gray-200 overflow-hidden"><img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=100" alt="Doc" /></div>
                  <div className="w-10 h-10 rounded-full border-2 border-[#0b2447] bg-gray-300 overflow-hidden"><img src="https://images.unsplash.com/photo-1612222869049-d8ec83637a3c?auto=format&fit=crop&q=80&w=100" alt="Doc" /></div>
                  <div className="w-10 h-10 rounded-full border-2 border-[#0b2447] bg-gray-200 overflow-hidden"><img src="https://images.unsplash.com/photo-1594824436998-d822cd013a5a?auto=format&fit=crop&q=80&w=100" alt="Doc" /></div>
                </div>
                <div className="flex items-center gap-1 bg-yellow-400/20 text-yellow-300 px-2 py-1 rounded-lg text-xs font-bold">
                  <Star className="w-3 h-3 fill-yellow-300" /> 4.9
                </div>
              </div>
              <p className="text-white font-extrabold text-xl">200+ Top Specialists</p>
              <p className="text-blue-200 text-sm font-medium mt-1">Available for online & offline consultation.</p>
            </div>
          </div>
        </div>

        {/* Bottom Floating Items */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] md:w-auto z-30">
          <div className="flex flex-col md:flex-row items-center justify-between md:justify-center gap-4 md:gap-8 px-6 py-4">
            
            {/* Accreditation Badge */}
            <div className="hidden md:flex items-center gap-3 pr-8 border-r border-white/10">
              <div className="w-10 h-10 rounded-full bg-blue-900/40 border border-blue-500/30 flex items-center justify-center backdrop-blur-md">
                <ShieldCheck className="w-5 h-5 text-blue-400" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-white text-xs font-bold tracking-wider">NABH ACCREDITED</span>
                <span className="text-white/60 text-[10px] uppercase">ISO 13485 Certified</span>
              </div>
            </div>

            <div className="flex w-full md:w-auto justify-between md:justify-center gap-4 md:gap-8">
              {/* Emergency Action */}
              <div className="flex flex-col items-center gap-1.5 group cursor-pointer w-1/2 md:w-auto">
                <span className="bg-red-500/20 border border-red-500/50 text-red-200 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider backdrop-blur-md">24/7 Emergency</span>
                <a href="tel:+918001234567" className="bg-gradient-to-t from-red-600 to-red-500 text-white w-full md:w-auto px-6 py-3 rounded-full text-sm font-bold flex items-center justify-center gap-2 shadow-[0_10px_20px_rgba(239,68,68,0.3)] hover:shadow-[0_15px_30px_rgba(239,68,68,0.5)] hover:-translate-y-0.5 transition-all">
                  <Phone className="w-4 h-4" /> Ambulance
                </a>
              </div>
              
              {/* Online Consult Action */}
              <div className="flex flex-col items-center gap-1.5 group cursor-pointer w-1/2 md:w-auto">
                <span className="bg-green-500/20 border border-green-500/50 text-green-200 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1.5 backdrop-blur-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span> Online Consult
                </span>
                <a href="#" className="bg-[#14b8a6] hover:bg-teal-400 text-white w-full md:w-auto px-6 py-3 rounded-full text-sm font-bold flex items-center justify-center gap-2 shadow-[0_10px_20px_rgba(20,184,166,0.3)] hover:shadow-[0_15px_30px_rgba(20,184,166,0.5)] hover:-translate-y-0.5 transition-all">
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
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
          <Link href="/doctors" className="inline-block bg-[#0b2447] text-white px-8 py-3.5 text-xs font-bold rounded-lg hover:bg-blue-600 transition-colors shadow-[0_10px_20px_-10px_rgba(11,36,71,0.5)]">
            Meet Our Doctors
          </Link>
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