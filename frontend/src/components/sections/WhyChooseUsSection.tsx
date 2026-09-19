import React from "react";
import { ShieldCheck, Users, Clock, Microscope, ArrowRight, HeartHandshake } from "lucide-react";
import Link from "next/link";

const features = [
  {
    id: 1,
    title: "Zero Infection Protocol",
    description: "Laminar airflow operation theatres and strictly enforced global hygiene standards for 100% patient safety.",
    icon: ShieldCheck,
    iconColor: "text-teal-600",
    iconBg: "bg-teal-50",
    glowColor: "group-hover:shadow-[0_20px_40px_-15px_rgba(20,184,166,0.3)]",
    borderColor: "group-hover:border-teal-200"
  },
  {
    id: 2,
    title: "200+ Top Specialists",
    description: "A multidisciplinary team of nationally recognized doctors, surgeons, and clinicians collaborating for your care.",
    icon: Users,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-50",
    glowColor: "group-hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.3)]",
    borderColor: "group-hover:border-blue-200"
  },
  {
    id: 3,
    title: "24/7 Emergency & ICU",
    description: "Fully equipped Level-1 trauma center and intensive care units with senior consultants available round-the-clock.",
    icon: Clock,
    iconColor: "text-red-500",
    iconBg: "bg-red-50",
    glowColor: "group-hover:shadow-[0_20px_40px_-15px_rgba(239,68,68,0.3)]",
    borderColor: "group-hover:border-red-200"
  },
  {
    id: 4,
    title: "Advanced Technology",
    description: "Next-generation 3T MRI, robotic surgery systems, and AI-assisted diagnostics for pinpoint accuracy.",
    icon: Microscope,
    iconColor: "text-indigo-600",
    iconBg: "bg-indigo-50",
    glowColor: "group-hover:shadow-[0_20px_40px_-15px_rgba(79,70,229,0.3)]",
    borderColor: "group-hover:border-indigo-200"
  }
];

export default function WhyChooseUsSection() {
  return (
    <section className="relative w-full py-24 md:py-32 px-4 sm:px-6 md:px-16 lg:px-24 bg-white overflow-hidden">
      
      {/* Subtle Background Blurs */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="relative z-10 max-w-[90rem] mx-auto flex flex-col lg:flex-row items-start gap-16 lg:gap-24">
        
        {/* Left Content (Sticky on Desktop) */}
        <div className="w-full lg:w-[45%] lg:sticky lg:top-40">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-6 shadow-sm">
            <HeartHandshake className="w-4 h-4" />
            Core Values & Legacy
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-black text-[#0b2447] tracking-tighter leading-[1.05] md:leading-[0.95] mb-8 drop-shadow-sm">
            Why Patients <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 pr-2">Trust Us.</span>
          </h2>
          
          <p className="text-slate-500 text-base md:text-lg font-medium leading-relaxed mb-10 max-w-lg">
            For over 15 years, National Hospital has been at the forefront of medical innovation. We combine world-class infrastructure with deeply compassionate care to ensure the best possible outcomes for you and your loved ones.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link 
              href="/about" 
              className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-[#0b2447] text-white px-8 py-4 rounded-xl text-xs font-black uppercase tracking-widest shadow-[0_10px_20px_-10px_rgba(11,36,71,0.5)] hover:shadow-[0_15px_30px_-10px_rgba(11,36,71,0.6)] hover:bg-blue-600 transition-all duration-300 outline-none active:scale-95"
            >
              Discover Our Legacy <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform ease-[cubic-bezier(0.19,1,0.22,1)]" />
            </Link>
          </div>
        </div>

        {/* Right Content (Features Grid) */}
        <div className="w-full lg:w-[55%]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={feature.id}
                  className={`group bg-white border border-slate-100 rounded-3xl p-8 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] hover:-translate-y-2 ${feature.glowColor} ${feature.borderColor} relative overflow-hidden`}
                >
                  {/* Subtle Gradient Reveal on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                  
                  <div className={`w-14 h-14 rounded-2xl ${feature.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] shadow-sm border border-white/50`}>
                    <Icon className={`w-7 h-7 ${feature.iconColor}`} />
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-black text-[#0b2447] tracking-tight mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-slate-500 font-medium text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}