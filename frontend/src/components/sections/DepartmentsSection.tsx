import { Brain, Heart, Bone, Stethoscope, Baby, Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
    <section className="w-full py-20 px-8 md:px-16 lg:px-24 bg-gray-50">
      <div className="text-center mb-16">
        <p className="text-sm text-heroBlue font-semibold uppercase tracking-wider mb-3">Our Specialties</p>
        <h2 className="text-3xl md:text-5xl font-bold text-deepNavy">Centers of Excellence</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {departments.map((dept, index) => {
          const Icon = dept.icon;
          return (
            <Card key={index} className="border-none shadow-sm hover:shadow-lg transition-all duration-300 bg-white cursor-pointer group">
              <CardHeader>
                <div className="w-14 h-14 bg-medicalCyan text-deepNavy rounded-xl flex items-center justify-center mb-4 group-hover:bg-deepNavy group-hover:text-white transition-colors duration-300">
                  <Icon className="w-7 h-7" />
                </div>
                <CardTitle className="text-xl text-deepNavy">{dept.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {dept.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}