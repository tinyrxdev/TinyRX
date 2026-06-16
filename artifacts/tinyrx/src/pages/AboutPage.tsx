import React from "react";
import { Link } from "wouter";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background pt-20 pb-32">
      <div className="container max-w-3xl mx-auto px-4 md:px-6">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-10 text-foreground">About TinyRx</h1>
        
        <div className="prose prose-lg max-w-none text-muted-foreground">
          <h2 className="text-2xl font-display font-semibold text-foreground mt-12 mb-6">Our Mission</h2>
          <p className="text-xl leading-relaxed text-foreground font-medium">
            Our mission is to make quality healthcare accessible, affordable, and convenient — without compromising on care.
          </p>

          <h2 className="text-2xl font-display font-semibold text-foreground mt-16 mb-6">The Story</h2>
          <p>
            Healthcare is traditionally complicated, expensive, and opaque. We built TinyRx to change that. 
            By combining a streamlined digital platform with licensed medical professionals and top-tier pharmacies, 
            we bypass the waiting rooms and the red tape. 
          </p>
          <p>
            We focus on treatments that improve quality of life—from weight management to hormone optimization—delivering 
            evidence-based care securely to your door.
          </p>

          <h2 className="text-2xl font-display font-semibold text-foreground mt-16 mb-6">Our Medical Standards</h2>
          <p>
            Patient safety and clinical excellence are our highest priorities. TinyRx operates strictly as a 
            technology platform, facilitating connections between patients and independent healthcare entities.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-10 not-prose">
            <div className="bg-muted/30 p-6 rounded-2xl border">
              <h3 className="font-semibold text-foreground text-lg mb-2">Provider Network</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Clinical services are provided by independent, U.S.-licensed healthcare professionals affiliated with LocumTele. 
                Providers operate with complete clinical autonomy.
              </p>
              <a href="https://locumtele.org" target="_blank" rel="noreferrer" className="text-sm text-primary hover:underline">locumtele.org →</a>
            </div>
            
            <div className="bg-muted/30 p-6 rounded-2xl border">
              <h3 className="font-semibold text-foreground text-lg mb-2">Pharmacy Partner</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Medications are dispensed by Rush Pharmacy, a fully licensed U.S. pharmacy facility that adheres to 
                strict quality and safety standards.
              </p>
              <a href="https://rushpharmacy.com" target="_blank" rel="noreferrer" className="text-sm text-primary hover:underline">rushpharmacy.com →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
