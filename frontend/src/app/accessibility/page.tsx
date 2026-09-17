import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { CheckCircle2 } from "lucide-react";

export default function AccessibilityPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <Navbar />
      
      <section className="relative w-full pt-40 pb-20 md:pt-48 md:pb-24 px-6 md:px-16 lg:px-24 bg-[#020813]">
        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] text-blue-300 mb-6 backdrop-blur-md">
            <CheckCircle2 className="w-4 h-4" />
            Inclusivity
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 text-white">
            Accessibility Statement
          </h1>
          <p className="text-blue-50/60 text-sm md:text-base font-medium">Committed to Digital & Physical Inclusion</p>
        </div>
      </section>

      <div className="relative z-20 -mt-10 px-6 md:px-16 lg:px-24 max-w-5xl mx-auto mb-24">
        <div className="bg-white rounded-[2rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-100 p-8 md:p-12 lg:p-16">
          <div className="prose prose-blue max-w-none text-gray-600">
            <h2 className="text-2xl font-bold text-[#0b2447] mb-4">Our Commitment</h2>
            <p className="mb-6 leading-relaxed">
              National Hospital & Neuro Center is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards (WCAG 2.1 AA) to our portal.
            </p>

            <h2 className="text-2xl font-bold text-[#0b2447] mb-4">Physical Facility Accessibility</h2>
            <p className="mb-6 leading-relaxed">
              Our hospital premises in Varanasi are fully wheelchair accessible, featuring ramp entries, specialized elevators, accessible restrooms, and designated parking spaces for differently-abled patients and visitors.
            </p>
            
            <h2 className="text-2xl font-bold text-[#0b2447] mb-4">Feedback</h2>
            <p className="mb-6 leading-relaxed">
              We welcome your feedback on the accessibility of our services. Please let us know if you encounter accessibility barriers by emailing us at accessibility@nationalhospital.com or calling our 24/7 helpline.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}