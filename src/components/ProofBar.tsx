"use client";

import { useTheme } from "@/contexts/ThemeContext";
import Image from "next/image";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import { Layers } from "lucide-react";
import { icons } from "@/assets";

export default function ProofBar() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const platforms = [
    {
      name: "Shopify",
      href: "https://www.shopify.com",
      icon: isDark ? icons.shopify.white : icons.shopify.black,
      hasTheme: true,
    },
    {
      name: "Amazon",
      href: "https://www.amazon.com",
      icon: isDark ? icons.amazon.white : icons.amazon.black,
      hasTheme: true,
    },
    {
      name: "Yotpo",
      href: "https://www.yotpo.com",
      icon: icons.yotpo,
      hasTheme: false,
    },
    {
      name: "Bazaarvoice",
      href: "https://www.bazaarvoice.com",
      icon: icons.bazaarvoice,
      hasTheme: false,
    },
    {
      name: "Judge.me",
      href: "https://judge.me",
      icon: icons.judgeme,
      hasTheme: false,
    },
  ];

  return (
    <Section id="platforms" background="gray">
      <Container>
        <div className="text-center mb-6">
          <Badge icon={Layers}>Platform Support</Badge>
        </div>

        <Heading level={2} align="center" className="mb-3 sm:mb-4">
          Where <span className="heading-gradient">It Goes</span>
        </Heading>

        <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12">
          This is the highest-visibility credibility zone on the page."Private beta
          with selected Shopify, Amazon, and agency partners" Ecosystem credibility
          (very safe)
        </p>

        {/* Horizontal Divider with Text */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mb-10 sm:mb-12 md:mb-14">
          <div className="flex-1 h-px bg-gray-300 dark:bg-gray-600 max-w-xs"></div>
          <p className="text-sm sm:text-base font-semibold text-gray-700 dark:text-gray-300 whitespace-nowrap">
            Designed for modern review ecosystems
          </p>
          <div className="flex-1 h-px bg-gray-300 dark:bg-gray-600 max-w-xs"></div>
        </div>

        {/* Platform Icons */}
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 mb-8 sm:mb-10">
          {platforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 opacity-80 hover:opacity-100 transition-all duration-200 hover:scale-105"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
                <Image
                  src={platform.icon}
                  alt={`${platform.name} logo`}
                  width={80}
                  height={80}
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain"
                />
              </div>
              <span className="text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-200">
                {platform.name}
              </span>
            </a>
          ))}
        </div>

        {/* Label */}
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 text-center">
          Integrations in development / supported sources
        </p>
      </Container>
    </Section>
  );
}
