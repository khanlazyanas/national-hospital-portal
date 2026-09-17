import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { CalendarDays, Clock, User, Phone, Mail, Stethoscope, FileText, CheckCircle2 } from "lucide-react";

export default function AppointmentPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <Navbar />
      
      {/* Premium Header Banner */}
      <section className="relative w-full pt-40 pb-32 md:pt-48 md:pb-40 px-6 md:px-16 lg:px-24 overflow-hidden bg-[#020813]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1538108149393-cebb47acddb2?auto=format&fit=crop&q=80&w=1920" 
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
            Skip the waiting room. Book your appointment online with our top specialists and experience seamless, world-class healthcare.
          </p>
        </div>
      </section>

      {/* Booking Form Layout */}
      <div className="relative z-20 -mt-12 md:-mt-20 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto mb-24">
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
                  <p className="text-blue-100/70 text-sm">Get priority access to your doctor at your scheduled time.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                  <User className="w-6 h-6 text-teal-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Expert Matching</h3>
                  <p className="text-blue-100/70 text-sm">We ensure you are paired with the most relevant specialist.</p>
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
          <div className="w-full lg:w-[60%] p-8 md:p-12 bg-white">
            <h3 className="text-2xl font-extrabold text-[#0b2447] mb-8">Patient Details</h3>
            <form className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input type="text" className="w-full pl-12 pr-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-100/50 transition-all text-sm font-medium text-[#0b2447]" placeholder="John Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input type="tel" className="w-full pl-12 pr-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-100/50 transition-all text-sm font-medium text-[#0b2447]" placeholder="+91 98765 43210" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input type="email" className="w-full pl-12 pr-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-100/50 transition-all text-sm font-medium text-[#0b2447]" placeholder="john@example.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Preferred Date</label>
                  <div className="relative">
                    <CalendarDays className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input type="date" className="w-full pl-12 pr-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-100/50 transition-all text-sm font-medium text-[#0b2447]" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Department / Specialist</label>
                <div className="relative">
                  <Stethoscope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
                  <select className="w-full pl-12 pr-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-100/50 transition-all text-sm font-medium text-[#0b2447] appearance-none cursor-pointer relative">
                    <option>Select Department</option>
                    <option>Neurology - Dr. Sarah Connor</option>
                    <option>Cardiology - Dr. James Wilson</option>
                    <option>Orthopedics - Dr. Emily Chen</option>
                  </select>
                </div>
              </div>

              <button type="button" className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold py-4 rounded-2xl shadow-[0_10px_20px_-10px_rgba(37,99,235,0.5)] hover:shadow-[0_15px_30px_-10px_rgba(37,99,235,0.6)] hover:-translate-y-0.5 transition-all duration-300 mt-4">
                Confirm Appointment
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}