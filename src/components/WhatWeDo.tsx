import { Check } from "lucide-react";
import Image from "next/image";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

export default function WhatWeDo() {
  const transforms = [
    "Composite Trust Scores (beyond star ratings)",
    "Quarter-over-quarter trust momentum",
    "Evidence-backed explanations",
    "Risk detection and alerts",
  ];

  const questions = [
    { old: "Are reviews positive?", new: "Is customer trust strengthening or weakening and why?" }
  ];

  return (
    <Section id="what-we-do" background="dark">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
        <div className="absolute top-10 sm:top-20 right-5 sm:right-10 w-48 sm:w-64 h-48 sm:h-64 border-4 border-[var(--color-primary)] rounded-full"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-16 sm:right-32 w-24 sm:w-32 h-24 sm:h-32 bg-[var(--color-primary)] rounded-full"></div>
      </div>
      
      <Container size="lg" className="relative z-10">
        <div className="grid md:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-center">
          {/* Left - Logo/Visual */}
          <div className="relative">
            <div className="w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 mx-auto md:mx-0 relative">
              <div className="absolute inset-0 bg-gradient-brand rounded-full opacity-20 blur-2xl"></div>
              <div className="relative w-full h-full rounded-full flex items-center justify-center transition-transform hover:scale-110 overflow-hidden bg-white dark:bg-gray-100 p-3 sm:p-4">
                <Image 
                  src="/webmerce_logo.png" 
                  alt="Webmerce Analytics" 
                  width={120} 
                  height={120}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute -top-3 sm:-top-4 -left-3 sm:-left-4 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 bg-[var(--color-primary)] rounded-full"></div>
            </div>
          </div>
          
          {/* Right - Content */}
          <div className="space-y-4 sm:space-y-6">
            <Heading level={2}>
              What We <span className="heading-gradient">Do</span>
            </Heading>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
              Webmerce Analytics transforms customer reviews into quarterly trust intelligence, combining:
            </p>
            
            {/* Transforms List */}
            <div className="space-y-3 sm:space-y-4 pt-2">
              {transforms.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className={`w-6 h-6 ${index % 2 === 0 ? 'bg-[var(--color-primary)]' : 'bg-[var(--color-secondary)]'} rounded-full flex items-center justify-center flex-shrink-0 mt-1`}>
                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                  </div>
                  <p className="text-sm sm:text-base text-gray-300">{item}</p>
                </div>
              ))}
            </div>

            {/* Questions Comparison */}
            <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-white/5 rounded-xl border border-white/10">
              <p className="text-sm text-gray-400 mb-2 line-through">Instead of asking:</p>
              <p className="text-base sm:text-lg text-gray-300 mb-4 italic">&quot;{questions[0].old}&quot;</p>
              
              <p className="text-sm text-[var(--color-primary)] mb-2">We answer:</p>
              <p className="text-base sm:text-lg text-white font-semibold italic">&quot;{questions[0].new}&quot;</p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
