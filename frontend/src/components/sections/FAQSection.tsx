import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, MessageSquarePlus, ArrowRight } from "lucide-react";
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
    <section className="relative w-full py-24 px-6 md:px-16 lg:px-24 bg-white overflow-hidden">
      
      {/* Premium Decorative Background Elements */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 -translate-x-1/3 mix-blend-multiply"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[100px] pointer-events-none translate-y-1/3 translate-x-1/3 mix-blend-multiply"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] text-blue-600 mb-6 shadow-sm">
            <HelpCircle className="w-4 h-4" />
            Help & Support
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0b2447] tracking-tighter leading-tight mb-6 drop-shadow-sm">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Questions</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg font-medium leading-relaxed">
            Find quick answers to common questions about our hospital services, appointment procedures, and patient care guidelines.
          </p>
        </div>
        
        {/* Accordion Section */}
        {/* @ts-ignore */}
        <Accordion type="single" collapsible className="w-full space-y-6">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`} 
              className="group bg-white border border-gray-100 rounded-[2rem] px-6 md:px-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(37,99,235,0.08)] data-[state=open]:border-blue-200 data-[state=open]:bg-blue-50/40 data-[state=open]:shadow-[0_20px_50px_-15px_rgba(37,99,235,0.15)] transition-all duration-[600ms] ease-[cubic-bezier(0.19,1,0.22,1)]"
            >
              <AccordionTrigger className="text-left text-lg md:text-xl font-extrabold text-[#0b2447] group-data-[state=open]:text-blue-600 hover:text-blue-600 hover:no-underline transition-colors duration-300 py-6 md:py-8 outline-none">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed text-base pb-8 font-medium">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Mini CTA for unresolved queries */}
        <div className="mt-16 text-center flex flex-col items-center justify-center">
          <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-blue-100">
            <MessageSquarePlus className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-2xl font-bold text-[#0b2447] mb-2">Still have questions?</h3>
          <p className="text-gray-500 font-medium mb-6">Our 24/7 support team is always ready to help you.</p>
          <Link 
            href="/contact"
            className="group flex items-center gap-2 bg-[#0b2447] text-white px-8 py-3.5 rounded-xl text-sm font-bold shadow-[0_10px_20px_-10px_rgba(11,36,71,0.5)] hover:bg-blue-600 hover:shadow-[0_15px_30px_-10px_rgba(37,99,235,0.5)] transition-all duration-300 outline-none"
          >
            Contact Support <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform ease-[cubic-bezier(0.19,1,0.22,1)]" />
          </Link>
        </div>

      </div>
    </section>
  );
}