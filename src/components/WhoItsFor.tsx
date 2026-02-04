import { Store, Package, Brain, Users } from "lucide-react";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { whoItsFor } from "@/contents/landingPageData";

const iconMap = [Store, Package, Brain, Users];

export default function WhoItsFor() {
  return (
    <Section id="who-its-for" background="white">
      <Container>
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <Heading level={2} align="center" className="mb-3 sm:mb-4">
            <span className="heading-gradient">Who It's For</span>
          </Heading>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Built for modern e-commerce teams who need trust intelligence, not vanity metrics
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {whoItsFor.map((item, index) => {
            const Icon = iconMap[index];
            return (
              <div
                key={item.title}
                className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-[var(--color-primary)] group"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-brand rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-bold mb-2 sm:mb-3 text-gray-800 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
