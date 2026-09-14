import Navbar from "@/components/shared/Navbar";
import DepartmentsSection from "@/components/sections/DepartmentsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import FeaturedDoctors from "@/components/sections/FeaturedDoctors";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import AppointmentCTA from "@/components/sections/AppointmentCTA";
import Footer from "@/components/shared/Footer";
import { Star } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-surfaceWhite">
      {/* Hero Section */}
      <section className="relative w-full bg-[#83a2b5] pt-32 pb-0 md:pt-40 px-8 md:px-16 lg:px-24 overflow-hidden min-h-[90vh] flex items-end">
        
        {/* Navigation */}
        <Navbar />

        {/* Center Transparent Doctor Image (Acts as background layer) */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] md:w-[600px] h-[75%] md:h-[90%] z-0 pointer-events-none flex items-end justify-center">
          {/* Using a transparent PNG to match the exact screenshot blend effect */}
          <img 
            src="https://freepngimg.com/thumb/doctor/67709-physician-health-care-medicine-female-doctor-stethoscop.png" 
            alt="Lead Doctor" 
            className="w-full h-full object-contain object-bottom drop-shadow-2xl opacity-95"
          />
        </div>
        
        {/* Main Content Container */}
        <div className="relative w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-end justify-between z-10 pb-16 md:pb-24 gap-8">
          
          {/* Left Content */}
          <div className="w-full md:w-5/12 text-white flex flex-col items-start gap-5">
            <div className="flex items-center gap-3 bg-white/20 px-4 py-2 rounded-full text-xs font-semibold backdrop-blur-md shadow-sm border border-white/20">
              <div className="flex -space-x-2">
                <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=100" alt="Avatar" className="w-6 h-6 rounded-full object-cover border border-[#83a2b5]" />
                <img src="https://images.unsplash.com/photo-1594824436998-d822cd013a5a?auto=format&fit=crop&q=80&w=100" alt="Avatar" className="w-6 h-6 rounded-full object-cover border border-[#83a2b5]" />
              </div>
              <span className="tracking-wide">200+ Verified Doctors</span>
            </div>
            
            <h1 className="text-6xl md:text-[5.5rem] font-bold tracking-tighter leading-none drop-shadow-sm mt-2">
              MEDICAL
            </h1>
            
            <p className="max-w-[320px] text-sm leading-relaxed opacity-90 font-medium mt-2">
              Together, advancing healthcare through compassionate, innovative, and patient-centered excellence.
            </p>
            
            <button className="bg-[#0b2447] text-white px-8 py-3 text-sm font-semibold rounded-lg hover:bg-white hover:text-[#0b2447] transition-all duration-300 mt-2 shadow-lg">
              Explore more
            </button>

            {/* Floating Support Card */}
            <div className="mt-6 bg-white text-[#0b2447] p-3 rounded-2xl shadow-xl flex items-center gap-4 w-[280px] transform hover:-translate-y-1 transition-transform">
              <img src="https://images.unsplash.com/photo-1651008376811-b932ef55c1e5?auto=format&fit=crop&q=80&w=100" alt="Support" className="w-12 h-12 rounded-xl object-cover" />
              <div>
                <p className="text-[11px] font-bold leading-tight">Specialized neurological<br/>support line</p>
                <div className="flex gap-0.5 mt-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-[#0b2447] text-[#0b2447]" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Content (Quote Box) */}
          <div className="w-full md:w-4/12 flex justify-start md:justify-end mb-8 md:mb-32">
            <div className="max-w-[280px] text-white text-sm leading-relaxed opacity-95 text-left md:text-right">
              <p className="font-medium drop-shadow-md">"At our healthcare center, we are committed to delivering advanced medical care that places your health, comfort, and long-term well-being at the heart of everything we do."</p>
              <div className="flex items-center justify-start md:justify-end gap-2 mt-4 opacity-80">
                <div className="w-6 h-6 rounded-full bg-white/30 flex items-center justify-center">
                  <Star className="w-3 h-3 fill-white text-white" />
                </div>
                <p className="font-bold text-xs uppercase tracking-wider">Dr. Sarah Connor</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-20 px-8 md:px-16 lg:px-24 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 text-[#0b2447] border-b border-gray-100 bg-white relative z-20 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="text-xs text-gray-400 uppercase tracking-widest text-center md:text-right font-bold leading-relaxed">
            Medical professionals<br/>
            <span className="text-[#0b2447]">25 years of excellence</span>
          </div>
          <h2 className="text-7xl md:text-[5.5rem] font-bold text-[#0b2447] tracking-tighter">25+</h2>
        </div>
        
        <div className="w-px h-20 bg-gray-200 hidden md:block"></div>
        
        <div className="max-w-md text-center md:text-left">
          <p className="text-lg font-bold leading-relaxed mb-4 text-[#0b2447]">
            Trusted medical professionals united by one purpose — delivering compassionate, quality healthcare.
          </p>
          <button className="bg-[#0b2447] text-white px-6 py-2.5 text-xs font-bold rounded hover:bg-[#83a2b5] transition-colors">
            Explore more
          </button>
        </div>
      </section>

      <DepartmentsSection />
      <ServicesSection />
      <FeaturedDoctors />
      <TestimonialsSection />
      <FAQSection />
      <AppointmentCTA />
      <Footer />
    </main>
  );
}