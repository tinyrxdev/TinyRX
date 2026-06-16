import React from "react";

export default function TelehealthConsentPage() {
  return (
    <div className="min-h-screen bg-background pt-12 pb-32">
      <div className="container max-w-3xl mx-auto px-4 md:px-6">
        
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8 text-amber-800 text-sm font-medium">
          DRAFT — ATTORNEY REVIEW REQUIRED. This document is a draft for internal review purposes only and has not been reviewed by legal counsel. Do not rely on this draft as legal advice or publish without attorney review.
        </div>

        <h1 className="text-4xl font-display font-bold mb-4 text-foreground">Telehealth Consent</h1>
        <p className="text-muted-foreground mb-12">Effective Date: June 1, 2026</p>

        <article className="prose prose-slate max-w-none prose-headings:font-display prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary">
          <p>
            This Telehealth Consent informs you about the use of telehealth services facilitated through the TinyRx platform.
          </p>

          <h2>1. What is Telehealth?</h2>
          <p>
            Telehealth involves the delivery of healthcare services using electronic communications, information technology, or other means between a healthcare provider and a patient who are not in the same physical location. Telehealth may be used for diagnosis, treatment, follow-up, and patient education.
          </p>

          <h2>2. Expected Benefits</h2>
          <p>
            Benefits of telehealth include easier and more efficient access to medical care, eliminating the need to travel to a clinic, and the convenience of obtaining prescriptions and communicating with providers online.
          </p>

          <h2>3. Possible Risks</h2>
          <p>
            While telehealth is generally safe, risks include:
          </p>
          <ul>
            <li>Information transmitted may not be sufficient (e.g., poor image quality) to allow for appropriate medical decision-making.</li>
            <li>Delays in medical evaluation and treatment could occur due to deficiencies or failures of the equipment.</li>
            <li>In rare cases, security protocols could fail, causing a breach of privacy of personal medical information.</li>
            <li>A lack of access to complete medical records may result in adverse drug interactions or allergic reactions.</li>
          </ul>

          <h2>4. Provider Review and Discretion</h2>
          <p>
            By consenting, you understand that the independent healthcare provider will review your submitted health information. The provider may determine that telehealth is not appropriate for your specific condition and may recommend that you seek in-person medical care.
          </p>

          <h2>5. Emergency Situations</h2>
          <p>
            <strong>IF YOU ARE EXPERIENCING A MEDICAL EMERGENCY, YOU SHOULD CALL 911 OR GO TO THE NEAREST EMERGENCY ROOM.</strong> The TinyRx platform and telehealth services are not designed for handling medical emergencies.
          </p>

          <h2>6. Patient Rights</h2>
          <p>
            You have the right to withhold or withdraw your consent to the use of telehealth at any time without affecting your right to future care. You have the right to access your medical information and copies of medical records in accordance with applicable state and federal law.
          </p>
        </article>
      </div>
    </div>
  );
}
