import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User, ArrowRight, BookOpen, Search, Filter } from "lucide-react";
import Link from "next/link";

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
    <main className="min-h-screen bg-[#f8fafc]">
      <Navbar />
      
      {/* Premium Header Banner - Deep Dark Glassmorphism Theme */}
      <section className="relative w-full pt-40 pb-32 md:pt-48 md:pb-40 px-6 md:px-16 lg:px-24 overflow-hidden bg-[#020813]">
        
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1920" 
            alt="Medical Research Blog" 
            className="w-full h-full object-cover object-center opacity-20 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020b1a]/95 via-[#0b2447]/80 to-[#020813] backdrop-blur-[2px]"></div>
        </div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>

        {/* Header Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] text-blue-300 mb-6 backdrop-blur-md shadow-sm">
            <BookOpen className="w-4 h-4" />
            Health Insights
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 text-white drop-shadow-lg leading-tight">
            Medical Blog <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">& News Hub</span>
          </h1>
          
          <p className="text-blue-50/80 text-base md:text-lg max-w-2xl leading-relaxed font-light">
            Stay updated with the latest medical advancements, actionable health tips from our experts, and official news from National Hospital & Neuro Center.
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
              placeholder="Search articles, topics, or authors..." 
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-100/50 transition-all text-sm font-medium text-[#0b2447] placeholder-gray-400"
            />
          </div>
          
          <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4 flex-1 md:justify-end">
            <div className="relative w-full sm:w-48">
              <Filter className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <select className="w-full pl-10 pr-4 py-4 border border-gray-100 rounded-2xl focus:outline-none focus:border-blue-300 focus:ring-4 focus:ring-blue-100/50 bg-gray-50 text-sm font-medium text-[#0b2447] appearance-none cursor-pointer transition-all">
                <option>All Categories</option>
                <option>Neurology</option>
                <option>Cardiology</option>
                <option>Orthopedics</option>
                <option>General Health</option>
              </select>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index} className="group relative border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(37,99,235,0.12)] transition-all duration-500 rounded-[2rem] overflow-hidden bg-white flex flex-col transform hover:-translate-y-2 cursor-pointer">
              
              {/* Image Container */}
              <div className="w-full h-64 relative overflow-hidden bg-gray-100">
                <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-md text-[#0b2447] text-[10px] font-bold px-4 py-2 rounded-xl uppercase tracking-widest shadow-sm">
                  {post.category}
                </div>
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b2447]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              {/* Content Container */}
              <CardContent className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 font-bold tracking-wide">
                  <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-blue-500" /> {post.date}</span>
                  <span className="flex items-center gap-1.5"><User className="w-4 h-4 text-teal-500" /> {post.author}</span>
                </div>
                
                <h3 className="text-xl md:text-2xl font-extrabold text-[#0b2447] mb-4 leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-500 text-sm mb-8 flex-grow line-clamp-3 leading-relaxed font-medium">
                  {post.excerpt}
                </p>
                
                <Link href="#" className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 group-hover:text-[#0b2447] transition-colors mt-auto w-max">
                  Read Full Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Premium Pagination */}
        <div className="flex justify-center mt-16 gap-3">
          <button className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold flex items-center justify-center shadow-[0_10px_20px_-10px_rgba(37,99,235,0.5)]">1</button>
          <button className="w-12 h-12 rounded-2xl bg-white border border-gray-100 text-gray-600 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 font-bold flex items-center justify-center transition-all shadow-sm">2</button>
          <button className="w-12 h-12 rounded-2xl bg-white border border-gray-100 text-gray-600 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 font-bold flex items-center justify-center transition-all shadow-sm">3</button>
        </div>
      </div>

      <Footer />
    </main>
  );
}