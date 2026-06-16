import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

interface FAQItem {
  q: string;
  id?: string;
  note?: string;
  answer: string | React.ReactNode;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((item, index) => (
        <AccordionItem key={item.id || `faq-${index}`} value={item.id || `faq-${index}`}>
          <AccordionTrigger className="text-left font-medium text-base hover:text-primary transition-colors py-5">
            <div className="flex items-center gap-3">
              <span>{item.q}</span>
              {item.note && (
                <Badge variant="secondary" className="text-[10px] uppercase tracking-wider bg-primary/10 text-primary">
                  {item.note}
                </Badge>
              )}
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-5 text-base">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
