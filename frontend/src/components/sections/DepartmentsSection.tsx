"use client";

import React, { useState } from "react";
import { ArrowRight, Clock, Calendar, Video, Activity, Brain } from "lucide-react";
import Link from "next/link";

const careCategories = [
  { id: "neuro", label: "Neurology OPD" },
  { id: "psych", label: "Psychiatry" },
  { id: "online", label: "Tele-Consultation" },
  { id: "emergency", label: "24/7 Emergency" },
];

const careDetails = {
  neuro: {
    title: "Advanced Neurological Care",
    description: "Comprehensive evaluation and treatment for complex brain, spine, and nervous system disorders under the direct expertise of Dr. AQ Jilani.",
    timing: "Mon - Sat: 10:00 AM - 2:00 PM",
    features: ["Stroke Management", "Epilepsy Treatment", "Migraine & Headache Clinics"],
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=1000",
    icon: Brain,
    status: "Available Today"
  },
  psych: {
    title: "Psychiatric Wellness & Therapy",
    description: "Confidential and compassionate psychiatric evaluations for mental health, depression, anxiety, and behavioral disorders.",
    timing: "Mon - Fri: 4:00 PM - 7:00 PM",
    features: ["Cognitive Behavioral Therapy", "Stress Management", "De-addiction Programs"],
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1000",
    icon: Activity,
    status: "Evening Slots Available"
  },
  online: {
    title: "Global Tele-Consultations",
    description: "Connect with Dr. Jilani from anywhere in the world through our secure, high-definition video consultation portal.",
    timing: "Mon - Sat: 8:00 PM - 9:30 PM",
    features: ["HD Video Calls", "Digital Prescriptions", "Follow-up Reviews"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000",
    icon: Video,
    status: "Book in Advance"
  },
  emergency: {
    title: "Critical Neuro Emergencies",
    description: "Immediate, life-saving interventions for acute strokes, trauma, and neurological emergencies with on-call support.",
    timing: "24 Hours / 7 Days",
    features: ["Level-1 Trauma Support", "Stat MRI/CT Scan", "ICU Admission"],
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1000",
    icon: Clock,
    status: "Always Open"
  }
};

export default function DepartmentsSection() {
  const [activeTab, setActiveTab] = useState("neuro");
  const activeData = careDetails[activeTab as keyof typeof careDetails];
  const ActiveIcon = activeData.icon;

  return (
    <section className="relative w-full py-24 md:py-32 px-4 sm:px-6 md:px-16 lg:px-24 bg-[#fafafa] overflow-hidden">
      <div className="relative z-10 max-w-[90rem] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0b2447] tracking-tighter leading-tight drop-shadow-sm">
              Specialized Care & <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Clinic Timings</span>
            </h2>
          </div>
          <Link href="/appointment" className="flex items-center gap-2 text-blue-600 font-bold hover:text-[#0b2447] transition-colors duration-300 group outline-none">
            View Full Schedule <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Custom Premium Tabs */}
        <div className="flex flex-wrap gap-2 md:gap-4 mb-10 border-b border-gray-200 pb-4">
          {careCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-6 py-3 rounded-full text-sm md:text-base font-bold transition-all duration-300 outline-none ${
                activeTab === cat.id
                  ? "bg-[#0b2447] text-white shadow-md transform scale-105"
                  : "bg-white text-gray-500 border border-gray-200 hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dynamic Content Area (Bento Layout) */}
        <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] p-6 md:p-10 flex flex-col lg:flex-row gap-10 items-center transition-all duration-500">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-100 text-[10px] font-bold uppercase tracking-widest text-teal-600 mb-6 w-max">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse"></span>
              {activeData.status}
            </div>
            
            <h3 className="text-3xl md:text-4xl font-black text-[#0b2447] mb-4">
              {activeData.title}
            </h3>
            
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              {activeData.description}
            </p>

            {/* Schedule & Features Card */}
            <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-6 mb-8">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-blue-100/50">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-blue-500 mb-1">Dr. Jilani's Availability</p>
                  <p className="text-lg font-black text-[#0b2447]">{activeData.timing}</p>
                </div>
              </div>
              <ul className="space-y-3">
                {activeData.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm font-bold text-gray-700">
                    <ActiveIcon className="w-4 h-4 text-teal-500" /> {feature}
                  </li>
                ))}
              </ul>
            </div>

            <Link href="/appointment" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl text-sm font-bold shadow-[0_10px_20px_-10px_rgba(37,99,235,0.5)] hover:bg-[#0b2447] hover:shadow-lg transition-all duration-300">
              Book this Slot <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden relative shadow-inner">
            <img 
              key={activeData.image} // Key forces re-render for smooth transition
              src={activeData.image} 
              alt={activeData.title}
              className="w-full h-full object-cover animate-in fade-in zoom-in duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b2447]/60 to-transparent"></div>
          </div>

        </div>
      </div>
    </section>
  );
}