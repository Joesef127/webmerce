import { Rocket, Play, TrendingUp } from "lucide-react";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { brandValues } from "@/contents/landingPageData";

export default function Hero() {
  return (
    <Section className="pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-12 sm:pb-16 md:pb-20 lg:pb-24 bg-gradient-to-br from-white via-[var(--color-primary)]/5 to-[var(--color-secondary)]/10 dark:from-gray-900 dark:via-[var(--color-primary)]/10 dark:to-[var(--color-secondary)]/15">
      {/* Decorative circles */}
      <div className="absolute top-10 sm:top-20 right-5 sm:right-10 w-48 sm:w-72 h-48 sm:h-72 bg-[var(--color-primary)]/10 dark:bg-[var(--color-primary)]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 sm:bottom-20 left-5 sm:left-10 w-64 sm:w-96 h-64 sm:h-96 bg-[var(--color-secondary)]/10 dark:bg-[var(--color-secondary)]/20 rounded-full blur-3xl"></div>
      
      <Container size="lg" className="relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-primary)]/10 dark:bg-[var(--color-primary)]/20 text-[var(--color-primary)] rounded-full text-sm font-medium">
              <Rocket className="w-4 h-4" />
              <span>Emotion Intelligence Engine</span>
            </div>
            
            <Heading level={1}>
              Turn Customer{" "}
              <span className="heading-gradient">Emotion</span> into{" "}
              <span className="text-[var(--color-secondary)]">Business Intelligence</span>
            </Heading>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              Webmerce Analytics transforms customer feedback into growth intelligence. 
              Analyze product reviews, comments, and support data to uncover emotional and 
              behavioral insights that help DTC and FBA brands reduce returns, improve retention, 
              and make smarter product decisions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button variant="filled" size="lg" icon={TrendingUp}>
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg" icon={Play}>
                Watch Demo
              </Button>
            </div>
            
            {/* Brand Values */}
            <div className="flex flex-wrap justify-center sm:justify-start items-center gap-2.5 sm:gap-6 pt-4">
              {brandValues.map((value) => (
                <div key={value.title} className="flex items-center space-x-2">
                  <div className={`w-2 h-2 rounded-full ${value.color === 'primary' ? 'bg-[var(--color-primary)]' : value.color === 'secondary' ? 'bg-[var(--color-secondary)]' : 'bg-[var(--color-tertiary)]'}`}></div>
                  <span className={`font-medium text-sm sm:text-base ${value.color === 'primary' ? 'text-[var(--color-primary)]' : value.color === 'secondary' ? 'text-[var(--color-secondary)]' : 'text-[var(--color-tertiary)]'}`}>
                    {value.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
              
          {/* Right Column - Visual Element */}
          <div className="relative mt-8 md:mt-0">
            <div className="aspect-square bg-gradient-brand rounded-full opacity-20 blur-3xl absolute inset-0"></div>
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl">
              <div className="space-y-4 sm:space-y-6">
                {/* Stats Card */}
                <div className="bg-gradient-to-br from-[var(--color-primary)]/10 to-transparent p-4 sm:p-6 rounded-xl sm:rounded-2xl">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Customer Satisfaction</span>
                    <span className="text-xl sm:text-2xl">⭐</span>
                  </div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold heading-gradient">98.5%</div>
                  <div className="text-xs sm:text-sm text-green-600 mt-2">↑ 12% this month</div>
                </div>
                
                {/* Insights Card */}
                <div className="bg-gradient-to-br from-[var(--color-secondary)]/10 to-transparent p-4 sm:p-6 rounded-xl sm:rounded-2xl">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Returns Reduced</span>
                    <span className="text-xl sm:text-2xl">📉</span>
                  </div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-secondary)]">34%</div>
                  <div className="text-xs sm:text-sm text-green-600 mt-2">↓ Saved $127K</div>
                </div>
                
                {/* Review Analysis */}
                <div className="bg-gradient-to-br from-[var(--color-tertiary)]/5 to-transparent p-4 sm:p-6 rounded-xl sm:rounded-2xl">
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3">Real-time Analysis</div>
                  <div className="flex gap-2">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-gradient-brand rounded opacity-70"
                        style={{ height: `${(i + 1) * 10}px` }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
