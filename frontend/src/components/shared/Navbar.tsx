import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight, HeartPulse } from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#020b1a] text-white pt-24 pb-8 px-6 md:px-16 lg:px-24 relative overflow-hidden">
      
      {/* Background Advanced Decorative Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-600/5 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>
      
      {/* Newsletter Section - Ultra Premium Glassmorphism */}
      <div className="relative p-[1px] rounded-3xl bg-gradient-to-r from-blue-500/30 via-teal-400/30 to-blue-500/30 mb-20 shadow-[0_0_40px_-10px_rgba(37,99,235,0.15)] group hover:shadow-[0_0_50px_-10px_rgba(37,99,235,0.25)] transition-all duration-700">
        <div className="flex flex-col md:flex-row items-center justify-between bg-[#020b1a]/80 backdrop-blur-2xl rounded-[23px] p-8 md:p-12 overflow-hidden relative">
          
          {/* Subtle inner glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

          <div className="mb-8 md:mb-0 relative z-10 w-full md:w-1/2">
            <h3 className="text-3xl md:text-4xl font-extrabold mb-3 flex items-center gap-3 tracking-tight">
              <div className="p-2 rounded-xl bg-blue-500/10 border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                <HeartPulse className="w-6 h-6 text-blue-400 animate-pulse" />
              </div>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">Stay Informed.</span>
            </h3>
            <p className="text-blue-100/60 text-sm md:text-base font-light">Get the latest neurological breakthroughs, health tips, and exclusive hospital updates.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row w-full md:w-auto gap-3 relative z-10">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="w-full sm:w-72 lg:w-80 px-5 py-4 rounded-xl bg-[#071830] border border-blue-900/50 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm text-white placeholder-gray-500 transition-all shadow-inner"
            />
            <button className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-[0_0_20px_-5px_rgba(37,99,235,0.5)] hover:shadow-[0_0_25px_-5px_rgba(37,99,235,0.7)] hover:scale-[1.02] shrink-0 group/btn">
              <span className="relative z-10 flex items-center gap-2">Subscribe <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" /></span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 relative z-10">
        
        {/* Brand Info */}
        <div className="col-span-1 md:pr-8">
          <Link href="/" className="flex items-center gap-3 mb-6 group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center rounded-xl font-bold text-xl shadow-[0_0_20px_rgba(59,130,246,0.4)] group-hover:scale-105 transition-transform duration-300 border border-blue-400/30">
              +
            </div>
            <span className="text-2xl font-bold tracking-wide text-white">
              National <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300 font-light">Hospital</span>
            </span>
          </Link>
          <p className="text-sm text-blue-50/60 leading-relaxed mb-8 font-light">
            Advanced Neurological Care & Complete Healing. We combine cutting-edge medical technology with compassionate care to ensure your long-term well-being.
          </p>
          <div className="flex gap-3">
            <Link href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white hover:border-blue-500 hover:shadow-[0_0_15px_rgba(37,99,235,0.5)] transition-all duration-300"><FaFacebook className="w-4 h-4" /></Link>
            <Link href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-blue-400 hover:text-white hover:border-blue-300 hover:shadow-[0_0_15px_rgba(96,165,250,0.5)] transition-all duration-300"><FaTwitter className="w-4 h-4" /></Link>
            <Link href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-pink-600 hover:text-white hover:border-pink-500 hover:shadow-[0_0_15px_rgba(219,39,119,0.5)] transition-all duration-300"><FaInstagram className="w-4 h-4" /></Link>
            <Link href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-blue-700 hover:text-white hover:border-blue-600 hover:shadow-[0_0_15px_rgba(29,78,216,0.5)] transition-all duration-300"><FaLinkedin className="w-4 h-4" /></Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-lg mb-6 text-white tracking-wide flex items-center gap-2">
            <span className="w-1.5 h-6 bg-blue-500 rounded-full"></span> Explore
          </h4>
          <ul className="space-y-4 text-sm text-blue-50/70 font-light">
            <li><Link href="/" className="flex items-center gap-3 hover:text-blue-400 hover:translate-x-2 transition-all duration-300 group"><ArrowRight className="w-3 h-3 text-blue-500/50 group-hover:text-blue-400 transition-colors" /> Home</Link></li>
            <li><Link href="/about" className="flex items-center gap-3 hover:text-blue-400 hover:translate-x-2 transition-all duration-300 group"><ArrowRight className="w-3 h-3 text-blue-500/50 group-hover:text-blue-400 transition-colors" /> About Us</Link></li>
            <li><Link href="/doctors" className="flex items-center gap-3 hover:text-blue-400 hover:translate-x-2 transition-all duration-300 group"><ArrowRight className="w-3 h-3 text-blue-500/50 group-hover:text-blue-400 transition-colors" /> Find a Doctor</Link></li>
            <li><Link href="/blog" className="flex items-center gap-3 hover:text-blue-400 hover:translate-x-2 transition-all duration-300 group"><ArrowRight className="w-3 h-3 text-blue-500/50 group-hover:text-blue-400 transition-colors" /> Health Blog</Link></li>
            <li><Link href="/contact" className="flex items-center gap-3 hover:text-blue-400 hover:translate-x-2 transition-all duration-300 group"><ArrowRight className="w-3 h-3 text-blue-500/50 group-hover:text-blue-400 transition-colors" /> Book Appointment</Link></li>
          </ul>
        </div>

        {/* Departments */}
        <div>
          <h4 className="font-bold text-lg mb-6 text-white tracking-wide flex items-center gap-2">
            <span className="w-1.5 h-6 bg-teal-500 rounded-full"></span> Departments
          </h4>
          <ul className="space-y-4 text-sm text-blue-50/70 font-light">
            <li><Link href="/services" className="flex items-center gap-3 hover:text-teal-400 hover:translate-x-2 transition-all duration-300 group"><ArrowRight className="w-3 h-3 text-teal-500/50 group-hover:text-teal-400 transition-colors" /> Neurology Center</Link></li>
            <li><Link href="/services" className="flex items-center gap-3 hover:text-teal-400 hover:translate-x-2 transition-all duration-300 group"><ArrowRight className="w-3 h-3 text-teal-500/50 group-hover:text-teal-400 transition-colors" /> Cardiology</Link></li>
            <li><Link href="/services" className="flex items-center gap-3 hover:text-teal-400 hover:translate-x-2 transition-all duration-300 group"><ArrowRight className="w-3 h-3 text-teal-500/50 group-hover:text-teal-400 transition-colors" /> Orthopedics</Link></li>
            <li><Link href="/services" className="flex items-center gap-3 hover:text-teal-400 hover:translate-x-2 transition-all duration-300 group"><ArrowRight className="w-3 h-3 text-teal-500/50 group-hover:text-teal-400 transition-colors" /> General Surgery</Link></li>
            <li><Link href="/services" className="flex items-center gap-3 hover:text-teal-400 hover:translate-x-2 transition-all duration-300 group"><ArrowRight className="w-3 h-3 text-teal-500/50 group-hover:text-teal-400 transition-colors" /> Emergency & Trauma</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-bold text-lg mb-6 text-white tracking-wide flex items-center gap-2">
            <span className="w-1.5 h-6 bg-blue-500 rounded-full"></span> Contact Us
          </h4>
          <ul className="space-y-6 text-sm text-blue-50/70 font-light">
            <li className="flex items-start gap-4 hover:text-white transition-colors cursor-pointer group">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:border-blue-500 group-hover:shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all duration-300">
                <MapPin className="w-4 h-4 text-blue-400 group-hover:text-white" />
              </div>
              <span className="leading-relaxed mt-0.5">Sigra Main Road,<br/>Varanasi, Uttar Pradesh, 221010</span>
            </li>
            <li className="flex items-center gap-4 hover:text-white transition-colors cursor-pointer group">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:border-blue-500 group-hover:shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all duration-300">
                <Phone className="w-4 h-4 text-blue-400 group-hover:text-white" />
              </div>
              <span className="font-medium tracking-wide text-blue-100 group-hover:text-white">+91 800 123 4567</span>
            </li>
            <li className="flex items-center gap-4 hover:text-white transition-colors cursor-pointer group">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:border-blue-500 group-hover:shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all duration-300">
                <Mail className="w-4 h-4 text-blue-400 group-hover:text-white" />
              </div>
              <span className="font-medium tracking-wide">contact@nationalhospital.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent relative z-10 mb-8"></div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center text-xs text-blue-50/50 font-light relative z-10">
        <p>&copy; {new Date().getFullYear()} National Hospital & Neuro Center. All rights reserved.</p>
        <div className="flex gap-8 mt-4 md:mt-0">
          <Link href="/contact" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
          <Link href="/contact" className="hover:text-blue-400 transition-colors">Terms of Service</Link>
          <Link href="/contact" className="hover:text-blue-400 transition-colors">Accessibility</Link>
        </div>
      </div>
    </footer>
  );
}