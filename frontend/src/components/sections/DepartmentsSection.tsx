import { Brain, Heart, Bone, Stethoscope, Baby, Eye, ArrowRight, ShieldPlus } from "lucide-react";
import Link from "next/link";

const departments = [
  { name: "Neurology", icon: Brain, description: "Advanced care for brain and nervous system disorders with state-of-the-art technology." },
  { name: "Cardiology", icon: Heart, description: "Comprehensive heart care, diagnostics, and advanced cardiovascular treatments." },
  { name: "Orthopedics", icon: Bone, description: "Expert surgical and non-surgical treatments for bone, joint, and muscle conditions." },
  { name: "Pediatrics", icon: Baby, description: "Compassionate, specialized healthcare for infants, children, and adolescents." },
  { name: "Ophthalmology", icon: Eye, description: "Advanced vision correction, eye surgeries, and complete optical care services." },
  { name: "General Medicine", icon: Stethoscope, description: "Primary care, preventive health screenings, and comprehensive health management." },
];

export default function DepartmentsSection() {
  return (
    <section className="relative w-full py-24 px-6 md:px-16 lg:px-24 bg-[#f8fafc] overflow-hidden">
      
      {/* Subtle Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200/50 to-transparent"></div>
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      {/* Section Header */}
      <div className="relative z-10 max-w-7xl mx-auto text-center mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] text-blue-600 mb-6 shadow-sm">
          <ShieldPlus className="w-4 h-4" />
          Our Specialties
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-[#0b2447] tracking-tighter mb-6 drop-shadow-sm">
          Centers of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Excellence</span>
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-medium">
          We bring together world-class medical professionals, cutting-edge technology, and compassionate care to provide unmatched treatments across all major specialties.
        </p>
      </div>
      
      {/* Departments Grid */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {departments.map((dept, index) => {
          const Icon = dept.icon;
          return (
            <Link 
              href="/services"
              key={index} 
              className="group relative bg-white rounded-[2rem] p-8 border border-gray-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.15)] transition-all duration-[600ms] ease-[cubic-bezier(0.19,1,0.22,1)] hover:-translate-y-2 cursor-pointer overflow-hidden block outline-none"
            >
              {/* Hover Gradient Overlay Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                {/* Icon Container with Glow Transition */}
                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-gradient-to-br from-blue-600 to-blue-400 transition-all duration-500 shadow-sm group-hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                  <Icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-500" />
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-extrabold text-[#0b2447] mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {dept.name}
                </h3>
                
                <p className="text-gray-500 text-sm leading-relaxed mb-8 group-hover:text-gray-700 transition-colors flex-grow font-medium">
                  {dept.description}
                </p>
                
                {/* Animated Action Link */}
                <div className="flex items-center gap-2 text-sm font-bold text-blue-600 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] mt-auto">
                  Explore Department <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}