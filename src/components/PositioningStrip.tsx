import { Shield } from "lucide-react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";

export default function PositioningStrip() {
  return (
    <Section className="relative py-20 sm:py-24 md:py-28 lg:py-32 overflow-hidden">
      {/* Background Image with Overlay - Fixed attachment for parallax effect */}
      <div 
        className="absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/picture_bg.png)',
        }}
      >
        {/* Fallback colored background if image doesn't load */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-tertiary)] via-gray-900 to-gray-800 -z-10"></div>
      </div>

      <div className="absolute inset-0 bg-black/60 dark:bg-black/70"></div>

      <Container size="lg" className="relative z-10">
        <div className="flex flex-col items-center justify-center space-y-6 sm:space-y-8">
          <Badge icon={Shield} variant="overlay">
            Trust Intelligence for Modern Commerce
          </Badge>
          
          <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-4xl mx-auto leading-relaxed">
            Webmerce Analytics measures{" "}
            <span className="font-bold text-[var(--color-primary)]">trust reliability</span>,{" "}
            <span className="font-bold text-[var(--color-primary)]">risk momentum</span>, and{" "}
            <span className="font-bold text-[var(--color-primary)]">customer evidence</span>{" "}
            the signals that actually move revenue.
          </p>
        </div>
      </Container>
    </Section>
  );
}
