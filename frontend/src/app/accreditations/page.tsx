import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import AccreditationsSection from "@/components/sections/AccreditationsSection";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

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

      {/* Mini Page Hero / Breadcrumb Section */}
      <section className="relative w-full pt-40 pb-10 px-4 sm:px-6 md:px-16 lg:px-24 z-10">
        <div className="max-w-7xl mx-auto">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-blue-400 hover:text-teal-400 transition-colors text-xs font-bold uppercase tracking-widest mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </section>

      {/* Main Accreditations Component */}
      <div className="flex-grow flex flex-col justify-center">
        {/* Hum yahan wahi section reuse kar rahe hain jo home page par lagaya tha */}
        <AccreditationsSection />
      </div>

      <Footer />
    </main>
  );
}