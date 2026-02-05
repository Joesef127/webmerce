import {Shield, Clock, TrendingUp} from "lucide-react";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import {brandValues} from "@/contents/landingPageData";

export default function Hero() {
  return (
    <Section
      className="pt-24 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-40 pb-10 xs:pb-12 sm:pb-16 md:pb-20 lg:pb-24 bg-gradient-to-br from-white via-[var(--color-primary)]/5 to-[var(--color-secondary)]/10 dark:from-gray-900 dark:via-[var(--color-primary)]/10 dark:to-[var(--color-secondary)]/15">
      {/* Decorative circles */}
      <div
        className="absolute top-5 xs:top-10 sm:top-20 right-3 xs:right-5 sm:right-10 w-32 xs:w-48 sm:w-72 h-32 xs:h-48 sm:h-72 bg-[var(--color-primary)]/10 dark:bg-[var(--color-primary)]/20 rounded-full blur-3xl"></div>
      <div
        className="absolute bottom-5 xs:bottom-10 sm:bottom-20 left-3 xs:left-5 sm:left-10 w-40 xs:w-64 sm:w-96 h-40 xs:h-64 sm:h-96 bg-[var(--color-secondary)]/10 dark:bg-[var(--color-secondary)]/20 rounded-full blur-3xl"></div>

      <Container size="lg" className="relative z-10 flex flex-col lg:grid grid-cols-2 gap-14 justify-center items-center">
        {/* Left Column - Text Content */}
        <div className="space-y-4 xs:space-y-5 sm:space-y-6 md:space-y-8">
          <Badge icon={Shield}>
            AI-Powered Review Intelligence
          </Badge>

          <Heading level={1}>Trust Intelligence for E-Commerce</Heading>
          <div>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              Understand{" "}
              <span className="heading-gradient">
                  when customer trust is strengthening
                </span>{" "}
              and detect{" "}
              <span className="text-[var(--color-secondary)]">
                  early warning signals
                </span>{" "}
              before revenue is impacted.
            </p>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
              Webmerce Analytics continuously monitors customer reviews and
              converts them into
              <span className="heading-gradient">
                  {" "}
                trust, risk, and evidence intelligence
                </span>{" "}
              for modern e-commerce teams.
            </p>
          </div>

          <div className="flex flex-col justify-center sm:justify-start sm:flex-row gap-2.5 xs:gap-3 sm:gap-4">
            <Button variant="filled" size="md" icon={TrendingUp}>
              <a className="w-full h-full" href="#demo-request">Request Demo Access</a>
            </Button>
            <Button variant="outline" size="md" icon={Clock}>
              <a className="w-full h-full" href="#early-access">Request Early Access</a>
            </Button>
          </div>

          {/* Brand Values */}
          <div
            className="flex flex-wrap justify-center sm:justify-start items-center gap-2 xs:gap-3 sm:gap-4 md:gap-6 pt-2 xs:pt-3 sm:pt-4">
            {brandValues.map((value) => (
              <div
                key={value.title}
                className="flex items-center space-x-1.5 xs:space-x-2"
              >
                <div
                  className={`w-1.5 h-1.5 xs:w-2 xs:h-2 rounded-full ${
                    value.color === "primary"
                      ? "bg-[var(--color-primary)]"
                      : value.color === "secondary"
                        ? "bg-[var(--color-secondary)]"
                        : "bg-[var(--color-tertiary)]"
                  }`}
                ></div>
                <span
                  className={`font-medium text-xs xs:text-xs sm:text-sm ${
                    value.color === "primary"
                      ? "text-[var(--color-primary)]"
                      : value.color === "secondary"
                        ? "text-[var(--color-secondary)]"
                        : "text-[var(--color-tertiary)]"
                  }`}
                >
                    {value.title}
                  </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Visual Element */}
        <div className="hidden lg:block">
          <div className="relative space-y-6">
            {/* Stacked Review Cards with Analysis Flow */}
            <div className="relative">
              {/* Background Cards (Stacked Effect) */}
              <div
                className="absolute top-4 left-4 w-full h-48 bg-gray-200 dark:bg-gray-700 rounded-2xl opacity-30 transform rotate-3"></div>
              <div
                className="absolute top-2 left-2 w-full h-48 bg-gray-300 dark:bg-gray-600 rounded-2xl opacity-50 transform rotate-1"></div>

              {/* Main Review Card */}
              <div
                className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-700">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-5 h-5 text-yellow-400">★</div>
                    ))}
                  </div>
                  <Shield className="w-5 h-5 text-[var(--color-primary)]"/>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                  "Product quality exceeded expectations. Fast shipping and great customer service..."
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-500">
                  <span>Amazon Review</span>
                  <span>Verified Purchase</span>
                </div>
              </div>
            </div>

            {/* Analysis Arrow/Flow */}
            <div className="flex items-center justify-center">
              <div className="flex flex-col items-center gap-2">
                <div
                  className="w-12 h-12 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-full flex items-center justify-center animate-pulse">
                  <TrendingUp className="w-6 h-6 text-white"/>
                </div>
                <div className="text-xs font-medium text-gray-600 dark:text-gray-400">AI Analysis</div>
              </div>
            </div>

            {/* Trust Intelligence Result */}
            <div
              className="bg-gradient-to-br from-[var(--color-primary)]/10 via-transparent to-[var(--color-secondary)]/10 dark:from-[var(--color-primary)]/20 dark:to-[var(--color-secondary)]/20 rounded-2xl p-6 border border-[var(--color-primary)]/20 dark:border-[var(--color-primary)]/30">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-gray-800 dark:text-gray-200">Trust Intelligence</h4>
                <div
                  className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-xs font-medium">
                  Strong
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Trust Score</span>
                  <span className="font-bold heading-gradient">92/100</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Risk Level</span>
                  <span className="font-semibold text-green-600 dark:text-green-400">Low</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Sentiment</span>
                  <span className="font-semibold text-[var(--color-secondary)]">Positive</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
