import React from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import FAQAccordion from "@/components/shared/FAQAccordion";
import MedicalDisclaimer from "@/components/shared/MedicalDisclaimer";
import { CheckCircle2 } from "lucide-react";

const faqItems = [
  { q: "What is TRT?", answer: "Testosterone Replacement Therapy (TRT) is a medical treatment for men diagnosed with low testosterone levels (hypogonadism) to restore levels to a healthy, normal range." },
  { q: "How do I know if I need TRT?", answer: "Symptoms of low testosterone can include fatigue, low libido, loss of muscle mass, and mood changes. However, TRT is only prescribed after blood tests confirm clinical deficiency." },
  { q: "Do you require lab testing?", answer: "Yes. We require recent, comprehensive lab testing before prescribing TRT, and ongoing lab monitoring while you are on the protocol to ensure safety and effectiveness." },
  { q: "Is TRT safe?", answer: "When managed correctly by a medical provider with regular lab monitoring, TRT is generally safe for eligible patients. Your provider will discuss potential risks and benefits before starting treatment." },
];

export default function TRTPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-background pt-12 pb-20 lg:pt-20 lg:pb-32 px-4 md:px-6">
        <div className="container max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 order-2 lg:order-1">
              <div className="inline-block rounded-full bg-orange-100/50 text-orange-800 px-3 py-1 text-sm font-medium border border-orange-200">
                Hormone Health
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                Testosterone optimization with ongoing support.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Physician-guided TRT plans including comprehensive lab monitoring to ensure safe, effective results.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="rounded-full h-14 px-8 text-base bg-primary">
                  <Link href="/signup">Get started</Link>
                </Button>
                <div className="flex items-center text-sm font-medium text-foreground gap-2 px-4">
                  <span>Plans from $199/mo</span>
                </div>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-square lg:aspect-[4/3] order-1 lg:order-2">
              <img 
                src="https://picsum.photos/seed/trt-health/1000/800" 
                alt="TRT Therapy" 
                className="w-full h-full object-cover"
                crossOrigin="anonymous" 
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background px-4 md:px-6 border-t">
        <div className="container max-w-4xl mx-auto bg-card border rounded-3xl p-8 md:p-12 shadow-sm">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-display font-semibold">Comprehensive care.</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                  <span>Clinical evaluation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                  <span>Prescription medication</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                  <span>Free supplies & shipping</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                  <span>Ongoing lab review & support</span>
                </li>
              </ul>
            </div>
            <div className="bg-muted/50 p-8 rounded-2xl text-center space-y-6">
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Starting at</div>
              <div className="text-5xl font-display font-bold text-foreground">$199<span className="text-2xl text-muted-foreground font-normal">/mo</span></div>
              <p className="text-sm text-muted-foreground italic">Note: Initial and ongoing lab work may carry separate costs.</p>
              <Button asChild size="lg" className="w-full rounded-full bg-primary">
                <Link href="/signup">Start assessment</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 md:px-6 bg-muted/20 border-t">
        <div className="container max-w-3xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-display font-semibold">Questions about TRT</h2>
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
