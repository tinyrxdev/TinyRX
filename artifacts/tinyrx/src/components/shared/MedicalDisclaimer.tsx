import React from "react";

export default function MedicalDisclaimer() {
  return (
    <div className="bg-muted/50 py-12 px-4 md:px-6">
      <div className="container max-w-5xl mx-auto">
        <p className="text-sm text-muted-foreground leading-relaxed text-center italic">
          The information provided on this website is for general informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of a licensed physician or qualified health provider with any questions regarding a medical condition. Products and services referenced are available only following an online consultation with a licensed healthcare provider who will determine if treatment is appropriate. Individual results may vary.
        </p>
      </div>
    </div>
  );
}
