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
      <section className="relative w-full bg-[#8aa4b5] h-[850px] md:h-[750px] overflow-hidden">
        <Navbar />

        {/* Center Transparent Doctor Image (Loaded directly from your local public folder) */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[85%] md:h-[90%] z-10 pointer-events-none">
          <img 
            src="/doctor1.png" 
            alt="Lead Doctor" 
            className="h-full w-auto object-contain object-bottom drop-shadow-2xl"
          />
        </div>
        
        {/* Left Content */}
        <div className="absolute top-[50%] -translate-y-1/2 left-8 md:left-16 lg:left-24 z-20 flex flex-col items-start gap-5 w-full max-w-md">
          <div className="flex items-center gap-3 bg-white/20 px-4 py-2 rounded-full text-xs font-semibold backdrop-blur-md shadow-sm border border-white/20 text-white">
            <div className="flex -space-x-2">
              <img src="https://i.pravatar.cc/100?img=5" alt="Avatar" className="w-6 h-6 rounded-full object-cover border border-[#8aa4b5]" />
              <img src="https://i.pravatar.cc/100?img=9" alt="Avatar" className="w-6 h-6 rounded-full object-cover border border-[#8aa4b5]" />
            </div>
            <span className="tracking-wide">200+ Verified Doctors</span>
          </div>
          
          <h1 className="text-6xl md:text-[5.5rem] font-bold tracking-tight leading-none text-white drop-shadow-sm mt-1">
            MEDICAL
          </h1>
          
          <p className="max-w-[320px] text-sm leading-relaxed text-white opacity-95 font-medium mt-1">
            Together, advancing healthcare through compassionate, innovative, and patient-centered excellence.
          </p>
          
          <button className="bg-[#0b2447] text-white px-8 py-3.5 text-sm font-semibold rounded-lg hover:bg-white hover:text-[#0b2447] transition-all duration-300 mt-2 shadow-lg">
            Explore more
          </button>

          <div className="mt-4 bg-white text-[#0b2447] p-2.5 rounded-2xl shadow-xl flex items-center gap-4 w-[280px] transform hover:-translate-y-1 transition-transform">
            <img src="https://i.pravatar.cc/100?img=12" alt="Support" className="w-12 h-12 rounded-xl object-cover" />
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

        {/* Right Content */}
        <div className="hidden lg:block absolute top-[25%] right-16 lg:right-24 z-20 max-w-[280px] text-right text-white">
          <p className="font-medium text-sm leading-relaxed opacity-95 drop-shadow-md">
            "At our healthcare center, we are committed to delivering advanced medical care that places your health, comfort, and long-term well-being at the heart of everything we do."
          </p>
          <div className="flex items-center justify-end gap-2 mt-4 opacity-90">
            <div className="w-5 h-5 rounded-full bg-white/30 flex items-center justify-center">
              <Star className="w-2.5 h-2.5 fill-white text-white" />
            </div>
            <p className="font-bold text-[10px] uppercase tracking-widest text-[#d8e6ef]">DR. SARAH CONNOR</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-24 px-8 md:px-16 lg:px-24 flex flex-col md:flex-row items-center justify-center gap-12 text-[#0b2447] border-b border-gray-100 bg-white">
        <div className="flex items-center justify-end gap-6 md:w-1/2 md:pr-12 border-r-0 md:border-r border-gray-200">
          <div className="text-right">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Medical excellence</p>
            <p className="text-xs font-semibold text-[#0b2447]">25 years of excellence</p>
          </div>
          <h2 className="text-7xl md:text-[6.5rem] font-bold text-[#0b2447] tracking-tighter leading-none">
            25+
          </h2>
        </div>
        
        <div className="md:w-1/2 md:pl-4 max-w-md text-center md:text-left">
          <p className="text-xl font-bold leading-snug mb-5 text-[#0b2447]">
            Trusted medical professionals united by one purpose — delivering compassionate, quality healthcare.
          </p>
          <button className="bg-[#0b2447] text-white px-7 py-3 text-xs font-bold rounded-md hover:bg-[#8aa4b5] transition-colors shadow-md">
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