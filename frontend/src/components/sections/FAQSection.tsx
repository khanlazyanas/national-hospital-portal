import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, MessageSquarePlus, ArrowRight, PhoneCall } from "lucide-react";
import Link from "next/link";

const faqs = [
  {
    question: "How do I book an appointment?",
    answer: "You can book an appointment through our website by clicking the 'Book Appointment' button, or you can call our 24/7 helpline at +91 800 123 4567. We also offer instant booking via our WhatsApp support line."
  },
  {
    question: "Do you accept health insurance?",
    answer: "Yes, we accept most major health insurance plans including corporate policies. Please bring your insurance card, a valid ID, and previous medical records during your visit for seamless verification."
  },
  {
    question: "What are the visiting hours for admitted patients?",
    answer: "General visiting hours are from 10:00 AM to 1:00 PM and 5:00 PM to 8:00 PM. For patient safety, ICU visiting hours are strictly limited to immediate family members for 15 minutes per session."
  },
  {
    question: "Is emergency care available 24/7?",
    answer: "Absolutely. Our specialized Emergency and Trauma Center is fully equipped with advanced life-support systems and operates 24 hours a day, 7 days a week, with senior specialists on standby."
  }
];

export default function FAQSection() {
  return (
    <section className="relative w-full py-24 md:py-32 px-4 sm:px-6 md:px-16 lg:px-24 bg-[#fafafa] overflow-hidden">
      
      {/* Ultra-Premium Subtle Dot Matrix Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-60 z-0"></div>
      
      {/* Premium Decorative Ambient Glows */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 -translate-x-1/3 mix-blend-multiply z-0"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[100px] pointer-events-none translate-y-1/3 translate-x-1/3 mix-blend-multiply z-0"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto">
        
        {/* Header Section - Massive Editorial Typography */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-8 shadow-sm">
            <HelpCircle className="w-4 h-4" />
            Help & Support
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#0b2447] tracking-tighter leading-[1] md:leading-[0.9] mb-8 drop-shadow-sm">
            Frequently Asked <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 pr-2">Questions.</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg md:text-xl font-medium leading-relaxed">
            Find quick, precise answers to common questions about our hospital services, admission procedures, and patient care guidelines.
          </p>
        </div>
        
        {/* Accordion Section - Floating Cards */}
        {/* @ts-ignore */}
        <Accordion type="single" collapsible={"true" as any} className="w-full space-y-4 md:space-y-6">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`} 
              className="group bg-white border border-slate-200/80 rounded-[1.5rem] md:rounded-[2rem] px-6 md:px-10 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_40px_-10px_rgba(37,99,235,0.08)] data-[state=open]:border-teal-500/30 data-[state=open]:bg-gradient-to-br data-[state=open]:from-white data-[state=open]:to-teal-50/30 data-[state=open]:shadow-[0_25px_50px_-15px_rgba(20,184,166,0.15)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] overflow-hidden"
            >
              <AccordionTrigger className="text-left text-xl md:text-2xl font-black text-[#0f172a] tracking-tight group-data-[state=open]:text-teal-600 hover:text-blue-600 hover:no-underline transition-colors duration-300 py-6 md:py-8 outline-none">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-500 leading-relaxed text-base md:text-lg pb-8 font-medium max-w-3xl">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Premium Mini CTA Card for unresolved queries */}
        <div className="mt-24 relative bg-white border border-slate-200/80 rounded-[2.5rem] p-8 md:p-12 lg:p-14 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden">
          
          {/* Internal Soft Glow */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-blue-600/5 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>

          <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-6 md:gap-8 z-10 w-full md:w-auto">
            <div className="w-20 h-20 bg-blue-50/80 rounded-3xl flex items-center justify-center shrink-0 shadow-sm border border-blue-100/50">
              <MessageSquarePlus className="w-10 h-10 text-blue-600" />
            </div>
            <div>
              <h3 className="text-3xl md:text-4xl font-black text-[#0b2447] mb-3 tracking-tighter">Still have questions?</h3>
              <p className="text-slate-500 font-medium text-lg">Our 24/7 clinical support team is always ready to assist you.</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 z-10 w-full md:w-auto shrink-0">
            <Link 
              href="tel:+918001234567"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-[#0b2447] border border-slate-200 px-8 py-4 rounded-xl text-[11px] font-black uppercase tracking-widest shadow-sm hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 outline-none active:scale-95"
            >
              <PhoneCall className="w-4 h-4" /> Call Now
            </Link>
            <Link 
              href="/contact"
              className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-[#0b2447] text-white px-8 py-4 rounded-xl text-[11px] font-black uppercase tracking-widest shadow-[0_10px_20px_-10px_rgba(11,36,71,0.5)] hover:bg-teal-500 hover:shadow-[0_15px_30px_-10px_rgba(20,184,166,0.5)] transition-all duration-300 outline-none active:scale-95"
            >
              Contact Us <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform ease-[cubic-bezier(0.19,1,0.22,1)]" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}