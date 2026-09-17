import { FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import { ArrowRight, Award, Star } from "lucide-react";

const doctors = [
  {
    name: "Dr. Sarah Connor",
    specialty: "Chief Neurologist",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800", 
    experience: "15+ Years",
  },
  {
    name: "Dr. James Wilson",
    specialty: "Head of Cardiology",
    image: "https://images.unsplash.com/photo-1612222869049-d8ec83637a3c?auto=format&fit=crop&q=80&w=800",
    experience: "20+ Years",
  },
  {
    name: "Dr. Emily Chen",
    specialty: "Senior Orthopedic",
    image: "https://plus.unsplash.com/premium_photo-1658506671316-0b293df7c72b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    experience: "12+ Years",
  }
];

export default function FeaturedDoctors() {
  return (
    <section className="relative w-full py-24 px-6 md:px-16 lg:px-24 bg-[#f8fafc] overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-50/50 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/4"></div>

      {/* Header Section */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] text-blue-600 mb-6 shadow-sm">
            <Award className="w-4 h-4" />
            Our Medical Experts
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0b2447] tracking-tight leading-tight">
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Top Doctors</span>
          </h2>
        </div>
        <Link href="/doctors" className="flex items-center gap-2 text-blue-600 font-bold hover:text-[#0b2447] transition-colors group pb-2">
          View All Specialists <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Doctors Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {doctors.map((doc, index) => (
          <div 
            key={index} 
            className="bg-white rounded-[2rem] p-3 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(37,99,235,0.12)] transition-all duration-500 hover:-translate-y-2 group cursor-pointer border border-gray-50"
          >
            {/* Image Container */}
            <div className="relative h-[340px] rounded-[1.5rem] overflow-hidden bg-gray-100">
              
              {/* Floating Experience Badge */}
              <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl text-[11px] font-bold text-[#0b2447] shadow-sm flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" /> {doc.experience}
              </div>

              {/* Portrait Image with Zoom Effect */}
              <img 
                src={doc.image} 
                alt={doc.name}
                className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700 ease-in-out" 
              />
              
              {/* Gradient Overlay for Social Icons */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b2447]/80 via-[#0b2447]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Hover Social Actions (Slides up on hover) */}
              <div className="absolute bottom-6 left-0 w-full flex justify-center gap-4 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out z-20">
                <Link href="#" className="w-11 h-11 rounded-full bg-white text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white shadow-[0_10px_20px_rgba(0,0,0,0.2)] transition-colors hover:scale-110 duration-300">
                  <FaLinkedin className="w-5 h-5" />
                </Link>
                <Link href="#" className="w-11 h-11 rounded-full bg-white text-blue-400 flex items-center justify-center hover:bg-blue-400 hover:text-white shadow-[0_10px_20px_rgba(0,0,0,0.2)] transition-colors hover:scale-110 duration-300">
                  <FaTwitter className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold text-[#0b2447] mb-1.5 group-hover:text-blue-600 transition-colors duration-300">
                {doc.name}
              </h3>
              <p className="text-teal-600 font-semibold text-sm bg-teal-50 px-3 py-1 rounded-full inline-block">
                {doc.specialty}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}