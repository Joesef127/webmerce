import { Store, Package, Brain, Building } from "lucide-react";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { clientOutputs } from "@/contents/landingPageData";

const iconComponents = {
  Store,
  Package,
  Brain,
  Building,
};

export default function ClientOutputs() {
  return (
    <Section id="client-outputs" background="dark">
      <Container>
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <Heading level={2} align="center" className="mb-3 sm:mb-4">
            One Engine. <br/><span className="heading-gradient">Multiple Client Views.</span>
          </Heading>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Webmerce Analytics adapts output framing without changing logic
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {clientOutputs.map((output) => {
            const Icon = iconComponents[output.icon as keyof typeof iconComponents];
            return (
              <div
                key={output.title}
                className="bg-white/5 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-[var(--color-primary)] hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-brand rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" strokeWidth={2} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-white">
                  {output.title}
                </h3>
                <ul className="space-y-2 sm:space-y-3">
                  {output.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2 text-sm sm:text-base text-gray-300">
                      <span className="text-[var(--color-primary)] mt-1 flex-shrink-0">●</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
