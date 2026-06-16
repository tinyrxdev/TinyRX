import React from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/20 px-4 py-20">
      <div className="w-full max-w-lg bg-card border rounded-3xl p-8 shadow-sm">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-display font-semibold mb-2">Get Started</h1>
          <p className="text-muted-foreground">Create an account to start your assessment</p>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="Legal Name" className="h-12 rounded-xl" required />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@example.com" className="h-12 rounded-xl" required />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" className="h-12 rounded-xl" required />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="dob">Date of Birth</Label>
                <Input id="dob" type="date" className="h-12 rounded-xl" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="state">State</Label>
                <Select required>
                  <SelectTrigger id="state" className="h-12 rounded-xl">
                    <SelectValue placeholder="Select State" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="NY">New York</SelectItem>
                    <SelectItem value="TX">Texas</SelectItem>
                    <SelectItem value="FL">Florida</SelectItem>
                    <SelectItem value="IL">Illinois</SelectItem>
                    {/* Placeholder for states */}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="bg-blue-50/50 border border-blue-100 p-4 rounded-xl text-xs text-blue-800">
            You must be 18 or older and a resident of a state where TinyRx operates to create an account.
          </div>

          <div className="flex items-start space-x-3">
            <Checkbox id="terms" className="mt-1" required />
            <label htmlFor="terms" className="text-sm text-muted-foreground leading-snug cursor-pointer">
              I agree to the <Link href="/terms-of-service" className="text-primary hover:underline">Terms of Service</Link>, <Link href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</Link>, and <Link href="/telehealth-consent" className="text-primary hover:underline">Telehealth Consent</Link>.
            </label>
          </div>

          <Button type="submit" className="w-full h-12 rounded-xl bg-primary text-primary-foreground font-medium text-base mt-4">
            Create Account
          </Button>
        </form>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>Already have an account? <Link href="/login" className="text-primary font-medium hover:underline">Log in →</Link></p>
        </div>
      </div>
    </div>
  );
}
