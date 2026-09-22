import { FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import { ArrowRight, Award, Star, Activity, Brain } from "lucide-react";

export default function FeaturedDoctors() {
  return (
    <section className="relative w-full py-24 px-6 md:px-16 lg:px-24 bg-[#f8fafc] overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3 mix-blend-multiply"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/4 mix-blend-multiply"></div>

      {/* Header Section */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6 max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] text-blue-600 mb-6 shadow-sm">
            <Award className="w-4 h-4" />
            Medical Leadership
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0b2447] tracking-tighter leading-tight drop-shadow-sm">
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Chief Specialist</span>
          </h2>
        </div>
      </div>

      {/* Single Premium Doctor Profile */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="group bg-white rounded-[3rem] p-4 md:p-6 border border-gray-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_-15px_rgba(37,99,235,0.15)] transition-all duration-[600ms] ease-[cubic-bezier(0.19,1,0.22,1)] flex flex-col md:flex-row gap-8 lg:gap-16 items-center">
          
          {/* Image Container (Left) */}
          <div className="w-full md:w-2/5 h-[400px] md:h-[500px] relative rounded-[2.5rem] overflow-hidden bg-gray-100 shrink-0 shadow-inner">
            
            <div className="absolute top-6 right-6 z-20 bg-white/90 backdrop-blur-xl px-4 py-2 rounded-2xl text-[12px] font-bold text-[#0b2447] shadow-lg flex items-center gap-2 border border-white/50">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 drop-shadow-sm" /> 15+ Years Exp.
            </div>

            {/* REPLACE THIS WITH ACTUAL DR. AQ JILANI IMAGE */}
            <img 
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800" 
              alt="Dr. AQ Jilani"
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-[1000ms] ease-[cubic-bezier(0.19,1,0.22,1)]" 
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b2447]/80 via-[#0b2447]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="absolute bottom-8 left-0 w-full flex justify-center gap-6 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-[600ms] ease-[cubic-bezier(0.19,1,0.22,1)] z-20">
              <Link href="#" className="w-12 h-12 rounded-full bg-white text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white shadow-[0_10px_20px_rgba(0,0,0,0.2)] transition-colors hover:scale-110 duration-300">
                <FaLinkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-12 h-12 rounded-full bg-white text-teal-500 flex items-center justify-center hover:bg-teal-500 hover:text-white shadow-[0_10px_20px_rgba(0,0,0,0.2)] transition-colors hover:scale-110 duration-300">
                <FaTwitter className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Content Section (Right) */}
          <div className="w-full md:w-3/5 p-4 md:p-8 md:pr-12">
            <h3 className="text-4xl lg:text-5xl font-black text-[#0b2447] mb-3">
              Dr. AQ Jilani
            </h3>
            
            <p className="text-teal-600 font-black text-sm lg:text-base uppercase tracking-[0.2em] mb-6">
              MBBS, MD, DM (Physician & Neurologist)
            </p>
            
            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-teal-400 rounded-full mb-8"></div>
            
            <p className="text-slate-500 text-lg leading-relaxed mb-8 font-medium">
              As the Chief Specialist at National Hospital & Neuro Center, Dr. AQ Jilani brings over a decade and a half of unparalleled expertise in diagnosing and treating complex neurological and psychiatric conditions. His patient-first approach ensures world-class medical care combined with deep compassion.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="flex items-center gap-3 bg-blue-50/50 p-4 rounded-2xl border border-blue-100/50">
                <Brain className="w-8 h-8 text-blue-500" />
                <div>
                  <p className="font-bold text-[#0b2447] text-sm">Advanced Neurology</p>
                  <p className="text-xs text-slate-500 font-medium">Brain & Spine Care</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-teal-50/50 p-4 rounded-2xl border border-teal-100/50">
                <Activity className="w-8 h-8 text-teal-500" />
                <div>
                  <p className="font-bold text-[#0b2447] text-sm">Psychiatric Medicine</p>
                  <p className="text-xs text-slate-500 font-medium">Mental Wellness</p>
                </div>
              </div>
            </div>

            <Link href="/appointment" className="inline-flex items-center gap-2 bg-[#0b2447] text-white px-8 py-4 rounded-xl text-sm font-bold shadow-[0_10px_20px_-10px_rgba(11,36,71,0.5)] hover:bg-blue-600 hover:shadow-[0_15px_30px_-10px_rgba(37,99,235,0.5)] transition-all duration-300 outline-none">
              Consult Dr. AQ Jilani <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}