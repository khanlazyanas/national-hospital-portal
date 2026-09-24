import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight, BrainCircuit, ArrowUpRight } from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full text-white pt-24 pb-8 px-6 md:px-16 lg:px-24 relative overflow-hidden bg-[#020813]">
      
      {/* ================= TRUE PREMIUM BACKGROUND EFFECTS ================= */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1920" 
          alt="Clinic Background" 
          className="w-full h-full object-cover object-center opacity-[0.15] mix-blend-luminosity"
        />
        {/* Multi-layered gradient for ultimate depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020813] via-[#0b2447]/90 to-[#020b1a] backdrop-blur-[3px]"></div>
      </div>

      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-500/10 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4 pointer-events-none"></div>
      {/* ================================================================================== */}
      
      {/* Newsletter Section - Ultra Premium Glassmorphism */}
      <div className="relative p-[1px] rounded-[2.5rem] bg-gradient-to-r from-blue-500/30 via-teal-400/30 to-blue-500/30 mb-20 shadow-[0_0_50px_-10px_rgba(37,99,235,0.15)] group hover:shadow-[0_0_60px_-10px_rgba(37,99,235,0.25)] transition-all duration-700 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between bg-white/[0.03] backdrop-blur-2xl border border-white/5 rounded-[2.4rem] p-8 md:p-12 overflow-hidden relative">
          
          {/* Subtle inner animated glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

          <div className="mb-8 md:mb-0 relative z-10 w-full md:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-teal-300 mb-4 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></span>
              Join the Community
            </div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 flex items-center gap-3 tracking-tight text-white drop-shadow-md">
              Stay Informed.
            </h3>
            <p className="text-blue-100/70 text-sm md:text-base font-light leading-relaxed max-w-md">
              Get the latest neurological breakthroughs, mental health tips, and priority clinic updates directly from Dr. Jilani.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row w-full md:w-auto gap-4 relative z-10">
            <div className="relative w-full sm:w-72 lg:w-80 group/input">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within/input:text-blue-400 transition-colors" />
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full pl-12 pr-5 py-4.5 rounded-2xl bg-black/30 border border-white/10 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 text-sm text-white placeholder-gray-500 transition-all shadow-inner backdrop-blur-md"
              />
            </div>
            <button className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-teal-500 px-8 py-4.5 rounded-2xl font-bold transition-all duration-300 shadow-[0_10px_20px_-5px_rgba(37,99,235,0.5)] hover:shadow-[0_15px_30px_-5px_rgba(37,99,235,0.6)] hover:-translate-y-0.5 shrink-0 group/btn border border-white/10 hover:border-white/20">
              <span className="relative z-10 flex items-center gap-2">Subscribe <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" /></span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16 relative z-10">
        
        {/* Brand Info (Takes 4 columns on large screens) */}
        <div className="col-span-1 md:col-span-2 lg:col-span-4 lg:pr-8">
          <Link href="/" className="flex items-center gap-3 mb-6 group cursor-pointer inline-flex">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center rounded-2xl font-bold text-2xl shadow-[0_0_20px_rgba(59,130,246,0.4)] group-hover:scale-105 transition-transform duration-300 border border-white/10">
              <BrainCircuit className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-wide text-white leading-none drop-shadow-sm">
                National<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300 font-light">Hospital</span>
              </span>
              <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-teal-400 mt-1">Neuro Center</span>
            </div>
          </Link>
          <p className="text-sm text-blue-50/70 leading-relaxed mb-8 font-light max-w-sm">
            Exclusively focused on advanced neurological and psychiatric care under the expert leadership of Dr. AQ Jilani. Redefining medical excellence in Lucknow.
          </p>
          <div className="flex gap-4">
            {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map((Icon, idx) => (
              <Link key={idx} href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white hover:border-blue-400 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:-translate-y-1 backdrop-blur-sm transition-all duration-300">
                <Icon className="w-4 h-4" />
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Links (Takes 2 columns) */}
        <div className="lg:col-span-2">
          <h4 className="font-bold text-lg mb-6 text-white tracking-wide flex items-center gap-2 drop-shadow-sm">
            <span className="w-1.5 h-6 bg-blue-500 rounded-full"></span> Explore
          </h4>
          <ul className="space-y-4 text-sm text-blue-50/70 font-light">
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about" },
              { name: "Dr. AQ Jilani", path: "/doctors" },
              { name: "Health Blog", path: "/blog" },
              { name: "Book Appointment", path: "/appointment" }
            ].map((link, idx) => (
              <li key={idx}>
                <Link href={link.path} className="flex items-center gap-3 hover:text-white hover:translate-x-2 transition-all duration-300 group">
                  <ArrowRight className="w-3 h-3 text-blue-500/50 group-hover:text-blue-400 transition-colors" /> {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Departments (Takes 3 columns) */}
        <div className="lg:col-span-3">
          <h4 className="font-bold text-lg mb-6 text-white tracking-wide flex items-center gap-2 drop-shadow-sm">
            <span className="w-1.5 h-6 bg-teal-500 rounded-full"></span> Services
          </h4>
          <ul className="space-y-4 text-sm text-blue-50/70 font-light">
            {[
              "Advanced Neurology", "Psychiatry & Therapy", "Neuro-Diagnostics", "Tele-Consultation", "Neuro Emergency"
            ].map((service, idx) => (
              <li key={idx}>
                <Link href="/services" className="flex items-center justify-between hover:text-white hover:translate-x-2 transition-all duration-300 group border-b border-white/5 pb-2">
                  <span className="flex items-center gap-3"><ArrowRight className="w-3 h-3 text-teal-500/50 group-hover:text-teal-400 transition-colors" /> {service}</span>
                  <ArrowUpRight className="w-3 h-3 text-white/20 group-hover:text-teal-400 opacity-0 group-hover:opacity-100 transition-all" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info (Takes 3 columns) */}
        <div className="lg:col-span-3">
          <h4 className="font-bold text-lg mb-6 text-white tracking-wide flex items-center gap-2 drop-shadow-sm">
            <span className="w-1.5 h-6 bg-blue-500 rounded-full"></span> Contact Us
          </h4>
          <ul className="space-y-6 text-sm text-blue-50/70 font-light">
            <li className="flex items-start gap-4 hover:text-white transition-colors cursor-pointer group">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:border-blue-400 group-hover:shadow-[0_0_15px_rgba(37,99,235,0.4)] backdrop-blur-sm transition-all duration-300">
                <MapPin className="w-4 h-4 text-blue-400 group-hover:text-white" />
              </div>
              <span className="leading-relaxed mt-0.5">Gomti Nagar Main Road,<br/>Lucknow, UP, 226010</span>
            </li>
            <li className="flex items-center gap-4 hover:text-white transition-colors cursor-pointer group">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:border-blue-400 group-hover:shadow-[0_0_15px_rgba(37,99,235,0.4)] backdrop-blur-sm transition-all duration-300">
                <Phone className="w-4 h-4 text-blue-400 group-hover:text-white" />
              </div>
              <span className="font-medium tracking-wide text-blue-100 group-hover:text-white text-base">+91 800 123 4567</span>
            </li>
            <li className="flex items-center gap-4 hover:text-white transition-colors cursor-pointer group">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:border-blue-400 group-hover:shadow-[0_0_15px_rgba(37,99,235,0.4)] backdrop-blur-sm transition-all duration-300">
                <Mail className="w-4 h-4 text-blue-400 group-hover:text-white" />
              </div>
              <span className="font-medium tracking-wide">dr.jilani@nationalhospital.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent relative z-10 mb-8"></div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center text-xs text-blue-50/50 font-light relative z-10 pb-4">
        <p>&copy; {new Date().getFullYear()} National Hospital & Neuro Center. All rights reserved.</p>
        <div className="flex flex-wrap justify-center gap-6 mt-6 md:mt-0">
          <Link href="/privacy" className="hover:text-white transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-blue-400 hover:after:w-full after:transition-all">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-blue-400 hover:after:w-full after:transition-all">Terms of Service</Link>
          <Link href="/accessibility" className="hover:text-white transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-blue-400 hover:after:w-full after:transition-all">Accessibility</Link>
        </div>
      </div>
    </footer>
  );
}