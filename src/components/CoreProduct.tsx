import {
  Shield,
  TrendingUp,
  AlertTriangle,
  MessageSquare,
  FileText,
} from "lucide-react";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import {
  coreProductFeatures,
  exampleSignals,
} from "@/contents/landingPageData";
import Badge from "@/components/ui/Badge";

const iconMap = [Shield, TrendingUp, AlertTriangle, MessageSquare, FileText];

export default function CoreProduct() {
  return (
    <Section id="core-product" background="white">
      <Container>
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <Badge icon={Shield} className="mb-4">
            The foundation of Webmerce Analytics
          </Badge>

          <Heading level={2} align="center" className="mb-3 sm:mb-4">
            Autonomous Review <br />{" "}
            <span className="heading-gradient">Monitoring Agent™</span>
          </Heading>
        </div>
        <div>
          <Heading level={4} align="center" className="mb-3 sm:mb-6">
            What It Does:
          </Heading>
          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {coreProductFeatures.map((feature, index) => {
              const Icon = iconMap[index];
              return (
                <div
                  key={feature.title}
                  className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-[var(--color-primary)] group"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-brand rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                    <Icon
                      className="w-6 h-6 sm:w-7 sm:h-7 text-white"
                      strokeWidth={2}
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-800 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Example Signals */}
        <div className="bg-gradient-to-br from-[var(--color-tertiary)] to-[var(--color-tertiary)]/90 dark:from-[var(--color-secondary)]/20 dark:to-[var(--color-secondary)]/10 p-8 sm:p-10 md:p-12 rounded-3xl text-white dark:text-gray-100 border-0 dark:border dark:border-[var(--color-secondary)]/30">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3">
              Example Signals Detected
            </h3>
            <p className="text-white/80 dark:text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
              Real customer phrases our AI identifies and analyzes, never
              fabricated
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
            {exampleSignals.map((signal, index) => (
              <div
                key={index}
                className="bg-white/10 dark:bg-[var(--color-secondary)]/20 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-white/20 dark:border-[var(--color-secondary)]/40 hover:bg-white/15 dark:hover:bg-[var(--color-secondary)]/30 transition-all"
              >
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-400 dark:bg-[var(--color-primary)] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm sm:text-base italic text-white/90 dark:text-gray-300">
                    &quot;{signal}&quot;
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-sm sm:text-base text-white/80 dark:text-gray-400 font-medium">
              Every insight is backed by{" "}
              <span className="text-[var(--color-primary)] dark:text-[var(--color-primary)] font-bold">
                verbatim customer phrases,
              </span>{" "}
              never fabricated.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
