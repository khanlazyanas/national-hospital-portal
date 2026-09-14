import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { ShieldCheck, HeartPulse, Award, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-surfaceWhite text-deepNavy">
      {/* Header Banner */}
      <section className="w-full bg-heroBlue pt-36 pb-20 px-8 md:px-16 lg:px-24 text-white relative">
        <Navbar />
        <div className="max-w-3xl mt-12">
          <p className="text-medicalCyan font-semibold uppercase tracking-wider mb-2">About Our Hospital</p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Dedicated to Your Health & Complete Recovery</h1>
          <p className="text-gray-200 text-base md:text-lg leading-relaxed">
            National Hospital & Neuro Center brings together state-of-the-art medical technology, expert physicians, and compassionate care under one roof.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="w-full py-20 px-8 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pioneering Excellence in Healthcare Since 2001</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              For over two decades, we have been at the forefront of medical innovation, specializing in advanced neurological care, emergency medicine, and comprehensive multi-specialty treatments. Our commitment is rooted in patient-first values.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="border-l-4 border-heroBlue pl-4">
                <h3 className="text-3xl font-bold text-deepNavy">25+</h3>
                <p className="text-sm text-gray-500 mt-1">Years of Trust</p>
              </div>
              <div className="border-l-4 border-heroBlue pl-4">
                <h3 className="text-3xl font-bold text-deepNavy">200+</h3>
                <p className="text-sm text-gray-500 mt-1">Expert Doctors</p>
              </div>
            </div>
          </div>
          <div className="w-full h-96 bg-gray-200 rounded-3xl overflow-hidden shadow-lg relative">
            {/* Image Placeholder */}
            <div className="absolute inset-0 bg-gradient-to-tr from-deepNavy/20 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="w-full py-20 px-8 md:px-16 lg:px-24 bg-gray-50">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm text-heroBlue font-semibold uppercase tracking-wider mb-2">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl font-bold">Our Core Values</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <div className="w-12 h-12 bg-medicalCyan/20 text-deepNavy rounded-xl flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Patient Safety</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Rigorous safety standards and sterile environments to ensure absolute well-being.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <div className="w-12 h-12 bg-medicalCyan/20 text-deepNavy rounded-xl flex items-center justify-center mb-6">
              <HeartPulse className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Compassionate Care</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Treating every patient with empathy, respect, and personalized attention.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <div className="w-12 h-12 bg-medicalCyan/20 text-deepNavy rounded-xl flex items-center justify-center mb-6">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Medical Excellence</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Continuously upgrading our medical technology and clinical expertise.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <div className="w-12 h-12 bg-medicalCyan/20 text-deepNavy rounded-xl flex items-center justify-center mb-6">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3">Expert Team</h3>
            <p className="text-gray-500 text-sm leading-relaxed">World-class doctors and surgeons available 24/7 for advanced consultation.</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}