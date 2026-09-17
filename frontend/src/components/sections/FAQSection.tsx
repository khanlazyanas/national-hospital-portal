import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

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
      
      {/* Decorative Background Elements */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-50/60 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 -translate-x-1/3"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] text-blue-600 mb-6 shadow-sm">
            <HelpCircle className="w-4 h-4" />
            Help & Support
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0b2447] tracking-tight leading-tight mb-4">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">Questions</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base font-medium">
            Find answers to common questions about our hospital services, appointments, and patient care guidelines.
          </p>
        </div>
        
        {/* Accordion Section */}
        {/* @ts-ignore */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`} 
              className="bg-white border border-gray-100 rounded-2xl px-6 md:px-8 data-[state=open]:border-blue-100 data-[state=open]:bg-blue-50/30 data-[state=open]:shadow-[0_10px_30px_-15px_rgba(37,99,235,0.15)] transition-all duration-300"
            >
              <AccordionTrigger className="text-left text-lg md:text-xl font-bold text-[#0b2447] hover:text-blue-600 hover:no-underline transition-colors py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed text-base pb-6 font-medium">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}