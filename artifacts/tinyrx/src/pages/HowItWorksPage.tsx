import React from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div className="container max-w-4xl mx-auto px-4 py-20 md:py-32">
        <div className="text-center space-y-6 mb-20">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground">How TinyRx Works</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We've streamlined the healthcare experience to make getting the right treatment safe, simple, and entirely online.
          </p>
        </div>

        <div className="space-y-16 relative before:absolute before:inset-0 before:ml-8 md:before:mx-auto before:-translate-x-px md:before:translate-x-0 before:h-full before:w-0.5 before:bg-muted before:z-0">
          
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16">
            <div className="md:w-1/2 md:text-right order-2 md:order-1">
              <h3 className="text-2xl font-bold mb-3">1. Complete your profile</h3>
              <p className="text-muted-foreground leading-relaxed">
                Start by choosing a treatment category and completing a comprehensive medical questionnaire. 
                You'll share your health history, symptoms, and goals—all through our secure, HIPAA-aligned platform.
              </p>
            </div>
            <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground font-display font-bold text-2xl flex items-center justify-center shrink-0 shadow-md border-4 border-background order-1 md:order-2 md:mx-auto">1</div>
            <div className="md:w-1/2 order-3 hidden md:block"></div>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16">
            <div className="md:w-1/2 order-3 hidden md:block"></div>
            <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground font-display font-bold text-2xl flex items-center justify-center shrink-0 shadow-md border-4 border-background order-1 md:order-2 md:mx-auto">2</div>
            <div className="md:w-1/2 order-2 md:order-3">
              <h3 className="text-2xl font-bold mb-3">2. Provider evaluation</h3>
              <p className="text-muted-foreground leading-relaxed">
                A licensed healthcare provider will review your medical profile. If they need more information, 
                they will message you directly. They use this information to determine if a prescription is safe and appropriate for you.
              </p>
            </div>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16">
            <div className="md:w-1/2 md:text-right order-2 md:order-1">
              <h3 className="text-2xl font-bold mb-3">3. Personalized plan</h3>
              <p className="text-muted-foreground leading-relaxed">
                If approved, your provider will customize a treatment plan specific to your needs. 
                The prescription is sent electronically to our licensed pharmacy partner for fulfillment.
              </p>
            </div>
            <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground font-display font-bold text-2xl flex items-center justify-center shrink-0 shadow-md border-4 border-background order-1 md:order-2 md:mx-auto">3</div>
            <div className="md:w-1/2 order-3 hidden md:block"></div>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16">
            <div className="md:w-1/2 order-3 hidden md:block"></div>
            <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground font-display font-bold text-2xl flex items-center justify-center shrink-0 shadow-md border-4 border-background order-1 md:order-2 md:mx-auto">4</div>
            <div className="md:w-1/2 order-2 md:order-3">
              <h3 className="text-2xl font-bold mb-3">4. Free, discreet delivery</h3>
              <p className="text-muted-foreground leading-relaxed">
                Your medication is shipped directly to your door in plain, discreet packaging. 
                Most orders arrive within 3-7 business days. You'll have ongoing access to message your care team.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-32 space-y-16">
          <div className="bg-muted/30 rounded-3xl p-8 md:p-12 border">
            <h3 className="text-2xl font-display font-semibold mb-4">Who are TinyRx providers?</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Online visits are conducted by licensed physicians, nurse practitioners, and physician assistants affiliated with 
              LocumTele, a nationwide telehealth provider network. All providers are licensed in the states where they treat patients.
            </p>
            <p className="text-sm text-primary font-medium">Learn more at locumtele.org</p>
          </div>

          <div className="bg-muted/30 rounded-3xl p-8 md:p-12 border">
            <h3 className="text-2xl font-display font-semibold mb-4">Where is TinyRx available?</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              TinyRx currently serves 47 states. We do not currently serve California, South Carolina, or New Jersey. 
              State availability is subject to change as licensing expands.
            </p>
            <div className="bg-white/50 border border-border h-48 rounded-xl flex items-center justify-center">
              {/* Placeholder for map visual */}
              <span className="text-muted-foreground font-medium uppercase tracking-widest text-sm">Service Area Map</span>
            </div>
          </div>

          <div className="text-center pt-8">
            <Button asChild size="lg" className="rounded-full h-14 px-10 text-lg bg-primary">
              <Link href="/signup">Start your visit</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
