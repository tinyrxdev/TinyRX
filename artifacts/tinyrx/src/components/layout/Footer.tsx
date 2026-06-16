import React from "react";
import { Link } from "wouter";
import { Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-16">
          <div className="flex flex-col space-y-4">
            <Link href="/">
              <img src="/tinyrx-logo.png" alt="TinyRx" className="h-8 w-auto" />
            </Link>
            <p className="font-display font-medium text-foreground">Modern Care. Delivered.</p>
            <p className="text-sm text-muted-foreground">
              Accessible, online telehealth and treatment plans shipped directly to your door.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Treatments</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/treatments/weight-loss" className="hover:text-primary transition-colors">Weight Loss</Link></li>
              <li><Link href="/treatments/peptides" className="hover:text-primary transition-colors">Peptide Therapy</Link></li>
              <li><Link href="/treatments/ed" className="hover:text-primary transition-colors">ED & Performance</Link></li>
              <li><Link href="/treatments/trt" className="hover:text-primary transition-colors">TRT / Hormone Health</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="mailto:support@tinyrx.com" className="hover:text-primary transition-colors">Contact</a></li>
              <li><Link href="/how-it-works" className="hover:text-primary transition-colors">How It Works</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Legal</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="/telehealth-consent" className="hover:text-primary transition-colors">Telehealth Consent</Link></li>
              <li><Link href="/refund-policy" className="hover:text-primary transition-colors">Refund Policy</Link></li>
              <li><Link href="/accessibility" className="hover:text-primary transition-colors">Accessibility</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border flex flex-col items-center gap-6">
          <div className="space-y-4 text-xs text-muted-foreground italic text-center max-w-4xl">
            <p>1. TinyRx is not an insurance product. TinyRx provides access to telehealth services and is not a pharmacy. Prescription products are dispensed by licensed pharmacies and only if prescribed by a licensed healthcare provider following an online consultation.</p>
            <p>2. Not all patients will be prescribed treatment. A licensed provider will determine if treatment is appropriate following your online visit.</p>
            <p>3. If you are experiencing a medical emergency, call 911 or go to your nearest emergency room. TinyRx is not for emergency medical needs.</p>
            <p>4. Compounded medications are not reviewed by the FDA for safety, effectiveness, or quality.</p>
            <p>5. Results vary by individual. Statements on this site have not been evaluated by the FDA and are not intended to diagnose, treat, cure, or prevent any disease, unless discussing an FDA-approved medication's approved indication.</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between w-full pt-4">
            <p className="text-sm text-muted-foreground">© 2026 TinyRx. All rights reserved.</p>
            <a href="mailto:support@tinyrx.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">support@tinyrx.com</a>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
