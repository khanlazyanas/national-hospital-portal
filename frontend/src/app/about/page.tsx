import React from "react";
import Link from "next/link";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { ShieldCheck, HeartPulse, Award, Users, ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="font-sans text-white bg-[#020813] selection:bg-teal-500 selection:text-white">
      <Navbar />

      {/* ================= ELITE BANNER: THE MANIFESTO ================= */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 md:pt-48 md:pb-32 px-6 lg:px-24 overflow-hidden bg-[#020813]">
        {/* Abstract Ambient Gradient Background & Grid (Dark Theme) */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-[-10%] w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] bg-gradient-to-bl from-blue-600/20 to-transparent rounded-full blur-[100px] md:blur-[140px]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vw] max-w-[1000px] max-h-[1000px] bg-gradient-to-tr from-teal-500/15 to-transparent rounded-full blur-[100px] md:blur-[140px]"></div>
          {/* Subtle Grid overlay for that clinical/tech feel */}
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '4rem 4rem' }}></div>
        </div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="max-w-4xl lg:max-w-5xl mx-auto text-center md:text-left">
            
            <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 text-white px-5 py-2.5 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-12 shadow-sm">
              <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-teal-400 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]"></span>
              The Healthcare Philosophy
            </div>
            
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-black tracking-tighter leading-[0.95] md:leading-[0.9] mb-10 text-white drop-shadow-2xl">
              Dedicated To <br className="hidden sm:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-300 to-blue-200 pr-2">
                Complete Recovery.
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-slate-400 font-medium max-w-2xl leading-relaxed md:leading-loose mx-auto md:mx-0">
              National Hospital & Neuro Center operates at the precise intersection of advanced medical technology and deep compassionate care. We are redefining multi-specialty treatment for the modern age.
            </p>
          </div>
        </div>
      </section>

      {/* ================= LEADERSHIP & HERITAGE (EDITORIAL STYLE) ================= */}
      <section className="py-24 md:py-40 px-6 lg:px-24 bg-[#020b1a] relative border-t border-white/5">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-16 lg:gap-24 xl:gap-32">
            
            {/* Left Side: High-End Editorial Image */}
            <div className="w-full lg:w-5/12 relative group px-4 sm:px-0">
              <div className="relative w-full max-w-md mx-auto lg:max-w-none aspect-[3/4] sm:aspect-[4/5] rounded-[2rem] sm:rounded-[3rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)] bg-slate-900 border border-white/10">
                <div className="absolute inset-0 bg-slate-800 animate-pulse -z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800" 
                  alt="Medical Team" 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-[10%] transition-all duration-1000 group-hover:scale-105 origin-center"
                />
                {/* Elegant gradient overlay for text */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020813] via-[#020813]/20 to-transparent"></div>
                
                <div className="absolute bottom-8 sm:bottom-12 left-8 sm:left-10 text-white z-20">
                   <p className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter leading-none mb-2">National<br/>Hospital</p>
                   <p className="text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.4em] text-teal-400">Established 2001</p>
                </div>
              </div>
              
              {/* Decorative minimal lines */}
              <div className="hidden lg:block absolute -left-12 top-1/4 w-24 h-[1px] bg-white/10"></div>
              <div className="hidden lg:block absolute -bottom-12 right-1/4 w-[1px] h-24 bg-white/10"></div>
            </div>

            {/* Right Side: Scientific Narrative */}
            <div className="w-full lg:w-7/12 flex flex-col justify-center text-center sm:text-left pt-8 lg:pt-0">
              <div className="space-y-6 sm:space-y-8 mb-16">
                <div className="flex items-center justify-center sm:justify-start gap-4">
                  <div className="w-8 sm:w-16 h-[2px] bg-teal-500"></div>
                  <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.5em] text-teal-400">The Heritage</span>
                </div>
                
                <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-black tracking-tighter text-white leading-[1] md:leading-[0.95]">
                  Pioneering Excellence <br className="hidden md:block"/> Since 2001.
                </h3>
                
                <div className="space-y-6 text-slate-400 text-base sm:text-lg lg:text-xl font-medium leading-relaxed max-w-2xl mx-auto sm:mx-0">
                  <p>
                    For over two decades, we have been at the forefront of medical innovation, specializing in <strong className="text-white border-b border-white/30 pb-0.5">advanced neurological care</strong>, emergency medicine, and comprehensive treatments.
                  </p>
                  <p>
                    Our commitment is deeply rooted in patient-first values. We ensure that every patient's roadmap is built on immutable medical data, eliminating guesswork and accelerating recovery.
                  </p>
                </div>
              </div>

              {/* Ultra Clean Stats */}
              <div className="flex flex-row justify-center sm:justify-start gap-12 sm:gap-20 pt-8 sm:pt-12 border-t border-white/5">
                 <div className="text-center sm:text-left group cursor-default">
                    <p className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter text-white group-hover:text-teal-400 transition-colors duration-500">25Y+</p>
                    <p className="text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 mt-2 sm:mt-3">Years of Trust</p>
                 </div>
                 <div className="text-center sm:text-left group cursor-default">
                    <p className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter text-white group-hover:text-teal-400 transition-colors duration-500">200+</p>
                    <p className="text-[8px] sm:text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500 mt-2 sm:mt-3">Expert Doctors</p>
                 </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* ================= CORE PILLARS: DATA-DRIVEN CARDS (DARK GLASSMORPHISM) ================= */}
      <section className="py-24 sm:py-32 md:py-40 px-6 sm:px-10 bg-[#020813] text-white relative overflow-hidden group/section border-t border-white/5">
        
        {/* Animated Background Mesh & Gradients */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')] group-hover/section:scale-105 transition-transform duration-[3000ms]"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent opacity-80 pointer-events-none"></div>

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-16 md:mb-24 space-y-4 sm:space-y-6">
            <p className="text-teal-400 font-black uppercase tracking-[0.4em] sm:tracking-[0.6em] text-[9px] sm:text-[10px]">The Foundation</p>
            <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-none text-white">Our Core Values.</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
            {/* Decorative background line for desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2 z-0"></div>

            {[
              { title: "Patient Safety", desc: "Rigorous safety standards and strictly sterile environments to ensure your absolute well-being.", label: "01", icon: ShieldCheck },
              { title: "Compassionate Care", desc: "Treating every single patient with deep empathy, respect, and highly personalized attention.", label: "02", icon: HeartPulse },
              { title: "Medical Excellence", desc: "Continuously upgrading our medical technology, research, and specialized clinical expertise.", label: "03", icon: Award },
              { title: "Expert Team", desc: "World-class doctors, surgeons, and support staff available 24/7 for advanced consultations.", label: "04", icon: Users }
            ].map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div key={i} className="group relative p-8 sm:p-10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-700 border border-white/10 hover:border-teal-500/40 flex flex-col justify-between aspect-auto md:aspect-square lg:aspect-[4/5] min-h-[320px] rounded-3xl z-10 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(45,212,191,0.2)]">
                  <div className="relative z-10">
                    <p className="text-4xl sm:text-5xl lg:text-6xl font-black text-white/10 group-hover:text-teal-400/60 transition-colors duration-700 mb-8 sm:mb-12 font-mono tracking-tighter">{pillar.label}</p>
                    <h4 className="text-xl sm:text-2xl font-black tracking-tight mb-4 text-white group-hover:text-teal-300 transition-colors">{pillar.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed font-medium group-hover:text-slate-300 transition-colors">{pillar.desc}</p>
                  </div>
                  <div className="relative z-10 w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center text-white/50 group-hover:bg-teal-500 group-hover:border-teal-500 group-hover:text-white transition-all duration-500 mt-8">
                    <Icon className="w-5 h-5 transform group-hover:scale-110 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION: THE FINAL PITCH ================= */}
      <section className="py-24 sm:py-32 md:py-40 px-4 sm:px-6 text-center bg-[#020b1a] relative border-t border-white/5">
        <div className="container mx-auto max-w-4xl relative z-10 flex flex-col items-center">
          <div className="inline-flex items-center gap-3 mb-8 sm:mb-10">
             <div className="w-2 h-2 rounded-full bg-teal-400 animate-ping"></div>
             <p className="text-teal-400 font-black uppercase tracking-[0.4em] sm:tracking-[0.5em] text-[9px] sm:text-[10px]">Take Action</p>
          </div>
          
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black tracking-tighter text-white mb-12 sm:mb-16 leading-[1.05] sm:leading-[0.95]">
            Ready to Experience <br className="hidden sm:block"/>
            <span className="text-slate-500 italic font-serif">World-Class Care?</span>
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto">
            <Link href="/appointment" className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-[#020813] px-8 sm:px-12 py-4 sm:py-5 rounded-xl sm:rounded-2xl text-[10px] sm:text-xs font-black uppercase tracking-widest hover:bg-teal-400 hover:text-white transition-all duration-300 shadow-[0_15px_30px_-10px_rgba(255,255,255,0.2)] hover:shadow-[0_20px_40px_-10px_rgba(45,212,191,0.4)] active:scale-95 group">
              Book Appointment
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/services" className="w-full sm:w-auto text-center px-8 sm:px-12 py-4 sm:py-5 rounded-xl sm:rounded-2xl text-[10px] sm:text-xs font-black uppercase tracking-widest border-2 border-white/20 text-slate-300 hover:border-white hover:text-white hover:bg-white/5 transition-all duration-300 active:scale-95">
              View Departments
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}