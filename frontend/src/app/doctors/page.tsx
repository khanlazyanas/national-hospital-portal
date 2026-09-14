import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Search, MapPin, Phone, Star } from "lucide-react";
import Link from "next/link";

const allDoctors = [
  {
    name: "Dr. Sarah Connor",
    specialty: "Chief Neurologist",
    experience: "15+ Years",
    availability: "Mon, Wed, Fri",
    rating: 4.9,
    image: "bg-gray-200"
  },
  {
    name: "Dr. James Wilson",
    specialty: "Head of Cardiology",
    experience: "20+ Years",
    availability: "Tue, Thu, Sat",
    rating: 4.8,
    image: "bg-gray-300"
  },
  {
    name: "Dr. Emily Chen",
    specialty: "Senior Orthopedic",
    experience: "12+ Years",
    availability: "Mon - Fri",
    rating: 4.9,
    image: "bg-gray-200"
  },
  {
    name: "Dr. Robert Banner",
    specialty: "General Medicine",
    experience: "18+ Years",
    availability: "Mon - Sat",
    rating: 4.7,
    image: "bg-gray-300"
  },
  {
    name: "Dr. Lisa Cuddy",
    specialty: "Pediatrics",
    experience: "14+ Years",
    availability: "Tue, Wed, Fri",
    rating: 5.0,
    image: "bg-gray-200"
  },
  {
    name: "Dr. Hannibal Lecter",
    specialty: "Psychiatry",
    experience: "25+ Years",
    availability: "Mon, Thu",
    rating: 4.9,
    image: "bg-gray-300"
  }
];

export default function DoctorsPage() {
  return (
    <main className="min-h-screen bg-surfaceWhite text-deepNavy">
      {/* Header Banner */}
      <section className="w-full bg-heroBlue pt-36 pb-20 px-8 md:px-16 lg:px-24 text-white relative">
        <Navbar />
        <div className="max-w-3xl mt-12 z-10 relative">
          <p className="text-medicalCyan font-semibold uppercase tracking-wider mb-2">Our Medical Experts</p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Find a Doctor</h1>
          <p className="text-gray-200 text-base md:text-lg leading-relaxed">
            Browse our comprehensive directory of highly qualified specialists and primary care physicians dedicated to your health.
          </p>
        </div>
      </section>

      {/* Directory Section */}
      <section className="w-full py-20 px-8 md:px-16 lg:px-24">
        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search doctors by name..." 
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-heroBlue"
            />
          </div>
          <div className="w-full md:w-auto flex gap-4">
            <select className="w-full md:w-auto px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-heroBlue bg-white font-medium">
              <option>All Specialties</option>
              <option>Neurology</option>
              <option>Cardiology</option>
              <option>Orthopedics</option>
            </select>
          </div>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allDoctors.map((doc, index) => (
            <Card key={index} className="border-none shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden rounded-2xl bg-white">
              <div className={`w-full h-64 ${doc.image} relative overflow-hidden`}>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-deepNavy text-xs font-bold px-2 py-1 rounded flex items-center gap-1 shadow-sm">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" /> {doc.rating}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-deepNavy mb-1 group-hover:text-heroBlue transition-colors">{doc.name}</h3>
                <p className="text-medicalCyan font-semibold text-sm mb-4">{doc.specialty}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <span>Experience: {doc.experience}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <Phone className="w-4 h-4 text-gray-400" />
                    <span>Available: {doc.availability}</span>
                  </div>
                </div>

                <Link href="/contact" className="block w-full text-center bg-gray-50 hover:bg-deepNavy hover:text-white text-deepNavy font-semibold py-3 rounded-lg transition-colors border border-gray-100 group-hover:border-deepNavy">
                  Book Appointment
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}