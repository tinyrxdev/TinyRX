import React from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import FAQAccordion from "@/components/shared/FAQAccordion";
import MedicalDisclaimer from "@/components/shared/MedicalDisclaimer";
import { CheckCircle2 } from "lucide-react";

const faqItems = [
  { q: "What is GLP-1 therapy?", answer: "GLP-1 medications mimic a hormone naturally produced in your body that helps regulate blood sugar and appetite. They can help you feel fuller faster and stay full longer." },
  { q: "What weight loss treatments does TinyRx offer?", answer: "We offer several GLP-1 options depending on your medical history, goals, and what our providers determine is clinically appropriate for you." },
  { q: "Am I a candidate?", answer: "GLP-1 medications are typically prescribed for adults with a BMI of 30 or higher, or 27 or higher with a weight-related condition. A licensed provider will review your medical history to determine if you're a good candidate." },
  { q: "How quickly will I see results?", answer: "Results vary by individual. Many patients start to see weight loss within the first few weeks, but these medications are designed for long-term, sustainable weight management." },
  { q: "Are there side effects?", answer: "Like any medication, GLP-1s can have side effects. The most common are gastrointestinal, such as nausea, vomiting, or diarrhea. Your provider will discuss potential side effects before prescribing." },
];

export default function WeightLossPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="bg-background pt-12 pb-20 lg:pt-20 lg:pb-32 px-4 md:px-6">
        <div className="container max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block rounded-full bg-teal-100/50 text-teal-800 px-3 py-1 text-sm font-medium border border-teal-200">
                Weight Management
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                Medically guided weight loss. Online.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                GLP-1 based treatment plans from licensed providers. No waiting rooms, no judgment, just results.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="rounded-full h-14 px-8 text-base bg-primary">
                  <Link href="/signup">Get started</Link>
                </Button>
                <div className="flex items-center text-sm font-medium text-foreground gap-2 px-4">
                  <span>Plans from $149/mo</span>
                </div>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-square lg:aspect-[4/3]">
              <img 
                src="https://picsum.photos/seed/weight-loss-telehealth/1000/800" 
                alt="Weight Loss Telehealth" 
                className="w-full h-full object-cover"
                crossOrigin="anonymous" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-muted/30 px-4 md:px-6">
        <div className="container max-w-5xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-display font-semibold">How it works for weight loss</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-8 left-12 right-12 h-0.5 bg-border z-0" />
            
            <div className="relative z-10 bg-card p-6 rounded-2xl shadow-sm border border-border flex flex-col text-center space-y-4">
              <div className="h-16 w-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold font-display mx-auto shadow-md">1</div>
              <h3 className="text-xl font-semibold">Share your goals</h3>
              <p className="text-muted-foreground text-sm">Tell us about your weight history, lifestyle, and goals through our secure medical intake form.</p>
            </div>
            
            <div className="relative z-10 bg-card p-6 rounded-2xl shadow-sm border border-border flex flex-col text-center space-y-4">
              <div className="h-16 w-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold font-display mx-auto shadow-md">2</div>
              <h3 className="text-xl font-semibold">Provider review</h3>
              <p className="text-muted-foreground text-sm">A licensed provider reviews your profile to determine if GLP-1 medication is clinically appropriate.</p>
            </div>
            
            <div className="relative z-10 bg-card p-6 rounded-2xl shadow-sm border border-border flex flex-col text-center space-y-4">
              <div className="h-16 w-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold font-display mx-auto shadow-md">3</div>
              <h3 className="text-xl font-semibold">Treatment & Support</h3>
              <p className="text-muted-foreground text-sm">Receive medication shipped to your door with ongoing check-ins from your care team.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing / Details */}
      <section className="py-24 bg-background px-4 md:px-6">
        <div className="container max-w-4xl mx-auto bg-card border rounded-3xl p-8 md:p-12 shadow-sm">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-display font-semibold">Transparent pricing. No hidden fees.</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                  <span>Medical consultation included</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                  <span>Prescription medication (if approved)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                  <span>Free 2-day shipping</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                  <span>Ongoing messaging with providers</span>
                </li>
              </ul>
            </div>
            <div className="bg-muted/50 p-8 rounded-2xl text-center space-y-6">
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Starting at</div>
              <div className="text-5xl font-display font-bold text-foreground">$149<span className="text-2xl text-muted-foreground font-normal">/mo</span></div>
              <p className="text-sm text-muted-foreground">Price varies by specific medication and dosage required.</p>
              <Button asChild size="lg" className="w-full rounded-full bg-primary">
                <Link href="/signup">Start assessment</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 md:px-6 bg-muted/20">
        <div className="container max-w-3xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-display font-semibold">Questions about Weight Loss</h2>
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
