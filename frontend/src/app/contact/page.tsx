import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { MapPin, Phone, Mail, Clock, Headset, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <Navbar />
      
      {/* Premium Header Banner - Deep Dark Glassmorphism Theme */}
      <section className="relative w-full pt-40 pb-32 md:pt-48 md:pb-40 px-6 md:px-16 lg:px-24 overflow-hidden bg-[#020813]">
        
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?auto=format&fit=crop&q=80&w=1920" 
            alt="Contact Support" 
            className="w-full h-full object-cover object-center opacity-20 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020b1a]/95 via-[#0b2447]/80 to-[#020813] backdrop-blur-[2px]"></div>
        </div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 -translate-x-1/3"></div>

        {/* Header Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] text-blue-300 mb-6 backdrop-blur-md shadow-sm">
            <Headset className="w-4 h-4" />
            24/7 Premium Support
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 text-white drop-shadow-lg leading-tight">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">Touch</span>
          </h1>
          
          <p className="text-blue-50/80 text-base md:text-lg max-w-2xl leading-relaxed font-light">
            We are here for you around the clock. Reach out for priority appointments, emergency support, or any medical inquiries.
          </p>
        </div>
      </section>

      {/* Main Content Layout with 3D Overlap Effect */}
      <div className="relative z-20 -mt-12 md:-mt-20 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto mb-24">
        
        {/* Massive Floating Contact Card */}
        <div className="bg-white rounded-[2.5rem] md:rounded-[3rem] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden flex flex-col lg:flex-row">
          
          {/* Left Column: Contact Details */}
          <div className="w-full lg:w-[45%] bg-gradient-to-br from-[#f8fafc] to-blue-50/50 p-8 md:p-12 lg:p-16 border-r border-gray-100">
            <h2 className="text-3xl font-extrabold text-[#0b2447] mb-8">Always Here to <br/>Help You.</h2>
            
            <div className="space-y-8">
              {/* Phone */}
              <div className="flex gap-5 group">
                <div className="w-14 h-14 bg-white shadow-sm border border-gray-100 text-blue-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0b2447] mb-1">Emergency & Appts</h3>
                  <p className="text-gray-500 text-sm font-medium">24/7 Helpline: +91 800 123 4567</p>
                  <p className="text-gray-500 text-sm font-medium">Reception: +91 800 123 4568</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-5 group">
                <div className="w-14 h-14 bg-white shadow-sm border border-gray-100 text-teal-500 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(20,184,166,0.3)]">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0b2447] mb-1">Email Us</h3>
                  <p className="text-gray-500 text-sm font-medium">Inquiries: contact@nationalhospital.com</p>
                  <p className="text-gray-500 text-sm font-medium">Careers: hr@nationalhospital.com</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-5 group">
                <div className="w-14 h-14 bg-white shadow-sm border border-gray-100 text-blue-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0b2447] mb-1">Location</h3>
                  <p className="text-gray-500 text-sm font-medium leading-relaxed">Sigra Main Road, Varanasi<br/>Uttar Pradesh, India 221010</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-5 group">
                <div className="w-14 h-14 bg-white shadow-sm border border-gray-100 text-teal-500 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(20,184,166,0.3)]">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0b2447] mb-1">Operating Hours</h3>
                  <p className="text-gray-500 text-sm font-medium"><span className="font-bold text-[#0b2447]">Emergency:</span> 24/7 Open</p>
                  <p className="text-gray-500 text-sm font-medium"><span className="font-bold text-[#0b2447]">OPD Timings:</span> 9:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="w-full lg:w-[55%] p-8 md:p-12 lg:p-16 bg-white">
            <h3 className="text-2xl font-extrabold text-[#0b2447] mb-8">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">First Name</label>
                  <input type="text" className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-100/50 transition-all text-sm font-medium text-[#0b2447] placeholder-gray-400" placeholder="John" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Last Name</label>
                  <input type="text" className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-100/50 transition-all text-sm font-medium text-[#0b2447] placeholder-gray-400" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Email Address</label>
                <input type="email" className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-100/50 transition-all text-sm font-medium text-[#0b2447] placeholder-gray-400" placeholder="john@example.com" />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Department (Optional)</label>
                <select className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-100/50 transition-all text-sm font-medium text-[#0b2447] appearance-none cursor-pointer">
                  <option>General Inquiry</option>
                  <option>Neurology</option>
                  <option>Cardiology</option>
                  <option>Orthopedics</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Message</label>
                <textarea rows={4} className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-100/50 transition-all text-sm font-medium text-[#0b2447] placeholder-gray-400 resize-none" placeholder="How can we help you?"></textarea>
              </div>

              <button type="button" className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold py-4 rounded-2xl shadow-[0_10px_20px_-10px_rgba(37,99,235,0.5)] hover:shadow-[0_15px_30px_-10px_rgba(37,99,235,0.6)] hover:-translate-y-0.5 transition-all duration-300 mt-4 flex justify-center items-center gap-2">
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}