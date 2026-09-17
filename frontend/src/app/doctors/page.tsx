import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Search, MapPin, Phone, Star, Filter, CalendarCheck, ShieldPlus } from "lucide-react";
import Link from "next/link";

const allDoctors = [
  {
    name: "Dr. Sarah Connor",
    specialty: "Chief Neurologist",
    experience: "15+ Years",
    availability: "Mon, Wed, Fri",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Dr. James Wilson",
    specialty: "Head of Cardiology",
    experience: "20+ Years",
    availability: "Tue, Thu, Sat",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1612222869049-d8ec83637a3c?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Dr. Emily Chen",
    specialty: "Senior Orthopedic",
    experience: "12+ Years",
    availability: "Mon - Fri",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1594824436998-d822cd013a5a?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Dr. Robert Banner",
    specialty: "General Medicine",
    experience: "18+ Years",
    availability: "Mon - Sat",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Dr. Lisa Cuddy",
    specialty: "Pediatrics",
    experience: "14+ Years",
    availability: "Tue, Wed, Fri",
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1651008376811-b932ef55c1e5?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Dr. Hannibal Lecter",
    specialty: "Psychiatry",
    experience: "25+ Years",
    availability: "Mon, Thu",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800"
  }
];

export default function DoctorsPage() {
  return (
    <main className="min-h-screen bg-[#f8fafc]">
      <Navbar />
      
      {/* Premium Header Banner - Deep Dark Glassmorphism Theme */}
      <section className="relative w-full pt-40 pb-32 md:pt-48 md:pb-40 px-6 md:px-16 lg:px-24 overflow-hidden bg-[#020813]">
        
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1920" 
            alt="Medical Experts" 
            className="w-full h-full object-cover object-center opacity-20 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020b1a]/95 via-[#0b2447]/80 to-[#020813] backdrop-blur-[2px]"></div>
        </div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>

        {/* Header Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] text-blue-300 mb-6 backdrop-blur-md shadow-sm">
            <ShieldPlus className="w-4 h-4" />
            Our Medical Experts
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 text-white drop-shadow-lg leading-tight">
            Find Your <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">Specialist Doctor</span>
          </h1>
          
          <p className="text-blue-50/80 text-base md:text-lg max-w-2xl leading-relaxed font-light">
            Browse our comprehensive directory of highly qualified specialists and primary care physicians dedicated to providing you with world-class healthcare.
          </p>
        </div>
      </section>

      {/* Main Content Layout with 3D Overlap Effect */}
      <div className="relative z-20 -mt-12 md:-mt-20 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto mb-24">
        
        {/* Floating Search & Filter Bar */}
        <div className="bg-white/90 backdrop-blur-xl border border-gray-100 p-4 md:p-6 rounded-3xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] flex flex-col md:flex-row justify-between items-center gap-4 mb-12">
          
          <div className="relative w-full md:w-[45%]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search doctors by name or specialty..." 
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-100/50 transition-all text-sm font-medium text-[#0b2447] placeholder-gray-400"
            />
          </div>
          
          <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4 flex-1 md:justify-end">
            <div className="relative w-full sm:w-48">
              <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <select className="w-full pl-10 pr-4 py-4 border border-gray-100 rounded-2xl focus:outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-100/50 bg-gray-50 text-sm font-medium text-[#0b2447] appearance-none cursor-pointer transition-all">
                <option>All Specialties</option>
                <option>Neurology</option>
                <option>Cardiology</option>
                <option>Orthopedics</option>
                <option>Pediatrics</option>
              </select>
            </div>
            <button className="bg-[#0b2447] hover:bg-blue-600 text-white px-8 py-4 rounded-2xl text-sm font-bold shadow-[0_10px_20px_-10px_rgba(11,36,71,0.5)] transition-colors w-full sm:w-auto">
              Search
            </button>
          </div>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allDoctors.map((doc, index) => (
            <Card key={index} className="group relative border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(37,99,235,0.12)] transition-all duration-500 rounded-[2rem] overflow-hidden bg-white cursor-pointer">
              
              {/* Doctor Image Container */}
              <div className="relative h-[320px] w-full overflow-hidden bg-gray-100">
                <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl text-[11px] font-bold text-[#0b2447] shadow-sm flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" /> {doc.rating}
                </div>
                
                <img 
                  src={doc.image} 
                  alt={doc.name} 
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b2447]/90 via-[#0b2447]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Content Details */}
              <CardContent className="p-6">
                <p className="text-teal-600 bg-teal-50 px-3 py-1 rounded-full inline-block text-xs font-bold uppercase tracking-wider mb-3">
                  {doc.specialty}
                </p>
                <h3 className="text-2xl font-extrabold text-[#0b2447] mb-4 group-hover:text-blue-600 transition-colors">
                  {doc.name}
                </h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm text-gray-500 font-medium">
                    <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 shrink-0">
                      <Star className="w-4 h-4" />
                    </div>
                    <span>Experience: {doc.experience}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-500 font-medium">
                    <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-500 shrink-0">
                      <CalendarCheck className="w-4 h-4" />
                    </div>
                    <span>Available: {doc.availability}</span>
                  </div>
                </div>

                {/* Animated Action Button */}
                <Link href="/contact" className="relative flex items-center justify-center w-full overflow-hidden bg-gray-50 hover:bg-blue-600 text-[#0b2447] hover:text-white py-3.5 rounded-xl font-bold transition-colors duration-300 border border-gray-100 group-hover:border-transparent">
                  <span className="relative z-10 flex items-center gap-2">
                    <Phone className="w-4 h-4" /> Book Appointment
                  </span>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}