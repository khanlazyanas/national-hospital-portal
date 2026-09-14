import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const blogPosts = [
  {
    title: "10 Warning Signs of Neurological Issues You Shouldn't Ignore",
    category: "Neurology",
    excerpt: "Understanding the early symptoms of brain and nervous system disorders can be life-saving. Learn what to watch out for.",
    author: "Dr. Sarah Connor",
    date: "Sep 12, 2026",
    image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Heart Health: Daily Habits for a Stronger Cardiovascular System",
    category: "Cardiology",
    excerpt: "Simple lifestyle changes and dietary adjustments that can significantly reduce your risk of heart disease.",
    author: "Dr. James Wilson",
    date: "Sep 08, 2026",
    image: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "The Importance of Post-Surgery Physiotherapy",
    category: "Orthopedics",
    excerpt: "Why completing your physical therapy sessions is just as important as the surgery itself for full recovery.",
    author: "Dr. Emily Chen",
    date: "Sep 05, 2026",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Managing Diabetes: A Comprehensive Guide for 2026",
    category: "General Health",
    excerpt: "Latest advancements in diabetes management, including new monitoring technologies and dietary guidelines.",
    author: "Dr. Robert Banner",
    date: "Aug 28, 2026",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Pediatric Care: Vaccination Schedules Explained",
    category: "Pediatrics",
    excerpt: "A complete timeline of essential vaccines for your child from birth to adolescence.",
    author: "Dr. Lisa Cuddy",
    date: "Aug 22, 2026",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Mental Health: Coping with Anxiety in Modern Times",
    category: "Psychiatry",
    excerpt: "Professional strategies and mindfulness techniques to help manage daily stress and clinical anxiety.",
    author: "Dr. Hannibal Lecter",
    date: "Aug 15, 2026",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800"
  }
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-surfaceWhite text-deepNavy">
      {/* Header Banner */}
      <section className="w-full bg-[#7595a8] pt-36 pb-20 px-8 md:px-16 lg:px-24 text-white relative">
        <Navbar />
        <div className="max-w-3xl mt-12 z-10 relative">
          <p className="text-medicalCyan font-semibold uppercase tracking-wider mb-2">Health Insights</p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 drop-shadow-sm">Medical Blog & News</h1>
          <p className="text-gray-100 text-base md:text-lg leading-relaxed font-medium">
            Stay updated with the latest medical advancements, health tips from our experts, and news from National Hospital & Neuro Center.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="w-full py-20 px-8 md:px-16 lg:px-24">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl font-bold text-deepNavy">Latest Articles</h2>
          <div className="hidden md:flex gap-4">
            <select className="px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7595a8] bg-white text-sm font-medium text-gray-700">
              <option>All Categories</option>
              <option>Neurology</option>
              <option>Cardiology</option>
              <option>Orthopedics</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="border-none shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden rounded-2xl bg-white flex flex-col transform hover:-translate-y-1">
              {/* Image Container with standard HTML img tag for external URLs without next.config.js setup */}
              <div className="w-full h-56 relative overflow-hidden bg-gray-100">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-[#0b2447] text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-sm border border-white">
                  {post.category}
                </div>
                <div className="absolute inset-0 bg-[#0b2447]/0 group-hover:bg-[#0b2447]/20 transition-colors duration-300" />
              </div>
              
              <CardContent className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 font-medium">
                  <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-[#7595a8]" /> {post.date}</span>
                  <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5 text-[#7595a8]" /> {post.author}</span>
                </div>
                <h3 className="text-xl font-bold text-[#0b2447] mb-3 leading-tight group-hover:text-[#7595a8] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm mb-6 flex-grow line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                <Link href="#" className="flex items-center gap-2 text-sm font-bold text-[#7595a8] hover:text-[#0b2447] transition-colors mt-auto">
                  Read Full Article <ArrowRight className="w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Pagination Dummy */}
        <div className="flex justify-center mt-16 gap-2">
          <button className="w-10 h-10 rounded-lg bg-[#0b2447] text-white font-bold flex items-center justify-center shadow-md">1</button>
          <button className="w-10 h-10 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-[#0b2447] hover:border-[#0b2447] font-semibold flex items-center justify-center transition-colors">2</button>
          <button className="w-10 h-10 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-[#0b2447] hover:border-[#0b2447] font-semibold flex items-center justify-center transition-colors">3</button>
        </div>
      </section>

      <Footer />
    </main>
  );
}