import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { FileText } from "lucide-react";

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <Navbar />
      
      <section className="relative w-full pt-40 pb-20 md:pt-48 md:pb-24 px-6 md:px-16 lg:px-24 bg-[#020813]">
        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] text-blue-300 mb-6 backdrop-blur-md">
            <FileText className="w-4 h-4" />
            Legal & Compliance
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 text-white">
            Terms of Service
          </h1>
          <p className="text-blue-50/60 text-sm md:text-base font-medium">Last Updated: September 18, 2026</p>
        </div>
      </section>

      <div className="relative z-20 -mt-10 px-6 md:px-16 lg:px-24 max-w-5xl mx-auto mb-24">
        <div className="bg-white rounded-[2rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-100 p-8 md:p-12 lg:p-16">
          <div className="prose prose-blue max-w-none text-gray-600">
            <h2 className="text-2xl font-bold text-[#0b2447] mb-4">1. Acceptance of Terms</h2>
            <p className="mb-6 leading-relaxed">
              By accessing and using the National Hospital & Neuro Center website and booking portal, you accept and agree to be bound by the terms and provision of this agreement.
            </p>

            <h2 className="text-2xl font-bold text-[#0b2447] mb-4">2. Medical Advice Disclaimer</h2>
            <p className="mb-6 leading-relaxed">
              The content provided on this website, including blogs, symptoms checklists, and health insights, is for informational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider.
            </p>

            <h2 className="text-2xl font-bold text-[#0b2447] mb-4">3. Appointment Bookings & Cancellations</h2>
            <p className="mb-6 leading-relaxed">
              Online appointments are subject to doctor availability. While we strive to maintain the exact schedule, emergency cases take priority and may cause delays. We request patients to cancel or reschedule at least 24 hours in advance.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}