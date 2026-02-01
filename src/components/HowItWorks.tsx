"use client";

import { useState } from "react";
import { Database, Cpu, LineChart, Rocket } from "lucide-react";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { howItWorksSteps } from "@/contents/landingPageData";

const iconMap = [Database, Cpu, LineChart, Rocket];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <Section id="how-it-works" background="white">
      <Container>
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <Heading level={2} align="center" className="mb-3 sm:mb-4">
            How <span className="heading-gradient">It Works</span>
          </Heading>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400">
            Get started in 4 simple steps
          </p>
        </div>

        {/* Desktop View */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {howItWorksSteps.map((step, index) => {
            const Icon = iconMap[index];
            return (
              <div
                key={index}
                className="relative group cursor-pointer"
                onMouseEnter={() => setActiveStep(index)}
              >
                {/* Connection Line */}
                {index < howItWorksSteps.length - 1 && (
                  <div className="absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] opacity-30 group-hover:opacity-100 transition-opacity"></div>
                )}

                <div
                  className={`relative bg-white dark:bg-gray-800 h-full rounded-xl lg:rounded-2xl p-4 lg:p-6 border-2 transition-all duration-300 ${
                    activeStep === index
                      ? "border-[var(--color-primary)] shadow-xl scale-105"
                      : "border-gray-200 dark:border-gray-700 hover:border-[var(--color-primary)]/50"
                  }`}
                >
                  <div
                    className={`text-4xl lg:text-6xl font-bold mb-4 transition-all ${
                      activeStep === index
                        ? "heading-gradient"
                        : "text-gray-200"
                    }`}
                  >
                    {step.number}
                  </div>
                  <Icon
                    className={`w-8 h-8 mb-3 ${activeStep === index ? "text-[var(--color-primary)]" : "text-gray-400"}`}
                    strokeWidth={1.5}
                  />
                  <h3 className="text-lg lg:text-xl font-bold mb-2 text-[var(--color-tertiary)] dark:text-gray-100">
                    {step.title}
                  </h3>
                  <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {step.description}
                  </p>
                  <div className="space-y-1">
                    {step.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center space-x-2 text-xs"
                      >
                        <div className="w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full"></div>
                        <span className="text-gray-500 dark:text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile View */}
        <div className="md:hidden space-y-6">
          {howItWorksSteps.map((step, index) => {
            const Icon = iconMap[index];
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-xl sm:rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-700"
              >
                <div className="text-4xl sm:text-5xl font-bold heading-gradient mb-3">
                  {step.number}
                </div>
                <Icon
                  className="w-10 h-10 text-[var(--color-primary)] mb-3"
                  strokeWidth={1.5}
                />
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-[var(--color-tertiary)] dark:text-gray-100">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4">
                  {step.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {step.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs sm:text-sm rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
