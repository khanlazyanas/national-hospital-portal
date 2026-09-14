import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight, HeartPulse } from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#071830] text-white pt-20 pb-8 px-8 md:px-16 lg:px-24 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#7595a8] opacity-5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      
      {/* Newsletter Section - Premium Touch */}
      <div className="flex flex-col md:flex-row items-center justify-between bg-white/5 border border-white/10 rounded-2xl p-8 mb-16 backdrop-blur-md">
        <div className="mb-6 md:mb-0">
          <h3 className="text-2xl font-bold mb-2 flex items-center gap-3">
            <HeartPulse className="w-6 h-6 text-[#7595a8]" />
            Subscribe to our Health Newsletter
          </h3>
          <p className="text-gray-400 text-sm">Get the latest medical news, health tips, and hospital updates directly.</p>
        </div>
        <div className="flex w-full md:w-auto gap-2">
          <input 
            type="email" 
            placeholder="Enter your email address" 
            className="w-full md:w-72 px-4 py-3 rounded-lg bg-[#0b2447] border border-gray-600 focus:outline-none focus:border-[#7595a8] text-sm text-white placeholder-gray-400"
          />
          <button className="bg-[#7595a8] hover:bg-white hover:text-[#0b2447] px-6 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center gap-2 shrink-0">
            Subscribe
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-gray-800 pb-12 relative z-10">
        
        {/* Brand Info */}
        <div className="col-span-1 pr-4">
          <Link href="/" className="flex items-center gap-3 mb-6 group">
            <div className="w-9 h-9 bg-white text-[#0b2447] flex items-center justify-center rounded-lg font-bold text-lg group-hover:bg-[#7595a8] group-hover:text-white transition-colors duration-300">
              +
            </div>
            <span className="text-2xl font-bold tracking-wide">
              National <span className="text-[#7595a8] font-light">Hospital</span>
            </span>
          </Link>
          <p className="text-sm text-gray-400 leading-relaxed mb-8">
            Advanced Neurological Care & Complete Healing. We combine cutting-edge technology with compassionate care to ensure your well-being.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#7595a8] hover:text-white transition-all duration-300"><FaFacebook className="w-4 h-4" /></Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#7595a8] hover:text-white transition-all duration-300"><FaTwitter className="w-4 h-4" /></Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#7595a8] hover:text-white transition-all duration-300"><FaInstagram className="w-4 h-4" /></Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#7595a8] hover:text-white transition-all duration-300"><FaLinkedin className="w-4 h-4" /></Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-lg mb-6 text-white tracking-wide">Explore</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><Link href="/" className="flex items-center gap-2 hover:text-[#7595a8] hover:translate-x-1 transition-all duration-300"><ArrowRight className="w-3 h-3" /> Home</Link></li>
            <li><Link href="/about" className="flex items-center gap-2 hover:text-[#7595a8] hover:translate-x-1 transition-all duration-300"><ArrowRight className="w-3 h-3" /> About Us</Link></li>
            <li><Link href="/doctors" className="flex items-center gap-2 hover:text-[#7595a8] hover:translate-x-1 transition-all duration-300"><ArrowRight className="w-3 h-3" /> Find a Doctor</Link></li>
            <li><Link href="/blog" className="flex items-center gap-2 hover:text-[#7595a8] hover:translate-x-1 transition-all duration-300"><ArrowRight className="w-3 h-3" /> Health Blog</Link></li>
            <li><Link href="/contact" className="flex items-center gap-2 hover:text-[#7595a8] hover:translate-x-1 transition-all duration-300"><ArrowRight className="w-3 h-3" /> Book Appointment</Link></li>
          </ul>
        </div>

        {/* Departments */}
        <div>
          <h4 className="font-semibold text-lg mb-6 text-white tracking-wide">Departments</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><Link href="/services" className="flex items-center gap-2 hover:text-[#7595a8] hover:translate-x-1 transition-all duration-300"><ArrowRight className="w-3 h-3" /> Neurology Center</Link></li>
            <li><Link href="/services" className="flex items-center gap-2 hover:text-[#7595a8] hover:translate-x-1 transition-all duration-300"><ArrowRight className="w-3 h-3" /> Cardiology</Link></li>
            <li><Link href="/services" className="flex items-center gap-2 hover:text-[#7595a8] hover:translate-x-1 transition-all duration-300"><ArrowRight className="w-3 h-3" /> Orthopedics</Link></li>
            <li><Link href="/services" className="flex items-center gap-2 hover:text-[#7595a8] hover:translate-x-1 transition-all duration-300"><ArrowRight className="w-3 h-3" /> General Surgery</Link></li>
            <li><Link href="/services" className="flex items-center gap-2 hover:text-[#7595a8] hover:translate-x-1 transition-all duration-300"><ArrowRight className="w-3 h-3" /> Emergency & Trauma</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold text-lg mb-6 text-white tracking-wide">Contact Us</h4>
          <ul className="space-y-5 text-sm text-gray-400">
            <li className="flex items-start gap-4 hover:text-white transition-colors cursor-pointer group">
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#7595a8] transition-colors">
                <MapPin className="w-4 h-4 text-gray-300 group-hover:text-white" />
              </div>
              <span className="leading-relaxed mt-1">Sigra Main Road,<br/>Varanasi, Uttar Pradesh, 221010</span>
            </li>
            <li className="flex items-center gap-4 hover:text-white transition-colors cursor-pointer group">
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#7595a8] transition-colors">
                <Phone className="w-4 h-4 text-gray-300 group-hover:text-white" />
              </div>
              <span className="mt-1">+91 800 123 4567</span>
            </li>
            <li className="flex items-center gap-4 hover:text-white transition-colors cursor-pointer group">
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-[#7595a8] transition-colors">
                <Mail className="w-4 h-4 text-gray-300 group-hover:text-white" />
              </div>
              <span className="mt-1">contact@nationalhospital.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-medium relative z-10">
        <p>&copy; {new Date().getFullYear()} National Hospital & Neuro Center. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}