import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import AccreditationsSection from "@/components/sections/AccreditationsSection";
import Link from "next/link";
import { ArrowLeft, Award } from "lucide-react";

export const metadata = {
  title: "Accreditations & Awards | National Hospital & Neuro Center",
  description: "Discover the national and international accreditations, awards, and certifications that make National Hospital a trusted healthcare provider.",
};

export default function AccreditationsPage() {
  return (
    <main className="min-h-screen bg-[#020813] overflow-x-hidden flex flex-col">
      {/* Navbar - Set to absolute so it overlays the dark background smoothly */}
      <div className="absolute top-0 w-full z-50">
        <Navbar />
      </div>

      {/* Premium Hero Section (Matches Contact Page Vibe) */}
      <section className="relative w-full pt-40 pb-20 md:pt-48 md:pb-24 px-4 sm:px-6 md:px-16 lg:px-24 overflow-hidden">
        
        {/* Cinematic Background Image & Seamless Gradient */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=100&w=2000&auto=format&fit=crop" 
            alt="Accreditations Hero Background" 
            className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity"
          />
          {/* The bottom of this gradient transitions perfectly into the #020813 background of the section below */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#020b1a]/95 via-[#0b2447]/80 to-[#020813]"></div>
        </div>

        {/* Ambient Glow Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-teal-500/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
          
          {/* Glassmorphism Breadcrumb */}
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-blue-300 hover:text-teal-300 transition-colors text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-8 bg-white/5 px-5 py-2.5 rounded-full border border-white/10 backdrop-blur-md shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          {/* Top Badge matching "24/7 PREMIUM SUPPORT" style */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/30 border border-blue-400/30 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-teal-400 mb-6 backdrop-blur-md shadow-sm">
            <Award className="w-4 h-4" />
            Global Standards
          </div>

          {/* Massive Page Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-[1.1] md:leading-[1] mb-6 drop-shadow-2xl">
            Our Accreditations <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">& Awards.</span>
          </h1>

          <p className="text-blue-50/80 text-base md:text-lg font-medium max-w-2xl leading-relaxed">
            National Hospital is recognized by top national and international healthcare boards for our unwavering commitment to patient safety, clinical excellence, and state-of-the-art infrastructure.
          </p>

        </div>
      </section>

      {/* Main Accreditations Component */}
      <div className="flex-grow flex flex-col justify-center relative z-20">
        {/* Ye component transparently render hoga aur upar wale hero me mix ho jayega */}
        <AccreditationsSection />
      </div>

      <Footer />
    </main>
  );
}