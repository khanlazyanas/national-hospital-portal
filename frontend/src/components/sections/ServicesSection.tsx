import React from "react";
import { Brain, Activity, Microscope, HeartPulse, ArrowRight, ActivitySquare } from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "neurology",
    title: "Advanced Neurology",
    description: "Comprehensive diagnosis and management of stroke, epilepsy, migraines, Parkinson's, and complex neuropathies.",
    icon: Brain,
    color: "text-blue-600",
    bg: "bg-blue-50",
    hoverBg: "group-hover:bg-blue-600",
    hoverBorder: "hover:border-blue-200"
  },
  {
    id: "psychiatry",
    title: "Psychiatry & Therapy",
    description: "Expert mental health care for depression, anxiety disorders, OCD, and behavioral therapies in a highly confidential setting.",
    icon: Activity,
    color: "text-teal-600",
    bg: "bg-teal-50",
    hoverBg: "group-hover:bg-teal-500",
    hoverBorder: "hover:border-teal-200"
  },
  {
    id: "diagnostics",
    title: "Neuro-Diagnostics",
    description: "State-of-the-art EEG, EMG, NCV, and advanced neuro-imaging analysis for pinpoint clinical accuracy.",
    icon: Microscope,
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    hoverBg: "group-hover:bg-indigo-500",
    hoverBorder: "hover:border-indigo-200"
  },
  {
    id: "rehab",
    title: "Neuro-Rehabilitation",
    description: "Post-stroke and post-trauma recovery programs focused on restoring mobility, speech, and cognitive functions.",
    icon: HeartPulse,
    color: "text-rose-600",
    bg: "bg-rose-50",
    hoverBg: "group-hover:bg-rose-500",
    hoverBorder: "hover:border-rose-200"
  }
];

export default function ServicesSection() {
  return (
    <section className="relative w-full py-24 md:py-32 px-4 sm:px-6 md:px-16 lg:px-24 bg-[#f8fafc] overflow-hidden">
      
      {/* Decorative Blur Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/3"></div>

      <div className="relative z-10 max-w-[90rem] mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-[#0b2447] mb-6 shadow-sm">
              <ActivitySquare className="w-4 h-4 text-blue-600" />
              Healthcare Services
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0b2447] tracking-tighter leading-tight drop-shadow-sm">
              Specialized <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Clinical Expertise</span>
            </h2>
          </div>
          <Link href="/services" className="flex items-center gap-2 text-blue-600 font-bold hover:text-[#0b2447] transition-colors duration-300 group outline-none">
            View All Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Services Grid (No Doctors, Just Premium Clinical Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index}
                className={`group bg-white rounded-[2rem] p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_-15px_rgba(37,99,235,0.15)] transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] hover:-translate-y-2 cursor-pointer ${service.hoverBorder}`}
              >
                <div className={`w-16 h-16 rounded-2xl ${service.bg} flex items-center justify-center mb-8 transition-colors duration-500 ${service.hoverBg}`}>
                  <Icon className={`w-8 h-8 ${service.color} group-hover:text-white transition-colors duration-500`} />
                </div>
                
                <h3 className="text-2xl font-extrabold text-[#0b2447] mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-slate-500 font-medium text-sm leading-relaxed mb-8">
                  {service.description}
                </p>
                
                <div className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-[#0b2447] group-hover:text-blue-600 transition-colors">
                  Learn More <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}