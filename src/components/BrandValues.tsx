import { Brain, Heart, Eye } from "lucide-react";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { brandValues } from "@/contents/landingPageData";

const iconMap = {
  Intelligent: Brain,
  Empathetic: Heart,
  Visionary: Eye,
};

export default function BrandValues() {
  return (
    <Section background="white">
      <Container>
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <Heading level={2} align="center" className="mb-3 sm:mb-4">
            Our <span className="heading-gradient">Core Values</span>
          </Heading>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400">
            The principles that drive everything we do
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {brandValues.map((value) => {
            const Icon = iconMap[value.title as keyof typeof iconMap];
            return (
              <div
                key={value.title}
                className="group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
              >
                {/* Gradient Accent */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl sm:rounded-t-3xl ${
                    value.color === "primary"
                      ? "bg-[var(--color-primary)]"
                      : value.color === "secondary"
                      ? "bg-[var(--color-secondary)]"
                      : "bg-[var(--color-tertiary)]"
                  }`}
                ></div>

                <div className="mb-4">
                  <Icon 
                    className={`w-12 h-12 sm:w-14 sm:h-14 ${
                      value.color === "primary"
                        ? "text-[var(--color-primary)]"
                        : value.color === "secondary"
                        ? "text-[var(--color-secondary)]"
                        : "text-[var(--color-tertiary)]"
                    }`}
                    strokeWidth={1.5}
                  />
                </div>
                <h3
                  className={`text-xl sm:text-2xl font-bold mb-3 ${
                    value.color === "primary"
                      ? "text-[var(--color-primary)]"
                      : value.color === "secondary"
                      ? "text-[var(--color-secondary)]"
                      : "text-[var(--color-tertiary)]"
                  }`}
                >
                  {value.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">{value.description}</p>

                {/* Decorative Circle */}
                <div
                  className={`absolute -bottom-4 -right-4 w-20 sm:w-24 h-20 sm:h-24 rounded-full opacity-10 group-hover:opacity-20 transition-opacity ${
                    value.color === "primary"
                      ? "bg-[var(--color-primary)]"
                      : value.color === "secondary"
                      ? "bg-[var(--color-secondary)]"
                      : "bg-[var(--color-tertiary)]"
                  }`}
                ></div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
