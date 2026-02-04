import { Check } from "lucide-react";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { whyDifferent } from "@/contents/landingPageData";

export default function WhyDifferent() {
  return (
    <Section id="why-different" background="gradient">
      <Container>
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <Heading level={2} align="center" className="mb-3 sm:mb-4">
            Why Teams Choose <br /><span className="heading-gradient">Webmerce Analytics</span>
          </Heading>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Built different from the ground up
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-4 md:gap-6 max-w-5xl mx-auto">
          {whyDifferent.map((item, index) => (
            <div
              key={item.title}
              className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-[var(--color-primary)]"
            >
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-brand rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-5 h-5 text-white" strokeWidth={3} />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 heading-gradient">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
