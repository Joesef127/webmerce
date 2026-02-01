import { ArrowRight, Calendar } from "lucide-react";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { benefits } from "@/contents/landingPageData";

export default function Benefits() {
  return (
    <Section id="benefits" background="dark">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-[var(--color-primary)] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-[var(--color-secondary)] rounded-full blur-3xl"></div>
      </div>

      <Container className="relative z-10">
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <Heading level={2} align="center" className="mb-3 sm:mb-4">
            Proven <span className="heading-gradient">Results</span>
          </Heading>
          <p className="text-base sm:text-lg md:text-xl text-gray-300">
            Real impact for e-commerce brands
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2"
            >
              <div
                className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-3 ${
                  benefit.color === "primary"
                    ? "text-[var(--color-primary)]"
                    : benefit.color === "secondary"
                    ? "text-[var(--color-secondary)]"
                    : "text-white"
                }`}
              >
                {benefit.stat}
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">{benefit.label}</h3>
              <p className="text-gray-400 text-xs sm:text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 sm:mt-20 text-center">
          <div className="bg-gradient-brand rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/20 to-[var(--color-secondary)]/20"></div>
            <div className="relative z-10">
              <Heading level={3} align="center" className="mb-3 sm:mb-4">
                Ready to Transform Your Customer Insights?
              </Heading>
              <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Join leading DTC and FBA brands using emotion intelligence to drive growth
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button 
                  variant="filled" 
                  size="lg" 
                  icon={ArrowRight} 
                  iconPosition="right"
                  className="bg-white !text-[var(--color-primary)] hover:!bg-white/90"
                >
                  Start Free Trial
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  icon={Calendar}
                  className="!border-white !text-white hover:!bg-white hover:!text-[var(--color-primary)]"
                >
                  Schedule Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
