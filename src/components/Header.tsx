"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";
import ThemeToggle from "@/components/ThemeToggle";
import { navigationLinks } from "@/contents/landingPageData";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 shadow-sm transition-colors duration-300">
      <nav className="container mx-auto max-w-7xl px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#" 
            className="flex items-center space-x-2 sm:space-x-3 group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <Image 
              src="/webmerce_logo.png" 
              alt="Webmerce Analytics" 
              width={40} 
              height={40}
              className="w-8 h-8 sm:w-10 sm:h-10 transition-transform group-hover:scale-110"
              priority
            />
            <span className="font-bold text-base sm:text-xl">
              <span className="heading-gradient">Webmerce</span>{" "}
              <span className="text-[var(--color-secondary)]">Analytics</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-gray-600 dark:text-gray-300 hover:text-[var(--color-primary)] dark:hover:text-[var(--color-primary)] transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <ThemeToggle />
            <Button variant="filled" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 animate-fade-in-up">
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="block text-gray-600 dark:text-gray-300 hover:text-[var(--color-primary)] dark:hover:text-[var(--color-primary)] transition-colors font-medium py-2"
              >
                {link.label}
              </a>
            ))}
            <Button variant="filled" size="sm" className="w-full">
              Get Started
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
}
