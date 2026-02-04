import { Layers, BarChart3, Target, AlertTriangle } from "lucide-react";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { upcomingProducts } from "@/contents/landingPageData";

const iconComponents = {
  Layers,
  BarChart3,
  Target,
  AlertTriangle,
};

export default function UpcomingProducts() {
  return (
    <Section id="upcoming-products" background="white">
      <Container>
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-secondary)]/10 dark:bg-[var(--color-secondary)]/20 text-[var(--color-secondary)] rounded-full text-sm font-medium mb-6">
            <Layers className="w-4 h-4" />
            <span>Coming Soon</span>
          </div>
          
          <Heading level={2} align="center" className="mb-3 sm:mb-4">
            Upcoming <span className="heading-gradient">Products</span>
          </Heading>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-4">
            Each module is designed for explainability, accountability, and decision-making not dashboards for vanity metrics.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {upcomingProducts.map((product) => {
            const Icon = iconComponents[product.icon as keyof typeof iconComponents];
            return (
              <div
                key={product.title}
                className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-[var(--color-primary)] group"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-brand rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-2">
                      {product.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {product.description}
                </p>

                <div className="space-y-2">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">{product.action}:</p>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-400">
                        <span className="text-[var(--color-primary)] mt-1 flex-shrink-0">●</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
