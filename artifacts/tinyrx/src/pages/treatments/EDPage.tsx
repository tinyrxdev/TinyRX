import React from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import FAQAccordion from "@/components/shared/FAQAccordion";
import MedicalDisclaimer from "@/components/shared/MedicalDisclaimer";
import { CheckCircle2 } from "lucide-react";

const faqItems = [
  { q: "What is ED?", answer: "Erectile dysfunction (ED) is the inability to get or keep an erection firm enough for sexual intercourse. It's a common condition that affects millions of men." },
  { q: "What treatment options are available?", answer: "TinyRx providers commonly prescribe PDE5 inhibitors (like generic Viagra or Cialis), which are FDA-approved, clinically proven medications for treating ED." },
  { q: "Is online treatment effective?", answer: "Yes. For most healthy men, an online consultation provides enough medical information for a doctor to safely prescribe effective ED medication without an in-person visit." },
  { q: "How long do the medications take to work?", answer: "Depending on the medication, it can take anywhere from 30 to 60 minutes to take effect. Your provider will give you specific instructions for your prescription." },
  { q: "Who shouldn't take ED medications?", answer: "Men taking nitrates for chest pain or those with severe heart or liver conditions shouldn't take PDE5 inhibitors. You must disclose your full medical history during the assessment." },
];

export default function EDPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-background pt-12 pb-20 lg:pt-20 lg:pb-32 px-4 md:px-6">
        <div className="container max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block rounded-full bg-indigo-100/50 text-indigo-800 px-3 py-1 text-sm font-medium border border-indigo-200">
                Men's Health
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                Confidential treatment for ED. 100% online.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                FDA-approved medications prescribed by licensed providers and shipped discreetly to your door.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="rounded-full h-14 px-8 text-base bg-primary">
                  <Link href="/signup">Get started</Link>
                </Button>
                <div className="flex items-center text-sm font-medium text-foreground gap-2 px-4">
                  <span>Plans from $49/mo</span>
                </div>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-square lg:aspect-[4/3]">
              <img 
                src="https://picsum.photos/seed/mens-health/1000/800" 
                alt="Men's Health" 
                className="w-full h-full object-cover"
                crossOrigin="anonymous" 
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30 px-4 md:px-6">
        <div className="container max-w-5xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-display font-semibold">How it works</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-2xl shadow-sm border border-border text-center space-y-4">
              <div className="h-12 w-12 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xl font-bold font-display mx-auto mb-6">1</div>
              <h3 className="text-xl font-semibold">Quick Assessment</h3>
              <p className="text-muted-foreground">Answer a few questions about your symptoms and medical history in our secure portal.</p>
            </div>
            <div className="bg-card p-8 rounded-2xl shadow-sm border border-border text-center space-y-4">
              <div className="h-12 w-12 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xl font-bold font-display mx-auto mb-6">2</div>
              <h3 className="text-xl font-semibold">Provider Review</h3>
              <p className="text-muted-foreground">A U.S.-licensed provider reviews your profile and writes a prescription if appropriate.</p>
            </div>
            <div className="bg-card p-8 rounded-2xl shadow-sm border border-border text-center space-y-4">
              <div className="h-12 w-12 bg-primary/10 text-primary rounded-full flex items-center justify-center text-xl font-bold font-display mx-auto mb-6">3</div>
              <h3 className="text-xl font-semibold">Discreet Delivery</h3>
              <p className="text-muted-foreground">Your medication arrives in plain packaging. Shipping is always free.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background px-4 md:px-6">
        <div className="container max-w-4xl mx-auto bg-card border rounded-3xl p-8 md:p-12 shadow-sm">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-display font-semibold">Simple pricing.</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                  <span>Provider consultation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                  <span>Generic options available</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                  <span>Free discreet delivery</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                  <span>Adjust your plan anytime</span>
                </li>
              </ul>
            </div>
            <div className="bg-muted/50 p-8 rounded-2xl text-center space-y-6">
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Starting at</div>
              <div className="text-5xl font-display font-bold text-foreground">$49<span className="text-2xl text-muted-foreground font-normal">/mo</span></div>
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
            <h2 className="text-3xl md:text-4xl font-display font-semibold">Questions about ED Treatment</h2>
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
