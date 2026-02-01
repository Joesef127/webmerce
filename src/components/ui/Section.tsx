import React from "react";

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?: "white" | "gray" | "dark" | "gradient";
}

export default function Section({
  children,
  id,
  className = "",
  background = "white",
}: SectionProps) {
  const backgroundStyles = {
    white: "bg-white dark:bg-gray-900",
    gray: "bg-gray-50 dark:bg-gray-800",
    dark: "bg-[var(--color-tertiary)] dark:bg-gray-950 text-white",
    gradient: "bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900",
  };

  return (
    <section
      id={id}
      className={`py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 relative overflow-hidden transition-colors duration-300 ${backgroundStyles[background]} ${className}`}
    >
      {children}
    </section>
  );
}
