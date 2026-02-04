"use client";

import { useState } from "react";
import { Zap, ArrowRight, Check } from "lucide-react";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export default function EarlyAccess() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const benefits = [
    "Demo access",
    "Sample trust reports",
    "Onboarding guidance"
  ];

  return (
    <Section id="early-access" background="gradient" className="py-16 sm:py-20 md:py-24">
      <Container size="md">
        <div className="text-center">
          <Badge icon={Zap} className="mb-6">
            Limited Onboarding
          </Badge>
          
          <Heading level={2} align="center" className="mb-4">
            Request <span className="heading-gradient">Early Access</span>
          </Heading>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            We are onboarding a limited number of brands and agencies during launch.
          </p>

          <form onSubmit={handleSubmit} className="max-w-xl mx-auto mb-10 sm:mb-12">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@company.com"
                required
                className="flex-1 px-5 py-3 sm:py-4 rounded-full border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:border-[var(--color-primary)] focus:outline-none transition-colors text-base"
              />
              <Button variant="filled" size="lg" type="submit">
                Request Access
              </Button>
            </div>

            {submitted && (
              <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-700 dark:text-green-400 text-sm">
                Thank you! We'll be in touch soon.
              </div>
            )}
          </form>

          {/* Approved Users Benefits */}
          <div className="bg-gradient-to-r from-[var(--color-primary)]/10 to-[var(--color-secondary)]/10 dark:from-[var(--color-primary)]/20 dark:to-[var(--color-secondary)]/20 border border-[var(--color-primary)]/20 dark:border-[var(--color-primary)]/30 rounded-2xl p-6 sm:p-8 mt-6">
            <p className="text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-300 mb-4">
              Approved users receive:
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 sm:w-6 sm:h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
