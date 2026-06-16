import React from "react";

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-background pt-12 pb-32">
      <div className="container max-w-3xl mx-auto px-4 md:px-6">
        
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8 text-amber-800 text-sm font-medium">
          DRAFT — ATTORNEY REVIEW REQUIRED. This document is a draft for internal review purposes only and has not been reviewed by legal counsel. Do not rely on this draft as legal advice or publish without attorney review.
        </div>

        <h1 className="text-4xl font-display font-bold mb-4 text-foreground">Refund & Cancellation Policy</h1>
        <p className="text-muted-foreground mb-12">Effective Date: June 1, 2026</p>

        <article className="prose prose-slate max-w-none prose-headings:font-display prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary">
          <h2>1. Prescription Medications</h2>
          <p>
            Due to state and federal safety regulations regarding the handling and dispensing of prescription medications, <strong>we cannot accept returns or issue refunds for prescription products once they have been shipped from the pharmacy.</strong> This applies even if the package remains unopened.
          </p>

          <h2>2. Subscription Billing</h2>
          <p>
            TinyRx offers treatments on a recurring subscription basis. You will be billed automatically according to the cycle of the plan you select.
          </p>

          <h2>3. How to Cancel</h2>
          <p>
            You may cancel your subscription at any time through your account settings on the TinyRx platform, or by contacting our support team. 
            To avoid being charged for your next shipment, you must cancel your subscription <strong>at least 48 hours before your next scheduled billing date</strong>.
          </p>

          <h2>4. Consultation Fees</h2>
          <p>
            If a licensed provider reviews your intake form and determines that treatment is not medically appropriate for you, you will not be charged for the medication, and any authorization holds will be released.
          </p>

          <h2>5. Damaged or Lost Shipments</h2>
          <p>
            If your shipment arrives damaged or if the tracking shows it was lost in transit, please contact our support team within 7 days of the expected delivery date at <strong>support@tinyrx.com</strong>. We will arrange for a replacement shipment to be sent at no additional cost.
          </p>
        </article>
      </div>
    </div>
  );
}
