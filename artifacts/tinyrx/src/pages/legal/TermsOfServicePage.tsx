import React from "react";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background pt-12 pb-32">
      <div className="container max-w-3xl mx-auto px-4 md:px-6">
        
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8 text-amber-800 text-sm font-medium">
          DRAFT — ATTORNEY REVIEW REQUIRED. This document is a draft for internal review purposes only and has not been reviewed by legal counsel. Do not rely on this draft as legal advice or publish without attorney review.
        </div>

        <h1 className="text-4xl font-display font-bold mb-4 text-foreground">Terms of Service</h1>
        <p className="text-muted-foreground mb-12">Effective Date: June 1, 2026</p>

        <article className="prose prose-slate max-w-none prose-headings:font-display prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary">
          <p>
            Please read these Terms of Service ("Terms") carefully. By accessing or using the TinyRx platform, you agree to be bound by these Terms.
          </p>

          <h2>1. Acceptance of Terms</h2>
          <p>
            By creating an account or using our services, you agree to these Terms and our Privacy Policy. If you do not agree, you may not use the services.
          </p>

          <h2>2. Eligibility</h2>
          <p>
            You must be at least 18 years old and reside in a state where TinyRx operates to use our services. By using the platform, you represent that you meet these requirements.
          </p>

          <h2>3. Description of Services</h2>
          <p>
            TinyRx is a technology platform that facilitates connections between users, independent healthcare providers (affiliated with LocumTele), and independent pharmacies (such as Rush Pharmacy). <strong>TinyRx does not provide medical advice or care.</strong> All medical care is provided by independent licensed professionals.
          </p>

          <h2>4. No Prescription Guarantee</h2>
          <p>
            Using our platform does not guarantee that you will receive a prescription. Treatment decisions are made solely by independent providers based on their clinical judgment. If a provider determines treatment is not appropriate, you will not be prescribed medication.
          </p>

          <h2>5. Subscriptions and Billing</h2>
          <p>
            Certain services are offered on a subscription basis. By enrolling, you agree to recurring billing. You may cancel your subscription at any time through your account settings.
          </p>

          <h2>6. Prohibited Uses</h2>
          <p>
            You agree not to: (a) provide false medical information; (b) use the services for emergencies; (c) attempt to access data not intended for you; or (d) use the platform for any illegal purpose.
          </p>

          <h2>7. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, TinyRx shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use of the platform.
          </p>

          <h2>8. Governing Law and Arbitration</h2>
          <p>
            These Terms shall be governed by the laws of the State of Florida. Any disputes arising under these terms shall be resolved through binding arbitration in Florida.
          </p>

          <h2>9. Contact</h2>
          <p>
            For legal inquiries, contact: <strong>legal@tinyrx.com</strong>
          </p>
        </article>
      </div>
    </div>
  );
}
