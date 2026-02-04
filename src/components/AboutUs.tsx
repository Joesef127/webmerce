import { Building2, CheckCircle2 } from "lucide-react";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

export default function AboutUs() {
  const combines = [
    "Structured KPIs",
    "Real customer language",
    "Agent-based reasoning",
  ];

  const helps = [
    "Protect revenue",
    "Protect reputation",
    "Maintain long-term customer confidence",
  ];

  return (
    <Section id="about" background="white">
      <Container size="md">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-tertiary)]/10 dark:bg-[var(--color-tertiary)]/20 text-[var(--color-tertiary)] rounded-full text-sm font-medium mb-6">
            <Building2 className="w-4 h-4" />
            <span>About Us</span>
          </div>
          
          <Heading level={2} align="center" className="mb-6">
            About <span className="heading-gradient">Webmerce Analytics</span>
          </Heading>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            An early-stage trust intelligence platform for e-commerce
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {/* What We Combine */}
          <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-gray-800 dark:text-white">We Combine</h3>
            <ul className="space-y-4">
              {combines.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                  <span className="text-base sm:text-lg text-gray-600 dark:text-gray-400">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What We Help With */}
          <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 text-gray-800 dark:text-white">We Help Brands</h3>
            <ul className="space-y-4">
              {helps.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-[var(--color-secondary)] flex-shrink-0 mt-0.5" />
                  <span className="text-base sm:text-lg text-gray-600 dark:text-gray-400">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Private Launch Badge */}
        <div className="mt-10 sm:mt-12 text-center">
          <div className="inline-block bg-gradient-brand px-8 py-4 rounded-2xl shadow-xl">
            <p className="text-white font-bold text-lg sm:text-xl">
              We are currently in private launch with selected partners
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
