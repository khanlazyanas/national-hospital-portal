import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { Award, GraduationCap, MapPin, Phone, Star, ShieldPlus, CalendarCheck, BookOpen, Clock } from "lucide-react";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Dr. AQ Jilani | Chief Neurologist & Psychiatrist | National Hospital",
  description: "Learn more about Dr. AQ Jilani (MBBS, MD, DM), the Chief Specialist at National Hospital & Neuro Center.",
};

export default function DoctorProfilePage() {
  return (
    <main className="min-h-screen bg-[#f8fafc] overflow-x-hidden">
      <div className="absolute top-0 w-full z-50">
        <Navbar />
      </div>
      
      {/* Premium Header Banner - Deep Dark Glassmorphism Theme */}
      <section className="relative w-full pt-40 pb-20 md:pt-48 md:pb-24 px-6 md:px-16 lg:px-24 overflow-hidden bg-[#020813]">
        
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1920" 
            alt="Medical Facility" 
            className="w-full h-full object-cover object-center opacity-20 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020b1a]/95 via-[#0b2447]/80 to-[#020813] backdrop-blur-[2px]"></div>
        </div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>

        {/* Header Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] text-teal-300 mb-6 backdrop-blur-md shadow-sm">
            <ShieldPlus className="w-4 h-4" />
            Chief Medical Officer
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight mb-4 text-white drop-shadow-lg leading-tight">
            Dr. AQ Jilani
          </h1>
          <p className="text-blue-300 font-bold tracking-[0.2em] uppercase text-sm md:text-base mb-8">
            MBBS, MD, DM (Physician & Neurologist)
          </p>
        </div>
      </section>

      {/* Main Profile Layout */}
      <div className="relative z-20 -mt-16 md:-mt-24 px-4 sm:px-6 md:px-16 lg:px-24 max-w-7xl mx-auto mb-24">
        
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Left Column: Image & Sticky Quick Actions */}
          <div className="w-full lg:w-1/3">
            <div className="sticky top-32">
              <div className="bg-white rounded-[2rem] border border-gray-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] overflow-hidden">
                <div className="relative h-96 w-full bg-gray-100">
                  <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-bold text-yellow-600 flex items-center gap-1.5 shadow-sm">
                    <Star className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" /> 15+ Years Exp.
                  </div>
                  {/* UPDATE IMAGE LATER */}
                  <img 
                    src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800" 
                    alt="Dr. AQ Jilani" 
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b2447]/80 to-transparent opacity-80"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <p className="font-black text-2xl drop-shadow-md">Chief Specialist</p>
                    <p className="text-teal-300 text-xs font-bold uppercase tracking-widest mt-1 drop-shadow-sm">National Hospital</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
                    <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600 shrink-0">
                      <CalendarCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">Availability</p>
                      <p className="font-black text-[#0b2447]">Mon - Sat (Available)</p>
                    </div>
                  </div>

                  <Link href="/appointment" className="w-full flex items-center justify-center gap-2 bg-[#0b2447] hover:bg-blue-600 text-white py-4 rounded-xl text-sm font-bold shadow-[0_10px_20px_-10px_rgba(11,36,71,0.5)] transition-all duration-300 outline-none mb-3">
                    Book Consultation
                  </Link>
                  <Link href="tel:+918001234567" className="w-full flex items-center justify-center gap-2 bg-white hover:bg-gray-50 border border-gray-200 text-[#0b2447] py-4 rounded-xl text-sm font-bold transition-all duration-300 outline-none">
                    <Phone className="w-4 h-4" /> Call Helpline
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Information */}
          <div className="w-full lg:w-2/3 flex flex-col gap-8">
            
            {/* About Section */}
            <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm p-8 md:p-10">
              <h2 className="text-2xl font-black text-[#0b2447] mb-6 flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-blue-600" /> About Dr. AQ Jilani
              </h2>
              <div className="prose prose-slate max-w-none text-gray-600 leading-relaxed font-medium">
                <p className="mb-4">
                  Dr. AQ Jilani is a highly acclaimed Physician and Neurologist with over 15 years of dedicated clinical experience. As the driving force behind National Hospital & Neuro Center, he has established a legacy of providing world-class, deeply compassionate medical care to patients with complex neurological and psychiatric conditions.
                </p>
                <p>
                  His clinical philosophy revolves around precise diagnosis utilizing cutting-edge neuro-diagnostics and formulating personalized treatment pathways. Dr. Jilani is renowned for his expertise in stroke management, epilepsy, severe migraines, and holistic mental wellness interventions.
                </p>
              </div>
            </div>

            {/* Qualifications */}
            <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm p-8 md:p-10">
              <h2 className="text-2xl font-black text-[#0b2447] mb-6 flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-blue-600" /> Qualifications & Credentials
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: "M.B.B.S.", desc: "Foundation of Medical Excellence" },
                  { title: "M.D. (Medicine)", desc: "Advanced Internal Medicine" },
                  { title: "D.M. (Neurology)", desc: "Super-specialization in Brain & Spine" },
                  { title: "Ex-Consultant", desc: "Top Tier Medical Institutes" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                    <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-black text-[#0b2447]">{item.title}</h4>
                      <p className="text-xs font-medium text-gray-500 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Clinical Expertise (Bento Grid Style) */}
            <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm p-8 md:p-10">
              <h2 className="text-2xl font-black text-[#0b2447] mb-6 flex items-center gap-3">
                <ShieldPlus className="w-6 h-6 text-blue-600" /> Core Clinical Expertise
              </h2>
              <div className="flex flex-wrap gap-3">
                {[
                  "Stroke & Neuro-Trauma",
                  "Epilepsy Management",
                  "Chronic Migraines",
                  "Parkinson's Disease",
                  "Neuropathy",
                  "Clinical Psychiatry",
                  "Anxiety & Depression",
                  "Neuro-Rehabilitation"
                ].map((skill, i) => (
                  <span key={i} className="px-5 py-2.5 bg-blue-50/50 text-blue-700 font-bold text-sm rounded-full border border-blue-100/50">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Timings */}
            <div className="bg-[#0b2447] rounded-[2rem] shadow-xl p-8 md:p-10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] pointer-events-none"></div>
              <h2 className="text-2xl font-black mb-6 flex items-center gap-3 relative z-10">
                <Clock className="w-6 h-6 text-teal-400" /> Clinic Timings
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10">
                  <p className="text-teal-300 text-[10px] font-bold uppercase tracking-widest mb-1">Morning OPD</p>
                  <p className="font-black text-xl">10:00 AM - 02:00 PM</p>
                  <p className="text-xs text-blue-200 mt-2">Monday to Saturday</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/10">
                  <p className="text-teal-300 text-[10px] font-bold uppercase tracking-widest mb-1">Evening OPD</p>
                  <p className="font-black text-xl">04:00 PM - 07:00 PM</p>
                  <p className="text-xs text-blue-200 mt-2">Monday to Friday</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}