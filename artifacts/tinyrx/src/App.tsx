import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import HomePage from "@/pages/HomePage";
import WeightLossPage from "@/pages/treatments/WeightLossPage";
import PeptidesPage from "@/pages/treatments/PeptidesPage";
import EDPage from "@/pages/treatments/EDPage";
import TRTPage from "@/pages/treatments/TRTPage";
import HowItWorksPage from "@/pages/HowItWorksPage";
import AboutPage from "@/pages/AboutPage";
import FAQPage from "@/pages/FAQPage";
import LoginPage from "@/pages/auth/LoginPage";
import SignupPage from "@/pages/auth/SignupPage";
import PrivacyPolicyPage from "@/pages/legal/PrivacyPolicyPage";
import TermsOfServicePage from "@/pages/legal/TermsOfServicePage";
import TelehealthConsentPage from "@/pages/legal/TelehealthConsentPage";
import RefundPolicyPage from "@/pages/legal/RefundPolicyPage";
import AccessibilityPage from "@/pages/legal/AccessibilityPage";
import NotFound from "@/pages/not-found";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/shared/CookieBanner";

const queryClient = new QueryClient();

function Router() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/treatments/weight-loss" component={WeightLossPage} />
        <Route path="/treatments/peptides" component={PeptidesPage} />
        <Route path="/treatments/ed" component={EDPage} />
        <Route path="/treatments/trt" component={TRTPage} />
        <Route path="/how-it-works" component={HowItWorksPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/faq" component={FAQPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/privacy-policy" component={PrivacyPolicyPage} />
        <Route path="/terms-of-service" component={TermsOfServicePage} />
        <Route path="/telehealth-consent" component={TelehealthConsentPage} />
        <Route path="/refund-policy" component={RefundPolicyPage} />
        <Route path="/accessibility" component={AccessibilityPage} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
      <CookieBanner />
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
