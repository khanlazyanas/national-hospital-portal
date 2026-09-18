import { CalendarDays, PhoneCall, Stethoscope, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AppointmentCTA() {
  return (
    <section className="relative w-full py-24 px-6 md:px-16 lg:px-24 bg-[#f8fafc]">
      
      {/* Massive Premium Glass Card */}
      <div className="relative w-full rounded-[2.5rem] md:rounded-[3rem] bg-[#020813] overflow-hidden p-8 md:p-16 lg:p-20 shadow-[0_30px_60px_-15px_rgba(11,36,71,0.4)] border border-[#0b2447]/50 group/card">
        
        {/* Glowing Abstract Orbs with Hover Expansion */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none group-hover/card:bg-blue-600/30 transition-colors duration-1000"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-500/15 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3 pointer-events-none group-hover/card:bg-teal-500/25 transition-colors duration-1000"></div>
        
        {/* Subtle Background Image Overlay */}
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1538108149393-cebb47acddb2?auto=format&fit=crop&q=80&w=1920" 
            alt="Medical Facility" 
            className="w-full h-full object-cover object-center transform group-hover/card:scale-105 transition-transform duration-[2000ms] ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020813] via-[#020813]/90 to-[#020813]/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left gap-2 max-w-3xl">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] text-blue-300 mb-6 shadow-sm backdrop-blur-md">
            <Stethoscope className="w-4 h-4" />
            Priority Healthcare
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1] text-white tracking-tighter">
            Ready to take control <br className="hidden md:block"/> of your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">health today?</span>
          </h2>
          
          <p className="text-blue-100/70 text-base md:text-lg max-w-2xl mb-10 leading-relaxed font-medium">
            Book an appointment with our specialized doctors. We offer comprehensive consultations, advanced medical care, and a compassionate healing environment tailored just for you.
          </p>
          
          {/* Action Buttons with Working Routing */}
          <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
            <Link 
              href="/appointment" 
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white px-8 py-4 rounded-xl font-bold transition-all duration-500 shadow-[0_0_30px_-5px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_-5px_rgba(37,99,235,0.6)] hover:-translate-y-1 group w-full sm:w-auto outline-none"
            >
              <CalendarDays className="w-5 h-5 group-hover:animate-pulse" />
              Book Appointment
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform ease-[cubic-bezier(0.19,1,0.22,1)]" />
            </Link>
            
            <a 
              href="tel:+918001234567" 
              className="flex items-center justify-center gap-2 bg-white/5 border border-white/20 hover:bg-white/10 hover:border-white/30 text-white px-8 py-4 rounded-xl font-bold transition-all duration-500 backdrop-blur-sm w-full sm:w-auto group outline-none"
            >
              <PhoneCall className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
              +91 800 123 4567
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}