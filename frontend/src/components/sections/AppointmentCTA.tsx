import { CalendarDays, PhoneCall, Stethoscope } from "lucide-react";

export default function AppointmentCTA() {
  return (
    <section className="relative w-full py-24 px-6 md:px-16 lg:px-24 bg-white">
      
      {/* Massive Premium Glass Card */}
      <div className="relative w-full rounded-[2.5rem] bg-[#020813] overflow-hidden p-8 md:p-16 lg:p-20 shadow-[0_30px_60px_-15px_rgba(11,36,71,0.4)] border border-[#0b2447]/50">
        
        {/* Glowing Abstract Orbs */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-500/15 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>
        
        {/* Subtle Background Image Overlay (Blends smoothly into the dark) */}
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1538108149393-cebb47acddb2?auto=format&fit=crop&q=80&w=1920" 
            alt="Medical Facility" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020813] via-[#020813]/90 to-[#020813]/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left gap-2">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] text-blue-300 mb-6 shadow-sm">
            <Stethoscope className="w-4 h-4" />
            Priority Healthcare
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-[1.1] text-white tracking-tight">
            Ready to take control <br className="hidden md:block"/> of your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">health today?</span>
          </h2>
          
          <p className="text-blue-100/70 text-base md:text-lg max-w-2xl mb-10 leading-relaxed font-light">
            Book an appointment with our specialized doctors. We offer comprehensive consultations, advanced medical care, and a compassionate healing environment tailored just for you.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-[0_0_30px_-5px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_-5px_rgba(37,99,235,0.6)] hover:scale-[1.02] group w-full sm:w-auto">
              <CalendarDays className="w-5 h-5 group-hover:animate-pulse" />
              Book Appointment
            </button>
            <button className="flex items-center justify-center gap-2 bg-white/5 border border-white/20 hover:bg-white/10 hover:border-white/30 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 backdrop-blur-sm w-full sm:w-auto group">
              <PhoneCall className="w-5 h-5 group-hover:text-blue-400 transition-colors" />
              +91 800 123 4567
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}