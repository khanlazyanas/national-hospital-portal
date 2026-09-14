import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import DepartmentsSection from "@/components/sections/DepartmentsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import AppointmentCTA from "@/components/sections/AppointmentCTA";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-surfaceWhite text-deepNavy">
      {/* Header Banner */}
      <section className="w-full bg-heroBlue pt-36 pb-20 px-8 md:px-16 lg:px-24 text-white relative">
        <Navbar />
        <div className="max-w-3xl mt-12 z-10 relative">
          <p className="text-medicalCyan font-semibold uppercase tracking-wider mb-2">What We Offer</p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Comprehensive Medical Services</h1>
          <p className="text-gray-200 text-base md:text-lg leading-relaxed">
            From advanced life-saving surgeries to routine health check-ups, explore our complete range of specialized medical treatments and departments.
          </p>
        </div>
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
      </section>

      {/* Main Content using our pre-built sections */}
      <div className="pt-12">
        <DepartmentsSection />
      </div>
      
      <div className="bg-gray-50 border-t border-gray-200">
        <ServicesSection />
      </div>

      <AppointmentCTA />
      <Footer />
    </main>
  );
}