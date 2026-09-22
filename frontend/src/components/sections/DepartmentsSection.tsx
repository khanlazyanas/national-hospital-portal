"use client";

import React, { useState } from "react";
import { ArrowRight, Clock, Calendar, Video, Activity, Brain, PhoneCall } from "lucide-react";
import Link from "next/link";

// Focus shifted strictly to Dr. AQ Jilani's specialized services
const careCategories = [
  { id: "neuro", label: "Neurology" },
  { id: "psych", label: "Psychiatry" },
  { id: "tele", label: "Online Consult" },
];

const careDetails = {
  neuro: {
    title: "Expert Neurological Care",
    description: "Direct consultation with Dr. AQ Jilani for complex brain, spine, and nervous system disorders. Experience precision diagnosis and personalized treatment plans.",
    timing: "Mon - Sat: 10:00 AM - 2:00 PM",
    features: ["Stroke & Trauma Care", "Epilepsy Management", "Migraine Treatment"],
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=1000",
    icon: Brain,
    status: "Slots Available Today"
  },
  psych: {
    title: "Psychiatric Wellness",
    description: "Confidential, compassionate psychiatric evaluation and therapy for mental health, depression, and anxiety disorders under expert clinical guidance.",
    timing: "Mon - Fri: 4:00 PM - 7:00 PM",
    features: ["Clinical Therapy", "Stress Management", "Behavioral Counseling"],
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1000",
    icon: Activity,
    status: "Evening Slots Open"
  },
  tele: {
    title: "Global Tele-Consultations",
    description: "Connect with Dr. Jilani from anywhere. Secure, high-definition video consultations for follow-ups, second opinions, and general psychiatric advice.",
    timing: "Mon - Sat: 8:00 PM - 9:30 PM",
    features: ["HD Video Calls", "E-Prescriptions", "Remote Patient Monitoring"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000",
    icon: Video,
    status: "Book in Advance"
  },
};

export default function DepartmentsSection() {
  const [activeTab, setActiveTab] = useState("neuro");
  const activeData = careDetails[activeTab as keyof typeof careDetails];
  const ActiveIcon = activeData.icon;

  return (
    <section className="relative w-full py-20 md:py-28 px-4 sm:px-6 md:px-16 lg:px-24 bg-[#fafafa] overflow-hidden">
      <div className="relative z-10 max-w-[90rem] mx-auto">
        
        {/* Section Header tailored for a Solo Premium Doctor */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0b2447] tracking-tighter leading-tight drop-shadow-sm">
              Specialized Care & <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Clinic Timings</span>
            </h2>
            <p className="mt-4 text-slate-500 font-medium text-lg">
              Explore the dedicated medical services provided by Dr. AQ Jilani.
            </p>
          </div>
        </div>

        {/* Custom Premium Tabs */}
        <div className="flex flex-wrap gap-2 md:gap-4 mb-10">
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

        {/* Dynamic Single-Card Content Area (Replaces the 3-image grid) */}
        <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-lg p-6 md:p-10 flex flex-col lg:flex-row gap-10 items-center transition-all duration-500 hover:shadow-xl">
          
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

            {/* Schedule & Features Mini-Card */}
            <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-6 mb-8">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-blue-100/50">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-blue-500 mb-1">Consultation Timing</p>
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

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/appointment" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0b2447] text-white px-8 py-4 rounded-xl text-sm font-bold shadow-[0_10px_20px_-10px_rgba(11,36,71,0.5)] hover:bg-blue-600 hover:shadow-lg transition-all duration-300">
                Book this Slot <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="tel:+918001234567" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-[#0b2447] border border-gray-200 px-8 py-4 rounded-xl text-sm font-bold hover:bg-gray-50 transition-all duration-300">
                <PhoneCall className="w-4 h-4" /> Call Clinic
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 h-[450px] md:h-[550px] rounded-[2rem] overflow-hidden relative shadow-inner">
            <img 
              key={activeData.image} 
              src={activeData.image} 
              alt={activeData.title}
              className="w-full h-full object-cover animate-in fade-in zoom-in duration-700"
            />
            {/* Elegant overlay to make the image look premium */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#020b1a]/40 to-transparent"></div>
          </div>

        </div>
      </div>
    </section>
  );
}