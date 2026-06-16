import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("tinyrx_cookie_consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    localStorage.setItem("tinyrx_cookie_consent", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 pb-safe bg-background border-t shadow-[0_-4px_20px_rgba(0,0,0,0.05)] transform transition-transform duration-300">
      <div className="container max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground text-center sm:text-left flex-1">
          We use cookies to improve your experience and analyze site traffic. See our{" "}
          <Link href="/privacy-policy" className="text-primary hover:underline font-medium">Privacy Policy</Link>.
        </p>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <Button variant="outline" onClick={handleDismiss} className="w-full sm:w-auto rounded-full">
            Manage Preferences
          </Button>
          <Button onClick={handleDismiss} className="w-full sm:w-auto rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
            Accept All
          </Button>
        </div>
      </div>
    </div>
  );
}
