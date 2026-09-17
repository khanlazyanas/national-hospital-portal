import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { ShieldCheck } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <Navbar />
      
      {/* Minimal Header */}
      <section className="relative w-full pt-40 pb-20 md:pt-48 md:pb-24 px-6 md:px-16 lg:px-24 bg-[#020813]">
        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] text-blue-300 mb-6 backdrop-blur-md">
            <ShieldCheck className="w-4 h-4" />
            Legal & Compliance
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 text-white">
            Privacy Policy
          </h1>
          <p className="text-blue-50/60 text-sm md:text-base font-medium">Last Updated: September 18, 2026</p>
        </div>
      </section>

      {/* Policy Content */}
      <div className="relative z-20 -mt-10 px-6 md:px-16 lg:px-24 max-w-5xl mx-auto mb-24">
        <div className="bg-white rounded-[2rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-gray-100 p-8 md:p-12 lg:p-16">
          <div className="prose prose-blue max-w-none text-gray-600">
            <h2 className="text-2xl font-bold text-[#0b2447] mb-4">1. Information We Collect</h2>
            <p className="mb-6 leading-relaxed">
              At National Hospital & Neuro Center, we are committed to protecting your medical and personal information. We collect information that you provide directly to us, such as when you book an appointment, fill out a patient registration form, or communicate with our staff. This may include your name, contact details, medical history, and insurance information.
            </p>

            <h2 className="text-2xl font-bold text-[#0b2447] mb-4">2. How We Use Your Information</h2>
            <p className="mb-6 leading-relaxed">
              We use the information we collect to provide, maintain, and improve our medical services. This includes processing your medical records, communicating test results, managing billing and insurance claims, and sending appointment reminders via SMS or WhatsApp.
            </p>

            <h2 className="text-2xl font-bold text-[#0b2447] mb-4">3. Medical Data Security</h2>
            <p className="mb-6 leading-relaxed">
              We implement state-of-the-art security measures compliant with international healthcare data protection standards (such as HIPAA). Your digital health records are encrypted both in transit and at rest on our secure servers.
            </p>

            <h2 className="text-2xl font-bold text-[#0b2447] mb-4">4. Sharing of Information</h2>
            <p className="mb-6 leading-relaxed">
              We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners for statistical purposes only.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}