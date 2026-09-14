import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I book an appointment?",
    answer: "You can book an appointment through our website by clicking the 'Book Appointment' button, or you can call our 24/7 helpline at +91 800 123 4567."
  },
  {
    question: "Do you accept health insurance?",
    answer: "Yes, we accept most major health insurance plans. Please bring your insurance card and a valid ID during your visit for verification."
  },
  {
    question: "What are the visiting hours for admitted patients?",
    answer: "General visiting hours are from 10:00 AM to 1:00 PM and 5:00 PM to 8:00 PM. ICU visiting hours are strictly limited to immediate family members."
  },
  {
    question: "Is emergency care available 24/7?",
    answer: "Yes, our Emergency and Trauma Center is fully equipped and open 24 hours a day, 7 days a week to handle all medical emergencies."
  }
];

export default function FAQSection() {
  return (
    <section className="w-full py-20 px-8 md:px-16 lg:px-24 bg-surfaceWhite text-deepNavy">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm text-heroBlue font-semibold uppercase tracking-wider mb-3">Got Questions?</p>
          <h2 className="text-3xl md:text-5xl font-bold">Frequently Asked Questions</h2>
        </div>
        
        {/* @ts-ignore */}
<Accordion type="single" collapsible="true" className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-heroBlue transition-colors py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed text-base pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}