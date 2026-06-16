import React from "react";

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-background pt-12 pb-32">
      <div className="container max-w-3xl mx-auto px-4 md:px-6">
        
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8 text-amber-800 text-sm font-medium">
          DRAFT — ATTORNEY REVIEW REQUIRED. This document is a draft for internal review purposes only and has not been reviewed by legal counsel. Do not rely on this draft as legal advice or publish without attorney review.
        </div>

        <h1 className="text-4xl font-display font-bold mb-4 text-foreground">Accessibility Statement</h1>
        <p className="text-muted-foreground mb-12">Effective Date: June 1, 2026</p>

        <article className="prose prose-slate max-w-none prose-headings:font-display prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary">
          <p>
            TinyRx is committed to making our website's content accessible and user-friendly to everyone. 
          </p>
          <p>
            If you are having difficulty viewing or navigating the content on this website, or notice any content, feature, or functionality that you believe is not fully accessible to people with disabilities, please email our team at <strong>accessibility@tinyrx.com</strong> with "Disabled Access" in the subject line and provide a description of the specific feature you feel is not fully accessible or a suggestion for improvement.
          </p>
          <p>
            We take your feedback seriously and will consider it as we evaluate ways to accommodate all of our customers and our overall accessibility policies. 
          </p>
          <p>
            Additionally, while we do not control such vendors, we strongly encourage vendors of third-party digital content to provide content that is accessible and user-friendly. We are continually striving to align our web presence with the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards.
          </p>
        </article>
      </div>
    </div>
  );
}
