import { Card, CardContent } from "@/components/ui/card";
import { FaLinkedin, FaTwitter } from "react-icons/fa"; // Updated import
import Link from "next/link";

const doctors = [
  {
    name: "Dr. Sarah Connor",
    specialty: "Chief Neurologist",
    image: "bg-gray-200", 
    experience: "15+ Years",
  },
  {
    name: "Dr. James Wilson",
    specialty: "Head of Cardiology",
    image: "bg-gray-300",
    experience: "20+ Years",
  },
  {
    name: "Dr. Emily Chen",
    specialty: "Senior Orthopedic",
    image: "bg-gray-200",
    experience: "12+ Years",
  }
];

export default function FeaturedDoctors() {
  return (
    <section className="w-full py-20 px-8 md:px-16 lg:px-24 bg-surfaceWhite">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <p className="text-sm text-heroBlue font-semibold uppercase tracking-wider mb-3">Our Medical Experts</p>
          <h2 className="text-3xl md:text-5xl font-bold text-deepNavy">Meet Our Top Doctors</h2>
        </div>
        <button className="text-deepNavy font-semibold border-b-2 border-deepNavy hover:text-heroBlue hover:border-heroBlue transition-colors pb-1">
          View All Doctors
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {doctors.map((doc, index) => (
          <Card key={index} className="border-none shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden rounded-2xl">
            <div className={`w-full h-72 ${doc.image} relative overflow-hidden`}>
              <div className="absolute inset-0 bg-deepNavy/0 group-hover:bg-deepNavy/20 transition-colors duration-300" />
            </div>
            <CardContent className="p-6 bg-white">
              <h3 className="text-xl font-bold text-deepNavy mb-1">{doc.name}</h3>
              <p className="text-medicalCyan font-medium text-sm mb-4">{doc.specialty}</p>
              
              <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-4">
                <span className="text-sm text-gray-500 font-medium">Exp: {doc.experience}</span>
                <div className="flex gap-3 text-gray-400">
                  {/* Updated Icons */}
                  <Link href="#" className="hover:text-heroBlue transition-colors"><FaLinkedin className="w-4 h-4" /></Link>
                  <Link href="#" className="hover:text-heroBlue transition-colors"><FaTwitter className="w-4 h-4" /></Link>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}