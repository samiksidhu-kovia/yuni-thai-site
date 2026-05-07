import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import SectionEyebrow from './SectionEyebrow';
import SectionHeading from './SectionHeading';

const faqs = [
  {
    q: 'Do I need previous Muay Thai experience to join?',
    a: 'No. YuNiThai welcomes beginners and experienced athletes. Students are grouped based on skill level so training stays challenging but safe.',
  },
  {
    q: 'What about my visa to Thailand?',
    a: "Visa needs depend on your nationality and length of stay. Our team can help guide you on what to check before booking, but final visa responsibility remains with the traveler.",
  },
  {
    q: 'Are flights and travel insurance included?',
    a: 'Flights and travel insurance are not included unless stated otherwise. We strongly recommend travel insurance for all students.',
  },
  {
    q: 'What should I pack?',
    a: 'Bring training clothes, running shoes, hand wraps, personal toiletries, sunscreen, and any required medication. Gloves and gear availability may vary by package.',
  },
  {
    q: 'Will the food work for my dietary restrictions?',
    a: 'Yes, we can note dietary restrictions during your inquiry and help coordinate options where possible.',
  },
  {
    q: 'Is YuNiThai suitable for women travelling solo?',
    a: 'Yes. YuNiThai is designed to be structured, guided, and supportive for international students, including women travelling alone.',
  },
  {
    q: 'What is your refund and reschedule policy?',
    a: 'Refund and reschedule terms depend on your selected package and start date. Submit an inquiry and our team will explain the current policy clearly before you commit.',
  },
];

export default function FAQ() {
  return (
    <section className="relative py-24 md:py-32 lg:py-40">
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <SectionEyebrow text="Before You Travel" />
        <SectionHeading>Frequently Asked Questions</SectionHeading>

        <Accordion type="single" collapsible className="mt-12 space-y-2">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border border-primary/10 bg-card px-5 md:px-6 data-[state=open]:border-primary/30 transition-colors"
            >
              <AccordionTrigger className="font-heading text-sm md:text-base font-medium py-5 hover:no-underline text-left [&[data-state=open]>svg]:text-primary [&>svg]:text-primary/40 [&>svg]:shrink-0">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="font-body text-base text-foreground/60 leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}