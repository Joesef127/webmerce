"use client";

import Image from "next/image";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import { footerLinks } from "@/contents/landingPageData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-[var(--color-tertiary)] dark:bg-gray-950 text-white py-10 sm:py-12 px-4 sm:px-6 border-t border-white/10 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto max-w-7xl">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-4">
              <Image 
                src="/webmerce_logo.png" 
                alt="Webmerce Analytics" 
                width={40} 
                height={40}
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
              <span className="font-bold text-lg sm:text-xl">
                <span className="heading-gradient">Webmerce</span>{" "}
                <span className="text-white">Analytics</span>
              </span>
            </div>
            <p className="text-sm sm:text-base text-gray-400 dark:text-gray-300 mb-4">
              Turning customer emotion into business intelligence for DTC and eCommerce brands.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 dark:text-gray-300 hover:text-[var(--color-primary)] transition-colors p-2 hover:bg-white/5 rounded-lg"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-[var(--color-primary)] transition-colors p-2 hover:bg-white/5 rounded-lg"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-[var(--color-primary)] transition-colors p-2 hover:bg-white/5 rounded-lg"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">Product</h4>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    onClick={(e) => {
                      if (link.href.startsWith("#")) {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }
                    }}
                    className="hover:text-[var(--color-primary)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="hover:text-[var(--color-primary)] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
            © {currentYear} Webmerce Analytics. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-400">
            {footerLinks.legal.map((link) => (
              <a 
                key={link.label}
                href={link.href} 
                className="hover:text-[var(--color-primary)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
