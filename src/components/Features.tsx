import { BarChart3, Target, RotateCcw, Lightbulb, TrendingUp, Users } from "lucide-react";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { features } from "@/contents/landingPageData";

const iconMap = [BarChart3, Target, RotateCcw, Lightbulb, TrendingUp, Users];

export default function Features() {
  return (
    <Section id="features" background="gradient">
      <Container>
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <Heading level={2} align="center" className="mb-3 sm:mb-4">
            Powerful <span className="heading-gradient">Features</span>
          </Heading>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Everything you need to transform customer feedback into actionable insights
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const Icon = iconMap[index];
            return (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
              >
                <div className="text-[var(--color-primary)] mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-10 h-10 sm:w-12 sm:h-12" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-[var(--color-tertiary)] dark:text-gray-100">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
