import React from "react";
import Link from "next/link";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { ShieldCheck, HeartPulse, Award, Users, ArrowRight, Building2, CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="font-sans text-white bg-white selection:bg-teal-500 selection:text-white">
      <Navbar />

      {/* ================= ELITE BANNER: THE MANIFESTO ================= */}
      <section className="relative w-full min-h-[85vh] flex flex-col justify-center pt-40 pb-32 md:pt-48 md:pb-40 px-6 md:px-16 lg:px-24 overflow-hidden bg-[#020813]">
        
        {/* Background Effects & Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=1920" 
            alt="National Hospital Building" 
            className="w-full h-full object-cover object-center opacity-20 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020b1a]/95 via-[#0b2447]/80 to-[#020813] backdrop-blur-[2px]"></div>
        </div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-500/20 rounded-full blur-[120px] pointer-events-none translate-y-1/2 -translate-x-1/4"></div>

        {/* Header Content - Centered */}
        <div className="relative z-10 max-w-4xl lg:max-w-6xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] text-blue-300 mb-8 md:mb-12 backdrop-blur-md shadow-sm">
            <Building2 className="w-4 h-4" />
            The Healthcare Philosophy
          </div>
          
          {/* MASSIVE TYPOGRAPHY (Updated to match the screenshot font) */}
          <h1 className="text-[4.5rem] sm:text-7xl md:text-[6rem] lg:text-[8.5rem] font-black tracking-tighter leading-[0.95] md:leading-[0.88] mb-8 md:mb-10 text-white drop-shadow-2xl">
            Dedicated To <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300 pr-2 pb-2">
              Complete Recovery.
            </span>
          </h1>
          
          {/* SUBTITLE (Slightly larger to balance the massive heading) */}
          <p className="text-blue-50/80 text-lg sm:text-xl md:text-2xl max-w-3xl leading-relaxed md:leading-[1.7] font-medium">
            National Hospital & Neuro Center operates at the precise intersection of advanced medical technology and deep compassionate care. We are redefining multi-specialty treatment for the modern age.
          </p>
        </div>
      </section>

      {/* Main Content Layout with 3D Overlap Effect */}
      <div className="relative z-20 -mt-12 md:-mt-20">
        
        {/* Mission & Vision Section (White Overlap Container) */}
        <section className="bg-[#f8fafc] rounded-t-[2.5rem] md:rounded-t-[4rem] px-6 md:px-16 lg:px-24 py-20 md:py-28 shadow-[0_-20px_40px_rgba(0,0,0,0.1)]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div className="order-2 lg:order-1 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#0b2447] mb-6 leading-tight tracking-tight">
                Pioneering Excellence <br className="hidden md:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Since 2001.</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-10 text-base md:text-lg font-medium mx-auto md:mx-0 max-w-xl">
                For over two decades, we have been at the forefront of medical innovation, specializing in advanced neurological care, emergency medicine, and comprehensive multi-specialty treatments. Our commitment is deeply rooted in patient-first values.
              </p>
              
              <div className="grid grid-cols-2 gap-6 max-w-md mx-auto md:mx-0">
                <div className="bg-white border border-gray-100 p-6 rounded-2xl hover:shadow-[0_10px_30px_-10px_rgba(37,99,235,0.15)] transition-all duration-300">
                  <h3 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 mb-2">25+</h3>
                  <p className="text-sm font-bold text-[#0b2447] uppercase tracking-wider">Years of Trust</p>
                </div>
                <div className="bg-white border border-gray-100 p-6 rounded-2xl hover:shadow-[0_10px_30px_-10px_rgba(37,99,235,0.15)] transition-all duration-300">
                  <h3 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 mb-2">200+</h3>
                  <p className="text-sm font-bold text-[#0b2447] uppercase tracking-wider">Expert Doctors</p>
                </div>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="order-1 lg:order-2 relative w-full h-[400px] md:h-[500px] rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_-15px_rgba(11,36,71,0.2)] group">
              <img 
                src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800" 
                alt="Our Medical Team" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out grayscale-[20%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b2447]/80 via-[#0b2447]/20 to-transparent"></div>
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl flex items-center gap-4 shadow-xl">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-extrabold text-[#0b2447]">NABH Accredited</h4>
                  <p className="text-xs font-semibold text-gray-500">Highest Standards of Patient Safety</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="w-full py-24 px-6 md:px-16 lg:px-24 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] text-blue-600 mb-6 shadow-sm">
                Why Choose Us
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#0b2447] tracking-tight">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Core Values</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Value 1 */}
              <div className="bg-[#f8fafc] p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-[0_20px_40px_rgb(37,99,235,0.12)] hover:-translate-y-2 transition-all duration-500 group">
                <div className="w-16 h-16 bg-blue-100/50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#0b2447] mb-3 group-hover:text-blue-600 transition-colors">Patient Safety</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">Rigorous safety standards and strictly sterile environments to ensure your absolute well-being.</p>
              </div>

              {/* Value 2 */}
              <div className="bg-[#f8fafc] p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-[0_20px_40px_rgb(37,99,235,0.12)] hover:-translate-y-2 transition-all duration-500 group">
                <div className="w-16 h-16 bg-teal-100/50 text-teal-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-teal-500 group-hover:text-white transition-all duration-500 shadow-sm">
                  <HeartPulse className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#0b2447] mb-3 group-hover:text-teal-600 transition-colors">Compassionate Care</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">Treating every single patient with deep empathy, respect, and highly personalized attention.</p>
              </div>

              {/* Value 3 */}
              <div className="bg-[#f8fafc] p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-[0_20px_40px_rgb(37,99,235,0.12)] hover:-translate-y-2 transition-all duration-500 group">
                <div className="w-16 h-16 bg-blue-100/50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#0b2447] mb-3 group-hover:text-blue-600 transition-colors">Medical Excellence</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">Continuously upgrading our medical technology, research, and specialized clinical expertise.</p>
              </div>

              {/* Value 4 */}
              <div className="bg-[#f8fafc] p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-[0_20px_40px_rgb(37,99,235,0.12)] hover:-translate-y-2 transition-all duration-500 group">
                <div className="w-16 h-16 bg-teal-100/50 text-teal-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-teal-500 group-hover:text-white transition-all duration-500 shadow-sm">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#0b2447] mb-3 group-hover:text-teal-600 transition-colors">Expert Team</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">World-class doctors, surgeons, and support staff available 24/7 for advanced consultations.</p>
              </div>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </main>
  );
}