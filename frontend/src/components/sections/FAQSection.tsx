import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, MessageSquarePlus, ArrowRight, PhoneCall, Plus } from "lucide-react";
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
    <section className="relative w-full py-20 md:py-28 px-4 sm:px-6 md:px-16 lg:px-24 bg-[#fafafa] overflow-hidden">
      
      {/* Subtle Dot Matrix Background (Matches Screenshot exactly) */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-60 z-0 pointer-events-none"></div>
      
      {/* Ambient Glows */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 -translate-x-1/3 mix-blend-multiply z-0"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[100px] pointer-events-none translate-y-1/3 translate-x-1/3 mix-blend-multiply z-0"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-6 shadow-sm">
            <HelpCircle className="w-4 h-4" />
            Help & Support
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0b2447] tracking-tighter leading-[1] md:leading-[0.9] mb-6 drop-shadow-sm">
            Frequently Asked <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 pr-2">Questions.</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-base md:text-lg font-medium leading-relaxed">
            Find quick, precise answers to common questions about our hospital services, admission procedures, and patient care guidelines.
          </p>
        </div>
        
        {/* Accordion Section */}
        {/* @ts-ignore */}
        <Accordion type="single" collapsible={"true" as any} className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`} 
              className="group bg-white border border-slate-200/80 rounded-2xl md:rounded-[1.5rem] px-5 md:px-8 shadow-sm hover:shadow-md data-[state=open]:border-teal-500/30 data-[state=open]:bg-gradient-to-br data-[state=open]:from-white data-[state=open]:to-teal-50/30 transition-all duration-300"
            >
              <AccordionTrigger className="flex items-center justify-between w-full text-left text-lg md:text-xl font-bold text-[#0f172a] tracking-tight group-data-[state=open]:text-blue-600 hover:text-blue-600 hover:no-underline transition-colors duration-300 py-5 md:py-6 outline-none [&[data-state=open]_.motion-btn]:rotate-45 [&[data-state=open]_.motion-btn]:bg-teal-50 [&[data-state=open]_.motion-btn]:text-teal-600 [&[data-state=open]_.motion-btn]:border-teal-200">
                
                {/* Left side: Text + Plus Button (Exact Match to Screenshot) */}
                <div className="flex items-center gap-4 md:gap-6 flex-1 pr-6">
                  <span>{faq.question}</span>
                  
                  {/* Subtle, smaller Plus Button right after text */}
                  <div className="motion-btn shrink-0 flex items-center justify-center w-8 h-8 rounded-full border border-slate-200 bg-slate-50 text-slate-400 transition-all duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] shadow-sm hidden sm:flex">
                    <Plus className="w-4 h-4" />
                  </div>
                </div>

                {/* NOTE: Shadcn's default Chevron Down will automatically appear on the far right as per your screenshot 2 */}
              </AccordionTrigger>
              <AccordionContent className="text-slate-500 leading-relaxed text-sm md:text-base pb-6 font-medium max-w-2xl pr-8">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Mini CTA Card */}
        <div className="mt-16 md:mt-20 relative bg-white border border-slate-200/80 rounded-3xl p-8 md:p-10 shadow-lg flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden group hover:shadow-xl transition-all duration-500">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-[60px] pointer-events-none -translate-y-1/2 translate-x-1/3 transition-all duration-700 group-hover:bg-teal-500/5"></div>

          <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-5 z-10 w-full md:w-auto">
            <div className="w-16 h-16 bg-blue-50/80 rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-blue-100/50 group-hover:scale-105 transition-transform duration-500">
              <MessageSquarePlus className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-black text-[#0b2447] mb-2 tracking-tighter">Still have questions?</h3>
              <p className="text-slate-500 font-medium text-sm md:text-base">Our 24/7 clinical support team is always ready to assist you.</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-3 z-10 w-full md:w-auto shrink-0">
            <Link 
              href="tel:+918001234567"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-[#0b2447] border border-slate-200 px-6 py-3.5 rounded-xl text-[11px] font-black uppercase tracking-widest shadow-sm hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 outline-none active:scale-95"
            >
              <PhoneCall className="w-4 h-4" /> Call Now
            </Link>
            <Link 
              href="/contact"
              className="group/btn w-full sm:w-auto flex items-center justify-center gap-2 bg-[#0b2447] text-white px-6 py-3.5 rounded-xl text-[11px] font-black uppercase tracking-widest shadow-md hover:bg-teal-500 transition-all duration-300 outline-none active:scale-95"
            >
              Contact Us <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform ease-[cubic-bezier(0.19,1,0.22,1)]" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}