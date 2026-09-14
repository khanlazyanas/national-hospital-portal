import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-surfaceWhite text-deepNavy">
      {/* Header Banner */}
      <section className="w-full bg-heroBlue pt-36 pb-20 px-8 md:px-16 lg:px-24 text-white relative">
        <Navbar />
        <div className="max-w-3xl mt-12 z-10 relative">
          <p className="text-medicalCyan font-semibold uppercase tracking-wider mb-2">Get In Touch</p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Contact & Support</h1>
          <p className="text-gray-200 text-base md:text-lg leading-relaxed">
            We are here for you 24/7. Reach out for appointments, emergency support, or any medical inquiries.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="w-full py-20 px-8 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Details & Info */}
          <div>
            <h2 className="text-3xl font-bold mb-8">We're Always Here to Help You</h2>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-medicalCyan/20 text-deepNavy rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Emergency & Appointments</h3>
                  <p className="text-gray-500 mb-1">24/7 Helpline: +91 800 123 4567</p>
                  <p className="text-gray-500">Reception: +91 800 123 4568</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 bg-medicalCyan/20 text-deepNavy rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Email Us</h3>
                  <p className="text-gray-500 mb-1">General Inquiries: contact@nationalhospital.com</p>
                  <p className="text-gray-500">Careers: hr@nationalhospital.com</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 bg-medicalCyan/20 text-deepNavy rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Location</h3>
                  <p className="text-gray-500">Sigra Main Road, Varanasi<br/>Uttar Pradesh, India 221010</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 bg-medicalCyan/20 text-deepNavy rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">Operating Hours</h3>
                  <p className="text-gray-500 mb-1"><span className="font-semibold text-deepNavy">Emergency:</span> 24 Hours / 7 Days</p>
                  <p className="text-gray-500"><span className="font-semibold text-deepNavy">OPD Timings:</span> 9:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-heroBlue" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-heroBlue" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-heroBlue" placeholder="john@example.com" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Department (Optional)</label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-heroBlue bg-white">
                  <option>General Inquiry</option>
                  <option>Neurology</option>
                  <option>Cardiology</option>
                  <option>Orthopedics</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-heroBlue resize-none" placeholder="How can we help you?"></textarea>
              </div>

              <button type="button" className="w-full bg-deepNavy text-white font-semibold py-4 rounded-lg hover:bg-heroBlue transition-colors mt-2">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}