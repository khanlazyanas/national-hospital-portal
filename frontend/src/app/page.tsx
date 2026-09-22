import Navbar from "@/components/shared/Navbar";
import DepartmentsSection from "@/components/sections/DepartmentsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import FeaturedDoctors from "@/components/sections/FeaturedDoctors";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import AppointmentCTA from "@/components/sections/AppointmentCTA";
import Footer from "@/components/shared/Footer";
import { Phone, MessageCircle, ShieldCheck, ArrowRight, Star, Award } from "lucide-react";
import Link from "next/link";
import AccreditationsSection from "@/components/sections/AccreditationsSection";
import FacilityTourSection from "@/components/sections/FacilityTourSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";

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
              Premier Neurology & Psychiatric Care
            </div>
            
            {/* Premium Headline (Font size balanced to fit cleanly without overlapping) */}
            <h1 className="text-[2.75rem] sm:text-5xl md:text-6xl lg:text-[5.5rem] font-black tracking-tighter leading-[1.05] md:leading-[0.95] text-white drop-shadow-2xl mb-6 break-words w-full">
              Advanced Medical &<br className="hidden md:block" /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-300 to-blue-200 block md:inline mt-2 md:mt-0"> Neurological Excellence.</span>
            </h1>

            {/* Subheadline (Margin bottom tightened to pull buttons up) */}
            <p className="text-base sm:text-lg md:text-xl text-blue-50/80 max-w-2xl mb-8 leading-relaxed font-medium">
              Led by Dr. AQ Jilani, National Hospital & Neuro Center provides state-of-the-art neurological and psychiatric care with absolute precision and compassion.
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

          {/* Right Side Floating Element (UPDATED FOR SOLO DOCTOR) */}
          <div className="hidden lg:flex w-[35%] justify-end pt-12 relative z-10">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)] transform rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-500 max-w-xs w-full">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-16 h-16 rounded-full border-2 border-teal-400 p-0.5 relative">
                  <div className="w-full h-full bg-[#0b2447] rounded-full overflow-hidden border border-white/10 flex items-center justify-center">
                    {/* Replace with actual image of Dr. Jilani later */}
                    <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200" alt="Dr. AQ Jilani" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-teal-500 rounded-full p-1 border-2 border-[#020b1a]">
                    <Award className="w-3 h-3 text-white" />
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1 bg-yellow-400/20 text-yellow-300 px-2 py-0.5 rounded-md text-[10px] font-bold w-max mb-1">
                    <Star className="w-3 h-3 fill-yellow-300" /> 4.9 Rated
                  </div>
                  <span className="text-white text-xs font-medium opacity-80">Chief Specialist</span>
                </div>
              </div>
              <h3 className="text-white font-extrabold text-2xl leading-tight">Dr. AQ Jilani</h3>
              <p className="text-teal-300 text-sm font-bold tracking-wider mt-1 mb-3 uppercase">MBBS, MD, DM</p>
              <p className="text-blue-100/70 text-xs font-medium leading-relaxed border-t border-white/10 pt-3">
                Expert in complex neurological disorders and advanced psychiatric treatments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Stats Section (UPDATED FOR SOLO DOCTOR) */}
      <section className="relative w-full py-24 px-6 md:px-16 lg:px-24 flex flex-col md:flex-row items-center justify-center gap-12 bg-white overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>

        <div className="flex flex-col md:flex-row items-center justify-center md:justify-end gap-6 w-full md:w-1/2 md:pr-16 border-b md:border-b-0 md:border-r border-gray-200 pb-10 md:pb-0 relative z-10">
          <div className="text-center md:text-right">
            <p className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.2em] mb-1">Legacy of Trust</p>
            <p className="text-sm font-semibold text-gray-500">Years of Clinical Excellence</p>
          </div>
          <h2 className="text-7xl md:text-[7.5rem] font-black text-[#0b2447] tracking-tighter leading-none drop-shadow-sm">
            15<span className="text-blue-600 text-6xl md:text-[6rem]">+</span>
          </h2>
        </div>
        
        <div className="w-full md:w-1/2 md:pl-6 max-w-lg text-center md:text-left relative z-10">
          <p className="text-xl md:text-2xl font-bold leading-tight mb-6 text-[#0b2447]">
            Dedicated to providing singular, focused, and compassionate neurological care under expert guidance.
          </p>
          <Link href="/doctors" className="inline-block bg-[#0b2447] text-white px-8 py-3.5 text-xs font-bold rounded-lg hover:bg-blue-600 transition-colors shadow-[0_10px_20px_-10px_rgba(11,36,71,0.5)]">
            Meet Dr. AQ Jilani
          </Link>
        </div>
      </section>

      {/* <DepartmentsSection /> */}
      <ServicesSection />
      <FeaturedDoctors />
      <TestimonialsSection />
      <FAQSection />
      <AppointmentCTA />
      <FacilityTourSection />
      <AccreditationsSection/>
      <WhyChooseUsSection />
      <Footer />
    </main>
  );
}