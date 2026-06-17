import { faqs } from "@/data/content";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">Radical Transparency: Clear Answers</h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">Everything you need to know before we partner up.</p>
        </div>
        <Accordion className="w-full bg-white rounded-xl shadow-sm border p-4 md:p-6">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="last:border-0">
              <AccordionTrigger className="text-left font-medium text-base md:text-lg hover:no-underline hover:text-primary py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-sm md:text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
