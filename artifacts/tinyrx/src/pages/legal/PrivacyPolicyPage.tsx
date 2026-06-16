import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background pt-12 pb-32">
      <div className="container max-w-3xl mx-auto px-4 md:px-6">
        
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8 text-amber-800 text-sm font-medium">
          DRAFT — ATTORNEY REVIEW REQUIRED. This document is a draft for internal review purposes only and has not been reviewed by legal counsel. Do not rely on this draft as legal advice or publish without attorney review.
        </div>

        <h1 className="text-4xl font-display font-bold mb-4 text-foreground">Privacy Policy</h1>
        <p className="text-muted-foreground mb-12">Effective Date: June 1, 2026</p>

        <article className="prose prose-slate max-w-none prose-headings:font-display prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary">
          <p>
            TinyRx ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our telehealth platform services.
          </p>

          <h2>1. Information We Collect</h2>
          <p>We may collect information about you in a variety of ways. The information we may collect includes:</p>
          <ul>
            <li><strong>Personal Data:</strong> Name, email address, physical address, phone number, date of birth, and payment information.</li>
            <li><strong>Health Information:</strong> Medical history, current symptoms, prior treatments, and other health-related data you provide during the intake process.</li>
            <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the site, such as your IP address, browser type, and operating system.</li>
          </ul>

          <h2>2. HIPAA and Protected Health Information (PHI)</h2>
          <p>
            When you use our services to consult with a healthcare provider, the health information you provide may be considered Protected Health Information (PHI) under the Health Insurance Portability and Accountability Act (HIPAA). We are committed to maintaining the privacy and security of your PHI in accordance with applicable laws. We implement administrative, physical, and technical safeguards to protect your PHI.
          </p>

          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Facilitate telehealth consultations with independent, licensed healthcare providers.</li>
            <li>Process payments and manage your account.</li>
            <li>Communicate with you regarding appointments, prescriptions, and customer support.</li>
            <li>Improve our platform and user experience.</li>
          </ul>
          <p><strong>We do not sell your Personal Data or Protected Health Information to third parties.</strong></p>

          <h2>4. Data Security</h2>
          <p>
            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide, please be aware that despite our efforts, no security measures are perfect or impenetrable.
          </p>

          <h2>5. Your Rights</h2>
          <p>
            Depending on your state of residence, you may have specific rights regarding your personal data, including the right to request access to, correction of, or deletion of your information. 
          </p>

          <h2>6. Children's Privacy</h2>
          <p>
            Our services are not intended for use by individuals under the age of 18. We do not knowingly collect personal information from children under 18.
          </p>

          <h2>7. Contact Us</h2>
          <p>
            If you have questions or comments about this Privacy Policy, please contact us at: <br/>
            <strong>privacy@tinyrx.com</strong>
          </p>
        </article>
      </div>
    </div>
  );
}
