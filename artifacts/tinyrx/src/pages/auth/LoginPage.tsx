import React from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/20 px-4 py-20">
      <div className="w-full max-w-md bg-card border rounded-3xl p-8 shadow-sm">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-display font-semibold mb-2">Welcome back</h1>
          <p className="text-muted-foreground">Log in to manage your treatment</p>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@example.com" className="h-12 rounded-xl" required />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <a href="#" className="text-sm text-primary hover:underline">Forgot password?</a>
              </div>
              <Input id="password" type="password" className="h-12 rounded-xl" required />
            </div>
          </div>

          <Button type="submit" className="w-full h-12 rounded-xl bg-primary text-primary-foreground font-medium text-base">
            Log In
          </Button>
        </form>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>Don't have an account? <Link href="/signup" className="text-primary font-medium hover:underline">Get started →</Link></p>
        </div>
        
        <div className="mt-12 text-center text-xs text-muted-foreground/60 flex items-center justify-center gap-4">
          <Link href="/privacy-policy" className="hover:text-foreground">Privacy Policy</Link>
          <Link href="/terms-of-service" className="hover:text-foreground">Terms of Service</Link>
        </div>
      </div>
    </div>
  );
}
