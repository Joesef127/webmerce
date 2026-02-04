"use client";

import { useState } from "react";
import { Mail, ArrowRight } from "lucide-react";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export default function DemoRequest() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <Section id="demo-request" background="gradient">
      <Container size="md">
        <div className="text-center">
          <Badge icon={Mail} className="mb-6">
            Access is limited during private launch.
          </Badge>
          
          <Heading level={2} align="center" className="mb-4">
            Request <span className="heading-gradient">Demo Access</span>
          </Heading>
          
          {/* <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Access is limited during private launch.
          </p> */}
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-4 max-w-2xl mx-auto">
            Enter your work email to access the live demo and sample reports.
          </p>

          <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@company.com"
                required
                className="flex-1 px-5 py-3 sm:py-4 rounded-full border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:border-[var(--color-primary)] focus:outline-none transition-colors text-base"
              />
              <Button variant="outline" size="lg" type="submit">
                Request Access
              </Button>
            </div>
            
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-4">
              We currently accept business emails only (no Gmail / Yahoo)
            </p>

            {submitted && (
              <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-700 dark:text-green-400 text-sm">
                Thank you! We'll be in touch soon.
              </div>
            )}
          </form>

          {/* <div className="mt-10 sm:mt-12 grid sm:grid-cols-3 gap-6 text-left">
            <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl border-[0.5px] border-[var(--color-primary)]">
              <div className="text-2xl mb-2">📊</div>
              <h4 className="font-bold text-sm sm:text-base mb-1 text-gray-900 dark:text-white">Demo Access</h4>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Live platform walkthrough</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl border-[0.5px] border-[var(--color-primary)]">
              <div className="text-2xl mb-2">📈</div>
              <h4 className="font-bold text-sm sm:text-base mb-1 text-gray-900 dark:text-white">Sample Reports</h4>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Real trust intelligence examples</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl border-[0.5px] border-[var(--color-primary)]">
              <div className="text-2xl mb-2">🎓</div>
              <h4 className="font-bold text-sm sm:text-base mb-1 text-gray-900 dark:text-white">Onboarding</h4>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Personalized setup guidance</p>
            </div>
          </div> */}
        </div>
      </Container>
    </Section>
  );
}
