import { Star, Quote, MessageSquareHeart, CheckCircle2 } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Neurology Patient",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    review: "The neurology department here is exceptional. The doctors were incredibly patient and thorough with my diagnosis. Truly world-class care.",
    rating: 5,
  },
  {
    name: "Priya Singh",
    role: "Cardiology Patient",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
    review: "I had a wonderful experience during my treatment. The staff was caring, and the facilities are modern, clean, and highly comforting.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    role: "Orthopedics Patient",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
    review: "Very professional environment. The appointment booking process was seamless, and the post-surgery care was beyond my expectations.",
    rating: 5,
  }
];

export default function TestimonialsSection() {
  return (
    <section className="relative w-full py-24 px-6 md:px-16 lg:px-24 bg-white overflow-hidden">
      
      {/* Subtle Abstract Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3 mix-blend-multiply"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/4 mix-blend-multiply"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] text-blue-600 mb-6 shadow-sm">
            <MessageSquareHeart className="w-4 h-4" />
            Patient Stories
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0b2447] tracking-tighter leading-tight mb-6 drop-shadow-sm">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Patients Say</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg font-medium leading-relaxed">
            Real stories from our patients who have experienced our world-class medical care and compassionate healing environment.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="group relative bg-white border border-gray-100 rounded-[2.5rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_-15px_rgba(37,99,235,0.2)] transition-all duration-[600ms] ease-[cubic-bezier(0.19,1,0.22,1)] hover:-translate-y-2 flex flex-col justify-between cursor-pointer overflow-hidden"
            >
              {/* Large Background Quote Icon - Animates on Hover */}
              <Quote className="absolute top-8 right-8 w-24 h-24 text-blue-50 opacity-60 group-hover:text-blue-100 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)] -z-10" />
              
              <div className="relative z-10">
                {/* Rating Stars */}
                <div className="flex gap-1 mb-8">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 drop-shadow-sm" />
                  ))}
                </div>
                
                {/* Review Text */}
                <p className="text-gray-600 leading-relaxed mb-10 italic text-base md:text-lg font-medium group-hover:text-gray-700 transition-colors">
                  "{testimonial.review}"
                </p>
              </div>
              
              {/* Patient Profile */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100 relative z-10">
                <div className="relative">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[600ms] ease-[cubic-bezier(0.19,1,0.22,1)]"
                    />
                  </div>
                  {/* Verified Badge */}
                  <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-500 fill-green-100" />
                  </div>
                </div>
                
                <div>
                  <h4 className="font-extrabold text-[#0b2447] text-base group-hover:text-blue-600 transition-colors">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs font-bold text-teal-600 uppercase tracking-wider mt-1 bg-teal-50 px-2 py-0.5 rounded-md inline-block border border-teal-100/50">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}