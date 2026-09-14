import { CalendarDays, PhoneCall } from "lucide-react";

export default function AppointmentCTA() {
  return (
    <section className="w-full py-20 px-8 md:px-16 lg:px-24 bg-surfaceWhite">
      <div className="bg-deepNavy rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between text-white relative overflow-hidden shadow-2xl">
        {/* Background Decorative Gradient */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-heroBlue opacity-20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-medicalCyan opacity-10 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>
        
        <div className="z-10 max-w-2xl mb-8 md:mb-0">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to take control of your health?
          </h2>
          <p className="text-gray-300 text-sm md:text-base max-w-lg mb-8 leading-relaxed">
            Book an appointment with our specialized doctors today. We offer comprehensive consultations and advanced medical care tailored to your specific needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex items-center justify-center gap-2 bg-white text-deepNavy px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
              <CalendarDays className="w-5 h-5" />
              Book Appointment
            </button>
            <button className="flex items-center justify-center gap-2 border border-gray-500 text-white px-8 py-3 rounded-md font-semibold hover:bg-white/10 transition-colors">
              <PhoneCall className="w-5 h-5" />
              Call +91 800 123 4567
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}