import React from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import FAQAccordion from "@/components/shared/FAQAccordion";
import MedicalDisclaimer from "@/components/shared/MedicalDisclaimer";
import { CheckCircle2 } from "lucide-react";

const faqItems = [
  { q: "What are peptides?", answer: "Peptides are naturally occurring short chains of amino acids that act as signaling molecules in the body, instructing other cells what to do." },
  { q: "What peptide treatments are available?", answer: "We offer several tailored peptide protocols focused on recovery, lean muscle support, metabolic health, and general wellness. A provider will determine the best option for your goals." },
  { q: "Are peptides safe?", answer: "When prescribed by a licensed medical professional and sourced from licensed U.S. compounding pharmacies, peptides are generally considered safe for appropriate candidates. Your provider will discuss all potential risks based on your health history." },
  { q: "How are they administered?", answer: "Most peptide therapies are administered via simple subcutaneous injection (a tiny needle just under the skin) or as oral capsules/troches, depending on the specific peptide." },
  { q: "Are peptides FDA-approved?", answer: "While some peptides are FDA-approved for specific conditions, many peptides used in optimization therapy are compounded. Compounded medications are not reviewed by the FDA for safety, effectiveness, or quality, but are prepared by licensed pharmacies." },
];

export default function PeptidesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-background pt-12 pb-20 lg:pt-20 lg:pb-32 px-4 md:px-6">
        <div className="container max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 order-2 lg:order-1">
              <div className="inline-block rounded-full bg-blue-100/50 text-blue-800 px-3 py-1 text-sm font-medium border border-blue-200">
                Optimization
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                Peptide therapy, personalized for you.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Targeted cellular support for recovery, performance, and healthy aging—prescribed online.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="rounded-full h-14 px-8 text-base bg-primary">
                  <Link href="/signup">Get started</Link>
                </Button>
                <div className="flex items-center text-sm font-medium text-foreground gap-2 px-4">
                  <span>Plans from $99/mo</span>
                </div>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-square lg:aspect-[4/3] order-1 lg:order-2">
              <img 
                src="https://picsum.photos/seed/peptides-health/1000/800" 
                alt="Peptide Therapy" 
                className="w-full h-full object-cover"
                crossOrigin="anonymous" 
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/20 px-4 md:px-6 border-y">
        <div className="container max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-display font-semibold">What are peptides?</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Peptides are naturally occurring biological molecules made up of short chains of amino acids. 
            They act as messengers in the body, binding to receptors on cell surfaces to signal specific 
            biological functions like tissue repair, hormone production, and metabolic regulation.
          </p>
          <div className="inline-block bg-amber-50 border border-amber-200 text-amber-800 px-4 py-3 rounded-lg text-sm italic max-w-2xl text-left">
            Compounded medications are not reviewed by the FDA for safety, effectiveness, or quality.
          </div>
        </div>
      </section>

      <section className="py-24 bg-background px-4 md:px-6">
        <div className="container max-w-4xl mx-auto bg-card border rounded-3xl p-8 md:p-12 shadow-sm">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-display font-semibold">Clear, upfront pricing.</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                  <span>Physician evaluation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                  <span>Custom compounding</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                  <span>All supplies included</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                  <span>Free discreet shipping</span>
                </li>
              </ul>
            </div>
            <div className="bg-muted/50 p-8 rounded-2xl text-center space-y-6">
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Starting at</div>
              <div className="text-5xl font-display font-bold text-foreground">$99<span className="text-2xl text-muted-foreground font-normal">/mo</span></div>
              <Button asChild size="lg" className="w-full rounded-full bg-primary">
                <Link href="/signup">Start assessment</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 md:px-6 bg-muted/20">
        <div className="container max-w-3xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-display font-semibold">Questions about Peptides</h2>
          </div>
          <FAQAccordion items={faqItems} />
          <div className="text-center pt-4">
            <Link href="/faq" className="text-primary font-medium hover:underline">
              View all FAQs →
            </Link>
          </div>
        </div>
      </section>

      <MedicalDisclaimer />
    </div>
  );
}
