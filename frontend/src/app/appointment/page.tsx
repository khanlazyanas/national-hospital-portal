"use client";

import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { CalendarDays, Clock, User, Phone, Mail, Stethoscope, FileText, CheckCircle2, ChevronDown, MapPin } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { updateAppointmentData, resetAppointment } from "@/redux/slices/appointmentSlice";
import { useState } from "react";

export default function AppointmentPage() {
  const dispatch = useDispatch<AppDispatch>();
  const appointmentData = useSelector((state: RootState) => state.appointment);
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Handle Input Changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    dispatch(updateAppointmentData({ [name]: value }));
  };

  // Handle Form Submit (Connected to Render Backend)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg("");

    // Render backend URL
    const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://national-hospital-portal.onrender.com";

    try {
      const response = await fetch(`${API_URL}/api/appointments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(appointmentData),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        dispatch(resetAppointment());
        setTimeout(() => setIsSubmitted(false), 4000);
      } else {
        setErrorMsg(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMsg("Failed to connect to server. Please check your internet.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <div className="absolute top-0 w-full z-50">
        <Navbar />
      </div>
      
      {/* Premium Header Banner */}
      <section className="relative w-full pt-40 pb-32 md:pt-48 md:pb-40 px-6 md:px-16 lg:px-24 overflow-hidden bg-[#020813]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=1920" 
            alt="Book Appointment" 
            className="w-full h-full object-cover object-center opacity-20 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020b1a]/95 via-[#0b2447]/80 to-[#020813] backdrop-blur-[2px]"></div>
        </div>
        
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] text-blue-300 mb-6 backdrop-blur-md shadow-sm">
            <CalendarDays className="w-4 h-4" />
            Priority Booking
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 text-white drop-shadow-lg leading-tight">
            Schedule Your <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">Consultation</span>
          </h1>
          <p className="text-blue-50/80 text-base md:text-lg max-w-2xl leading-relaxed font-light">
            Skip the waiting room. Book your priority slot directly with Dr. AQ Jilani and experience seamless, world-class neurological and psychiatric care.
          </p>
        </div>
      </section>

      {/* Booking Form Layout */}
      <div className="relative z-20 -mt-12 md:-mt-20 px-4 sm:px-6 md:px-16 lg:px-24 max-w-7xl mx-auto mb-24">
        <div className="bg-white rounded-[2.5rem] md:rounded-[3rem] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden flex flex-col lg:flex-row">
          
          {/* Left: Trust & Info */}
          <div className="w-full lg:w-[40%] bg-[#0b2447] p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
            
            <h2 className="text-3xl font-extrabold mb-8 relative z-10">Why Book Online?</h2>
            
            <div className="space-y-8 relative z-10">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Zero Wait Time</h3>
                  <p className="text-blue-100/70 text-sm">Get priority access to Dr. Jilani at your scheduled time.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                  <User className="w-6 h-6 text-teal-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Direct Consultation</h3>
                  <p className="text-blue-100/70 text-sm">Every appointment is personally handled by our Chief Specialist.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                  <FileText className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Instant Confirmation</h3>
                  <p className="text-blue-100/70 text-sm">Receive your digital token and appointment details immediately.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10 relative z-10">
              <div className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/10 backdrop-blur-md">
                <CheckCircle2 className="w-8 h-8 text-green-400" />
                <div>
                  <p className="text-xs text-blue-200 uppercase tracking-wider font-bold">100% Secure</p>
                  <p className="text-sm font-medium">Your medical data is encrypted.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Premium Form */}
          <div className="w-full lg:w-[60%] p-8 md:p-12 bg-white relative">
            <h3 className="text-2xl font-extrabold text-[#0b2447] mb-8">Patient Details</h3>
            
            {/* Success Message Alert */}
            {isSubmitted && (
              <div className="absolute top-4 right-4 bg-green-50 border border-green-200 text-green-700 px-6 py-4 rounded-2xl flex items-center gap-3 shadow-lg animate-in fade-in slide-in-from-top-4 duration-300 z-50">
                <CheckCircle2 className="w-6 h-6 text-green-500" />
                <span className="font-semibold text-sm">Appointment Confirmed!</span>
              </div>
            )}

            {/* Error Message Alert */}
            {errorMsg && (
              <div className="absolute top-4 right-4 bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-2xl flex items-center gap-3 shadow-lg animate-in fade-in slide-in-from-top-4 duration-300 z-50">
                <span className="font-semibold text-sm">{errorMsg}</span>
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input 
                      type="text" 
                      name="patientName"
                      value={appointmentData.patientName}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-100/50 transition-all text-sm font-medium text-[#0b2447]" 
                      placeholder="Enter Your Name" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input 
                      type="tel" 
                      name="phone"
                      value={appointmentData.phone}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-100/50 transition-all text-sm font-medium text-[#0b2447]" 
                      placeholder="Enter Your Mobile Number" 
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input 
                      type="email" 
                      name="email"
                      value={appointmentData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-100/50 transition-all text-sm font-medium text-[#0b2447]" 
                      placeholder="Enter Your Email" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Preferred Date</label>
                  <div className="relative">
                    <CalendarDays className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input 
                      type="date" 
                      name="preferredDate"
                      value={appointmentData.preferredDate}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-100/50 transition-all text-sm font-medium text-[#0b2447]" 
                    />
                  </div>
                </div>
              </div>

              {/* Address Field Added */}
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Address</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input 
                    type="text" 
                    name="address"
                    value={appointmentData.address}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-100/50 transition-all text-sm font-medium text-[#0b2447]" 
                    placeholder="Enter Your Adress" 
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Consultation Type</label>
                <div className="relative">
                  <Stethoscope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
                  <select 
                    name="service"
                    value={appointmentData.service}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-10 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-100/50 transition-all text-sm font-medium text-[#0b2447] appearance-none cursor-pointer relative"
                  >
                    <option value="" disabled>Select Service</option>
                    <option value="neuro-opd">Neurology OPD Consultation</option>
                    <option value="psychiatry-opd">Psychiatry & Therapy Session</option>
                    <option value="tele-consult">Online Video Consultation</option>
                    <option value="follow-up">Routine Follow-up</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                </div>
              </div>

              <button 
                type="submit" 
                disabled={isLoading}
                className={`w-full font-bold py-4 rounded-2xl shadow-[0_10px_20px_-10px_rgba(37,99,235,0.5)] transition-all duration-300 mt-4 ${
                  isLoading 
                    ? "bg-gray-400 text-white cursor-not-allowed" 
                    : "bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white hover:shadow-[0_15px_30px_-10px_rgba(37,99,235,0.6)] hover:-translate-y-0.5"
                }`}
              >
                {isLoading ? "Booking..." : "Confirm Appointment"}
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}