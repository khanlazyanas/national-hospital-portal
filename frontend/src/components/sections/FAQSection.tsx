"use client";

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
    question: "What neurological conditions does Dr. AQ Jilani treat?",
    answer: "Dr. Jilani specializes in a wide spectrum of complex neurological disorders, including Stroke Management, Epilepsy, Parkinson's Disease, Chronic Migraines, Neuropathy, and post-trauma Neuro-Rehabilitation."
  },
  {
    question: "Are psychiatric and therapy services available?",
    answer: "Yes, our clinic offers comprehensive psychiatric evaluations and clinical therapy for conditions like Depression, Severe Anxiety, OCD, and stress management, providing a holistic approach to mental wellness."
  },
  {
    question: "Can I book an online video consultation with Dr. Jilani?",
    answer: "Absolutely. We offer premium HD tele-consultations for outstation and international patients. You can easily schedule an online session through our 'Book Appointment' page or by calling our helpdesk."
  },
  {
    question: "Do you handle acute neurological emergencies?",
    answer: "Yes, National Hospital & Neuro Center operates a 24/7 emergency response unit specifically equipped to handle critical neuro-emergencies like acute strokes and traumatic brain injuries."
  }
];

export default function FAQSection() {
  return (
    <section className="relative w-full py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20 bg-[#fafafa] overflow-hidden">
      
      {/* Subtle Dot Matrix Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-60 z-0 pointer-events-none"></div>
      
      {/* Ambient Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 -translate-x-1/3 mix-blend-multiply z-0"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[80px] pointer-events-none translate-y-1/3 translate-x-1/3 mix-blend-multiply z-0"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        
        {/* Header Section (Scaled down for balance) */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 mb-5 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5" />
            Help & Support
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0b2447] tracking-tighter leading-tight mb-5 drop-shadow-sm">
            Frequently Asked <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 pr-1">Questions.</span>
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto text-sm md:text-base font-medium leading-relaxed">
            Find quick, precise answers regarding Dr. Jilani's consultation process, neuro-treatments, and clinic facilities.
          </p>
        </div>
        
        {/* Accordion Section */}
        {/* @ts-ignore */}
        <Accordion type="single" collapsible={"true" as any} className="w-full space-y-3 md:space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`} 
              className="group bg-white border border-slate-200/80 rounded-[1.25rem] px-5 md:px-6 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-md data-[state=open]:border-teal-500/30 data-[state=open]:bg-gradient-to-br data-[state=open]:from-white data-[state=open]:to-teal-50/30 transition-all duration-300"
            >
              {/* [&>svg]:hidden hides the default Shadcn Chevron entirely */}
              <AccordionTrigger className="flex items-center w-full text-left text-base md:text-lg font-bold text-[#0f172a] tracking-tight group-data-[state=open]:text-blue-600 hover:text-blue-600 hover:no-underline transition-colors duration-300 py-4 md:py-5 outline-none [&>svg]:hidden [&[data-state=open]_.motion-btn]:rotate-45 [&[data-state=open]_.motion-btn]:bg-teal-50 [&[data-state=open]_.motion-btn]:text-teal-600 [&[data-state=open]_.motion-btn]:border-teal-200">
                
                {/* Left side: Text Only */}
                <span>{faq.question}</span>
                
                {/* Right side: Extreme Right Plus Button */}
                <div className="motion-btn ml-auto shrink-0 flex items-center justify-center w-8 h-8 rounded-full border border-slate-200 bg-slate-50 text-slate-400 transition-all duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] shadow-sm">
                  <Plus className="w-4 h-4" />
                </div>

              </AccordionTrigger>
              <AccordionContent className="text-slate-500 leading-relaxed text-sm pb-5 font-medium max-w-2xl pr-10">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Mini CTA Card (Scaled down proportionally) */}
        <div className="mt-14 relative bg-white border border-slate-200/80 rounded-[1.5rem] p-6 md:p-8 shadow-md flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden group hover:shadow-lg transition-all duration-500">
          
          <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/5 rounded-full blur-[40px] pointer-events-none -translate-y-1/2 translate-x-1/3 transition-all duration-700 group-hover:bg-teal-500/5"></div>

          <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 z-10 w-full md:w-auto">
            <div className="w-12 h-12 bg-blue-50/80 rounded-xl flex items-center justify-center shrink-0 shadow-sm border border-blue-100/50 group-hover:scale-105 transition-transform duration-500">
              <MessageSquarePlus className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-black text-[#0b2447] mb-1.5 tracking-tighter">Still have questions?</h3>
              <p className="text-slate-500 font-medium text-xs md:text-sm">Our 24/7 clinical support team is always ready to assist you.</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-3 z-10 w-full md:w-auto shrink-0">
            <Link 
              href="tel:+918001234567"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-[#0b2447] border border-slate-200 px-5 py-2.5 rounded-lg text-[10px] font-black uppercase tracking-widest shadow-sm hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 outline-none active:scale-95"
            >
              <PhoneCall className="w-3.5 h-3.5" /> Call Now
            </Link>
            <Link 
              href="/contact"
              className="group/btn w-full sm:w-auto flex items-center justify-center gap-2 bg-[#0b2447] text-white px-5 py-2.5 rounded-lg text-[10px] font-black uppercase tracking-widest shadow-md hover:bg-teal-500 transition-all duration-300 outline-none active:scale-95"
            >
              Contact Us <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform ease-[cubic-bezier(0.19,1,0.22,1)]" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}