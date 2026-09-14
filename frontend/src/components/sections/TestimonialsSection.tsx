import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    review: "The neurology department here is exceptional. The doctors were incredibly patient and thorough with my diagnosis.",
    rating: 5,
  },
  {
    name: "Priya Singh",
    review: "I had a wonderful experience during my treatment. The staff was caring, and the facilities are truly world-class.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    review: "Very professional and clean environment. The appointment booking process was seamless, and I didn't have to wait long.",
    rating: 4,
  }
];

export default function TestimonialsSection() {
  return (
    <section className="w-full py-20 px-8 md:px-16 lg:px-24 bg-gray-50">
      <div className="text-center mb-16">
        <p className="text-sm text-heroBlue font-semibold uppercase tracking-wider mb-3">Patient Stories</p>
        <h2 className="text-3xl md:text-5xl font-bold text-deepNavy">What Our Patients Say</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="border-none shadow-sm hover:shadow-md transition-shadow bg-white rounded-2xl">
            <CardContent className="p-8">
              <div className="flex gap-1 mb-6 text-yellow-400">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed mb-6 italic">
                "{testimonial.review}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-medicalCyan/20 text-deepNavy rounded-full flex items-center justify-center font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-deepNavy text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-gray-500">Verified Patient</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}