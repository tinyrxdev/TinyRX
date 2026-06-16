import React from "react";
import FAQAccordion from "@/components/shared/FAQAccordion";

const allFaqs = [
  { 
    q: "What states does TinyRx serve?", 
    answer: "TinyRx currently serves 47 states. We do not currently serve California, South Carolina, or New Jersey. State availability is subject to change as licensing expands." 
  },
  { 
    q: "Who are TinyRx's pharmacy partners?", 
    answer: (
      <span>
        Medications prescribed through TinyRx are dispensed by Rush Pharmacy, a licensed U.S. pharmacy. You can learn more at <a href="https://rushpharmacy.com" className="text-primary hover:underline" target="_blank" rel="noreferrer">rushpharmacy.com</a>.
      </span>
    )
  },
  { 
    q: "Who is TinyRx's provider network?", 
    answer: (
      <span>
        Online visits are conducted by independent, licensed healthcare providers affiliated with LocumTele, a nationwide telehealth provider network. You can learn more at <a href="https://locumtele.org" className="text-primary hover:underline" target="_blank" rel="noreferrer">locumtele.org</a>.
      </span>
    )
  },
  { 
    q: "How do online consultations work?", 
    answer: "You'll complete a comprehensive health questionnaire. A licensed provider will review your medical history and symptoms. They may reach out via secure messaging if they need clarification. If treatment is appropriate, they will create a personalized plan and send a prescription to the pharmacy." 
  },
  { 
    q: "How long does shipping take?", 
    answer: "Most orders ship within 1–3 business days after provider approval, with delivery in 3–7 business days. All orders ship in discreet, unmarked packaging." 
  },
  { 
    q: "What is TinyRx's refund and cancellation policy?", 
    answer: (
      <span>
        Subscriptions can be canceled anytime. However, prescription medications are generally non-refundable once they have been shipped from the pharmacy due to safety regulations. See our <a href="/refund-policy" className="text-primary hover:underline">Refund Policy</a> for full details.
      </span>
    )
  },
  { 
    q: "Do I need insurance?", 
    answer: "No. TinyRx operates strictly on a self-pay basis. We offer transparent pricing that includes your consultation and medication. We do not accept or process insurance." 
  },
  { 
    q: "Is my health information kept private?", 
    answer: (
      <span>
        Yes. We use industry-standard encryption and operate in alignment with HIPAA guidelines to protect your personal health information. See our <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>.
      </span>
    )
  },
  { 
    q: "What if my provider doesn't prescribe anything for me?", 
    answer: "Treatment decisions are made solely by the licensed provider based on their independent clinical judgment. Not everyone will qualify for a prescription. If you don't qualify, you will not be charged for medication." 
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background pt-20 pb-32">
      <div className="container max-w-3xl mx-auto px-4 md:px-6">
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">Frequently Asked Questions</h1>
        <p className="text-lg text-muted-foreground mb-12">
          Everything you need to know about TinyRx, our providers, and how it works.
        </p>
        
        <div className="bg-card rounded-2xl border p-4 md:p-8 shadow-sm">
          <FAQAccordion items={allFaqs} />
        </div>
      </div>
    </div>
  );
}
