import React from "react";
import { Link } from "wouter";
import { CheckCircle2, Package, RotateCcw, Globe, Leaf, Zap, Heart, Activity, StarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import FAQAccordion from "@/components/shared/FAQAccordion";
import NewsletterSection from "@/components/shared/NewsletterSection";
import MedicalDisclaimer from "@/components/shared/MedicalDisclaimer";

const faqItems = [
  { q: "Is TinyRx a legitimate telehealth platform?", answer: "Yes. TinyRx connects patients with licensed U.S. healthcare providers and licensed pharmacy partners. All providers are state-licensed." },
  { q: "Do I need health insurance?", answer: "No. TinyRx uses transparent self-pay pricing. No insurance required." },
  { q: "Will my health information be kept private?", answer: "Yes. Your information is protected under HIPAA. See our Privacy Policy." },
  { q: "How fast is shipping?", answer: "Most orders ship within 1–3 business days after provider approval, with delivery in 3–7 business days. Discreet packaging." },
  { q: "What if my provider doesn't prescribe treatment?", answer: "Treatment is solely at the discretion of the licensed provider based on your health information. Not everyone will qualify." },
  { q: "Can I cancel anytime?", answer: "Yes. Subscriptions can be canceled at any time. See our Refund Policy for details." },
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background py-16 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-6">
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
                  Modern care, made simple.
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-[600px] leading-relaxed">
                  Online visits with licensed providers. Treatment shipped to your door. No waiting rooms, no judgment.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                <Button asChild size="lg" className="h-14 px-8 text-lg rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium w-full sm:w-auto">
                  <Link href="/signup">Get Started</Link>
                </Button>
                <Button asChild variant="link" className="text-foreground hover:text-primary text-base">
                  <Link href="/signup">See if you qualify →</Link>
                </Button>
              </div>
              
              <div className="pt-8 border-t border-border grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span className="text-xs font-medium text-foreground">Licensed U.S. providers</span>
                </div>
                <div className="flex items-center gap-2">
                  <Package className="h-4 w-4 text-primary" />
                  <span className="text-xs font-medium text-foreground">Free shipping</span>
                </div>
                <div className="flex items-center gap-2">
                  <RotateCcw className="h-4 w-4 text-primary" />
                  <span className="text-xs font-medium text-foreground">Cancel anytime</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-primary" />
                  <span className="text-xs font-medium text-foreground">100% online</span>
                </div>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://picsum.photos/seed/tinyrx-hero/1200/800" 
                alt="TinyRx Telehealth" 
                className="w-full h-auto object-cover aspect-[4/3] lg:aspect-auto"
                crossOrigin="anonymous" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Categories */}
      <section className="bg-muted/30 py-20 px-4 md:px-6">
        <div className="container max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground">Treatments tailored to you</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Explore our range of personalized treatment options designed for your goals.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/treatments/weight-loss" className="group block h-full">
              <div className="bg-card rounded-xl p-6 shadow-sm border hover:shadow-md transition-all h-full flex flex-col">
                <div className="h-12 w-12 rounded-lg bg-teal-100/50 flex items-center justify-center mb-6 text-teal-600">
                  <Leaf className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">Weight Loss</h3>
                <p className="text-muted-foreground text-sm flex-1">Lose weight with physician-guided treatment plans.</p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm font-medium">From $149/mo</span>
                  <span className="text-sm font-medium text-primary flex items-center">Learn more <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 duration-200">→</span></span>
                </div>
              </div>
            </Link>

            <Link href="/treatments/peptides" className="group block h-full">
              <div className="bg-card rounded-xl p-6 shadow-sm border hover:shadow-md transition-all h-full flex flex-col">
                <div className="h-12 w-12 rounded-lg bg-blue-100/50 flex items-center justify-center mb-6 text-blue-600">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">Peptide Therapy</h3>
                <p className="text-muted-foreground text-sm flex-1">Targeted support for recovery, performance & longevity.</p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm font-medium">From $99/mo</span>
                  <span className="text-sm font-medium text-primary flex items-center">Learn more <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 duration-200">→</span></span>
                </div>
              </div>
            </Link>

            <Link href="/treatments/ed" className="group block h-full">
              <div className="bg-card rounded-xl p-6 shadow-sm border hover:shadow-md transition-all h-full flex flex-col">
                <div className="h-12 w-12 rounded-lg bg-indigo-100/50 flex items-center justify-center mb-6 text-indigo-600">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">ED & Performance</h3>
                <p className="text-muted-foreground text-sm flex-1">Confidential treatment for sexual health.</p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm font-medium">From $49/mo</span>
                  <span className="text-sm font-medium text-primary flex items-center">Learn more <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 duration-200">→</span></span>
                </div>
              </div>
            </Link>

            <Link href="/treatments/trt" className="group block h-full">
              <div className="bg-card rounded-xl p-6 shadow-sm border hover:shadow-md transition-all h-full flex flex-col">
                <div className="h-12 w-12 rounded-lg bg-orange-100/50 flex items-center justify-center mb-6 text-orange-600">
                  <Activity className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">TRT / Hormones</h3>
                <p className="text-muted-foreground text-sm flex-1">Optimize testosterone with ongoing lab monitoring.</p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm font-medium">From $199/mo</span>
                  <span className="text-sm font-medium text-primary flex items-center">Learn more <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 duration-200">→</span></span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-4 md:px-6 bg-background">
        <div className="container max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground">How it works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">A seamless path to feeling your best.</p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-6 left-0 right-0 h-0.5 bg-muted z-0"></div>
            <div className="grid lg:grid-cols-4 gap-12 lg:gap-8 relative z-10">
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-4">
                <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold font-display shadow-sm">1</div>
                <h3 className="text-lg font-semibold">Complete an online visit</h3>
                <p className="text-sm text-muted-foreground">Answer a quick health questionnaire about your symptoms and history.</p>
              </div>
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-4">
                <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold font-display shadow-sm">2</div>
                <h3 className="text-lg font-semibold">Get matched with a licensed provider</h3>
                <p className="text-sm text-muted-foreground">A U.S.-licensed provider reviews your information to ensure safety.</p>
              </div>
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-4">
                <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold font-display shadow-sm">3</div>
                <h3 className="text-lg font-semibold">Get your personalized treatment plan</h3>
                <p className="text-sm text-muted-foreground">If appropriate, a prescription is sent to our partner pharmacy.</p>
              </div>
              <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-4">
                <div className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold font-display shadow-sm">4</div>
                <h3 className="text-lg font-semibold">Treatment delivered to your door</h3>
                <p className="text-sm text-muted-foreground">Receive discreet packaging with ongoing support from your care team.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center pt-8">
            <Button asChild size="lg" className="rounded-full h-14 px-8 text-base bg-primary">
              <Link href="/signup">Start your visit</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why TinyRx */}
      <section className="bg-foreground text-background py-24 px-4 md:px-6">
        <div className="container max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-display font-semibold">Why TinyRx?</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-primary">Licensed Providers</h3>
              <p className="text-sm text-muted-foreground/80 leading-relaxed">U.S.-licensed physicians, NPs, and PAs carefully evaluate every patient.</p>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-primary">Transparent Pricing</h3>
              <p className="text-sm text-muted-foreground/80 leading-relaxed">No hidden fees. No insurance required. You know exactly what you'll pay.</p>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-primary">Ongoing Support</h3>
              <p className="text-sm text-muted-foreground/80 leading-relaxed">Secure messaging with your care team whenever you have questions.</p>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-primary">Discreet Delivery</h3>
              <p className="text-sm text-muted-foreground/80 leading-relaxed">Medications dispensed by licensed U.S. pharmacies and shipped discreetly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Peptide Spotlight */}
      <section className="py-24 px-4 md:px-6 bg-muted/20">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden order-2 md:order-1">
               <img 
                  src="https://picsum.photos/seed/peptide-therapy/800/800" 
                  alt="Peptide Therapy" 
                  className="w-full h-full object-cover"
                  crossOrigin="anonymous" 
                />
            </div>
            <div className="space-y-8 order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground">What makes peptide therapy different?</h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>Peptides are short chains of amino acids that may support a range of health goals, including recovery, energy, and healthy aging.</p>
                <p>Unlike many traditional treatments, peptide therapy targets specific biological pathways. TinyRx providers create personalized plans based on your health history and goals.</p>
              </div>
              <p className="text-xs text-muted-foreground italic">Note: Compounded medications are not reviewed by the FDA for safety, effectiveness, or quality.</p>
              <Button asChild variant="outline" className="rounded-full border-primary text-primary hover:bg-primary/5">
                <Link href="/treatments/peptides">Explore Peptide Therapy</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 md:px-6 bg-background">
        <div className="container max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground">Real patients. Real results.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card border p-8 rounded-2xl shadow-sm space-y-6 flex flex-col">
              <div className="flex text-amber-400 gap-1">
                <StarIcon className="h-5 w-5 fill-current" />
                <StarIcon className="h-5 w-5 fill-current" />
                <StarIcon className="h-5 w-5 fill-current" />
                <StarIcon className="h-5 w-5 fill-current" />
                <StarIcon className="h-5 w-5 fill-current" />
              </div>
              <p className="text-foreground leading-relaxed flex-1">"I've tried everything for weight management. TinyRx made it easy to get a real prescription plan that fits my life."</p>
              <p className="text-sm font-medium text-muted-foreground">— M.T., Florida</p>
            </div>
            <div className="bg-card border p-8 rounded-2xl shadow-sm space-y-6 flex flex-col">
               <div className="flex text-amber-400 gap-1">
                <StarIcon className="h-5 w-5 fill-current" />
                <StarIcon className="h-5 w-5 fill-current" />
                <StarIcon className="h-5 w-5 fill-current" />
                <StarIcon className="h-5 w-5 fill-current" />
                <StarIcon className="h-5 w-5 fill-current" />
              </div>
              <p className="text-foreground leading-relaxed flex-1">"The whole process was online, no awkward conversations. My provider was thorough and responsive."</p>
              <p className="text-sm font-medium text-muted-foreground">— J.R., Texas</p>
            </div>
            <div className="bg-card border p-8 rounded-2xl shadow-sm space-y-6 flex flex-col">
               <div className="flex text-amber-400 gap-1">
                <StarIcon className="h-5 w-5 fill-current" />
                <StarIcon className="h-5 w-5 fill-current" />
                <StarIcon className="h-5 w-5 fill-current" />
                <StarIcon className="h-5 w-5 fill-current" />
                <StarIcon className="h-5 w-5 fill-current" />
              </div>
              <p className="text-foreground leading-relaxed flex-1">"Finally a telehealth option that doesn't feel like a gimmick. Discreet, fast, and actually effective."</p>
              <p className="text-sm font-medium text-muted-foreground">— A.K., Colorado</p>
            </div>
          </div>
          <p className="text-xs text-center text-muted-foreground italic mt-8">Individual results may vary. Testimonials reflect the experiences of real patients but are not a guarantee of results.</p>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="bg-muted/30 py-24 px-4 md:px-6 border-t border-b">
        <div className="container max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground">Transparent pricing</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Simple, straightforward monthly plans. No surprises.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card rounded-xl p-8 shadow-sm border text-center space-y-4 flex flex-col">
              <h3 className="font-semibold text-lg">Weight Loss</h3>
              <div className="text-3xl font-display font-bold">From $149<span className="text-base text-muted-foreground font-normal">/mo</span></div>
              <p className="text-sm text-muted-foreground flex-1">GLP-1 guided weight loss program</p>
              <Button asChild variant="outline" className="w-full rounded-full mt-4">
                <Link href="/treatments/weight-loss">See options</Link>
              </Button>
            </div>
            <div className="bg-card rounded-xl p-8 shadow-sm border text-center space-y-4 flex flex-col relative overflow-hidden border-primary/20">
              <div className="absolute top-0 left-0 right-0 h-1 bg-primary"></div>
              <h3 className="font-semibold text-lg">Peptide Therapy</h3>
              <div className="text-3xl font-display font-bold">From $99<span className="text-base text-muted-foreground font-normal">/mo</span></div>
              <p className="text-sm text-muted-foreground flex-1">Personalized peptide treatment plans</p>
              <Button asChild variant="outline" className="w-full rounded-full mt-4 hover:bg-primary hover:text-primary-foreground border-primary text-primary">
                <Link href="/treatments/peptides">See options</Link>
              </Button>
            </div>
            <div className="bg-card rounded-xl p-8 shadow-sm border text-center space-y-4 flex flex-col">
              <h3 className="font-semibold text-lg">ED & Performance</h3>
              <div className="text-3xl font-display font-bold">From $49<span className="text-base text-muted-foreground font-normal">/mo</span></div>
              <p className="text-sm text-muted-foreground flex-1">Confidential ED treatment</p>
              <Button asChild variant="outline" className="w-full rounded-full mt-4">
                <Link href="/treatments/ed">See options</Link>
              </Button>
            </div>
          </div>
          
          <div className="text-center space-y-6 pt-4">
             <p className="text-sm text-muted-foreground">Price varies based on treatment plan and dosage. No insurance required.</p>
             <Button asChild size="lg" className="rounded-full bg-primary text-primary-foreground">
                <Link href="/signup">See your options</Link>
             </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 md:px-6 bg-background">
        <div className="container max-w-3xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground">Common questions</h2>
          </div>
          
          <FAQAccordion items={faqItems} />

          <div className="text-center pt-4">
            <Link href="/faq" className="text-primary font-medium hover:underline">
              View all FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterSection />

      {/* Final CTA */}
      <section className="bg-primary text-primary-foreground py-20 px-4 md:px-6 text-center">
        <div className="container max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-display font-bold">Ready to feel like yourself again?</h2>
          <Button asChild size="lg" className="bg-white text-foreground hover:bg-white/90 rounded-full h-14 px-10 text-lg font-medium shadow-sm">
            <Link href="/signup">Get Started</Link>
          </Button>
        </div>
      </section>

      <MedicalDisclaimer />
    </div>
  );
}
