"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Badge from "@/components/ui/Badge";
import { faqItems } from "@/contents/landingPageData";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(-1);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <Section id="faq" background="white">
      <Container>
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-10">
          <Badge icon={HelpCircle}>Help & Support</Badge>
        </div>

        <div className="flex justify-center items-center mb-10 sm:mb-12 md:mb-14 lg:mb-16">
          <Heading level={2} className="text-center!">
            Frequently Asked <br /><span className="heading-gradient">Questions</span>
          </Heading>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="border-b border-gray-200 dark:border-gray-700 last:border-b-0"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="py-4 sm:py-6 md:py-7 w-full flex items-start justify-between gap-4 text-left hover:opacity-70 transition-opacity duration-200 group"
              >
                <span className="text-base sm:text-lg md:text-lg font-semibold text-gray-900 dark:text-white group-hover:text-[var(--color-primary)] transition-colors duration-200 flex-1 pr-2">
                  {item.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp
                    className={`w-5 h-5 sm:w-6 sm:h-6 text-[var(--color-primary)] flex-shrink-0 transition-transform duration-300`}
                  />
                ) : (
                  <ChevronDown
                    className={`w-5 h-5 sm:w-6 sm:h-6 text-[var(--color-primary)] flex-shrink-0 transition-transform duration-300`}
                  />
                )}
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                {openIndex === index && (
                  <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed pb-4 sm:pb-5 md:pb-6 pr-8 sm:pr-10">
                    {item.answer}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 text-center">
          <p className="text-base text-gray-600 dark:text-gray-400 mb-6">
            Still have questions?
          </p>
          <a
            href="mailto:hello@webmerce.ai?subject=Support%20Request&body=Please%20describe%20your%20issue."
            className="inline-flex items-center justify-center px-8 sm:px-10 py-3 sm:py-4 bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90 text-gray-900 font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-[var(--color-primary)]/30"
          >
            Contact Us
          </a>
        </div>
      </Container>
    </Section>
  );
}
